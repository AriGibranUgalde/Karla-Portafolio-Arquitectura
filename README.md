# Karla Portafolio Arquitectura

Portafolio profesional estático de Karla González, arquitecta en Querétaro, México, construido con Next.js. El proyecto no usa CMS, panel administrativo, base de datos, autenticación ni backend.

La documentación rectora está en [`docs/portfolio-system/`](docs/portfolio-system/README.md). Debe consultarse antes de cambiar la arquitectura, el contenido o el despliegue.

## Requisitos

- Node.js 24 o superior.
- pnpm 11.19.0 o superior.

Comprueba las versiones instaladas:

```bash
node --version
pnpm --version
```

## Levantar el proyecto

Desde la raíz del repositorio:

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. El servidor detecta cambios en los archivos y actualiza la página durante el desarrollo.

## Comandos principales

| Comando | Uso |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo local. |
| `pnpm lint` | Revisa el código con ESLint. |
| `pnpm build` | Genera la versión optimizada de producción. |
| `pnpm start` | Sirve localmente una compilación ya generada con `pnpm build`. |
| `pnpm check` | Ejecuta lint y la compilación de producción. Úsalo antes de integrar cambios a `main`. |

Para comprobar la versión de producción de forma local:

```bash
pnpm build
pnpm start
```

El comando mostrará la URL local disponible, normalmente `http://localhost:3000`.

## Estructura de trabajo

```text
app/                     Rutas, componentes y estilos de la aplicación.
content/
  profile/               Perfil, experiencia, educación y habilidades.
  projects/              Proyectos estructurados y sus referencias.
  documents/             CV y documentos públicos.
  types.ts               Campos permitidos para todo el contenido.
public/
  media/
    profile/             Foto profesional y recursos de perfil optimizados.
    projects/            Imágenes optimizadas organizadas por proyecto.
    documents/           CV y documentos públicos descargables.
docs/portfolio-system/   Requisitos y decisiones canónicas del proyecto.
```

## Rutas públicas

| Ruta | Propósito |
| --- | --- |
| `/` | Inicio y selección de proyectos. |
| `/sobre-mi` | Perfil profesional. |
| `/proyectos` | Archivo de proyectos. |
| `/proyectos/proyecto-en-preparacion` | Plantilla de detalle de proyecto. |
| `/cv` | CV, experiencia, educación y herramientas. |
| `/contacto` | Canales profesionales de contacto. |

Durante la Fase 3 estas rutas muestran plantillas. La información real se incorporará a través de los archivos de `content/` en las fases 4 y 5.

`content/` guardará solo información estructurada y editable. `public/media/` guardará únicamente versiones web optimizadas que puedan publicarse. Los originales de alta resolución deben permanecer fuera del repositorio hasta clasificarlos y optimizarlos.

## Modelo de contenido

El sitio usa archivos TypeScript tipados, sin CMS ni base de datos. Consulta [`content/README.md`](content/README.md) antes de editar el perfil, los proyectos o los documentos. Los arreglos vacíos representan contenido pendiente de aprobación; no deben llenarse con información ficticia.

## Contenido y medios

- No publiques archivos de Drive sin revisarlos, clasificarlos y asociarlos a una sección del portafolio.
- Usa nombres descriptivos en minúsculas y con guiones, por ejemplo `casa-patio-01.webp`.
- Añade texto alternativo y metadatos al integrar una imagen en la Fase 5.
- No agregues datos personales sensibles, credenciales, llaves privadas ni archivos internos a `public/` o Git.
- El formato de perfil y proyectos está definido en `content/types.ts`.

## Variables de entorno

Actualmente el proyecto no requiere variables de entorno. No crees archivos `.env` o `.env.local` salvo que una funcionalidad futura los necesite y esté documentada. Nunca subas secretos al repositorio.

## Flujo de ramas

`main` representa una versión verificada e integrable. Cada fase se desarrolla en una rama `phase/NN-descripcion`, se valida con `pnpm check` y después se integra a `main`. Esto conserva puntos claros de recuperación sin usar el repositorio como almacenamiento de archivos originales.

## Fases

- Completada: Fase 1 — limpieza del proyecto anterior.
- Completada: Fase 2 — base de desarrollo local.
- Completada: Fase 3 — plantilla del portafolio.
- En curso: Fase 4 — modelo de contenido.
