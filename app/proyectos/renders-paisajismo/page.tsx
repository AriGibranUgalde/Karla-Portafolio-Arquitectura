import { pageMetadata } from '../../../lib/page-metadata';
import { profile } from '../../../content';
import { ProjectCollection } from '../../components/project-collection';

export const metadata = pageMetadata(
  `Renders y paisajismo | ${profile.name}`,
  'Imágenes, espacios y relación con el entorno.',
  '/proyectos/renders-paisajismo',
);

export default function Page() {
  return <ProjectCollection title="Renders y paisajismo" description="Imágenes, espacios y relación con el entorno." />;
}
