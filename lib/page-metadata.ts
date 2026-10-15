import type { Metadata } from 'next';
import { profile } from '../content';

const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `Portafolio de arquitectura de ${profile.name}`,
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      siteName: profile.name,
      title,
      description,
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.url],
    },
  };
}
