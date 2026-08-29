import Link from 'next/link';
import { profile } from '../../content';

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div>
        <Link href="/contacto">Contacto</Link>
        <Link href="/cv">CV</Link>
      </div>
    </footer>
  );
}
