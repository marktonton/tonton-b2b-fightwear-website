# Semrush research and first implementation — 2026-11-25

## Scope and evidence
Signed-in Semrush browser UI, no paid trial or upgrade activated. US database, desktop; Organic Rankings displayed November 24, 2026. Keyword Overview uses November 2026 data and showed a cached update age of one month for the seed. Volumes are estimated average monthly searches, not unique buyers. Intent and CPC are not conversion rates. Close variants overlap and must not be added as independent demand.

Account limits: Organic Rankings exposes the first ten rows; filters/sorting displayed a limitation. Bulk Keyword Analysis exposed the first keyword only and a trial gate for the remaining three. No hidden values inferred. Top Pages did not yield a usable current page-ranking report. Exact best-converting competitor pages and complete AI-cited URLs remain unverified.

## Verified keyword opportunity

| Keyword | US monthly volume | KD | Evidence |
|---|---:|---:|---|
| custom rash guards | 720 | 8 | Keyword Overview; Commercial; CPC USD 1.18 |
| custom jiu jitsu rash guards | 390 | 0 | Keyword Overview variant table only |
| custom bjj rash guards | 320 | 3 | Keyword Overview variant table only |
| custom rash guards bjj | 320 | 1 | Keyword Overview variant table only |
| custom rash guard | 260 | 9 | Keyword Overview variant table only |
| how to make custom rash guards | 20 | unavailable | Question table; research support, not main commercial target |
| who makes custom rash guards | 10 | unavailable | Question table |

Not verified this run: custom mma shorts, rash guard manufacturer, private label fightwear (bulk gate). November18 research recorded custom mma shorts volume480/KD6, but those historical values are not current verification.

## Competitor observations
- RISE Domain Overview: SEO organic estimate627; 2,268 organic keywords; Authority Score13; Worldwide AI visibility16, mentions13, cited pages56. Organic Rankings is a different report/date and showed 2,008 keywords: do not combine summary totals. Visible ranking rows show homepage and vintage soccer category traffic, not proof of strong fightwear category traffic.
- RISE Organic Rankings: `sportswear china` C, volume210, position1, traffic17, KD10; `china sportswear suppliers` C, volume110, position1, traffic14, KD8. `retro soccer jerseys` C/I, volume9,900, position16, traffic29, KD26 -> /collections/vintage-soccer-jerseys.html. These are keyword-level estimates, not page totals.
- FUJI Organic Rankings: 8,256 keywords; estimated traffic40,550. `bjj gi` C, volume12,100, position1, traffic1,600 rounded, KD26 -> /collections/mens-jiu-jitsu-gis. `jiu jitsu gi` C, volume8,100, position1, traffic1,100 rounded, KD37 -> same category. FUJI is a retail brand with custom team programs; branded and gi traffic should not dictate an OEM rash guard page.
- Combatwear Factory: 73 keywords; estimated traffic0 (tool estimate, not zero real visits). `jiu jitsu gi manufacturer` C/I, volume50, position88, KD24. Its specification-led page is a content reference, not a demonstrated traffic leader.

Current page traffic totals are unavailable. Prior dated Top Pages evidence (November16 report, read November18) exists in docs/semrush-execution-2026-11-18.md: FUJI mens rashguard collection817 and general rashguards collection408 estimated visits. Historical context only; not reverified November25.

## Public first-party pages inspected
- https://www.risesportswear.com/collections/sublimated-rash-guards.html — product range and customization entry.
- https://fujisports.com/pages/custom-jiu-jitsu-rashguards — academy custom-order reference, distinct from traffic-leading retail categories.
- https://combatwearfactory.com/rash-guards/custom/ — explicit specification, style/colorway minimum basis, artwork and sample checks. Their prices, lead times, guarantees and quality claims were not copied.

## Implementation
Keep /customization/sublimated-rash-guards as the commercial canonical destination for the custom rash guard cluster. No duplicate keyword pages or change to URLs.
- Add three concise order routes: academy, private-label brand and coordinated kit, with correctly preselected product/use and distinct source/reference parameters in Project Builder.
- Explain style/design/colorway minimums and the common basis for quote comparison.
- Link quantity planning and the new print/durability approval article.
- Add visible FAQs for named/rank-color academy orders and private-label approval; existing FAQPage schema derives from the same content.
- Update only the substantively changed commercial route's modification date.

## Measurement and next evidence
Use GSC queries/pages/countries and the RFQ's entry source, reference and qualified outcome. Compare academy/brand/kit routes by starts and qualified inquiries once traffic is sufficient. Current frontend already records builder starts, attempts and success via existing optional analytics; receipt and lead quality are not verified here. No promised uplift.
For complete prioritization, a paid Semrush export should include US/UK/AU Organic Rankings and Top Pages, nonbrand commercial filters, dates and AI-cited URLs. Do not purchase/activate a trial without user authorization. No requirement to wait for that export before this evidence-supported reversible improvement.
