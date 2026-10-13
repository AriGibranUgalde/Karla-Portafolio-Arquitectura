import type { Metadata } from 'next';
import { profile } from '../../../content';
import { ProjectCollection } from '../../components/project-collection';

export const metadata: Metadata = {
  title: `Diseño ejecutivo | ${profile.name}`,
  description: 'Planos, diagramas y documentación de los proyectos.',
};

export default function Page() {
  return <ProjectCollection title="Diseño ejecutivo" description="Planos, diagramas y documentación de los proyectos." />;
}
