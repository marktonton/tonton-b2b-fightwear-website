# Cloudflare R2 resource migration rules

This document is the source of truth for moving TONTON website images, video,
and downloadable documents from `public/assets` to Cloudflare R2.

## 1. Production architecture

- Keep the Next.js application and source code in GitHub/Vercel.
- Store public media in one R2 Standard bucket.
- Serve production media through a Cloudflare custom domain such as
  `assets.tontongear.com`.
- Do not use the public `r2.dev` hostname in production.
- Keep the existing files in `public/assets` during migration so Vercel Preview
  and emergency rollback continue to work.

The application reads the public asset origin from:

```text
NEXT_PUBLIC_ASSET_BASE_URL=https://assets.tontongear.com
```

When the variable is absent, `resolveImage()` serves the same path from the
repository's `public/` directory.

## 2. Bucket and object-key rules

Use one bucket, recommended name: `tonton-website-assets`.

Object keys mirror the current public paths:

```text
assets/
  banners/
  products/
    rash-guards/
    training-shorts/
    bjj-mma-shorts/
  factory/
    overview/
    hanging/
    embroidery/
    sewing/
    transfer-laser/
    quality-control/
    packing/
  certificates/
  videos/
  brand/
```

During the first migration, preserve every current object key exactly. Directory
cleanup and renaming belong in a later, separately reviewed migration.

## 3. File naming

- Lowercase ASCII only.
- Use hyphens, not spaces, underscores, brackets, or Chinese characters.
- Include the content role: `main`, `front`, `back`, `detail`, `scene`, or
  `mobile`.
- New or materially changed media gets a version or content hash in the name,
  for example `rashguard-blue-main-v2.webp` or
  `rashguard-blue-main-a13f8c21.webp`.
- Never overwrite an immutable object. Upload a new key and update the data file.
- Alt text stays in the website code/data, not in the filename.

## 4. Format and size rules

### Images

- Source archive: retain the original master outside the public delivery bucket.
- Website photographs: WebP by default; AVIF may be added after browser and
  quality review.
- Logos and simple vector marks: SVG.
- Transparency that cannot be preserved acceptably in WebP: PNG.
- Hero desktop: 16:9, normally 1920px wide.
- Hero mobile: dedicated portrait crop, normally 1080px wide.
- Product cards: 1:1 or 4:5; long edge at least 2000px for the approved master.
- Do not upscale, AI-redraw, or alter real people, factory evidence, products,
  certificates, or customer feedback.

### Video

- MP4/H.264 is the baseline delivery format; add WebM only when it materially
  reduces size without quality loss.
- Upload a separate poster image.
- No autoplay video should block first render.
- Keep original, uncaptioned footage as the master; publish an optimized web copy.

### Documents

- Certificates and downloadable evidence remain PDF or their verified source
  image.
- Do not recompress a document if doing so makes text, signatures, seals, or
  verification details unreadable.

## 5. Cache and security rules

- Use the custom asset domain for Cloudflare Cache, WAF, analytics, and HTTPS.
- Disable the public `r2.dev` URL after the custom domain is verified.
- Immutable versioned objects:
  `Cache-Control: public, max-age=31536000, immutable`.
- Existing non-versioned objects during transition:
  `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`.
- Purge only the exact changed URL when a non-versioned object must be replaced.
- Keep write credentials out of GitHub and browser-visible environment variables.
- Use a bucket-scoped Object Read & Write token only in the approved upload
  environment. The website itself requires no R2 secret for public reads.
- Allow public `GET` and `HEAD`; do not allow public upload or deletion.
- Add CORS only if browser JavaScript must fetch the asset directly. Restrict
  origins to `https://tontongear.com`, `https://www.tontongear.com`, and approved
  Vercel Preview origins.

## 6. Migration procedure

1. Create the R2 Standard bucket and connect `assets.tontongear.com` as its
   custom domain.
2. Run `npm run assets:audit`; fix missing references before uploading.
3. Run `npm run assets:manifest`; review `.r2-migration/assets.tsv`.
4. Upload `public/assets/**` while preserving each manifest `object_key`, MIME
   type, and Cache-Control metadata. For this bulk set, use an approved
   S3-compatible bulk tool; Wrangler is suitable for individual corrections.
5. Compare local and remote object counts, byte sizes, and representative files.
   Run `npm run assets:verify-r2` after the upload completes.
6. Test every critical asset through the custom domain: desktop/mobile banners,
   products, Factory photos, certificate downloads, logo, and video range
   requests.
7. Add `NEXT_PUBLIC_ASSET_BASE_URL` to a Vercel Preview environment first and
   deploy.
8. Crawl the Preview for 404/403, wrong MIME type, CORS, layout shift, and video
   seek failures. Visually verify real product and factory materials.
9. Add the same variable to Vercel Production and deploy only after Preview is
   accepted.
10. Keep repository assets for at least one stable release. Removing large Git
    files is a separate destructive change and must not be combined with the R2
    cutover.

## 7. Rollback

Remove `NEXT_PUBLIC_ASSET_BASE_URL` from the affected Vercel environment and
redeploy the last approved commit. The resolver will immediately return to
`public/assets`. Do not delete R2 objects or repository copies during rollback.

## 8. Acceptance checklist

- Custom asset domain is Active and HTTPS-only.
- `r2.dev` public access is disabled.
- Object count and byte-size checks pass.
- All objects return the correct Content-Type.
- Critical files return 200; missing files return 404, never an HTML 200 page.
- Desktop and mobile banners are correct.
- Product, Factory, certificate, logo, and video URLs work.
- Video seeking/range requests work.
- No secrets appear in Git, Vercel client bundles, or `NEXT_PUBLIC_*` values.
- Vercel Preview and production builds pass.
- Local fallback still works with the asset base variable unset.
