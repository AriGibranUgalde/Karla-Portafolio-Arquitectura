import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `Perfil | ${profile.name}, ${profile.professionalTitle}`,
  description: 'Conoce mi perfil, mi formación en arquitectura y mi manera de abordar cada proyecto.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <section className="page-intro" aria-labelledby="about-title">
          <p className="eyebrow">Perfil</p>
          <h1 id="about-title">Una práctica atenta al lugar, a las personas y a lo que permanece.</h1>
        </section>
        <section className="profile-layout" aria-label="Biografía profesional">
          <div className="profile-portrait"><Image src="/media/profile/karla-gonzalez.webp" alt="Retrato de Karla Janet González Rivera" fill sizes="(max-width: 700px) 100vw, 40vw" /></div>
          <div className="profile-copy">
            <p className="lead">{profile.biography[0]}</p>
            <p>{profile.biography[1]}</p>
            <p>En mi portafolio comparto N3 y Casa Luke a través de renders, espacios interiores y documentación arquitectónica. Te invito a descubrir mi proceso y las ideas detrás de cada proyecto.</p>
            <Link className="text-link" href="/cv">Consulta mi CV y experiencia <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
