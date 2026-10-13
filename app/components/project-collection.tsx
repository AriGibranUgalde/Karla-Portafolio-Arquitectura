import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../content';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function ProjectCollection({ title, description }: {
  title: string;
  description: string;
}) {
  return <div className="compact-page"><SiteHeader /><main id="contenido" className="page-shell page-content">
    <section className="page-intro"><p className="eyebrow">Proyectos</p><h1>{title}</h1><p className="lead">{description}</p></section>
    <section className="projects-archive" aria-label={`Proyectos de ${title}`}>
      {projects.filter((project) => project.category === title).map((project, index) => {
        const cover = project.media.cover;
        return <Link className="archive-item" href={`/proyectos/${project.slug}`} key={project.id}>
          <span className="archive-image">{cover && <Image src={cover.path} alt="" fill sizes="7rem" />}</span>
          <span className="archive-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="archive-name">{project.name}</span>
          <span className="archive-type">Ver proyecto ↗</span>
        </Link>;
      })}
    </section>
  </main><SiteFooter /></div>;
}
