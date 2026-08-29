import type { Metadata } from 'next';
import Link from 'next/link';
import { profile } from '../../../content';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export const metadata: Metadata = {
  title: `Proyecto | ${profile.name}, ${profile.professionalTitle}`,
  description: 'Plantilla para la presentación de un proyecto de arquitectura.',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: 'proyecto-en-preparacion' }];
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido" className="project-detail">
        <section className="project-detail-hero page-shell" aria-labelledby="project-title">
          <p className="eyebrow">Proyecto · En preparación</p>
          <h1 id="project-title">Nombre del proyecto</h1>
          <div className="project-facts">
            <p><span>Ubicación</span>Por integrar</p>
            <p><span>Año</span>Por integrar</p>
            <p><span>Participación</span>Por integrar</p>
          </div>
        </section>
        <div className="project-cover" aria-hidden="true"><span>Imagen de portada por integrar</span></div>
        <section className="project-narrative page-shell">
          <div><p className="eyebrow">Descripción</p></div>
          <p className="lead">Esta página está preparada para convertir una selección de material en una narrativa arquitectónica clara.</p>
          <p>
            Aquí se integrarán la descripción, el concepto, la estrategia de diseño, los materiales y la galería, solo cuando el contenido haya sido revisado y aprobado.
          </p>
        </section>
        <section className="project-gallery page-shell" aria-label="Galería por integrar">
          <div className="gallery-placeholder gallery-placeholder-tall">Imagen 01</div>
          <div className="gallery-placeholder">Imagen 02</div>
          <div className="gallery-placeholder">Imagen 03</div>
        </section>
        <p className="back-link page-shell"><Link className="text-link" href="/proyectos">← Volver a proyectos</Link></p>
      </main>
      <SiteFooter />
    </>
  );
}
