# TONTON Search Indexation and Measurement Runbook

This runbook separates code-level checks from data that only Google Search Console, Bing Webmaster Tools, and GA4 can confirm. Never report rankings, clicks, impressions, index counts, or conversions from public search-result sampling.

## 1. Code and deployment gates

Run before every pull request:

```bash
npm run verify
```

After a production deployment:

```bash
npm run seo:live-audit
```

The build gate checks that every sitemap URL has prerendered HTML, a unique title and description, a self-referencing canonical, and no `noindex`. The live gate checks `robots.txt`, `sitemap.xml`, final HTTP status, metadata, redirects, and indexability on the public domain.

## 2. Google Search Console

1. Keep the Domain property for `tontongear.com` verified through DNS.
2. Submit `https://www.tontongear.com/sitemap.xml` once; resubmission is not a substitute for improving pages.
3. Inspect these priority URLs after material releases:
   - `/`
   - `/factory`
   - `/customization/sublimated-rash-guards`
   - `/customization/sublimated-training-shorts`
   - `/customization/sublimated-bjj-mma-shorts`
   - `/products/high-split-grappling-shorts`
4. Record Page indexing totals and reasons weekly.
5. Export Search results by Query and Page weekly. Review queries with meaningful impressions and pages sitting close to the first page before changing titles.

Optional HTML verification can be supplied as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel. Paste only the token, not the full meta tag.

## 3. Bing Webmaster Tools and IndexNow

1. Import the verified Search Console property or verify `www.tontongear.com` directly.
2. Submit the canonical sitemap.
3. Create a real IndexNow key, put the exact key in `public/<key>.txt`, and configure the same value as `INDEXNOW_KEY` in the secure deployment environment.
4. Submit only new, updated, or deleted URLs:

```bash
npm run seo:indexnow -- /factory /resources/rash-guard-fabric-construction
```

Do not create a placeholder key and do not claim submission until the API returns success.

Optional Bing HTML verification can be supplied as `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel.

## 4. GA4 measurement

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel only after the production GA4 property is confirmed. The site then records page views plus these conversion signals:

- `contact_whatsapp`
- `contact_email`
- `contact_phone`
- `inquiry_view`
- `project_builder_open`
- `project_builder_action`

Use GA4 DebugView to confirm one test event for each live interaction. A script loading successfully is not proof that data is being collected. Do not record an inquiry as a lead until a real form-delivery success response exists.

## 5. Weekly baseline

Record only values copied from the named platform and date range:

| Week ending | GSC indexed | GSC submitted | Impressions | Clicks | CTR | Average position | Bing indexed | GA4 leads | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| YYYY-MM-DD |  |  |  |  |  |  |  |  |  |

Escalate for investigation when index coverage declines, sitemap URLs return non-200 responses, canonical URLs diverge, or “crawled/discovered — currently not indexed” grows materially. Diagnose page quality and duplication before repeatedly requesting indexing.
