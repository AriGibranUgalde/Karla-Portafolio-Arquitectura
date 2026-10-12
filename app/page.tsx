import { profile } from '../content';
import { SiteHeader } from './components/site-header';
import { IdentityIntro } from './components/identity-intro';

export default function Home() {
  return <><SiteHeader /><main id="contenido" className="identity-home">
    <h1 className="visually-hidden">{profile.name} — Portafolio de arquitectura</h1>
    <IdentityIntro />
  </main></>;
}
