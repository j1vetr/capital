---
name: SEO decisions for Capital Lashing site
description: Durable SEO constraints and decisions that are not visible in code
---

## Forbidden schema fields (SEO spec)
Never emit Review, AggregateRating, Offer, price, priceRange, openingHours, award or certification in structured data. No invented business facts anywhere (reviews, ratings, prices, hours, certifications, offices). Location pages are service areas, not branches.
**Why:** the user's SEO directive explicitly bans them and Google penalizes unverifiable structured data.

## Route catalog must stay in sync
Server returns real HTTP 404 for paths not in its known route list. Any new client route must also be registered server side or it will be served as 404 noindex.
**How to apply:** whenever a route is added to the client router, add its meta to the server SEO module in the same change and curl-verify a 200.

## Content style rule (user requirement)
No em dashes and no semicolons in any produced content text, Turkish or English.

## Guide URL exception: /lashing-nedir lives at root
The lashing-nedir guide is served at /lashing-nedir (backlink history) while all other guides live under /rehber. /rehber/lashing-nedir must always 301 there, never to home. Build every guide URL through the guidePath() helper in the guides data module so client links, sitemap, canonicals and prerender stay in sync.
**Why:** the user's SEO brief forbids changing or home-redirecting this URL, and a hardcoded /rehber prefix anywhere reintroduces duplicate content.

## Keyword targeting map (Aug 2026 revision)
Home page is the sole target for "lashing" and "lashing firması" (no Istanbul emphasis in home title/H1). Service pages target their own service keyword, /lashing-nedir targets informational "lashing nedir" queries. Do not create new pages optimized for "lashing firması".

## Server may import client data
The services data module is intentionally kept dependency-light (icons only) so the server can import it as the single source of meta. Do not add asset imports or path aliases to it.
