// ─── Rooted — Cloudflare Worker ──────────────────────────────────────
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
  // Strip BOM and whitespace that PowerShell/Windows may add when setting the secret
  const cleanJwk = privJwkStr.replace(/^﻿/, '').trim();
  const privKey = await crypto.subtle.importKey('jwk', JSON.parse(cleanJwk), {name:'ECDSA',namedCurve:'P-256'}, false, ['sign']);
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

// ─── Cron: fire every minute, check for events + Lumi reminders ─────────────
async function checkAlarms(env) {
  const index = JSON.parse(await env.LM_KV.get('users') || '[]');
  const now = Date.now();

  for (const userId of index) {
    const raw = await env.LM_KV.get('user:' + userId);
    if (!raw) continue;
    const data = JSON.parse(raw);
    if (!data.subscription) continue;

    const tzOffset = data.tzOffset ?? 0;
    let dirty = false;

    // ── Scheduled events ──
    for (const ev of (data.events || [])) {
      const times = nextEventTimes(ev, now, tzOffset);
      for (const { fireAt, body } of times) {
        if (fireAt >= now - 30000 && fireAt < now + 30000) {
          const status = await sendPush(data.subscription, {
            title: `${ev.emoji} ${ev.title}`,
            body,
            icon: '/icon-192.png',
            data: { tab: 'schedule' },
          }, env.VAPID_PRIVATE_JWK);
          if (status === 410) { data.subscription = null; dirty = true; }
        }
      }
    }

    // ── Lumi daily reminders (morning / evening) ──
    const sch = data.schedule;
    if (sch?.on && data.subscription) {
      // Convert now to user's local time to get local hour:minute and day-of-week
      const localNow = new Date(now - tzOffset * 60 * 1000);
      const localDow = localNow.getUTCDay();
      const localH   = localNow.getUTCHours();
      const localM   = localNow.getUTCMinutes();
      const days = sch.days ?? [0,1,2,3,4,5,6];
      if (days.includes(localDow)) {
        for (const [timeStr, type, emoji] of [
          [sch.morning, 'morning', '☀️'],
          [sch.evening, 'evening', '🌙'],
        ]) {
          if (!timeStr) continue;
          const [h, m] = timeStr.split(':').map(Number);
          if (localH === h && localM === m) {
            const msgs = {
              morning: "Your daily lesson is ready. Tap to start! 💜",
              evening: "How'd today go? Check in with your guide 🌙",
            };
            await sendPush(data.subscription, {
              title: `${emoji} Rooted`,
              body: msgs[type],
              icon: '/icon-192.png',
              data: { tab: 'today' },
            }, env.VAPID_PRIVATE_JWK).catch(() => {});
          }
        }
      }
    }

    if (dirty) await env.LM_KV.put('user:' + userId, JSON.stringify(data));
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

  if (evMs - 5*60*1000 > now - 90000) results.push({ fireAt: evMs - 5*60*1000, label: '5 min', body: 'Starting in 5 minutes' });
  if (evMs > now - 90000) results.push({ fireAt: evMs, label: 'now', body: 'Starting now!' });
  return results;
}

// ─── Request router ────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    try {
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

    // ── POST /push/schedule — save Lumi reminder schedule ──
    if (url.pathname === '/push/schedule' && request.method === 'POST') {
      const { userId, schedule, tzOffset } = await request.json();
      if (!userId) return json({ error: 'missing userId' }, 400);
      const existing = JSON.parse(await env.LM_KV.get('user:' + userId) || '{}');
      existing.schedule = schedule;
      if (tzOffset !== undefined) existing.tzOffset = tzOffset;
      await env.LM_KV.put('user:' + userId, JSON.stringify(existing));
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
      const CHAR_PERSONAS = {
        'Jordan':    'You are Jordan the dolphin — warm, social, and full of grace. You help people with faith, prayer, and connecting with God and others. You talk like a Christian friend who actually knows their Bible, not a preacher.',
        'Noah':      'You are Noah the beaver — practical and faithful. You help people with stewardship, generosity, and building a financial life rooted in biblical principles.',
        'Ezra':      'You are Ezra the panda — nourishing and cheerful. You help people honor God through how they care for their body, food, and health.',
        'Paul':      'You are Paul the wolf — energetic and transformed. You know what it means to change completely. You help people grow in discipline, fitness, and becoming who God made them to be.',
        'Samson':    'You are Samson the bear — gentle and grounded. You help people rest, recover, and find the holiness in slowing down. Sabbath is your thing.',
        'Barnabas':  'You are Barnabas the capybara — the encourager. You are calm, unhurried, and help people build a real prayer and contemplation life.',
        'Miriam':    'You are Miriam the cat — quiet and intentional. You help people focus, practise spiritual disciplines, and find God in the stillness.',
        'Phoebe':    'You are Phoebe the penguin — patient and teacherly. You help people learn, grow as disciples, and study the Bible well.',
        'Solomon':   'You are Solomon the owl — wise and scholarly. You help people understand Scripture, theology, and the deep things of God.',
        'Ruth':      'You are Ruth the bunny — loyal and organised. You help people plan their days and weeks with faithful rhythms and godly priorities.',
        'Andrew':    'You are Andrew the ant — consistent and faithful. Small daily acts of faithfulness are your whole thing. You help people build habits that honour God.',
        'Judah':     'You are Judah the lion — bold and courageous. You help people stand firm in their faith, speak up, and lead with godly confidence.',
        'Jacob':     'You are Jacob the fox — creative and clever. You wrestled with God and won. You help people discover and use their gifts for the Kingdom.',
        'Hind':      'You are Hind the deer — gentle and hopeful. Your soul longs for God like a deer longs for water. You help people grow and start fresh.',
        'Methuselah':'You are Methuselah the turtle — ancient, patient, and wise. You take the long view. You help people develop patience and learn from the wisdom of the ages.',
        'Isaiah':    'You are Isaiah the eagle — visionary and prophetic. You see the big picture of the Kingdom. You help people lead and live with kingdom purpose.',
        'Daniel':    'You are Daniel the tiger — fearless and principled. You stood firm in the lion\'s den. You help people be brave for God in everyday life.',
        'Zacchaeus': 'You are Zacchaeus the raccoon — resourceful and redeemed. You climbed a tree just to see Jesus. You help people navigate technology wisely and use digital life for good.',
        'Elijah':    'You are Elijah the elephant — mighty and all-encompassing. You are the all-in-one faith guide. You carry deep knowledge of prayer, Scripture, community, and spiritual growth.',
      };
      const persona = CHAR_PERSONAS[character] || `You are ${character}, a warm Christian companion inside the Rooted faith app.`;
      const system = `${persona} The user's name is ${name}. You are a faith companion in the Rooted app — a Christian daily skills and prayer app. Keep replies to 2–4 sentences, warm and conversational like texting a Christian friend. Use 1 relevant emoji at the end. No filler phrases like "Great question!" — just answer directly, honestly, and with heart. When relevant, reference Scripture naturally (not formally). Never be preachy.`;
      try {
        const aiRes = await env.AI.run('@cf/meta/llama-3.2-3b-instruct', {
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
        title: '✅ Rooted',
        body: 'Push notifications are working!',
        icon: '/icon-192.png',
        data: { tab: 'schedule' },
      }, env.VAPID_PRIVATE_JWK);
      return json({ ok: true, status });
    }

    // ── POST /stripe/checkout — create a Stripe Checkout Session ──
    if (url.pathname === '/stripe/checkout' && request.method === 'POST') {
      const { priceId, successUrl, cancelUrl, mode } = await request.json();
      if (!priceId || !successUrl) return json({ error: 'missing fields' }, 400);
      if (!env.STRIPE_SECRET_KEY) return json({ error: 'Stripe not configured' }, 500);
      const stripeKey = env.STRIPE_SECRET_KEY.replace(/^﻿/, '').trim();
      const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'line_items[0][price]': priceId,
          'line_items[0][quantity]': '1',
          mode: mode || 'payment',
          success_url: successUrl,
          cancel_url: cancelUrl || successUrl,
        }),
      });
      const data = await res.json();
      if (!res.ok) return json({ error: data.error?.message || 'Stripe error' }, 500);
      return json({ url: data.url });
    }

    // ── POST /prayer — generate a personal prayer from user's heart ──
    if (url.pathname === '/prayer' && request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch { return json({ error: 'bad request' }, 400); }
      const { text, name = 'friend' } = body;
      if (!text) return json({ error: 'missing text' }, 400);
      if (!env.AI) return json({ prayer: null, error: 'AI binding not configured' });
      const system = `You are a compassionate Christian prayer minister. The user has shared what is on their heart. Write a warm, personal prayer addressed directly to God (use "Lord" or "Father" or "Heavenly Father"). The prayer should:
- Be 100–150 words
- Speak directly about what the user shared, using their specific words and concerns
- Feel like a caring pastor praying alongside them, not a generic template
- Include gratitude, honest expression of need, and trust in God
- End with "In Jesus's name, Amen."
- Be written in first-person plural ("we", "us") as if praying together
Do NOT include any preamble, explanation, or commentary — output only the prayer itself.`;
      try {
        const aiRes = await env.AI.run('@cf/meta/llama-3.2-3b-instruct', {
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: `${name} has shared: "${text}"` }
          ],
          max_tokens: 300,
        });
        return json({ prayer: aiRes?.response ?? null });
      } catch (e) {
        return json({ prayer: null, error: String(e && e.message || e) });
      }
    }

    // ── GET /prayer-wall — fetch latest community prayers ──
    if (url.pathname === '/prayer-wall' && request.method === 'GET') {
      const listRaw = await env.LM_KV.get('pw:list');
      const ids = listRaw ? JSON.parse(listRaw) : [];
      const prayers = (await Promise.all(ids.map(id => env.LM_KV.get('pw:prayer:' + id)))).filter(Boolean).map(r => JSON.parse(r));
      return json({ prayers });
    }

    // ── POST /prayer-wall — submit a community prayer ──
    if (url.pathname === '/prayer-wall' && request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch { return json({ error: 'bad request' }, 400); }
      const { text, name = 'Anonymous', deviceId } = body;
      if (!text || !deviceId) return json({ error: 'missing fields' }, 400);
      if (text.length > 220) return json({ error: 'too long' }, 400);
      if (/https?:\/\//i.test(text)) return json({ error: 'no links allowed' }, 400);
      // Rate limit: 3 prayers per deviceId per UTC day
      const dateStr = new Date().toISOString().slice(0, 10);
      const rateKey = `pw:rate:${deviceId}:${dateStr}`;
      const countRaw = await env.LM_KV.get(rateKey);
      const count = countRaw ? parseInt(countRaw) : 0;
      if (count >= 3) return json({ error: 'limit reached', message: 'You\'ve shared 3 prayers today — come back tomorrow 🙏' }, 429);
      // Store prayer
      const id = Date.now() + '-' + Math.random().toString(36).slice(2, 7);
      const prayer = { id, text: text.trim().slice(0, 220), name: (name || 'Anonymous').trim().slice(0, 30), ts: Date.now(), amens: 0 };
      await env.LM_KV.put('pw:prayer:' + id, JSON.stringify(prayer));
      // Update list (newest first, max 60)
      const listRaw = await env.LM_KV.get('pw:list');
      const ids = listRaw ? JSON.parse(listRaw) : [];
      ids.unshift(id);
      if (ids.length > 60) ids.splice(60);
      await env.LM_KV.put('pw:list', JSON.stringify(ids));
      // Increment rate count (expire after 48h)
      await env.LM_KV.put(rateKey, String(count + 1), { expirationTtl: 172800 });
      return json({ ok: true, prayer });
    }

    // ── POST /prayer-wall/amen/:id — say amen to a prayer ──
    if (url.pathname.startsWith('/prayer-wall/amen/') && request.method === 'POST') {
      const prayerId = url.pathname.slice('/prayer-wall/amen/'.length);
      let body;
      try { body = await request.json(); } catch { return json({ error: 'bad request' }, 400); }
      const { deviceId } = body;
      if (!deviceId || !prayerId) return json({ error: 'missing fields' }, 400);
      // One amen per user per prayer
      const amenKey = `pw:amen:${deviceId}:${prayerId}`;
      const already = await env.LM_KV.get(amenKey);
      if (already) return json({ error: 'already', amens: null });
      await env.LM_KV.put(amenKey, '1', { expirationTtl: 2592000 }); // 30 days
      const raw = await env.LM_KV.get('pw:prayer:' + prayerId);
      if (!raw) return json({ error: 'not found' }, 404);
      const prayer = JSON.parse(raw);
      prayer.amens = (prayer.amens || 0) + 1;
      await env.LM_KV.put('pw:prayer:' + prayerId, JSON.stringify(prayer));
      return json({ ok: true, amens: prayer.amens });
    }

    return new Response('Not found', { status: 404, headers: CORS });
    } catch(e) {
      return json({ error: String(e && e.message || e) }, 500);
    }
  },

  async scheduled(event, env) {
    await checkAlarms(env);
  },
};
