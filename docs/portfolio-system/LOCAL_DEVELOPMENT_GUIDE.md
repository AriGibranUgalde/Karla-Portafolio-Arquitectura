# Local Development Guide

## Core Requirement
The entire portfolio must work locally before any OCI deployment.

## Local Capabilities
- Public portfolio.
- Project pages.
- Images.
- PDFs.
- CV.
- Contact links.
- Responsive layouts.
- Production build.

## Startup
Prefer one or a few documented commands, for example:

```bash
npm install
npm run dev
```

## Environment Variables
Use only when needed:
- `.env`
- `.env.local`

Exclude real secrets from Git.

Provide `.env.example` when required.

## Content Updates
Content should be editable through organized files, for example:
- `/content/projects`
- `/content/profile`
- `/data`
- `/public/media`

## Production Build Validation
Before deployment:
- Generate production build locally.
- Run or preview it locally.
- Verify public pages.
- Verify project routes.
- Verify media.
- Verify PDFs.
- Verify environment configuration.
- Verify responsive layouts.
- Verify no broken links.

## Docker
Use only if it clearly simplifies development or deployment.
