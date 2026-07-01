
// ============ STATE ============
// Set this to your Cloudflare Worker URL after deploying (leave empty to use local replies only)
const AI_WORKER_URL = "https://throbbing-bush-2964.jjmoontravel.workers.dev";
const VAPID_PUBLIC_KEY = "BMvjBh3udeYq2FstcB8Ru2njHwrMKmR4OKeYCH94inrO2RvuTWQc29l2iBQJasiBrAVq-BgRzY9IAbm9fWyUaZw";

// ── Push notification helpers ──────────────────────────────────────────────
function getPushUserId(){
  let id=localStorage.getItem("lm.pushId");
  if(!id){id=crypto.randomUUID();localStorage.setItem("lm.pushId",id);}
  return id;
}
function vapidKey(){
  const b64=(VAPID_PUBLIC_KEY+"===".slice((VAPID_PUBLIC_KEY.length+3)%4||4)).replace(/-/g,"+").replace(/_/g,"/");
  return Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
}
async function getPushSubscription(){
  if(!("serviceWorker" in navigator&&"PushManager" in window))return null;
  const reg=await navigator.serviceWorker.ready.catch(()=>null);
  if(!reg)return null;
  return reg.pushManager.getSubscription();
}
async function subscribePush(){
  if(!("serviceWorker" in navigator&&"PushManager" in window))return null;
  const reg=await navigator.serviceWorker.ready.catch(()=>null);
  if(!reg)return null;
  try{
    const sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:vapidKey()});
    await fetch(AI_WORKER_URL+"/push/register",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({userId:getPushUserId(),subscription:sub.toJSON()})}).catch(()=>{});
    await syncEventsToWorker();
    return sub;
  }catch(e){return null;}
}
async function syncEventsToWorker(){
  const sub=await getPushSubscription();
  if(!sub)return;
  fetch(AI_WORKER_URL+"/push/events",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({userId:getPushUserId(),events:state.events})}).catch(()=>{});
}

const K={age:"lifemanual.age",done:"lifemanual.done",daily:"lifemanual.daily",streak:"lifemanual.streak",xp:"lifemanual.xp",theme:"lifemanual.theme",fs:"lifemanual.fontsize",history:"lifemanual.history",name:"lifemanual.name",goal:"lifemanual.goal",events:"lifemanual.events",character:"lifemanual.character"};
let state={
  age:parseInt(localStorage.getItem(K.age))||null,
  name:localStorage.getItem(K.name)||"",
  goal:localStorage.getItem(K.goal)||"",
  done:JSON.parse(localStorage.getItem(K.done)||"{}"),
  daily:JSON.parse(localStorage.getItem(K.daily)||"{}"),
  streak:JSON.parse(localStorage.getItem(K.streak)||'{"n":0,"last":null}'),
  xp:parseInt(localStorage.getItem(K.xp))||0,
  history:JSON.parse(localStorage.getItem(K.history)||"{}"),
  events:JSON.parse(localStorage.getItem("lifemanual.events")||"[]"),
  character:localStorage.getItem("lifemanual.character")||"",
  tab:"today", search:"", bandFilter:null, libFilter:"vocab", journeyMode:"path"
};
BANDS.forEach(b=>b.skills.forEach((s,i)=>s.id=b.id+"-"+i));
const SLOTS=["skill","vocab","body","money","mind","world","challenge"];
const LEVELS=["Initiate","Apprentice","Explorer","Builder","Mentor","Sage","Luminary","Legend"];
const CAT={
  skill:{label:"Skill of the day",icon:"🛠️",color:"#818cf8"},
  vocab:{label:"Word of the day",icon:"📖",color:"#a78bfa"},
  body:{label:"Body intel",icon:"🫀",color:"#f87171"},
  money:{label:"Money move",icon:"💰",color:"#fbbf24"},
  mind:{label:"Mind hack",icon:"🧠",color:"#22d3ee"},
  world:{label:"How the world works",icon:"🌍",color:"#34d399"},
  challenge:{label:"Today's challenge",icon:"⚡",color:"#fb7185"}
};

const $=s=>document.querySelector(s);

// ============ GUIDE CHARACTER ============
function getChar(){return CHARACTERS.find(c=>c.id===state.character)||CHARACTERS[0];}
// Renders the chosen guide's face. Tries characters/<id>.png, then .jpg,
// then falls back to the emoji automatically — so it works no matter the format.
function charFaceHTML(c){
  // Try jpg first (all our avatars are jpg), fall back to png, then emoji
  return `<img src="characters/${c.id}.jpg" alt="${c.name}" style="width:100%;height:100%;object-fit:contain;display:block" onerror="charFallback(this,'${c.id}','${c.emoji}')">`;
}
window.charFallback=function(img,id,emoji){
  if(!img.dataset.triedPng){img.dataset.triedPng="1";img.src="characters/"+id+".png";return;}
  charErr(img,emoji);
};
// Animated video avatar (e.g. a Meta-AI "idle" clip). Tries characters/<id>-idle.mp4;
// if there's no video it quietly swaps to the still image (png→jpg→emoji). Used only
// on the big avatars (chat header + Lumi bubble) so we don't decode many videos at once.
function charVideoHTML(c){
  return `<video autoplay loop muted playsinline preload="auto" style="width:100%;height:100%;object-fit:contain;display:block;background:#fff"><source src="characters/${c.id}-idle.mp4" type="video/mp4" onerror="charNoVid(this,'${c.id}','${c.emoji}')"></video>`;
}
window.charNoVid=function(srcEl,id,emoji){
  const v=srcEl.parentNode; if(!v)return;
  const img=document.createElement("img");
  img.alt=""; img.style.cssText="width:100%;height:100%;object-fit:contain;display:block";
  img.onerror=function(){charFallback(this,id,emoji);};
  v.classList.forEach(cls=>{if(/^mood-|^life-/.test(cls))img.classList.add(cls);});
  img.src="characters/"+id+".png";
  v.replaceWith(img);
};
window.charErr=function(img,emoji){
  const s=document.createElement("span");
  s.textContent=emoji;
  s.style.fontSize=Math.round((img.clientWidth||40)*0.62)+"px";
  s.style.lineHeight="1";
  img.replaceWith(s);
};

function saveAll(){
  localStorage.setItem(K.done,JSON.stringify(state.done));
  localStorage.setItem(K.daily,JSON.stringify(state.daily));
  localStorage.setItem(K.streak,JSON.stringify(state.streak));
  localStorage.setItem(K.xp,state.xp);
  localStorage.setItem(K.history,JSON.stringify(state.history));
  localStorage.setItem(K.events,JSON.stringify(state.events));
  if(state.character)localStorage.setItem(K.character,state.character);
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove("show"),2000);}
function bandFor(age){if(age==null)return null;const a=Math.min(Math.max(age,1),80);return BANDS.find(b=>a>=b.min&&a<=b.max)||BANDS[BANDS.length-1];}
function bandProgress(b){const d=b.skills.filter(s=>state.done[s.id]).length;return{done:d,total:b.skills.length,pct:Math.round(d/b.skills.length*100)};}
function level(){const lv=Math.min(Math.floor(state.xp/300),LEVELS.length-1);return{lv,name:LEVELS[lv],into:state.xp-lv*300,next:lv<LEVELS.length-1?300:null};}

// ============ DAILY ENGINE ============
function todayKey(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function yesterdayKey(){const d=new Date();d.setDate(d.getDate()-1);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function dayNum(){const d=new Date();return Math.round((new Date(d.getFullYear(),d.getMonth(),d.getDate())-new Date(2026,0,1))/864e5);}
function ensureDaily(){
  const key=todayKey();
  if(state.daily.date!==key){state.daily={date:key,got:{}};saveAll();}
  if(!state.daily.skillId){
    const b=bandFor(state.age);
    if(b){
      let pool=b.skills.filter(s=>!state.done[s.id]);
      if(!pool.length)pool=BANDS.flatMap(x=>x.skills).filter(s=>!state.done[s.id]);
      if(!pool.length)pool=b.skills;
      state.daily.skillId=pool[dayNum()%pool.length].id;
      saveAll();
    }
  }
}
function skillById(id){for(const b of BANDS){const s=b.skills.find(x=>x.id===id);if(s)return{skill:s,band:b};}return null;}
function pick(pool,mult,off){const n=dayNum();return pool[((n*mult+off)%pool.length+pool.length)%pool.length];}
function dailyContent(){
  const found=state.daily.skillId?skillById(state.daily.skillId):null;
  return{
    skill:found,
    vocab:pick(DAILY.vocab,7,0), body:pick(DAILY.body,11,3), money:pick(DAILY.money,13,1),
    mind:pick(DAILY.mind,17,2), world:pick(DAILY.world,19,4), challenge:pick(DAILY.challenge,23,5)
  };
}
function gotCount(){return SLOTS.filter(s=>state.daily.got[s]).length;}
function markGot(slot){
  if(state.daily.got[slot])return;
  // Capture bubble rect before state change for the guide cheer position
  const card=document.querySelector(`.bubble[data-slot="${slot}"]`);
  const rect=card?card.getBoundingClientRect():null;
  if(card){card.classList.add("sweeping");setTimeout(()=>card.classList.remove("sweeping"),550);}
  state.daily.got[slot]=true;
  state.xp+=10;
  if(slot==="skill"&&state.daily.skillId)state.done[state.daily.skillId]=true;
  const complete=gotCount()===SLOTS.length;
  state.history[todayKey()]=gotCount();
  if(complete){
    state.xp+=30;
    const y=yesterdayKey(),t=todayKey();
    if(state.streak.last!==t){state.streak.n=(state.streak.last===y)?state.streak.n+1:1;state.streak.last=t;}
    toast("⚡ Daily Upload complete! 🔥 "+state.streak.n+"-day streak");
    confetti();
    if(window.meteorShower)window.meteorShower(24);
    celebrate(28,90);          // big finish: lots of bubbles + stars rushing in
    setMood("dance");          // guide dances when the day is complete
  }else{
    toast("+10 XP — "+(SLOTS.length-gotCount())+" to go");
    celebrate(12,30);          // each task: bubbles drifting + a few pops
    setMood("happy",1300);     // a happy bounce for each finished task
    // Offer notifications after first lesson tap
    if(gotCount()===1)setTimeout(showNotifBanner,1500);
  }
  saveAll();
  if(rect)showMiniLumi(rect,complete);
  setTimeout(()=>render(),420);
}

// ============ MINI LUMI CHEER ============
function showMiniLumi(rect,isFinal){
  const c=getChar();
  const labels=["Nice! ✨","Got it! 💜","Yes! 🌟","Smart! 🧠","Boom! ⚡","Done! ✓","Level up! 🔥"];
  const label=isFinal?"🎉 Complete!":labels[Math.floor(Math.random()*labels.length)];
  const el=document.createElement("div");
  el.className="mini-lumi";
  el.innerHTML=`<div class="mini-lumi-face">${charFaceHTML(c)}</div><div class="cl">${label}</div>`;
  const x=Math.min(Math.max(rect.right-80,10),window.innerWidth-90);
  const y=Math.max(rect.top-10,10);
  el.style.cssText=`position:fixed;top:${y}px;left:${x}px;z-index:200;animation:miniLumiPop 1.65s cubic-bezier(.2,.8,.2,1) both`;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1750);
}

// ============ NAV GLIDER ============
function updateNavGlider(){
  const active=document.querySelector("nav button.active");
  const glider=document.getElementById("nav-glider");
  if(!active||!glider)return;
  const navEl=document.getElementById("nav");
  const nr=navEl.getBoundingClientRect();
  const br=active.getBoundingClientRect();
  glider.style.left=(br.left-nr.left)+"px";
  glider.style.width=br.width+"px";
  const colors={
    today:["rgba(245,158,11,.14)","rgba(245,158,11,.38)"],
    journey:["rgba(34,211,238,.12)","rgba(34,211,238,.32)"],
    guides:["rgba(167,139,250,.15)","rgba(167,139,250,.38)"],
    schedule:["rgba(52,211,153,.12)","rgba(52,211,153,.32)"],
    you:["rgba(251,113,133,.12)","rgba(251,113,133,.32)"]
  };
  const[bg,bc]=colors[active.dataset.tab]||colors.today;
  glider.style.background=bg;
  glider.style.borderColor=bc;
}

// ============ RENDER ============
function render(){
  document.body.setAttribute("data-tab",state.tab);
  document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("active",x.dataset.tab===state.tab));
  setTimeout(updateNavGlider,0);
  const v=$("#view");
  const page=state.tab+":"+(state.guideId||"")+":"+state.journeyMode+":"+state.libFilter;
  v.classList.toggle("no-anim",render._last===page&&!render._force);
  render._last=page; render._force=false;
  if(state.tab==="today")return renderToday(v);
  if(state.tab==="journey")return renderJourney(v);
  if(state.tab==="guides")return renderGuides(v);
  if(state.tab==="schedule")return renderSchedule(v);
  renderYou(v);
}

function renderGuides(v){
  if(state.guideId){
    const g=GUIDES.find(x=>x.id===state.guideId);
    if(!g){state.guideId=null;return renderGuides(v);}
    v.innerHTML=`<button class="btn btn-ghost" data-guideback="1" style="margin:0 0 12px">← All guides</button>
      <div class="card hero"><div class="kicker">Life guide</div>
        <div class="big">${g.e} ${g.t}</div><div class="sub">${g.tag}</div></div>
      ${g.sections.map(s=>`<div class="card module">
        <div class="title">${s.h}</div>
        <ol>${s.steps.map(x=>`<li>${x}</li>`).join("")}</ol></div>`).join("")}
      ${g.note?`<div class="card" style="border-color:#155e4d"><div class="bodytext" style="color:var(--muted);font-size:.92rem;line-height:1.5">💚 ${g.note}</div></div>`:""}
      <button class="btn btn-ghost" data-guideback="1">← All guides</button>`;
    window.scrollTo(0,0);
    return;
  }
  v.innerHTML=`<div class="card hero"><div class="kicker">For the moments nobody prepared you for</div>
      <div class="big">🧭 Life Guides</div>
      <div class="sub">Some of us didn't have a parent or role model to teach us these things. That ends here. Pick what you're facing — no shame, no judgment, just the manual.</div></div>
    ${GUIDES.map(g=>`<div class="card skill" data-guide="${g.id}" style="cursor:pointer">
      <div class="top"><span class="emoji">${g.e}</span>
        <div><div class="t">${g.t}</div><div class="why">${g.tag}</div></div>
        <span style="margin-left:auto;color:var(--muted);font-size:1.2rem;flex:none">›</span></div></div>`).join("")}
    <div class="section-note" style="text-align:center">In immediate danger? Call 911. Dark thoughts? Call or text 988, any hour — free, confidential humans who want to talk to you.</div>`;
}

// Free-chat messages typed into the "Ask your guide" bar (this session only).
let chatLog=[];
function escHtml(s){return s.replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));}
function scrollChatEnd(){const t=document.querySelector(".chat-thread");if(t&&t.lastElementChild)t.lastElementChild.scrollIntoView({behavior:"smooth",block:"end"});}

// ===== GUIDE MOOD (animated avatar emotions) =====
let guideMood="idle";
function applyMood(){
  document.querySelectorAll(".chat-face img,.chat-face video,.lumi-face img,.lumi-face video").forEach(el=>{
    el.classList.remove("mood-happy","mood-sad","mood-dance");
    if(guideMood!=="idle")el.classList.add("mood-"+guideMood);
  });
}
function setMood(m,revertMs){
  guideMood=m; applyMood();
  clearTimeout(setMood._t);
  if(revertMs)setMood._t=setTimeout(()=>{guideMood="idle";applyMood();},revertMs);
}
// "Moments of life": every few seconds the main avatar does a small cute move
// (hop/wiggle/nod/pop/bounce) — only when idle, so it never fights happy/sad/dance.
const LIFE_MOVES=["life-hop","life-wiggle","life-nod","life-pop","life-bounce"];
function avatarPing(){
  if(guideMood==="idle"&&!document.hidden){
    const mv=LIFE_MOVES[(Math.random()*LIFE_MOVES.length)|0];
    document.querySelectorAll(".chat-face img,.chat-face video,.lumi-face img,.lumi-face video").forEach(el=>{
      el.classList.add(mv);
      setTimeout(()=>el.classList.remove(mv),1000);
    });
  }
  setTimeout(avatarPing, 2600+Math.random()*3200);
}

// Curated keyword → Life Guide map (whole-word match, so "rent" can't hit "parent").
const GUIDE_HINTS=[
  {id:"moneycrisis", kw:["broke","can't pay rent","can't pay bills","behind on rent","can't afford","no money","out of money","eviction","evicted","debt collector","behind on bills","can't make rent"]},
  {id:"firstjob",    kw:["job","interview","boss","resume","hired","fired","coworker","workplace"]},
  {id:"parentloss",  kw:["my dad died","my mom died","lost my father","lost my mother","dad passed","mom passed","parent died","parent passed","my father died","my mother died","death of a parent","lost a parent"]},
  {id:"grief",       kw:["died","die","death","loss","lost","grief","grieving","funeral","passed","mourning"]},
  {id:"heartbreak",  kw:["heartbreak","heartbroken","breakup","dumped"]},
  {id:"friends",     kw:["lonely","loneliness","friends","friend","alone","isolated","nobody"]},
  {id:"bullying",    kw:["bully","bullied","bullying","harassed","harassment","teased","picked"]},
  {id:"hardtimes",   kw:["depressed","depression","hopeless","numb","worthless","darkest","heavy"]},
  {id:"pregnancy",   kw:["pregnant","pregnancy"]},
  {id:"period",      kw:["period","tampon","cramps","menstruation"]},
  {id:"puberty",     kw:["puberty","developing"]},
  {id:"cooking",     kw:["cook","cooking","recipe","meal","kitchen","hungry","groceries"]},
  {id:"grooming",    kw:["shave","shaving","razor","grooming","beard"]},
  {id:"newparent",   kw:["baby","newborn","diaper","infant","nursing"]},
  {id:"onyourown",   kw:["homeless","apartment","lease","independent"]}
];
function matchGuide(low){
  const words=new Set(low.split(/[^a-z]+/).filter(Boolean));
  let best=null,score=0;
  GUIDE_HINTS.forEach(h=>{let s=0;h.kw.forEach(k=>{if(k.includes(" ")?low.includes(k):words.has(k))s++;});if(s>score){score=s;best=h.id;}});
  return best;
}
// Search the local reply library (data-replies.js) for the best matching answer.
// Uses whole-word matching for single words, substring for phrases.
function findReply(low){
  const words=new Set(low.split(/[^a-z0-9]+/).filter(Boolean));
  let best=null, bestScore=0;
  for(const r of REPLIES){
    let score=0;
    for(const kw of r.kw){
      if(kw.includes(" ")){if(low.includes(kw))score+=2;}
      else if(words.has(kw))score+=1;
    }
    if(score>bestScore){bestScore=score;best=r;}
  }
  return bestScore>=1?best:null;
}

// Builds the guide's reply. Checks the local knowledge library first (instant, offline),
// then falls back to guide-pointer and daily lesson hints.
function guideReply(t){
  const c=getChar(), low=t.toLowerCase(), nm=state.name||"friend", d=dailyContent();
  // Crisis — always first
  if(/(suicid|kill myself|end it all|self.?harm|hurt myself|don'?t want to (live|be here|wake up))/.test(low))
    return {mood:"sad", text:`I'm so glad you told me, ${nm}. 💜 You matter, and you don't have to carry this alone. Please call or text <b>988</b> right now — real people, any hour, free. I'm right here with you.`};
  // Gratitude
  if(/(thank you|love you|appreciate|you'?re the best|awesome|amazing)/.test(low))
    return {mood:"happy", text:`Aw, ${nm}! ${c.emoji} That means a lot. I'm proud of you — let's keep going.`};
  // Sadness/emotional flag (affects tone of answers below)
  const sad=/(sad|down|depress|lonely|anxious|worried|scared|cry|crying|tired|exhausted|stress|overwhelm|hurt|grief|griev|breakup|broke up|heartbreak)/.test(low);
  // 1. Check local knowledge library first
  const reply=findReply(low);
  if(reply){
    const prefix=sad?`I hear you, ${nm}. 💜 Here's something that might help: `:"";
    return {mood:sad?"sad":"happy", text:`${prefix}${reply.a}`, revertMs:sad?8000:1600};
  }
  // 2. Check if a Life Guide matches
  const gid=matchGuide(low);
  if(gid){const g=GUIDES.find(x=>x.id===gid);
    if(g)return {mood:sad?"sad":"idle", guideId:g.id, text:`${sad?`I hear you, ${nm}. 💜 `:""}I have a full guide for exactly this — <b>${g.e} ${g.t}</b>. ${g.tag}`};}
  // 3. Emotional support
  if(sad)
    return {mood:"sad", text:`I hear you, ${nm}. 💜 Hard days are real — be gentle with yourself. If it feels heavy, the <b>Guides</b> tab has real help, and <b>988</b> is there any hour. I'm right here.`};
  // 4. Daily lesson nudge for money questions
  if(/(money|broke|rent|bill|save|debt|afford|cash|budget|paycheck)/.test(low))
    return {mood:"idle", text:`Money's a big one. Today's tip: "<b>${d.money.h}</b>" — ${d.money.d.slice(0,90)}… ${c.emoji}`};
  // 5. Conversational openers
  if(/(^(hi|hey|hello|sup|yo|hiya|howdy)[\s!?.,]*$)/.test(low.trim()))
    return {mood:"happy", text:`Hey ${nm}! ${c.emoji} Ask me anything — money, jobs, cooking, health, relationships, daily life. What's on your mind?`};
  if(/(have a question|got a question|need help|need advice|can you help|what can you (do|help)|what do you know|what (topics|things) (can|do) you)/.test(low))
    return {mood:"happy", text:`Of course, ${nm}! I know about: 💰 money & budgeting, 💼 jobs & careers, 🍳 cooking, 🏠 home & renting, ❤️ relationships, 🧠 mental health, 🏥 health & body, 📱 tech, ✈️ travel, 🐾 pets, and hundreds more everyday life topics. Just ask! ${c.emoji}`};
  if(/(always reply|same (reply|answer|response)|broken|not working|you useless|you stupid|you don't know|know nothing|useless)/.test(low))
    return {mood:"sad", text:`Fair point, ${nm} — I learn best from specific questions. Try something like "how do I make a budget" or "I can't sleep" and I'll give you a real answer. I'm still growing! 💜`};
  // 5. No local match — signal that AI should answer this one
  return {mood:"idle", text:"", _needsAI:true};
}
function scrollOverlay(){const s=document.getElementById("coScroll");if(s)s.scrollTop=s.scrollHeight;}

async function askAI(message){
  if(!AI_WORKER_URL) return null;
  const c=getChar(), nm=state.name||"friend";
  try{
    const res=await fetch(AI_WORKER_URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message, name:nm, character:c.name})
    });
    if(!res.ok) return null;
    const {reply}=await res.json();
    return reply||null;
  }catch{return null;}
}

const FALLBACKS=[
  nm=>`Ask me something specific! 💡 Like "how do I save money," "I got fired," or "how do I cook chicken" — I've got real answers for hundreds of life topics.`,
  nm=>`Try a specific question! I know about money, jobs, cooking, health, relationships, and loads more. What's actually going on? 💬`,
  nm=>`Give me something to work with! Ask about a real situation — "how do I build credit," "I can't sleep," "my boss is awful" — and I'll help for real. 💜`,
  nm=>`I'm better with specifics! What's the actual thing on your mind? Money? Work? Health? Relationships? Just ask it straight and I've got you. 🎯`,
];

async function sendChat(){
  const box=document.getElementById("chatBox"); if(!box)return;
  const t=box.value.trim(); if(!t)return;
  const thread=document.getElementById("coThread"); if(!thread)return;
  const c=getChar(), nm=state.name||"friend";
  box.value="";
  const sb=document.getElementById("chatSend");if(sb)sb.classList.add("send-empty");
  chatLog.push({role:"me",text:t});
  thread.insertAdjacentHTML("beforeend",`<div class="msg me"><div class="bubble me">${escHtml(t)}</div></div>`);
  const tip=document.createElement("div");
  tip.className="msg guide"; tip.id="typing";
  tip.innerHTML=`<div class="msg-face">${charFaceHTML(c)}</div><div class="bubble guide typing"><span></span><span></span><span></span></div>`;
  thread.appendChild(tip);
  scrollOverlay(); box.focus();

  // Short delay so typing indicator shows naturally
  await new Promise(r=>setTimeout(r, 850+Math.random()*400));

  let rep=guideReply(t);

  // If no local match, try the AI worker
  if(rep._needsAI){
    const aiText=await askAI(t);
    if(aiText){
      rep={mood:"happy", text:aiText};
    } else {
      // AI unavailable — use rotating fallback
      rep={mood:"idle", text:FALLBACKS[Math.floor(Math.random()*FALLBACKS.length)](nm)};
    }
  }

  const tp=document.getElementById("typing"); if(tp)tp.remove();
  chatLog.push({role:"guide",text:rep.text,guideId:rep.guideId});
  const th=document.getElementById("coThread");
  if(th){
    const openBtn=rep.guideId?`<div class="qr"><button data-open-guide="${rep.guideId}">Open the guide →</button></div>`:"";
    th.insertAdjacentHTML("beforeend",`<div class="msg guide"><div class="msg-face">${charFaceHTML(c)}</div><div class="bubble guide">${rep.text}</div></div>${openBtn}`);
    scrollOverlay();
  }
  if(rep.mood&&rep.mood!=="idle")setMood(rep.mood, rep.mood==="sad"?8000:1400);
  else applyMood();
}

// A daily lesson rendered as a chat message FROM the guide, with a quick-reply
// "Got it" chip. Once done, the chip becomes the user's reply bubble.
function moduleBubble(slot,inner){
  const cat=CAT[slot], got=state.daily.got[slot], c=getChar();
  const reply = got
    ? `<div class="msg me"><div class="bubble me">${slot==="challenge"?"I did it ⚡":"Got it ✅"}</div></div>`
    : `<div class="qr"><button class="qr-got" data-got="${slot}">${slot==="challenge"?"⚡ I did it":"✓ Got it"}</button></div>`;
  return `<div class="msg guide">
      <div class="msg-face">${charFaceHTML(c)}</div>
      <div class="bubble guide ${got?"done":""}" data-slot="${slot}" style="--sc:${cat.color}">
        <div class="sweep"></div>
        <span class="chip" style="background:${cat.color}18;color:${cat.color};border:1px solid ${cat.color}30">${cat.icon} ${cat.label.toUpperCase()}</span>
        ${inner}
      </div>
    </div>${reply}`;
}
function renderToday(v){
  if(!state.age){v.innerHTML="";if($("#overlay").classList.contains("hidden"))startOnboard(0);return;}
  ensureDaily();
  const d=dailyContent(),n=gotCount();
  const dateStr=new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});
  const hr=new Date().getHours();
  const greet=hr<12?"Good morning":hr<17?"Good afternoon":"Good evening";
  const c=getChar(), done=n===SLOTS.length, left=SLOTS.length-n;
  if(done)guideMood="dance"; else if(guideMood==="dance")guideMood="idle";
  const gFace=charFaceHTML(c);
  // Compact top row + lessons
  let html=`<div class="today-header">
    <div class="today-avatar">${c.emoji}</div>
    <div class="today-header-body">
      <div class="today-guide-name">${c.name} <span class="today-online"></span></div>
      <div class="today-meta">${dateStr}</div>
    </div>
    <div class="today-progress-pill">${n}<span>/${SLOTS.length}</span></div>
  </div>
  <div class="today-streak-row">🔥 ${state.streak.n}-day streak &nbsp;·&nbsp; ✨ ${state.xp} XP</div>
  <div class="chat-thread">
    <div class="msg guide"><div class="msg-face">${gFace}</div>
      <div class="bubble guide">${done
        ?`All 7 done today${state.name?", "+state.name:""}! 🔥 That's a ${state.streak.n}-day streak.`
        :`${state.name?state.name+", ":""}${left} lesson${left>1?"s":""} left today. Tap <b>Got it</b> as you go! 💜`}</div></div>`;
  if(d.skill){
    const s=d.skill.skill;
    html+=moduleBubble("skill",`<div class="title">${s.e} ${s.t}</div>
      <div class="bodytext">${s.why}</div>
      <ol>${s.steps.map(x=>`<li>${x}</li>`).join("")}</ol>
      <div class="hint">From your life path (${d.skill.band.range}). Checking it here checks it in your Journey too.</div>
      ${s.video?`<a class="btn btn-video" href="${s.video}" target="_blank" rel="noopener">▶ Watch the video lesson</a>`:`<span class="btn btn-video soon">🎬 Video lesson coming soon</span>`}`);
  }
  html+=moduleBubble("vocab",`<div class="word">${d.vocab.w}</div>
    <div class="bodytext">${d.vocab.d}</div><div class="ex">"${d.vocab.x}"</div>
    <div class="hint">Use it once in a real sentence today and it's yours forever.</div>`);
  html+=moduleBubble("body",`<div class="bodytext">${d.body.f}</div>
    <div class="hint"><b>Do this:</b> ${d.body.a}</div>`);
  html+=moduleBubble("money",`<div class="title">${d.money.h}</div><div class="bodytext">${d.money.d}</div>`);
  html+=moduleBubble("mind",`<div class="title">${d.mind.h}</div><div class="bodytext">${d.mind.d}</div>`);
  html+=moduleBubble("world",`<div class="title">${d.world.h}</div><div class="bodytext">${d.world.d}</div>`);
  html+=moduleBubble("challenge",`<div class="title">${d.challenge.c}</div><div class="hint">${d.challenge.y}</div>`);
  if(done)html+=`<div class="msg guide"><div class="msg-face">${gFace}</div>
    <div class="bubble guide celebrate"><div class="title">🎉 All 7 done!</div>+30 bonus XP banked. A fresh upload lands at midnight. See you tomorrow ✨</div></div>`;
  html+=`</div>`;
  v.innerHTML=html;
  applyMood();
  startProactiveTimer();
}

function skillCard(s){
  const done=!!state.done[s.id];
  const vid=s.video?`<a class="btn btn-video" href="${s.video}" target="_blank" rel="noopener" onclick="event.stopPropagation()">▶ Watch the video lesson</a>`
                   :`<span class="btn btn-video soon">🎬 Video lesson coming soon</span>`;
  return `<div class="card skill ${done?"done":""}" data-id="${s.id}">
    <div class="top"><span class="emoji">${s.e}</span>
      <div><div class="t">${s.t}</div><div class="why">${s.why}</div></div>
      <span class="check">✓</span></div>
    <div class="detail"><div class="label">How to do it</div>
      <ol>${s.steps.map(x=>`<li>${x}</li>`).join("")}</ol>${vid}
      <button class="btn ${done?"btn-ghost":"btn-got"}" data-toggle="${s.id}">${done?"Un-check":"✓ I know this"}</button></div></div>`;
}
function bandSection(b,skills){
  const p=bandProgress(b);
  return `<div class="band-head"><span class="range">${b.range}</span><div><h2>${b.name}</h2><div class="note">${b.note} · ${p.done}/${p.total} learned</div></div></div>${skills.map(skillCard).join("")}`;
}
function renderJourney(v){
  if(!state.age){v.innerHTML="";if($("#overlay").classList.contains("hidden"))startOnboard(0);return;}
  if(state.journeyMode==="library")return renderLibrary(v);
  let html=`<div class="pill-row">
    <button class="pill ${state.journeyMode==="path"?"active":""}" data-jmode="path">🎯 My path</button>
    <button class="pill ${state.journeyMode==="all"?"active":""}" data-jmode="all">🗺️ All ages</button>
    <button class="pill ${state.journeyMode==="library"?"active":""}" data-jmode="library">📚 Daily bank</button></div>`;
  if(state.journeyMode==="path"){
    const b=bandFor(state.age),p=bandProgress(b);
    const earlier=BANDS.filter(x=>x.max<b.min);
    const behind=earlier.flatMap(x=>x.skills.filter(s=>!state.done[s.id]));
    const next=BANDS[BANDS.indexOf(b)+1];
    html+=`<div class="card hero"><div class="kicker">Your life stage</div>
      <div class="big">${b.name} <span style="font-weight:400;font-size:.95rem">(${b.range})</span></div>
      <div class="sub">${b.note}</div>
      <div class="bar"><i style="width:${p.pct}%"></i></div>
      <div class="sub">${p.done} of ${p.total} skills learned (${p.pct}%)</div></div>
      <div class="band-head"><h2>📌 Your skills for right now</h2></div>
      <div class="section-note">Tap a card to see how it's done. Tap ✓ when you've got it.</div>
      ${b.skills.map(skillCard).join("")}`;
    if(behind.length)html+=`<div class="band-head"><h2>⏪ Catch-up list</h2></div>
      <div class="section-note">${behind.length} skills from earlier ages you haven't checked off. No shame — most adults have a few!</div>
      <details class="card"><summary>Show my catch-up list (${behind.length})</summary>${behind.map(skillCard).join("")}</details>`;
    if(next)html+=`<div class="band-head"><h2>🔭 Coming up: ${next.name} (${next.range})</h2></div>
      <details class="card"><summary>Preview ${next.skills.length} upcoming skills</summary>${next.skills.map(skillCard).join("")}</details>`;
  }else{
    const q=state.search.trim().toLowerCase();
    html+=`<input class="search" id="searchBox" placeholder="🔍 Search all ${BANDS.reduce((n,b)=>n+b.skills.length,0)} skills…" value="${state.search.replace(/"/g,"&quot;")}">
      <div class="pill-row"><button class="pill ${state.bandFilter==null?"active":""}" data-band="">All</button>
      ${BANDS.map(b=>`<button class="pill ${state.bandFilter===b.id?"active":""}" data-band="${b.id}">${b.range.replace("Ages ","")}</button>`).join("")}</div>`;
    let any=false;
    BANDS.forEach(b=>{
      if(state.bandFilter&&state.bandFilter!==b.id)return;
      const skills=b.skills.filter(s=>!q||s.t.toLowerCase().includes(q)||s.why.toLowerCase().includes(q));
      if(!skills.length)return; any=true; html+=bandSection(b,skills);
    });
    if(!any)html+=`<div class="card" style="text-align:center;color:var(--muted)">Nothing matches "${state.search}".</div>`;
  }
  v.innerHTML=html;
  const sb=$("#searchBox");
  if(sb)sb.addEventListener("input",e=>{state.search=e.target.value;const pos=e.target.selectionStart;renderJourney(v);const nb=$("#searchBox");nb.focus();nb.setSelectionRange(pos,pos);});
}

function libEntry(slot,item){
  const c=CAT[slot];
  let inner="";
  if(slot==="vocab")inner=`<div class="h">${item.w}</div><div class="d">${item.d}<br><i>"${item.x}"</i></div>`;
  else if(slot==="body")inner=`<div class="d">${item.f}<br><b>Do this:</b> ${item.a}</div>`;
  else if(slot==="challenge")inner=`<div class="h">${item.c}</div><div class="d">${item.y}</div>`;
  else inner=`<div class="h">${item.h}</div><div class="d">${item.d}</div>`;
  return`<div class="card lib-entry"><span class="chip" style="background:${c.color}22;color:${c.color}">${c.icon} ${c.label}</span>${inner}</div>`;
}
function renderLibrary(v){
  const cats=["vocab","body","money","mind","world","challenge"];
  const q=state.search.trim().toLowerCase();
  let html=`<input class="search" id="searchBox" placeholder="🔍 Search ${cats.reduce((n,c)=>n+DAILY[c].length,0)} lessons…" value="${state.search.replace(/"/g,"&quot;")}">
    <div class="pill-row">${cats.map(c=>`<button class="pill ${state.libFilter===c?"active":""}" data-lib="${c}">${CAT[c].icon} ${CAT[c].label}</button>`).join("")}</div>`;
  const pools=q?cats:[state.libFilter];
  let count=0;
  pools.forEach(slot=>{
    DAILY[slot].forEach(item=>{
      const text=Object.values(item).join(" ").toLowerCase();
      if(q&&!text.includes(q))return;
      count++; html+=libEntry(slot,item);
    });
  });
  if(!count)html+=`<div class="card" style="text-align:center;color:var(--muted)">Nothing matches "${state.search}".</div>`;
  v.innerHTML=html;
  const sb=$("#searchBox");
  sb.addEventListener("input",e=>{state.search=e.target.value;const pos=e.target.selectionStart;renderLibrary(v);const nb=$("#searchBox");nb.focus();nb.setSelectionRange(pos,pos);});
}

function renderProgress(v){
  const total=BANDS.reduce((n,b)=>n+b.skills.length,0);
  const done=Object.keys(state.done).filter(k=>state.done[k]).length;
  const pct=Math.round(done/total*100);
  const lvl=level();
  v.innerHTML=`
    <div class="card hero"><div class="kicker">Operator status</div>
      <div class="big">✨ Level ${lvl.lv+1}: ${lvl.name}</div>
      ${lvl.next?`<div class="bar"><i style="width:${Math.round(lvl.into/lvl.next*100)}%"></i></div>
      <div class="sub">${lvl.into} / ${lvl.next} XP to ${LEVELS[lvl.lv+1]}</div>`:`<div class="sub">Maximum rank achieved. The manual bows to you.</div>`}
      <div class="statline"><span>🔥 <b>${state.streak.n}</b>-day streak</span><span>✨ <b>${state.xp}</b> total XP</span></div></div>
    <div class="card"><div class="stat-row"><b>🗺️ Life Journey</b><span>${done}/${total} skills (${pct}%)</span></div>
      <div class="bar"><i style="width:${pct}%"></i></div></div>
    ${BANDS.map(b=>{const p=bandProgress(b);return`<div class="card"><div class="stat-row"><b>${b.range} · ${b.name}</b><span>${p.done}/${p.total}</span></div><div class="bar"><i style="width:${p.pct}%"></i></div></div>`;}).join("")}
    <div class="section-note" style="text-align:center">Complete all 7 daily modules to grow your streak. Skills from any age count — it's never too late.</div>`;
}

function getTheme(){const t=localStorage.getItem(K.theme)||"dark";return t;}
function applyTheme(t){
  document.documentElement.classList.remove("light","kawaii");
  if(t==="light")document.documentElement.classList.add("light");
  if(t==="kawaii")document.documentElement.classList.add("kawaii");
  localStorage.setItem(K.theme,t);
}
function nextTheme(){const order=["dark","light","kawaii"];const cur=getTheme();return order[(order.indexOf(cur)+1)%3];}
const THEME_LABELS={"dark":"🌙 Dark","light":"☀️ Bright","kawaii":"🌸 Kawaii"};

function renderMore(v){
  const themeName=THEME_LABELS[getTheme()]||"🌙 Dark";
  const lcfg=getLumiCfg();
  v.innerHTML=`
    <div class="band-head"><h2>⚙️ Settings & tools</h2></div>
    <button class="more-btn" id="changeAge">🎂 Change my age <span style="color:var(--muted)">(currently ${state.age??"not set"})</span></button>
    <button class="more-btn" id="themeBtn">🎨 Theme: <b>${themeName}</b> — tap to switch</button>
    <button class="more-btn" id="fontBtn">🔠 Text size: <b>${({"":"Normal","fs-lg":"Large","fs-xl":"Extra large"})[localStorage.getItem(K.fs)||""]}</b> — tap to change</button>
    <div class="band-head" style="margin-top:18px"><h2>🔔 Lumi Reminders</h2></div>
    <div class="card">
      <div class="section-note">Lumi will send you a chat reminder tied to that day's actual lesson — your skill, word, challenge, and more.</div>
      <label style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-weight:600">
        Enable Lumi reminders
        <input type="checkbox" id="lumiOn" ${lcfg.on?"checked":""} style="width:22px;height:22px;accent-color:#6366f1;cursor:pointer">
      </label>
      <div id="lumiTimes" style="${lcfg.on?"":"opacity:.45;pointer-events:none"}">
        <label style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <span>☀️ Morning</span>
          <input type="time" id="lumiMorning" value="${lcfg.morning||"08:00"}" style="background:var(--card2);border:1px solid var(--line);color:var(--ink);border-radius:8px;padding:6px 10px;font-size:.93rem">
        </label>
        <label style="display:flex;align-items:center;justify-content:space-between">
          <span>🌙 Evening</span>
          <input type="time" id="lumiEvening" value="${lcfg.evening||"20:00"}" style="background:var(--card2);border:1px solid var(--line);color:var(--ink);border-radius:8px;padding:6px 10px;font-size:.93rem">
        </label>
        <button class="btn btn-got" id="lumiSave" style="margin-top:12px;width:100%">💜 Save reminder times</button>
      </div>
    </div>
    <div class="band-head" style="margin-top:6px"><h2>💾 Data</h2></div>
    <button class="more-btn" id="exportBtn">💾 Back up my progress (copy/save)</button>
    <button class="more-btn" id="importBtn">📥 Restore progress from a backup</button>
    <div id="ioArea"></div>
    <button class="more-btn danger" id="resetBtn">🗑️ Erase all my progress</button>
    <div class="card" style="color:var(--muted);font-size:.88rem">
      <b style="color:var(--ink)">About Life Manual 2.0</b><br>
      Built for everyone who didn't have a parent or role model to teach them — the kids who grew up without guidance, the parents whose own parents passed too early, everyone who learned life by trial and error. Not anymore. One fresh knowledge pack every day, the full life-skills journey from age 1 to 80, and Life Guides for the moments nobody prepared you for. Everything stays on this device — no account, no tracking. Video lessons are being added skill by skill.<br><br>
      This app shares general life guidance, not medical, legal, or financial advice — for big decisions, talk to a professional (they still exist in 2150).
    </div>`;
  $("#changeAge").onclick=()=>startOnboard(2);
  $("#themeBtn").onclick=()=>{applyTheme(nextTheme());renderMore(v);};
  $("#fontBtn").onclick=()=>{const order=["","fs-lg","fs-xl"];const cur=localStorage.getItem(K.fs)||"";const nx=order[(order.indexOf(cur)+1)%3];localStorage.setItem(K.fs,nx);applyPrefs();renderMore(v);};
  $("#exportBtn").onclick=()=>{
    const data=JSON.stringify({age:state.age,done:state.done,xp:state.xp,streak:state.streak,daily:state.daily});
    $("#ioArea").innerHTML=`<div class="card"><div class="section-note">Copy this text and keep it somewhere safe (emailing it to yourself works great):</div><textarea readonly id="expTxt">${data}</textarea></div>`;
    $("#expTxt").select();
  };
  $("#importBtn").onclick=()=>{
    $("#ioArea").innerHTML=`<div class="card"><div class="section-note">Paste your backup text here, then tap Restore:</div><textarea id="impTxt"></textarea><br><button class="btn btn-got" id="impGo">Restore</button></div>`;
    $("#impGo").onclick=()=>{try{
      const d=JSON.parse($("#impTxt").value);
      if(typeof d.done!=="object")throw 0;
      state.done=d.done||{};if(d.age)state.age=d.age;
      if(typeof d.xp==="number")state.xp=d.xp;
      if(d.streak)state.streak=d.streak;
      if(d.daily)state.daily=d.daily;
      localStorage.setItem(K.age,state.age);saveAll();
      toast("✓ Progress restored!");render();
    }catch(e){toast("That doesn't look like a Life Manual backup.");}};
  };
  $("#resetBtn").onclick=()=>{if(confirm("Erase ALL progress, XP, streaks, and your age? This can't be undone.")){
    Object.values(K).forEach(k=>localStorage.removeItem(k));
    state={...state,age:null,done:{},daily:{},streak:{n:0,last:null},xp:0,tab:"today"};
    applyPrefs();toast("Memory wiped. Fresh start.");render();
  }};
  const lumiOnCk=document.getElementById("lumiOn");
  if(lumiOnCk){
    lumiOnCk.onchange=()=>{
      const cfg=getLumiCfg(); cfg.on=lumiOnCk.checked;
      const tEl=document.getElementById("lumiTimes");
      if(tEl)tEl.style.cssText=cfg.on?"":"opacity:.45;pointer-events:none";
      if(cfg.on&&"Notification" in window&&Notification.permission==="default"){
        Notification.requestPermission().then(p=>{
          toast(p==="granted"?"🔔 Notifications on — Lumi will reach you anytime!":"💜 Lumi will remind you inside the app.");
        });
      }
      saveLumiCfg(cfg); scheduleReminders();
    };
  }
  const lumiSaveBtn=document.getElementById("lumiSave");
  if(lumiSaveBtn){
    lumiSaveBtn.onclick=()=>{
      const cfg=getLumiCfg();
      cfg.morning=document.getElementById("lumiMorning").value||"08:00";
      cfg.evening=document.getElementById("lumiEvening").value||"20:00";
      saveLumiCfg(cfg); scheduleReminders();
      toast("✓ Saved! Lumi will be there. 💜");
    };
  }
}

function applyPrefs(){
  const cls=[localStorage.getItem(K.fs)||""];
  const t=localStorage.getItem(K.theme)||"dark";
  if(t==="light")cls.push("light");
  if(t==="kawaii")cls.push("kawaii");
  document.documentElement.className=cls.join(" ").trim();
}

// ============ EVENTS ============
document.addEventListener("click",e=>{
  const nav=e.target.closest("nav button");if(nav){state.tab=nav.dataset.tab;state.search="";state.guideId=null;render();window.scrollTo(0,0);return;}
  const gd=e.target.closest("[data-guide]");if(gd){state.guideId=gd.dataset.guide;render();return;}
  const gb=e.target.closest("[data-guideback]");if(gb){state.guideId=null;render();window.scrollTo(0,0);return;}
  const og=e.target.closest("[data-open-guide]");if(og){state.tab="guides";state.guideId=og.dataset.openGuide;render();window.scrollTo(0,0);return;}
  const got=e.target.closest("[data-got]");if(got){markGot(got.dataset.got);return;}
  const jm=e.target.closest("[data-jmode]");if(jm){state.journeyMode=jm.dataset.jmode;render();return;}
  const lib=e.target.closest("[data-lib]");if(lib){state.libFilter=lib.dataset.lib;state.search="";render();return;}
  const pill=e.target.closest(".pill[data-band]");if(pill){state.bandFilter=pill.dataset.band||null;render();return;}
  const tog=e.target.closest("[data-toggle]");if(tog){
    const id=tog.dataset.toggle;state.done[id]=!state.done[id];if(!state.done[id])delete state.done[id];saveAll();
    if(state.done[id]){const msgs=["Nice! 🎉","One more down! ⭐","Look at you go! 💪","Learned it! ✅"];toast(msgs[Math.floor(Math.random()*msgs.length)]);}
    render();return;
  }
  const card=e.target.closest(".skill");if(card&&!e.target.closest("a")){card.classList.toggle("open");return;}
});
// ============ ONBOARDING INTERVIEW ============
const GOALS=[
  {k:"money",e:"💰",t:"Money & stability"},
  {k:"confidence",e:"✨",t:"Confidence"},
  {k:"health",e:"🫀",t:"Health & body"},
  {k:"relationships",e:"💞",t:"Relationships"},
  {k:"habits",e:"⚡",t:"Daily habits"},
  {k:"healing",e:"🌧️",t:"Healing hard times"}
];
let ob={step:0,draft:{}};
const OB_TOTAL=6;
function startOnboard(step){
  const lc=getLumiCfg();
  ob={step:step||0,draft:{
    name:state.name||"", age:state.age||"", goal:state.goal||"", character:state.character||"elephant",
    remOn:lc.on, morning:lc.morning||"08:00", evening:lc.evening||"20:00"
  }};
  $("#overlay").classList.remove("hidden");
  renderOnboard();
}
function obDots(){
  let h="";
  for(let i=0;i<OB_TOTAL;i++)h+=`<i class="${i<ob.step?"done":i===ob.step?"on":""}"></i>`;
  return h;
}
function renderOnboard(){
  $("#ob-dots").innerHTML=obDots();
  const d=ob.draft, b=$("#ob-body");
  const back=ob.step>0?`<button class="btn btn-ghost" id="ob-back">← Back</button>`:"";
  if(ob.step===0){
    b.innerHTML=`<div class="ob-emoji">👋</div>
      <h2>Hi, I'm Lumi.</h2>
      <p>I'm your guide. I'll walk beside you with one small lesson a day — the stuff nobody sat you down and taught. Let's set up <b>your</b> manual together. Takes 30 seconds.</p>
      <div class="ob-nav"><button class="btn btn-got" id="ob-next" style="flex:1;justify-content:center">Let's go →</button></div>`;
  }else if(ob.step===1){
    b.innerHTML=`<div class="ob-emoji">😊</div>
      <h2>What should I call you?</h2>
      <p>Just a first name or nickname — so it feels like us, not an app.</p>
      <input class="ob-input" id="ob-name" placeholder="Your name" value="${(d.name||"").replace(/"/g,"&quot;")}" maxlength="24" autocomplete="given-name">
      <div class="ob-nav">${back}<button class="btn btn-got" id="ob-next">Next →</button></div>
      <button class="ob-skip" id="ob-skip">Skip for now</button>`;
  }else if(ob.step===2){
    b.innerHTML=`<div class="ob-emoji">🎂</div>
      <h2>${d.name?d.name+", how":"How"} old are you?</h2>
      <p>This tunes your life path — the skills that matter for your stage right now.</p>
      <input class="ob-input ob-age" id="ob-age" type="number" min="1" max="120" placeholder="00" value="${d.age||""}">
      <div class="ob-nav">${back}<button class="btn btn-got" id="ob-next">Next →</button></div>`;
  }else if(ob.step===3){
    const sel=d.character||"elephant";
    b.innerHTML=`<div class="ob-emoji">🤝</div>
      <h2>Choose your guide</h2>
      <p>Pick the friend who'll walk with you${d.name?", "+d.name:""}. They'll send your daily lesson, cheer you on, and remind you about your day. Switch anytime.</p>
      <div class="char-grid" id="ob-chars">${CHARACTERS.map(ch=>`<button class="char-tile ${sel===ch.id?"sel":""}" data-char="${ch.id}" style="--cc:${ch.color}">
        <span class="ct-face">${charFaceHTML(ch)}</span>
        <span class="ct-name">${ch.name}</span>
        <span class="ct-pillar">${ch.pillar}</span>
      </button>`).join("")}</div>
      <div class="ob-nav">${back}<button class="btn btn-got" id="ob-next">Next →</button></div>`;
  }else if(ob.step===4){
    b.innerHTML=`<div class="ob-emoji">🔔</div>
      <h2>Want me to check in on you?</h2>
      <p>I'll send a warm nudge tied to that day's lesson. No spam — just you and me.</p>
      <div class="ob-toggle-row"><span style="font-weight:700">Lumi reminders</span>
        <input type="checkbox" id="ob-rem" ${d.remOn?"checked":""} style="width:24px;height:24px;accent-color:#34d399;cursor:pointer"></div>
      <div id="ob-times" style="${d.remOn?"":"opacity:.4;pointer-events:none"}">
        <div class="ob-toggle-row"><span>☀️ Morning</span><input type="time" id="ob-morning" value="${d.morning}"></div>
        <div class="ob-toggle-row"><span>🌙 Evening</span><input type="time" id="ob-evening" value="${d.evening}"></div>
      </div>
      <div class="ob-nav">${back}<button class="btn btn-got" id="ob-next">Next →</button></div>`;
  }else{
    const ch=CHARACTERS.find(x=>x.id===(d.character||"elephant"))||CHARACTERS[0];
    b.innerHTML=`<div class="ob-emoji">🌟</div>
      <h2>You're all set${d.name?", "+d.name:""}!</h2>
      <p><b>${ch.name}</b> the ${ch.animal.toLowerCase()} is your guide now — here for ${ch.pillar.toLowerCase()}. Every day there's a fresh upload waiting. Finish all 7 and watch the sky. 💜<br><br>I've got you from here.</p>
      <div class="ob-nav"><button class="btn btn-got" id="ob-finish" style="flex:1;justify-content:center;font-size:1.05rem;padding:13px">Begin my journey ✨</button></div>
      <p style="font-size:.78rem;margin-top:12px">Everything stays on this device. No account, no tracking — even in 2150.</p>`;
  }
  // wire
  const next=$("#ob-next"); if(next)next.onclick=obNext;
  const bk=$("#ob-back"); if(bk)bk.onclick=()=>{captureStep();ob.step--;renderOnboard();};
  const sk=$("#ob-skip"); if(sk)sk.onclick=obNext;
  const fin=$("#ob-finish"); if(fin)fin.onclick=obFinish;
  const chars=b.querySelector("#ob-chars");
  if(chars)chars.addEventListener("click",e=>{const t=e.target.closest("[data-char]");if(!t)return;
    ob.draft.character=t.dataset.char;chars.querySelectorAll(".char-tile").forEach(x=>x.classList.toggle("sel",x===t));});
  const rem=$("#ob-rem");
  if(rem)rem.onchange=()=>{ob.draft.remOn=rem.checked;$("#ob-times").style.cssText=rem.checked?"":"opacity:.4;pointer-events:none";};
  const nameI=$("#ob-name"); if(nameI){nameI.focus();nameI.onkeydown=e=>{if(e.key==="Enter")obNext();};}
  const ageI=$("#ob-age"); if(ageI)ageI.onkeydown=e=>{if(e.key==="Enter")obNext();};
}
function captureStep(){
  if(ob.step===1&&$("#ob-name"))ob.draft.name=$("#ob-name").value.trim();
  if(ob.step===2&&$("#ob-age"))ob.draft.age=parseInt($("#ob-age").value)||"";
  if(ob.step===4){if($("#ob-morning"))ob.draft.morning=$("#ob-morning").value;if($("#ob-evening"))ob.draft.evening=$("#ob-evening").value;}
}
function obNext(){
  captureStep();
  if(ob.step===2){const a=ob.draft.age;if(!a||a<1||a>120){toast("Please enter an age from 1 to 120.");return;}}
  ob.step++; renderOnboard();
}
function obFinish(){
  const d=ob.draft;
  state.name=d.name||""; localStorage.setItem(K.name,state.name);
  state.character=d.character||"elephant"; localStorage.setItem(K.character,state.character);
  const ch=getChar();
  state.goal=ch.goal||""; localStorage.setItem(K.goal,state.goal);
  if(d.age){state.age=d.age;localStorage.setItem(K.age,d.age);}
  const cfg=getLumiCfg();
  cfg.on=!!d.remOn; cfg.morning=d.morning||"08:00"; cfg.evening=d.evening||"20:00";
  saveLumiCfg(cfg);
  delete state.daily.skillId; saveAll();
  if(cfg.on&&"Notification"in window&&Notification.permission==="default")Notification.requestPermission().catch(()=>{});
  scheduleReminders();
  $("#overlay").classList.add("hidden");
  state.tab="today"; render(); window.scrollTo(0,0);
  setTimeout(()=>showLumi(`Hi${state.name?" "+state.name:""}! ${ch.emoji} I'm ${ch.name}, your guide. ${ch.hello} Your first upload is ready — let's do one together.`,"today"),650);
}

// ============ 2150 VISUAL ENGINE ============
function ringSVG(n,total){
  const R=34,C=2*Math.PI*R,off=C*(1-n/total);
  return `<svg width="92" height="92" viewBox="0 0 92 92" aria-label="${n} of ${total} modules">
    <defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
    <circle cx="46" cy="46" r="${R}" fill="none" stroke="#ffffff22" stroke-width="8"/>
    <circle cx="46" cy="46" r="${R}" fill="none" stroke="url(#rg)" stroke-width="8" stroke-linecap="round"
      stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 46 46)"
      style="filter:drop-shadow(0 0 7px #22d3ee99);transition:stroke-dashoffset .6s"/>
    <text x="46" y="52" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="inherit">${n}/${total}</text></svg>`;
}

function confetti(){
  const cv=$("#fx"),ctx=cv.getContext("2d");
  cv.width=innerWidth; cv.height=innerHeight;
  const colors=["#6366f1","#22d3ee","#34d399","#fbbf24","#fb7185","#a78bfa"];
  const ps=Array.from({length:150},()=>({x:Math.random()*cv.width,y:-30-Math.random()*cv.height*.3,
    vx:(Math.random()-.5)*3.5,vy:2.5+Math.random()*4,s:4+Math.random()*6,
    c:colors[(Math.random()*colors.length)|0],r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3}));
  const t0=performance.now();
  (function f(t){
    ctx.clearRect(0,0,cv.width,cv.height);
    ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.r+=p.vr;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.62);ctx.restore();});
    if(t-t0<2800)requestAnimationFrame(f); else ctx.clearRect(0,0,cv.width,cv.height);
  })(t0);
}

// Soap bubbles drift all over the screen; a few swell up (coming toward you) and POP.
// Shooting stars rush in from the center. Runs on its own throwaway canvas so it
// never fights confetti (#fx) or the starfield (#bg).
function celebrate(nBubbles,nWarp){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  const cv=document.createElement("canvas");
  cv.style.cssText="position:fixed;inset:0;z-index:101;pointer-events:none";
  document.body.appendChild(cv);
  const ctx=cv.getContext("2d");
  const W=cv.width=innerWidth, H=cv.height=innerHeight, cx=W/2, cy=H/2;
  const tints=["180,220,255","255,200,230","200,255,225","255,240,180","210,200,255","190,235,255"];
  let bubbles=Array.from({length:nBubbles},()=>{
    const pops=Math.random()<0.5;                 // about half will grow + pop
    return {x:Math.random()*W, y:Math.random()*H, r:6+Math.random()*12,
      vx:(Math.random()-0.5)*1.8, vy:(Math.random()-0.5)*1.8-0.2,
      grow:pops?(0.45+Math.random()*0.55):(0.04+Math.random()*0.11),
      pops, popAt:32+Math.random()*42, wob:Math.random()*6.28, wsp:0.03+Math.random()*0.04,
      tint:tints[(Math.random()*tints.length)|0], a:0, pop:-1};
  });
  const warp=Array.from({length:nWarp||0},()=>({a:Math.random()*6.28, d:Math.random()*55, v:2.4+Math.random()*5}));
  setTimeout(()=>{if(cv.parentNode)cv.remove();},7000); // backstop if rAF is throttled
  const t0=performance.now();
  (function f(now){
    const el=now-t0, endFade=Math.max(0,1-Math.max(0,el-4600)/1000);
    ctx.clearRect(0,0,W,H);
    // shooting stars toward the screen
    const wA=Math.max(0,1-el/1200);
    if(wA>0)warp.forEach(s=>{
      s.d+=s.v; s.v*=1.045;
      const x=cx+Math.cos(s.a)*s.d, y=cy+Math.sin(s.a)*s.d;
      const x2=cx+Math.cos(s.a)*(s.d-s.v*3.5), y2=cy+Math.sin(s.a)*(s.d-s.v*3.5);
      ctx.strokeStyle="rgba(255,255,255,"+wA.toFixed(2)+")"; ctx.lineWidth=Math.min(2.8,s.d/120); ctx.lineCap="round";
      ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x,y); ctx.stroke();
    });
    // bubbles
    bubbles.forEach(b=>{
      if(b.pop>=0){                               // popping burst
        b.pop+=0.08; const pr=b.r*(1+b.pop*1.2), pa=Math.max(0,1-b.pop)*endFade;
        ctx.strokeStyle=`rgba(255,255,255,${(0.6*pa).toFixed(2)})`; ctx.lineWidth=2*pa+0.4;
        ctx.beginPath(); ctx.arc(b.x,b.y,pr,0,6.3); ctx.stroke();
        for(let k=0;k<7;k++){const ang=k/7*6.28; ctx.fillStyle=`rgba(255,255,255,${(0.55*pa).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(b.x+Math.cos(ang)*pr,b.y+Math.sin(ang)*pr,1.5*pa+0.4,0,6.3); ctx.fill();}
        return;
      }
      b.wob+=b.wsp; b.a=Math.min(0.92,b.a+0.05);
      b.x+=b.vx+Math.sin(b.wob)*0.4; b.y+=b.vy; b.r+=b.grow;
      if(b.x<-30)b.x=W+30; if(b.x>W+30)b.x=-30; if(b.y<-30)b.y=H+30; if(b.y>H+30)b.y=-30;  // roam all over
      if(b.pops&&b.r>=b.popAt){b.pop=0; return;}  // big enough → pop
      ctx.save(); ctx.globalAlpha=b.a*endFade;
      const g=ctx.createRadialGradient(b.x-b.r*0.25,b.y-b.r*0.25,b.r*0.2,b.x,b.y,b.r);
      g.addColorStop(0,"rgba(255,255,255,0.03)");
      g.addColorStop(0.8,`rgba(${b.tint},0.10)`);
      g.addColorStop(1,`rgba(${b.tint},0.55)`);
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,6.3); ctx.fill();
      ctx.strokeStyle="rgba(255,255,255,0.45)"; ctx.lineWidth=1; ctx.stroke();
      ctx.fillStyle="rgba(255,255,255,0.75)";
      ctx.beginPath(); ctx.ellipse(b.x-b.r*0.35,b.y-b.r*0.4,b.r*0.18,b.r*0.1,-0.6,0,6.3); ctx.fill();
      ctx.restore();
    });
    bubbles=bubbles.filter(b=>b.pop<1);           // drop fully-popped bubbles
    if(el<5600 && bubbles.length)requestAnimationFrame(f); else cv.remove();
  })(t0);
}

(function starfield(){
  const cv=$("#bg"),ctx=cv.getContext("2d");
  let W,H,stars,shoots=[],lastShoot=0;
  const SHOWER_COLORS=["34,211,238","167,139,250","251,191,36","251,113,133","52,211,153"];
  const STAR_TINTS=["165,180,252","165,180,252","165,180,252","134,239,255","196,181,253","253,224,160","251,182,206"];
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;
    stars=Array.from({length:Math.min(320,Math.round(W/3.5))},()=>{
      const big=Math.random()<.08;
      return{
        x:Math.random()*W,y:Math.random()*H,
        r:big?(1.6+Math.random()*1.4):(Math.random()*1.1+.25),
        p:Math.random()*Math.PI*2,
        tw:.018+Math.random()*.05,
        v:.02+Math.random()*.09,
        c:STAR_TINTS[(Math.random()*STAR_TINTS.length)|0],
        glow:big
      };});}
  rs(); addEventListener("resize",rs);
  function spawn(opts){
    shoots.push(Object.assign({
      x:Math.random()*W*.7+W*.15, y:Math.random()*H*.25,
      vx:7+Math.random()*4, vy:3.2, life:0, max:38, delay:0,
      col:"34,211,238", w:1.6, alpha:.65
    },opts));
  }
  // Celebration meteor shower — exposed globally
  window.meteorShower=function(n){
    n=n||16;
    for(let i=0;i<n;i++){
      const sp=8+Math.random()*7;
      spawn({
        x:Math.random()*W*1.1-W*.05, y:-Math.random()*H*.35,
        vx:sp, vy:sp*(.42+Math.random()*.2),
        max:46+Math.random()*22, delay:Math.floor(Math.random()*42),
        col:SHOWER_COLORS[(Math.random()*SHOWER_COLORS.length)|0],
        w:1.6+Math.random()*1.4, alpha:.7+Math.random()*.3
      });
    }
  };
  (function f(t){
    if(!document.hidden){
      ctx.clearRect(0,0,W,H);
      for(const s of stars){
        s.p+=s.tw; s.y-=s.v; if(s.y<-2)s.y=H+2;
        const a=(.28+.32*Math.sin(s.p));
        if(s.glow){
          ctx.fillStyle=`rgba(${s.c},${(a*.18).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(s.x,s.y,s.r*2.6,0,7); ctx.fill();
        }
        ctx.fillStyle=`rgba(${s.c},${a.toFixed(2)})`;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,7); ctx.fill();
      }
      // ambient shooting stars — more frequent, occasional pair
      if(t-lastShoot>4200&&Math.random()<.02){
        spawn({col:SHOWER_COLORS[(Math.random()*SHOWER_COLORS.length)|0]});
        if(Math.random()<.3)spawn({col:SHOWER_COLORS[(Math.random()*SHOWER_COLORS.length)|0],delay:8+Math.random()*14});
        lastShoot=t;
      }
      for(let i=shoots.length-1;i>=0;i--){
        const sh=shoots[i];
        if(sh.delay>0){sh.delay--;continue;}
        sh.x+=sh.vx; sh.y+=sh.vy; sh.life++;
        const fade=sh.life>sh.max-12?Math.max(0,(sh.max-sh.life)/12):1;
        const tx=sh.x-sh.vx*5, ty=sh.y-sh.vy*5;
        const g=ctx.createLinearGradient(sh.x,sh.y,tx,ty);
        g.addColorStop(0,`rgba(${sh.col},${(sh.alpha*fade).toFixed(2)})`);
        g.addColorStop(1,`rgba(${sh.col},0)`);
        ctx.strokeStyle=g; ctx.lineWidth=sh.w; ctx.lineCap="round";
        ctx.beginPath(); ctx.moveTo(sh.x,sh.y); ctx.lineTo(tx,ty); ctx.stroke();
        // sparkle head
        ctx.fillStyle=`rgba(255,255,255,${(.9*fade).toFixed(2)})`;
        ctx.beginPath(); ctx.arc(sh.x,sh.y,sh.w*.8,0,7); ctx.fill();
        if(sh.life>sh.max||sh.x>W+80||sh.y>H+80)shoots.splice(i,1);
      }
    }
    requestAnimationFrame(f);
  })(0);
})();

let tiltEl=null;
if(matchMedia("(hover:hover)").matches){
  document.addEventListener("mousemove",e=>{
    let c=e.target.closest("#view .card");
    // Don't tilt list rows or expandable cards — cheap to skip, avoids jank.
    if(c&&(c.classList.contains("skill")||c.tagName==="DETAILS"||c.closest("details")))c=null;
    if(tiltEl&&tiltEl!==c){tiltEl.style.transform="";tiltEl=null;}
    if(!c)return;
    tiltEl=c; c.style.animation="none";
    const r=c.getBoundingClientRect();
    const dx=(e.clientX-r.left)/r.width-.5, dy=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`perspective(750px) rotateX(${(-dy*4.5).toFixed(2)}deg) rotateY(${(dx*5.5).toFixed(2)}deg) translateY(-2px)`;
  });
  document.addEventListener("mouseleave",()=>{if(tiltEl){tiltEl.style.transform="";tiltEl=null;}});
}

// ============ YOU PAGE (Progress + Settings merged) ============
// ============ SCHEDULE TAB ============
function dateKeyOf(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}

// ============ EVENT SCHEDULER ============
const EV_EMOJIS=["⏰","⚽","🏀","🎾","🏋️","🏃","📚","💼","🎓","🏥","🎵","🎨","🍽️","✈️","🛒","💊","🎂","👶","🐕","🏠","💰","📞","🤝","🌟","🎮","⚾","🏈","🎯","🎤","🧘"];

// Build an "Add to Google Calendar" link for an event (also works for Apple/Outlook
// since it's a standard calendar template URL). One-hour event by default.
function gcalUrl(ev){
  const pad=n=>String(n).padStart(2,"0");
  const fmt=dt=>dt.getFullYear()+pad(dt.getMonth()+1)+pad(dt.getDate())+"T"+pad(dt.getHours())+pad(dt.getMinutes())+"00";
  const start=new Date(ev.date+"T"+(ev.time||"09:00"));
  const end=new Date(start.getTime()+60*60*1000);
  let url="https://calendar.google.com/calendar/render?action=TEMPLATE"
    +"&text="+encodeURIComponent(ev.emoji+" "+ev.title)
    +"&dates="+fmt(start)+"/"+fmt(end)
    +"&details="+encodeURIComponent("Added from Life Manual 🏮");
  if(ev.repeat==="weekly")url+="&recur="+encodeURIComponent("RRULE:FREQ=WEEKLY");
  else if(ev.repeat==="daily")url+="&recur="+encodeURIComponent("RRULE:FREQ=DAILY");
  return url;
}

function evListHTML(){
  if(!state.events.length)return`<div style="text-align:center;padding:20px 0;color:var(--muted);font-size:.9rem">No events yet.<br>Add soccer practice, meetings, anything.</div>`;
  const today=todayKey(), dow=new Date().getDay();
  const sorted=[...state.events].sort((a,b)=>{
    const ad=a.repeat!=="none"?"0000-00-00":a.date, bd=b.repeat!=="none"?"0000-00-00":b.date;
    return ad===bd?a.time.localeCompare(b.time):ad.localeCompare(bd);
  });
  return sorted.map(ev=>{
    const isToday=ev.date===today||(ev.repeat==="daily")||(ev.repeat==="weekly"&&new Date(ev.date+"T12:00").getDay()===dow);
    const rLabel=ev.repeat==="daily"?"· Every day":ev.repeat==="weekly"?"· Every week":"";
    const dLabel=ev.repeat==="none"?new Date(ev.date+"T12:00").toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"}):"";
    return`<div class="ev-item">
      <div class="ev-icon">${ev.emoji}</div>
      <div class="ev-body">
        <div class="ev-title">${ev.title}${isToday?`<span class="ev-today-tag">TODAY</span>`:""}</div>
        <div class="ev-meta">${fmtTime(ev.time)}${dLabel?" · "+dLabel:""}${rLabel?" "+rLabel:""}</div>
      </div>
      <div class="ev-actions">
        <a class="ev-cal" href="${gcalUrl(ev)}" target="_blank" rel="noopener" title="Add to Google Calendar">📅</a>
        <button class="ev-del" data-ev-del="${ev.id}">×</button>
      </div>
    </div>`;
  }).join("");
}

function evFormHTML(){
  return`<div class="ev-form">
    <label>Event name</label>
    <input type="text" id="ev-title" placeholder="Soccer practice, Team meeting…" maxlength="40">
    <label>Date — type it or tap 📅</label>
    <div class="ev-date-row">
      <input type="text" id="ev-date-txt" placeholder="YYYY-MM-DD" autocomplete="off">
      <button type="button" class="ev-cal-toggle" id="ev-cal-toggle" aria-label="Open calendar">📅</button>
    </div>
    <div class="ev-cal hidden" id="ev-cal"></div>
    <label>Time — scroll up & down</label>
    ${evTimeWheelHTML(9,0,"AM")}
    <label>Repeat</label>
    <select id="ev-repeat">
      <option value="none">Just once</option>
      <option value="weekly">Every week</option>
      <option value="daily">Every day</option>
    </select>
    <div style="display:flex;gap:10px;margin-top:14px">
      <button class="btn btn-got" id="ev-save" style="flex:1;justify-content:center;margin-top:0">💾 Save event</button>
      <button class="btn btn-ghost" id="ev-done" style="margin-top:0">Done</button>
    </div>
    <div class="section-note" style="margin:10px 0 0;text-align:center">Add as many as you like — tap <b>Save event</b> for each one, then <b>Done</b> when you're finished.</div>
  </div>`;
}
// Inline month calendar (works on every device). Tap a day to pick it.
function evCalHTML(y,m,sel){
  const first=new Date(y,m,1), startDow=first.getDay(), days=new Date(y,m+1,0).getDate();
  const title=first.toLocaleDateString(undefined,{month:"long",year:"numeric"});
  const pad=n=>String(n).padStart(2,"0");
  let cells="";
  for(let i=0;i<startDow;i++)cells+=`<span class="cal-cell empty"></span>`;
  for(let d=1;d<=days;d++){
    const key=y+"-"+pad(m+1)+"-"+pad(d);
    cells+=`<button type="button" class="cal-cell${key===sel?" sel":""}${key===todayKey()?" today":""}" data-cal-day="${key}">${d}</button>`;
  }
  return `<div class="cal-head">
      <button type="button" class="cal-nav" data-cal-nav="-1">‹</button>
      <span class="cal-title">${title}</span>
      <button type="button" class="cal-nav" data-cal-nav="1">›</button>
    </div>
    <div class="cal-dow">${["S","M","T","W","T","F","S"].map(x=>`<span>${x}</span>`).join("")}</div>
    <div class="cal-grid">${cells}</div>`;
}
// Scrollable time wheel (hour / minute / AM-PM). Scroll up & down, or tap a number.
function evTimeWheelHTML(dh,dm,dap){
  const col=(id,arr,sel,fmt)=>`<div class="tw-col" id="${id}"><div class="tw-pad"></div>${arr.map(v=>`<button type="button" class="tw-item${String(v)===String(sel)?" sel":""}" data-v="${v}">${fmt(v)}</button>`).join("")}<div class="tw-pad"></div></div>`;
  const hrs=Array.from({length:12},(_,i)=>i+1), mins=Array.from({length:60},(_,i)=>i);
  return `<div class="timewheel" id="ev-timewheel">
    ${col("tw-h",hrs,dh,v=>v)}<span class="tw-sep">:</span>${col("tw-m",mins,dm,v=>String(v).padStart(2,"0"))}${col("tw-ap",["AM","PM"],dap,v=>v)}
    <div class="tw-band"></div>
  </div>`;
}
function twWire(wheel){
  const H=44;
  wheel.addEventListener("touchmove",e=>e.stopPropagation(),{passive:true});
  wheel.querySelectorAll(".tw-col").forEach(col=>{
    const items=[...col.querySelectorAll(".tw-item")];
    // cylinder: tilt each item back as it moves away from center, fade the far ones
    const tw3D=()=>{items.forEach((it,i)=>{
      const k=(i*H-col.scrollTop)/H;            // distance from center in item-units
      const deg=Math.max(-78,Math.min(78,k*22));
      it.style.transform=`rotateX(${(-deg).toFixed(1)}deg) scale(${Math.max(.7,1-Math.abs(k)*.12).toFixed(3)})`;
      it.style.opacity=Math.max(.16,1-Math.abs(k)*.42).toFixed(2);
    });};
    const mark=i=>items.forEach((x,j)=>x.classList.toggle("sel",j===i));
    let sel=items.findIndex(it=>it.classList.contains("sel")); if(sel<0)sel=0;
    col.scrollTop=sel*H; tw3D();
    let tmr,raf;
    col.addEventListener("scroll",()=>{
      if(raf)cancelAnimationFrame(raf); raf=requestAnimationFrame(tw3D);
      clearTimeout(tmr); tmr=setTimeout(()=>mark(Math.max(0,Math.min(items.length-1,Math.round(col.scrollTop/H)))),90);
    });
    col.addEventListener("click",e=>{const it=e.target.closest(".tw-item");if(!it)return;const i=items.indexOf(it);col.scrollTo({top:i*H,behavior:"smooth"});mark(i);setTimeout(tw3D,260);});
  });
}
function getTimeValue(wheel){
  const sv=id=>{const e=wheel.querySelector("#"+id+" .tw-item.sel");return e?e.dataset.v:null;};
  let h=parseInt(sv("tw-h"))||12, m=parseInt(sv("tw-m"))||0; const ap=sv("tw-ap")||"AM";
  let HH=h%12; if(ap==="PM")HH+=12;
  return String(HH).padStart(2,"0")+":"+String(m).padStart(2,"0");
}
function parseDateLoose(s){
  s=(s||"").trim(); if(!s)return null;
  const iso=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  const pad=n=>String(n).padStart(2,"0");
  if(iso){const y=+iso[1],mo=+iso[2],d=+iso[3],dt=new Date(y,mo-1,d);if(dt.getMonth()===mo-1&&d>=1)return y+"-"+pad(mo)+"-"+pad(d);return null;}
  const dt=new Date(s); if(isNaN(dt))return null;
  return dt.getFullYear()+"-"+pad(dt.getMonth()+1)+"-"+pad(dt.getDate());
}

function playGreeting(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    // Warm two-tone "hello" — low then high, soft and short
    [[392,0],[523.25,.22]].forEach(([freq,delay])=>{
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type="sine";
      osc.frequency.value=freq;
      const t=ctx.currentTime+delay;
      gain.gain.setValueAtTime(0,t);
      gain.gain.linearRampToValueAtTime(0.22,t+0.05);
      gain.gain.exponentialRampToValueAtTime(0.001,t+0.55);
      osc.start(t); osc.stop(t+0.55);
    });
  }catch(e){}
}

function playChime(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    // Gentle rising chime: C5 E5 G5 C6, each note fades out softly
    const notes=[523.25,659.25,783.99,1046.5];
    notes.forEach((freq,i)=>{
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type="sine";
      osc.frequency.value=freq;
      const t=ctx.currentTime+i*0.55;
      gain.gain.setValueAtTime(0,t);
      gain.gain.linearRampToValueAtTime(0.35,t+0.07);
      gain.gain.exponentialRampToValueAtTime(0.001,t+1.3);
      osc.start(t); osc.stop(t+1.3);
    });
  }catch(e){}
}

function scheduleEventReminders(){
  const now=new Date(), today=todayKey(), dow=now.getDay();
  state.events.forEach(ev=>{
    const fires=ev.date===today||(ev.repeat==="daily")||(ev.repeat==="weekly"&&new Date(ev.date+"T12:00").getDay()===dow);
    if(!fires)return;
    const[h,m]=ev.time.split(":").map(Number);
    const evTime=new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,0);
    const warnTime=new Date(evTime.getTime()-10*60*1000);
    const diffWarn=warnTime-now, diffNow=evTime-now;
    // Register alarm with SW (fires even if app is in background)
    if(diffWarn>0&&diffWarn<86400000){
      navigator.serviceWorker?.ready.then(sw=>{
        sw.active?.postMessage({type:"SET_ALARM",id:ev.id,fireAt:warnTime.getTime(),title:ev.title,emoji:ev.emoji});
      }).catch(()=>{});
      // In-app fallback for when app is open
      setTimeout(()=>{playChime();showLumi(`⏰ ${ev.emoji} ${ev.title} starts in 10 minutes!`,"schedule");},diffWarn);
    }else if(diffNow>0&&diffNow<86400000){
      navigator.serviceWorker?.ready.then(sw=>{
        sw.active?.postMessage({type:"SET_ALARM",id:ev.id+"n",fireAt:evTime.getTime(),title:ev.title+" — starting now!",emoji:ev.emoji});
      }).catch(()=>{});
      setTimeout(()=>{playChime();showLumi(`🎯 Time for ${ev.emoji} ${ev.title}! Good luck.`,"schedule");},diffNow);
    }
  });
}
function clearEventAlarm(evId){
  navigator.serviceWorker?.ready.then(sw=>{
    sw.active?.postMessage({type:"CLEAR_ALARM",id:evId});
    sw.active?.postMessage({type:"CLEAR_ALARM",id:evId+"n"});
  }).catch(()=>{});
}

function renderSchedule(v){
  const lcfg=getLumiCfg();
  const DOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const today=new Date();
  const tKey=dateKeyOf(today);
  // Build current week Sun→Sat
  const weekStart=new Date(today); weekStart.setDate(today.getDate()-today.getDay());
  let weekDone=0, weekCells="";
  for(let i=0;i<7;i++){
    const d=new Date(weekStart); d.setDate(weekStart.getDate()+i);
    const key=dateKeyOf(d);
    const isToday=key===tKey;
    const isFuture=d>today&&!isToday;
    const got=state.history[key]||0;
    const full=got>=SLOTS.length;
    if(full)weekDone++;
    let dotCls="day-dot",dotInner=d.getDate();
    if(full){dotCls+=" done";dotInner="✓";}
    else if(got>0){dotCls+=" partial";dotInner=got;}
    weekCells+=`<div class="day-cell ${isToday?"today":""} ${isFuture?"future":""}">
      <span class="dow">${DOW[i]}</span>
      <span class="${dotCls}">${dotInner}</span>
    </div>`;
  }
  // Next check-in calc
  let nextLabel="";
  if(lcfg.on&&lcfg.days.includes(today.getDay())){
    const nowMin=today.getHours()*60+today.getMinutes();
    const times=[["morning",lcfg.morning,"☀️"],["evening",lcfg.evening,"🌙"]];
    for(const[type,t,ic] of times){
      const[h,m]=t.split(":").map(Number);
      if(h*60+m>nowMin){nextLabel=`${ic} Next check-in today at ${fmtTime(t)}`;break;}
    }
    if(!nextLabel)nextLabel="🌅 Next check-in tomorrow morning";
  }

  v.innerHTML=`
    <div class="card hero" style="padding:22px 20px">
      <div class="kicker">Your rhythm</div>
      <div class="big">📅 This week</div>
      <div class="sub">${weekDone} of 7 days completed — keep the chain alive.</div>
      <div class="week-grid">${weekCells}</div>
      ${nextLabel?`<div style="margin-top:16px"><span class="next-pill">${nextLabel}</span></div>`:""}
    </div>

    <div class="band-head"><h2>🔔 Lumi check-ins</h2></div>
    <div class="card">
      <label style="display:flex;align-items:center;justify-content:space-between;font-weight:600;margin-bottom:${lcfg.on?"16px":"0"}">
        <span>Let Lumi remind me</span>
        <input type="checkbox" id="schLumiOn" ${lcfg.on?"checked":""} style="width:24px;height:24px;accent-color:#34d399;cursor:pointer">
      </label>
      <div id="schDetail" style="${lcfg.on?"":"display:none"}">
        <div class="time-card">
          <span class="tc-ic">☀️</span>
          <div class="tc-body"><div class="tc-label">Morning</div><div class="tc-sub">Today's skill & word</div></div>
          <input type="time" id="schMorning" value="${lcfg.morning||"08:00"}">
        </div>
        <div class="time-card">
          <span class="tc-ic">🌙</span>
          <div class="tc-body"><div class="tc-label">Evening</div><div class="tc-sub">Wind-down & progress check</div></div>
          <input type="time" id="schEvening" value="${lcfg.evening||"20:00"}">
        </div>
        <div style="font-size:.82rem;color:var(--muted);font-weight:700;margin:14px 0 8px;text-transform:uppercase;letter-spacing:.06em">Which days?</div>
        <div class="dow-row" id="schDays">
          ${DOW.map((n,i)=>`<button class="dow-pill ${lcfg.days.includes(i)?"on":""}" data-day="${i}">${n[0]}</button>`).join("")}
        </div>
        <button class="btn btn-got" id="schSave" style="margin-top:16px;width:100%">💜 Save my schedule</button>
      </div>
      <div class="section-note" style="margin:${lcfg.on?"14px 0 0":"12px 0 0"}">Lumi's message is pulled from that day's real lesson. Install the app to your home screen and she can reach you even when it's closed.</div>
    </div>

    <button class="more-btn" id="schPreview" style="text-align:center">👋 Preview a check-in from Lumi</button>

    <div class="ev-section-head">
      <div style="display:flex;align-items:center;gap:8px"><span style="font-size:1.1rem">📌</span><h2 style="margin:0;font-size:1.06rem">My Events</h2></div>
      <button class="ev-add-btn" id="evAddBtn">+ Add event</button>
    </div>
    <div id="ev-form-wrap"></div>
    <div class="card" id="ev-list-card">${evListHTML()}</div>
    <div class="section-note" style="text-align:center">Tap 📅 on any event to add it to Google Calendar — works with Apple & Outlook too. ${getChar().name} will still remind you inside the app.</div>`;

  // Handlers
  $("#schLumiOn").onchange=e=>{
    const cfg=getLumiCfg(); cfg.on=e.target.checked;
    if(cfg.on&&"Notification"in window&&Notification.permission==="default")
      Notification.requestPermission().then(p=>toast(p==="granted"?"🔔 Notifications on!":"💜 Lumi will remind you inside the app."));
    saveLumiCfg(cfg); scheduleReminders(); renderSchedule(v);
  };
  const daysWrap=$("#schDays");
  if(daysWrap)daysWrap.addEventListener("click",e=>{
    const b=e.target.closest("[data-day]"); if(!b)return;
    b.classList.toggle("on");
  });
  if($("#schSave"))$("#schSave").onclick=()=>{
    const cfg=getLumiCfg();
    cfg.morning=$("#schMorning").value||"08:00";
    cfg.evening=$("#schEvening").value||"20:00";
    cfg.days=[...document.querySelectorAll("#schDays .dow-pill.on")].map(b=>+b.dataset.day);
    if(!cfg.days.length){toast("Pick at least one day for Lumi.");return;}
    saveLumiCfg(cfg); scheduleReminders(); toast("✓ Schedule saved! Lumi's on it. 💜");
  };
  if($("#schPreview"))$("#schPreview").onclick=()=>{
    const h=new Date().getHours();
    showLumi(lumiMsg(h<14?"morning":"evening"),"today");
  };
  // Events
  function wireEvDel(){
    document.querySelectorAll("[data-ev-del]").forEach(btn=>{
      btn.onclick=()=>{
        const delId=+btn.dataset.evDel; clearEventAlarm(delId); state.events=state.events.filter(e=>e.id!==delId);
        saveAll(); syncEventsToWorker();
        const lc=$("#ev-list-card"); if(lc)lc.innerHTML=evListHTML();
        wireEvDel();
        toast("Event removed.");
      };
    });
  }
  wireEvDel();
  const evAddBtn=$("#evAddBtn");
  if(evAddBtn)evAddBtn.onclick=()=>{
    const fw=$("#ev-form-wrap"); if(!fw)return;
    if(fw.children.length){fw.innerHTML="";return;}   // tapping again closes it
    fw.innerHTML=evFormHTML();
    let selEmoji="⏰";
    const t=new Date();
    let selDate=todayKey(), viewY=t.getFullYear(), viewM=t.getMonth();
    const cal=fw.querySelector("#ev-cal");
    const dateTxt=fw.querySelector("#ev-date-txt");
    const drawCal=()=>{cal.innerHTML=evCalHTML(viewY,viewM,selDate);};
    const syncTxt=()=>{dateTxt.value=selDate;};
    syncTxt();
    fw.querySelector("#ev-cal-toggle").onclick=()=>{
      if(cal.classList.contains("hidden")){const[y,m]=selDate.split("-").map(Number);viewY=y;viewM=m-1;drawCal();cal.classList.remove("hidden");}
      else cal.classList.add("hidden");
    };
    cal.addEventListener("click",e=>{
      const nav=e.target.closest("[data-cal-nav]");
      if(nav){viewM+=+nav.dataset.calNav; if(viewM<0){viewM=11;viewY--;} if(viewM>11){viewM=0;viewY++;} drawCal(); return;}
      const day=e.target.closest("[data-cal-day]");
      if(day){selDate=day.dataset.calDay; drawCal(); syncTxt();}
    });
    dateTxt.addEventListener("change",()=>{
      const p=parseDateLoose(dateTxt.value);
      if(p){selDate=p; const[y,m]=p.split("-").map(Number); viewY=y; viewM=m-1; if(!cal.classList.contains("hidden"))drawCal();}
      else {toast("Try a date like 2026-06-20"); syncTxt();}
    });
    const wheel=fw.querySelector("#ev-timewheel"); twWire(wheel);
    fw.querySelector("#ev-done").onclick=()=>{fw.innerHTML="";};
    fw.querySelector("#ev-save").onclick=()=>{
      const title=(fw.querySelector("#ev-title").value||"").trim();
      if(!title){toast("Give the event a name.");return;}
      if(!selDate){toast("Pick a date.");return;}
      const time=getTimeValue(wheel);
      const repeat=fw.querySelector("#ev-repeat").value;
      state.events.push({id:Date.now(),emoji:selEmoji,title,date:selDate,time,repeat});
      saveAll(); scheduleEventReminders(); syncEventsToWorker();
      // Ask for notification permission if not yet granted — needed for event alerts
      if("Notification"in window&&Notification.permission==="default"){
        Notification.requestPermission().then(async p=>{
          if(p==="granted"){toast("🔔 Notifications on — I'll alert you before this event!");await subscribePush();}
        });
      }
      const lc=$("#ev-list-card"); if(lc){lc.innerHTML=evListHTML(); wireEvDel();}
      // keep the form open so they can add another right away
      const ti=fw.querySelector("#ev-title"); ti.value=""; ti.focus();
      toast("✓ Saved! Add another, or tap Done.");
    };
  };
}
function fmtTime(t){const[h,m]=t.split(":").map(Number);const ap=h>=12?"PM":"AM";const h12=h%12||12;return h12+":"+String(m).padStart(2,"0")+" "+ap;}

function renderYou(v){
  const total=BANDS.reduce((n,b)=>n+b.skills.length,0);
  const done=Object.keys(state.done).filter(k=>state.done[k]).length;
  const pct=Math.round(done/total*100);
  const lvl=level();
  const lvlPct=lvl.next?Math.round(lvl.into/lvl.next*100):100;
  const themeName=THEME_LABELS[getTheme()]||"🌙 Dark";
  const lcfg=getLumiCfg();
  const LEVEL_ICONS=["🌱","📖","🔍","🏗️","🌟","📜","💎","👑"];
  v.innerHTML=`
    <div class="card hero" style="text-align:center;padding:28px 20px 22px">
      <div class="watermark" style="bottom:-22px;font-size:5.5rem;opacity:.07">${lvl.name}</div>
      <div style="font-size:3rem;margin-bottom:6px;filter:drop-shadow(0 0 16px #a78bfa88)">${LEVEL_ICONS[lvl.lv]||"🌱"}</div>
      <div style="font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:#a5b4fc;margin-bottom:4px">OPERATOR LEVEL ${lvl.lv+1}</div>
      <div style="font-size:2rem;font-weight:800;background:linear-gradient(120deg,#a78bfa,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.1">${lvl.name}</div>
      ${lvl.next?`<div class="bar" style="margin:14px 0 4px"><i style="width:${lvlPct}%"></i></div>
      <div style="font-size:.82rem;opacity:.7">${lvl.into} / ${lvl.next} XP → ${LEVELS[lvl.lv+1]}</div>`
      :`<div style="font-size:.9rem;color:#34d399;margin-top:10px">✦ Maximum rank achieved</div>`}
      <div class="statline" style="justify-content:center;margin-top:14px">
        <span>🔥 <b>${state.streak.n}</b>-day streak</span>
        <span>✨ <b>${state.xp}</b> total XP</span>
        <span>🗺️ <b>${done}/${total}</b> skills</span>
      </div>
    </div>

    <div class="band-head"><h2>🗺️ Life Journey</h2><span style="color:var(--muted);font-size:.85rem">${pct}% complete</span></div>
    <div class="card" style="padding:12px 16px">
      <div class="bar" style="margin:0 0 12px"><i style="width:${pct}%"></i></div>
      ${BANDS.map(b=>{const p=bandProgress(b);return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:9px">
        <span style="font-size:.76rem;color:var(--muted);width:74px;flex:none">${b.range.replace("Ages ","")}</span>
        <div class="bar" style="flex:1;margin:0;height:6px"><i style="width:${p.pct}%"></i></div>
        <span style="font-size:.76rem;color:var(--muted);width:36px;text-align:right;flex:none">${p.done}/${p.total}</span>
      </div>`;}).join("")}
    </div>

    <div class="band-head" style="margin-top:20px"><h2>⚙️ Settings</h2></div>
    <button class="more-btn" id="changeGuide">🤝 My guide: <b>${getChar().name}</b> <span style="color:var(--muted);font-weight:400">the ${getChar().animal.toLowerCase()} · tap to switch</span></button>
    <button class="more-btn" id="changeAge">🎂 My age <span style="color:var(--muted);font-weight:400">(${state.age??"not set"})</span></button>
    <button class="more-btn" id="themeBtn">🎨 Theme: <b>${themeName}</b></button>
    <button class="more-btn" id="fontBtn">🔠 Text size: <b>${({"":"Normal","fs-lg":"Large","fs-xl":"Extra large"})[localStorage.getItem(K.fs)||""]}</b></button>

    <button class="more-btn" id="goSchedule">🔔 Lumi reminders & schedule <span style="color:var(--muted);font-weight:400">${lcfg.on?"· on":"· off"} →</span></button>

    <div class="band-head" style="margin-top:4px"><h2>💾 Data</h2></div>
    <button class="more-btn" id="exportBtn">💾 Back up my progress</button>
    <button class="more-btn" id="importBtn">📥 Restore from backup</button>
    <div id="ioArea"></div>
    <button class="more-btn danger" id="resetBtn">🗑️ Erase all progress</button>
    <div class="card" style="color:var(--muted);font-size:.86rem;margin-top:4px;line-height:1.6">
      <b style="color:var(--ink)">About Life Manual 2.0</b><br>
      Built for everyone who didn't have a parent or role model — the people who learned life by trial and error. Not anymore. No account, no tracking. Everything stays on this device.<br><br>
      <span style="font-size:.78rem">General life guidance only — not medical, legal, or financial advice.</span>
    </div>`;

  $("#changeGuide").onclick=()=>startOnboard(3);
  $("#changeAge").onclick=()=>startOnboard(2);
  $("#themeBtn").onclick=()=>{applyTheme(nextTheme());renderYou(v);};
  $("#fontBtn").onclick=()=>{const order=["","fs-lg","fs-xl"];const cur=localStorage.getItem(K.fs)||"";const nx=order[(order.indexOf(cur)+1)%3];localStorage.setItem(K.fs,nx);applyPrefs();renderYou(v);};
  $("#goSchedule").onclick=()=>{state.tab="schedule";render();window.scrollTo(0,0);};
  $("#exportBtn").onclick=()=>{
    const data=JSON.stringify({age:state.age,done:state.done,xp:state.xp,streak:state.streak,daily:state.daily});
    $("#ioArea").innerHTML=`<div class="card"><div class="section-note">Copy and save this somewhere safe:</div><textarea readonly id="expTxt">${data}</textarea></div>`;
    $("#expTxt").select();
  };
  $("#importBtn").onclick=()=>{
    $("#ioArea").innerHTML=`<div class="card"><div class="section-note">Paste your backup text here:</div><textarea id="impTxt"></textarea><br><button class="btn btn-got" id="impGo">Restore</button></div>`;
    $("#impGo").onclick=()=>{try{
      const d=JSON.parse($("#impTxt").value);
      if(typeof d.done!=="object")throw 0;
      state.done=d.done||{};if(d.age)state.age=d.age;
      if(typeof d.xp==="number")state.xp=d.xp;
      if(d.streak)state.streak=d.streak;
      if(d.daily)state.daily=d.daily;
      localStorage.setItem(K.age,state.age);saveAll();toast("✓ Progress restored!");render();
    }catch(e){toast("That doesn't look like a Life Manual backup.");}};
  };
  $("#resetBtn").onclick=()=>{if(confirm("Erase ALL progress, XP, streaks, and your age? This can't be undone.")){
    Object.values(K).forEach(k=>localStorage.removeItem(k));
    state={...state,age:null,done:{},daily:{},streak:{n:0,last:null},xp:0,events:[],character:"",tab:"today"};
    applyPrefs();toast("Memory wiped. Fresh start.");render();
  }};
}

// ============ LUMI REMINDER ENGINE ============
const LK="lifemanual.reminders";
function getLumiCfg(){const c=JSON.parse(localStorage.getItem(LK)||'{"on":false,"morning":"08:00","evening":"20:00"}');if(!c.days)c.days=[0,1,2,3,4,5,6];return c;}
function saveLumiCfg(cfg){localStorage.setItem(LK,JSON.stringify(cfg));}

function lumiMsg(type){
  ensureDaily();
  const d=dailyContent();
  const c=getChar();
  const nm=state.name?" "+state.name:"";
  if(type==="morning"){
    const opts=[
      `Good morning${nm}! ${c.emoji} Today's skill is "${d.skill?d.skill.skill.t:"something powerful"}". Your daily upload is ready — let's go!`,
      `Rise and shine${nm}! ${c.emoji} Word of the day: "${d.vocab.w}" — ${d.vocab.d.slice(0,60)}… Can you use it today?`,
      `Hey${nm}! ${c.emoji} Today's challenge: "${d.challenge.c}". I'm rooting for you!`
    ];
    return opts[dayNum()%opts.length];
  }
  if(type==="evening"){
    const n=gotCount();
    if(n===SLOTS.length)return `Evening${nm}! ${c.emoji} You finished all 7 modules — ${state.streak.n}-day streak! I'm so proud of you. 💜`;
    return `Wind-down time${nm}! ${c.emoji} ${n}/7 modules done today. Money move: "${d.money.h}". Still time to finish your upload!`;
  }
  return`Hey${nm}! ${c.emoji} Just a gentle nudge — your daily upload is waiting. You've got this!`;
}

function showLumi(msg,targetTab){
  const el=document.getElementById("lumi");
  if(!el)return;
  const c=getChar();
  const face=el.querySelector(".lumi-face");
  if(face)face.innerHTML=charVideoHTML(c);
  const nm=el.querySelector(".lumi-name");
  if(nm)nm.textContent=c.name+" · Life Manual";
  document.getElementById("lumi-text").textContent=msg;
  el._tab=targetTab||"today";
  el.classList.remove("hidden");
}
function hideLumi(){document.getElementById("lumi").classList.add("hidden");}
function lumiOpen(){
  const el=document.getElementById("lumi");
  state.tab=(el&&el._tab)||"today";
  hideLumi(); render(); window.scrollTo(0,0);
}

function scheduleReminders(){
  const cfg=getLumiCfg();
  if(!cfg.on)return;
  if(cfg.days&&!cfg.days.includes(new Date().getDay()))return;
  const entries=[cfg.morning&&{t:cfg.morning,type:"morning"},cfg.evening&&{t:cfg.evening,type:"evening"}].filter(Boolean);
  const now=new Date();
  entries.forEach(({t,type})=>{
    const[h,m]=t.split(":").map(Number);
    const fire=new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,0);
    const diff=fire-now;
    if(diff>0&&diff<86400000){
      setTimeout(()=>{
        const msg=lumiMsg(type);
        if("Notification" in window&&Notification.permission==="granted"){
          navigator.serviceWorker&&navigator.serviceWorker.ready.then(sw=>{
            sw.showNotification("✨ Life Manual",{body:msg,icon:"icon-192.png",tag:"lumi-"+type});
          }).catch(()=>{});
        }
        showLumi(msg,"today");
      },diff);
    }
  });
}

function lumiOnOpen(){
  const cfg=getLumiCfg();
  if(!cfg.on||!state.age)return;
  if(cfg.days&&!cfg.days.includes(new Date().getDay()))return;
  const now=new Date();
  [cfg.morning&&{t:cfg.morning,type:"morning"},cfg.evening&&{t:cfg.evening,type:"evening"}].filter(Boolean).forEach(({t,type})=>{
    const[h,m]=t.split(":").map(Number);
    const fire=new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,0);
    const diff=now-fire;
    const shownKey="lifemanual.lumi."+todayKey()+"."+type;
    if(diff>=0&&diff<1800000&&!localStorage.getItem(shownKey)){
      localStorage.setItem(shownKey,"1");
      setTimeout(()=>showLumi(lumiMsg(type),"today"),2000);
    }
  });
}

// ============ FLOATING CHAT + OVERLAY ============
let proactiveTimer=null;

function initFAB(){
  const fab=document.getElementById("chatFab");
  const face=document.getElementById("fabFaceWrap");
  if(!fab||!face)return;
  const c=getChar();
  face.innerHTML=`<div class="chat-fab-emoji">${c.emoji}</div>`;
  fab.onclick=openChatOverlay;
  // wire the overlay close button
  const cls=document.getElementById("chatOverlayClose");
  if(cls)cls.onclick=closeChatOverlay;
  // wire chat input in overlay (permanent elements)
  const sb=document.getElementById("chatSend");
  const cb=document.getElementById("chatBox");
  if(sb)sb.onclick=sendChat;
  if(cb){
    cb.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();sendChat();}};
    cb.addEventListener("input",()=>{if(sb)sb.classList.toggle("send-empty",!cb.value.trim());});
  }
}

function openChatOverlay(){
  const overlay=document.getElementById("chatOverlay");
  if(!overlay)return;
  const c=getChar();
  // Fill header
  const coFace=document.getElementById("coFace");
  if(coFace)coFace.innerHTML=charVideoHTML(c);
  const coName=document.getElementById("coName");
  if(coName)coName.innerHTML=`${c.name}<span class="chat-dot"></span>`;
  const coRole=document.getElementById("coRole");
  if(coRole)coRole.textContent=c.pillar;
  // Fill thread
  renderCoThread();
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
  // Greeting sound + entrance animation on the face
  playGreeting();
  if(coFace){coFace.classList.add("guide-entrance");setTimeout(()=>coFace.classList.remove("guide-entrance"),700);}
  // Focus input after animation
  setTimeout(()=>{const cb=document.getElementById("chatBox");if(cb)cb.focus();},400);
  // Clear badge
  setBadge(0);
}

function closeChatOverlay(){
  const overlay=document.getElementById("chatOverlay");
  if(overlay)overlay.classList.remove("open");
  document.body.style.overflow="";
}

function renderCoThread(){
  const thread=document.getElementById("coThread");
  if(!thread)return;
  const c=getChar();
  const gFace=charFaceHTML(c);
  // Opening message if no chat yet
  if(!chatLog.length){
    const nm=state.name||"friend";
    thread.innerHTML=`<div class="chat-day">Today · ${new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"})}</div>
      <div class="msg guide"><div class="msg-face">${gFace}</div>
      <div class="bubble guide">Hey ${nm}! ${c.emoji} I'm here whenever you need me. Ask me anything about life — money, jobs, health, relationships, cooking… whatever's on your mind. 💜</div></div>`;
    return;
  }
  let html=`<div class="chat-day">Today · ${new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"})}</div>`;
  chatLog.forEach(m=>{
    if(m.role==="me"){html+=`<div class="msg me"><div class="bubble me">${escHtml(m.text)}</div></div>`;return;}
    html+=`<div class="msg guide"><div class="msg-face">${gFace}</div><div class="bubble guide">${m.text}</div></div>`;
    if(m.guideId)html+=`<div class="qr"><button data-open-guide="${m.guideId}">Open the guide →</button></div>`;
  });
  thread.innerHTML=html;
  scrollOverlay();
}

let _badgeCount=0;
function setBadge(n){
  _badgeCount=n;
  const badge=document.getElementById("chatBadge");
  if(!badge)return;
  if(n>0){badge.textContent=n>9?"9+":n;badge.classList.add("show");}
  else badge.classList.remove("show");
}

function proactiveNudge(){
  const c=getChar();
  const nm=state.name||"friend";
  const left=SLOTS.length-gotCount();
  if(left<=0)return; // all done, no nudge needed
  const msgs=[
    `Hey ${nm}! ${c.emoji} You've got ${left} lesson${left>1?"s":""} left in today's upload. Want to knock one out? Tap "Got it" when you're ready!`,
    `Just checking in, ${nm}! ${c.emoji} ${left} thing${left>1?"s":""} left today. Every one builds on the last — you've got this. 💪`,
    `${nm}, your daily upload is still waiting! ${c.emoji} ${left} card${left>1?"s":""} left. Takes 2 minutes. Your future self thanks you. 💜`
  ];
  const text=msgs[Math.floor(Math.random()*msgs.length)];
  chatLog.push({role:"guide",text});
  // wiggle the FAB + show badge
  const fab=document.getElementById("chatFab");
  if(fab){fab.classList.add("wiggle");setTimeout(()=>fab.classList.remove("wiggle"),800);}
  setBadge(_badgeCount+1);
  // If overlay already open, append message
  const thread=document.getElementById("coThread");
  if(thread&&document.getElementById("chatOverlay").classList.contains("open")){
    const gFace=charFaceHTML(c);
    thread.insertAdjacentHTML("beforeend",`<div class="msg guide"><div class="msg-face">${gFace}</div><div class="bubble guide">${text}</div></div>`);
    scrollOverlay();
  }
}

function startProactiveTimer(){
  if(proactiveTimer)clearTimeout(proactiveTimer);
  if(gotCount()>=SLOTS.length)return; // all done, skip
  proactiveTimer=setTimeout(proactiveNudge, 4*60*1000); // 4 minutes
}

// ── NOTIFICATION PERMISSION BANNER ──
let _notifShown=false;
function showNotifBanner(){
  if(_notifShown)return;
  if(!("Notification" in window))return;
  if(Notification.permission!=="default")return;
  if(localStorage.getItem("lm.notif.asked"))return;
  _notifShown=true;
  const banner=document.getElementById("notifBanner");
  if(!banner)return;
  const face=document.getElementById("notifBannerFace");
  if(face)face.textContent=getChar().emoji;
  setTimeout(()=>banner.classList.add("show"),300);
  document.getElementById("notifYes").onclick=()=>{
    localStorage.setItem("lm.notif.asked","1");
    banner.classList.remove("show");
    Notification.requestPermission().then(async p=>{
      if(p==="granted"){
        toast("🔔 Done! I'll remind you every day. 💜");
        await subscribePush();
        navigator.serviceWorker&&navigator.serviceWorker.ready.then(sw=>{
          sw.showNotification("✨ Life Manual",{
            body:`Hey${state.name?" "+state.name:""}! Your daily upload is waiting. 💜`,
            icon:"icon-192.png",tag:"lm-welcome",requireInteraction:false
          });
        }).catch(()=>{});
      } else toast("💜 No worries — I'll be here when you need me.");
    });
  };
  document.getElementById("notifNo").onclick=()=>{
    localStorage.setItem("lm.notif.asked","1");
    banner.classList.remove("show");
  };
}

applyPrefs();
if(!state.age)startOnboard(0);
render();
window.addEventListener("resize",()=>{
  const g=document.getElementById("nav-glider");
  if(g){g.style.transition="none";updateNavGlider();requestAnimationFrame(()=>{g.style.transition="";});}
  else updateNavGlider();
});
scheduleReminders();
scheduleEventReminders();
syncEventsToWorker();
// Listen for SW messages (e.g. tapping a notification opens a tab)
navigator.serviceWorker?.addEventListener("message",e=>{
  if(e.data?.type==="OPEN_TAB"){state.tab=e.data.tab||"today";render();window.scrollTo(0,0);}
});
// If app was opened from a notification URL param
(()=>{const p=new URLSearchParams(location.search).get("tab");if(p){state.tab=p;render();}})();
avatarPing();
lumiOnOpen();
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
setTimeout(initFAB, 0);
// iOS keyboard fix — keep chat overlay pinned above keyboard
if(window.visualViewport){
  window.visualViewport.addEventListener("resize",()=>{
    const overlay=document.querySelector(".chat-overlay.open");
    if(overlay){
      const kb=window.innerHeight-window.visualViewport.height;
      overlay.style.height=window.visualViewport.height+"px";
      overlay.style.top=window.visualViewport.offsetTop+"px";
    }
  });
  window.visualViewport.addEventListener("scroll",()=>{
    const overlay=document.querySelector(".chat-overlay.open");
    if(overlay)overlay.style.top=window.visualViewport.offsetTop+"px";
  });
}

