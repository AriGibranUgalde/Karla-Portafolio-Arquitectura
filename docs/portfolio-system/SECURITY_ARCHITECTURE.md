# Security Architecture

## Principle
Security remains part of the architecture even without a CMS.

A static or mostly static portfolio has a smaller attack surface, which is preferred.

## Secret Handling
Never store in source code, frontend bundles, Git, HTML, public files, or logs:
- Passwords.
- API keys.
- Tokens.
- Private keys.
- Database credentials.
- Access keys.
- Secrets.

## Existing Secrets
If inherited credentials are found:
1. Treat them as potentially compromised.
2. Remove them from source code.
3. Revoke if needed.
4. Rotate them.
5. Replace them.
6. Move them to secure configuration if still needed.
7. Review Git history if necessary.

## Public Site Security
Prefer:
- HTTPS.
- Minimal exposed services.
- Security headers.
- Safe external links.
- Dependency updates.
- No unnecessary backend.
- No sensitive files in deployed output.

## Contact Forms
If added later, evaluate:
- Input validation.
- Spam protection.
- Rate limiting.
- Safe mail handling.
- No exposed mail credentials.

Do not add a backend only for a contact form unless necessary.

## Phase 7 — Security Review

**Status: complete — 2026-10-15.** The review covered application configuration and external links, package advisories, public documents, the Drive content ingestion script, and tracked Git history. The portfolio is static and has no accounts, contact form, database, server actions, or user-controlled API endpoints.

### Completed in this review
- Updated `next` and `eslint-config-next` to 16.3.8, and patched transitive `brace-expansion` and `source-map-js` dependencies with pnpm overrides.
- Added `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy`; disabled the `X-Powered-By` header.
- Made external links opened in a new tab explicitly use `noopener noreferrer`.
- Added path containment checks to the Drive content download script to prevent absolute paths, `..` traversal, and inventory paths from writing outside `originals/`.
- Scanned 12 tracked Git commits for common private key and cloud/API credential patterns; no matches were found. `.env.example` contains only a non-secret `SITE_URL` placeholder.
- Inspected all 53 public PDFs; none contains embedded JavaScript. Inspected the public XLSX archive; no VBA, external links, or embedded objects were found.

### Validation evidence
- `pnpm check` passed: ESLint, TypeScript, and the Next.js production build; 15 routes were generated.
- `pnpm audit --prod` reported zero advisories.
- Runtime checks against the production server returned HTTP 200 and all configured security headers for the home page and a public PDF; `X-Powered-By` was absent.
- `bash -n scripts/download-drive-content.sh` and `git diff --check` passed.

### Remaining risk and next step
The advisory GHSA-vfj7-8cjw-p6xm had no patched `braces` version available. It was resolved by removing `eslint-config-next` (whose Next.js plugin pulled in `fast-glob`) and updating `typescript-eslint` to 8.71.0, which uses `tinyglobby` instead. The project retains React, hooks, JSX accessibility, and TypeScript lint configurations without the vulnerable dependency chain. `pnpm audit` now reports no known vulnerabilities, and `pnpm why braces` returns no dependency. Do not reintroduce `braces` or bypass the package-manager supply-chain policy to force an unverified version.

HSTS is not configured in the application because HTTPS termination is an OCI deployment concern and deployment is a later phase. Confirm HTTPS and add HSTS at the deployment edge during Phase 10.

The `braces` advisory was removed from the dependency tree, production security headers were verified, and the production dependency audit is clean. Phase 7 is complete. The reviewed changes were pushed in commit `ac05463` on `codex/diseno-minimalista-canva`. HSTS remains scheduled for Phase 10, when HTTPS termination is configured.

### Configuration, injection, and local development
- The application currently reads only `SITE_URL`, used while building canonical URLs for `robots.txt` and `sitemap.xml`. It is public configuration, not a credential. `lib/site-url.ts` now rejects non-HTTPS public origins, embedded credentials, query strings, and fragments; plain HTTP is allowed only for localhost development.
- No `.env` or `.env.local` file is tracked; `.gitignore` excludes environment files except the documented `.env.example`. Never put credentials under a `NEXT_PUBLIC_` name, since those values are intentionally shipped to browsers.
- No SQL injection path exists in the current application: there is no database, SQL client, API route, form, or request handler that accepts user data. Keep the portfolio static; if a backend is introduced later, use parameterized queries and validate input at the server boundary.
- Local development uses `next dev`, whose development endpoints and source maps are for local use only. Do not expose the development server to a public network or use production credentials in a development environment. Production must be built with `pnpm build` and served with `pnpm start` behind HTTPS. Keep `.env.local` private and use only non-sensitive configuration in the build environment.
- The Drive ingestion script installs a pinned `gdown==5.2.0` version in its local virtual environment instead of installing whichever version is current at run time.

The SQL/injection and environment review found no exposed development credentials or database surface. These controls reduce accidental misconfiguration; they cannot guarantee that arbitrary secrets placed in the local shell or environment will never be exposed. Use no credentials for this static site, and rotate any credential that may have been committed or sent to a public build.
