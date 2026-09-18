# Deploy en Netlify — Vet Pedros

Guía para desplegar esta landing page en Netlify. El proyecto ya está **preparado y verificado** (build OK con todas las rutas SEO generadas).

## Preparación ya realizada

- `netlify.toml` — build `npm run build`, publish `.next`, y plugin `@netlify/plugin-nextjs` (instalado en `devDependencies`).
- `@netlify/plugin-nextjs@^5.16.0` — runtime de Next.js de Netlify (SSR/SSG, headers, redirects).
- `next@15.5.25` — versión parcheada (>= `15.5.7`), cumple CVE-2025-55182 (ver `docs/CVE-2025-55182-NETLIFY.md`).
- Seguridad en `next.config.mjs` vía `headers()` (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, X-DNS-Prefetch-Control, Permissions-Policy) + `poweredByHeader: false` + `compress: true`.
- Rutas de indexación generadas en build: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` + JSON-LD (schema.org `VeterinaryCare`) en el `<head>`.

## Pasos para desplegar

1. **Commit y push** del código al repositorio (GitHub/GitLab/Bitbucket).
2. En [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → selecciona el repo.
3. Netlify detecta `netlify.toml` y Next.js automáticamente. Verificar que quede:

   | Campo | Valor |
   |-------|-------|
   | Build command | `npm run build` |
   | Publish directory | `.next` |

4. **Deploy**. La build compila por completo; el site queda en `https://<nombre>.netlify.app`.
5. **Dominio propio (recomendado)**: en *Domain settings* → *Add a custom domain* (ej. `vetpedros.pe`) y sigue el registro DNS.

## URL canónica / SEO (IMPORTANTE antes de indexar)

El sitio usa la URL base en **`site.config.js`**:

```js
url: process.env.NEXT_PUBLIC_SITE_URL || "https://vetpedros.netlify.app"
```

- Con placeholder: sitemap/canonical/OG apuntan a `https://vetpedros.netlify.app`.
- Con dominio propio: define la env var `NEXT_PUBLIC_SITE_URL=https://vetpedros.pe` en **Site settings → Environment variables**, o edita `site.config.js`, y **re-despliega** (los metadatos se generan en build).

> El `.next` es estático respecto a la URL: si cambias de dominio, debes redeployar, no basta con cambiar DNS.

## Verificación post-deploy

- `https://<dominio>/robots.txt` → muestra `Sitemap: https://<dominio>/sitemap.xml`
- `https://<dominio>/sitemap.xml` → XML con `<loc>` y `<image:loc>`.
- `https://<dominio>/manifest.webmanifest` → JSON válido.
- Inspeccionar el HTML (Ctrl+U): title, description, canonical, `og:*`, `geo.*`, `ICBM` y `<script type="application/ld+json">` con el schema `VeterinaryCare`.

## Indexación en buscadores

1. **Google Search Console** → agrega la propiedad (prefijo de dominio) → verifica el `verification` (o DNS).
2. Enviar `sitemap.xml` → *Sitemaps* → `https://<dominio>/sitemap.xml`.
3. **Bing Webmaster Tools** → igual + submit URL (Importa de GSC).
4. **Google Business Profile / Maps**: la ficha del negocio debe coincidir con los datos NAP de `site.config.js` (dirección Elvira García y García 198, José Olaya, Chiclayo — teléfono +51 943 841 602 — horario Lun–Sáb 09:00–20:00). La coincidencia NAP refuerza el SEO local (GEO).

## Troubleshooting

- **Deploy falla con "CVE-2025-55182"**: no sucede con `next@15.5.25`. Nunca corras `npm audit fix --force` (rompería a Next 16). Ver `docs/CVE-2025-55182-NETLIFY.md`.
- **Leaflet no carga / mapa en blanco**: es client-only con `ssr: false` (patrón `Mapa.jsx` → `MapaLugar.jsx`); funciona sin cambios en Netlify.
- **Security headers**: si necesitas relajar el CSP/`Permissions-Policy` (ej. un futuro reproductor o geolocalización), edita `securityHeaders` en `next.config.mjs` y redeploya.