'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type ViewerItem = {
  alt: string;
  height?: number;
  path: string;
  width?: number;
};

type ImageViewerProps = {
  items: ViewerItem[];
  layout: 'gallery' | 'technical' | 'calculation' | 'croquis';
};

export function ImageViewer({ items, layout }: ImageViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const active = activeIndex === null ? null : items[activeIndex];

  const close = useCallback(() => {
    setActiveIndex(null);
    setZoom(1);
  }, []);

  const move = useCallback((direction: number) => {
    setActiveIndex((current) => current === null ? null : (current + direction + items.length) % items.length);
    setZoom(1);
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === '+' || event.key === '=') setZoom((value) => Math.min(3, value + .25));
      if (event.key === '-') setZoom((value) => Math.max(.75, value - .25));
    };
    document.body.classList.add('viewer-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('viewer-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, close, move]);

  return (
    <>
      <div className={`viewer-grid viewer-grid-${layout}`}>
        {items.map((item, index) => (
          <figure className={`viewer-item viewer-item-${layout}`} key={`${item.path}-${index}`}>
            <button className="viewer-trigger" type="button" onClick={() => setActiveIndex(index)} aria-label={`Ampliar ${item.alt}`}>
              <Image src={item.path} alt={item.alt} width={item.width ?? 1600} height={item.height ?? 1000} sizes={layout === 'croquis' ? '(max-width: 700px) 50vw, 22vw' : '92vw'} />
              <span aria-hidden="true">Ampliar ↗</span>
            </button>
            {layout !== 'calculation' && <figcaption>{String(index + 1).padStart(2, '0')} / {item.alt}</figcaption>}
          </figure>
        ))}
      </div>

      {active && createPortal(
        <div className="viewer-overlay" role="dialog" aria-modal="true" aria-label={`Visor de imagen: ${active.alt}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="viewer-toolbar">
            <p>{String(activeIndex! + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} · {active.alt}</p>
            <button type="button" onClick={close} aria-label="Cerrar visor">Cerrar ×</button>
          </div>
          <div className="viewer-canvas">
            <Image src={active.path} alt={active.alt} width={active.width ?? 1600} height={active.height ?? 1000} priority sizes="100vw" style={{ transform: `scale(${zoom})` }} />
          </div>
          <div className="viewer-controls" aria-label="Controles del visor">
            <button type="button" onClick={() => move(-1)} aria-label="Imagen anterior">← Anterior</button>
            <button type="button" onClick={() => setZoom((value) => Math.max(.75, value - .25))} aria-label="Alejar">−</button>
            <button type="button" onClick={() => setZoom(1)} aria-label="Restablecer zoom">{Math.round(zoom * 100)}%</button>
            <button type="button" onClick={() => setZoom((value) => Math.min(3, value + .25))} aria-label="Acercar">+</button>
            <button type="button" onClick={() => move(1)} aria-label="Imagen siguiente">Siguiente →</button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
