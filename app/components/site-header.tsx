'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { profile } from '../../content';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/cv', label: 'CV' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  return <header className={`site-header page-shell${pathname === '/' ? ' site-header-home' : ''}`}>
    <details className="site-menu" ref={menu} onKeyDown={(event) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector('summary')?.focus();
      }
    }}>
      <summary aria-label="Menú principal"><span /><span /><span /></summary>
      <nav aria-label="Navegación principal">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} onClick={() => { if (menu.current) menu.current.open = false; }}>{link.label}</Link>)}
      </nav>
    </details>
    <Link className="brand" href="/" aria-label={`${profile.name}, inicio`}>
      <Image className="brand-mark" src="/media/profile/logo-canva-bn.webp" alt="" width={512} height={394} />
      <span className="brand-name">{profile.name}</span>
    </Link>
    {pathname.startsWith('/proyectos/') && <div className="project-return"><Link href="/proyectos">← Volver a proyectos</Link></div>}
  </header>;
}
