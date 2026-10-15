# Implementation Roadmap

## Phase 1 — Legacy Cleanup
- Remove previous firm identity.
- Remove construction company content.
- Remove university project branding.
- Remove unrelated test data.
- Detect exposed secrets quickly.
- Keep only useful technical structure.

## Phase 2 — Local Development Foundation
- Ensure project runs locally.
- Document setup.
- Configure environment variables only if needed.
- Define content folder structure.
- Define media folder structure.

## Phase 3 — Portfolio Template
- Global layout.
- Navigation.
- Home page.
- About / profile.
- Projects index.
- Project detail template.
- CV / experience.
- Contact.
- Footer.

## Phase 4 — Content Model
Define:
- Profile.
- Experience.
- Education.
- Skills.
- Software.
- Projects.
- Documents.

Choose the simplest format:
- Markdown / MDX.
- JSON.
- YAML.
- TypeScript data.
- Framework-native content collections.

## Phase 5 — Content Ingestion
- Review Drive content.
- Classify.
- Optimize.
- Copy into project structure.
- Associate assets with projects.
- Add alt text and metadata.

## Phase 6 — Visual Design
- Refine architectural identity.
- Improve typography.
- Improve layouts.
- Build galleries.
- Build project narratives.
- Refine responsive behavior.

## Phase 7 — Security Review (complete — 2026-10-15)
- Remove unused backend features.
- Remove secrets.
- Review dependencies.
- Review public files.
- Add production security headers where appropriate.
- Review contact mechanisms.

## Phase 8 — Performance, SEO and Accessibility (complete by author confirmation — 2026-10-15)
- Image optimization.
- Core Web Vitals field measurement deferred until public HTTPS deployment (Phase 10).
- Metadata.
- Sitemap.
- Accessibility review; manual screen-reader coverage remains a follow-up.
- Responsive refinement.

## Phase 9 — Local Production Validation (in progress — 2026-10-15)
- Build production version.
- Run or preview production build locally.
- Test routes.
- Test images.
- Test PDFs.
- Test CV.
- Test links.
- Test responsive layouts.

## Phase 10 — OCI Deployment
- Verify current Free Tier.
- Choose simplest viable architecture.
- Configure infrastructure.
- Configure networking if needed.
- Configure storage if needed.
- Configure HTTPS.
- Deploy.

## Phase 11 — Operations
Evaluate only if useful:
- GitHub Actions.
- CI/CD.
- Automated deployments.
- Backups.
- Monitoring.
- Alerts.
