export type MediaType = 'image' | 'pdf';

export interface MediaAsset {
  alt: string;
  description?: string;
  fit?: 'contain' | 'cover';
  height?: number;
  mediaType: MediaType;
  originalName?: string;
  path: string;
  publicName?: string;
  width?: number;
}

export interface PublicDocument {
  id: string;
  title: string;
  description?: string;
  file: MediaAsset;
  publishedAt?: string;
}

export interface PlanSheet {
  code: string;
  height: number;
  pageCount: number;
  pdfPath: string;
  previewPath: string;
  title: string;
  width: number;
}

export interface PlanCategory {
  id: string;
  sheets: PlanSheet[];
  title: string;
}

export interface PlanLegend {
  title: string;
  entries: Array<{ number: number; label: string }>;
}

export interface ContactLink {
  label: string;
  href: string;
  value?: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Education {
  id: string;
  institution: string;
  program: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface SoftwareSkill {
  name: string;
  level?: string;
}

export interface Profile {
  name: string;
  professionalTitle: string;
  location?: string;
  introduction: string;
  biography: string[];
  specialties: string[];
  skills: Skill[];
  software: SoftwareSkill[];
  experience: Experience[];
  education: Education[];
  contact: ContactLink[];
  socialLinks: ContactLink[];
  portrait?: MediaAsset;
  cvDocumentId?: string;
}

export interface ProjectMedia {
  cover?: MediaAsset;
  gallery: MediaAsset[];
  renders: MediaAsset[];
  photographs: MediaAsset[];
  plans: MediaAsset[];
  planLegend?: PlanLegend;
  planCategories?: PlanCategory[];
  planIndex?: PublicDocument;
  diagrams: MediaAsset[];
  landscaping?: {
    description: string;
    images: MediaAsset[];
  };
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category?: string;
  type?: string;
  location?: string;
  year?: string;
  status?: string;
  area?: string;
  participation?: string;
  shortDescription: string;
  fullDescription?: string;
  concept?: string;
  designStrategy?: string;
  materials: string[];
  software: string[];
  media: ProjectMedia;
  documents: PublicDocument[];
  featured: boolean;
  displayOrder: number;
}
