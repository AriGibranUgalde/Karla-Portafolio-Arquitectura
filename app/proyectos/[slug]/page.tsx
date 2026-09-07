import type { Metadata } from 'next';
import Image from 'next/image';
import { getProjectBySlug, profile, projects } from '../../../content';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { ImageViewer } from '../../components/image-viewer';

const n3PublishedSpreadsheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOsWds9Eq8cZi46HQN6Ktw2k1SakXrbYnPVDjNhRTwn902ssMehwSks1SBtgSxaQ/pubhtml';
const n3SpreadsheetFile = 'https://docs.google.com/spreadsheets/d/1bJQQv6ke7CRcpEq4cuBaFVP4GZgf57qj/edit?usp=sharing';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  return { title: `${project?.name ?? 'Proyecto'} | ${profile.name}`, description: project?.shortDescription };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const cover = project.media.cover;
  const technicalMedia = [...project.media.plans, ...project.media.diagrams];
  const technicalLabel = project.slug === 'casa-luke'
    ? 'Análisis'
    : project.media.diagrams.length > 0
      ? 'Planos y análisis'
      : 'Planos';

  return (
    <>
      <SiteHeader />
      <main id="contenido" className="project-detail">
        <section className="project-detail-hero page-shell" aria-labelledby="project-title">
          <div className="project-title-row">
            <div>
              <p className="eyebrow">Proyecto · {String(project.displayOrder).padStart(2, '0')}</p>
              <h1 id="project-title">{project.name}</h1>
            </div>
            <div className="project-facts">
              <p><span>Autora</span>{profile.name}</p>
              <p><span>Disciplina</span>Arquitectura</p>
              <p><span>Estado</span>Proyecto</p>
            </div>
          </div>
        </section>
        {cover && <div className="project-cover-shell page-shell"><div className="project-cover"><Image src={cover.path} alt={cover.alt} fill priority sizes="(max-width: 700px) 100vw, 92vw" /></div></div>}
        <section className="project-narrative page-shell">
          <div><p className="eyebrow">Descripción</p></div>
          <div className="project-narrative-content">
            <p className="lead">{project.fullDescription ?? project.shortDescription}</p>
            {project.slug === 'n3' && <a className="text-link" href="#calculos">Consulta mi memoria técnica <span aria-hidden="true">↓</span></a>}
          </div>
        </section>
        <section className="project-gallery page-shell" aria-label={`Espacios de ${project.name}`}>
          <div className="gallery-heading"><p className="eyebrow">Espacios</p><p>Vistas seleccionadas</p></div>
          <ImageViewer items={project.media.gallery} layout="gallery" />
        </section>
        {technicalMedia.length > 0 && <section className="technical-gallery page-shell" aria-label={`Documentación de ${project.name}`}>
          <div className="gallery-heading"><p className="eyebrow">Documentación</p><p>{technicalLabel}</p></div>
          <ImageViewer items={technicalMedia} layout="technical" />
        </section>}
        {project.slug === 'n3' && <section className="calculations page-shell" id="calculos" aria-labelledby="calculations-title">
          <div className="calculations-intro">
            <div><p className="eyebrow">Memoria técnica</p><h2 id="calculations-title">Generadores de obra</h2></div>
            <div><p>Te comparto mis hojas de cálculo y croquis para que explores la documentación técnica del proyecto. También puedes descargar mi archivo Excel original.</p><a className="text-link" href="/media/documents/n3-generadores-original.xlsx" download>Descargar Excel original <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="spreadsheet-viewer">
            <iframe src={`${n3PublishedSpreadsheet}?widget=true&headers=false`} title="Generadores de obra N3 en Google Sheets" loading="lazy" allowFullScreen />
          </div>
          <div className="spreadsheet-actions">
            <a className="text-link" href={n3SpreadsheetFile} target="_blank" rel="noreferrer">Abrir Google Sheets <span aria-hidden="true">↗</span></a>
            <p>Si el visor no carga, abre el archivo en Google Sheets o descarga el original.</p>
          </div>
        </section>}
      </main>
      <SiteFooter />
    </>
  );
}
