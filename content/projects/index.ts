import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'n3', slug: 'n3', name: 'N3',
    shortDescription: 'Fachada, espacios de trabajo y documentación técnica.',
    fullDescription: 'En N3 desarrollo un conjunto de espacios de trabajo, administración, almacenamiento y descanso. La propuesta articula una fachada de lenguaje sobrio con recorridos y áreas funcionales; los renders, el corte y los generadores permiten leer tanto su atmósfera como su construcción.',
    materials: [], software: [], documents: [], featured: true, displayOrder: 1,
    media: {
      cover: { alt: 'Fachada principal del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/fachada-principal.webp', width: 1672 },
      gallery: [
        { alt: 'Vista exterior del proyecto N3', height: 1537, mediaType: 'image', path: '/media/projects/n3/render-exterior.webp', width: 1023 },
        { alt: 'Área de descanso del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/area-descanso.webp', width: 1672 },
        { alt: 'Almacén del proyecto N3', height: 1402, mediaType: 'image', path: '/media/projects/n3/almacen.webp', width: 1122 },
        { alt: 'Zona administrativa del proyecto N3', height: 1122, mediaType: 'image', path: '/media/projects/n3/zona-administrativa.webp', width: 1402 },
      ],
      renders: [], photographs: [],
      plans: [{ alt: 'Corte transversal del proyecto N3', height: 941, mediaType: 'image', path: '/media/projects/n3/corte-transversal.webp', width: 1672 }],
      diagrams: [],
    },
  },
  {
    id: 'casa-luke', slug: 'casa-luke', name: 'Casa Luke',
    shortDescription: 'Vivienda, luz natural y relación entre interior y exterior.',
    fullDescription: 'En Casa Luke exploro una vivienda que se abre a la luz, las vistas y la vida cotidiana. Las fachadas, espacios interiores, planta, isométrico y análisis de asoleamiento reúnen las decisiones que construyen su relación con el clima y el paisaje.',
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
      plans: [{ alt: 'Planta arquitectónica de Casa Luke', height: 844, mediaType: 'image', path: '/media/projects/casa-luke/planta-arquitectonica.webp', width: 1500 }],
      diagrams: [
        { alt: 'Isométrico de Casa Luke', height: 563, mediaType: 'image', path: '/media/projects/casa-luke/isometrico.webp', width: 1000 },
        { alt: 'Análisis de asoleamiento y vientos de Casa Luke', height: 1800, mediaType: 'image', path: '/media/projects/casa-luke/asoleamiento-vientos.webp', width: 1260 },
      ],
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
