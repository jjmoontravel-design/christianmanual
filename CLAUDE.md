# Christian Manual PWA

Daily faith-skills app with a virtual pet companion (Finn the dolphin). Users complete daily Christian skills to earn coins and keep their pet happy.

**Live URL:** `https://jjmoontravel-design.github.io/christianmanual/`
**Repo:** `https://github.com/jjmoontravel-design/christianmanual`
**Local:** `C:\Users\snapa\christianmanual\`

---

## Stack

- Pure HTML/CSS/JS — single file app (`index.html`, 3500+ lines)
- No frameworks, no build tools, no npm
- PWA with service worker (`sw.js`) for offline support
- Data in separate JS files loaded at runtime

---

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Entire app — HTML + CSS + JS in one file |
| `sw.js` | Service worker — bump version string on EVERY deploy |
| `data-journey.js` | Christian faith skills, 7 age bands (the main content) |
| `data-daily.js` | Daily challenges and tasks |
| `data-characters.js` | Character definitions (Finn + others) |
| `data-guides.js` | How-to guides |
| `data-replies.js` | AI-style reply messages |

---

## Deploy

```powershell
# Bump SW version first (sw.js line 1: christianmanual-vN → christianmanual-v(N+1))
git add -A
git commit -m "your message"
git push
# GitHub Pages auto-deploys in ~60-90 seconds
# Reload browser to pick up new service worker
```

Or use `/deploy` command.

**Current SW version:** v255 (check sw.js line 1 for latest)

---

## Virtual Pet — Finn (Dolphin)

Default character is **Finn**, a dolphin. 4 care stats (0–100), decay over time.

Mood clips: `dolphin-idle.mp4`, `dolphin-happy.mp4`, `dolphin-hungry.mp4`, `dolphin-bored.mp4`, `dolphin-sleep.mp4`

---

## App Tabs

| Tab | Description |
|-----|-------------|
| Today | Finn + daily challenge + skill of the day + word of the day |
| Schedule | Calendar and habit tracking |
| Journey | All Christian faith skills by age band — main content |
| Guides | Step-by-step how-to guides |
| You | Profile, settings, interests |

---

## Skills Data

All skills are in `data-journey.js` → `BANDS` array. 7 bands (b2–b8), ages 6–80+.

**CRITICAL:** Never reorder or delete skills within a band. IDs are band + position index. Changing order breaks users' saved checkmarks. Always APPEND new skills to a band's end.

---

## Service Worker Rules

- Bump `christianmanual-vN` version on sw.js line 1 on EVERY deploy or users won't get updates
- Any new file added to the project must be added to the ASSETS array in sw.js
- Strategy: Network-first with cache fallback

---

## Anti-Patterns — NEVER DO THESE

- **Don't reorder skills in data-journey.js** — breaks saved user progress (IDs = position)
- **Don't delete skills** — same reason; mark unused ones as hidden instead
- **Don't forget to bump SW version** — users will be stuck on old cached version
- **Don't add new files without updating sw.js ASSETS array** — breaks offline mode
- **Don't split index.html into multiple files** — no build tool, everything must stay in one file
- **Don't use `transform-origin: center bottom`** on mood clips — cuts off characters
