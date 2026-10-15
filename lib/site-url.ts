const configuredSiteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

export const siteUrl = new URL(configuredSiteUrl);

export function absoluteSiteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
