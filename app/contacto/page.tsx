import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `Contacto | ${profile.name}, ${profile.professionalTitle}`,
  description: 'Contáctame para conversar sobre arquitectura, proyectos y colaboraciones.',
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
        <section className="contact-panel" aria-label="Información de contacto">
          <p className="lead">Me encantará conocer tus ideas. Contáctame por correo, teléfono, WhatsApp o LinkedIn para conversar sobre proyectos y colaboraciones.</p>
          <div className="contact-links">
            {profile.contact.map((contact) => <ContactLink key={contact.label} label={contact.label} href={contact.href} value={contact.value} />)}
            {profile.socialLinks.map((link) => <ContactLink key={link.label} label={link.label} href={link.href} value={link.value} external />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ContactLink({ label, href, value, external = false }: { label: string; href: string; value?: string; external?: boolean }) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
    <ContactIcon type={label} />
    <span>{label}</span>
    <strong>{value}</strong>
    <b aria-hidden="true">↗</b>
  </a>;
}

function ContactIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    Teléfono: <><path d="M5 3h3l2 5-2.2 1.8a14 14 0 0 0 6.4 6.4L16 14l5 2v3c0 1.1-.9 2-2 2C10.2 21 3 13.8 3 5c0-1.1.9-2 2-2Z" /></>,
    Correo: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    WhatsApp: <><path d="M20 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.3-3.6A8.2 8.2 0 1 1 20 11.5Z" /><path d="M9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c.5.9 1.2 1.6 2.1 2.1l.6-.5c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.5.2-1.5.4-2.7-.1-1-.4-2.2-1.3-3.1-2.5-.9-1.2-1.5-2.5-1.5-3.5 0-.9.2-1.5.3-1.8Z" /></>,
    LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.1M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" /></>,
  };
  return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[type]}</svg>;
}
