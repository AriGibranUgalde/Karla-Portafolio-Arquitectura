# Phase 9 — Local Production Validation

**Status: complete by author confirmation — 2026-10-15.** The current optimized production build was served locally on port 3001. The author reviewed the validation results, confirmed the site appears to work correctly, and instructed that Phase 9 be closed. Phase 8 was also closed by author confirmation; its unmeasured screen-reader and deployed performance follow-ups are recorded in `PERFORMANCE_SEO_ACCESSIBILITY_REVIEW.md`.

## Scope and evidence

- `pnpm check` passed: ESLint, TypeScript, and optimized Next.js production build. The build generated 16 static route entries, including nine public content routes, project detail pages, metadata image, robots, and sitemap.
- All nine public routes returned HTTP 200: `/`, `/sobre-mi`, `/cv`, `/contacto`, `/proyectos`, `/proyectos/diseno-ejecutivo`, `/proyectos/renders-paisajismo`, `/proyectos/n3`, and `/proyectos/casa-luke`. Each had one H1. All 87 rendered images had an `alt` attribute.
- All 63 unique local link destinations collected from those pages returned HTTP 200. Ten in-page fragment links resolved to existing IDs. Four links opening new windows included `noopener noreferrer`.
- All 125 media references found in the TypeScript content files resolved to files in `public/`.
- All 138 actual public media files (excluding three `.gitkeep` placeholders) were served with byte-for-byte SHA-256 matches to the local files.
- All 53 PDFs passed `pdfinfo` parsing and reported one page. Both CV PDFs returned `application/pdf`, matched their local SHA-256, and parsed successfully. All N3 plan PDFs were served from their documented links.
- The N3 Excel file matched the local source, passed ZIP CRC validation, and contained eight worksheet XML files.
- `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` returned HTTP 200 with `text/plain`, `application/xml`, and `image/png` content types respectively. The sitemap includes nine public routes; local canonical origins use the documented localhost fallback.
- Gallery controls and descriptive image alternatives appear in the server-rendered HTML. Manual interaction evidence for the image viewer, project category navigation, and N3 sheet is recorded in `docs/qa/QA_UI_UX_2026-10-12.md`; this sweep did not repeat every interaction.

## Responsive and browser coverage

- The prior QA record contains a 19-viewport responsive matrix across `/contacto`, `/proyectos`, `/cv`, and `/proyectos/n3`, with no horizontal overflow. That is historical evidence from 2026-10-12, not a fresh full responsive pass on this production build.
- A current Safari WebDriver session could not be created because Safari's “Allow Remote Automation” setting is disabled. The setting was left unchanged. The current production build therefore still needs a visual check at representative phone, tablet, and desktop widths. No physical device was used.
- This local pass does not verify Google Sheets availability in Safari, other browser engines, a screen reader, or public-domain canonical URLs and Core Web Vitals.

## Closeout notes and limitations

- A fresh visual sweep of the current production build at phone, tablet, and desktop widths was not completed. The 19-viewport matrix from 2026-10-12 is the available responsive evidence; no physical device was used. The author approved closure based on the current build and the validation results above.
- Manual gallery and PDF-opening interactions were not repeated in this sweep; prior interaction evidence remains in `docs/qa/QA_UI_UX_2026-10-12.md`. Current build routes, document responses, and file integrity were checked above.
- Production-domain canonical URLs and field Core Web Vitals require the public HTTPS deployment and remain in Phase 10 follow-up. Screen-reader and expanded cross-browser checks are listed as accessibility follow-ups in the Phase 8 record.

## Remaining project phases

- Phase 8 is complete by author confirmation. Its follow-ups are: screen-reader and keyboard-only review, additional browser/device checks, Safari Sheets behavior, and field Core Web Vitals on a public HTTPS deployment.
- Phase 9 local production validation is complete by author confirmation.
- Next phase: Phase 10, OCI deployment. Phase 11 operations is optional.
