# Media and Storage Strategy

## Local Development
Media may live inside the project or a dedicated local assets directory:
- `/public`
- `/assets`
- `/content`
- `/media`

Use the structure that best matches the framework.

## Production Options

### Option A — Bundled Static Assets
Use optimized files included in the production build when project size remains reasonable.

### Option B — Object Storage
Use OCI Object Storage or another provider only when media volume, deployment size, or performance justify it.

Do not choose cloud storage automatically.

## Original vs Web Assets

### Original
Maximum quality for archive, printing, and future reuse.

### Web
Optimized for the website:
- AVIF.
- WebP.
- Optimized JPEG.

## Responsive Variants
Consider:
- 400 px.
- 800 px.
- 1200 px.
- 1600 px.

Use `srcset` or framework equivalents.

## PDFs
PDFs may be downloadable assets. Optimize file size when possible without damaging presentation quality.
