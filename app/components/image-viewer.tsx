'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type ViewerItem = {
  alt: string;
  downloadPath?: string;
  fit?: 'contain' | 'cover';
  height?: number;
  path: string;
  width?: number;
};

type ImageViewerProps = {
  items: ViewerItem[];
  layout: 'gallery' | 'technical' | 'calculation' | 'croquis' | 'plans';
  numberOffset?: number;
  numberingTotal?: number;
};

export function ImageViewer({ items, layout, numberOffset = 0, numberingTotal = items.length }: ImageViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;
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
    if (!isOpen) return;
    const modal = dialog.current;
    const trigger = opener.current;
    modal?.showModal();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === '+' || event.key === '=') setZoom((value) => Math.min(3, value + .25));
      if (event.key === '-') setZoom((value) => Math.max(.75, value - .25));
    };
    document.body.classList.add('viewer-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      modal?.close();
      trigger?.focus({ preventScroll: true });
      document.body.classList.remove('viewer-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, move]);

  return (
    <>
      <div className={`viewer-grid viewer-grid-${layout}`}>
        {items.map((item, index) => (
          <figure className={`viewer-item viewer-item-${layout}${item.fit === 'contain' ? ' viewer-item-contain' : ''}`} key={`${item.path}-${index}`}>
            <button className="viewer-trigger" type="button" onClick={(event) => { opener.current = event.currentTarget; setActiveIndex(index); }} aria-label={`Ampliar ${item.alt}`}>
              <Image src={item.path} alt={item.alt} width={item.width ?? 1600} height={item.height ?? 1000} sizes={layout === 'croquis' ? '(max-width: 700px) 50vw, 22vw' : layout === 'plans' ? '(max-width: 700px) 90vw, 44vw' : '92vw'} />
              <span aria-hidden="true">Ampliar ↗</span>
            </button>
            {layout !== 'calculation' && <figcaption>
              <span>{String(numberOffset + index + 1).padStart(2, '0')} / {item.alt}</span>
              {item.downloadPath && <a className="viewer-download" href={item.downloadPath} download>Descargar PDF ↓</a>}
            </figcaption>}
          </figure>
        ))}
      </div>

      {active && createPortal(
        <dialog ref={dialog} className="viewer-overlay" aria-modal="true" onCancel={(event) => { event.preventDefault(); close(); }} aria-label={`Visor de imagen: ${active.alt}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="viewer-toolbar">
          <p>{String(numberOffset + activeIndex! + 1).padStart(2, '0')} / {String(numberingTotal).padStart(2, '0')} · {active.alt}</p>
            <button type="button" autoFocus onClick={close} aria-label="Cerrar visor">Cerrar ×</button>
          </div>
          <div className="viewer-canvas">
            <Image src={active.path} alt={active.alt} width={active.width ?? 1600} height={active.height ?? 1000} priority sizes="100vw" style={{ transform: `scale(${zoom})` }} />
          </div>
          <div className="viewer-controls" aria-label="Controles del visor">
            <button type="button" onClick={() => move(-1)} aria-label="Imagen anterior">←<span className="viewer-step-label"> Anterior</span></button>
            <button type="button" onClick={() => setZoom((value) => Math.max(.75, value - .25))} aria-label="Alejar">−</button>
            <button type="button" onClick={() => setZoom(1)} aria-label="Restablecer zoom">{Math.round(zoom * 100)}%</button>
            <button type="button" onClick={() => setZoom((value) => Math.min(3, value + .25))} aria-label="Acercar">+</button>
            <button type="button" onClick={() => move(1)} aria-label="Imagen siguiente"><span className="viewer-step-label">Siguiente </span>→</button>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
