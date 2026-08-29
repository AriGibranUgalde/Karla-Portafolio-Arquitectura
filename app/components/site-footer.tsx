import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p>© {new Date().getFullYear()} Karla González</p>
      <div>
        <Link href="/contacto">Contacto</Link>
        <Link href="/cv">CV</Link>
      </div>
    </footer>
  );
}
