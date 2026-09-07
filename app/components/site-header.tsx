'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '../../content';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/cv', label: 'CV' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header page-shell">
      <Link className="brand" href="/" aria-label={`${profile.name}, inicio`}>
        <Image className="brand-mark" src="/media/profile/logo-color.png" alt="" width={512} height={394} priority />
        <span className="brand-name">{profile.name}</span>
      </Link>
      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}/`)) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {pathname.startsWith('/proyectos/') && (
        <div className="project-return">
          <Link href="/proyectos"><span aria-hidden="true">←</span> Volver a proyectos</Link>
        </div>
      )}
    </header>
  );
}
