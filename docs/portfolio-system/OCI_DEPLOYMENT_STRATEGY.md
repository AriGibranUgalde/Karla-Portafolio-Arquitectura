# OCI Deployment Strategy

## Status
Deployment is not part of the current implementation phase.

OCI is the future production environment.

## Principle
The application must not depend on OCI to work locally.

OCI is infrastructure, not the application core.

## Preferred Simplicity
Because the project does not require a CMS, prefer the simplest deployment architecture that can serve the portfolio efficiently.

Possible approaches:
- Static production build.
- Lightweight web server.
- OCI Compute if needed.
- Object Storage for media if justified.
- CDN or caching only if useful.

Avoid backend services the portfolio does not need.

## Services to Evaluate Later
- Compute.
- Object Storage.
- Networking.
- DNS.
- HTTPS / certificates.
- Firewall.
- Nginx.
- Backups.
- Monitoring.
- Logging.
- Secrets only if required.

## Free Tier Rule
Before using any OCI resource:
1. Check current OCI documentation.
2. Confirm Free Tier eligibility.
3. Review limits.
4. Review usage constraints.
5. Review possible charges.
6. Compare alternatives.

## Deployment Gate
Do not deploy until local validation confirms:
- Portfolio works.
- Project routes work.
- Images work.
- PDFs work.
- CV works.
- Responsive layouts work.
- Production build works locally.
- No critical errors remain.
- No secrets are versioned.
