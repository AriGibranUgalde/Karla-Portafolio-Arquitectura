# Portfolio System Design

## Purpose
Main architectural reference for the professional architecture portfolio.

The existing university project is only a technical starting point. Previous academic identity, firm, construction company, institutional content, and unrelated project data must not be preserved.

The final system is a:

**Professional Personal Architecture Portfolio**

It is not a CMS and does not require an administrative panel.

## Core Principles
- Personal professional portfolio only.
- Local-first development.
- Production-ready architecture.
- Secure by design.
- Portable and not tightly coupled to OCI.
- Fast and optimized for architecture imagery.
- Easy to maintain.
- Simple content structure.
- Avoid unnecessary complexity.

## Conceptual Architecture

Content Source  
↓  
Structured Content Files  
↓  
Portfolio Application  
↓  
Static or Server-Rendered Production Build  
↓  
Public Website

Images and Documents  
↓  
Local Assets during development  
↓  
Production Storage when deployed

## Content Editing Strategy
Content may be updated directly through:
- Markdown / MDX.
- JSON / YAML.
- TypeScript data.
- Framework-native content collections.
- Organized project folders.

Choose the simplest approach supported well by the existing framework.

## Database Policy
Do not add a database by default.

A database should only be introduced later if a real feature requires persistent dynamic state.

## Development Strategy
The complete application must work locally before deployment.

**Local Development → Validation → Production Build → OCI Deployment**

OCI is production infrastructure, not a required dependency for development.
