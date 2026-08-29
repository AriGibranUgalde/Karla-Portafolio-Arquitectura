# Content Data Model

## Default Strategy
Prefer file-based structured content unless a database becomes necessary later.

Possible sources:
- Markdown / MDX.
- JSON.
- YAML.
- TypeScript data files.
- Framework content collections.

## Project Data
Conceptual fields:
- id
- name
- slug
- category
- type
- location
- year
- status
- area
- participation
- short_description
- full_description
- concept
- design_strategy
- materials
- software
- cover
- featured
- display_order
- gallery
- renders
- plans
- diagrams
- documents

## Media References
Files should be referenced by path, URL, or storage key.

Possible metadata:
- original_name
- public_name
- media_type
- mime_type
- path
- url
- width
- height
- alt_text
- description

## Database Policy
Do not add a database by default.

A database should only be introduced later if a real feature requires:
- Dynamic user-generated content.
- Complex querying.
- Authentication.
- Persistent application state.
- Other functionality that cannot be handled cleanly with static content.

For the current portfolio scope, a database is not required.
