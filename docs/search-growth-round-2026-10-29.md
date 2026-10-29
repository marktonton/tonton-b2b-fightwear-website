# Search growth implementation — 2026-10-29

## Baseline and limits

Twelve production endpoints were checked before changes: homepage, robots, sitemap, three customization pages, catalog, blog, resources, factory, company and Project Builder. All responded successfully. Each of the ten HTML pages had one H1 and a self-referencing canonical. GA4 measurement code G-R2EFRV0Y7N was present. This establishes installed code, not event delivery, consent state, analytics configuration, search ranking or indexing.

Robots allows Google and search crawlers. Actual crawler access through Vercel, Cloudflare and R2 still requires logs or provider tools. Missing HTML Google verification is not evidence of an unverified property: DNS verification may be used.

No Search Console, Bing Webmaster or GA4 account reports were available. No traffic totals, ranking positions, indexing counts, query demand or lead quality are inferred.

## Search intent and page ownership

| Primary page | Intended query family | Role |
| --- | --- | --- |
| / | custom MMA and BJJ fightwear manufacturer | Manufacturer overview and product-family routing |
| /customization/sublimated-rash-guards | custom rash guard manufacturer; private label rash guards; sublimated rash guards | Manufacturing scope, materials, customization and sampling |
| /customization/sublimated-bjj-mma-shorts | custom MMA shorts manufacturer; custom grappling shorts | Shorts construction and manufacturing scope |
| /customization/sublimated-training-shorts | custom training shorts manufacturer; private label workout shorts | Functional shorts development and manufacturing |
| /products and /products/category/* | rash guard and fight shorts product references | Compare available garment directions |
| /products/* | specific garment, construction and artwork queries | Individual specifications and project brief |
| /blog/* | fabric, print, construction, approval and cost questions | Procurement education with product and process references |
| /fabrics/* and /factory/* | specific materials and equipment/process questions | Evidence and technical explanation |
| /resources and /downloads/* | checklists, brief templates and practical guides | Buyer documents and order preparation |

These are intent assignments, not researched search volumes or guaranteed rankings. Final prioritization requires Search Console queries and target-market research.

## Implemented

- Aligned homepage title and description with its existing MMA/BJJ fightwear H1 and product focus. Kept company-wide organization information and existing URLs.
- Clarified the rash guard and training shorts manufacturing page titles with the TONTON brand.
- Added crawlable, contextual buyer paths on the homepage, three customization pages, five articles, technical resource articles and four newer standalone product templates. Links connect manufacturing pages, product categories, materials, factory evidence, articles and PDFs.
- Added an article comparison of documented 220 GSM and nominal 240 GSM rash guard briefs. No invented test results, market volumes or performance guarantees.
- Prioritized the initial homepage banner; deferred the alternate banner and added media-host preconnect/DNS hints.
- Added a controlled buyer_resource_download event for PDF clicks. Parameters: page_path, file_name, interaction_type (download/open_pdf), plus existing controlled attribution. This measures a click, not a completed download or lead. No user-entered content is added.
- Retained canonical, robots, sitemap and JSON-LD foundations rather than duplicating markup or opening new near-identical pages.
- Updated relevant modification dates; preserved original publication dates and did not claim fresh physical QC review.

## Required account-side follow-up

1. Search Console: inspect canonical homepage and three manufacturing URLs; export Pages/Indexing reasons, sitemap status and the last 90 days of query/page/country/device performance. Confirm DNS/property ownership; an HTML tag is optional if already DNS-verified.
2. Submit the canonical sitemap in Search Console if absent. Request indexing only for key updated URLs after a successful live inspection. Record receipts separately from actual indexing.
3. GA4: verify page_view, project_builder_open, contact_whatsapp, contact_email, generate_lead and buyer_resource_download in Realtime/DebugView. Validate consent and attribution. Treat only confirmed form delivery as generate_lead, not a document click.
4. Bing Webmaster: review crawl/index status. IndexNow HTTP 200/202 is receipt, not indexing. Search submission must not be described as a Google submission.
5. Monitor 28-day non-brand impressions/clicks, target-country traffic and qualified inquiries against the prior period. AI referral traffic is a lower-bound signal because some sources omit referrers. Fixed AI query observations are samples, not universal ranking measurements.
6. Add authentic customer cases when permission and project details exist. Do not manufacture testimonials, certification coverage, numerical test results, backlinks or country doorway pages.

## Maintenance

Maintain the keyword ownership table as new pages are added. Strengthen existing articles with new evidence before creating overlapping pages. Keep specifications per product; do not propagate 240 GSM across 220 GSM references. Review article-to-product links, PDF availability and form delivery after changes.
