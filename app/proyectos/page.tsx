import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '../../lib/page-metadata';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata = pageMetadata(
  `Proyectos | ${profile.name}, ${profile.professionalTitle}`,
  'Explora mis proyectos de arquitectura y conoce mi proceso de diseño y representación.',
  '/proyectos',
);

export default function ProjectsPage() {
  return (
    <div className="compact-page">
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <h1 className="visually-hidden">Proyectos de arquitectura</h1>
        <nav className="project-portals" aria-label="Áreas de proyectos">
          <Link href="/proyectos/diseno-ejecutivo"><Image src="/media/profile/diseno-ejecutivo.webp" alt="Diseño ejecutivo" width={600} height={600} preload sizes="(max-width: 700px) 40vw, 230px" /></Link>
          <Link href="/proyectos/renders-paisajismo"><Image src="/media/profile/renders-paisajismo.webp" alt="Renders y paisajismo" width={600} height={600} preload sizes="(max-width: 700px) 40vw, 230px" /></Link>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
