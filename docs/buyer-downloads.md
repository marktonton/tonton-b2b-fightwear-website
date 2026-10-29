# Buyer download resources

Published entry: `/resources#downloads`, also linked from Blog navigation and the relevant long-form / technical guides.

## v1.0 documents (29 October 2026)

- Project Brief: two pages, twenty interactive fields.
- Sample Approval Checklist: three pages, thirty-nine interactive fields.
- Fabric & Construction Selection Guide: four pages using actual supplied garment photos.

Customers can preview PDFs or download without registration. Form filling requires a compatible PDF reader; users must save and attach the completed copy themselves. The site never automatically transmits form contents. The files do not contain fixed test results, universal tolerances, pricing or unapproved delivery commitments.

## Updating

`lib/buyer-downloads.ts` holds titles, descriptions, formats, page counts, byte sizes and related-article mapping. The reusable display is `components/BuyerDownloads.tsx`; small contextual links use `BuyerDownloadLinks.tsx`.

`scripts/build-buyer-downloads.py` is the editable PDF source. Run with Python plus ReportLab, pypdf and Pillow installed, and DejaVu fonts in the indicated system location. Output PDFs are written to `output/pdf/` and copied to `public/downloads/`. Temporary images and metadata are in `tmp/pdfs/` and are not publication sources.

For a future edition, increment the document version/date and filename together, regenerate, update the metadata and page links, and inspect every rendered page. The versioned files use immutable caching, so never replace bytes at an already published v1 filename. Retain old versions if customer links still reference them.

Before release, reopen form PDFs and check `get_fields()` against page widgets, test saving all fields, inspect appearance streams and render the results. Verify file hashes and application/pdf headers after deployment. Build the site and run the readable-HTML / indexability audits.
