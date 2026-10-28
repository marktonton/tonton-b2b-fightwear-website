# Buyer fit and AI discovery: implementation record, 28 October 2026

## Verification boundaries
- Production `/api/rfq` GET returned HTTP 200 with `onlineSubmissionAvailable: true` before the update. This is a configuration signal, not an actual delivery test.
- Production homepage included a GA tag. GA4 property access and received conversion events are not available through the current connection; do not report backend receipt or AI lead totals as verified.
- No real inquiry, test email or WhatsApp message was submitted. No new media was created or uploaded; the academy record reuses the existing public review screenshot.

## Published material and procurement model
- Twelve catalog products are audited in `product-information-audit.csv`.
- Four brief directions cover the three main product families plus a coordinated kit. Published values are scoped to the named SKU, not assumed for every garment.
- Priorities for supplier confirmation: outer-shell composition/GSM; exact milk-silk liner composition; numerical garment measurements and tolerances; MOQ allocation per style/design/color; measured wash, drying and stretch-recovery results.
- The academy case uses the 23 January 2026 customer review and associated kit photo. No quantity, country, development history or delivery interval is inferred.

## Discovery measurement
- Session-level discovery source and landing path survive navigation to Project Builder; only controlled source labels and a query-free path are stored.
- GA events receive the same discovery fields. RFQ delivery includes browser-reported source/path, separately from the website entry CTA.
- Labels are observational, not proof of causation or an independently verified source. Missing/blocked referrers and copy/paste visits can be undercounted. No prompts, contact details or raw query parameters are saved in this attribution record.

## Follow-up checks
- Verify an authorized real lead in GA4 DebugView/Realtime and the sales receiving channel when property access is available.
- Join discovery source to qualified inquiries and quotations, rather than treating link clicks as leads.
- Record actual material and sample measurements before replacing confirmation fields with numerical promises.

## Repeatable checks
`npm run build`, `node scripts/check-buyer-logic.cjs`, `node scripts/audit-buyer-fit.mjs`, `python scripts/audit-readable-html.py`, `npm run seo:geo-audit`, `node scripts/check-business-pages.mjs`.
