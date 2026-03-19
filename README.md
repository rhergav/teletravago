# teletravago.com

Blog personal sobre tecnología, trabajo remoto y viajes. Construido con [Astro](https://astro.build) y Tailwind CSS.

## Desarrollo local

1. Instala las dependencias: `npm install`
2. Arranca el servidor de desarrollo: `npm run dev`
3. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Escribir un post

Crea un archivo Markdown (`.md`) en `src/pages/posts/`. Añade el frontmatter necesario al inicio del archivo:

```md
---
layout: ../../layouts/post.astro
title: "Título del post"
pubDate: YYYY-MM-DD
description: "Breve descripción"
author: "teletravago"
isPinned: false
excerpt: Texto introductorio...
tags: ["etiqueta1", "etiqueta2"]
---

Aquí va el contenido en Markdown...
```

## Despliegue

El sitio se despliega automáticamente en GitHub Pages. Un GitHub Actions workflow (`.github/workflows/deploy.yml`) se encarga de construir la web y publicarla cada vez que se hace un `git push` a la rama `main`.
