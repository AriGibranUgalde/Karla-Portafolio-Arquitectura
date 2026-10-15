import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/page-metadata';
import Image from 'next/image';
import { getProjectBySlug, profile, projects } from '../../../content';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { ImageViewer } from '../../components/image-viewer';
import { PlanLibrary } from '../../components/plan-library';

const n3PublishedSpreadsheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOsWds9Eq8cZi46HQN6Ktw2k1SakXrbYnPVDjNhRTwn902ssMehwSks1SBtgSxaQ/pubhtml';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = `${project?.name ?? 'Proyecto'} | ${profile.name}`;
  const description = project?.shortDescription ?? 'Conoce este proyecto de arquitectura.';
  return pageMetadata(title, description, `/proyectos/${slug}`);
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const cover = project.media.cover;
  const technicalMedia = [...project.media.plans, ...project.media.diagrams];
  const planCategories = project.media.planCategories ?? [];
  const hasPlanLibrary = planCategories.length > 0;
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
              <p><span>Ubicación</span>{project.location ?? '—'}</p>
            </div>
          </div>
        </section>
        {cover && <div className="project-cover-shell page-shell"><div className="project-cover"><Image src={cover.path} alt={cover.alt} fill priority sizes="(max-width: 700px) 100vw, 92vw" /></div></div>}
        <section className="project-narrative page-shell">
          <div><p className="eyebrow">Descripción</p></div>
          <div className="project-narrative-content">
            <p className="lead">{project.fullDescription ?? project.shortDescription}</p>
            {project.slug === 'n3' && <a className="text-link" href="#calculos">Consulta mi memoria administrativa <span aria-hidden="true">↓</span></a>}
          </div>
        </section>
        <section id="espacios" className="project-gallery page-shell" aria-label={`Espacios de ${project.name}`}>
          <div className="gallery-heading"><p className="eyebrow">Espacios</p><p>Vistas seleccionadas</p></div>
          <ImageViewer items={project.media.gallery} layout="gallery" />
        </section>
        {project.media.landscaping && <section id="paisajismo" className="project-landscaping page-shell" aria-label={`Paisajismo de ${project.name}`}>
          <div className="gallery-heading"><p className="eyebrow">Paisajismo</p><p>Vegetación propuesta</p></div>
          <p className="landscaping-description">{project.media.landscaping.description}</p>
          <ImageViewer items={project.media.landscaping.images} layout="gallery" />
        </section>}
        {(technicalMedia.length > 0 || hasPlanLibrary) && <section id="documentacion" className={`technical-gallery page-shell${project.slug === 'casa-luke' ? ' technical-gallery-casa-luke' : ''}`} aria-label={`Documentación de ${project.name}`}>
          <div className="gallery-heading"><p className="eyebrow">Documentación</p><p>{technicalLabel}</p></div>
          {project.slug === 'casa-luke' ? (
            <>
              <div className="project-plan-layout">
                {project.media.planLegend && <details className="project-plan-legend">
                  <summary>{project.media.planLegend.title}</summary>
                  <ol>
                    {project.media.planLegend.entries.map((entry) => <li key={entry.number}>
                      <span>{String(entry.number).padStart(2, '0')}</span>
                      <span>{entry.label}</span>
                    </li>)}
                  </ol>
                </details>}
                {project.media.plans.length > 0 && <ImageViewer items={project.media.plans} layout="technical" numberingTotal={technicalMedia.length} />}
              </div>
              {project.media.diagrams.length > 0 && <ImageViewer items={project.media.diagrams} layout="technical" numberOffset={project.media.plans.length} numberingTotal={technicalMedia.length} />}
            </>
          ) : technicalMedia.length > 0 && <ImageViewer items={technicalMedia} layout="technical" />}
          {hasPlanLibrary && <PlanLibrary categories={planCategories} index={project.media.planIndex} />}
        </section>}
        {project.slug === 'n3' && <section className="calculations page-shell" id="calculos" aria-labelledby="calculations-title">
          <div className="calculations-intro">
            <div><p className="eyebrow">Memoria administrativa</p><h2 id="calculations-title">Generadores de obra</h2></div>
            <div><p>Te comparto mis hojas de cálculo con croquis para que explores la documentación administrativa del proyecto.</p></div>
          </div>
          <div className="spreadsheet-actions">
            <a className="text-link" href={n3PublishedSpreadsheet} target="_blank" rel="noopener noreferrer">Abrir Google Sheets <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/media/documents/n3-generadores-original.xlsx" download>Descargar Excel original <span aria-hidden="true">↓</span></a>
          </div>
          <div className="spreadsheet-viewer">
            <iframe src={`${n3PublishedSpreadsheet}?widget=true&headers=false`} title="Generadores de obra N3 en Google Sheets" loading="lazy" allowFullScreen />
          </div>
          <p className="spreadsheet-fallback">Si la vista integrada no carga, puedes abrir la hoja en Google Sheets o descargar la copia en Excel.</p>
        </section>}
      </main>
      <SiteFooter />
    </>
  );
}
