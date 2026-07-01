Add a new Christian faith skill to the Christian Manual PWA.

Usage: /add-skill

Ask the user for:
- Skill title
- Emoji  
- Age band (b2=6-8, b3=9-12, b4=13-17, b5=18-25, b6=26-39, b7=40-59, b8=60+)
- Why it matters (one sentence)
- Step 1, Step 2, Step 3

Then APPEND to the end of the correct band in `data-journey.js`.

CRITICAL: Always append — never insert in the middle. Skill IDs = position index. Inserting breaks saved user checkmarks.

After adding, ask if they want to deploy with /deploy.
