const fallbackSiteUrl = 'http://localhost:3000';
const configuredSiteUrl = process.env.SITE_URL ?? fallbackSiteUrl;

function parseSiteUrl(value: string) {
  let parsed: URL;

  try {
    parsed = new URL(value);
  } catch {
    throw new Error('SITE_URL debe ser una URL HTTPS pública válida (HTTP solo se permite en localhost).');
  }

  const isLocalHttp = parsed.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(parsed.hostname);
  if ((parsed.protocol !== 'https:' && !isLocalHttp) || parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new Error('SITE_URL debe usar HTTPS público o HTTP en localhost, sin credenciales, query ni fragmento.');
  }

  return parsed;
}

export const siteUrl = parseSiteUrl(configuredSiteUrl);

export function absoluteSiteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
