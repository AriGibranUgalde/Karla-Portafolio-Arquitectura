import type { Metadata } from 'next';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `Contacto | ${profile.name}, ${profile.professionalTitle}`,
  description: `Contacto profesional de ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell contact-page">
        <section className="page-intro" aria-labelledby="contact-title">
          <p className="eyebrow">Contacto</p>
          <h1 id="contact-title">Hablemos de arquitectura, espacio y colaboración.</h1>
        </section>
        <section className="contact-panel" aria-label="Información de contacto en preparación">
          <p className="lead">Los canales profesionales de contacto se integrarán después de validar la información pública.</p>
          <p>Este sitio no incluye formulario ni backend: la información de contacto será directa, segura y fácil de actualizar.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
