import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { documents, profile } from '../../content';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: `CV | ${profile.name}, ${profile.professionalTitle}`,
  description: 'Conoce mi experiencia, formación y herramientas de trabajo. Descarga mi CV en español o inglés.',
};

export default function CvPage() {
  const cv = documents.find((document) => document.id === profile.cvDocumentId);
  const cvEnglish = documents.find((document) => document.id === 'cv-karla-janet-gonzalez-rivera-en');
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="page-shell page-content">
        <section className="page-intro page-intro-compact" aria-labelledby="cv-title">
          <p className="eyebrow">Trayectoria</p>
          <h1 id="cv-title">CV y experiencia</h1>
          <p className="lead">Te invito a conocer mi experiencia en desarrollo de proyectos, gestión y representación arquitectónica.</p>
          <div className="cv-download-links">
            {cv && <a className="text-link" href={cv.file.path} download>Mi CV en español <span aria-hidden="true">↓</span></a>}
            {cvEnglish && <a className="text-link" href={cvEnglish.file.path} download>Mi CV en inglés <span aria-hidden="true">↓</span></a>}
          </div>
        </section>
        <section className="cv-sections" aria-label="Currículum profesional">
          <CvBlock title="Perfil"><p>{profile.biography[0]}</p><p>{profile.biography[1]}</p></CvBlock>
          <CvBlock title="Experiencia">
            {profile.experience.map((item) => <CvEntry key={item.id} period={`${item.startDate} — ${item.endDate}`} title={item.role} subtitle={item.organization} />)}
          </CvBlock>
          <CvBlock title="Formación">
            {profile.education.map((item) => <CvEntry key={item.id} period={`${item.startDate} — ${item.endDate}`} title={item.institution} subtitle={item.program} />)}
          </CvBlock>
          <CvBlock title="Software">
            <ul className="software-list">{profile.software.map((item) => <li key={item.name}><span>{item.name}</span><small>{item.level}</small></li>)}</ul>
          </CvBlock>
          <CvBlock title="Idiomas"><p>Español · Nativo</p><p>Inglés · Profesional</p></CvBlock>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function CvBlock({ title, children }: { title: string; children: ReactNode }) {
  return <article className="cv-block"><h2>{title}</h2><div>{children}</div></article>;
}

function CvEntry({ period, title, subtitle }: { period: string; title: string; subtitle: string }) {
  return <article className="cv-entry"><p>{period}</p><div><h3>{title}</h3><p>{subtitle}</p></div></article>;
}
