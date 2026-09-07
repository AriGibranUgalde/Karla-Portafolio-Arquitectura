import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects, profile, type Project } from '../content';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.professionalTitle} · {profile.location}</p>
            <h1 id="hero-title">Karla<br />González<span>.</span></h1>
            <p className="hero-intro">
              Imagino una arquitectura donde la luz, el espacio y el paisaje nos hagan sentir que pertenecemos.
            </p>
            <Link className="text-link" href="/proyectos">Explora mis proyectos <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-identity" aria-hidden="true">
            <Image src="/media/profile/logo-color.png" alt="" width={512} height={394} priority />
          </div>
        </section>

        <section className="home-profile page-shell" aria-labelledby="profile-title">
          <div className="home-profile-portrait">
            <Image src="/media/profile/karla-gonzalez.webp" alt="Retrato de Karla Janet González Rivera" fill sizes="(max-width: 700px) 100vw, 42vw" />
          </div>
          <div className="home-profile-copy">
            <p className="eyebrow">Perfil</p>
            <h2 id="profile-title">Karla Janet<br />González Rivera</h2>
            <p className="lead">Me inspira crear espacios que conecten a las personas con su entorno, donde la arquitectura y el paisaje formen parte de una misma experiencia.</p>
            <p>Soy egresada de Arquitectura por la Universidad Marista de Querétaro. Mi experiencia en desarrollo de proyectos y gestión me ha enseñado a acompañar cada idea con organización, atención al detalle y trabajo en equipo.</p>
            <p>Disfruto explorar posibilidades, dar forma a las ideas y encontrar soluciones que unan creatividad y funcionalidad. En cada proyecto busco aprender, aportar una mirada sensible y cuidar aquello que hace que un espacio se sienta propio.</p>
            <Link className="text-link" href="/cv">Conoce mi formación y CV <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="cv-feature page-shell" aria-labelledby="cv-feature-title">
          <div>
            <p className="eyebrow">Trayectoria</p>
            <p className="cv-feature-index" aria-hidden="true">CV</p>
          </div>
          <div className="cv-feature-copy">
            <h2 id="cv-feature-title">Mi experiencia, formación y herramientas dan forma a cada proyecto.</h2>
            <p>
              Te invito a conocer mi trayectoria, lo que he aprendido y las herramientas con las que llevo mis ideas a cada proyecto.
            </p>
            <Link className="text-link" href="/cv">Consulta mi CV y experiencia <span aria-hidden="true">↗</span></Link>
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
          <div className="project-grid project-grid-featured">
            {featuredProjects.map((project, index) => (
              <ProjectPreview key={project.id} number={String(index + 1).padStart(2, '0')} project={project} />
            ))}
          </div>
          <Link className="text-link mobile-link" href="/proyectos">Ver todos los proyectos <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ProjectPreview({ number, project }: { number: string; project: Project }) {
  const cover = project.media.cover;
  return (
    <Link className="project-preview" href={`/proyectos/${project.slug}`}>
      <div className="project-preview-image">
        {cover && <Image src={cover.path} alt={cover.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />}
        <span>{number}</span>
      </div>
      <div className="project-preview-meta">
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
      </div>
    </Link>
  );
}
