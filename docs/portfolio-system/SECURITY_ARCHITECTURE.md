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
