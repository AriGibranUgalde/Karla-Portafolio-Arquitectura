# Phase 8 — Performance, SEO, and Accessibility Review

**Status: in progress — 2026-10-15.** This review is based on the local production build. Production-domain SEO and field Core Web Vitals must be verified after HTTPS deployment.

## Changes completed

- Added canonical URLs, page-specific Open Graph and Twitter metadata for all nine public routes, with `metadataBase` driven by `SITE_URL`.
- Added an automatically generated 1200 × 630 Open Graph image with descriptive alternative text. The generated PNG is 40 KB and was visually inspected.
- Matched gallery and plan-preview `sizes` hints to the responsive two-column and mobile layouts. Next Image retains lazy loading for off-screen gallery assets; `next/font` self-hosts the site fonts.
- Kept the required Google Sheets iframe and set it to lazy-load below the fold. The published sheet link and Excel download remain visible as fallbacks if Safari or another browser fails to display the embed.
- Confirmed descriptive metadata for each route, an indexable robots policy, and a sitemap covering all nine public routes.

## Validation evidence

- `pnpm check` passed (ESLint, TypeScript, and production build); 16 static routes were generated, including the Open Graph image, robots, and sitemap.
- Production preview: all nine public routes returned HTTP 200; every route had a title, description, canonical URL, Open Graph tags, and Twitter card metadata.
- `/robots.txt` and `/sitemap.xml` returned HTTP 200; sitemap contained nine URLs. `/opengraph-image` returned HTTP 200 as `image/png` (40 KB, 1200 × 630).
- HTML inspection found no images without an `alt` attribute. The N3 page exposes responsive `sizes` values, and its sheet iframe is marked for lazy loading.
- Browser accessibility-tree inspection of the N3 route found named navigation and main landmarks, a level-one project heading, labeled image controls, descriptive image names, native disclosure controls, and labeled spreadsheet links.
- `git diff --check` passed.

## Remaining work before closing Phase 8

- Run a manual review with a screen reader and a keyboard-only user flow, including the image viewer and landing navigation.
- Check compatibility on additional browsers and physical or emulated mobile devices. Verify the embedded sheet in Safari and other target browsers; the iframe is lazy-loaded and direct-open/download fallbacks remain available.
- Measure Core Web Vitals in a public HTTPS environment. The current `SITE_URL` fallback is localhost, so set the real public HTTPS origin in the production build before Phase 10 deployment and verify canonical URLs, Open Graph links, `robots.txt`, and sitemap there.
- Phase 9 remains the next phase after Phase 8 is reviewed and closed; Phase 10 is OCI deployment.
