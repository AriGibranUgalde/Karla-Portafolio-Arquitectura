import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karla González — Arquitectura',
  description: 'Portafolio profesional de arquitectura de Karla González.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
