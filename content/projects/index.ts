import type { Project } from '../types';
import { n3PlanCategories, n3PlanIndex } from './n3-plan-categories';

export const projects: Project[] = [
  {
    id: 'n3', slug: 'n3', name: 'N3',
    category: 'Diseño ejecutivo',
    location: 'Coyotillos, El Marqués, Querétaro',
    shortDescription: 'Fachada, espacios de trabajo y documentación administrativa.',
    fullDescription: 'En N3 se desarrolló una nave industrial automotriz que cuenta con espacios de trabajo, administración, almacenamiento y descanso. La propuesta articula una fachada de lenguaje sobrio con recorridos y áreas funcionales; los renders, el corte y los generadores permiten conocer el proyecto y su construcción.',
    materials: [], software: [], documents: [], featured: true, displayOrder: 1,
    media: {
      cover: { alt: 'Fachada principal del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/fachada-principal.webp', width: 1672 },
      gallery: [
        { alt: 'Vista exterior del proyecto N3', height: 1537, mediaType: 'image', path: '/media/projects/n3/render-exterior.webp', width: 1023 },
        { alt: 'Área de descanso del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/area-descanso.webp', width: 1672 },
        { alt: 'Almacén del proyecto N3', height: 1402, mediaType: 'image', path: '/media/projects/n3/almacen.webp', width: 1122 },
        { alt: 'Zona administrativa del proyecto N3', height: 1122, mediaType: 'image', path: '/media/projects/n3/zona-administrativa.webp', width: 1402 },
        { alt: 'Vista en corte del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/corte-transversal.webp', width: 1672 },
      ],
      renders: [], photographs: [],
      plans: [],
      planCategories: n3PlanCategories,
      planIndex: n3PlanIndex,
      diagrams: [],
    },
  },
  {
    id: 'casa-luke', slug: 'casa-luke', name: 'Casa Luke',
    category: 'Renders y paisajismo',
    location: 'Kintamani, Bangli, Bali, Indonesia',
    shortDescription: 'Vivienda, luz natural y relación entre interior y exterior.',
    fullDescription: 'En Casa Luke se exploró una vivienda que se abre a la luz, las vistas y la vida cotidiana. Las fachadas, espacios interiores, planta, isométrico y análisis de asoleamiento reúnen las decisiones que construyen su relación con el clima y el paisaje.',
    materials: [], software: [], documents: [], featured: true, displayOrder: 2,
    media: {
      cover: { alt: 'Vista exterior de Casa Luke', height: 720, mediaType: 'image', path: '/media/projects/casa-luke/portada-exterior.webp', width: 1280 },
      gallery: [
        { alt: 'Vista exterior de Casa Luke', height: 675, mediaType: 'image', path: '/media/projects/casa-luke/exterior-02.webp', width: 1200 },
        { alt: 'Perspectiva exterior de Casa Luke', height: 844, mediaType: 'image', path: '/media/projects/casa-luke/exterior-03.webp', width: 1500 },
        { alt: 'Fachada de Casa Luke', height: 675, mediaType: 'image', path: '/media/projects/casa-luke/fachada.webp', width: 1200 },
        { alt: 'Interior de Casa Luke', height: 800, mediaType: 'image', path: '/media/projects/casa-luke/interior-03.webp', width: 1456 },
        { alt: 'Sala de estar de Casa Luke', height: 1012, mediaType: 'image', path: '/media/projects/casa-luke/sala-estar.webp', width: 1800 },
      ],
      renders: [], photographs: [],
      plans: [{ alt: 'Planta arquitectónica de Casa Luke con simbología numerada', height: 757, mediaType: 'image', path: '/media/projects/casa-luke/planta-arquitectonica-simbologia.png', width: 980 }],
      planLegend: {
        title: 'Simbología · Planta baja',
        entries: [
          { number: 1, label: 'Acceso' },
          { number: 2, label: 'Cocina' },
          { number: 3, label: 'Sala' },
          { number: 4, label: 'Comedor' },
          { number: 5, label: 'Mini oasis' },
          { number: 6, label: 'Vestíbulo' },
          { number: 7, label: 'Recámara principal' },
          { number: 8, label: 'Baño' },
          { number: 9, label: 'Tina exterior' },
          { number: 10, label: 'Recámara adicional' },
          { number: 11, label: 'Baño adicional' },
          { number: 12, label: 'Cochera' },
        ],
      },
      diagrams: [
        { alt: 'Isométrico de Casa Luke', height: 563, mediaType: 'image', path: '/media/projects/casa-luke/isometrico.webp', width: 1000 },
        { alt: 'Análisis de asoleamiento y vientos de Casa Luke', height: 1800, mediaType: 'image', path: '/media/projects/casa-luke/asoleamiento-vientos.webp', width: 1260 },
      ],
      landscaping: {
        description: 'La intervención preserva la vegetación existente y propone la replantación de especies nativas para mejorar el bienestar emocional, contribuyendo al mismo tiempo a la formación de una barrera natural contra tsunamis e inundaciones.',
        images: [
          { alt: 'Árbol de mango · Mangifera indica', fit: 'contain', height: 656, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/arbol-de-mango.webp', width: 800 },
          { alt: 'Casuarina · Casuarina equisetifolia', fit: 'contain', height: 1086, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/casuarina-equisetifolia-clean.png', width: 1448 },
          { alt: 'Cocotero · Cocos nucifera', fit: 'contain', height: 900, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/cocos-nucifera.png', width: 1200 },
          { alt: 'Eucalipto · Eucalyptus spp.', fit: 'contain', height: 740, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/eucalyptus-spp.avif', width: 740 },
          { alt: 'Pandanus · Pandanus amaryllifolius', fit: 'contain', height: 1086, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/pandanus-amaryllifolius.png', width: 1448 },
          { alt: 'Teca · Tectona grandis', fit: 'contain', height: 612, mediaType: 'image', path: '/media/projects/casa-luke/paisajismo/tectona-grandis.jpg', width: 459 },
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featured)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}
