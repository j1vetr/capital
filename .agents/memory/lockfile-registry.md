---
name: Lockfile registry hygiene
description: package-lock.json must never contain Replit-internal registry URLs; user self-hosts on Ubuntu
---

- Rule: after ANY `npm install` in this workspace, rewrite `http://package-firewall.replit.local/npm` URLs in package-lock.json back to `https://registry.npmjs.org` (run `npm run lockfile:fix`) before finishing the turn.
- **Why:** the user deploys by cloning this repo to their own Ubuntu server; Replit-internal registry URLs are unreachable there and `npm install` hangs indefinitely. This bit them twice (Aug 2026).
- **How to apply:** any change that touches package.json/package-lock.json → run the fix script and verify `grep -c package-firewall package-lock.json` is 0.
