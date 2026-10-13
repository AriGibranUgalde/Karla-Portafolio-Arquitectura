import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import { profile } from '../content';
import './globals.css';
import './minimalist.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-dm-serif' });

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.professionalTitle}`,
    template: '%s',
  },
  description: profile.introduction,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
