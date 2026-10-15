import { pageMetadata } from '../../../lib/page-metadata';
import { profile } from '../../../content';
import { ProjectCollection } from '../../components/project-collection';

export const metadata = pageMetadata(
  `Diseño ejecutivo | ${profile.name}`,
  'Planos, diagramas y documentación de los proyectos.',
  '/proyectos/diseno-ejecutivo',
);

export default function Page() {
  return <ProjectCollection title="Diseño ejecutivo" description="Planos, diagramas y documentación de los proyectos." />;
}
