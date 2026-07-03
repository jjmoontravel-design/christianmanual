// ============ CHRISTIAN MANUAL — DAILY KNOWLEDGE BANKS ============
// Each pool rotates daily. To add entries, APPEND to the end of a pool.
const DAILY = {

// ── VERSE OF THE DAY (shown as "Word of the Day" slot) ──────────────────────
// Format: w = word/topic label, d = verse text + reference, x = reflection sentence
vocab: [
 {w:"Strength", d:"\"I can do all things through Christ who strengthens me.\" — Philippians 4:13", x:"Not your own will — but strength drawn from someone who never runs out."},
 {w:"Love", d:"\"For God so loved the world that he gave his one and only Son.\" — John 3:16", x:"The most quoted verse in the Bible. Read it slowly today as if for the first time."},
 {w:"Peace", d:"\"The Lord is my shepherd; I shall not want.\" — Psalm 23:1", x:"Wanting nothing is not poverty — it's trust that the Shepherd provides."},
 {w:"Fear", d:"\"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you.\" — Joshua 1:9", x:"God never commands courage without promising his presence."},
 {w:"Trust", d:"\"Trust in the Lord with all your heart and lean not on your own understanding.\" — Proverbs 3:5", x:"'With all your heart' means especially the parts that are afraid."},
 {w:"Grace", d:"\"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.\" — Ephesians 2:8", x:"Grace means the gift was given before you earned it. Which means you can't lose it by failing to earn it."},
 {w:"Joy", d:"\"This is the day the Lord has made; let us rejoice and be glad in it.\" — Psalm 118:24", x:"Not 'if the day goes well' — this particular day, exactly as it arrives."},
 {w:"Worry", d:"\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.\" — Philippians 4:6", x:"The instruction is not 'stop worrying.' It's: redirect worry into prayer."},
 {w:"Forgiveness", d:"\"Bear with each other and forgive one another if any of you has a grievance. Forgive as the Lord forgave you.\" — Colossians 3:13", x:"The standard is clear and high: as the Lord forgave you."},
 {w:"Renewal", d:"\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.\" — Romans 12:2", x:"Transformation is a process, not an event — and it starts in the mind."},
 {w:"Compassion", d:"\"The Lord is gracious and compassionate, slow to anger and rich in love.\" — Psalm 145:8", x:"Four qualities of God in one verse. Which one do you most need today?"},
 {w:"Fruit", d:"\"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control.\" — Galatians 5:22–23", x:"Nine qualities, one source. Which is God growing in you right now?"},
 {w:"Serving", d:"\"Even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.\" — Mark 10:45", x:"Service is not beneath you. It was not beneath Jesus."},
 {w:"Humility", d:"\"Humble yourselves before the Lord, and he will lift you up.\" — James 4:10", x:"Humility is not thinking less of yourself — it's thinking of yourself less."},
 {w:"Prayer", d:"\"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.\" — Matthew 7:7", x:"Three verbs: ask, seek, knock. All of them take action."},
 {w:"Courage", d:"\"Have I not commanded you? Be strong and courageous.\" — Joshua 1:9", x:"'Have I not commanded you?' — this is not a suggestion. God commands us toward courage."},
 {w:"Creation", d:"\"In the beginning God created the heavens and the earth.\" — Genesis 1:1", x:"Four words establish everything: In. The. Beginning. God."},
 {w:"Identity", d:"\"See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!\" — 1 John 3:1", x:"Your deepest identity is not what you do — it's whose you are."},
 {w:"Rest", d:"\"Come to me, all you who are weary and burdened, and I will give you rest.\" — Matthew 11:28", x:"Jesus offers rest to the weary. The only requirement is coming."},
 {w:"Hope", d:"\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\" — Jeremiah 29:11", x:"Originally spoken to exiles in Babylon. God's plans persist even in your worst season."},
 {w:"Light", d:"\"Your word is a lamp for my feet, a light on my path.\" — Psalm 119:105", x:"A lamp shows the next step — not the whole road. Faith is enough light for today."},
 {w:"Righteousness", d:"\"But seek first his kingdom and his righteousness, and all these things will be given to you as well.\" — Matthew 6:33", x:"What you seek first shapes everything else you pursue."},
 {w:"Steadfast", d:"\"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning.\" — Lamentations 3:22–23", x:"Written in the middle of catastrophe. New mercies come regardless of yesterday."},
 {w:"Faith", d:"\"Now faith is confidence in what we hope for and assurance about what we do not see.\" — Hebrews 11:1", x:"The Bible's own definition: confidence and assurance — not certainty, but trust."},
 {w:"Wisdom", d:"\"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.\" — James 1:5", x:"God gives wisdom generously, without finding fault. You don't have to earn the right to ask."},
 {w:"Kindness", d:"\"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.\" — Ephesians 4:32", x:"Kindness is grounded in what you've already received — not what you feel like giving."},
 {w:"Perseverance", d:"\"Let us run with perseverance the race marked out for us, fixing our eyes on Jesus.\" — Hebrews 12:1", x:"The race is marked out — meaning God has already mapped your path. Run it."},
 {w:"Generosity", d:"\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\" — 2 Corinthians 9:7", x:"Cheerful giving starts with decided giving. The decision comes before the feeling."},
 {w:"Truth", d:"\"Then you will know the truth, and the truth will set you free.\" — John 8:32", x:"Freedom comes from truth, not from comfort. What truth are you resisting today?"},
 {w:"Mercy", d:"\"Blessed are the merciful, for they will be shown mercy.\" — Matthew 5:7", x:"You receive the mercy you give. What does that make today's choices?"},
 {w:"Salvation", d:"\"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.\" — Romans 6:23", x:"Two things: what we earn on our own, and what God gives anyway."},
 {w:"Obedience", d:"\"We know that we have come to know him if we keep his commands.\" — 1 John 2:3", x:"Knowledge of God is not just intellectual. It's confirmed by how you live."},
 {w:"Patience", d:"\"Be still before the Lord and wait patiently for him.\" — Psalm 37:7", x:"Stillness is not passivity — it's the discipline of trusting God's timing."},
 {w:"Unity", d:"\"How good and pleasant it is when God's people live together in unity!\" — Psalm 133:1", x:"Unity among believers is not just practical — Scripture calls it good and pleasant."},
 {w:"Mission", d:"\"Therefore go and make disciples of all nations.\" — Matthew 28:19", x:"The Great Commission uses one imperative: go. Everything else follows from movement."},
 {w:"Sanctification", d:"\"It is God's will that you should be sanctified.\" — 1 Thessalonians 4:3", x:"Sanctification is not self-improvement. It's allowing God to make you holy."},
 {w:"Sacrifice", d:"\"Greater love has no one than this: to lay down one's life for one's friends.\" — John 15:13", x:"The ultimate measure of love is not what you say — it's what you give up."},
 {w:"Worship", d:"\"God is spirit, and his worshipers must worship in the Spirit and in truth.\" — John 4:24", x:"Worship is not a style of music — it's the alignment of your spirit with God's truth."},
 {w:"Eternal", d:"\"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\" — John 3:16", x:"Eternal life begins now — in the quality of knowing God, not just in length of days."},
 {w:"Blessing", d:"\"Blessed is the one who does not walk in step with the wicked.\" — Psalm 1:1", x:"Biblical blessing begins with a negative — what you choose not to do shapes everything you become."},
 {w:"Covenant", d:"\"Know therefore that the Lord your God is God; he is the faithful God, keeping his covenant of love to a thousand generations.\" — Deuteronomy 7:9", x:"A thousand generations. God's faithfulness is not measured in moments but in millennia."},
 {w:"Redemption", d:"\"For he has rescued us from the dominion of darkness and brought us into the kingdom of the Son he loves.\" — Colossians 1:13", x:"You were rescued — past tense, already done. Live from that reality today."},
 {w:"Purpose", d:"\"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.\" — Ephesians 2:10", x:"Your purpose was prepared before you arrived. Today you live into it."},
 {w:"Refuge", d:"\"God is our refuge and strength, an ever-present help in trouble.\" — Psalm 46:1", x:"Ever-present means he is not sometimes-present. He is there in the trouble itself."},
 {w:"Rebirth", d:"\"Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!\" — 2 Corinthians 5:17", x:"The past is not the predicate of the future. New creation means genuinely new."},
 {w:"Praise", d:"\"I will extol the Lord at all times; his praise will always be on my lips.\" — Psalm 34:1", x:"'At all times' includes the hard times. Praise in difficulty is the most powerful kind."},
 {w:"Intercession", d:"\"The Spirit himself intercedes for us through wordless groans.\" — Romans 8:26", x:"When you can't pray, the Spirit prays for you. You are never without an advocate."},
 {w:"Guidance", d:"\"I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.\" — Psalm 32:8", x:"He doesn't just point the direction. He watches you walk it."},
 {w:"Endurance", d:"\"Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance.\" — Romans 5:3", x:"Glory in suffering sounds strange until you see what it's producing in you."},
 {w:"Contentment", d:"\"I have learned to be content whatever the circumstances.\" — Philippians 4:11", x:"Learned — not born with. Contentment is a discipline, and Paul says it's teachable."},
 {w:"Gentleness", d:"\"Let your gentleness be evident to all. The Lord is near.\" — Philippians 4:5", x:"Gentleness isn't weakness. It's strength that has nothing left to prove."},
 {w:"Provision", d:"\"And my God will meet all your needs according to the riches of his glory in Christ Jesus.\" — Philippians 4:19", x:"Not according to your budget — according to His riches. Different math entirely."},
 {w:"Discernment", d:"\"Solid food is for the mature, who by constant use have trained themselves to distinguish good from evil.\" — Hebrews 5:14", x:"Discernment is trained, not automatic. It comes from practice, not just desire."},
 {w:"Boldness", d:"\"Let us then approach God's throne of grace with confidence.\" — Hebrews 4:16", x:"Boldness before God isn't arrogance — it's trusting what grace actually means."},
 {w:"Comfort", d:"\"Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.\" — 2 Corinthians 1:3", x:"Comfort received is comfort meant to be passed on to someone else."},
 {w:"Surrender", d:"\"Not my will, but yours be done.\" — Luke 22:42", x:"Jesus prayed this in agony, not ease. Surrender is hardest exactly when it matters most."},
 {w:"Integrity", d:"\"The integrity of the upright guides them, but the unfaithful are destroyed by their duplicity.\" — Proverbs 11:3", x:"Integrity means the same person in the room and out of it."},
 {w:"Diligence", d:"\"Whatever you do, work at it with all your heart, as working for the Lord.\" — Colossians 3:23", x:"The audience for your work is smaller than you think — and bigger. Just Him."},
 {w:"Anxiety", d:"\"Cast all your anxiety on him because he cares for you.\" — 1 Peter 5:7", x:"Not manage it. Not minimize it. Cast it — throw it, fully, onto someone who can hold it."},
 {w:"Newness", d:"\"See, I am doing a new thing! Now it springs up; do you not perceive it?\" — Isaiah 43:19", x:"God asks if you perceive it — meaning it might already be happening, unnoticed."},
 {w:"Belonging", d:"\"So in Christ we, though many, form one body, and each member belongs to all the others.\" — Romans 12:5", x:"You were never meant to belong to no one. You belong to a body."},
 {w:"Watchfulness", d:"\"Watch and pray so that you will not fall into temptation.\" — Matthew 26:41", x:"Watching comes before praying in this verse. Awareness is the first defense."},
 {w:"Meekness", d:"\"Blessed are the meek, for they will inherit the earth.\" — Matthew 5:5", x:"Meekness isn't doormat weakness — it's controlled strength, power under restraint."},
 {w:"Zeal", d:"\"Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.\" — Romans 12:11", x:"Fervor isn't optional intensity — Paul frames it as a command, not a personality type."},
 {w:"Assurance", d:"\"I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.\" — 1 John 5:13", x:"'That you may know' — not hope, not guess. Certainty was the point of this letter."},
 {w:"Simplicity", d:"\"But I am afraid that just as Eve was deceived by the serpent's cunning, your minds may somehow be led astray from your sincere and pure devotion to Christ.\" — 2 Corinthians 11:3", x:"Complexity is often where deception hides. Simplicity of devotion is a protection."},
 {w:"Testimony", d:"\"They triumphed over him by the blood of the Lamb and by the word of their testimony.\" — Revelation 12:11", x:"Your story of what God has done is not small talk. It's spiritual warfare."},
 {w:"Longsuffering", d:"\"Love is patient, love is kind.\" — 1 Corinthians 13:4", x:"The oldest translations render this 'long-suffering' — love that outlasts the wait."},
 {w:"Vigilance", d:"\"Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion.\" — 1 Peter 5:8", x:"Alertness isn't fear — it's simply not being surprised by what's actually happening."},
 {w:"Gladness", d:"\"You have filled my heart with greater joy than when their grain and new wine abound.\" — Psalm 4:7", x:"Circumstantial joy depends on the harvest. This joy doesn't."},
 {w:"Sufficiency", d:"\"My grace is sufficient for you, for my power is made perfect in weakness.\" — 2 Corinthians 12:9", x:"Sufficient — not abundant, not extra. Exactly enough, every single time."},
 {w:"Rejoicing", d:"\"Rejoice in the Lord always. I will say it again: Rejoice!\" — Philippians 4:4", x:"Written from a prison cell. Rejoicing was never meant to depend on circumstances."},
 {w:"Devotion", d:"\"But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go.'\" — Ruth 1:16", x:"Devotion chosen freely, in loss, when leaving would have been easier. That's the kind that counts."},
 {w:"Contrition", d:"\"The sacrifices of God are a broken spirit; a broken and contrite heart you, God, will not despise.\" — Psalm 51:17", x:"God doesn't want your performance. He wants your honesty, even broken."},
 {w:"Fellowship", d:"\"They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.\" — Acts 2:42", x:"Four things, together, not optional extras. This was the whole rhythm of early faith."},
 {w:"Restoration", d:"\"He restores my soul. He guides me along the right paths for his name's sake.\" — Psalm 23:3", x:"Restoration and guidance, in the same breath. He doesn't just fix you and leave."},
 {w:"Discipline", d:"\"No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness.\" — Hebrews 12:11", x:"The verse doesn't pretend discipline feels good. It just promises what it grows."},
 {w:"Awe", d:"\"When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them?\" — Psalm 8:3-4", x:"Awe at creation naturally becomes wonder that you're noticed at all."},
 {w:"Unfailing Love", d:"\"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you.\" — Zephaniah 3:17", x:"He doesn't just tolerate you. The text says delight."},
 {w:"Meaning", d:"\"Meaningless! Meaningless! says the Teacher. Utterly meaningless! Everything is meaningless.\" — Ecclesiastes 1:2", x:"Ecclesiastes says this first — then spends eleven chapters finding what actually isn't."},
 {w:"Servanthood", d:"\"For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.\" — Mark 10:45", x:"The pattern of Jesus' whole life summarized in one sentence: came to serve."},
 {w:"Steadfast Love", d:"\"Give thanks to the Lord, for he is good; his love endures forever.\" — Psalm 136:1", x:"This line repeats twenty-six times in this psalm. Some truths need repeating."},
 {w:"Sonship", d:"\"So you are no longer a slave, but God's child; and since you are his child, God has made you also an heir.\" — Galatians 4:7", x:"Not just forgiven — adopted. That changes what you're allowed to expect from Him."},
 {w:"Fearlessness", d:"\"The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?\" — Psalm 27:1", x:"Two questions, no answer needed. The Lord's identity makes the fear irrelevant."},
 {w:"Confession", d:"\"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.\" — 1 John 1:9", x:"Faithful and just — not reluctant. Forgiveness is His character, not a mood."},
 {w:"Abiding", d:"\"Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine.\" — John 15:4", x:"Fruit isn't produced by effort. It's produced by staying connected."},
 {w:"Watchcare", d:"\"He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart.\" — Isaiah 40:11", x:"Not driven from behind. Carried, close to the heart."},
 {w:"Thankfulness", d:"\"Give thanks in all circumstances; for this is God's will for you in Christ Jesus.\" — 1 Thessalonians 5:18", x:"In all circumstances — not for all circumstances. The distinction matters."},
 {w:"Direction", d:"\"A person's steps are directed by the Lord. How then can anyone understand their own way?\" — Proverbs 20:24", x:"You don't have to fully understand your path to trust who's directing it."},
 {w:"Reverence", d:"\"The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.\" — Proverbs 9:10", x:"A beginning, not the end. Reverence is where wisdom starts, not where it stops."},
 {w:"Selflessness", d:"\"Do nothing out of selfish ambition or vain conceit, but in humility value others above yourselves.\" — Philippians 2:3", x:"Not ignore yourself — value others more. There's a difference."},
 {w:"Cleansing", d:"\"Wash away all my iniquity and cleanse me from my sin.\" — Psalm 51:2", x:"David's prayer after his worst failure. Cleansing was still available to ask for."},
 {w:"Kingdom", d:"\"But seek first his kingdom and his righteousness, and all these things will be given to you as well.\" — Matthew 6:33", x:"Seek first — meaning everything else follows, not precedes."},
 {w:"Companionship", d:"\"Two are better than one, because they have a good return for their labor.\" — Ecclesiastes 4:9", x:"Not a suggestion for the social. A structural truth about how life actually works better."},
 {w:"Yielding", d:"\"Submit yourselves, then, to God. Resist the devil, and he will flee from you.\" — James 4:7", x:"Submission first, resistance second. The order in this verse isn't accidental."},
 {w:"Radiance", d:"\"Those who look to him are radiant; their faces are never covered with shame.\" — Psalm 34:5", x:"Radiance from looking, not performing. Just looking toward Him changes the face."},
 {w:"Nearness", d:"\"The Lord is near to all who call on him, to all who call on him in truth.\" — Psalm 145:18", x:"Near to all who call — no qualifying resume required, just honesty."},
 {w:"Consecration", d:"\"Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God.\" — Romans 12:1", x:"A living sacrifice — the strange kind that keeps walking around afterward, changed."},
 {w:"Confidence", d:"\"For I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him.\" — 2 Timothy 1:12", x:"Not confidence in outcomes — confidence in who's holding them."},
 {w:"Longing", d:"\"As the deer pants for streams of water, so my soul pants for you, my God.\" — Psalm 42:1", x:"Panting — not polite interest. Spiritual thirst is meant to feel urgent."},
 {w:"Wholeness", d:"\"May God himself, the God of peace, sanctify you through and through.\" — 1 Thessalonians 5:23", x:"Through and through — not partial repair. God works on the whole person."},
 {w:"Deliverance", d:"\"The righteous cry out, and the Lord hears them; he delivers them from all their troubles.\" — Psalm 34:17", x:"All their troubles — the psalmist didn't qualify which ones count."},
 {w:"Wholehearted", d:"\"I seek you with all my heart; do not let me stray from your commands.\" — Psalm 119:10", x:"Seeking wholeheartedly and still asking not to stray — even devotion needs help staying steady."},
 {w:"Presence", d:"\"You make known to me the path of life; you will fill me with joy in your presence.\" — Psalm 16:11", x:"The joy isn't in the destination. It's in the presence along the way."},
 {w:"Assembly", d:"\"Not giving up meeting together, as some are in the habit of doing, but encouraging one another.\" — Hebrews 10:25", x:"Written as a warning that some had already stopped. Community requires showing up."},
 {w:"Overcoming", d:"\"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.\" — John 16:33", x:"Trouble is promised in the same breath as peace. Both are true at once."},
 {w:"Faithfulness", d:"\"He who calls you is faithful, and he will do it.\" — 1 Thessalonians 5:24", x:"Not 'he can.' He will. The faithfulness is a guarantee, not a possibility."},
 {w:"Freedom", d:"\"It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.\" — Galatians 5:1", x:"Freedom that has to be stood in — it can be given up as easily as it was received."},
 {w:"Contrition2", d:"\"For godly sorrow brings repentance that leads to salvation and leaves no regret.\" — 2 Corinthians 7:10", x:"There's a sorrow that heals and a sorrow that just spirals. Learn to tell them apart."},
 {w:"Wonder", d:"\"Great is the Lord and most worthy of praise; his greatness no one can fathom.\" — Psalm 145:3", x:"Unfathomable — meaning the mystery is a feature, not a problem to solve."},
 {w:"Steadfastness", d:"\"Therefore, my dear brothers and sisters, stand firm. Let nothing move you.\" — 1 Corinthians 15:58", x:"Immediately followed by 'because your labor in the Lord is not in vain' — the standing firm has a reason."},
 {w:"Generational", d:"\"One generation commends your works to another; they tell of your mighty acts.\" — Psalm 145:4", x:"Faith was never meant to end with you. Tell someone what you've seen."},
 {w:"Restfulness", d:"\"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.\" — Psalm 4:8", x:"Sleep as an act of trust — the safety comes from Him, not the locked door."},
 {w:"Empowerment", d:"\"But you will receive power when the Holy Spirit comes on you.\" — Acts 1:8", x:"The power precedes the mission. He equips before He sends."},
 {w:"Fruitfulness", d:"\"This is to my Father's glory, that you bear much fruit, showing yourselves to be my disciples.\" — John 15:8", x:"Fruit is the evidence, not the goal itself. It grows from staying connected to the vine."},
 {w:"Perspective", d:"\"For we live by faith, not by sight.\" — 2 Corinthians 5:7", x:"Sight demands proof first. Faith moves before the proof arrives."},
 {w:"Mercy2", d:"\"It is of the Lord's mercies that we are not consumed, because his compassions fail not. They are new every morning.\" — Lamentations 3:22-23", x:"Written in the middle of a city's destruction. New mercy doesn't wait for better circumstances."},
 {w:"Anointing", d:"\"You anoint my head with oil; my cup overflows.\" — Psalm 23:5", x:"Overflow, not just enough. Blessing that spills past what's needed."},
 {w:"Discipleship", d:"\"Whoever wants to be my disciple must deny themselves and take up their cross and follow me.\" — Matthew 16:24", x:"Following Jesus was never framed as easy. It was framed as worth it."},
 {w:"Encouragement", d:"\"Therefore encourage one another and build each other up, just as in fact you are doing.\" — 1 Thessalonians 5:11", x:"A command with a compliment attached — keep doing what you're already doing."},
 {w:"Selfcontrol", d:"\"Like a city whose walls are broken through is a person who lacks self-control.\" — Proverbs 25:28", x:"Self-control isn't restriction. It's the wall that keeps everything else standing."},
 {w:"Solitude", d:"\"But Jesus often withdrew to lonely places and prayed.\" — Luke 5:16", x:"Often — a rhythm, not a one-time retreat. Even Jesus needed to step away."},
 {w:"Legacy", d:"\"A good name is more desirable than great riches; to be esteemed is better than silver or gold.\" — Proverbs 22:1", x:"What outlasts you is your character, not your accumulation."},
 {w:"Anticipation", d:"\"I wait for the Lord, my whole being waits, and in his word I put my hope.\" — Psalm 130:5", x:"Whole being — this isn't passive waiting. It's active, embodied hope."},
 {w:"Access", d:"\"Through him we both have access to the Father by one Spirit.\" — Ephesians 2:18", x:"No appointment needed. Access was purchased once, for good."},
 {w:"Word", d:"\"Your word is a lamp for my feet, a light on my path.\" — Psalm 119:105", x:"A lamp shows the next step, not the whole road. That's usually enough."},
 {w:"Renewal2", d:"\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\" — 2 Corinthians 5:17", x:"Not renovated — recreated. The difference is total, not partial."},
 {w:"Chosen", d:"\"But you are a chosen people, a royal priesthood, a holy nation, God's special possession.\" — 1 Peter 2:9", x:"Four titles, none of them earned. All of them given."},
 {w:"Nourishment", d:"\"Man shall not live on bread alone, but on every word that comes from the mouth of God.\" — Matthew 4:4", x:"Physical hunger is real. This verse says there's a deeper hunger too."},
 {w:"Instruction", d:"\"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.\" — 2 Timothy 3:16", x:"Useful for four things — not just comfort. Sometimes it corrects, and that's still love."},
 {w:"Watchman", d:"\"I have posted watchmen on your walls, Jerusalem; they will never be silent day or night.\" — Isaiah 62:6", x:"A picture of prayer that never stops — someone always on the wall."},
 {w:"Multiplication", d:"\"Give, and it will be given to you. A good measure, pressed down, shaken together and running over.\" — Luke 6:38", x:"Generosity described with a wheat-measuring image — give and it comes back overflowing."},
 {w:"Reconciliation", d:"\"All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation.\" — 2 Corinthians 5:18", x:"You were reconciled — and then handed the same ministry to offer others."},
 {w:"Stillness", d:"\"He says, 'Be still, and know that I am God.'\" — Psalm 46:10", x:"Knowing God is tied to stillness here — not activity, not striving."},
 {w:"Inheritance", d:"\"Now if we are children, then we are heirs — heirs of God and co-heirs with Christ.\" — Romans 8:17", x:"Co-heirs — not servants who get a bonus. Full inheritance, shared."},
 {w:"Transformation", d:"\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.\" — Romans 12:2", x:"Transformation starts in the mind — before it shows up anywhere else."},
 {w:"Wholeheartedness", d:"\"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.\" — Colossians 3:23", x:"The audience changes everything. Work looks different when it's for Him."},
 {w:"Attentiveness", d:"\"My son, pay attention to what I say; turn your ear to my words.\" — Proverbs 4:20", x:"Attention is framed as an active choice — turning the ear, not just hearing passively."},
 {w:"Humbleness", d:"\"Clothe yourselves, all of you, with humility toward one another.\" — 1 Peter 5:5", x:"Clothe yourselves — humility is worn deliberately, not stumbled into."},
 {w:"Wellspring", d:"\"Above all else, guard your heart, for everything you do flows from it.\" — Proverbs 4:23", x:"Guard, not just monitor. What's inside eventually shows up outside."},
 {w:"Kinship", d:"\"See what great love the Father has lavished on us, that we should be called children of God!\" — 1 John 3:1", x:"Lavished — an extravagant word for an extravagant kind of love."},
 {w:"Nightwatch", d:"\"On my bed I remember you; I think of you through the watches of the night.\" — Psalm 63:6", x:"Even sleepless hours can become an act of turning toward God rather than away."},
 {w:"Illumination", d:"\"The city does not need the sun or the moon to shine on it, for the glory of God gives it light.\" — Revelation 21:23", x:"A future where light doesn't come from a source you can look away from."},
 {w:"Companion", d:"\"A friend loves at all times, and a brother is born for a time of adversity.\" — Proverbs 17:17", x:"Fair-weather love is common. This verse describes something rarer."},
 {w:"Rootedness", d:"\"That you, being rooted and established in love, may have power to grasp how wide and long and high and deep is the love of Christ.\" — Ephesians 3:17-18", x:"Rooted first — then able to grasp something that big. Depth requires roots."},
 {w:"Sonrise", d:"\"But for you who revere my name, the sun of righteousness will rise with healing in its rays.\" — Malachi 4:2", x:"Healing described as sunlight — gradual, warm, unavoidable once it rises."},
 {w:"Steadying", d:"\"Though he stumble, he will not fall, for the Lord upholds him with his hand.\" — Psalm 37:24", x:"Stumbling is allowed for. Falling completely isn't, because of the hand underneath."},
 {w:"Undivided", d:"\"Give me an undivided heart, that I may fear your name.\" — Psalm 86:11", x:"David asks for undividedness as a prayer — he knew his heart could split loyalties."},
 {w:"Refreshment", d:"\"Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord.\" — Acts 3:19", x:"Refreshing is tied to turning — repentance leads somewhere good, not just away from something bad."},
 {w:"Bridebuilder", d:"\"Blessed are the peacemakers, for they will be called children of God.\" — Matthew 5:9", x:"Peacemaking isn't passive — it's active bridge-building, and it earns a family name."},
 {w:"Threshold", d:"\"I am the door; whoever enters through me will be saved.\" — John 10:9", x:"One door, but a wide invitation — 'whoever' leaves no one out by default."},
 {w:"Fullness", d:"\"I have come that they may have life, and have it to the full.\" — John 10:10", x:"Not just life — full life. Jesus names abundance as the actual goal."},
 {w:"Steadyhand", d:"\"For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.\" — Isaiah 41:13", x:"He doesn't just say don't fear — he takes hold of the hand first."},
 {w:"Growth", d:"\"But grow in the grace and knowledge of our Lord and Savior Jesus Christ.\" — 2 Peter 3:18", x:"Grace and knowledge grow together — head and heart aren't meant to be separate tracks."},
 {w:"Refined", d:"\"These have come so that the proven genuineness of your faith — of greater worth than gold — may result in praise, glory and honor.\" — 1 Peter 1:7", x:"Fire refines gold. Trials are framed here as doing the same for faith."},
 {w:"Sanctuary", d:"\"One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life.\" — Psalm 27:4", x:"One thing, named clearly — not a list of requests, just a place to stay near Him."},
 {w:"Overflow", d:"\"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope.\" — Romans 15:13", x:"Hope that overflows out of you was never meant to be kept contained."},
 {w:"Steadfaith", d:"\"Fight the good fight of the faith. Take hold of the eternal life to which you were called.\" — 1 Timothy 6:12", x:"Fight and take hold — faith described with active verbs, not passive waiting."},
 {w:"Servant2", d:"\"You are not your own; you were bought at a price. Therefore honor God with your bodies.\" — 1 Corinthians 6:19-20", x:"Bought at a price reframes ownership — you belong to someone who paid dearly."},
 {w:"Watching2", d:"\"Therefore keep watch, because you do not know on what day your Lord will come.\" — Matthew 24:42", x:"Uncertainty about timing is meant to produce readiness, not anxiety."},
 {w:"Bread", d:"\"Give us today our daily bread.\" — Matthew 6:11", x:"Daily — not weekly, not stockpiled. The prayer teaches dependence one day at a time."},
 {w:"Warmth", d:"\"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.\" — Numbers 6:24-25", x:"A face that shines toward you, not away. This is the oldest recorded blessing."},
 {w:"Fixed", d:"\"You will keep in perfect peace those whose minds are steadfast, because they trust in you.\" — Isaiah 26:3", x:"Perfect peace tied to a fixed mind — where attention rests changes what peace is possible."},
 {w:"Sowing", d:"\"Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously.\" — 2 Corinthians 9:6", x:"The harvest mirrors the sowing. What you give shapes what comes back."},
 {w:"Approval", d:"\"Am I now trying to win the approval of human beings, or of God? If I were still trying to please people, I would not be a servant of Christ.\" — Galatians 1:10", x:"You can't fully serve two audiences. Paul chose which one mattered."},
 {w:"Steadman", d:"\"Blessed is the one who trusts in the Lord, whose confidence is in him.\" — Jeremiah 17:7", x:"Blessing tied directly to where confidence is placed — not what's owned."},
 {w:"Renown", d:"\"His name will endure forever; it will continue as long as the sun.\" — Psalm 72:17", x:"A name outlasting the sun — the psalmist reaches for the largest measure of time he knows."},
 {w:"Steadship", d:"\"Moreover, it is required in stewards that one be found faithful.\" — 1 Corinthians 4:2", x:"Faithful — not flashy, not successful by every measure. Just faithful with what's entrusted."},
 {w:"Groundedness", d:"\"Everyone who hears these words of mine and does them will be like a wise man who built his house on the rock.\" — Matthew 7:24", x:"Hearing plus doing — the rock foundation requires both, not just one."},
 {w:"Continual", d:"\"Pray continually.\" — 1 Thessalonians 5:17", x:"Two words, the shortest verse with the biggest ask — an ongoing conversation, not scheduled appointments."},
 {w:"Steadglow", d:"\"Then Moses' face was radiant because he had spoken with the Lord.\" — Exodus 34:29", x:"Time spent with God left a visible mark. Presence changes the face."},
 {w:"Ransom", d:"\"For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.\" — Mark 10:45", x:"Ransom implies you were held by something. He came to pay what freed you."},
 {w:"Openhand", d:"\"Be generous and willing to share, and so store up treasure for themselves as a firm foundation for the coming age.\" — 1 Timothy 6:18-19", x:"Generosity described as storing treasure — an odd, upside-down kind of saving."},
 {w:"Steadwait", d:"\"Wait for the Lord; be strong and take heart and wait for the Lord.\" — Psalm 27:14", x:"Repeated twice in one verse — because waiting is hard enough to need the reminder twice."},
 {w:"Newmercy", d:"\"His compassions never fail. They are new every morning; great is your faithfulness.\" — Lamentations 3:22-23", x:"Every morning — meaning yesterday's failures don't carry over into today's mercy supply."},
 {w:"Steadfoot", d:"\"He makes my feet like the feet of a deer; he causes me to stand on the heights.\" — Psalm 18:33", x:"Sure-footedness on high, dangerous ground — strength given for exactly where you are."},
 {w:"Peacemaker", d:"\"If it is possible, as far as it depends on you, live at peace with everyone.\" — Romans 12:18", x:"'As far as it depends on you' — a realistic clause. You can't control the other side."},
 {w:"Steadhold", d:"\"Hold unswervingly to the hope we profess, for he who promised is faithful.\" — Hebrews 10:23", x:"Unswervingly — hope isn't meant to wobble with every circumstance."},
 {w:"Everpresent", d:"\"And surely I am with you always, to the very end of the age.\" — Matthew 28:20", x:"The last words of Matthew's gospel — a promise stretched over all remaining time."},
 {w:"Steadmind", d:"\"Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure — think about such things.\" — Philippians 4:8", x:"A deliberate list for where to aim attention. What you dwell on shapes you."},
 {w:"Yieldedheart", d:"\"Create in me a pure heart, O God, and renew a steadfast spirit within me.\" — Psalm 51:10", x:"A prayer for creation, not just repair — David asks for something new."},
 {w:"Steadyoke", d:"\"Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.\" — Matthew 11:29", x:"A yoke usually means labor. Jesus offers one that leads to rest instead."},
 {w:"Advocate", d:"\"My dear children, I write this to you so that you will not sin. But if anybody does sin, we have an advocate with the Father.\" — 1 John 2:1", x:"An advocate already appointed, before you even need one."},
 {w:"Steadily", d:"\"Let us hold unswervingly to the hope we profess, for he who promised is faithful.\" — Hebrews 10:23", x:"Faithfulness on His side is the reason to hold steady on yours."},
 {w:"Homecoming", d:"\"In my Father's house are many rooms; if that were not so, would I have told you that I go to prepare a place for you?\" — John 14:2", x:"A place prepared, specifically, in advance — not an afterthought."},
 {w:"Steadcourage", d:"\"Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you.\" — Deuteronomy 31:6", x:"The courage command comes with a reason attached: He goes with you."},
 {w:"Communion", d:"\"Whoever eats my flesh and drinks my blood remains in me, and I in them.\" — John 6:56", x:"Communion described as mutual dwelling — remaining in each other, not just remembering."},
 {w:"Steadsight", d:"\"Fixing our eyes on Jesus, the pioneer and perfecter of faith.\" — Hebrews 12:2", x:"Where your eyes fix determines how you run the race described just before this verse."},
 {w:"Renownglory", d:"\"For from him and through him and for him are all things. To him be the glory forever! Amen.\" — Romans 11:36", x:"From, through, and for — every direction of existence traced back to the same source."},
 {w:"Steadtrust2", d:"\"Some trust in chariots and some in horses, but we trust in the name of the Lord our God.\" — Psalm 20:7", x:"Everyone trusts something. The question is only ever what."},
 {w:"Living Water", d:"\"Whoever drinks the water I give them will never thirst.\" — John 4:14", x:"Told to a woman who'd tried to satisfy her thirst a dozen different ways already."},
 {w:"Good Shepherd", d:"\"I am the good shepherd. The good shepherd lays down his life for the sheep.\" — John 10:11", x:"Shepherds usually protect their own life first. This one reverses the instinct."},
 {w:"Firm Foundation", d:"\"For no one can lay any foundation other than the one already laid, which is Jesus Christ.\" — 1 Corinthians 3:11", x:"Not one foundation among options — the only one that holds."},
 {w:"Every Need", d:"\"And my God will meet all your needs according to the riches of his glory in Christ Jesus.\" — Philippians 4:19", x:"All your needs, not all your wants — the verse is specific about which it covers."},
 {w:"New Song", d:"\"He put a new song in my mouth, a hymn of praise to our God.\" — Psalm 40:3", x:"Put there — not composed by effort. Sometimes praise arrives before you write it."},
 {w:"Quiet Trust", d:"\"In repentance and rest is your salvation, in quietness and trust is your strength.\" — Isaiah 30:15", x:"Strength found in quietness — the opposite of how strength usually gets pursued."},
 {w:"Well Done", d:"\"His master replied, 'Well done, good and faithful servant! You have been faithful with a few things.'\" — Matthew 25:21", x:"Faithful with a few things — the bar for that commendation is smaller than you'd guess."},
 {w:"Broken Chains", d:"\"So if the Son sets you free, you will be free indeed.\" — John 8:36", x:"Free indeed — the repetition insists this isn't partial or symbolic freedom."},
 {w:"Every Tear", d:"\"He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.\" — Revelation 21:4", x:"Every tear, named specifically — not a vague promise of general improvement."},
 {w:"Called by Name", d:"\"But now, this is what the Lord says — he who created you, Jacob, he who formed you, Israel: 'Do not fear, for I have redeemed you; I have summoned you by name; you are mine.'\" — Isaiah 43:1", x:"Redeemed and named in the same breath — ownership language, but tender."},
 {w:"Living Hope", d:"\"He has given us new birth into a living hope through the resurrection of Jesus Christ from the dead.\" — 1 Peter 1:3", x:"Living — meaning this hope isn't a memory. It's active, present tense."},
 {w:"Ask Boldly", d:"\"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.\" — James 1:5", x:"Without finding fault — the asking itself isn't judged, only welcomed."},
 {w:"Firstfruits", d:"\"Honor the Lord with your wealth, with the firstfruits of all your crops.\" — Proverbs 3:9", x:"Firstfruits, not leftovers — the order of giving reveals the priority."},
 {w:"True Vine", d:"\"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.\" — John 15:5", x:"Much fruit, but only from staying attached. Not from trying harder."},
 {w:"Perfect Love", d:"\"There is no fear in love. But perfect love drives out fear.\" — 1 John 4:18", x:"Fear and perfect love can't occupy the same space for long — one displaces the other."},
 {w:"Cheerful Giver", d:"\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\" — 2 Corinthians 9:7", x:"Cheerful — the attitude behind the gift matters as much as the gift."},
 {w:"Every Good Gift", d:"\"Every good and perfect gift is from above, coming down from the Father of the heavenly lights.\" — James 1:17", x:"Traced all the way back to its source — good things don't originate with luck."},
 {w:"Called and Kept", d:"\"He who calls you is faithful, and he will do it.\" — 1 Thessalonians 5:24", x:"The calling and the keeping both rest on His faithfulness, not yours."},
 {w:"Ancient Paths", d:"\"Stand at the crossroads and look; ask for the ancient paths, ask where the good way is, and walk in it.\" — Jeremiah 6:16", x:"Ancient, tested paths — not because old is automatically better, but because it's proven."},
 {w:"Strong Tower", d:"\"The name of the Lord is a fortified tower; the righteous run to it and are safe.\" — Proverbs 18:10", x:"A name you can run to — not just recite. Refuge described as an active place."},
 {w:"Full Assurance", d:"\"Let us draw near to God with a sincere heart and with the full assurance that faith brings.\" — Hebrews 10:22", x:"Full assurance, not partial confidence — the verse doesn't hedge."},
 {w:"New Mercies", d:"\"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning.\" — Lamentations 3:22-23", x:"Written in the wreckage of a fallen city — new mercy didn't wait for better circumstances."},
 {w:"Steadfast Heart", d:"\"My heart, O God, is steadfast; I will sing and make music with all my soul.\" — Psalm 108:1", x:"A steadfast heart chooses to sing before the circumstances resolve."},
 {w:"Bearing Burdens", d:"\"Carry each other's burdens, and in this way you will fulfill the law of Christ.\" — Galatians 6:2", x:"Fulfilling the law of Christ, in this one specific act — carrying someone else's weight."},
 {w:"Renewed Strength", d:"\"But those who hope in the Lord will renew their strength. They will soar on wings like eagles.\" — Isaiah 40:31", x:"Renewed, not manufactured — strength that comes from hoping, not striving."},
 {w:"God's Timing", d:"\"He has made everything beautiful in its time.\" — Ecclesiastes 3:11", x:"In its time — not your time. The beauty is real, but the schedule isn't yours to set."},
 {w:"Unashamed", d:"\"I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.\" — Romans 1:16", x:"Not ashamed — a deliberate stance, chosen in a culture that mocked it."},
 {w:"Complete in Him", d:"\"And in Christ you have been brought to fullness.\" — Colossians 2:10", x:"Fullness already granted — not a future achievement to reach toward."},
 {w:"Sure Foundation", d:"\"So this is what the Sovereign Lord says: 'See, I lay a stone in Zion, a tested stone, a precious cornerstone for a sure foundation.'\" — Isaiah 28:16", x:"Tested — meaning this foundation has already proven itself under pressure."},
 {w:"Gentle Whisper", d:"\"And after the earthquake a fire, but the Lord was not in the fire. And after the fire came a gentle whisper.\" — 1 Kings 19:12", x:"Elijah expected God in the dramatic. He found Him in the quiet instead."},
 {w:"Face to Face", d:"\"For now we see only a reflection as in a mirror; then we shall see face to face.\" — 1 Corinthians 13:12", x:"What's partial now is described as temporary, not permanent."},
 {w:"Perfect Peace", d:"\"You will keep in perfect peace those whose minds are steadfast, because they trust in you.\" — Isaiah 26:3", x:"Perfect — the promise is complete, tied to where the mind is fixed."},
 {w:"Chosen Vessel", d:"\"But the Lord said to Ananias, 'Go! This man is my chosen instrument to proclaim my name.'\" — Acts 9:15", x:"Said about Saul, right after his conversion — chosen before he'd proven anything."},
 {w:"Everlasting Arms", d:"\"The eternal God is your refuge, and underneath are the everlasting arms.\" — Deuteronomy 33:27", x:"Underneath — support that holds from below, not just protection from the side."},
 {w:"Kept in Peace", d:"\"You will keep in perfect peace those whose minds are steadfast, because they trust in you.\" — Isaiah 26:3", x:"Kept — implying an ongoing action, not a one-time gift you have to maintain alone."},
 {w:"His Workmanship", d:"\"For we are God's handiwork, created in Christ Jesus to do good works.\" — Ephesians 2:10", x:"Handiwork — the Greek word here is where we get 'poem.' You are crafted, not accidental."},
 {w:"Not Alone", d:"\"For I am with you and no one is going to attack and harm you, because I have many people in this city.\" — Acts 18:10", x:"Said to Paul in a hostile place — not alone, even when it felt that way."},
 {w:"Steady Course", d:"\"Let your eyes look straight ahead; fix your gaze directly before you.\" — Proverbs 4:25", x:"A steady gaze, not a wandering one — direction follows where attention goes."},
 {w:"Given Freely", d:"\"He who did not spare his own Son, but gave him up for us all — how will he not also, along with him, graciously give us all things?\" — Romans 8:32", x:"The logic runs from the greatest gift to the smaller ones that must follow."},
 {w:"Morning Mercy", d:"\"Satisfy us in the morning with your unfailing love, that we may sing for joy and be glad all our days.\" — Psalm 90:14", x:"A request to be satisfied early — so joy has all day to work its way through."},
 {w:"Steady Anchor", d:"\"We have this hope as an anchor for the soul, firm and secure.\" — Hebrews 6:19", x:"An anchor doesn't stop the storm — it keeps you from drifting during it."},
 {w:"Speak Life", d:"\"The tongue has the power of life and death, and those who love it will eat its fruit.\" — Proverbs 18:21", x:"Words aren't neutral in this verse — they're planting something that will be eaten later."},
 {w:"Renewed Mind", d:"\"Be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is.\" — Romans 12:2", x:"Discernment follows renewal — you can't test what's good with an unchanged mind."},
 {w:"Abundant Grace", d:"\"Where sin increased, grace increased all the more.\" — Romans 5:20", x:"Grace doesn't just cover sin — this verse says it outpaces it."},
 {w:"Held Together", d:"\"He is before all things, and in him all things hold together.\" — Colossians 1:17", x:"Not just created things — held together, continuously, right now."},
 {w:"True North", d:"\"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\" — Proverbs 3:5-6", x:"Straight paths follow submission, not the other way around."},
 {w:"Quiet Confidence", d:"\"In quietness and confidence shall be your strength.\" — Isaiah 30:15 (KJV)", x:"Strength paired with quietness — not the loud kind most people picture."},
 {w:"Steadfast Faith", d:"\"Now faith is confidence in what we hope for and assurance about what we do not see.\" — Hebrews 11:1", x:"Assurance about the unseen — the Bible's own definition doesn't require sight first."},
 {w:"Given Rest", d:"\"There remains, then, a Sabbath-rest for the people of God.\" — Hebrews 4:9", x:"A rest that remains — still available, not used up by anyone before you."},
 {w:"Steady Praise", d:"\"Seven times a day I praise you for your righteous laws.\" — Psalm 119:164", x:"Seven times — a rhythm built into the day, not left to feeling."},
 {w:"Clothed in Christ", d:"\"For all of you who were baptized into Christ have clothed yourselves with Christ.\" — Galatians 3:27", x:"Clothed — an image of being covered, identified by what's worn, not what's underneath."},
 {w:"Full Circle", d:"\"For from him and through him and for him are all things.\" — Romans 11:36", x:"Everything traced back to and forward toward the same source — nothing outside the circle."},
 {w:"Kept Safe", d:"\"The Lord will keep you from all harm — he will watch over your life.\" — Psalm 121:7", x:"Watch over your life — not just the dramatic moments, the whole of it."},
 {w:"Fresh Start", d:"\"Do not remember the former things; consider not the things of old. Behold, I am doing a new thing.\" — Isaiah 43:18-19", x:"Permission to stop replaying the former things — something new is already forming."},
 {w:"Steady Joy", d:"\"The joy of the Lord is your strength.\" — Nehemiah 8:10", x:"Not your strength producing joy — joy producing strength. The order matters."},
 {w:"Called Out", d:"\"But you are a chosen people, a royal priesthood, a holy nation... that you may declare the praises of him who called you out of darkness into his wonderful light.\" — 1 Peter 2:9", x:"Called out — a movement, not a static identity. You were meant to move toward light."},
 {w:"Every Step", d:"\"The Lord makes firm the steps of the one who delights in him.\" — Psalm 37:23", x:"Delight comes before firm steps — the order suggests joy fuels stability."},
 {w:"Steady Refuge", d:"\"God is our refuge and strength, an ever-present help in trouble.\" — Psalm 46:1", x:"Ever-present — meaning He was already there before the trouble started."},
 {w:"Poured Out", d:"\"And hope does not put us to shame, because God's love has been poured out into our hearts.\" — Romans 5:5", x:"Poured out, not measured carefully — an image of abundance, not rationing."},
 {w:"Steady Watch", d:"\"The eyes of the Lord are on the righteous, and his ears are attentive to their cry.\" — Psalm 34:15", x:"Both watching and listening — attentiveness described in two senses at once."},
 {w:"New Creation", d:"\"For in Christ Jesus neither circumcision nor uncircumcision means anything; what counts is the new creation.\" — Galatians 6:15", x:"New creation is what counts — not the old markers people use to measure worth."},
 {w:"Sturdy Hope", d:"\"May the God of hope fill you with all joy and peace as you trust in him.\" — Romans 15:13", x:"Hope described as something you can be filled with, not just something you feel occasionally."},
 {w:"Called Beloved", d:"\"See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!\" — 1 John 3:1", x:"'That is what we are' — not aspirational, already true."},
 {w:"Steady Ground", d:"\"He set my feet on a rock and gave me a firm place to stand.\" — Psalm 40:2", x:"A firm place to stand — described after being pulled out of a slimy pit, in the same psalm."},
 {w:"Given Voice", d:"\"Open your mouth for the mute, for the rights of all who are destitute.\" — Proverbs 31:8", x:"A voice given for someone else's sake — advocacy as a form of love."},
 {w:"Held by Grace", d:"\"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.\" — Ephesians 2:8", x:"Not from yourselves — even the faith to receive it is part of the gift."},
 {w:"Steady Light", d:"\"You, Lord, keep my lamp burning; my God turns my darkness into light.\" — Psalm 18:28", x:"He keeps the lamp burning — the maintenance isn't left entirely to you."},
 {w:"Called to Peace", d:"\"Let the peace of Christ rule in your hearts, since as members of one body you were called to peace.\" — Colossians 3:15", x:"Called to peace — a vocation, not just a nice feeling to hope for."},
 {w:"Steady Trust", d:"\"Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.\" — Psalm 62:8", x:"Pour out your hearts — trust includes honesty, not just quiet composure."},
 {w:"Given Grace", d:"\"But he gives us more grace.\" — James 4:6", x:"Three words that answer the question of whether grace runs out. It doesn't."},
 {w:"Steady Faith2", d:"\"Above all, taking the shield of faith, with which you can extinguish all the flaming arrows of the evil one.\" — Ephesians 6:16", x:"A shield extinguishes — faith isn't just defense, it actively puts out the attack."},
 {w:"Kept Close", d:"\"He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart.\" — Isaiah 40:11", x:"Carried close to the heart — the nearest possible position, not at arm's length."},
 {w:"Steady Song", d:"\"I will sing to the Lord all my life; I will sing praise to my God as long as I live.\" — Psalm 104:33", x:"As long as I live — the song isn't tied to circumstance, just to being alive."},
 {w:"Given Wisdom", d:"\"For the Lord gives wisdom; from his mouth come knowledge and understanding.\" — Proverbs 2:6", x:"Given, from His mouth — wisdom has a source, not just an accumulation of experience."},
 {w:"Steady Home", d:"\"Lord, you have been our dwelling place throughout all generations.\" — Psalm 90:1", x:"A dwelling place across generations — the home doesn't change even as everything else does."},
 {w:"Kept Whole", d:"\"May your whole spirit, soul and body be kept blameless at the coming of our Lord Jesus Christ.\" — 1 Thessalonians 5:23", x:"Whole — spirit, soul, and body together, not just the spiritual part."},
 {w:"Steady Word", d:"\"Heaven and earth will pass away, but my words will never pass away.\" — Matthew 24:35", x:"Everything else described here as temporary. His words are the exception."},
 {w:"Given Access2", d:"\"In him and through faith in him we may approach God with freedom and confidence.\" — Ephesians 3:12", x:"Freedom and confidence — not fear and hesitation. That's the access described."},
 {w:"Steady Compassion", d:"\"When Jesus saw the crowds, he had compassion on them, because they were harassed and helpless.\" — Matthew 9:36", x:"Compassion triggered by seeing — not by being asked. He noticed first."},
 {w:"Given Sight", d:"\"I once was blind but now I see.\" — John 9:25", x:"The healed man's whole theology in one line — he didn't need to explain the mechanism, just the result."},
 {w:"Steady Praise2", d:"\"Let everything that has breath praise the Lord.\" — Psalm 150:6", x:"Breath itself qualifies you — the requirement for praise is just being alive."},
 {w:"Kept Humble", d:"\"Do you see a person wise in their own eyes? There is more hope for a fool than for them.\" — Proverbs 26:12", x:"Self-assessed wisdom is flagged as more dangerous than open foolishness."},
 {w:"Steady Fire", d:"\"Do not quench the Spirit.\" — 1 Thessalonians 5:19", x:"Quench — implying the fire is already lit. The task is not extinguishing it."},
 {w:"Given Strength2", d:"\"The Lord gives strength to his people; the Lord blesses his people with peace.\" — Psalm 29:11", x:"Strength and peace named together — not opposites, companions."},
 {w:"Steady Devotion", d:"\"I remember the devotion of your youth, how as a bride you loved me and followed me through the wilderness.\" — Jeremiah 2:2", x:"God remembering early devotion — even wandering later doesn't erase what was real."},
 {w:"Kept Watching2", d:"\"Therefore keep watch, because you do not know the day or the hour.\" — Matthew 25:13", x:"Not knowing the timeline is meant to produce readiness, not paralysis."},
 {w:"Steady Delight", d:"\"Take delight in the Lord, and he will give you the desires of your heart.\" — Psalm 37:4", x:"Delight reshapes desire — the promise isn't about getting whatever you already wanted."},
 {w:"Given Peace2", d:"\"Peace I leave with you; my peace I give you. I do not give to you as the world gives.\" — John 14:27", x:"A different kind of peace — explicitly not the world's version."},
 {w:"Steady Wonder", d:"\"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.\" — Psalm 139:14", x:"Wonder about your own design — not vanity, just accurate observation."},
 {w:"Kept Faithful2", d:"\"Well done, good and faithful servant.\" — Matthew 25:23", x:"Faithful, repeated as the standard — not flawless, not spectacular, just faithful."},
 {w:"Steady Assurance", d:"\"And we know that in all things God works for the good of those who love him.\" — Romans 8:28", x:"In all things — not only the pleasant ones. The working is comprehensive."},
 {w:"Given Comfort2", d:"\"As a mother comforts her child, so will I comfort you.\" — Isaiah 66:13", x:"A maternal image for comfort — tender, not distant or formal."},
 {w:"Steady Obedience", d:"\"If you love me, keep my commands.\" — John 14:15", x:"Love expressed through obedience — not as proof to earn love, but as its natural expression."},
 {w:"Kept From Falling", d:"\"To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy.\" — Jude 1:24", x:"Kept from stumbling — an ability credited entirely to Him, not your own balance."},
 {w:"Steady Hunger", d:"\"Blessed are those who hunger and thirst for righteousness, for they will be filled.\" — Matthew 5:6", x:"Hunger named as a blessing — the wanting itself, before the filling arrives."},
 {w:"Given Rest2", d:"\"Come to me, all you who are weary and burdened, and I will give you rest.\" — Matthew 11:28", x:"An open invitation with only one qualification: being weary."},
 {w:"Steady Vision", d:"\"Where there is no revelation, people cast off restraint.\" — Proverbs 29:18", x:"Vision and restraint linked — without seeing where you're going, discipline erodes."},
 {w:"Kept in Love", d:"\"Keep yourselves in God's love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life.\" — Jude 1:21", x:"An active instruction — staying in love requires participation, not just passive receiving."},
 {w:"Steady Gratitude", d:"\"Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.\" — Psalm 100:4", x:"Gratitude as the entrance — the way in starts with thanks, not achievement."},
 {w:"Given Understanding", d:"\"The unfolding of your words gives light; it gives understanding to the simple.\" — Psalm 119:130", x:"Light for the simple — understanding isn't reserved for the naturally clever."},
 {w:"Steady Patience2", d:"\"Be patient, then, brothers and sisters, until the Lord's coming. See how the farmer waits for the land to yield its valuable crop, patiently waiting for the autumn and spring rains.\" — James 5:7", x:"A farming image for patience — waiting through seasons you can't rush."},
 {w:"Kept Righteous", d:"\"The Lord watches over the way of the righteous, but the way of the wicked leads to destruction.\" — Psalm 1:6", x:"Watched over — a form of care built into the path itself, not separate from it."},
 {w:"Steady Focus", d:"\"But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal.\" — Philippians 3:13-14", x:"One thing, named clearly — forgetting behind, straining ahead, pressing on."},
 {w:"Given Life2", d:"\"For I have come that they may have life, and have it to the full.\" — John 10:10", x:"Full life named as the purpose of His coming — not a side benefit."},
 {w:"Steady Praise3", d:"\"I will praise you, Lord, with all my heart; I will tell of all your wonderful deeds.\" — Psalm 9:1", x:"All my heart, all your deeds — the totality on both sides of the sentence."},
 {w:"Kept Secure", d:"\"No one will snatch them out of my hand.\" — John 10:28", x:"Snatch — a violent word, ruled out entirely by the promise that follows it."},
 {w:"Steady Longing2", d:"\"My soul yearns, even faints, for the courts of the Lord; my heart and my flesh cry out for the living God.\" — Psalm 84:2", x:"Yearning described physically — heart and flesh, not just abstract spiritual desire."},
 {w:"Given Boldness2", d:"\"And now, Lord, consider their threats and enable your servants to speak your word with great boldness.\" — Acts 4:29", x:"A prayer for boldness in the face of real threats, not despite their absence."},
 {w:"Steady Trustworthy", d:"\"God is not human, that he should lie, not a human being, that he should change his mind.\" — Numbers 23:19", x:"Ruled out categorically — lying and changing His mind aren't just unlikely, they're impossible for Him."},
 {w:"Kept Blameless", d:"\"He will keep you firm to the end, so that you will be blameless on the day of our Lord Jesus Christ.\" — 1 Corinthians 1:8", x:"Firm to the end — the keeping covers the whole distance, not just the start."},
 {w:"Steady Reverence2", d:"\"Serve the Lord with fear and celebrate his rule with trembling.\" — Psalm 2:11", x:"Fear and celebration together — reverence and joy aren't opposites here."},
 {w:"Given Endurance2", d:"\"Let us run with perseverance the race marked out for us.\" — Hebrews 12:1", x:"Marked out — the race isn't random. Someone already measured the course."},
 {w:"Steady Provision2", d:"\"He who did not spare his own Son but gave him up for us all — how will he not also, along with him, graciously give us all things?\" — Romans 8:32", x:"The greatest gift given first, as proof smaller gifts will follow."},
 {w:"Kept Steadfast2", d:"\"Therefore, my dear brothers and sisters, stand firm. Let nothing move you.\" — 1 Corinthians 15:58", x:"Stand firm, let nothing move you — a command that assumes things will try to."},
 {w:"Steady Purpose2", d:"\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\" — Jeremiah 29:11", x:"Spoken to exiles, far from home — plans that persisted even in their worst season."},
 {w:"Given Compassion2", d:"\"The Lord is compassionate and gracious, slow to anger, abounding in love.\" — Psalm 103:8", x:"Slow to anger, abounding in love — the ratio tells you something about His character."},
 {w:"Steady Guidance2", d:"\"I will guide you with my eye upon you.\" — Psalm 32:8 (paraphrase)", x:"Guidance through attention — He's watching closely enough to direct without force."},
 {w:"Given Joy2", d:"\"You have made known to me the paths of life; you will fill me with joy in your presence.\" — Acts 2:28", x:"Joy tied to presence, not circumstance — filled just by being near Him."},
 {w:"Steady Refuge2", d:"\"The eternal God is your refuge, and underneath are the everlasting arms.\" — Deuteronomy 33:27", x:"Refuge with support underneath — not just a wall to hide behind, a floor to stand on."},
 {w:"Kept Alive", d:"\"For to me, to live is Christ and to die is gain.\" — Philippians 1:21", x:"A perspective that removes the sting from both outcomes — life and death both become gain."},
 {w:"Steady Kindness2", d:"\"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.\" — Galatians 5:22", x:"Kindness listed among fruit — grown, not manufactured by willpower alone."},
 {w:"Given Direction2", d:"\"Commit to the Lord whatever you do, and he will establish your plans.\" — Proverbs 16:3", x:"Commit first, then plans get established — the order matters in this proverb."},
 {w:"Steady Assurance2", d:"\"For God has not given us a spirit of fear, but of power and of love and of a sound mind.\" — 2 Timothy 1:7", x:"Three things given instead of fear — power, love, and a sound mind, all named specifically."},
 {w:"Kept Humble2", d:"\"Humble yourselves before the Lord, and he will lift you up.\" — James 4:10", x:"Lifting follows humbling — not the other way around, and not by your own effort."},
 {w:"Steady Warmth2", d:"\"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you.\" — Zephaniah 3:17", x:"A warrior who delights — strength and tenderness in the same verse."},
 {w:"Given Wisdom2", d:"\"Get wisdom, get understanding; do not forget my words or turn away from them.\" — Proverbs 4:5", x:"An active pursuit — 'get' implies wisdom isn't simply handed over without seeking it."},
 {w:"Steady Mercy2", d:"\"He does not treat us as our sins deserve or repay us according to our iniquities.\" — Psalm 103:10", x:"Not what's deserved — mercy is precisely the gap between what's earned and what's given."},
 {w:"Kept Faithful3", d:"\"Great is your faithfulness; your mercies begin afresh each morning.\" — Lamentations 3:23", x:"Afresh each morning — faithfulness with a daily reset built in."},
 {w:"Steady Rest2", d:"\"He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.\" — Psalm 23:2-3", x:"Made to lie down — sometimes rest isn't chosen, it's led into."},
 {w:"Given Grace2", d:"\"For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor.\" — 2 Corinthians 8:9", x:"Grace defined through exchange — rich becoming poor, for someone else's sake."},
 {w:"Steady Courage2", d:"\"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.\" — Joshua 1:9", x:"Wherever you go — the presence promised isn't limited to familiar territory."},
 {w:"Kept Watching3", d:"\"But about that day or hour no one knows... Watch! Be alert!\" — Mark 13:32-33", x:"Not knowing exactly when is the reason given for staying alert, not an excuse to relax."},
 {w:"Steady Devotion2", d:"\"But Mary has chosen what is better, and it will not be taken away from her.\" — Luke 10:42", x:"Chosen, and protected from being taken away — devotion that gets defended."},
 {w:"Given Peace3", d:"\"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.\" — Numbers 6:24-26", x:"Peace as the final word of the oldest blessing in Scripture."},
 {w:"Steady Faithfulness2", d:"\"If we are faithless, he remains faithful, for he cannot disown himself.\" — 2 Timothy 2:13", x:"His faithfulness doesn't depend on yours — it's rooted in His own nature."},
 {w:"Kept Strong2", d:"\"I can do all this through him who gives me strength.\" — Philippians 4:13", x:"Through him — the strength is borrowed, not self-generated, and available for 'all this.'"},
 {w:"Steady Gladness2", d:"\"This is the day the Lord has made; let us rejoice and be glad in it.\" — Psalm 118:24", x:"This day, specifically — not a future one, not yesterday. Gladness for today."},
 {w:"Given Mercy2", d:"\"Blessed are the merciful, for they will be shown mercy.\" — Matthew 5:7", x:"A cycle — mercy given tends to come back around."},
 {w:"Steady Confidence2", d:"\"This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.\" — 1 John 5:14", x:"Confidence tied to His will, not to getting exactly what was asked."},
 {w:"Kept Near", d:"\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\" — Psalm 34:18", x:"Close, specifically, to the brokenhearted — not distant during the hardest seasons."},
 {w:"Steady Praise4", d:"\"Through Jesus, therefore, let us continually offer to God a sacrifice of praise.\" — Hebrews 13:15", x:"A sacrifice of praise — implying it sometimes costs something to offer it."},
 {w:"Given Strength3", d:"\"But those who hope in the Lord will renew their strength.\" — Isaiah 40:31", x:"Renewed — not created from nothing, restored from what was already there."},
 {w:"Steady Trust3", d:"\"When I am afraid, I put my trust in you.\" — Psalm 56:3", x:"Fear and trust coexisting — the verse doesn't wait for fear to disappear first."},
 {w:"Kept Loved", d:"\"I have loved you with an everlasting love; I have drawn you with unfailing kindness.\" — Jeremiah 31:3", x:"Everlasting — a love with no beginning to trace and no end to fear."},
 {w:"Steady Hope2", d:"\"We have this hope as an anchor for the soul, firm and secure.\" — Hebrews 6:19", x:"Firm and secure — the anchor image again, because some truths need repeating."},
 {w:"Given Freedom2", d:"\"So Christ has truly set us free. Now make sure that you stay free, and don't get tied up again in slavery to the law.\" — Galatians 5:1", x:"A freedom that must be maintained — it can be forfeited even after it's given."},
 {w:"Steady Delight2", d:"\"The Lord delights in those who fear him, who put their hope in his unfailing love.\" — Psalm 147:11", x:"Delight, not tolerance — His attitude toward those who trust Him is active pleasure."},
 {w:"Kept Provided", d:"\"And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.\" — 2 Corinthians 9:8", x:"All things, all times, all that you need — the coverage is total, by design."},
 {w:"Steady Wisdom2", d:"\"The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.\" — Proverbs 1:7", x:"A beginning point named clearly — reverence, not intelligence, is where wisdom starts."},
 {w:"Given Sonship2", d:"\"See what great love the Father has lavished on us, that we should be called children of God!\" — 1 John 3:1", x:"Lavished, called, and it is — three confirmations of the same identity."},
 {w:"Steady Anchor2", d:"\"Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken.\" — Isaiah 54:10", x:"Mountains as the measure of stability — and His love outlasts even that."},
 {w:"Kept Whole2", d:"\"He heals the brokenhearted and binds up their wounds.\" — Psalm 147:3", x:"Heals and binds — both the internal ache and the visible wound addressed."},
 {w:"Steady Provision3", d:"\"The Lord is my shepherd, I lack nothing.\" — Psalm 23:1", x:"Lack nothing — not a wish, a stated fact about a well-shepherded life."},
 {w:"Given Light2", d:"\"You are the light of the world. A town built on a hill cannot be hidden.\" — Matthew 5:14", x:"Cannot be hidden — light given is meant to be visible, not concealed."},
 {w:"Steady Faith3", d:"\"Without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.\" — Hebrews 11:6", x:"Rewards those who earnestly seek — the seeking itself is noticed."},
 {w:"Kept Provided2", d:"\"Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them.\" — Matthew 6:26", x:"An argument from the smaller case — if birds are fed, how much more you."},
 {w:"Steady Renewal3", d:"\"Yet inwardly we are being renewed day by day.\" — 2 Corinthians 4:16", x:"Day by day — renewal as a daily process, not a single dramatic event."},
 {w:"Given Access3", d:"\"Let us then approach the throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.\" — Hebrews 4:16", x:"Mercy and grace, timed exactly for the need — not delayed until later."},
 {w:"Steady Strength2", d:"\"God is our refuge and strength, an ever-present help in trouble.\" — Psalm 46:1", x:"Ever-present — the help doesn't arrive late, it's already positioned there."},
 {w:"Kept Watching4", d:"\"His eyes range throughout the earth to strengthen those whose hearts are fully committed to him.\" — 2 Chronicles 16:9", x:"Ranging eyes, actively searching — looking specifically for full commitment to strengthen."},
 {w:"Steady Compassion2", d:"\"As a father has compassion on his children, so the Lord has compassion on those who fear him.\" — Psalm 103:13", x:"A father's compassion as the closest available comparison for how He feels."},
 {w:"Given Rest3", d:"\"Come to me, all you who are weary and burdened, and I will give you rest. For my yoke is easy and my burden is light.\" — Matthew 11:28-30", x:"Easy and light — a strange claim for a yoke, but that's the promise made."},
 {w:"Steady Truth2", d:"\"Sanctify them by the truth; your word is truth.\" — John 17:17", x:"Truth as the agent of sanctification — not willpower, the word itself doing the work."},
 {w:"Kept Guided2", d:"\"Your word is a lamp for my feet, a light on my path.\" — Psalm 119:105", x:"Feet and path both mentioned — guidance for the immediate step and the larger direction."},
 {w:"Steady Blessing2", d:"\"Blessed is the one who trusts in the Lord, whose confidence is in him. They will be like a tree planted by the water.\" — Jeremiah 17:7-8", x:"A tree by water — roots reaching toward a source that doesn't run dry."},
 {w:"Given Comfort3", d:"\"Blessed are those who mourn, for they will be comforted.\" — Matthew 5:4", x:"A blessing attached to mourning — not despite the grief, within it."},
 {w:"Steady Devotion3", d:"\"Delight yourself in the Lord, and he will give you the desires of your heart.\" — Psalm 37:4", x:"Delight, and desires reshaped in the process — this isn't a transaction, it's transformation."},
 {w:"Kept Secure2", d:"\"My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand.\" — John 10:27-28", x:"Known by name, and held so securely that snatching becomes impossible."},
 {w:"Steady Grace2", d:"\"But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'\" — 2 Corinthians 12:9", x:"Power made perfect in weakness — the weakness isn't overcome, it's the very place power shows up."},
 {w:"Given Boldness3", d:"\"The righteous are as bold as a lion.\" — Proverbs 28:1", x:"Boldness compared to a lion — not reckless, but unafraid to be seen."},
 {w:"Steady Presence2", d:"\"Where can I go from your Spirit? Where can I flee from your presence?\" — Psalm 139:7", x:"A question with no real answer — the presence described here has no edges."},
 {w:"Kept Fruitful", d:"\"He is like a tree planted by streams of water, which yields its fruit in season.\" — Psalm 1:3", x:"Fruit in season — not forced early, not rushed. Timed naturally by staying rooted."},
 {w:"Steady Peace2", d:"\"Do not let your hearts be troubled and do not be afraid.\" — John 14:27", x:"A command paired with a promise — the peace given makes the command possible."},
 {w:"Given Victory2", d:"\"But thanks be to God! He gives us the victory through our Lord Jesus Christ.\" — 1 Corinthians 15:57", x:"Given, not earned — the victory arrives as a gift, thanks offered in response."},
 {w:"Steady Home2", d:"\"But our citizenship is in heaven. And we eagerly await a Savior from there.\" — Philippians 3:20", x:"Citizenship elsewhere — a reframe of where home actually is."},
],

// ── BODY — Stewardship of the body as God's temple ──────────────────────────
body: [
 {f:"Your body is called a temple in Scripture — 'Do you not know that your bodies are temples of the Holy Spirit?' (1 Corinthians 6:19).", a:"Treat one act of physical care today as an act of worship, not vanity."},
 {f:"Jesus regularly withdrew to 'lonely places' to rest and pray (Luke 5:16). Rest was part of his rhythm.", a:"Build one genuine rest period into your day — not entertainment, but actual quiet."},
 {f:"Psalm 139 says you are 'fearfully and wonderfully made.' That's not a compliment — it's a theological statement.", a:"Write one specific thing your body does well that you usually take for granted."},
 {f:"God rested on the seventh day (Genesis 2:2–3). This is the first thing in Scripture called 'holy.'", a:"If you're worn out today, rest without guilt. You're following God's pattern, not breaking it."},
 {f:"Elijah collapsed under a tree after his greatest victory and asked to die (1 Kings 19:4). Then God gave him food and told him to sleep.", a:"Sometimes the most spiritual thing is a nap and a meal. Don't spiritualise burnout."},
 {f:"Daniel asked for vegetables and water instead of the king's food — and was healthier at the end (Daniel 1:12–15).", a:"Food choices are stewardship choices. One small swap toward whole food honours the body you've been given."},
 {f:"Your heart beats 100,000 times a day without you asking it to. The Psalmist calls this kind of sustained care 'the works of the Lord.'", a:"Thank God for something your body does automatically today. Gratitude changes how you inhabit it."},
 {f:"Studies show that people with strong faith communities live measurably longer — lower stress hormones, better immune function.", a:"Connection is not just nice. It's physical medicine. Reach out to one person in your faith community today."},
 {f:"Sleep deprivation affects moral decision-making — tired people are measurably less compassionate, more irritable, less able to resist temptation.", a:"Protecting your sleep is protecting your character. Aim for 7–8 hours tonight."},
 {f:"Paul says 'bodily training is of some value' (1 Timothy 4:8) — less than godliness, but real value nonetheless.", a:"A 20-minute walk is both good for your body and gives you time to pray or think. Combine them today."},
 {f:"Breath in Hebrew is 'ruach' — the same word used for Spirit. 'God breathed into his nostrils the breath of life' (Genesis 2:7).", a:"Take three slow, deep breaths right now and consider that breath as a connection to the God who gave it."},
 {f:"Jesus fasted for 40 days — but he also attended parties, ate with sinners, and turned water into wine at a wedding.", a:"Faith is not asceticism for its own sake. Enjoy food and celebration today without guilt."},
 {f:"Walking was Jesus's primary mode of transport and conversation. Most of his teaching happened on the move.", a:"On your next walk, instead of a podcast, try praying out loud or in your head as you go."},
 {f:"The body's stress response — cortisol, adrenaline — is designed for short bursts, not days on end. Chronic stress inflames the body at a cellular level.", a:"Name your biggest stressor today and bring it to God specifically: 'Lord, I'm carrying this.'"},
 {f:"Laughter reduces stress hormones, boosts immunity, and appears regularly in Scripture — even God is described as 'laughing' (Psalm 2:4).", a:"Watch or read something genuinely funny today. Joy is fruit of the Spirit, not frivolity."},
 {f:"The ancient practice of fasting has measurable physical benefits: reduced inflammation, improved insulin sensitivity, cellular repair.", a:"Even skipping one snack and spending that time in prayer is a beginning. Start where you can."},
 {f:"Sunlight triggers serotonin production — the same neurotransmitter that antidepressants target. 10–20 minutes of daylight is measurable medicine.", a:"Get outside today. Creation is good (Genesis 1:31) — being in it is an act of receiving that goodness."},
 {f:"Gratitude journalling measurably reduces blood pressure and improves sleep quality over time. This is the science behind 'give thanks in all circumstances' (1 Thessalonians 5:18).", a:"Write three specific things you're grateful for tonight before you sleep."},
 {f:"The gut — now called the 'second brain' — contains 90% of the body's serotonin and communicates directly with the brain. What you eat affects how you think and feel.", a:"Add one fibre-rich whole food today: beans, oats, an apple. It's stewardship of the body God gave you."},
 {f:"Hands laid on someone in Scripture signify blessing, healing, and commissioning. Physical touch is theologically significant — and scientifically validated for wellbeing.", a:"Give someone a genuine hug today. Fifteen seconds activates oxytocin in both of you."},
 {f:"Weeping is not weakness in Scripture. Jesus wept (John 11:35). David wept. The Psalms are full of tears.", a:"If you've been suppressing grief, give it some room today. Tears are not a faith failure."},
 {f:"Your brain is most creative and spiritually receptive in the drowsy moments just before sleep — the 'hypnagogic' state. Many believers report God speaking in these moments.", a:"Instead of scrolling before sleep, lie quietly and listen. Some of your best thoughts — and prayers — may come."},
],

// ── MONEY — Biblical stewardship & generosity ───────────────────────────────
money: [
 {h:"'The earth is the Lord's, and everything in it' (Psalm 24:1)", d:"This is the foundation of Christian stewardship. You don't own your money — you manage it for someone else. That changes every financial decision."},
 {h:"Bring the whole tithe", d:"Malachi 3:10 invites Israel to 'test God' with the tithe. It's the one place in Scripture God says to put him to the test. Have you tried it for three months?"},
 {h:"The love of money — not money itself", d:"1 Timothy 6:10 is often misquoted. It's the LOVE of money that's the root of all kinds of evil — not money itself. The problem is in the heart, not the bank account."},
 {h:"Contentment is learned", d:"Paul says 'I have learned, in whatever state I am, to be content' (Philippians 4:11). Contentment is not a feeling — it's a practiced skill."},
 {h:"Debt is a form of slavery", d:"Proverbs 22:7: 'The borrower is servant to the lender.' This doesn't mean debt is always sinful — but every debt reduces your freedom. Know the cost."},
 {h:"The rich young ruler's problem wasn't his wealth", d:"Jesus didn't tell everyone to sell everything — only this man, because his wealth had become his lord. The question is not how much you have but who sits on the throne."},
 {h:"Zacchaeus didn't give it all — and Jesus called it salvation", d:"Zacchaeus gave half his possessions and repaid fraud fourfold (Luke 19:8). Generosity doesn't require perfection — it requires a turning."},
 {h:"The widow's two coins outweighed the wealthy gifts", d:"Jesus said she gave more — not in amount but in proportion (Mark 12:43). God measures giving by what you kept, not what you gave."},
 {h:"Plan giving in advance — then give cheerfully", d:"2 Corinthians 9:7 says decide in your heart first, then give. Cheerfulness follows a decision. It doesn't have to precede it."},
 {h:"Save from a posture of trust, not fear", d:"Joseph stored grain for seven years of plenty to survive seven years of famine (Genesis 41). Saving is wisdom — but savings hoarded out of fear is a different thing."},
 {h:"Seek justice in your money, not just charity", d:"Amos repeatedly condemns dishonest scales and exploitation of the poor. Ethical spending, fair business, and just wages are stewardship issues."},
 {h:"The principle of enough", d:"Proverbs 30:8–9: 'Give me neither poverty nor riches, but give me only my daily bread.' There is a biblical vision of enough — not maximum accumulation."},
 {h:"Don't neglect the poor — it is not a suggestion", d:"Proverbs 19:17: 'Whoever is kind to the poor lends to the Lord.' Generosity to the poor is described in Scripture as a loan to God."},
 {h:"God sees financial injustice", d:"James 5:4: 'The wages you failed to pay the workers who mowed your fields are crying out against you.' Pay people fairly. Pay on time. It matters to God."},
 {h:"Make a plan — but hold it loosely", d:"Proverbs 16:9: 'In their hearts humans plan their course, but the Lord establishes their steps.' Budget, plan, and save — but stay open-handed."},
 {h:"Treasure in heaven is not metaphor", d:"Matthew 6:19–21: where your treasure is, your heart follows. Every kingdom investment is a reorientation of the heart, not just a financial transaction."},
 {h:"Be honest in all financial dealings", d:"Leviticus 19:35–36 commands honest scales. In any transaction — salary negotiation, tax return, expense claims — honesty is the non-negotiable."},
 {h:"Generosity breaks the power of money", d:"You cannot serve God and money (Matthew 6:24). Regular giving is not just obedience — it is a practical act of declaring who rules you."},
 {h:"The tithe: a beginning, not a ceiling", d:"Ten percent was given to the Levites who had no inheritance. In the New Testament, generosity often exceeds the tithe. Let the tithe be the floor, not the goal."},
 {h:"Rest from acquisition", d:"The Sabbath year (Leviticus 25) commanded land to rest and debts to be released every seven years. God's economy includes interruptions to the accumulation machine."},
],

// ── MIND — Spiritual disciplines & prayer ───────────────────────────────────
mind: [
 {h:"Lectio Divina: reading that listens", d:"Read a short Scripture passage four times slowly: first for the overall text, second for a word that stands out, third for what it says to your life, fourth in response to God. The same passage, four depths."},
 {h:"The SOAP method", d:"Scripture → Observation (what does it say?) → Application (what does it say to me?) → Prayer (what do I say to God in response?). Four steps, any passage, any morning."},
 {h:"Breath prayer", d:"A word or short phrase repeated on each inhale and exhale. Classic: 'Lord Jesus Christ' (inhale) / 'have mercy on me' (exhale). Ten minutes of this is ten minutes of quieting the inner noise."},
 {h:"Fasting: the forgotten discipline", d:"Jesus said 'when you fast' — not 'if.' Fasting is abstaining from something good to seek something better. Start with one meal. Use the hunger as a prompt to pray."},
 {h:"Silence and solitude", d:"Jesus 'withdrew to desolate places and prayed' (Luke 5:16). Silence is not the absence of God — it's clearing the noise so you can hear him. Even 10 minutes changes the day."},
 {h:"Intercessory prayer: carrying others to God", d:"Prayer for other people is one of the most powerful and least practiced disciplines. Name five people this week and pray for them daily by name — not a list, but a conversation."},
 {h:"Gratitude as spiritual practice", d:"'Give thanks in all circumstances' (1 Thessalonians 5:18) is a command, not a feeling. Writing three specific gratitudes tonight is both obedience and science-backed wellbeing practice."},
 {h:"Confessional prayer", d:"1 John 1:9 promises: 'If we confess our sins, he is faithful and just and will forgive us.' Unconfessed sin accumulates weight. Named and confessed sin loses its power."},
 {h:"The Daily Examen", d:"A Jesuit practice for every evening: Where did I feel God's presence today? Where did I resist it? What am I grateful for? What do I want to bring to tomorrow? Five minutes, enormous clarity."},
 {h:"Scripture memory: fighting with the right weapon", d:"Jesus answered every temptation in the wilderness with a memorised verse (Matthew 4). Scripture in the head becomes a sword in the hand at exactly the moment you need it."},
 {h:"Corporate prayer is different from private prayer", d:"'Where two or three gather in my name, I am there' (Matthew 18:20). Something happens in praying together that cannot happen alone. Don't neglect it for the convenience of solo faith."},
 {h:"Journaling as spiritual practice", d:"Many of the Psalms appear to be David's journal entries — raw, honest, unpolished. A spiritual journal is not a performance. Write what's actually happening between you and God."},
 {h:"Praying the Psalms", d:"The Psalms are a complete emotional range — lament, praise, anger, confusion, joy. When you don't know how to pray, find a Psalm that matches your mood and read it aloud to God."},
 {h:"Sabbath rest as spiritual discipline", d:"Rest is commanded, not optional (Exodus 20:8–11). One full day without work or productivity is an act of trust that God runs the universe without your help."},
 {h:"Service as worship", d:"Romans 12:1 calls presenting your body in service a 'true and proper worship.' Every act of service done in God's name is a form of prayer with your hands."},
 {h:"Waiting is a spiritual posture", d:"'Wait for the Lord; be strong and take heart and wait for the Lord' (Psalm 27:14). Waiting is not passive — it is an active exercise of trust when nothing appears to be happening."},
 {h:"Repentance: changing the direction you face", d:"The Greek word metanoia means a complete change of mind and direction. Repentance is not just feeling bad — it's turning and walking the other way. Repeated daily if necessary."},
 {h:"Lament: the prayer of honest pain", d:"One third of the Psalms are laments. Telling God exactly how bad it is — without premature resolution — is not a lack of faith. It's deep faith that he can handle the truth."},
 {h:"Practicing the presence of God", d:"Brother Lawrence, a 17th-century monk, practised speaking to God in all tasks — washing dishes, cooking, working. Try addressing God in your ordinary work today, not just in 'prayer time.'"},
 {h:"Praying Scripture back to God", d:"Find a promise in Scripture and pray it back: 'Lord, you said you would not leave me or forsake me (Deuteronomy 31:6) — I am standing on that today.' It anchors prayer in what God has already said."},
],

// ── WORLD — Bible knowledge, church history, theology ───────────────────────
world: [
 {h:"The Bible has 66 books", d:"39 in the Old Testament, 27 in the New Testament. Written over 1,500 years by about 40 different authors — in Hebrew, Aramaic, and Greek — yet with a unified story running through all of it."},
 {h:"The shortest verse in the Bible", d:"'Jesus wept.' (John 11:35) — two words in English, three in Greek. Jesus is at the tomb of Lazarus, whom he is about to raise. He weeps anyway. God is moved by your grief even when he already knows the outcome."},
 {h:"The Dead Sea Scrolls", d:"Discovered in 1947, the Dead Sea Scrolls contain the oldest known manuscripts of most Old Testament books — 1,000 years older than anything previously known. They confirmed that the text had been copied with extraordinary accuracy."},
 {h:"The Council of Nicaea (325 AD)", d:"The first great council of the early church, called by Emperor Constantine, addressed the question of who Jesus is. The Nicene Creed emerged from it — and it's still recited in churches worldwide 1,700 years later."},
 {h:"What the word 'Gospel' actually means", d:"Gospel is the Greek word 'euangelion' — literally 'good news.' In Roman culture, a euangelion announced a military victory or an emperor's birth. The first Christians used the same word to describe Jesus."},
 {h:"The Psalms: 150 songs that cover everything", d:"The Psalms are the longest book in the Bible and contain the full range of human emotion — joy, fury, depression, awe, betrayal, and love. They were the prayer book and hymnbook of ancient Israel and remain so today."},
 {h:"Paul wrote from prison", d:"Several of Paul's most beloved letters — Philippians, Ephesians, Colossians, Philemon — were written while he was in prison. 'I have learned to be content in all circumstances' was written in chains."},
 {h:"The word 'Amen' is Hebrew", d:"Amen means 'so be it' or 'truly' — it's a statement of agreement and affirmation. Jesus uniquely used it at the beginning of statements ('Amen I say to you...') to emphasise authority, not agreement."},
 {h:"Pentecost was an existing Jewish festival", d:"The day the Holy Spirit descended on the disciples (Acts 2) was already a major Jewish celebration — the harvest festival, fifty days after Passover. The disciples were in Jerusalem for the festival when it happened."},
 {h:"The Trinity is not a word in the Bible", d:"The word Trinity appears nowhere in Scripture, but the concept is threaded throughout: the Father speaks, the Spirit moves, the Son is present in Genesis 1 alone. John 1 explicitly identifies the Word as God and as distinct from God."},
 {h:"The Lord's Prayer has two versions", d:"Matthew 6:9–13 gives the fuller version we recite. Luke 11:2–4 gives a shorter version. Jesus apparently taught this prayer more than once, and the disciples asked to be taught it after seeing him pray."},
 {h:"John is the youngest of the twelve apostles", d:"John, author of the Gospel, three letters, and Revelation, is believed to have been a teenager when Jesus called him. He was the only apostle who did not die a martyr's death — he lived to extreme old age in Ephesus."},
 {h:"The Reformation started with 95 arguments", d:"On October 31, 1517, Martin Luther nailed his 95 Theses to the door of a church in Wittenberg — a standard academic practice for debate. He wasn't trying to split the church. Within weeks, printed copies had spread across Europe."},
 {h:"'Christianity' was a nickname", d:"The followers of Jesus were first called 'Christians' in Antioch (Acts 11:26) — it was likely a mocking nickname meaning 'little Christs' or 'Christ-people.' They kept it."},
 {h:"The Great Commission ends with a promise", d:"Matthew 28:19–20 — 'Go and make disciples of all nations... And surely I am with you always, to the very end of the age.' The command is enormous; the promise at the end is the reason it's possible."},
 {h:"Noah's ark was enormous", d:"Genesis 6 gives exact dimensions: 300 cubits long, 50 wide, 30 high — roughly 137m × 23m × 14m. Large enough to house thousands of animals according to modern calculations of the cubit."},
 {h:"The book of Job may be the oldest book in the Bible", d:"Many scholars believe Job was written before Moses, possibly in the time of the Patriarchs. It is also the most philosophically sophisticated book in Scripture — wrestling honestly with suffering and God's silence."},
 {h:"Mary Magdalene was the first witness of the resurrection", d:"All four Gospels agree: the first person to see the risen Jesus was a woman — Mary Magdalene (or women, including her). In a culture where women's testimony was legally inadmissible, the disciples were slow to believe her."},
 {h:"Baptism has three forms in Christian history", d:"Immersion (full submersion, practiced by Baptists and many others), affusion (pouring, common in Catholic and Anglican traditions), and aspersion (sprinkling). All three trace back to the early church."},
 {h:"The Beatitudes are backwards from worldly values", d:"Matthew 5:3–10 — blessed are the poor in spirit, the meek, those who mourn, the persecuted. Every beatitude describes someone the world passes over. Jesus calls them blessed."},
 {h:"The Lord's Supper has many names", d:"Eucharist (thanksgiving), Communion (sharing), the Lord's Supper (apostolic name), Mass (Catholic), the Breaking of Bread (Acts 2) — different traditions use different names but all point to the same meal Jesus instituted."},
 {h:"Hebrews 11 is called the 'Hall of Faith'", d:"Hebrews 11 lists Abel, Enoch, Noah, Abraham, Sarah, Moses, Rahab — people who 'died without receiving the promises.' Faith, the chapter insists, is moving toward what you cannot yet see."},
 {h:"The book of Revelation was written to seven real churches", d:"Revelation 2–3 contains specific letters to seven actual congregations in first-century Asia Minor (modern Turkey). They had real problems: apathy, false teaching, persecution, and wealth. The apocalyptic vision was encouragement, not just prediction."},
 {h:"'Paraclete' means more than 'comforter'", d:"The Greek word for the Holy Spirit in John 14 — Paraclete — means 'one called alongside.' A paraclete in Greek law was a legal advocate. The Spirit is not just comfort — it is active legal defence on your behalf."},
 {h:"The Sermon on the Mount is a complete ethical vision", d:"Matthew 5–7 is the longest continuous teaching of Jesus recorded. It covers anger, lust, divorce, oaths, revenge, enemies, giving, prayer, fasting, wealth, worry, judgment, and prayer — a complete ethical universe in three chapters."},
],

// ── CHALLENGE — Daily faith-in-action ───────────────────────────────────────
challenge: [
 {c:"Read one chapter of the Bible today — and sit with it for 5 minutes afterwards", y:"Reading without reflecting is like eating without tasting. The pause after the chapter is often where the real encounter happens."},
 {c:"Pray for three people by name today — not a list, a real conversation", y:"Specific names with specific needs. You're not broadcasting — you're bringing people you love to the God who loves them more."},
 {c:"Text someone to say you're praying for them — then actually pray", y:"Two things: the connection of telling them, and the discipline of following through."},
 {c:"Fast from social media for the day", y:"The noise of comparison, performance, and opinion is relentless. Give yourself one day of quiet."},
 {c:"Write down a sin pattern you're aware of and confess it to God honestly", y:"Confession is not cataloguing your failures — it's bringing them into the light where they lose their power."},
 {c:"Give something away today — money, time, or something tangible", y:"Generosity is a muscle. Every act of giving makes the next one a little easier."},
 {c:"Find someone lonely and spend time with them", y:"The elderly neighbour, the colleague who always eats alone, the family member no one calls. Jesus went to the margins; we can too."},
 {c:"Memorise one Bible verse today", y:"Write it on your hand, your mirror, or a card. Say it aloud ten times. Tonight, see if you can say it without looking."},
 {c:"Forgive someone in your heart who hasn't apologised", y:"Forgiveness is a choice before it's a feeling. Make the choice today — quietly, privately, between you and God."},
 {c:"Read Psalm 23 slowly, out loud, pausing at every comma", y:"You've heard it before. You haven't yet heard it the way reading it aloud in your own voice will make you hear it."},
 {c:"Attend a church service or faith gathering this week", y:"Faith grows in community. You can't get what the gathered Body offers anywhere else."},
 {c:"Tell someone what God has done for you recently", y:"Testimony — sharing what you've seen God do — is one of the most powerful forms of evangelism. No argument needed."},
 {c:"Do one anonymous act of service today", y:"No photo, no mention, no credit. The point is the act, not the recognition."},
 {c:"Sit in silence for 10 minutes with no phone, no music", y:"Stillness feels uncomfortable before it feels restorative. Ten minutes is long enough to experience both."},
 {c:"Write a letter of gratitude to God — just pour it out", y:"Not a prayer list. Just thanks. For specific things. Named. Write as if you were writing to someone who actually reads it. He does."},
 {c:"Pray the Lord's Prayer — one line at a time, slowly, pausing at each line", y:"'Your kingdom come' — stop. What does that mean for today? 'Give us today our daily bread' — stop. What are you actually asking for?"},
 {c:"Ask someone about their prayer needs and pray with them right then", y:"Don't say 'I'll pray for you.' Pray now. Together. Even two sentences. It changes something between you."},
 {c:"Read a chapter of Proverbs (the chapter matching today's date)", y:"Proverbs has 31 chapters — one for each day of the month. It's the most practical wisdom book in Scripture."},
 {c:"Tithe something today, even if it's small", y:"If you've been putting off giving, start now. Give one amount, to one place, on purpose. That's how the habit begins."},
 {c:"Go on a prayer walk — talk to God about what you see", y:"Pray for the houses you pass. The people you see. The community around you. Walking prays differently than sitting."},
 {c:"Read one story from the Gospels — and ask 'what does this show me about who Jesus is?'", y:"Not what it says to apply. Just: who is this person? Let the portrait settle before you extract a lesson."},
 {c:"Fast from complaining today", y:"Every time you notice a complaint forming, redirect it into a prayer. 'This is hard, Lord' is not complaining — it's honesty. 'This is ridiculous' discharged at someone else is."},
 {c:"Write a blessing for one person in your life and send it to them", y:"Not generic. Specific: what you see in them, what you're praying for them, what you're grateful for in them."},
 {c:"Ask God one honest question and sit with the silence", y:"You don't need an answer today. You just need to ask. The relationship deepens when the questions are real."},
 {c:"Read the Beatitudes (Matthew 5:3–10) and ask which one is your invitation today", y:"Eight descriptions. One of them probably lands differently than the others right now. That's the one."},
 {c:"Spend your commute or drive in prayer instead of music", y:"Not listening to worship — talking. Tell God about your day before it starts. It changes how you enter it."},
 {c:"Choose one Fruit of the Spirit to focus on this week — start today", y:"Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. Pick one. Look for one chance to practise it."},
 {c:"Call an elderly person in your church or family — just to listen", y:"Older believers carry decades of faith stories. They often have no one to tell them to. Ask about their walk with God."},
 {c:"Confess something to a trusted friend or mentor today", y:"James 5:16: 'Confess your sins to each other and pray for each other so that you may be healed.' Accountability is a sacrament the church often skips."},
 {c:"Read Acts 2 — and ask what is the same and different in your church today", y:"The original church: devoted to teaching, fellowship, breaking bread, and prayer. No judgement — just honest reflection on the distance."},
 {c:"Write three things you're trusting God for right now", y:"Faith is not just retrospective (what God has done) but prospective (what you're waiting for). Name them."},
 {c:"Eat a meal slowly, giving thanks for each element — who grew it, made it, delivered it", y:"Grace before meals was designed to do this. Take five minutes to mean it today."},
 {c:"Do something today that you can only explain by faith", y:"Give more than is comfortable. Help someone inconveniently. Take a risk in obedience. Faith shows in choices the world can't fully explain."},
]
};

// ── PRAISE SONGS — Song of the Day pool ─────────────────────────────────────
const PRAISE_SONGS = [
  {t:"Way Maker",a:"Sinach"},
  {t:"Goodness of God",a:"Bethel Music"},
  {t:"What a Beautiful Name",a:"Hillsong Worship"},
  {t:"Oceans (Where Feet May Fail)",a:"Hillsong United"},
  {t:"Reckless Love",a:"Cory Asbury"},
  {t:"Build My Life",a:"Housefires"},
  {t:"Living Hope",a:"Phil Wickham"},
  {t:"Holy Spirit",a:"Francesca Battistelli"},
  {t:"How Great Is Our God",a:"Chris Tomlin"},
  {t:"10,000 Reasons (Bless the Lord)",a:"Matt Redman"},
  {t:"Great Are You Lord",a:"All Sons & Daughters"},
  {t:"King of My Heart",a:"Bethel Music"},
  {t:"Do It Again",a:"Elevation Worship"},
  {t:"Graves Into Gardens",a:"Elevation Worship"},
  {t:"The Blessing",a:"Kari Jobe & Cody Carnes"},
  {t:"Raise a Hallelujah",a:"Bethel Music"},
  {t:"Surrounded (Fight My Battles)",a:"UPPERROOM"},
  {t:"Ever Be",a:"Kalley Heiligenthal"},
  {t:"Even So Come",a:"Kristian Stanfill"},
  {t:"In Christ Alone",a:"Keith & Kristyn Getty"},
  {t:"Amazing Grace (My Chains Are Gone)",a:"Chris Tomlin"},
  {t:"O Come to the Altar",a:"Elevation Worship"},
  {t:"Glorious Day",a:"Passion"},
  {t:"God of Revival",a:"Brian & Jenn Johnson"},
  {t:"Battle Belongs",a:"Phil Wickham"},
  {t:"Firm Foundation (He Won't)",a:"Cody Carnes"},
  {t:"Gratitude",a:"Brandon Lake"},
  {t:"Holy Forever",a:"Chris Tomlin"},
  {t:"Champion",a:"Bethel Music"},
  {t:"See A Victory",a:"Elevation Worship"},
  {t:"Canvas and Clay",a:"Pat Barrett"},
  {t:"Your Presence Is Heaven",a:"Israel Houghton"},
  {t:"Nobody Like You Lord",a:"Vertical Worship"},
  {t:"Isaiah 6",a:"Phil Wickham"},
  {t:"This Is Amazing Grace",a:"Phil Wickham"},
];

// ── SLEEP SCRIPTURE — nightly reading pool ───────────────────────────────────
const SLEEP_PASSAGES = [
  {t:"Psalm 23", intro:"Close your eyes. Breathe slowly. Let these ancient words settle over you like a blanket.",
   text:"The Lord is my shepherd. I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever."},

  {t:"John 14:1–3", intro:"Jesus speaking. These words were meant for tired hearts.",
   text:"Let not your hearts be troubled. Believe in God. Believe also in me. In my Father's house are many rooms. If it were not so, would I have told you that I go to prepare a place for you? And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also."},

  {t:"Psalm 91", intro:"A shelter for the night. Read slowly. Let each line land.",
   text:"He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, my refuge and my fortress, my God, in whom I trust. For he will deliver you from the snare of the fowler and from the deadly pestilence. He will cover you with his pinions, and under his wings you will find refuge. His faithfulness is a shield and buckler. You will not fear the terror of the night, nor the arrow that flies by day. For he will command his angels concerning you to guard you in all your ways."},

  {t:"Romans 8:38–39", intro:"Nothing. Nothing at all. Let that sink in tonight.",
   text:"For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord."},

  {t:"Psalm 121", intro:"Lift your eyes. Your help is already on the way.",
   text:"I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. He will not let your foot be moved. He who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep. The Lord is your keeper. The Lord is your shade on your right hand. The sun shall not strike you by day, nor the moon by night. The Lord will keep you from all evil. He will keep your life. The Lord will keep your going out and your coming in from this time forth and forevermore."},

  {t:"Isaiah 43:1–3", intro:"God is calling you by name tonight. Listen.",
   text:"But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: Fear not, for I have redeemed you. I have called you by name, you are mine. When you pass through the waters, I will be with you. And through the rivers, they shall not overwhelm you. When you walk through fire you shall not be burned, and the flame shall not consume you. For I am the Lord your God, the Holy One of Israel, your Savior."},

  {t:"Matthew 11:28–30", intro:"He already knows you're tired. This is His invitation.",
   text:"Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light."},

  {t:"Philippians 4:6–8", intro:"Trade your worry for peace. This is how.",
   text:"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things."},

  {t:"Psalm 46:1–3, 10", intro:"Be still. Just for a few minutes. Let God be God.",
   text:"God is our refuge and strength, a very present help in trouble. Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea, though its waters roar and foam, though the mountains tremble at its swelling. Be still, and know that I am God. I will be exalted among the nations. I will be exalted in the earth."},

  {t:"Isaiah 26:3", intro:"Perfect peace is available to you tonight. Here is the door.",
   text:"You keep him in perfect peace whose mind is stayed on you, because he trusts in you. Trust in the Lord forever, for the Lord God is an everlasting rock."},

  {t:"Psalm 4:7–8", intro:"This is one of the most peaceful verses in the whole Bible.",
   text:"You have put more joy in my heart than they have when their grain and wine abound. In peace I will both lie down and sleep, for you alone, O Lord, make me dwell in safety."},

  {t:"1 Peter 5:6–7", intro:"You don't have to carry tonight's worry. There's somewhere to put it.",
   text:"Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you."},

  {t:"Psalm 139:1–5, 11–12", intro:"He sees you right now. Every part of you. And He's here.",
   text:"O Lord, you have searched me and known me. You know when I sit down and when I rise up. You discern my thoughts from afar. You search out my path and my lying down and are acquainted with all my ways. Even before a word is on my tongue, behold, O Lord, you know it altogether. You hem me in, behind and before, and lay your hand upon me. If I say, surely the darkness shall cover me, and the light about me be night, even the darkness is not dark to you. The night is bright as the day, for darkness is as light with you."},

  {t:"Zephaniah 3:17", intro:"God singing over you. That is what tonight's verse is about.",
   text:"The Lord your God is in your midst, a mighty one who will save. He will rejoice over you with gladness. He will quiet you by his love. He will exult over you with loud singing."},

  {t:"Psalm 62:1–2", intro:"Rest your soul in the one place it actually finds rest.",
   text:"For God alone my soul waits in silence. From him comes my salvation. He alone is my rock and my salvation, my fortress. I shall not be greatly shaken."},

  {t:"Psalm 3:3–5", intro:"Written by a king running for his life. If he could sleep, so can you.",
   text:"But you, Lord, are a shield around me, my glory, the One who lifts my head high. I call out to the Lord, and he answers me from his holy mountain. I lie down and sleep; I wake again, because the Lord sustains me."},

  {t:"Psalm 34:4–8", intro:"Taste and see. Let tonight be about tasting his goodness, not solving anything.",
   text:"I sought the Lord, and he answered me; he delivered me from all my fears. Those who look to him are radiant; their faces are never covered with shame. This poor man called, and the Lord heard him; he saved him out of all his troubles. The angel of the Lord encamps around those who fear him, and he delivers them. Taste and see that the Lord is good; blessed is the one who takes refuge in him."},

  {t:"Isaiah 40:28–31", intro:"He does not grow tired. Let that truth carry your tired body into rest.",
   text:"Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."},

  {t:"Psalm 16:8–11", intro:"Set him always before you, and let your heart be glad tonight.",
   text:"I keep my eyes always on the Lord. With him at my right hand, I will not be shaken. Therefore my heart is glad and my tongue rejoices; my body also will rest secure. You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand."},

  {t:"Deuteronomy 31:8", intro:"He goes before you into tomorrow. He is already there.",
   text:"The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged."},

  {t:"Psalm 91:1–6", intro:"A shelter for tonight. Let each line settle over you.",
   text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress, my God, in whom I trust. Surely he will save you from the fowler's snare and from the deadly pestilence. He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart. You will not fear the terror of night, nor the arrow that flies by day, nor the pestilence that stalks in the darkness, nor the plague that destroys at midday."},

  {t:"Colossians 3:15", intro:"Let peace rule tonight. Not worry, not planning. Peace.",
   text:"Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful."},

  {t:"Psalm 42:8", intro:"A song in the night. His love commanded, even now.",
   text:"By day the Lord directs his love, at night his song is with me — a prayer to the God of my life."},

  {t:"Habakkuk 3:17–19", intro:"Even when nothing goes as planned, this is still true.",
   text:"Though the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food, though there are no sheep in the pen and no cattle in the stalls, yet I will rejoice in the Lord, I will be joyful in God my Savior. The Sovereign Lord is my strength; he makes my feet like the feet of a deer, he enables me to tread on the heights."},

  {t:"Psalm 131:1–2", intro:"Be like a weaned child tonight. Still. Quiet. Content.",
   text:"My heart is not proud, Lord, my eyes are not haughty; I do not concern myself with great matters or things too wonderful for me. But I have calmed and quieted myself, I am like a weaned child with its mother; like a weaned child I am content."},

  {t:"John 16:33", intro:"Peace in him. Trouble in the world. Both true, and he's already won.",
   text:"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."},

  {t:"Psalm 121:1–4", intro:"He who keeps you does not sleep. So you can.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep."},

  {t:"2 Thessalonians 3:16", intro:"The Lord of peace himself, giving peace at all times.",
   text:"Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with all of you."},

  {t:"Psalm 30:5", intro:"Weeping may last through the night. But morning is coming.",
   text:"For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning."},

  {t:"Romans 8:31, 38–39", intro:"Nothing can separate you tonight. Let that settle every worry.",
   text:"What, then, shall we say in response to these things? If God is for us, who can be against us? For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."},

  {t:"Psalm 143:8", intro:"Let morning bring word of his love. But first, rest in tonight's trust.",
   text:"Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life."},

  {t:"Exodus 33:14", intro:"His presence goes with you. Rest is not separate from him — it's promised alongside him.",
   text:"The Lord replied, 'My Presence will go with you, and I will give you rest.'"},

  {t:"Psalm 55:22", intro:"Cast your burden. Let it actually leave your hands tonight.",
   text:"Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken."},

  {t:"1 Thessalonians 5:9–10", intro:"Awake or asleep, you belong to him. Let that be the last thought tonight.",
   text:"For God did not appoint us to suffer wrath but to receive salvation through our Lord Jesus Christ. He died for us so that, whether we are awake or asleep, we may live together with him."},

  {t:"Psalm 25:4–5", intro:"Ask to be shown the way. Let tonight be a quiet handing-over.",
   text:"Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me, for you are God my Savior, and my hope is in you all day long."},

  {t:"Nahum 1:7", intro:"Good in trouble. A stronghold when it comes. Let tonight rest on that.",
   text:"The Lord is good, a refuge in times of trouble. He cares for those who trust in him."},

  {t:"Psalm 63:6–8", intro:"Remember him through the watches of the night. He is holding you.",
   text:"On my bed I remember you; I think of you through the watches of the night. Because you are my help, I sing in the shadow of your wings. I cling to you; your right hand upholds me."},

  {t:"John 10:27–28", intro:"Known by name. Held so securely nothing can snatch you away. Sleep in that.",
   text:"My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand."},

  {t:"Psalm 116:7", intro:"Return to your rest, soul. He has been good to you.",
   text:"Return to your rest, my soul, for the Lord has been good to you."},

  {t:"Psalm 4:8", intro:"Peace and safety, tonight, from him alone.",
   text:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."},

  {t:"Isaiah 41:10", intro:"Do not fear. He is with you, strengthening, holding, right now.",
   text:"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."},

  {t:"Psalm 46:1–3, 10–11", intro:"Be still tonight. Let the earth shake if it must — he is unmoved.",
   text:"God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea. Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth. The Lord Almighty is with us; the God of Jacob is our fortress."},

  {t:"Matthew 6:34", intro:"Tomorrow can wait. Tonight only needs tonight.",
   text:"Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."},

  {t:"Psalm 27:1, 5", intro:"Whom shall you fear tonight? No one. He hides you.",
   text:"The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid? For in the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent."},

  {t:"Jude 1:24–25", intro:"He is able to keep you. Let that be the last thing you believe tonight.",
   text:"To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy — to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen."},

  {t:"Psalm 5:11–12", intro:"Refuge and joy in the same breath. Rest under his favor tonight.",
   text:"But let all who take refuge in you be glad; let them ever sing for joy. Spread your protection over them, that those who love your name may rejoice in you. Surely, Lord, you bless the righteous; you surround them with your favor as with a shield."},

  {t:"2 Corinthians 12:9", intro:"His grace is enough for tonight, and for whatever tomorrow holds too.",
   text:"But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me."},

  {t:"Psalm 90:1–2, 17", intro:"He has been home to every generation before you. Rest in him tonight.",
   text:"Lord, you have been our dwelling place throughout all generations. Before the mountains were born or you brought forth the whole world, from everlasting to everlasting you are God. May the favor of the Lord our God rest on us; establish the work of our hands for us."},

  {t:"John 14:27", intro:"Not the world's peace. His. Let your heart stop being troubled tonight.",
   text:"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."},

  {t:"Psalm 138:7–8", intro:"He will fulfill his purpose for you. Your part tonight is simply to rest.",
   text:"Though I walk in the midst of trouble, you preserve my life. You stretch out your hand against the anger of my foes; with your right hand you save me. The Lord will vindicate me; your love, Lord, endures forever."},

  {t:"1 Peter 5:6–7", intro:"Humble yourself, and cast every anxious thought where it belongs.",
   text:"Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you."},

  {t:"Psalm 23 (evening reading)", intro:"The oldest bedtime psalm there is. Read it slowly, one more time.",
   text:"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name's sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows. Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the Lord forever."},

  {t:"Proverbs 3:24", intro:"Lie down without fear. Sweet sleep is promised, not just hoped for.",
   text:"When you lie down, you will not be afraid; when you lie down, your sleep will be sweet."},

  {t:"Psalm 62:5–8", intro:"Find rest, O my soul, in God alone. Pour out your heart to him tonight.",
   text:"Yes, my soul, find rest in God; my hope comes from him. Truly he is my rock and my salvation; he is my fortress, I will not be shaken. My salvation and my honor depend on God; he is my mighty rock, my refuge. Trust in him at all times, you people; pour out your hearts to him, for God is our refuge."},

  {t:"Isaiah 26:3–4", intro:"A mind fixed on him finds perfect peace. Fix yours there tonight.",
   text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you. Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal."},

  {t:"Psalm 121:5–8", intro:"He watches your going out and coming in — even tonight's small journey into sleep.",
   text:"The Lord watches over you — the Lord is your shade at your right hand; the sun will not harm you by day, nor the moon by night. The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore."},

  {t:"Philippians 4:6–7", intro:"Present your requests. Receive the peace that follows — a peace beyond understanding.",
   text:"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."},

  {t:"Psalm 141:2, 8", intro:"Let your evening prayer rise like incense. Your eyes are fixed on him.",
   text:"May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice. But my eyes are fixed on you, Sovereign Lord; in you I take refuge — do not give me over to death."},

  {t:"Hebrews 13:5–6", intro:"He will never leave you. Never forsake you. So you can say, without fear.",
   text:"Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' So we say with confidence, 'The Lord is my helper; I will not be afraid.'"},

  {t:"Psalm 139:11–12", intro:"Even the darkness is not dark to him. He sees you clearly, right now.",
   text:"If I say, 'Surely the darkness will hide me and the light become night around me,' even the darkness will not be dark to you; the night will shine like the day, for darkness is as light to you."},

  {t:"1 John 4:16, 18", intro:"God is love. Perfect love drives out fear. Let fear go tonight.",
   text:"And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them. There is no fear in love. But perfect love drives out fear, because fear has to do with punishment."},

  {t:"Psalm 4:4", intro:"Search your heart in the stillness. Be still, and let it settle.",
   text:"Tremble and do not sin; when you are on your beds, search your hearts and be silent."},

  {t:"Micah 7:7", intro:"Watch and wait tonight. He hears.",
   text:"But as for me, I watch in hope for the Lord, I wait for God my Savior; my God will hear me."},

  {t:"Psalm 145:18–19", intro:"Near to all who call. Call out tonight, and know he's already close.",
   text:"The Lord is near to all who call on him, to all who call on him in truth. He fulfills the desires of those who fear him; he hears their cry and saves them."},

  {t:"Psalm 37:5–7", intro:"Commit your way. Be still. Wait patiently — tonight is a good night to practice.",
   text:"Commit your way to the Lord; trust in him and he will do this: He will make your righteous reward shine like the dawn, your vindication like the noonday sun. Be still before the Lord and wait patiently for him."},

  {t:"Zechariah 2:5", intro:"He is a wall of fire around you, and glory within. Sleep protected.",
   text:"'And I myself will be a wall of fire around it,' declares the Lord, 'and I will be its glory within.'"},

  {t:"Psalm 18:1–2", intro:"My rock, my fortress, my deliverer. Say it slowly, and mean it tonight.",
   text:"I love you, Lord, my strength. The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold."},

  {t:"1 Corinthians 13:7–8", intro:"Love that never fails. Rest tonight in a love that always protects, always hopes.",
   text:"Love bears all things, believes all things, hopes all things, endures all things. Love never fails."},

  {t:"Psalm 71:1–3", intro:"In you I take refuge. Be my rock of refuge tonight.",
   text:"In you, Lord, I have taken refuge; let me never be put to shame. In your righteousness, rescue me and deliver me; turn your ear to me and save me. Be my rock of refuge, to which I can always go."},

  {t:"Lamentations 3:22–26", intro:"His mercies are new tonight too. Wait quietly for his goodness.",
   text:"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. I say to myself, 'The Lord is my portion; therefore I will wait for him.' The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord."},

  {t:"Psalm 89:1–2", intro:"His love, established forever. His faithfulness, as firm as the sky. Rest in that firmness.",
   text:"I will sing of the Lord's great love forever; with my mouth I will make your faithfulness known through all generations. I will declare that your love stands firm forever, that you have established your faithfulness in heaven itself."},

  {t:"Matthew 11:28–30", intro:"Come to him, tired one. His yoke is easy. His burden is light.",
   text:"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."},

  {t:"Psalm 84:11–12", intro:"No good thing withheld from those who walk uprightly. Rest in his provision tonight.",
   text:"For the Lord God is a sun and shield; the Lord bestows favor and honor; no good thing does he withhold from those whose walk is blameless. Lord Almighty, blessed is the one who trusts in you."},

  {t:"Romans 15:13", intro:"May the God of hope fill you tonight with joy and peace, overflowing.",
   text:"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."},

  {t:"Psalm 119:114", intro:"My refuge, my shield. My hope is in your word tonight.",
   text:"You are my refuge and my shield; I have put my hope in your word."},

  {t:"2 Corinthians 4:16–18", intro:"What's unseen is eternal. Let tonight's rest be light, momentary, held in something bigger.",
   text:"Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen."},

  {t:"Psalm 4:1", intro:"Answer me when I call, God of my righteousness. You have relieved me before.",
   text:"Answer me when I call to you, my righteous God. Give me relief from my distress; have mercy on me and hear my prayer."},

  {t:"Isaiah 43:1–2", intro:"He has called you by name. You are his. Waters and fire will not overwhelm you.",
   text:"But now, this is what the Lord says — he who created you, Jacob, he who formed you, Israel: 'Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.'"},

  {t:"Psalm 73:26", intro:"When flesh and heart fail, he is the strength that remains. Rest in that portion tonight.",
   text:"My flesh and my heart may fail, but God is the strength of my heart and my portion forever."},

  {t:"John 15:9", intro:"Remain in his love tonight. That's the whole instruction.",
   text:"As the Father has loved me, so have I loved you. Now remain in my love."},

  {t:"Psalm 103:1–5", intro:"Bless the Lord, and let him remind you of every good thing he's done.",
   text:"Praise the Lord, my soul; all my inmost being, praise his holy name. Praise the Lord, my soul, and forget not all his benefits — who forgives all your sins and heals all your diseases, who redeems your life from the pit and crowns you with love and compassion, who satisfies your desires with good things so that your youth is renewed like the eagle's."},

  {t:"Zephaniah 3:17 (evening reading)", intro:"He rejoices over you with singing tonight. Let that be the sound you fall asleep to.",
   text:"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."},

  {t:"Psalm 119:165", intro:"Great peace for those who love his law. Nothing to make you stumble tonight.",
   text:"Great peace have those who love your law, and nothing can make them stumble."},

  {t:"Ephesians 3:20–21", intro:"He is able to do far more than you can ask or imagine. Rest in that tonight.",
   text:"Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen."},

  {t:"Psalm 31:14–15", intro:"My times are in your hands. Trust him with tonight, and every hour that follows.",
   text:"But I trust in you, Lord; I say, 'You are my God.' My times are in your hands; deliver me from the hands of my enemies, from those who pursue me."},

  {t:"Colossians 1:11", intro:"Strengthened with all power for endurance and patience, joyfully. Rest into that strength tonight.",
   text:"being strengthened with all power according to his glorious might so that you may have great endurance and patience, and giving joyful thanks to the Father."},

  {t:"Psalm 16:5–6", intro:"You are my portion. The lines have fallen in pleasant places. Rest in your inheritance tonight.",
   text:"Lord, you alone are my portion and my cup; you make my lot secure. The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance."},

  {t:"1 Peter 1:3–5", intro:"A living hope, an inheritance that can never perish. Shielded by his power tonight.",
   text:"Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead, and into an inheritance that can never perish, spoil or fade. This inheritance is kept in heaven for you, who through faith are shielded by God's power."},

  {t:"Psalm 33:20–22", intro:"Our soul waits for the Lord. He is our help and our shield. Rest in his unfailing love.",
   text:"We wait in hope for the Lord; he is our help and our shield. In him our hearts rejoice, for we trust in his holy name. May your unfailing love be with us, Lord, even as we put our hope in you."},

  {t:"Isaiah 32:17–18", intro:"The fruit of righteousness is peace, quietness, and confidence forever. Dwell there tonight.",
   text:"The fruit of that righteousness will be peace; its effect will be quietness and confidence forever. My people will live in peaceful dwelling places, in secure homes, in undisturbed places of rest."},

  {t:"Psalm 68:19", intro:"He bears our burdens daily. Tonight, let him carry what you've been holding.",
   text:"Praise be to the Lord, to God our Savior, who daily bears our burdens."},

  {t:"John 6:37", intro:"Whoever comes to him will never be driven away. Come to him tonight, just as you are.",
   text:"All those the Father gives me will come to me, and whoever comes to me I will never drive away."},

  {t:"Psalm 46:10–11", intro:"Be still, and know. Let the knowing be enough for tonight.",
   text:"He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.' The Lord Almighty is with us; the God of Jacob is our fortress."},

  {t:"Psalm 17:8", intro:"Kept as the apple of his eye. Hidden in the shadow of his wings tonight.",
   text:"Keep me as the apple of your eye; hide me in the shadow of your wings."},

  {t:"Isaiah 12:2", intro:"He is your strength and your song. Trust without fear tonight.",
   text:"Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation."},

  {t:"Psalm 40:1–3", intro:"He heard your cry. He lifted you out. A new song, even for tonight.",
   text:"I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand. He put a new song in my mouth, a hymn of praise to our God."},

  {t:"1 John 3:1", intro:"See what great love. You are called his child. Rest in that name tonight.",
   text:"See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!"},

  {t:"Psalm 57:1", intro:"Take refuge in the shadow of his wings until the danger passes. Even the danger of a restless mind.",
   text:"Have mercy on me, my God, have mercy on me, for in you I take refuge. I will take refuge in the shadow of your wings until the disaster has passed."},

  {t:"Romans 5:1–2", intro:"Justified, at peace, standing in grace. That's where you rest tonight.",
   text:"Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand."},

  {t:"Psalm 94:18–19", intro:"When your foot is slipping, his love holds you up. When anxiety is great, his consolation brings joy.",
   text:"When I said, 'My foot is slipping,' your unfailing love, Lord, supported me. When anxiety was great within me, your consolation brought me joy."},

  {t:"Song of Songs 2:16", intro:"A simple line of belonging. Rest in being known and claimed tonight.",
   text:"My beloved is mine and I am his."},

  {t:"Psalm 27:13–14", intro:"You will see his goodness. Wait for him tonight — be strong, take heart.",
   text:"I remain confident of this: I will see the goodness of the Lord in the land of the living. Wait for the Lord; be strong and take heart and wait for the Lord."},

  {t:"Isaiah 54:10", intro:"Mountains may shake. His unfailing love for you will not be shaken. Rest in that unshakeable love.",
   text:"'Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed,' says the Lord, who has compassion on you."},

  {t:"Psalm 116:1–2", intro:"He turned his ear to you. Call on him tonight, and every night after.",
   text:"I love the Lord, for he heard my voice; he heard my cry for mercy. Because he turned his ear to me, I will call on him as long as I live."},

  {t:"2 Timothy 1:12", intro:"He guards what's entrusted to him. Let him guard your rest tonight.",
   text:"That is why I am suffering as I am. Yet this is no cause for shame, because I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him for that day."},

  {t:"Psalm 121 (full evening reading)", intro:"He who keeps you does not slumber. Read this one slowly, all the way through.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep. The Lord watches over you — the Lord is your shade at your right hand; the sun will not harm you by day, nor the moon by night. The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore."},

  {t:"Psalm 25:16–17", intro:"Turn to me and be gracious. Relieve the troubles of your heart tonight.",
   text:"Turn to me and be gracious to me, for I am lonely and afflicted. Relieve the troubles of my heart and free me from my anguish."},

  {t:"Titus 3:5", intro:"Not by your effort — by his mercy. Rest in what's already been done.",
   text:"He saved us, not because of righteous things we had done, but because of his mercy."},

  {t:"Psalm 119:76", intro:"Let his unfailing love be your comfort tonight, just as he promised.",
   text:"May your unfailing love be my comfort, according to your promise to your servant."},

  {t:"Isaiah 30:15", intro:"In returning and rest you shall be saved. In quietness and trust is your strength.",
   text:"This is what the Sovereign Lord, the Holy One of Israel, says: 'In repentance and rest is your salvation, in quietness and trust is your strength.'"},

  {t:"Psalm 61:1–4", intro:"Lead me to the rock that is higher than I. Let me dwell in your tent tonight.",
   text:"Hear my cry, O God; listen to my prayer. From the ends of the earth I call to you, I call as my heart grows faint; lead me to the rock that is higher than I. For you have been my refuge, a strong tower against the foe. I long to dwell in your tent forever and take refuge in the shelter of your wings."},

  {t:"Romans 8:1–2", intro:"No condemnation for those in Christ. Sleep free of it tonight.",
   text:"Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death."},

  {t:"Psalm 63:1, 6–7", intro:"Earnestly you seek him. In the night watches, remember he's already near.",
   text:"You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you. On my bed I remember you; I think of you through the watches of the night. Because you are my help, I sing in the shadow of your wings."},

  {t:"Ephesians 1:3", intro:"Blessed with every spiritual blessing. Rest in what's already yours tonight.",
   text:"Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ."},

  {t:"Psalm 108:1–4", intro:"My heart is steadfast, O God. I will sing your praise even as the day ends.",
   text:"My heart, O God, is steadfast; I will sing and make music with all my soul. Awake, harp and lyre! I will awaken the dawn. I will praise you, Lord, among the nations; I will sing of you among the peoples. For great is your love, higher than the heavens; your faithfulness reaches to the skies."},

  {t:"John 1:16", intro:"Grace upon grace, from his fullness. Rest in the overflow tonight.",
   text:"Out of his fullness we have all received grace in place of grace already given."},

  {t:"Psalm 119:50", intro:"His promise preserves your life. Let it comfort you in your affliction, whatever it is tonight.",
   text:"My comfort in my suffering is this: Your promise preserves my life."},

  {t:"2 Peter 1:3", intro:"His divine power has given you everything needed for life and godliness. Rest fully supplied tonight.",
   text:"His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness."},

  {t:"Psalm 66:8–9", intro:"He has kept us among the living. He has not let our feet slip. Trust him with tonight's rest.",
   text:"Praise our God, all peoples, let the sound of his praise be heard; he has preserved our lives and kept our feet from slipping."},

  {t:"Isaiah 55:12", intro:"You will go out in joy and be led forth in peace. Let that be tomorrow's promise as you sleep tonight.",
   text:"You will go out in joy and be led forth in peace; the mountains and hills will burst into song before you, and all the trees of the field will clap their hands."},

  {t:"Psalm 116:8–9", intro:"He delivered your eyes from tears, your feet from stumbling. Walk before him tonight, even in rest.",
   text:"For you, Lord, have delivered me from death, my eyes from tears, my feet from stumbling, that I may walk before the Lord in the land of the living."},

  {t:"Psalm 9:9–10", intro:"A stronghold for the oppressed, in times of trouble. Trust him with tonight's trouble, whatever it is.",
   text:"The Lord is a refuge for the oppressed, a stronghold in times of trouble. Those who know your name trust in you, for you, Lord, have never forsaken those who seek you."},

  {t:"Psalm 119:105 (evening reading)", intro:"A lamp for your feet, tonight and every night. Enough light for the next step.",
   text:"Your word is a lamp for my feet, a light on my path."},

  {t:"1 Corinthians 15:57–58", intro:"Victory is already given. Your labor in him is never wasted, even the labor of resting well.",
   text:"But thanks be to God! He gives us the victory through our Lord Jesus Christ. Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain."},

  {t:"Psalm 3:5–6", intro:"You lie down and sleep, and wake again, because he sustains you. Ten thousand fears cannot undo that.",
   text:"I lie down and sleep; I wake again, because the Lord sustains me. I will not fear though tens of thousands assail me on every side."},

  {t:"Isaiah 26:12", intro:"Lord, you establish peace for us. All that we've done, you've done for us.",
   text:"Lord, you establish peace for us; all that we have accomplished you have done for us."},

  {t:"Psalm 118:5–6", intro:"When you called, he answered and set you free. The Lord is with you — what can anyone do?",
   text:"When hard pressed, I cried to the Lord; he brought me into a spacious place. The Lord is with me; I will not be afraid. What can mere mortals do to me?"},

  {t:"Hebrews 12:1–2", intro:"Fix your eyes on Jesus tonight. Let the weight you've carried today be laid down.",
   text:"Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith."},

  {t:"Psalm 34:1–3", intro:"Bless the Lord at all times, even at the close of this day.",
   text:"I will extol the Lord at all times; his praise will always be on my lips. I will glory in the Lord; let the afflicted hear and rejoice. Glorify the Lord with me; let us exalt his name together."},

  {t:"John 11:25–26", intro:"I am the resurrection and the life. Rest tonight in the one who holds even death.",
   text:"Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.'"},

  {t:"Psalm 138:3", intro:"When you called, he answered and made you bold. Rest emboldened tonight.",
   text:"When I called, you answered me; you greatly emboldened me."},

  {t:"Isaiah 25:1", intro:"His plans, formed long ago, are faithful and sure. Rest in a plan already settled.",
   text:"Lord, you are my God; I will exalt you and praise your name, for in perfect faithfulness you have done wonderful things, things planned long ago."},

  {t:"Psalm 71:20–21", intro:"He restores life from the depths and increases your honor and comfort. Let that comfort settle in tonight.",
   text:"Though you have made me see troubles, many and bitter, you will restore my life again; from the depths of the earth you will again bring me up. You will increase my honor and comfort me once more."},

  {t:"2 Corinthians 1:3–4", intro:"The God of all comfort, in every trouble. Receive his comfort tonight before you offer it to anyone else.",
   text:"Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God."},

  {t:"Psalm 119:143", intro:"Trouble and distress have come, but his commands are your delight. Let delight outweigh distress tonight.",
   text:"Trouble and distress have come upon me, but your commands give me delight."},

  {t:"Revelation 21:3–4", intro:"He will dwell with us. No more tears, no more pain. Rest in that coming reality tonight.",
   text:"And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and he will dwell with them. They will be his people, and God himself will be with them and be their God. He will wipe every tear from their eyes.'"},

  {t:"Psalm 71:5–6", intro:"You have been my hope since my youth. Rest in a lifelong faithfulness tonight.",
   text:"For you have been my hope, Sovereign Lord, my confidence since my youth. From birth I have relied on you; you brought me forth from my mother's womb. I will ever praise you."},

  {t:"Romans 12:12", intro:"Joyful in hope, patient in affliction, faithful in prayer. Let tonight be an act of all three.",
   text:"Be joyful in hope, patient in affliction, faithful in prayer."},

  {t:"Psalm 40:11", intro:"May your love and faithfulness always protect me. Let them stand guard tonight.",
   text:"Do not withhold your mercy from me, Lord; may your love and faithfulness always protect me."},

  {t:"Isaiah 46:4", intro:"Even to old age, he will carry you. Rest in a love that doesn't tire of you.",
   text:"Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you."},

  {t:"Psalm 4:3", intro:"He has set apart the faithful for himself. He hears when you call. Rest in being heard tonight.",
   text:"Know that the Lord has set apart his faithful servant for himself; the Lord hears when I call to him."},

  {t:"1 Thessalonians 4:16–17", intro:"And so we will be with the Lord forever. Let that eternal certainty be your final thought tonight.",
   text:"For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever."},

  {t:"Psalm 119:49–50", intro:"Remember your word to your servant, for you have given me hope. Let hope be your comfort tonight.",
   text:"Remember your word to your servant, for you have given me hope. My comfort in my suffering is this: Your promise preserves my life."},

  {t:"Ephesians 2:4–5", intro:"Rich in mercy, because of his great love. Even when you were far, he made you alive.",
   text:"But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions — it is by grace you have been saved."},

  {t:"Psalm 62:11–12", intro:"One thing God has spoken, two things have I heard: power belongs to God, and steadfast love.",
   text:"One thing God has spoken, two things I have heard: 'Power belongs to you, God, and with you, Lord, is unfailing love'; and, 'You reward everyone according to what they have done.'"},

  {t:"John 17:24", intro:"Jesus prayed that you would see his glory. Rest tonight, prayed for by name before you existed.",
   text:"Father, I want those you have given me to be with me where I am, and to see my glory, the glory you have given me because you loved me before the creation of the world."},

  {t:"Psalm 91:9–11", intro:"If you make the Most High your dwelling, no harm will overtake you. He will command his angels concerning you.",
   text:"If you say, 'The Lord is my refuge,' and you make the Most High your dwelling, no harm will overtake you, no disaster will come near your tent. For he will command his angels concerning you to guard you in all your ways."},

  {t:"Colossians 3:1–2", intro:"Set your mind on things above. Let your last thoughts tonight rise, not sink.",
   text:"Since, then, you have been raised with Christ, set your hearts on things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things."},

  {t:"Psalm 119:114", intro:"You are my refuge and my shield; I have put my hope in your word. Rest sheltered tonight.",
   text:"You are my refuge and my shield; I have put my hope in your word."},

  {t:"1 Peter 2:24–25", intro:"By his wounds you have been healed. You were going astray, but now you have returned.",
   text:"He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed. For you were like sheep going astray, but now you have returned to the Shepherd and Overseer of your souls."},

  {t:"Psalm 121 (night watch reading)", intro:"He who watches over you neither slumbers nor sleeps. So you can, tonight.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep."},

  {t:"Isaiah 43:2–3", intro:"When you pass through the waters, he is with you. The flame will not consume you tonight.",
   text:"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze. For I am the Lord your God, the Holy One of Israel, your Savior."},

  {t:"Psalm 30:11–12", intro:"He turned mourning into dancing. Let your heart sing to him, even in this quiet hour.",
   text:"You turned my wailing into dancing; you removed my sackcloth and clothed me with joy, that my heart may sing your praises and not be silent. Lord my God, I will praise you forever."},

  {t:"Romans 8:16–17", intro:"The Spirit testifies you are his child. Rest tonight in that inheritance.",
   text:"The Spirit himself testifies with our spirit that we are God's children. Now if we are children, then we are heirs — heirs of God and co-heirs with Christ."},

  {t:"Psalm 119:165 (evening reading)", intro:"Great peace for those who love his word. Nothing will make you stumble tonight.",
   text:"Great peace have those who love your law, and nothing can make them stumble."},

  {t:"Isaiah 41:9–10", intro:"I have chosen you and not rejected you. Do not fear — he is with you tonight.",
   text:"I took you from the ends of the earth, from its farthest corners I called you. I said, 'You are my servant'; I have chosen you and have not rejected you. So do not fear, for I am with you; do not be dismayed, for I am your God."},

  {t:"Psalm 145:14–16", intro:"He upholds all who fall and lifts up all who are bowed down. He satisfies the desires of every living thing.",
   text:"The Lord upholds all who fall and lifts up all who are bowed down. The eyes of all look to you, and you give them their food at the proper time. You open your hand and satisfy the desires of every living thing."},

  {t:"2 Timothy 4:18", intro:"The Lord will rescue you from every evil attack and bring you safely to his kingdom.",
   text:"The Lord will rescue me from every evil attack and will bring me safely to his heavenly kingdom. To him be glory for ever and ever. Amen."},

  {t:"Psalm 66:16–20", intro:"Come and hear what he has done. He has not rejected your prayer or withheld his love.",
   text:"Come and hear, all you who fear God; let me tell you what he has done for me. I cried out to him with my mouth; his praise was on my tongue. Praise be to God, who has not rejected my prayer or withheld his love from me!"},

  {t:"Jeremiah 29:11–13", intro:"Plans to prosper, not to harm. Call on him tonight, and he will hear.",
   text:"'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you hope and a future. Then you will call on me and come and pray to me, and I will listen to you. You will seek me and find me when you seek me with all your heart.'"},

  {t:"Psalm 4:1 (night prayer)", intro:"Answer me when I call. Give relief from distress. Have mercy, and hear this prayer.",
   text:"Answer me when I call to you, my righteous God. Give me relief from my distress; have mercy on me and hear my prayer."},

  {t:"1 John 5:14–15", intro:"This is the confidence we have in approaching him: he hears us.",
   text:"This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us. And if we know that he hears us — whatever we ask — we know that we have what we asked of him."},

  {t:"Psalm 20:1, 4, 7", intro:"May he answer you in the day of trouble. Some trust in chariots, but we trust in the name of the Lord.",
   text:"May the Lord answer you when you are in distress; may the name of the God of Jacob protect you. May he give you the desire of your heart and make all your plans succeed. Some trust in chariots and some in horses, but we trust in the name of the Lord our God."},

  {t:"Isaiah 12:1–2", intro:"In that day you will say: I will trust and not be afraid.",
   text:"In that day you will say: 'I will praise you, Lord. Although you were angry with me, your anger has turned away and you have comforted me. Surely God is my salvation; I will trust and not be afraid.'"},

  {t:"Psalm 143:10", intro:"Teach me to do your will, for you are my God. May your good Spirit lead you on level ground tonight.",
   text:"Teach me to do your will, for you are my God; may your good Spirit lead me on level ground."},

  {t:"Hebrews 11:1, 6", intro:"Faith is confidence in what we hope for, assurance about what we don't see. Rest in that assurance.",
   text:"Now faith is confidence in what we hope for and assurance about what we do not see. And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him."},

  {t:"Psalm 27:4–5", intro:"To dwell in his house, to gaze on his beauty. Let that be your one desire tonight.",
   text:"One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze on the beauty of the Lord and to seek him in his temple. For in the day of trouble he will keep me safe in his dwelling."},

  {t:"Ephesians 6:10–11", intro:"Be strong in the Lord and in his mighty power. Rest protected in his armor tonight.",
   text:"Finally, be strong in the Lord and in his mighty power. Put on the full armor of God, so that you can take your stand against the devil's schemes."},

  {t:"Psalm 121:8 (blessing)", intro:"He watches your coming and going, now and forevermore. Let tonight's rest be included in that forever.",
   text:"The Lord will watch over your coming and going both now and forevermore."},

  {t:"John 14:1–3 (evening reading)", intro:"Let not your heart be troubled. He has gone to prepare a place, and he will come back for you.",
   text:"Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am."},

  {t:"Psalm 40:5", intro:"Many, Lord my God, are the wonders you have done. Your thoughts toward us cannot be counted.",
   text:"Many, Lord my God, are the wonders you have done, the things you planned for us. None can compare with you; were I to speak and tell of your deeds, they would be too many to declare."},

  {t:"Romans 15:4", intro:"Everything written in the past teaches us, so that through endurance and encouragement we might have hope.",
   text:"For everything that was written in the past was written to teach us, so that through the endurance taught in the Scriptures and the encouragement they provide we might have hope."},

  {t:"Psalm 119:76–77", intro:"May your unfailing love comfort you, according to his promise. Let his compassion come tonight.",
   text:"May your unfailing love be my comfort, according to your promise to your servant. Let your compassion come to me that I may live, for your law is my delight."},

  {t:"Isaiah 55:8–9", intro:"His thoughts are not your thoughts. Rest in a wisdom higher than yours tonight.",
   text:"'For my thoughts are not your thoughts, neither are your ways my ways,' declares the Lord. 'As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts.'"},

  {t:"Psalm 34:15, 17–18", intro:"His eyes are on the righteous, his ears attentive to their cry. He is close to the brokenhearted tonight.",
   text:"The eyes of the Lord are on the righteous, and his ears are attentive to their cry. The righteous cry out, and the Lord hears them; he delivers them from all their troubles. The Lord is close to the brokenhearted and saves those who are crushed in spirit."},

  {t:"2 Corinthians 5:17", intro:"If anyone is in Christ, the new creation has come. The old is gone. Rest new tonight.",
   text:"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"},

  {t:"Psalm 105:4", intro:"Look to the Lord and his strength; seek his face always. Let that be tonight's simple aim.",
   text:"Look to the Lord and his strength; seek his face always."},

  {t:"Philippians 1:6", intro:"He who began a good work in you will carry it on to completion. Rest in an unfinished work being faithfully tended.",
   text:"Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus."},

  {t:"Psalm 86:5, 15", intro:"You, Lord, are forgiving and good, abounding in love. Compassionate, gracious, slow to anger.",
   text:"You, Lord, are forgiving and good, abounding in love to all who call to you. But you, Lord, are a compassionate and gracious God, slow to anger, abounding in love and faithfulness."},

  {t:"Matthew 5:4, 6", intro:"Blessed are those who mourn, for they will be comforted. Blessed are those who hunger for righteousness, for they will be filled.",
   text:"Blessed are those who mourn, for they will be comforted. Blessed are those who hunger and thirst for righteousness, for they will be filled."},

  {t:"Psalm 119:28", intro:"My soul is weary with sorrow; strengthen me according to your word. Let strength meet you tonight.",
   text:"My soul is weary with sorrow; strengthen me according to your word."},

  {t:"Psalm 27:14 (evening reading)", intro:"Wait for the Lord. Be strong and take heart, and wait for the Lord.",
   text:"Wait for the Lord; be strong and take heart and wait for the Lord."},

  {t:"Isaiah 40:11", intro:"He tends his flock like a shepherd, gathers the lambs, carries them close to his heart.",
   text:"He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young."},

  {t:"Psalm 62:1 (evening reading)", intro:"For God alone my soul waits in silence. Let silence be tonight's posture.",
   text:"Truly my soul finds rest in God; my salvation comes from him."},

  {t:"Romans 8:38–39 (evening reading)", intro:"Nothing in all creation can separate you from his love. Nothing, tonight or ever.",
   text:"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."},

  {t:"Psalm 46:1 (evening reading)", intro:"God is our refuge and strength, an ever-present help. Rest in his presence tonight.",
   text:"God is our refuge and strength, an ever-present help in trouble."},

  {t:"Isaiah 41:13", intro:"I am the Lord your God who takes hold of your right hand and says, do not fear; I will help you.",
   text:"For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you."},

  {t:"Psalm 5:3", intro:"In the morning you hear my voice; in the morning I lay my requests before you and wait. Rest tonight, ready for morning.",
   text:"In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly."},

  {t:"1 Peter 5:10", intro:"After you have suffered a little while, he will restore, confirm, strengthen, and establish you.",
   text:"And the God of all grace, who called you to his eternal glory in Christ, after you have suffered a little while, will himself restore you and make you strong, firm and steadfast."},

  {t:"Psalm 119:114–116", intro:"You are my refuge and shield. Sustain me according to your promise, and I will live.",
   text:"You are my refuge and my shield; I have put my hope in your word. Away from me, you evildoers, that I may keep the commands of my God! Sustain me, my God, according to your promise, and I will live; do not let my hopes be dashed."},

  {t:"Isaiah 40:1–2", intro:"Comfort, comfort my people, says your God. Let comfort be spoken over you tonight.",
   text:"Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and proclaim to her that her hard service has been completed, that her sin has been paid for."},

  {t:"Psalm 73:23–26", intro:"Yet I am always with you; you hold me by my right hand. My flesh and heart may fail, but God is my portion forever.",
   text:"Yet I am always with you; you hold me by my right hand. You guide me with your counsel, and afterward you will take me into glory. Whom have I in heaven but you? And earth has nothing I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever."},

  {t:"Matthew 6:25–27", intro:"Do not worry about your life. Look at the birds — your heavenly Father feeds them, and you are worth more.",
   text:"Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?"},

  {t:"Psalm 116:15", intro:"Precious in the sight of the Lord is the death of his faithful servants. Rest in how deeply you are valued.",
   text:"Precious in the sight of the Lord is the death of his faithful servants."},

  {t:"Ephesians 5:19–20", intro:"Sing and make music in your heart to the Lord. Give thanks for everything, even tonight's rest.",
   text:"Speak to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord, always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ."},

  {t:"Psalm 40:16–17", intro:"May those who love your salvation always say, the Lord is great. As for me, the Lord thinks of me.",
   text:"But may all who seek you rejoice and be glad in you; may those who long for your saving help always say, 'The Lord is great!' Yet I am poor and needy; may the Lord think of me. You are my help and my deliverer; you are my God, do not delay."},

  {t:"John 10:10–11", intro:"He came that you may have life to the full. The good shepherd lays down his life for the sheep.",
   text:"The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full. I am the good shepherd. The good shepherd lays down his life for the sheep."},

  {t:"Psalm 143:5–6", intro:"I remember the days of long ago; I meditate on all your works. I spread out my hands to you.",
   text:"I remember the days of long ago; I meditate on all your works and consider what your hands have done. I spread out my hands to you; I thirst for you like a parched land."},

  {t:"Isaiah 30:18", intro:"The Lord longs to be gracious to you. He rises to show you compassion. Blessed are all who wait for him.",
   text:"Yet the Lord longs to be gracious to you; therefore he will rise up to show you compassion. For the Lord is a God of justice. Blessed are all who wait for him!"},

  {t:"Psalm 138:8 (evening reading)", intro:"The Lord will fulfill his purpose for you. His love endures forever. Rest in an unfinished, faithful work.",
   text:"The Lord will vindicate me; your love, Lord, endures forever — do not abandon the works of your hands."},

  {t:"Romans 8:31–32", intro:"If God is for us, who can be against us? He who did not spare his own Son will give us all things.",
   text:"What, then, shall we say in response to these things? If God is for us, who can be against us? He who did not spare his own Son, but gave him up for us all — how will he not also, along with him, graciously give us all things?"},

  {t:"Psalm 4:3–4 (evening reading)", intro:"Know that the Lord has set apart the faithful. Tremble, search your heart, and be still.",
   text:"Know that the Lord has set apart his faithful servant for himself; the Lord hears when I call to him. Tremble and do not sin; when you are on your beds, search your hearts and be silent."},

  {t:"1 Corinthians 2:9", intro:"No eye has seen, no ear has heard what God has prepared for those who love him.",
   text:"However, as it is written: 'What no eye has seen, what no ear has heard, and what no human mind has conceived' — the things God has prepared for those who love him."},

  {t:"Psalm 119:35–36", intro:"Direct me in the path of your commands, for there I find delight. Turn my heart toward your statutes.",
   text:"Direct me in the path of your commands, for there I find delight. Turn my heart toward your statutes and not toward selfish gain."},

  {t:"Isaiah 65:24", intro:"Before they call I will answer; while they are still speaking I will hear. Rest tonight, already heard.",
   text:"Before they call I will answer; while they are still speaking I will hear."},

  {t:"Psalm 119:143 (evening reading)", intro:"Trouble and distress have come, but your commands are my delight.",
   text:"Trouble and distress have come upon me, but your commands give me delight."},

  {t:"Hebrews 4:14–16", intro:"We have a great high priest who empathizes with our weakness. Approach the throne of grace with confidence tonight.",
   text:"Therefore, since we have a great high priest who has ascended into heaven, Jesus the Son of God, let us hold firmly to the faith we profess. For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin. Let us then approach God's throne of grace with confidence."},

  {t:"Psalm 91:14–16", intro:"Because he loves me, says the Lord, I will rescue him. He will call on me, and I will answer.",
   text:"'Because he loves me,' says the Lord, 'I will rescue him; I will protect him, for he acknowledges my name. He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him. With long life I will satisfy him and show him my salvation.'"},

  {t:"Psalm 27:10", intro:"Though my father and mother forsake me, the Lord will receive me. Rest, held close tonight.",
   text:"Though my father and mother forsake me, the Lord will receive me."},

  {t:"John 15:11", intro:"I have told you this so that my joy may be in you, and that your joy may be complete. Rest in complete joy tonight.",
   text:"I have told you this so that my joy may be in you and that your joy may be complete."},

  {t:"Psalm 119:165–166 (evening reading)", intro:"Great peace for those who love his law. I wait for your salvation and follow your commands.",
   text:"Great peace have those who love your law, and nothing can make them stumble. I wait for your salvation, Lord, and I follow your commands."},

  {t:"Psalm 34:7", intro:"The angel of the Lord encamps around those who fear him, and he delivers them. Rest guarded tonight.",
   text:"The angel of the Lord encamps around those who fear him, and he delivers them."},

  {t:"Isaiah 61:1–3", intro:"He binds up the brokenhearted and gives beauty for ashes. Let that exchange happen quietly tonight.",
   text:"The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning."},

  {t:"Psalm 121:2–3 (evening reading)", intro:"My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip.",
   text:"My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip — he who watches over you will not slumber."},

  {t:"Romans 15:5–6", intro:"May the God of endurance and encouragement give you a spirit of unity, tonight and always.",
   text:"May the God who gives endurance and encouragement give you the same attitude of mind toward each other that Christ Jesus had, so that with one mind and one voice you may glorify the God and Father of our Lord Jesus Christ."},

  {t:"Psalm 100:3–5", intro:"Know that the Lord is God. It is he who made us, and we are his. Enter his gates with thanksgiving tonight.",
   text:"Know that the Lord is God. It is he who made us, and we are his; we are his people, the sheep of his pasture. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. For the Lord is good and his love endures forever; his faithfulness continues through all generations."},

  {t:"Isaiah 43:4", intro:"You are precious and honored in my sight, and I love you. Rest in being precious tonight.",
   text:"Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life."},

  {t:"Psalm 116:5–7", intro:"The Lord is gracious and righteous; our God is full of compassion. Return to your rest, my soul.",
   text:"The Lord is gracious and righteous; our God is full of compassion. The Lord protects the unwary; when I was brought low, he saved me. Return to your rest, my soul, for the Lord has been good to you."},

  {t:"John 6:35", intro:"I am the bread of life. Whoever comes to me will never go hungry. Rest fed and satisfied tonight.",
   text:"Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.'"},

  {t:"Psalm 46:7", intro:"The Lord Almighty is with us; the God of Jacob is our fortress. Rest in a fortress tonight.",
   text:"The Lord Almighty is with us; the God of Jacob is our fortress."},

  {t:"Isaiah 51:11", intro:"Everlasting joy will crown your head. Gladness will overtake you, and sorrow will flee.",
   text:"Those the Lord has rescued will return. They will enter Zion with singing; everlasting joy will crown their heads. Gladness and joy will overtake them, and sorrow and sighing will flee away."},

  {t:"Psalm 138:1–2", intro:"I will praise you, Lord, with all my heart. I will bow down and give thanks for your unfailing love.",
   text:"I will praise you, Lord, with all my heart; before the gods I will sing your praise. I will bow down toward your holy temple and will praise your name for your unfailing love and your faithfulness."},

  {t:"Romans 5:8", intro:"God demonstrated his love for us: while we were still sinners, Christ died for us. Rest in that love tonight.",
   text:"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."},

  {t:"Psalm 27:8", intro:"My heart says of you, seek his face. Your face, Lord, I will seek — even now, at the end of the day.",
   text:"My heart says of you, 'Seek his face!' Your face, Lord, I will seek."},

  {t:"Isaiah 40:29–31 (evening reading)", intro:"He gives strength to the weary. Those who hope in the Lord renew their strength.",
   text:"He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength. They will soar on wings like eagles."},

  {t:"Psalm 63:3–5", intro:"Because your love is better than life, my lips will glorify you. I will praise you as long as I live.",
   text:"Because your love is better than life, my lips will glorify you. I will praise you as long as I live, and in your name I will lift up my hands. I will be fully satisfied as with the richest of foods; with singing lips my mouth will praise you."},

  {t:"1 John 4:9–10", intro:"This is how God showed his love: he sent his one and only Son so we might live through him.",
   text:"This is how God showed his love among us: He sent his one and only Son into the world that we might live through him. This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins."},

  {t:"Psalm 40:17 (evening reading)", intro:"I am poor and needy, but the Lord thinks of me. You are my help and my deliverer.",
   text:"Yet I am poor and needy; may the Lord think of me. You are my help and my deliverer; you are my God, do not delay."},

  {t:"Isaiah 26:9", intro:"My soul yearns for you in the night; my spirit longs for you. Let this longing draw you into rest.",
   text:"My soul yearns for you in the night; in the morning my spirit longs for you. When your judgments come upon the earth, the people of the world learn righteousness."},

  {t:"Psalm 119:114 (evening reading)", intro:"You are my refuge and my shield; I have put my hope in your word tonight.",
   text:"You are my refuge and my shield; I have put my hope in your word."},

  {t:"Colossians 1:15–17", intro:"In him all things hold together. Rest in a universe that is not spinning out of anyone's control.",
   text:"The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created... He is before all things, and in him all things hold together."},

  {t:"Psalm 46:2–3", intro:"Therefore we will not fear, though the earth give way. Rest even if the ground feels unsteady tonight.",
   text:"Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea, though its waters roar and foam and the mountains quake with their surging."},

  {t:"Isaiah 54:13", intro:"All your children will be taught by the Lord, and great will be their peace. Rest in a peace that's taught, not just felt.",
   text:"All your children will be taught by the Lord, and great will be their peace."},

  {t:"Psalm 143:1", intro:"Hear my prayer, Lord; listen to my cry for mercy. In your faithfulness and righteousness, come to my relief.",
   text:"Hear my prayer, Lord, listen to my cry for mercy; in your faithfulness and righteousness come to my relief."},

  {t:"John 8:12", intro:"I am the light of the world. Whoever follows me will never walk in darkness. Rest in the light tonight.",
   text:"When Jesus spoke again to the people, he said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.'"},

  {t:"Psalm 68:19 (evening reading)", intro:"Praise be to the Lord, who daily bears our burdens. Let him carry today's weight tonight.",
   text:"Praise be to the Lord, to God our Savior, who daily bears our burdens."},

  {t:"Romans 8:26", intro:"The Spirit helps us in our weakness. When we don't know what to pray, he intercedes for us.",
   text:"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans."},

  {t:"Psalm 91:1–2 (evening reading)", intro:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
   text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'"},

  {t:"Isaiah 44:22", intro:"I have swept away your sins like a cloud. Return to me, for I have redeemed you.",
   text:"I have swept away your offenses like a cloud, your sins like the morning mist. Return to me, for I have redeemed you."},

  {t:"Psalm 25:1–2", intro:"To you, Lord, I lift up my soul. In you I trust; do not let me be put to shame.",
   text:"In you, Lord my God, I put my trust. I trust in you; do not let me be put to shame, nor let my enemies triumph over me."},

  {t:"Matthew 14:27", intro:"Take courage — it is I. Don't be afraid. Let his voice quiet the storm around you tonight.",
   text:"But Jesus immediately said to them: 'Take courage! It is I. Don't be afraid.'"},

  {t:"Psalm 34:18 (evening reading)", intro:"The Lord is close to the brokenhearted and saves those who are crushed in spirit. Rest close to him tonight.",
   text:"The Lord is close to the brokenhearted and saves those who are crushed in spirit."},

  {t:"Isaiah 30:21", intro:"Whether you turn to the right or the left, your ears will hear a voice saying, this is the way; walk in it.",
   text:"Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, 'This is the way; walk in it.'"},

  {t:"Psalm 62:2 (evening reading)", intro:"Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
   text:"Truly he is my rock and my salvation; he is my fortress, I will never be shaken."},

  {t:"1 Corinthians 13:13", intro:"And now these three remain: faith, hope, and love. The greatest of these is love. Rest in love tonight.",
   text:"And now these three remain: faith, hope and love. But the greatest of these is love."},

  {t:"Psalm 119:130", intro:"The unfolding of your words gives light; it gives understanding to the simple.",
   text:"The unfolding of your words gives light; it gives understanding to the simple."},

  {t:"Isaiah 33:2", intro:"Lord, be gracious to us; we long for you. Be our strength every morning, our salvation in time of distress.",
   text:"Lord, be gracious to us; we long for you. Be our strength every morning, our salvation in time of distress."},

  {t:"Psalm 5:1–3 (evening reading)", intro:"Give ear to my words, Lord; consider my sighing. Listen to my cry for help, my King and my God.",
   text:"Give ear to my words, Lord, consider my lament. Hear my cry for help, my King and my God, for to you I pray."},

  {t:"John 20:19", intro:"Peace be with you, said Jesus, standing among them. Let that same peace stand with you tonight.",
   text:"On the evening of that first day of the week, when the disciples were together, with the doors locked for fear... Jesus came and stood among them and said, 'Peace be with you!'"},

  {t:"Psalm 121:1–2 (evening reading)", intro:"I lift up my eyes to the mountains — my help comes from the Lord.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth."},

  {t:"Isaiah 49:15–16", intro:"Can a mother forget her nursing child? Even if she could, I will not forget you.",
   text:"Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands."},

  {t:"Psalm 116:1–4 (evening reading)", intro:"I love the Lord, for he heard my voice. The cords of death entangled me, but I called on the name of the Lord.",
   text:"I love the Lord, for he heard my voice; he heard my cry for mercy. Because he turned his ear to me, I will call on him as long as I live. The cords of death entangled me... Then I called on the name of the Lord: 'Lord, save me!'"},

  {t:"Romans 12:2 (evening reading)", intro:"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
   text:"Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is."},

  {t:"Psalm 4:8 (repeated evening blessing)", intro:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
   text:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."},

  {t:"Isaiah 12:2–3", intro:"Surely God is my salvation; I will trust and not be afraid. With joy you will draw water from the wells of salvation.",
   text:"Surely God is my salvation; I will trust and not be afraid. The Lord, the Lord himself, is my strength and my defense; he has become my salvation. With joy you will draw water from the wells of salvation."},

  {t:"Psalm 138:7 (evening reading)", intro:"Though I walk in the midst of trouble, you preserve my life. Rest preserved tonight.",
   text:"Though I walk in the midst of trouble, you preserve my life. You stretch out your hand against the anger of my foes; with your right hand you save me."},

  {t:"Ephesians 3:16–19", intro:"Strengthened with power through his Spirit, rooted and established in love, filled with the fullness of God.",
   text:"I pray that out of his glorious riches he may strengthen you with power through his Spirit in your inner being, so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love, may have power to grasp how wide and long and high and deep is the love of Christ."},

  {t:"Psalm 91:4–5 (evening reading)", intro:"He will cover you with his feathers, and under his wings you will find refuge. You will not fear the terror of night.",
   text:"He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart. You will not fear the terror of night, nor the arrow that flies by day."},

  {t:"Isaiah 26:3 (repeated evening blessing)", intro:"You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
   text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you."},

  {t:"Psalm 33:18–19", intro:"The eyes of the Lord are on those who fear him, on those whose hope is in his unfailing love.",
   text:"But the eyes of the Lord are on those who fear him, on those whose hope is in his unfailing love, to deliver them from death and keep them alive in famine."},

  {t:"Matthew 28:20 (evening reading)", intro:"And surely I am with you always, to the very end of the age. Rest in a promise that never expires.",
   text:"And surely I am with you always, to the very end of the age."},

  {t:"Psalm 130:5–6", intro:"I wait for the Lord, my whole being waits, and in his word I put my hope. My soul waits, more than watchmen wait for the morning.",
   text:"I wait for the Lord, my whole being waits, and in his word I put my hope. I wait for the Lord more than watchmen wait for the morning, more than watchmen wait for the morning."},

  {t:"Isaiah 42:3", intro:"A bruised reed he will not break, and a smoldering wick he will not snuff out. Rest gently held tonight.",
   text:"A bruised reed he will not break, and a smoldering wick he will not snuff out; in faithfulness he will bring forth justice."},

  {t:"Psalm 119:76 (evening reading)", intro:"May your unfailing love be my comfort, according to your promise to your servant.",
   text:"May your unfailing love be my comfort, according to your promise to your servant."},

  {t:"John 16:24", intro:"Ask and you will receive, and your joy will be complete. Ask tonight, and rest in what he gives.",
   text:"Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete."},

  {t:"Psalm 71:14–16", intro:"As for me, I will always have hope; I will praise you more and more. I will proclaim your righteousness.",
   text:"As for me, I will always have hope; I will praise you more and more. My mouth will tell of your righteous deeds, of your saving acts all day long."},

  {t:"Isaiah 43:5", intro:"Do not be afraid, for I am with you. Let his nearness cover every fear tonight.",
   text:"Do not be afraid, for I am with you; I will bring your children from the east and gather you from the west."},

  {t:"Psalm 145:8–9", intro:"The Lord is gracious and compassionate, slow to anger and rich in love. He has compassion on all he has made.",
   text:"The Lord is gracious and compassionate, slow to anger and rich in love. The Lord is good to all; he has compassion on all he has made."},

  {t:"1 Peter 1:8–9", intro:"Though you have not seen him, you love him. You are filled with an inexpressible and glorious joy.",
   text:"Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy, for you are receiving the end result of your faith, the salvation of your souls."},

  {t:"Psalm 20:6–7 (evening reading)", intro:"Now I know that the Lord saves his anointed. We trust in the name of the Lord our God.",
   text:"Now this I know: The Lord gives victory to his anointed. He answers him from his heavenly sanctuary with the victorious power of his right hand. Some trust in chariots and some in horses, but we trust in the name of the Lord our God."},

  {t:"Psalm 27:1 (evening reading)", intro:"The Lord is my light and my salvation — whom shall I fear? Rest fearless tonight.",
   text:"The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?"},

  {t:"Isaiah 40:8", intro:"The grass withers and the flowers fall, but the word of our God stands forever. Rest on something that doesn't fade.",
   text:"The grass withers and the flowers fall, but the word of our God endures forever."},

  {t:"Psalm 34:19", intro:"The righteous person may have many troubles, but the Lord delivers him from them all.",
   text:"The righteous person may have many troubles, but the Lord delivers him from them all."},

  {t:"John 15:13", intro:"Greater love has no one than this: to lay down one's life for one's friends. Rest in that love tonight.",
   text:"Greater love has no one than this: to lay down one's life for one's friends."},

  {t:"Psalm 62:6 (evening reading)", intro:"Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
   text:"Truly he is my rock and my salvation; he is my fortress, I will not be shaken."},

  {t:"Isaiah 55:6–7", intro:"Seek the Lord while he may be found; call on him while he is near. Let mercy meet you tonight.",
   text:"Seek the Lord while he may be found; call on him while he is near. Let the wicked forsake their ways and the unrighteous their thoughts. Let them turn to the Lord, and he will have mercy on them, and to our God, for he will freely pardon."},

  {t:"Psalm 145:18 (evening reading)", intro:"The Lord is near to all who call on him, to all who call on him in truth.",
   text:"The Lord is near to all who call on him, to all who call on him in truth."},

  {t:"Romans 8:18", intro:"Our present sufferings are not worth comparing with the glory that will be revealed. Rest in what's coming.",
   text:"I consider that our present sufferings are not worth comparing with the glory that will be revealed in us."},

  {t:"Psalm 116:16–17", intro:"Truly I am your servant; you have freed me from my chains. I will offer a sacrifice of thanksgiving.",
   text:"Truly I am your servant, Lord; I serve you just as my mother did; you have freed me from my chains. I will sacrifice a thank offering to you and call on the name of the Lord."},

  {t:"Isaiah 41:17", intro:"When the poor and needy seek water, and there is none, I the Lord will answer them.",
   text:"'The poor and needy search for water, but there is none; their tongues are parched with thirst. But I the Lord will answer them; I, the God of Israel, will not forsake them.'"},

  {t:"Psalm 4:8 (third evening reading)", intro:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
   text:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."},

  {t:"Philippians 4:19 (evening reading)", intro:"My God will meet all your needs according to the riches of his glory. Rest fully provided for tonight.",
   text:"And my God will meet all your needs according to the riches of his glory in Christ Jesus."},

  {t:"Psalm 91:15–16 (evening reading)", intro:"He will call on me, and I will answer him. I will be with him in trouble.",
   text:"'He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.'"},

  {t:"Isaiah 26:19", intro:"Your dead will live; their bodies will rise. Wake up and shout for joy, for your dew is like the morning dew.",
   text:"But your dead will live, Lord; their bodies will rise — let those who dwell in the dust wake up and shout for joy."},

  {t:"Psalm 34:8 (evening reading)", intro:"Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
   text:"Taste and see that the Lord is good; blessed is the one who takes refuge in him."},

  {t:"2 Corinthians 3:17–18", intro:"Where the Spirit of the Lord is, there is freedom. Rest transformed, from glory to glory, tonight.",
   text:"Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom. And we all... are being transformed into his image with ever-increasing glory."},

  {t:"Psalm 71:20–21 (evening reading)", intro:"You will restore my life again. You will increase my honor and comfort me once more.",
   text:"Though you have made me see troubles, many and bitter, you will restore my life again; from the depths of the earth you will again bring me up."},

  {t:"Isaiah 30:15 (evening reading)", intro:"In returning and rest you shall be saved. In quietness and trust is your strength.",
   text:"This is what the Sovereign Lord, the Holy One of Israel, says: 'In repentance and rest is your salvation, in quietness and trust is your strength.'"},

  {t:"Psalm 42:11", intro:"Why, my soul, are you downcast? Put your hope in God, for I will yet praise him, my Savior and my God.",
   text:"Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God."},

  {t:"John 14:27 (evening reading)", intro:"Peace I leave with you; my peace I give you. Do not let your heart be troubled.",
   text:"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid."},

  {t:"Psalm 121 (final blessing reading)", intro:"He who keeps you does not slumber. Let this last reading of the day settle you into rest.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth. He will not let your foot slip — he who watches over you will not slumber."},

  {t:"Isaiah 43:19 (evening reading)", intro:"See, I am doing a new thing! Now it springs up; do you not perceive it?",
   text:"'See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.'"},

  {t:"Psalm 138:8 (repeated evening blessing)", intro:"The Lord will fulfill his purpose for you; his love endures forever.",
   text:"The Lord will fulfill his purpose for me; your love, Lord, endures forever — do not abandon the works of your hands."},

  {t:"Romans 8:1 (evening reading)", intro:"There is now no condemnation for those who are in Christ Jesus. Sleep free of it tonight.",
   text:"Therefore, there is now no condemnation for those who are in Christ Jesus."},

  {t:"Psalm 27:5 (evening reading)", intro:"In the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent.",
   text:"For in the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent and set me high upon a rock."},

  {t:"Isaiah 54:17", intro:"No weapon forged against you will prevail. This is your heritage as a servant of the Lord.",
   text:"'No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord.'"},

  {t:"Psalm 62:5 (evening reading)", intro:"Yes, my soul, find rest in God; my hope comes from him.",
   text:"Yes, my soul, find rest in God; my hope comes from him."},

  {t:"1 John 3:19–20", intro:"This is how we know that we belong to the truth: whenever our hearts condemn us, God is greater than our hearts.",
   text:"This is how we know that we belong to the truth and how we set our hearts at rest in his presence: If our hearts condemn us, we know that God is greater than our hearts, and he knows everything."},

  {t:"Psalm 145:16 (evening reading)", intro:"You open your hand and satisfy the desires of every living thing. Rest satisfied tonight.",
   text:"You open your hand and satisfy the desires of every living thing."},

  {t:"Psalm 118:24 (evening reading)", intro:"This is the day the Lord has made; let us rejoice and be glad in it, even as it ends.",
   text:"This is the day the Lord has made; let us rejoice and be glad in it."},

  {t:"Isaiah 40:11 (evening reading)", intro:"He gently leads those that have young. Rest gently led tonight.",
   text:"He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young."},

  {t:"Psalm 5:11 (evening reading)", intro:"Let all who take refuge in you be glad; let them ever sing for joy.",
   text:"But let all who take refuge in you be glad; let them ever sing for joy. Spread your protection over them, that those who love your name may rejoice in you."},

  {t:"Hebrews 13:20–21", intro:"May the God of peace equip you with everything good for doing his will. Rest equipped tonight.",
   text:"May the God of peace, who through the blood of the eternal covenant brought back from the dead our Lord Jesus, that great Shepherd of the sheep, equip you with everything good for doing his will."},

  {t:"Psalm 63:6 (evening reading)", intro:"On my bed I remember you; I think of you through the watches of the night.",
   text:"On my bed I remember you; I think of you through the watches of the night."},

  {t:"Isaiah 32:17–18 (evening reading)", intro:"The fruit of righteousness is peace; its effect, quietness and confidence forever.",
   text:"The fruit of that righteousness will be peace; its effect will be quietness and confidence forever."},

  {t:"Psalm 3:5 (repeated evening blessing)", intro:"I lie down and sleep; I wake again, because the Lord sustains me.",
   text:"I lie down and sleep; I wake again, because the Lord sustains me."},

  {t:"John 14:27 (final evening reading)", intro:"Do not let your heart be troubled. His peace is not like the world's — receive it tonight.",
   text:"Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid."},

  {t:"Psalm 46:10 (final evening reading)", intro:"Be still, and know that I am God. Let stillness be the last posture of your day.",
   text:"He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'"},

  {t:"Romans 15:33", intro:"May the God of peace be with you all. Amen. Let that simple blessing close your day.",
   text:"May the God of peace be with you all. Amen."},

  {t:"Psalm 29:11 (evening reading)", intro:"The Lord gives strength to his people; the Lord blesses his people with peace.",
   text:"The Lord gives strength to his people; the Lord blesses his people with peace."},

  {t:"Isaiah 9:6", intro:"Prince of Peace — one of his names. Rest under a peace that has a name and a face.",
   text:"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."},

  {t:"Psalm 4:8 (final evening blessing)", intro:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
   text:"In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."},

  {t:"Numbers 6:24–26 (evening reading)", intro:"The Lord bless you and keep you. The oldest blessing, spoken over you tonight.",
   text:"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace."},

  {t:"Psalm 91 (full night reading)", intro:"A complete shelter for the whole night. Read it slowly, and let each promise land.",
   text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.' Surely he will save you from the fowler's snare and from the deadly pestilence. He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart. You will not fear the terror of night, nor the arrow that flies by day."},

  {t:"1 Thessalonians 5:23–24", intro:"May God himself sanctify you through and through. He who calls you is faithful, and he will do it.",
   text:"May God himself, the God of peace, sanctify you through and through. May your whole spirit, soul and body be kept blameless. He who calls you is faithful, and he will do it."},

  {t:"Psalm 143:8 (evening reading)", intro:"Let the morning bring word of your unfailing love, for I have put my trust in you.",
   text:"Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life."},

  {t:"Isaiah 26:3–4 (final evening reading)", intro:"You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
   text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you. Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal."},

  {t:"Psalm 121 (last blessing of the night)", intro:"The Lord will watch over your coming and going, both now and forevermore. Sleep well, held by him.",
   text:"The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore."},

  {t:"Jude 1:24–25 (final evening reading)", intro:"To him who is able to keep you — the last word of tonight belongs to him.",
   text:"To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy — to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen."},

  {t:"Psalm 34:1 (evening reading)", intro:"I will extol the Lord at all times; his praise will always be on my lips, even at the close of day.",
   text:"I will extol the Lord at all times; his praise will always be on my lips."},

  {t:"Isaiah 40:31 (final evening reading)", intro:"Those who hope in the Lord will renew their strength. Rest, and let hope do its quiet work overnight.",
   text:"But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."},

  {t:"Psalm 27 (full evening reading)", intro:"The Lord is my light and my salvation. Read the whole psalm slowly, and let fear lose its grip.",
   text:"The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid? For in the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent and set me high upon a rock."},

  {t:"2 Corinthians 4:6", intro:"For God, who said, let light shine out of darkness, made his light shine in our hearts.",
   text:"For God, who said, 'Let light shine out of darkness,' made his light shine in our hearts to give us the light of the knowledge of God's glory displayed in the face of Christ."},

  {t:"Psalm 138 (full evening reading)", intro:"I will praise you, Lord, with all my heart. Even in trouble, you preserve my life.",
   text:"I will praise you, Lord, with all my heart; before the gods I will sing your praise. Though I walk in the midst of trouble, you preserve my life. The Lord will fulfill his purpose for me; your love, Lord, endures forever."},

  {t:"Isaiah 43:1–3 (final evening reading)", intro:"Do not fear, for I have redeemed you; I have called you by name; you are mine.",
   text:"Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you."},

  {t:"Psalm 62 (full evening reading)", intro:"For God alone my soul waits in silence. Let the whole psalm carry you into rest tonight.",
   text:"For God alone my soul waits in silence; from him comes my salvation. Truly he is my rock and my salvation; he is my fortress, I will never be shaken. Trust in him at all times, you people; pour out your hearts to him, for God is our refuge."},

  {t:"Romans 8 (closing reading)", intro:"Nothing can separate you from his love. Let this be the truest thing you carry into sleep.",
   text:"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."},

  {t:"Psalm 4 (full evening reading)", intro:"Answer me when I call. In peace I will lie down and sleep, for you alone make me dwell in safety.",
   text:"Answer me when I call to you, my righteous God. Give me relief from my distress; have mercy on me and hear my prayer. In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety."},

  {t:"John 14 (closing evening reading)", intro:"Let not your heart be troubled. He has gone to prepare a place, and he will come again.",
   text:"Do not let your hearts be troubled. You believe in God; believe also in me. My Father's house has many rooms. I am going there to prepare a place for you. And I will come back and take you to be with me."},

  {t:"Psalm 23 (final night reading)", intro:"The shepherd's psalm, once more, to close the day the way it began.",
   text:"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. Even though I walk through the darkest valley, I will fear no evil, for you are with me."},

  {t:"Philippians 4 (closing evening reading)", intro:"Do not be anxious about anything. The peace that transcends understanding will guard your heart tonight.",
   text:"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."},

  {t:"Psalm 121 (closing night blessing)", intro:"The final blessing of the night: he neither slumbers nor sleeps, so you may do both in peace.",
   text:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth. He who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep."},

  {t:"Revelation 22:20–21", intro:"He who testifies to these things says, yes, I am coming soon. The grace of the Lord Jesus be with you all.",
   text:"He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus. The grace of the Lord Jesus be with God's people. Amen."},

  {t:"Psalm 150 (closing praise)", intro:"Let everything that has breath praise the Lord. Let that be true of you, even now, even tired.",
   text:"Praise the Lord. Praise God in his sanctuary; praise him in his mighty heavens. Praise him for his acts of power; praise him for his surpassing greatness. Let everything that has breath praise the Lord. Praise the Lord."},

  {t:"Numbers 6:24–26 (final night blessing)", intro:"The Lord bless you and keep you, tonight and always. Amen.",
   text:"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace."},

  {t:"Psalm 16 (evening reading)", intro:"Keep me safe, my God, for in you I take refuge. You make known to me the path of life.",
   text:"Keep me safe, my God, for in you I take refuge. I said to the Lord, 'You are my Lord; apart from you I have no good thing.' You make known to me the path of life; you will fill me with joy in your presence."},

  {t:"Isaiah 41 (evening reading)", intro:"Do not fear, for I am with you. I will strengthen you and help you.",
   text:"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."},

  {t:"Psalm 84 (evening reading)", intro:"How lovely is your dwelling place. My soul yearns, even faints, for the courts of the Lord.",
   text:"How lovely is your dwelling place, Lord Almighty! My soul yearns, even faints, for the courts of the Lord; my heart and my flesh cry out for the living God."},

  {t:"1 Peter 5 (closing evening reading)", intro:"Cast all your anxiety on him, because he cares for you. Rest, cared for tonight.",
   text:"Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you."},

  {t:"Psalm 103 (evening reading)", intro:"Bless the Lord, my soul, and forget not all his benefits — his forgiveness, healing, and love.",
   text:"Praise the Lord, my soul, and forget not all his benefits — who forgives all your sins and heals all your diseases, who redeems your life from the pit and crowns you with love and compassion."},

  {t:"Isaiah 55 (evening reading)", intro:"Come, all you who are thirsty, come to the waters. Seek the Lord while he may be found.",
   text:"'Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat! Seek the Lord while he may be found; call on him while he is near.'"},

  {t:"Psalm 139 (evening reading)", intro:"You have searched me and known me. Even the darkness is not dark to you.",
   text:"You have searched me, Lord, and you know me. You know when I sit and when I rise. Even the darkness will not be dark to you; the night will shine like the day, for darkness is as light to you."},

  {t:"Hebrews 4 (evening reading)", intro:"There remains a Sabbath rest for God's people. Let us approach the throne of grace with confidence.",
   text:"There remains, then, a Sabbath-rest for the people of God. Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need."},

  {t:"Psalm 118 (evening reading)", intro:"This is the day the Lord has made. His love endures forever, even into tonight.",
   text:"Give thanks to the Lord, for he is good; his love endures forever. This is the day the Lord has made; let us rejoice and be glad in it."},

  {t:"John 10 (evening reading)", intro:"I am the good shepherd. My sheep listen to my voice, and no one can snatch them from my hand.",
   text:"I am the good shepherd. My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand."},

  {t:"Psalm 63 (full evening reading)", intro:"O God, you are my God, earnestly I seek you. On my bed I remember you through the watches of the night.",
   text:"You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you. On my bed I remember you; I think of you through the watches of the night. Because you are my help, I sing in the shadow of your wings."},

  {t:"Romans 15 (evening reading)", intro:"May the God of hope fill you with joy and peace as you trust in him, so you overflow with hope.",
   text:"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit."},

  {t:"Psalm 71 (evening reading)", intro:"In you, Lord, I have taken refuge. Be my rock of refuge, to which I can always go.",
   text:"In you, Lord, I have taken refuge; let me never be put to shame. Be my rock of refuge, to which I can always go; give the command to save me, for you are my rock and my fortress."},

  {t:"Zephaniah 3 (final evening reading)", intro:"The Lord your God is with you. He will rejoice over you with singing. Fall asleep to that sound.",
   text:"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing."},

  {t:"Psalm 46 (full evening reading)", intro:"God is our refuge and strength. Be still, and know that he is God, even as this day ends.",
   text:"God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way. Be still, and know that I am God; I will be exalted among the nations."},

  {t:"Psalm 100 (evening reading)", intro:"Know that the Lord is God. Enter his gates with thanksgiving, even at the close of today.",
   text:"Know that the Lord is God. It is he who made us, and we are his. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name."},

  {t:"Isaiah 26 (full evening reading)", intro:"You will keep in perfect peace those whose minds are steadfast. Trust in the Lord forever.",
   text:"You will keep in perfect peace those whose minds are steadfast, because they trust in you. Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal."},

  {t:"Psalm 33 (evening reading)", intro:"We wait in hope for the Lord; he is our help and our shield. May your unfailing love be with us tonight.",
   text:"We wait in hope for the Lord; he is our help and our shield. In him our hearts rejoice, for we trust in his holy name. May your unfailing love be with us, Lord, even as we put our hope in you."},

  {t:"1 Corinthians 13 (evening reading)", intro:"Love is patient, love is kind. It bears all things, hopes all things, endures all things. Rest loved tonight.",
   text:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. Love bears all things, believes all things, hopes all things, endures all things. Love never fails."},

  {t:"Psalm 25 (evening reading)", intro:"To you, Lord, I lift up my soul. Show me your ways; guide me in your truth.",
   text:"In you, Lord my God, I put my trust. Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me, for you are God my Savior, and my hope is in you all day long."},

  {t:"Lamentations 3 (evening reading)", intro:"His mercies are new every morning; great is his faithfulness. Wait quietly for his goodness tonight.",
   text:"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. The Lord is good to those whose hope is in him, to the one who seeks him."},

  {t:"Psalm 34 (full evening reading)", intro:"I sought the Lord, and he answered me; he delivered me from all my fears. Taste and see that he is good.",
   text:"I sought the Lord, and he answered me; he delivered me from all my fears. Those who look to him are radiant; their faces are never covered with shame. Taste and see that the Lord is good; blessed is the one who takes refuge in him."},

  {t:"John 15 (evening reading)", intro:"Remain in me, as I remain in you. I have told you this so that my joy may be in you.",
   text:"Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. I have told you this so that my joy may be in you and that your joy may be complete."},

  {t:"Psalm 40 (evening reading)", intro:"I waited patiently for the Lord; he heard my cry, and put a new song in my mouth.",
   text:"I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand. He put a new song in my mouth."},

  {t:"Ephesians 3 (evening reading)", intro:"Rooted and established in love, may you grasp how wide and deep the love of Christ is, tonight and always.",
   text:"I pray that you, being rooted and established in love, may have power, together with all the Lord's holy people, to grasp how wide and long and high and deep is the love of Christ."},

  {t:"Psalm 119 (evening reading)", intro:"Your word is a lamp for my feet, a light on my path. Great peace for those who love it.",
   text:"Your word is a lamp for my feet, a light on my path. Great peace have those who love your law, and nothing can make them stumble."},

  {t:"Isaiah 66 (evening reading)", intro:"As a mother comforts her child, so will I comfort you, says the Lord. Rest comforted tonight.",
   text:"'As a mother comforts her child, so will I comfort you; and you will be comforted over Jerusalem.'"},

  {t:"Psalm 30 (evening reading)", intro:"Weeping may stay for the night, but rejoicing comes in the morning. Rest, waiting for that morning.",
   text:"For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning. You turned my wailing into dancing."},

  {t:"2 Timothy 1 (evening reading)", intro:"God has not given us a spirit of fear, but of power, love, and a sound mind. Rest in that gift tonight.",
   text:"For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him."},

  {t:"Psalm 121 (very last blessing)", intro:"The final word for tonight: he who watches over you will neither slumber nor sleep. Rest now, fully kept.",
   text:"The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore."},
];

// ── PILLAR SKILLS — shown when user's character matches ─────────────────────
const PILLAR_SKILLS = {

// ── BEAVER — Stewardship & generosity ──
beaver:[
 {e:"🙏",t:"Start tithing — even 2%",why:"The tithe is not a tax; it's a training. Starting small and increasing is better than waiting until you can give 10% perfectly.",steps:["Calculate 10% of your income — write the actual number down","If that's not possible now, choose a percentage you can start with today","Set up an automatic transfer to your church or a faith cause on payday"]},
 {e:"💛",t:"Give something away this week",why:"Generosity breaks the grip of money. Every deliberate act of giving reorders what sits on the throne of your finances.",steps:["Identify one thing you can give: money, a possession, your time","Give it this week — not when it's convenient, but as a discipline","Don't announce it. Notice what it does to you internally."]},
 {e:"📖",t:"Read what Jesus says about money",why:"Jesus talked about money more than almost any other subject. Most Christians don't know what he actually said.",steps:["Read Luke 12:13–34 — the parable of the rich fool and the teaching that follows","Write down one line that challenges you most","Bring that challenge to God in prayer before doing anything else"]},
 {e:"💰",t:"Build an emergency fund — as an act of wisdom, not fear",why:"Proverbs 21:20: 'The wise store up choice food and olive oil, but fools gulp theirs down.' Saving is stewardship, not selfishness.",steps:["Open a separate savings account if you don't have one","Set a first goal: one month of essential expenses","Automate a small transfer every payday — even $20 starts the habit"]},
 {e:"📊",t:"Create a budget that includes giving first",why:"A budget built on kingdom priorities looks different from a standard budget. Giving comes before spending — not from what's left over.",steps:["List income and all fixed expenses","Put giving at the top before discretionary spending","Adjust other categories to make it work — not the giving"]},
 {e:"🫶",t:"Sponsor a child or fund a specific cause",why:"Giving with a face changes giving. When you know who the money reaches, it shifts from transaction to relationship.",steps:["Research one organisation aligned with your values (Compassion, World Vision, local food bank)","Choose an amount you can sustain monthly","Set it up today — recurring is more valuable than one-off"]},
 {e:"🔄",t:"Practise contentment for one week",why:"1 Timothy 6:6: 'Godliness with contentment is great gain.' Contentment is not passivity — it's a discipline of satisfied trust.",steps:["For one week, buy nothing non-essential","Notice every moment you reach for something to fill a gap","At the end of the week, write what you noticed about yourself"]},
],

// ── WOLF — Body as temple ──
wolf:[
 {e:"🙏",t:"Make your morning routine an act of worship",why:"The body is God's temple (1 Corinthians 6:19). What you do first in the morning sets the spiritual temperature of the day.",steps:["Before checking your phone tomorrow morning, spend 5 minutes in prayer or Scripture","Include your physical routine (shower, breakfast) in your morning offering to God","Offer your body and day explicitly: 'Lord, this body is yours today'"]},
 {e:"🚶",t:"Go on a prayer walk today",why:"Movement and prayer were natural partners in Scripture. Jesus walked and talked with his disciples. Walking changes the quality of thought and prayer.",steps:["Plan a 20-minute route near your home","Leave the earphones behind — just walk and talk to God","Pray for what you see: people, buildings, the community around you"]},
 {e:"😴",t:"Protect sleep as a spiritual discipline",why:"God 'grants sleep to those he loves' (Psalm 127:2). Sleep is not laziness — it's trust that God runs the world without your constant effort.",steps:["Set a consistent bedtime for this week — even on weekends","Dim screens an hour before bed and spend that time in quiet","Notice whether better sleep changes your prayer and patience"]},
 {e:"🥗",t:"Fast from one food for one week and track what changes",why:"Fasting is not only about full-day fasts. Removing something you rely on for comfort reveals what you've been using in God's place.",steps:["Choose one comfort food or drink you reach for habitually","Give it up for seven days","Every time you reach for it, pray instead. Notice what you were actually hungry for."]},
 {e:"🌿",t:"Spend 20 minutes in nature today",why:"'The heavens declare the glory of God' (Psalm 19:1). Creation is a form of revelation — being in it is a spiritual act.",steps:["Step outside with no earphones and no agenda","Look for one thing in creation that shows you something about God","Thank God for that one thing specifically when you come back inside"]},
 {e:"💪",t:"Exercise for gratitude, not guilt",why:"Shame-based exercise doesn't last. But 'I get to use this body God gave me' is a sustainable foundation.",steps:["Before your next workout, say out loud: 'This is an act of gratitude'","Do something physical today — walk, stretch, lift, swim","After finishing, take one minute to thank God for what your body can do"]},
 {e:"🌙",t:"End the day with the Examen",why:"The Daily Examen (a Jesuit practice) is a simple review of the day in God's presence — where was he? Where did you miss him? It integrates faith and body into one honest daily review.",steps:["Before sleep, lie quietly and review the day in God's presence","Where did you feel most alive? Where did you feel most drained?","Name one gratitude and one thing you'd do differently — then rest"]},
],

// ── CAT — Prayer & contemplation ──
cat:[
 {e:"🕯️",t:"Try lectio divina this week",why:"Lectio divina (divine reading) is an ancient practice of slow, prayerful Scripture reading. It treats the text not as information to extract but as a word to encounter.",steps:["Choose a short passage — 4–8 verses","Read it slowly four times: for the whole, for a word, for a message, in response","Sit in silence for 5 minutes after the fourth reading. Let God speak."]},
 {e:"🌅",t:"Build a morning prayer practice",why:"The Psalmist prays 'in the morning' repeatedly (Psalm 5:3, 88:13, 143:8). Morning prayer sets the orientation of the whole day.",steps:["Choose a time — 5 minutes earlier than you currently wake","Pray using a simple structure: gratitude → confession → request → silence","Do it for 21 days and see how the practice becomes a need"]},
 {e:"📓",t:"Start a prayer journal",why:"Writing to God changes the quality of prayer. It slows you down, forces honesty, and creates a record of what you asked for and what happened.",steps:["Get a simple notebook — nothing fancy","Date each entry and write as if writing a letter to someone who is actually there","Review old entries quarterly. You'll be surprised what you see."]},
 {e:"🙏",t:"Practise the Lord's Prayer as a framework",why:"Jesus gave this prayer not as words to recite but as a structure to use. Each petition can hold an entire area of prayer.",steps:["Pray through Matthew 6:9–13 one line at a time, pausing at each line","Let each line open a category: praise, surrender, provision, forgiveness, protection","Use it as a scaffold, not a script — it should expand, not limit"]},
 {e:"🤫",t:"Practice 10 minutes of silence before God daily",why:"Psalm 46:10: 'Be still, and know that I am God.' Contemplative traditions teach that most of us need to practise silence before we can truly hear.",steps:["Set a timer for 10 minutes","Sit comfortably and bring your attention back to God each time it wanders — without judgement","Don't try to feel anything. Just stay."]},
 {e:"🧘",t:"Learn the breath prayer",why:"The Eastern Orthodox 'Jesus Prayer' — Lord Jesus Christ, Son of God, have mercy on me — is prayed on the breath. It can be carried through the whole day.",steps:["Inhale: 'Lord Jesus Christ, Son of God'","Exhale: 'have mercy on me, a sinner'","Practise for 5 minutes in a quiet place. Then carry it into your day."]},
 {e:"🌙",t:"End the day with evening prayer",why:"Compline — the ancient evening prayer — is a practice of ending the day with surrender. 'Into your hands I commit my spirit' (Psalm 31:5) was Jesus's last sentence before he died.",steps:["Before sleep, read Psalm 4 or 91 aloud","Name what happened today — good and hard — and give it back to God","Lie down and say: 'Into your hands I commit this night.' Then sleep."]},
],

// ── LION — Courage & boldness in faith ──
lion:[
 {e:"🦁",t:"Share your faith with one person this week",why:"'Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have' (1 Peter 3:15). You don't need a script — just your story.",steps:["Think of one person who doesn't know you're a believer","Find a natural moment this week — not a confrontation, just a conversation","Tell them what your faith means to you, simply and honestly. Then listen."]},
 {e:"⚡",t:"Pray for something specific and big",why:"James 4:2: 'You do not have because you do not ask God.' Many Christians' prayers are too safe. Ask for something large enough that only God could do it.",steps:["Name one thing that feels too big to ask for","Write it down as a specific, dated prayer request","Ask God for it directly and boldly — then watch the date"]},
 {e:"🛡️",t:"Identify one spiritual battle you're facing and fight it",why:"Ephesians 6 describes spiritual warfare with real armour for a real battle. Passivity is not an option — but neither is panic. Know what you're fighting.",steps:["Name one area where you sense spiritual opposition (temptation, discouragement, doubt)","Find a specific promise in Scripture that speaks to it","Pray that promise out loud, daily, for two weeks. This is fighting."]},
 {e:"🔥",t:"Say yes to one scary act of obedience",why:"Courage in faith is not the absence of fear — it's obedience in the presence of fear. God regularly asked people to do things that terrified them.",steps:["Identify one thing you sense God has been nudging you toward","Name what specifically makes you afraid to do it","Take the first step this week — just the first one. The next will follow."]},
 {e:"🗣️",t:"Speak up for justice in one specific situation",why:"Proverbs 31:8: 'Speak up for those who cannot speak for themselves.' Christian courage is not only personal — it's public.",steps:["Identify one person or group who is being treated unjustly in your sphere","Name one action available to you: a word, a choice, a letter, a vote","Take that action. Document it. Pray over it."]},
 {e:"✝️",t:"Stand firm in a moment of peer pressure",why:"Daniel refused the king's food. Shadrach refused the bow. Ruth refused to leave Naomi. The Bible is full of people who said no to pressure and yes to faithfulness.",steps:["Name one area where you've been quietly going along with something that contradicts your faith","Decide in advance what you'll do the next time it comes up","Practise the phrase: 'That's not something I do, but I respect your choice.'"]},
 {e:"🙌",t:"Volunteer for something that intimidates you at church",why:"God uses people who say yes before they feel ready. Gideon felt the least qualified. Moses had a stammer. God chose them anyway.",steps:["Find one opening in your church that you've thought about but avoided","Sign up this week — tell someone so you're accountable","Show up prepared and trust that God works through willingness, not perfection"]},
],

// ── EAGLE — Kingdom leadership ──
eagle:[
 {e:"👑",t:"Lead a devotion or discussion for your group",why:"Teaching others is the fastest way to deepen your own understanding. You don't need to be a pastor — you need to have prepared and be willing.",steps:["Choose a short passage — one paragraph or story from the Gospels","Prepare three questions to ask, not three points to make","Lead the conversation. Listen as much as you speak."]},
 {e:"🌱",t:"Mentor one person in faith",why:"Paul mentored Timothy. Barnabas mentored Paul. Jesus mentored twelve. No faith grows without someone investing in it.",steps:["Identify one person who is younger in faith than you","Ask if they'd be willing to meet monthly to talk about faith","Come prepared. Share honestly. Tell them about your struggles, not just your victories."]},
 {e:"🗣️",t:"Practise servant leadership this week",why:"Mark 10:45: Jesus 'did not come to be served, but to serve.' Kingdom leadership is defined by this — authority in the form of service.",steps:["Choose one moment this week where you would normally be served and serve instead","Do it without announcing it","Reflect: what does it feel like to lead from beneath rather than above?"]},
 {e:"📚",t:"Read one book on Christian leadership or mission",why:"Leaders read. The best Christian leaders have always been intellectually serious. Read widely, apply carefully.",steps:["Choose one book: 'Strengthening the Soul of Your Leadership' (Barton), 'The Deeply Formed Life' (Piper), or 'Leading on Empty' (Hybels)","Read one chapter this week — then talk to someone about it","Apply one idea before you finish the book"]},
 {e:"🌍",t:"Pray for a missionary or global church this week",why:"The church is global — and most Western Christians have almost no awareness of the Body outside their own culture.",steps:["Find one missionary or church in a country outside your own","Read their update or story — take five minutes to understand their context","Pray specifically for them: by name, for their specific situation"]},
 {e:"🏛️",t:"Identify your spiritual gifts and use one intentionally",why:"Romans 12 and 1 Corinthians 12 describe a body where every part has a function. Unused gifts are a loss to the Body.",steps:["Take a simple spiritual gifts assessment (many are free online)","Identify your top two or three — they're often things you do naturally that bless others","Find one place this month to deploy one gift on purpose"]},
 {e:"🤝",t:"Reconcile a broken relationship",why:"Matthew 5:23–24: leave your gift at the altar and go be reconciled first. Broken relationships in the Body are a direct obstacle to worship.",steps:["Name one strained or broken relationship in your life","Pray for that person by name every day for two weeks","Then go — not to be right, but to restore"]},
]

};
