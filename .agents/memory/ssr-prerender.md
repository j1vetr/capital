---
name: SSR prerender setup
description: How the build-time prerender works and SSR pitfalls hit in this project
---

- Rule: all known routes come from `buildSitemapEntries()` in server/sitemap.ts. The prerender script, sitemap, and SEO validation must keep using that single catalog.
- **Why:** two route catalogs drift and produce pages missing from prerender or sitemap.
- Pitfall: wouter v3 `<Link><a>...</a></Link>` nests two anchors (v3 does not clone the child `<a>`). Use `<Link asChild>` or put className on Link. Nested anchors break React hydration.
- Pitfall: `react-google-recaptcha` is CJS with a double default export; it must be in `ssr.noExternal` in vite.config.ts or SSR fails with "Element type is invalid ... got: object".
- Pitfall: `React.lazy` renders the Suspense fallback inside `renderToString` even when its chunk was preloaded → empty prerendered bodies. Code-split routes must render the resolved component directly on SSR and preload the matching chunk before client hydration, or the SSR body is empty / mismatched. Also: changing render() to async requires awaiting it in every server (dev AND prod) or HTML contains "[object Promise]".
- Rule: every srcset URL must point to a file that actually exists; always emit all responsive widths (withoutEnlargement) when generating variants, and re-run the optimizer after adding new images.
- Body placeholder is `<!-- SSR_BODY -->` inside `#root` in client/index.html; prod server injects prerendered bodies from dist/prerendered (built by scripts/prerender.ts), dev server renders via vite.ssrLoadModule. main.tsx hydrates when #root has an element child.
