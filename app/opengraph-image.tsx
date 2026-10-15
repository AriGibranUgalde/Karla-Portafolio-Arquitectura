import { ImageResponse } from 'next/og';
import { profile } from '../content';

export const alt = `Portafolio de arquitectura de ${profile.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#f7f7f5',
        color: '#090909',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '70px 82px',
        width: '100%',
      }}
    >
      <div style={{ borderTop: '2px solid #090909', display: 'flex', paddingTop: 22 }}>
        <span style={{ fontSize: 22, letterSpacing: 5, textTransform: 'uppercase' }}>Portafolio · Arquitectura</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ color: '#666', fontSize: 24, letterSpacing: 3, textTransform: 'uppercase' }}>{profile.professionalTitle}</span>
        <strong style={{ fontSize: 68, fontWeight: 400, letterSpacing: -3, lineHeight: 1.05 }}>{profile.name}</strong>
      </div>
      <div style={{ borderBottom: '2px solid #090909', display: 'flex', justifyContent: 'space-between', paddingBottom: 22 }}>
        <span style={{ fontSize: 22 }}>{profile.location}</span>
        <span style={{ fontSize: 22, letterSpacing: 2 }}>KG</span>
      </div>
    </div>,
    size,
  );
}
