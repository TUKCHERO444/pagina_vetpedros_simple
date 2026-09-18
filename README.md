# Vet Pedros — Landing Page

Landing page SPA con SSR usando Next.js (App Router), React 19 y Tailwind CSS v4.

Ver `docs/ARQUITECTURA.md` para la documentación completa de arquitectura y convenciones, `docs/CVE-2025-55182-NETLIFY.md` para el requisito de versión mínima de Next.js, `docs/DEPLOY-NETLIFY.md` para desplegar en Netlify y `docs/RESUMEN.md` para el resumen de los trabajos SEO/GEO/deploy.

Datos del negocio (NAP, URL, horarios, redes, servicios) centralizados en **`site.config.js`**; los archivos SEO/GEO derivan de ahí (`app/sitemap.js`, `app/robots.js`, `app/manifest.js`, JSON-LD en `app/layout.jsx`).

## Tech Stack

- Next.js 15.x (App Router) — Server Components por defecto
- React 19
- Tailwind CSS v4 (`@theme`, sin `tailwind.config.js`)
- JSX plano (sin TypeScript)

## Getting Started

```bash
npm install
npm run dev      # desarrollo local (localhost:3000)
npm run build    # build de producción
npm run start    # servir build de producción
```

## Deploy en Netlify

Listo para Netlify (`netlify.toml` + `@netlify/plugin-nextjs`). Ver `docs/DEPLOY-NETLIFY.md`. Antes de desplegar: `npm run build` sin errores. Si usas dominio propio, define `NEXT_PUBLIC_SITE_URL` en las env vars de Netlify.
