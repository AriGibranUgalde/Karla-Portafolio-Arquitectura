import type { Metadata } from 'next';
import Link from 'next/link';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `Perfil | ${profile.name}, ${profile.professionalTitle}`,
  description: `Perfil profesional de ${profile.name}, ${profile.professionalTitle.toLowerCase()}.`,
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
          <div className="profile-portrait" aria-hidden="true"><span>Retrato<br />por integrar</span></div>
          <div className="profile-copy">
            <p className="lead">{profile.name} es {profile.professionalTitle.toLowerCase()}. Su perfil profesional, formación y experiencia se integrarán aquí con contenido validado.</p>
            <p>
              Esta sección está diseñada para explicar el enfoque, las especialidades y el recorrido profesional sin repetir la información de cada proyecto.
            </p>
            <Link className="text-link" href="/cv">Consultar CV y experiencia <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
