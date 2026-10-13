import type { Metadata } from 'next';
import { profile } from '../../../content';
import { ProjectCollection } from '../../components/project-collection';

export const metadata: Metadata = {
  title: `Renders y paisajismo | ${profile.name}`,
  description: 'Imágenes, espacios y relación con el entorno.',
};

export default function Page() {
  return <ProjectCollection title="Renders y paisajismo" description="Imágenes, espacios y relación con el entorno." />;
}
