import type { Metadata } from 'next';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `CV | ${profile.name}, ${profile.professionalTitle}`,
  description: `Experiencia, educación y herramientas de ${profile.name}.`,
};

export default function CvPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <section className="page-intro page-intro-compact" aria-labelledby="cv-title">
          <p className="eyebrow">Trayectoria</p>
          <h1 id="cv-title">CV y experiencia</h1>
          <p className="lead">Resumen profesional listo para incorporar información validada y un documento descargable.</p>
        </section>
        <section className="cv-sections" aria-label="Currículum en preparación">
          <CvBlock title="Experiencia" description="Roles, responsabilidades y periodos profesionales por integrar." />
          <CvBlock title="Educación" description="Formación académica y cursos relevantes por integrar." />
          <CvBlock title="Herramientas" description="Software y capacidades técnicas por integrar." />
        </section>
        <p className="notice">El archivo PDF del CV se añadirá cuando se apruebe su versión pública.</p>
      </main>
      <SiteFooter />
    </>
  );
}

function CvBlock({ title, description }: { title: string; description: string }) {
  return <article className="cv-block"><h2>{title}</h2><p>{description}</p></article>;
}
