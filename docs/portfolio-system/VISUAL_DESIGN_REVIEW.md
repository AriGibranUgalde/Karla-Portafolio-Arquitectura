# Visual design review — 2026-09-07

Status: Phases 5–9 complete by author review; Phase 10 (OCI deployment) is next.

## Recovery point

The user explicitly requested a backup before trying the Canva design. Commit `f6aa68f` preserves the existing application, structured content, published assets, and ingestion script. Local source archives and temporary rendering files remain on disk outside that commit.

The redesign is isolated on `codex/diseno-minimalista-canva`.

## Reference and implementation

Reference: https://www.canva.com/design/DAHUe02EX80/b5ON6R2aFnvF_rrWJ4y2nA/view

- White landing page, centered logo, compact menu, and four section links.
- Scroll-driven crossfade between the original color and monochrome logos. The landing starts with only the color logo, menu, and animated downward chevrons. Scrolling reveals the four navigation links (Sobre mí, CV, Proyectos, Contacto); scrolling back restores the color logo. Chevrons also work as a keyboard-accessible scroll button. Reduced-motion preferences disable the looping cue and smooth scrolling.
- Original sphere buttons open separate executive documentation and renders/landscape project pages. Both existing projects are accessible through their relevant documentation and image sections; no new project claims were added.
- Shared white surfaces and restrained typography across existing pages.
- Keyboard-operable native disclosure menu, Escape closes and returns focus to its trigger.

## Asset provenance

Existing local Drive download: `incoming/google-drive/originals/`.

| Original | Web asset in public/media/profile |
| --- | --- |
| Logo color-03.png | logo-canva-color.webp |
| Logo BN-02.png | logo-canva-bn.webp |
| Botón 2-05.png | diseno-ejecutivo.webp |
| Botón 1-04.png | renders-paisajismo.webp |

Transparent outer margins removed, resized to 600 pixels, and encoded as WebP for web delivery. Originals preserved.

## Validation

- `pnpm check`: ESLint, TypeScript, and production build passed; 13 generated static entries.
- `git diff --check`: passed for redesign changes.
- Production preview at http://localhost:3001.
- HTTP 200 for nine public page routes, four new assets, and both CV PDFs.
- Visual inspection at desktop size and 390 × 844: landing and sphere layout.
- Observed initial color and final monochrome logo states with scrolling, and reversal when scrolling back to the top. Hidden navigation is inert and excluded from the accessibility tree until revealed.
- Menu opening and Escape/focus return verified.
- Sphere → separate executive-design page → N3 documentation verified.
- Sphere → separate renders/landscape page → Casa Luke images verified.
- Both destination anchors exist; no horizontal overflow on tested mobile project pages.
- Full accessibility, performance, and security audits remain separate roadmap work.

## Remaining phases

Phase 6 visual review is approved. Phases 8 and 9 were closed by author confirmation on 2026-10-15. Phase 10 is OCI deployment; Phase 11 operations remains optional.

Refinement: enlarged downward chevrons to 20px with 2px strokes, positioned 3.5rem below the logo. Navigation order: Sobre mí, CV, Proyectos, Contacto.

## Section navigation refinement — 2026-09-21

- Landing uses two native mandatory scroll-snap positions inside a viewport-height scroller. Settling into each section triggers a complete 1.6-second logo crossfade, with delayed navigation entrance, rather than leaving intermediate color states.
- User-selected `incoming/google-drive/originals/Logo a color.png` is resized to `public/media/profile/logo-solid-color.webp`. Its original color version is preserved; an SVG display filter produces the black silhouette while accounting for source transparency.
- Project portals, category listings, and Contact use a flexible viewport layout, with the footer after the content and no artificial minimum-height overflow. Longer content can still scroll naturally.
- Desktop Contact and mobile Contact/category checks measured document height equal to viewport height, with the footer ending at that boundary (720px desktop, 844px mobile).
- Native landing scroll settled at exactly 720px/844px, matching one full section; arrow activation also reached the second section.
- Lint, TypeScript, and production build passed. Phase 6 remains under visual review; remaining roadmap phases are unchanged.

## GitHub backup — 2026-10-12

The user requested a commit and push of the current work on `codex/diseno-minimalista-canva`, without a pull request. Application code, web assets, and this review record are included. Local rendering intermediates in `tmp/`, generated PDF output in `output/`, and unreviewed Drive originals remain local. This backup does not mark later roadmap phases complete.

## Phase 5 — Content ingestion closure — 2026-10-12

- The author confirmed that project/profile content, CV details and levels, and image publication/attribution review are complete.
- N3 plans were organized into 10 categories with 50 PDF sheets and 50 previews. Casa Luke's landscape gallery, plan image, legend, descriptions, and alternative text were added to the structured content.
- `pnpm check` passed; an asset audit found all 50 N3 plan PDFs and 50 previews with no missing files.
- Phase 5 is complete. Phase 6 was then the next phase for visual review.

## Phase 6 — Visual review approved — 2026-10-15

- Corrected the low-contrast decorative arrows on the dark N3 calculations section; they now use the light link color.
- `pnpm check` passed, and the local development server is available at `http://localhost:3000` for author review.
- The 2026-10-15 visual sweep covered `/`, `/sobre-mi`, `/cv`, `/contacto`, `/proyectos`, both project categories, `/proyectos/n3`, and `/proyectos/casa-luke`, including Casa Luke's spaces, landscaping and documentation sections. All nine public routes returned HTTP 200. Current IAB viewport was approximately 803×800; responsive mobile evidence remains the 19-emulated-viewport matrix from 2026-10-12, not a physical-device check.
- SEO follow-up for Phase 8: `/robots.txt` and `/sitemap.xml` returned HTTP 404 during the local route check.
- After reviewing all portfolio routes and project sections, the author confirmed: “ya todo perfecto terminala.” Phase 6 is approved and closed on that instruction.
- Responsive evidence remains the 19-emulated-viewport matrix from 2026-10-12; no physical-device review was performed in this session. The intermittent Google Sheets behavior in Safari remains a tracked technical issue for the later cross-browser/full-validation work and does not block this visual phase approval.
- Phases 8 and 9 were closed by author confirmation on 2026-10-15; Phase 10 OCI deployment is next.


## Phase 8 — Performance, SEO, and accessibility — complete by author confirmation — 2026-10-15

- Added page-specific canonical URLs, Open Graph metadata, Twitter summary cards, and an automatically generated 1200 × 630 Open Graph image. Its built PNG is 40 KB and was visually inspected.
- Kept `robots.txt` and the sitemap indexable; the sitemap currently contains nine public routes. Page metadata uses the configured `SITE_URL`; set the public HTTPS origin in the production build environment during Phase 10. Local builds without that value intentionally resolve to localhost.
- Adjusted gallery and plan-preview `sizes` to match their rendered columns, reducing unnecessarily large responsive image requests. Next Image keeps off-screen images lazy; the project font files are self-hosted by `next/font`.
- Kept the Google Sheets embed required by the project and set it to lazy-load below the fold. The published sheet link and Excel download remain available as fallbacks. The intermittent Safari rendering issue remains for real-browser verification.
- Production preview checks: all nine public pages returned 200; each has title, description, canonical, Open Graph and Twitter metadata; no rendered image lacked an `alt` attribute. `robots.txt` and `sitemap.xml` returned 200; the social image returned 200 as PNG. HTML inspection confirmed the N3 sheet iframe is lazy-loaded and images expose responsive `sizes`.
- Accessibility inspection in the browser tree confirmed named navigation, main landmark, headings, image alternatives, native disclosures and labeled spreadsheet actions on N3. Reduced-motion styles and visible focus rules are present.
- Remaining before phase close: test with a real screen reader and additional browsers/devices; measure Core Web Vitals on the public HTTPS deployment; verify production canonical/sitemap origins after `SITE_URL` is set. No accessibility conformance or real-user Core Web Vitals claim is made from the local preview.
