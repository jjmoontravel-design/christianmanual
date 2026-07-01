// ============================================================
// ROOTED — FAITH CHAT REPLIES
// Buddy tone: warm Christian friend who knows their Bible.
// Not preachy. Real talk. Short answers with heart.
// ============================================================
const REPLIES = [

// ══════════════════════════════════════════════════════════
// PRAYER
// ══════════════════════════════════════════════════════════
{kw:["how to pray","how do i pray","start praying","pray for beginners","don't know how to pray","never prayed before"],
 a:"Honestly? Just talk to God like you're texting a friend. No fancy words needed. Tell Him what's going on, what you're scared of, what you need. He already knows — He just wants to hear it from you. Start with: 'God, I don't really know how to do this, but here I am.' That's a perfect prayer. 🙏"},

{kw:["can't find words to pray","don't know what to say","nothing to say to god","stuck praying","words won't come","pray but nothing comes out"],
 a:"The Holy Spirit literally intercedes for us when we don't have words — Romans 8:26 says He prays through our groans when we can't. So even sitting in silence and showing up is prayer. Or try the Pray with me card on the Today tab — just tell me what's on your heart and we'll pray it together. 💜"},

{kw:["does god hear my prayers","does god listen","does prayer work","god not listening","prayers not answered","why isn't god answering"],
 a:"He hears every single one. Sometimes the answer is yes, sometimes it's not yet, sometimes it's 'I've got something better.' The hardest part is trusting the silence. Keep going — faith isn't certainty, it's trust while you wait. His timing is different from ours and it's always right. ⏳"},

{kw:["how long should i pray","how much should i pray","when to pray","best time to pray","pray morning","pray at night"],
 a:"There's no minimum. Five minutes of real prayer beats an hour of going through motions. Morning works great because you're giving God the first part of your day before life gets loud. But honestly pray whenever — driving, walking, before bed. 1 Thessalonians 5:17 says pray without ceasing. That means prayer becomes a running conversation all day. ☀️"},

{kw:["lord's prayer","our father","our father who art in heaven","how to pray the lord's prayer"],
 a:"The Lord's Prayer (Matthew 6:9-13) is Jesus giving us a template. Here's the breakdown: praise God first, ask for His will over yours, then bring your needs, ask for forgiveness while forgiving others, ask for protection from temptation. It's not meant to be repeated robotically — it's a framework to build real prayer around. 📖"},

{kw:["pray for others","intercession","intercessory prayer","praying for someone else","pray for my family","pray for a friend"],
 a:"Praying for others is one of the most powerful things you can do for them. You don't need to be perfect to pray for someone — you're not the source of the answer, God is. Keep it simple: name them, tell God what they need, ask for His best for them. James 5:16 says the prayer of a righteous person is powerful and effective. 💪"},

{kw:["prayer journal","write prayers","journal prayers","prayer list","how to keep prayer journal"],
 a:"A prayer journal is honestly one of the best faith tools ever. Write down what you pray for, then look back and see how God answered over weeks and months. Even 'no' answers start to make sense later. You'll be amazed at what you see. Grab a notebook and date every entry. 📓"},

{kw:["fasting and prayer","what is fasting","how to fast","should i fast","fasting","why fast"],
 a:"Fasting is cutting out food (or something else) for a period to focus on God instead. It's not about earning points — it's about telling your body that God matters more than hunger right now. Start with skipping one meal and using that time to pray instead. Isaiah 58 talks about what real fasting looks like. Even a partial fast (no social media, no TV) counts. 🌿"},

// ══════════════════════════════════════════════════════════
// BIBLE
// ══════════════════════════════════════════════════════════
{kw:["where to start in the bible","how to read the bible","bible for beginners","start reading bible","never read the bible","don't know where to start"],
 a:"Don't start at Genesis and try to power through — most people quit in Leviticus 😄 Start with the Gospel of John. It's the story of Jesus told in a way that's deep but readable. After that: Psalms (real emotional range), Proverbs (practical wisdom), then Acts. You can go back to the Old Testament once you know Jesus. 📖"},

{kw:["bible reading plan","read through the bible","bible plan","how to read bible daily","bible in a year"],
 a:"A year-through plan sounds great but a lot of people burn out. Try this instead: one chapter a day, 5 days a week. Pick one book and finish it before moving on. YouVersion app has plans for every level — some are only 5 minutes a day. Consistency over the long haul is what changes you. 📅"},

{kw:["bible version","which bible translation","niv","kjv","esv","nlt","best bible translation","what bible to read"],
 a:"NLT (New Living Translation) is great for beginners — reads like a normal person wrote it. NIV is solid and very common. ESV is more word-for-word accurate, good for study. KJV is beautiful but old English can be confusing. My honest pick to start: NLT or NIV. Don't let the translation question slow you down from just reading. 📖"},

{kw:["understand the bible","bible confusing","hard to understand bible","don't understand bible","bible makes no sense"],
 a:"It's okay — even scholars argue about parts of it! A few things that help: read whole books at once, not random verses. Google the historical context of what you're reading. Get a study Bible (it has notes explaining what's going on). And ask the Holy Spirit to help you understand — that's literally what He's there for (John 14:26). 🙏"},

{kw:["favorite bible verse","best bible verse","powerful bible verse","bible verse for today","encouraging verse","bible verse for hard times"],
 a:"So many good ones. For hard times: Isaiah 41:10 — 'Do not fear, for I am with you.' For courage: Joshua 1:9. For peace: Philippians 4:6-7. For purpose: Jeremiah 29:11. For love: Romans 8:38-39 — nothing can separate you from God's love. Nothing. That one hits different every single time. 💜"},

{kw:["old testament","new testament","difference between old and new testament","what is the old testament","what is the new testament"],
 a:"Old Testament = before Jesus. It's the story of God and Israel — creation, law, prophets, poetry. New Testament = Jesus's life, death, resurrection, and the early church. The OT points toward Jesus; the NT shows He's the fulfillment. You don't have to understand all of it — just know they're one connected story. 📚"},

{kw:["psalms","book of psalms","praying the psalms","read psalms","which psalm"],
 a:"Psalms is the prayer and worship book of the Bible — 150 of them. It covers everything: joy, grief, anger, doubt, praise, desperation. Psalm 23 for comfort. Psalm 51 for honest confession. Psalm 139 for when you feel unseen. Psalm 46 for when everything feels out of control. Just open it and read one a day — it'll meet you where you are. 🌊"},

{kw:["proverbs","book of proverbs","proverbs wisdom","read proverbs"],
 a:"Proverbs is 31 chapters — one for each day of the month. Read the chapter that matches today's date. It's full of practical wisdom about money, relationships, words, and work. It doesn't read like a devotional — it reads like good advice from someone who's been around. 💡"},

{kw:["gospel","what is the gospel","good news","what does gospel mean","the four gospels","matthew mark luke john"],
 a:"Gospel literally means 'good news.' The Good News is: you were separated from God by sin, Jesus died to take that punishment, rose from the dead, and now anyone who trusts in Him is forgiven and reconnected to God. Matthew, Mark, Luke, and John each tell the story of Jesus's life — four different angles on the same person. 🕊️"},

// ══════════════════════════════════════════════════════════
// FAITH & DOUBTS
// ══════════════════════════════════════════════════════════
{kw:["doubt","doubting god","having doubts","is god real","questioning faith","not sure if i believe","losing faith"],
 a:"Doubt isn't the opposite of faith — it's actually part of it. Even Thomas doubted and Jesus didn't reject him. Honest doubt leads to deeper faith; it's pretending you don't doubt that stunts your growth. Bring your questions to God — He can handle them. Read 'The Case for Christ' by Lee Strobel if you want someone who seriously investigated these questions. 🔍"},

{kw:["why does god allow suffering","why is there pain","why did god let this happen","why suffering","god and pain"],
 a:"This is the hardest question in faith and I won't pretend it has an easy answer. What I know: God didn't stay distant from suffering — He entered it fully in Jesus. He wept at Lazarus's tomb. Romans 8:28 doesn't say everything is good — it says God works everything toward good for those who love Him. There's a difference. 💜"},

{kw:["is god good","is god loving","does god care about me","does god love me","god doesn't care","feel forgotten by god"],
 a:"Yes. Romans 8:38-39 is pretty direct — nothing can separate you from God's love. Not your past, not your doubt, not your mess. He's not keeping score to hold against you. The cross was God saying 'I'd rather die than lose you.' That's how much He cares. 💙"},

{kw:["feel far from god","don't feel god","can't feel god's presence","god feels distant","where is god","god seems silent"],
 a:"Feelings come and go but God doesn't. Hebrews 13:5 — 'I will never leave you or forsake you.' Sometimes that distance is spiritual dryness (it happens to every Christian). Keep showing up. Keep reading. Keep praying even when it feels like nothing. The feeling usually comes back. 🌿"},

{kw:["became a christian","how to become a christian","how to follow jesus","accept jesus","salvation","saved","born again","give my life to god"],
 a:"It's simpler than religion makes it sound: believe that Jesus is who He said He is, that He died for your sins and rose again, and tell God you're turning to Him. Romans 10:9 — 'If you declare with your mouth Jesus is Lord and believe in your heart God raised Him from the dead, you will be saved.' No perfect track record required. 🕊️"},

{kw:["sin","what is sin","struggling with sin","keep sinning","can't stop sinning","feel guilty","guilt","shame"],
 a:"Sin is anything that separates you from God or harms yourself or others. Even Paul said in Romans 7 that he kept doing things he didn't want to do. Grace covers it, but it's not a free pass to stay the same. The goal is slow, steady transformation — not sudden perfection. Confess it, receive forgiveness, get back up. 1 John 1:9 — He's faithful to forgive. 💜"},

{kw:["forgiveness","forgiven","am i forgiven","can god forgive me","too far gone","done too much wrong","unforgivable"],
 a:"There's nothing too far. The thief on the cross next to Jesus had basically minutes left — and Jesus told him that day he'd be in paradise. God doesn't have a list of sins that break the deal. You're not the exception to His grace. Receive it. 1 John 1:9 — confess it and it's gone. 🌊"},

// ══════════════════════════════════════════════════════════
// FORGIVENESS & RELATIONSHIPS
// ══════════════════════════════════════════════════════════
{kw:["forgive someone","how to forgive","can't forgive","should i forgive","forgiveness is hard","hurt by someone"],
 a:"Forgiveness doesn't mean what they did was okay or that you trust them again. It means releasing the debt — letting go of the right to make them pay. It's mostly for you. C.S. Lewis said forgiveness is 'a beautiful theory until you have something to forgive.' Start by asking God to help you want to forgive. That's a real first step. 💜"},

{kw:["apologize","say sorry","make it right","how to apologize","repent"],
 a:"Real apology: name what you did, own it fully, say what you'll do differently, and then do it. Don't explain or justify — just own it. And if it's between you and God, 1 John 1:9 says confess it and He forgives immediately. Don't stay in guilt once you've confessed — that's not humility, that's not trusting His forgiveness. 🤝"},

{kw:["christian dating","dating as a christian","godly relationship","dating advice christian","how to date as a christian"],
 a:"Date someone who makes your faith stronger, not weaker — that's the main thing. 2 Corinthians 6:14 about being unequally yoked is about this. It doesn't mean they have to be perfect — it means you're both moving in the same direction. Set boundaries that you both agree on before you're in a situation where it's hard. 💛"},

{kw:["marriage","christian marriage","how to have a good marriage","marriage advice","my marriage","husband","wife","spouse"],
 a:"Ephesians 5 on marriage is revolutionary when you read it properly — both partners serve each other sacrificially. The couples who do best treat marriage as a covenant not a contract. Pray together (even if it's awkward at first), stay curious about each other, and fight the problem not each other. A good Christian counsellor is worth every penny if you're struggling. 💑"},

{kw:["lonely","feel alone","no christian friends","isolated","no one understands","loneliness"],
 a:"Loneliness hits hard and it's more common than people admit. God's answer is community — it's why He didn't design faith to be a solo sport. Hebrews 10:24-25 says keep meeting together. A small group at a church is the best antidote I know. Even one person who gets your faith journey changes everything. 🙏"},

// ══════════════════════════════════════════════════════════
// CHURCH & COMMUNITY
// ══════════════════════════════════════════════════════════
{kw:["find a church","what church","church for beginners","how to find a church","good church","looking for a church"],
 a:"Look for a church where the Bible is actually preached, where people seem genuinely warm, and where you can see yourself getting involved. Try a few. Don't just go to the service — find a small group where you actually know people. Size doesn't matter nearly as much as community does. 🏛️"},

{kw:["don't like church","church is boring","bad experience at church","hurt by church","church hurt","church problems"],
 a:"Church hurt is real and I don't want to minimise it. A lot of people have been genuinely wounded by churches or church people. But the church is still the body of Christ — broken people trying to follow Jesus together. One bad experience doesn't mean every community is like that. A smaller church or different denomination might be completely different. 💜"},

{kw:["what is baptism","should i be baptized","get baptized","meaning of baptism","baptism","how to get baptized"],
 a:"Baptism is a public declaration that you're following Jesus — it's not what saves you, but it's the step Jesus told His followers to take (Matthew 28:19). Going underwater symbolises dying to the old life; coming up is resurrection and new life. If you've trusted Jesus and haven't been baptised, talk to a pastor. It's a big deal in a good way. 💧"},

{kw:["small group","life group","bible study group","community group","christian community","fellowship"],
 a:"Small groups are honestly where the real church happens. A Sunday service is great but you can't really know 200 people. A small group (usually 8-12 people meeting weekly) is where you do actual life together — study, pray for each other, know each other's names. That's the thing that'll actually change your faith long-term. 🤝"},

{kw:["serve","volunteer","how to serve at church","serving others","ministry","give back"],
 a:"Serving is one of the fastest ways to feel at home in a church and grow spiritually. Jesus said the greatest among you is the servant of all (Mark 10:44). Start small — greet people, help with kids, set up chairs. Find a need and fill it. 🙌"},

// ══════════════════════════════════════════════════════════
// SPIRITUAL GROWTH
// ══════════════════════════════════════════════════════════
{kw:["grow spiritually","grow in faith","how to grow as a christian","spiritual growth","deeper faith","go deeper with god"],
 a:"Three things that genuinely move the needle: daily time in the Bible (even just one chapter), consistent prayer (even just 5 minutes), and real community with other believers. Everything else is built on that foundation. Pick one and do it for 30 days. It becomes part of you. 🌱"},

{kw:["spiritual disciplines","disciplines","lectio divina","examen","contemplative prayer","silence and solitude","sabbath"],
 a:"Spiritual disciplines create space for God to work. The classics: Bible reading, prayer, fasting, sabbath (real rest), solitude, service, worship. Lectio Divina is reading a small passage slowly and letting one phrase sit with you. The Daily Examen is reviewing your day with God at night. Start with one — they're workout equipment for your soul. 💪"},

{kw:["holy spirit","what is the holy spirit","who is the holy spirit","gifts of the spirit","spirit-filled"],
 a:"The Holy Spirit is the third person of the Trinity — not a force, not a feeling, but a person who lives in every believer (1 Corinthians 3:16). He comforts, guides, convicts, gives gifts, and prays for us. Galatians 5:22-23 lists His fruit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. If you're growing in those, that's the Spirit at work. 🕊️"},

{kw:["worship","what is worship","how to worship","worship music","meaning of worship","worship god"],
 a:"Worship is bigger than music — it's any time you orient your life toward God. Singing is one form. Serving others is worship. Giving is worship. Choosing God's way when it's hard is worship. Romans 12:1 calls offering your whole life a 'living sacrifice' — that's the real worship. But also yes, put on some praise music and let yourself go. 🎵"},

{kw:["tithe","tithing","how much to give","10 percent","should i tithe","giving to church","stewardship","generosity"],
 a:"Malachi 3:10 is the famous tithe passage — bring 10% and see what happens. The New Testament talks a lot about cheerful, generous giving (2 Corinthians 9:7). 10% is a great starting point. If that's not possible right now, start somewhere and grow it. Giving is one of the most spiritually freeing things you can do — it breaks the grip money can have on you. 💛"},

{kw:["god's will","how to know god's will","what does god want me to do","discernment","making decisions","should i","what should i do"],
 a:"God's will is usually clearer in hindsight but here's how to approach decisions: Does it line up with what the Bible says? Do wise people you trust affirm it? Does it bring peace or deep unease? Are circumstances opening or closing the door? And have you prayed specifically about it? God doesn't usually shout — He speaks through wisdom, community, Scripture, and a quiet peace. 🧭"},

{kw:["calling","purpose","what am i called to","what is my calling","christian purpose","mission","vocation"],
 a:"Most people think calling is one big thing God drops on you. It's more like: be faithful in what's in front of you right now, pay attention to what breaks your heart or energises you, and calling becomes clearer over time. Ephesians 2:10 says God prepared good works for you in advance — your job is to show up and discover them. 🌟"},

// ══════════════════════════════════════════════════════════
// EMOTIONS & MENTAL HEALTH (FAITH LENS)
// ══════════════════════════════════════════════════════════
{kw:["anxiety","anxious","worry","fear","scared","overthinking","panic"],
 a:"Philippians 4:6-7 — 'Don't be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends understanding, will guard your hearts and minds.' Pray the specific fear. Breathe. And if anxiety is affecting your daily life, please also talk to a doctor or counsellor. Faith and mental health care work together. 💙"},

{kw:["depression","depressed","feel hopeless","no joy","empty","dark place","struggling"],
 a:"Elijah was so depressed he asked God to let him die (1 Kings 19) — and God's response was food, sleep, and gentle care before any big spiritual mission. God meets you in the dark. Please don't white-knuckle this alone — talk to someone, seek professional help, and know that depression is not a spiritual failure. It's an illness and you deserve care. 💜"},

{kw:["anger","angry at god","frustrated","mad","rage","bitter"],
 a:"Being angry at God is okay — the Psalms are full of it. Psalm 22 starts with 'My God, my God, why have you forsaken me?' (Jesus even quoted it from the cross.) God doesn't need you to perform peace you don't feel. Tell Him you're angry. He can handle it. Anger at God usually means you still believe He could do something — that's faith, even if it hurts. 🔥"},

{kw:["grief","grieving","loss","someone died","death","bereavement","mourning"],
 a:"Jesus wept when His friend Lazarus died — even knowing He was about to raise him. He didn't skip the grief. So don't rush yours either. 1 Thessalonians 4:13 says we grieve differently as people who have hope — not that we don't grieve. There's no timeline. Let people in. God is close to the brokenhearted (Psalm 34:18). That's a promise. 💜"},

{kw:["stress","overwhelmed","burnout","exhausted","too much","can't cope"],
 a:"Matthew 11:28 — 'Come to me, all you who are weary and burdened, and I will give you rest.' That's a direct invitation. Sometimes the most spiritual thing you can do is rest, say no to something, and slow down. Burnout usually means you've been running on your own strength for too long. Let God carry some of this. 🌿"},

{kw:["self worth","not good enough","worthless","feel like a failure","shame","not enough","feel ugly","body image"],
 a:"Psalm 139 says you are fearfully and wonderfully made. Not 'potentially wonderful if you get it together' — made that way, right now, as you are. Your worth isn't based on performance. You can't earn it and you can't lose it. God knew everything about you before you were born and He still chose you. 💜"},

// ══════════════════════════════════════════════════════════
// MONEY & WORK (FAITH LENS)
// ══════════════════════════════════════════════════════════
{kw:["money","finances","budget","debt","saving","financial","bills","broke","afford"],
 a:"Jesus talked about money more than almost any other topic — because He knew it competes for our hearts. The goal isn't poverty; it's not letting money own you. Proverbs 22:7 — the borrower is slave to the lender. Avoid debt when you can. Give generously. Save consistently. Trust God with the gaps. 💰"},

{kw:["work","job","career","work as worship","monday","workplace","coworker","boss"],
 a:"Colossians 3:23 — 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' Your work is a form of worship, even the boring parts. You're also a witness in your workplace just by how you treat people, how honest you are, how you respond under pressure. That's ministry too. 💼"},

// ══════════════════════════════════════════════════════════
// SALVATION & THEOLOGY
// ══════════════════════════════════════════════════════════
{kw:["trinity","what is the trinity","father son holy spirit","three in one","trinity explained"],
 a:"The Trinity is one God in three persons — Father, Son (Jesus), and Holy Spirit. They're not three gods. Think of it like: the Father plans, the Son accomplishes, the Spirit applies. It's mysterious — even theologians don't fully wrap their minds around it. But it's throughout the Bible and it matters because it means God is relational at His very core. 🙏"},

{kw:["who is jesus","who was jesus","is jesus god","jesus the son of god","jesus christ","lord and savior"],
 a:"Jesus claimed to be God — 'I and the Father are one' (John 10:30). C.S. Lewis said He was either a liar, a lunatic, or Lord. His life, miracles, death, and resurrection don't fit the first two. He's the fullest picture we have of what God is like — and He's not just a good teacher. He's the one everything in history points toward. 🕊️"},

{kw:["heaven","what is heaven","will i go to heaven","eternal life","life after death","what happens when we die"],
 a:"Jesus said He's going to prepare a place for us (John 14:2). Revelation describes a new heaven and new earth — not floating on clouds but a restored, beautiful, physical world. Who gets there? John 3:16 — whoever believes in the Son has eternal life. It's not about being good enough; it's about trusting Jesus. 🌅"},

{kw:["grace","what is grace","god's grace","amazing grace","grace and works"],
 a:"Grace is getting what you don't deserve — God's love and forgiveness when you've done nothing to earn it. Ephesians 2:8-9 — 'It is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God, not by works.' You can't earn your way to God. You just receive what Jesus already did. That's the whole thing. 🌊"},

{kw:["faith","what is faith","faith vs works","have more faith","faith like a mustard seed"],
 a:"Faith is trusting God — not just believing facts about Him, but actually relying on Him. Hebrews 11:1 — 'faith is confidence in what we hope for and assurance about what we do not see.' Jesus said even mustard-seed-tiny faith can move mountains (Matthew 17:20). You don't need huge faith. You need to trust a huge God. 🌱"},

{kw:["addiction","struggling with addiction","alcohol addiction","drug addiction","can't stop","habit i can't break"],
 a:"This takes real honesty and real support — not just prayer alone, though prayer matters. James 5:16 says confess your sins to each other and pray for each other so you may be healed. Find one trusted person to tell. Look into Celebrate Recovery — it's a faith-based recovery community in thousands of churches. God specialises in breaking chains. 💪"},

{kw:["prodigal","came back to god","backsliding","returned to faith","recommit","fallen away","returned to church"],
 a:"The prodigal son's father saw him coming from far off and ran to him — no lecture, no probation period, just celebration (Luke 15). That's God's response to you coming back. You don't have to earn your way back in. Just turn around. He's already running toward you. 💜"},

{kw:["suffering","going through hard time","hard season","why is this happening","trials","difficult time","tough season"],
 a:"James 1:2-4 says consider it joy when you face trials, because testing produces perseverance and maturity. That's not 'pretend it's fine' — it's 'trust that something is being built.' Romans 5:3-4 — suffering produces perseverance, which produces character, which produces hope. The hard stuff isn't wasted. It's forming you. 💪"},

// ══════════════════════════════════════════════════════════
// GENERAL
// ══════════════════════════════════════════════════════════
{kw:["hello","hi","hey","good morning","good evening","how are you","what's up","sup"],
 a:"Hey! 👋 What's on your heart today? Ask me anything about faith, prayer, the Bible, or what you're going through — I'm right here. 🌱"},

{kw:["thank you","thanks","appreciate","that helped","helpful"],
 a:"Of course! 🙏 That's what I'm here for. Anything else on your mind?"},

{kw:["i don't know","not sure","confused","lost","don't understand"],
 a:"That's okay — half of faith is living with the questions honestly. What's the specific thing you're wrestling with? Let's talk it through. 💜"},

{kw:["pray","prayer","pray with me","help me pray"],
 a:"Let's do it. Hit the 🙏 Pray with me card on the Today tab — type what's on your heart and I'll help you put it into words and read it back to you. 💜"},

];
