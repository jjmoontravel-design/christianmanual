// ─── Life Manual — Cloudflare Worker ──────────────────────────────────────
// Handles: AI chat proxy  +  Web Push notifications for scheduled events
//
// KV binding name : LM_KV
// AI binding name : AI
// Cron schedule   : * * * * *  (every 1 minute)

const VAPID_PUBLIC_KEY = 'BOonl0SFTb0Wy2YWBuqznpmhQloG-u2ovo_uNDZPPXGpjPga1pP_Dm9LUeLJ3jJpz6xTyM_UWcnWtx-9A0BqjcI';
// VAPID_PRIVATE_JWK is stored as a Cloudflare Secret (env.VAPID_PRIVATE_JWK) — not hardcoded here.
const VAPID_SUBJECT = 'mailto:jjmoontravel@gmail.com';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const json = (data, s=200) => new Response(JSON.stringify(data), { status:s, headers:{...CORS,'Content-Type':'application/json'} });

// ─── Crypto helpers ────────────────────────────────────────────────────────
const enc = new TextEncoder();

function from64u(s) {
  const b64 = (s + '==='.slice((s.length+3)%4||4)).replace(/-/g,'+').replace(/_/g,'/');
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0));
}
function to64u(buf) {
  const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = '';
  for (const b of u8) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
}
function concat(...bufs) {
  const total = bufs.reduce((n,b) => n + (b.byteLength ?? b.length), 0);
  const out = new Uint8Array(total); let i = 0;
  for (const b of bufs) { const u = b instanceof Uint8Array ? b : new Uint8Array(b); out.set(u, i); i += u.length; }
  return out;
}

// HKDF-Extract: PRK = HMAC-SHA-256(salt, ikm)
async function hkdfExtract(salt, ikm) {
  const key = await crypto.subtle.importKey('raw', salt.byteLength ? salt : new Uint8Array(32), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, ikm));
}

// HKDF-Expand: OKM = T(1)||T(2)||...  trimmed to `len` bytes
async function hkdfExpand(prk, info, len) {
  const key = await crypto.subtle.importKey('raw', prk, {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  let prev = new Uint8Array(0), out = new Uint8Array(0);
  for (let i = 1; out.length < len; i++) {
    const T = new Uint8Array(await crypto.subtle.sign('HMAC', key, concat(prev, info, new Uint8Array([i]))));
    out = concat(out, T); prev = T;
  }
  return out.slice(0, len);
}

// Encrypt push payload per RFC 8291 (Content-Encoding: aes128gcm)
async function encryptPush(subscription, payloadStr) {
  const auth  = from64u(subscription.keys.auth);    // 16 bytes — subscriber auth secret
  const uaPub = from64u(subscription.keys.p256dh);  // 65 bytes — subscriber public key

  // Ephemeral server key pair
  const eph = await crypto.subtle.generateKey({name:'ECDH',namedCurve:'P-256'}, true, ['deriveBits']);
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', eph.publicKey)); // 65 bytes

  // ECDH → shared secret
  const uaPubKey = await crypto.subtle.importKey('raw', uaPub, {name:'ECDH',namedCurve:'P-256'}, false, []);
  const ecdhSecret = new Uint8Array(await crypto.subtle.deriveBits({name:'ECDH',public:uaPubKey}, eph.privateKey, 256));

  // Salt
  const salt = crypto.getRandomValues(new Uint8Array(16));

  // IKM = HKDF(salt=auth, ikm=ecdhSecret, info="WebPush: info\0"||uaPub||asPub, len=32)
  const prk1 = await hkdfExtract(auth, ecdhSecret);
  const ikm  = await hkdfExpand(prk1, concat(enc.encode('WebPush: info\0'), uaPub, asPub), 32);

  // CEK + nonce from salt
  const prk2  = await hkdfExtract(salt, ikm);
  const cek   = await hkdfExpand(prk2, enc.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdfExpand(prk2, enc.encode('Content-Encoding: nonce\0'), 12);

  // AES-128-GCM encrypt  (payload + 0x02 record delimiter)
  const aesKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const plain  = concat(enc.encode(payloadStr), new Uint8Array([2]));
  const ct     = new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv:nonce}, aesKey, plain));

  // Body: salt(16) + rs(4=4096) + keyid_len(1) + keyid(65) + ciphertext
  const rs = new Uint8Array(4); new DataView(rs.buffer).setUint32(0, 4096);
  return concat(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}

// Build + sign VAPID JWT (RFC 8292)
// privJwk is read from env.VAPID_PRIVATE_JWK (Cloudflare Secret)
async function vapidJwt(endpoint, privJwkStr) {
  const origin = new URL(endpoint).origin;
  const now = Math.floor(Date.now() / 1000);
  const hdr  = to64u(enc.encode(JSON.stringify({typ:'JWT',alg:'ES256'})));
  const body = to64u(enc.encode(JSON.stringify({aud:origin,exp:now+43200,sub:VAPID_SUBJECT})));
  const unsigned = `${hdr}.${body}`;
  const privKey = await crypto.subtle.importKey('jwk', JSON.parse(privJwkStr), {name:'ECDSA',namedCurve:'P-256'}, false, ['sign']);
  const sig = await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'}, privKey, enc.encode(unsigned));
  return `${unsigned}.${to64u(new Uint8Array(sig))}`;
}

// Send a single Web Push notification
async function sendPush(subscription, payload, privJwkStr) {
  const body = await encryptPush(subscription, JSON.stringify(payload));
  const jwt  = await vapidJwt(subscription.endpoint, privJwkStr);
  const res  = await fetch(subscription.endpoint, {
    method: 'POST',
    headers: {
      Authorization: `vapid t=${jwt},k=${VAPID_PUBLIC_KEY}`,
      'Content-Encoding': 'aes128gcm',
      'Content-Type': 'application/octet-stream',
      TTL: '86400',
      Urgency: 'high',
    },
    body,
  });
  return res.status; // 201 = delivered, 410 = subscription expired
}

// ─── Cron: fire every minute, check for events due in ~5 min ───────────────
async function checkAlarms(env) {
  const index = JSON.parse(await env.LM_KV.get('users') || '[]');
  const now = Date.now();

  for (const userId of index) {
    const raw = await env.LM_KV.get('user:' + userId);
    if (!raw) continue;
    const data = JSON.parse(raw);
    if (!data.subscription || !data.events?.length) continue;

    // tzOffset: minutes returned by JS getTimezoneOffset() — positive = west of UTC (e.g. EST=300)
    const tzOffset = data.tzOffset ?? 0;

    for (const ev of data.events) {
      const times = nextEventTimes(ev, now, tzOffset);
      for (const { fireAt, label } of times) {
        if (fireAt >= now - 30000 && fireAt < now + 90000) {
          const status = await sendPush(data.subscription, {
            title: '📅 Life Manual',
            body: `${ev.emoji} ${ev.title} ${label}`,
            icon: '/icon-192.png',
            data: { tab: 'schedule' },
          }, env.VAPID_PRIVATE_JWK);
          if (status === 410) {
            data.subscription = null;
            await env.LM_KV.put('user:' + userId, JSON.stringify(data));
          }
        }
      }
    }
  }
}

// Returns up to 2 fire times for an event: 5-min warning + at-start
// tzOffset = getTimezoneOffset() value from the user's browser (minutes, positive = west of UTC)
function nextEventTimes(ev, now, tzOffset = 0) {
  const pad = n => String(n).padStart(2, '0');

  // Shift now to user's local time so UTC date methods give the correct local date
  const localNow = now - tzOffset * 60 * 1000;
  const today = new Date(localNow);
  const todayKey = today.getUTCFullYear()+'-'+pad(today.getUTCMonth()+1)+'-'+pad(today.getUTCDate());
  const dow = today.getUTCDay();
  const results = [];

  let targetDate = null;
  if (ev.repeat === 'daily') {
    targetDate = todayKey;
  } else if (ev.repeat === 'weekly') {
    // ev.date is the user's local date string — use UTC noon to get stable day-of-week
    const evDow = new Date(ev.date + 'T12:00:00Z').getUTCDay();
    if (evDow === dow) targetDate = todayKey;
  } else if (ev.repeat === 'monthly') {
    const evDay = new Date(ev.date + 'T12:00:00Z').getUTCDate();
    if (evDay === today.getUTCDate()) targetDate = todayKey;
  } else if (ev.repeat === 'yearly') {
    if (ev.date.slice(5) === todayKey.slice(5)) targetDate = todayKey;
  } else if (ev.repeat === 'custom' && ev.customDays) {
    const startMs = new Date(ev.date + 'T12:00:00Z').getTime();
    const diff = Math.round((localNow - startMs) / 86400000);
    if (diff >= 0 && diff % ev.customDays === 0) targetDate = todayKey;
  } else {
    if (ev.date === todayKey) targetDate = todayKey;
  }

  if (!targetDate) return results;

  // Parse event time as local, then convert to UTC by adding tzOffset
  // e.g. 8:13 AM Eastern (tzOffset=300) → 8:13 UTC + 300min = 1:13 PM UTC
  const [h, m] = ev.time.split(':').map(Number);
  const evMs = new Date(targetDate + 'T' + pad(h) + ':' + pad(m) + ':00Z').getTime() + tzOffset * 60 * 1000;

  if (evMs - 5*60*1000 > now - 90000) results.push({ fireAt: evMs - 5*60*1000, label: 'in 5 minutes!' });
  if (evMs > now - 90000) results.push({ fireAt: evMs, label: 'is starting now!' });
  return results;
}

// ─── Request router ────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const url = new URL(request.url);

    // ── POST /push/register — save push subscription ──
    if (url.pathname === '/push/register' && request.method === 'POST') {
      const { userId, subscription } = await request.json();
      if (!userId || !subscription) return json({ error: 'missing fields' }, 400);
      const existing = JSON.parse(await env.LM_KV.get('user:' + userId) || '{}');
      existing.subscription = subscription;
      existing.events = existing.events || [];
      await env.LM_KV.put('user:' + userId, JSON.stringify(existing));
      // Add to user index
      const idx = JSON.parse(await env.LM_KV.get('users') || '[]');
      if (!idx.includes(userId)) { idx.push(userId); await env.LM_KV.put('users', JSON.stringify(idx)); }
      return json({ ok: true });
    }

    // ── POST /push/events — sync events list ──
    if (url.pathname === '/push/events' && request.method === 'POST') {
      const { userId, events, tzOffset } = await request.json();
      if (!userId) return json({ error: 'missing userId' }, 400);
      const existing = JSON.parse(await env.LM_KV.get('user:' + userId) || '{}');
      existing.events = events || [];
      if (tzOffset !== undefined) existing.tzOffset = tzOffset;
      await env.LM_KV.put('user:' + userId, JSON.stringify(existing));
      return json({ ok: true });
    }

    // ── POST / — AI chat proxy (existing) ──
    if (url.pathname === '/' && request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch { return json({ error: 'bad request' }, 400); }
      const { message, name = 'friend', character = 'Barney' } = body;
      if (!message) return json({ error: 'missing message' }, 400);
      // Guard the AI binding so a missing binding never throws a 1101 (which breaks CORS).
      if (!env.AI) return json({ reply: null, error: 'AI binding not configured' });
      const system = `You are ${character}, a warm and practical life coach inside the Life Manual app. The user's name is ${name}. Keep replies to 2–4 sentences. Use 1 relevant emoji at the end. Be encouraging and specific. No filler phrases like "Great question!" — just answer directly and helpfully.`;
      try {
        const aiRes = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [{ role:'system', content:system }, { role:'user', content:message }],
          max_tokens: 256,
        });
        return json({ reply: aiRes?.response ?? null });
      } catch (e) {
        // Return 200 with reply:null so the app uses its graceful fallback instead of failing.
        return json({ reply: null, error: String(e && e.message || e) });
      }
    }

    // ── GET /push/debug?userId=… — inspect stored user data ──
    if (url.pathname === '/push/debug' && request.method === 'GET') {
      const userId = url.searchParams.get('userId');
      if (!userId) return json({ error: 'missing userId' }, 400);
      const raw = await env.LM_KV.get('user:' + userId);
      if (!raw) return json({ error: 'user not found in KV' }, 404);
      const data = JSON.parse(raw);
      return json({
        hasSubscription: !!data.subscription,
        tzOffset: data.tzOffset,
        eventCount: (data.events || []).length,
        events: (data.events || []).map(e => ({ title: e.title, date: e.date, time: e.time, repeat: e.repeat })),
      });
    }

    // ── POST /push/test — send an immediate test push to verify the pipeline ──
    if (url.pathname === '/push/test' && request.method === 'POST') {
      const { userId } = await request.json();
      if (!userId) return json({ error: 'missing userId' }, 400);
      const raw = await env.LM_KV.get('user:' + userId);
      if (!raw) return json({ error: 'user not found' }, 404);
      const data = JSON.parse(raw);
      if (!data.subscription) return json({ error: 'no subscription on file' }, 400);
      const status = await sendPush(data.subscription, {
        title: '✅ Life Manual',
        body: 'Push notifications are working!',
        icon: '/icon-192.png',
        data: { tab: 'schedule' },
      }, env.VAPID_PRIVATE_JWK);
      return json({ ok: true, status });
    }

    return new Response('Not found', { status: 404, headers: CORS });
  },

  async scheduled(event, env) {
    await checkAlarms(env);
  },
};
