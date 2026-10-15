import type { MetadataRoute } from 'next';
import { projects } from '../content';
import { absoluteSiteUrl } from '../lib/site-url';

export const dynamic = 'force-static';

const staticRoutes = [
  '/',
  '/sobre-mi',
  '/cv',
  '/contacto',
  '/proyectos',
  '/proyectos/diseno-ejecutivo',
  '/proyectos/renders-paisajismo',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map(({ slug }) => `/proyectos/${slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: absoluteSiteUrl(path),
  }));
}
