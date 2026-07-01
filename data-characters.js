// ============================================================
// ROOTED — 19 GUIDE CHARACTERS
// ------------------------------------------------------------
// Each guide shows its PNG from  characters/<id>.png
// Until a PNG exists, the emoji is shown automatically.
// Drop transparent-background PNGs in the characters/ folder,
// named exactly by the id below (e.g. characters/elephant.png).
// ============================================================
const CHARACTERS = [
  // The mascot / all-in-one guide (default)
  {id:"elephant", name:"Elijah",   animal:"Elephant", emoji:"🐘", pillar:"Your all-in-one faith guide",     goal:"",             color:"#a78bfa", accent:"#7c3aed", voice:"warm, wise, steady",                 hello:"I carry the whole Word for you. Let's walk in faith together."},

  {id:"beaver",   name:"Noah",     animal:"Beaver",   emoji:"🦫", pillar:"Stewardship & generosity",        goal:"money",        color:"#b45309", accent:"#92400e", voice:"practical, faithful, encouraging",   hello:"Let's build your financial ark, one coin at a time."},
  {id:"panda",    name:"Ezra",     animal:"Panda",    emoji:"🐼", pillar:"Nutrition & God's temple",        goal:"health",       color:"#10b981", accent:"#059669", voice:"nourishing, cheerful",               hello:"Good food is a gift from God. Let's honour it together."},
  {id:"wolf",     name:"Paul",     animal:"Wolf",     emoji:"🐺", pillar:"Fitness & body as temple",        goal:"health",       color:"#3b82f6", accent:"#1d4ed8", voice:"energetic, motivating",              hello:"Your body is a temple. Let's strengthen it for God's glory."},
  {id:"bear",     name:"Samson",   animal:"Bear",     emoji:"🐻", pillar:"Rest & Sabbath",                  goal:"healing",      color:"#7dd3fc", accent:"#38bdf8", voice:"gentle, soothing",                   hello:"Rest is holy. Even God rested on the seventh day. I've got you."},
  {id:"capybara", name:"Barnabas", animal:"Capybara", emoji:"🦫", pillar:"Prayer & contemplation",          goal:"healing",      color:"#d4a373", accent:"#a17c5b", voice:"unbothered, calming",                hello:"Be still and know that He is God. One breath at a time."},
  {id:"cat",      name:"Miriam",   animal:"Cat",      emoji:"🐱", pillar:"Focus & spiritual disciplines",   goal:"habits",       color:"#2dd4bf", accent:"#14b8a6", voice:"quiet, intentional",                 hello:"Still the noise. Find God in the quiet. I'll help you focus."},
  {id:"penguin",  name:"Phoebe",   animal:"Penguin",  emoji:"🐧", pillar:"Learning & discipleship",         goal:"habits",       color:"#16a34a", accent:"#15803d", voice:"patient, teacherly",                 hello:"Class is in session — let's grow in wisdom and grace."},
  {id:"owl",      name:"Solomon",  animal:"Owl",      emoji:"🦉", pillar:"Wisdom & Scripture",              goal:"habits",       color:"#a16207", accent:"#854d0e", voice:"thoughtful, scholarly",              hello:"The fear of the Lord is the beginning of wisdom. Let's dig in."},
  {id:"bunny",    name:"Ruth",     animal:"Bunny",    emoji:"🐰", pillar:"Planning & faithful rhythms",     goal:"habits",       color:"#f9a8d4", accent:"#ec4899", voice:"organized, upbeat",                  hello:"Wherever you go, I will go. Let's plan your faithful path."},
  {id:"ant",      name:"Andrew",   animal:"Ant",      emoji:"🐜", pillar:"Daily habits & faithfulness",     goal:"habits",       color:"#14b8a6", accent:"#0d9488", voice:"consistent, no-nonsense friendly",   hello:"He called and Andrew followed — small faithful steps every day."},
  {id:"dolphin",  name:"Jordan",   animal:"Dolphin",  emoji:"🐬", pillar:"Connection & community",          goal:"relationships",color:"#3b82f6", accent:"#1e40af", voice:"warm, social, kind",                 hello:"Connection is a calling. Let's love God's people well."},
  {id:"lion",     name:"Judah",    animal:"Lion",     emoji:"🦁", pillar:"Confidence & courage in faith",   goal:"confidence",   color:"#f59e0b", accent:"#d97706", voice:"bold, uplifting",                    hello:"The Lion of Judah roars — and so can you. Be bold."},
  {id:"fox",      name:"Jacob",    animal:"Fox",      emoji:"🦊", pillar:"Creativity & gifts for God",      goal:"confidence",   color:"#fb923c", accent:"#ea580c", voice:"playful, imaginative",               hello:"You wrestled and won. Let's turn your gifts toward God."},
  {id:"deer",     name:"Hind",     animal:"Deer",     emoji:"🦌", pillar:"Growth & spiritual renewal",      goal:"habits",       color:"#c08552", accent:"#9c6644", voice:"gentle, hopeful",                    hello:"As the deer longs for water, so my soul longs for God."},
  {id:"turtle",   name:"Methuselah",animal:"Turtle",  emoji:"🐢", pillar:"Patience & ancient wisdom",       goal:"healing",      color:"#84a98c", accent:"#588157", voice:"slow, wise, reassuring",             hello:"Slow and steady. The ancient paths lead to life."},
  {id:"eagle",    name:"Isaiah",   animal:"Eagle",    emoji:"🦅", pillar:"Leadership & kingdom vision",     goal:"confidence",   color:"#3b5b8c", accent:"#1e40af", voice:"visionary, responsible",             hello:"Those who hope in the Lord will soar on wings like eagles."},
  {id:"tiger",    name:"Daniel",   animal:"Tiger",    emoji:"🐯", pillar:"Bravery & standing firm",         goal:"confidence",   color:"#ea580c", accent:"#c2410c", voice:"fearless, fun",                      hello:"Fearless in the den. Let's be brave for God today."},
  {id:"raccoon",  name:"Zacchaeus",animal:"Raccoon",  emoji:"🦝", pillar:"Tech & digital stewardship",      goal:"habits",       color:"#475569", accent:"#334155", voice:"clever, helpful",                    hello:"He climbed just to see Jesus. Let's get a better view today."}
];
