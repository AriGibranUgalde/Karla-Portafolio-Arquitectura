import Link from 'next/link';
import { profile } from '../content';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';

export default function Home() {
  const [firstName, ...lastName] = profile.name.split(' ');

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.professionalTitle} · {profile.location}</p>
            <h1 id="hero-title">{firstName}<br />{lastName.join(' ')}<span>.</span></h1>
            <p className="hero-intro">
              Portafolio profesional de arquitectura. Espacio para proyectos, procesos y una mirada construida con intención.
            </p>
            <Link className="text-link" href="/proyectos">Explorar proyectos <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-sun" />
            <div className="hero-visual-plane hero-visual-plane-a" />
            <div className="hero-visual-plane hero-visual-plane-b" />
            <p>Archivo visual<br />en preparación</p>
          </div>
        </section>

        <section className="statement page-shell" aria-labelledby="statement-title">
          <p className="eyebrow">Perfil</p>
          <h2 id="statement-title">Espacios que empiezan con una pregunta y terminan en una experiencia.</h2>
          <div className="statement-aside">
            <p>
              Esta plantilla está preparada para presentar proyectos arquitectónicos con claridad, contexto y una lectura visual pausada.
            </p>
            <Link className="text-link" href="/sobre-mi">Conocer el perfil <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="cv-feature page-shell" aria-labelledby="cv-feature-title">
          <div>
            <p className="eyebrow">Trayectoria</p>
            <p className="cv-feature-index" aria-hidden="true">CV</p>
          </div>
          <div className="cv-feature-copy">
            <h2 id="cv-feature-title">Experiencia, formación y herramientas que acompañan cada proyecto.</h2>
            <p>
              Consulta el perfil profesional, la experiencia, la educación y las herramientas de trabajo de {profile.name}.
            </p>
            <Link className="text-link" href="/cv">Ver CV y experiencia <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="featured-section page-shell" aria-labelledby="featured-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selección</p>
              <h2 id="featured-title">Proyectos destacados</h2>
            </div>
            <Link className="text-link desktop-link" href="/proyectos">Ver todos <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            <ProjectPreview number="01" title="Proyecto por documentar" tone="sand" />
            <ProjectPreview number="02" title="Proyecto por documentar" tone="ink" />
            <ProjectPreview number="03" title="Proyecto por documentar" tone="clay" />
          </div>
          <Link className="text-link mobile-link" href="/proyectos">Ver todos los proyectos <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ProjectPreview({ number, title, tone }: { number: string; title: string; tone: 'sand' | 'ink' | 'clay' }) {
  return (
    <Link className="project-preview" href="/proyectos/proyecto-en-preparacion">
      <div className={`project-preview-image project-preview-image-${tone}`} aria-hidden="true">
        <span>{number}</span>
        <i />
        <b />
      </div>
      <div className="project-preview-meta">
        <h3>{title}</h3>
        <p>Plantilla de proyecto · Próximamente</p>
      </div>
    </Link>
  );
}
