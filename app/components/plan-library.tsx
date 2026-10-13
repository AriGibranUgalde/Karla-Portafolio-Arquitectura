import type { PlanCategory, PublicDocument } from '../../content/types';
import { ImageViewer } from './image-viewer';

export function PlanLibrary({ categories, index }: {
  categories: PlanCategory[];
  index?: PublicDocument;
}) {
  const sheetCount = categories.reduce((total, category) => total + category.sheets.length, 0);

  return (
    <div className="plan-library">
      <div className="plan-library-index">
        <p>{sheetCount} láminas · {categories.length} categorías</p>
        {index && <a href={index.file.path} target="_blank" rel="noreferrer">Ver listado de planos ↗</a>}
      </div>
      <div className="plan-category-list">
        {categories.map((category) => (
          <details className="plan-category" key={category.id}>
            <summary>
              <span>{category.title}</span>
              <span className="plan-category-count">{String(category.sheets.length).padStart(2, '0')} planos</span>
            </summary>
            <ImageViewer
              layout="plans"
              items={category.sheets.map((sheet) => ({
                alt: `${sheet.code}: ${sheet.title}`,
                downloadPath: sheet.pdfPath,
                height: sheet.height,
                path: sheet.previewPath,
                width: sheet.width,
              }))}
            />
          </details>
        ))}
      </div>
    </div>
  );
}
