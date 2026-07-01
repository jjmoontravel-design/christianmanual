Deploy the Life Manual PWA to GitHub Pages.

Steps:
1. Check current SW version in `sw.js` line 1 (format: `lifemanual-vN`)
2. Bump N by 1
3. Run:
   ```
   git add -A
   git commit -m "deploy vN"
   git push
   ```
4. Tell user: "Deployed — live at https://jjmoontravel-design.github.io/lifemanual/ in ~60-90 seconds. Hard-reload to get the new version."

IMPORTANT: Never skip the SW version bump — users will be stuck on the old cached version.
