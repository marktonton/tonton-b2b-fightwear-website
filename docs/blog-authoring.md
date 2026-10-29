# Updating the TONTON Blog

The public article hub is `/blog`; full posts are `/blog/<slug>`.

1. Copy a JSON file from `data/blog/` and use a new unique lowercase slug.
2. Write the title, category, description, direct answer, sections, questions, product links and source basis. Give each section a unique anchor ID. Keep claims supported by the selected product record; photos do not establish lab results.
3. Register the imported file in `BLOG_POSTS` in `lib/blog.ts`. Array order controls the hub order. The hub search, topic buttons, static article routes, reading time and XML sitemap derive from this registry.
4. Set `published` only when first published. On a substantive revision, retain that date and update `updated`. Author is the company, without implying an unperformed expert review.
5. Use existing verified image URLs or upload new media to R2 before release. Record accurate image captions; never substitute an illustrative image for a physical test.
6. Add the article to `data/site-directory.json` under `Blog articles` so the human-readable directory and reachability audit include it.
7. Run `npm run build`, `python scripts/audit-readable-html.py`, and `node scripts/audit-built-indexability.mjs`. Check hub search/filter, article table overflow, images, anchor links, FAQs and quote links in the browser.
8. Publish using the existing GitHub/Vercel workflow. Submit the new canonical URL through the approved search workflow; submission does not guarantee indexing.

The existing `/resources` pages remain technical references. Link to them for narrow subjects; do not copy a full blog article onto a second indexable URL.

Sample approval checklist: `/blog/custom-fightwear-sample-approval-checklist#checklist`.
The article has print styles for a readable paper/browser-PDF copy, with navigation and product imagery removed. Browser Print is available without a separate account.

This is a source-managed blog, not a new browser administration system. New articles are added through JSON content and the registry, then built and deployed; there are no new credentials or database requirements.
