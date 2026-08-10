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

## Server may import client data
The services data module is intentionally kept dependency-light (icons only) so the server can import it as the single source of meta. Do not add asset imports or path aliases to it.
