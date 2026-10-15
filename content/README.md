# Contenido del portafolio

Este directorio es la fuente de contenido del sitio. Se usa TypeScript porque el proyecto ya lo utiliza y permite validar cada campo al compilar, sin CMS ni base de datos.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `profile/index.ts` | Perfil, experiencia, educación, habilidades, software y enlaces públicos. |
| `projects/index.ts` | Proyectos y funciones para localizarlos u ordenarlos. |
| `documents/index.ts` | CV y documentos públicos descargables. |
| `types.ts` | Campos permitidos y reglas de estructura. |

## Añadir contenido

1. Clasifica el material antes de publicarlo, siguiendo `docs/portfolio-system/CONTENT_INGESTION_WORKFLOW.md`.
2. Coloca solo recursos web optimizados en `public/media/`.
3. Referencia esos recursos por ruta, por ejemplo `'/media/projects/casa-patio/portada.webp'`.
4. Añade texto alternativo útil a cada imagen pública.
5. Ejecuta `pnpm check` antes de solicitar un commit.

No inventes fechas, clientes, ubicaciones, datos de contacto o credenciales. Los arreglos vacíos indican que no se publica información en esa categoría; no añadas datos sin confirmación de la autora.

## Proyecto mínimo

Un proyecto requiere `id`, `slug`, `name`, `shortDescription`, `materials`, `software`, `media`, `documents`, `featured` y `displayOrder`. El resto de los campos es opcional para permitir distintos tipos de proyecto.
