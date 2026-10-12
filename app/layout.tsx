import type { Metadata } from 'next';
import { profile } from '../content';
import './globals.css';
import './minimalist.css';

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.professionalTitle}`,
    template: '%s',
  },
  description: profile.introduction,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
