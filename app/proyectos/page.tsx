import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { profile, projects } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `Proyectos | ${profile.name}, ${profile.professionalTitle}`,
  description: 'Explora mis proyectos de arquitectura y conoce mi proceso de diseño y representación.',
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <section className="page-intro page-intro-compact" aria-labelledby="projects-title">
          <p className="eyebrow">Archivo</p>
          <h1 id="projects-title">Proyectos</h1>
          <p className="lead">Te invito a explorar mis proyectos y conocer cómo doy forma a mis ideas a través del diseño, la representación y el proceso.</p>
        </section>
        <section className="projects-archive" aria-label="Archivo de proyectos">
          {projects.map((project, index) => {
            const cover = project.media.cover;
            return <Link className="archive-item" href={`/proyectos/${project.slug}`} key={project.id}>
              <span className="archive-image">{cover && <Image src={cover.path} alt="" fill sizes="7rem" />}</span>
              <span className="archive-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="archive-name">{project.name}</span>
              <span className="archive-type">Ver proyecto ↗</span>
            </Link>;
          })}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
