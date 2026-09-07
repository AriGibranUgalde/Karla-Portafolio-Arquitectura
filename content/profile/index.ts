import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Karla Janet González Rivera',
  professionalTitle: 'Arquitecta',
  location: 'Santiago de Querétaro, México',
  introduction: 'Soy egresada de Arquitectura por la Universidad Marista de Querétaro. Te invito a conocer mi experiencia en gestión, desarrollo de proyectos y representación arquitectónica.',
  biography: [
    'Como recién egresada de Arquitectura, soy una profesionista comprometida, organizada y responsable, con gran capacidad de adaptación, trabajo colaborativo y gestión eficiente de proyectos.',
    'Me caracterizo por mi proactividad, atención al detalle y compromiso con soluciones creativas y funcionales. Me apasionan la arquitectura y el paisajismo.',
  ],
  specialties: [
    'Desarrollo de proyectos',
    'Gestión y trámites',
    'Arquitectura y paisajismo',
    'Representación arquitectónica',
  ],
  skills: [],
  software: [
    { name: 'Adobe Creative Suite', level: 'Avanzado' },
    { name: 'AutoCAD', level: 'Avanzado' },
    { name: 'DIALux', level: 'Avanzado' },
    { name: 'Enscape', level: 'Intermedio' },
    { name: 'V-Ray', level: 'Avanzado' },
    { name: 'Microsoft 365', level: 'Avanzado' },
    { name: 'SketchUp', level: 'Avanzado' },
    { name: 'Twinmotion', level: 'Intermedio' },
  ],
  experience: [
    {
      id: 'cecsa-auxiliar-proyecto-gestora',
      organization: 'Cecsa de Querétaro del Centro',
      role: 'Auxiliar de proyecto y gestora',
      startDate: 'Octubre 2025',
      endDate: 'Septiembre 2026',
    },
    {
      id: 'proyectos-freelance',
      organization: 'Proyectos freelance',
      role: 'Proyectos verticales y salones para eventos sociales',
      startDate: 'Agosto 2023',
      endDate: 'Actualidad',
    },
  ],
  education: [
    {
      id: 'arquitectura-universidad-marista-queretaro',
      institution: 'Universidad Marista de Querétaro',
      program: 'Arquitectura',
      startDate: 'Agosto 2021',
      endDate: 'Junio 2026',
    },
    {
      id: 'servicio-social-planeacion-urbana',
      institution: 'Secretaría de Desarrollo Urbano y Obras Públicas',
      program: 'Servicio social · Dirección de Planeación Urbana',
      startDate: 'Enero 2025',
      endDate: 'Julio 2025',
    },
    {
      id: 'estadia-profesional-cecsa',
      institution: 'Cecsa de Querétaro del Centro',
      program: 'Estadía profesional · Área de proyectos y trámites',
      startDate: 'Enero 2026',
      endDate: 'Junio 2026',
    },
  ],
  contact: [
    { label: 'Teléfono', href: 'tel:+524421073950', value: '+52 442 107 3950' },
    { label: 'Correo', href: 'mailto:gonzalezrkarlajanet@gmail.com', value: 'gonzalezrkarlajanet@gmail.com' },
  ],
  socialLinks: [
    { label: 'WhatsApp', href: 'https://wa.me/524421073950', value: 'Enviar mensaje' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karla-janet-gonz%C3%A1lez-rivera-020bb3385', value: 'Ver mi perfil' },
  ],
  cvDocumentId: 'cv-karla-janet-gonzalez-rivera',
  portrait: {
    alt: 'Retrato de Karla Janet González Rivera',
    height: 1067,
    mediaType: 'image',
    path: '/media/profile/karla-gonzalez.webp',
    publicName: 'karla-gonzalez.webp',
    width: 1600,
  },
};
