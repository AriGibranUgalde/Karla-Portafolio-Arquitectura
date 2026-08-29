import Link from 'next/link';
import { profile } from '../../content';

const links = [
  { href: '/sobre-mi', label: 'Perfil' },
  { href: '/cv', label: 'CV' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
];

export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="brand" href="/" aria-label={`${profile.name}, inicio`}>
        <span>{profile.name}</span>
        <small>{profile.professionalTitle}</small>
      </Link>
      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {links.map((link) => (
            <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
