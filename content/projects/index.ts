import type { Project } from '../types';

export const projects: Project[] = [];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featured)
    .sort((first, second) => first.displayOrder - second.displayOrder);
}
