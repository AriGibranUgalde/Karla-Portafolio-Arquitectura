# Project instructions

Before planning or changing this project, read `docs/portfolio-system/README.md` and the documents relevant to the task.

| Task | Required documentation |
| --- | --- |
| Public pages, design, SEO, or accessibility | `PUBLIC_PORTFOLIO_EXPERIENCE.md`, `PROJECT_SCOPE_AND_REQUIREMENTS.md` |
| Content files, projects, or media | `CONTENT_STRUCTURE_SPEC.md`, `CONTENT_DATA_MODEL.md`, `CONTENT_INGESTION_WORKFLOW.md`, `MEDIA_AND_STORAGE_STRATEGY.md` |
| Local tooling or production builds | `LOCAL_DEVELOPMENT_GUIDE.md` |
| Security, contact, or secrets | `SECURITY_ARCHITECTURE.md` |
| OCI or deployment | `OCI_DEPLOYMENT_STRATEGY.md`, `SECURITY_ARCHITECTURE.md` |

`docs/portfolio-system/` is the canonical source of requirements. This is a simple personal portfolio: do not add a CMS, admin panel, authentication, database, or backend unless the documentation changes first. Never store secrets in code, public files, Git, or logs.

At the end of every completed phase, report completed work, validation evidence, and all remaining phases with the next phase identified.

Before committing, pushing, merging, or otherwise closing a phase, present the completed work and validation evidence to the user and wait for their explicit approval.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
