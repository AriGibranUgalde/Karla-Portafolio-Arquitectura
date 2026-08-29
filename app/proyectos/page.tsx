import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Proyectos | Karla González Arquitectura',
  description: 'Selección de proyectos de arquitectura de Karla González.',
};

const placeholders = ['01', '02', '03', '04', '05', '06'];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <section className="page-intro page-intro-compact" aria-labelledby="projects-title">
          <p className="eyebrow">Archivo</p>
          <h1 id="projects-title">Proyectos</h1>
          <p className="lead">Cada proyecto tendrá una página propia con contexto, proceso, imágenes y documentación seleccionada.</p>
        </section>
        <section className="projects-archive" aria-label="Archivo de proyectos en preparación">
          {placeholders.map((number, index) => (
            <Link className="archive-item" href="/proyectos/proyecto-en-preparacion" key={number}>
              <span className={`archive-image archive-image-${index % 3}`} aria-hidden="true"><i /><b /></span>
              <span className="archive-number">{number}</span>
              <span className="archive-name">Proyecto por documentar</span>
              <span className="archive-type">Plantilla</span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
