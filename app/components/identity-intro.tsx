'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

export function IdentityIntro() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = section.current;
      if (!element) return;
      setProgress(element.scrollTop >= element.clientHeight * .5 ? 1 : 0);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    const element = section.current;
    element?.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      element?.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const reveal = () => {
    const element = section.current;
    if (!element) return;
    element.scrollTo({
      top: element.clientHeight,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  const visible = progress > .45;
  return <div className="identity-scroll" ref={section} style={{ '--intro-progress': progress } as CSSProperties}>
    <div className="identity-track">
    <div className="identity-snap-point" aria-hidden="true" />
    <div className="identity-snap-point identity-snap-point-end" aria-hidden="true" />
    <div className="identity-stage">
      <div className="identity-center">
        <div className="identity-logo" aria-hidden="true">
          <svg width="0" height="0" style={{ position: 'absolute' }} focusable="false">
            <defs><filter id="identity-ink" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
              <feComponentTransfer><feFuncA type="linear" slope="4" /></feComponentTransfer>
            </filter></defs>
          </svg>
          <Image className="identity-logo-black" src="/media/profile/logo-solid-color.webp" alt="" width={600} height={461} preload sizes="(max-width: 700px) 180px, 260px" />
          <Image className="identity-logo-color" src="/media/profile/logo-solid-color.webp" alt="" width={600} height={461} preload sizes="(max-width: 700px) 180px, 260px" />
        </div>
        <button className="identity-scroll-cue" onClick={(event) => { event.currentTarget.blur(); reveal(); }} aria-label="Desplázate hacia abajo para explorar el portafolio" aria-hidden={visible} tabIndex={visible ? -1 : 0}>
          <span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>
      <nav className="identity-links" aria-label="Explorar portafolio" aria-hidden={!visible} inert={!visible}>
        <Link href="/sobre-mi">Sobre mí</Link><Link href="/cv">CV</Link><Link href="/proyectos">Proyectos</Link><Link href="/contacto">Contacto</Link>
      </nav>
    </div>
    </div>
  </div>;
}
