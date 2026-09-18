# Resumen — Preparación para Netlify + SEO + GEO (Vet Pedros)

Fecha de ejecución: 2026-09-18. Sin test/linter en el proyecto: la verificación de calidad es `npm run build` → **compiló sin errores** y generó todas las rutas esperadas.

## 1. Análisis del proyecto

Landing page SPA+SSR de la clínica veterinaria **Vet Pedros, en Chiclayo, Perú** (Est. 2005). Next.js 15.5.25 (App Router) + React 19 + Tailwind v4, JSX plano sin TS.

Datos reales del negocio usados: dirección **Elvira García y García 198, esq. Cajamarca, José Olaya – Chiclayo**; tel. **+51 943 841 602** (WhatsApp `wa.me/51943841602`); horario **Lun–Sáb 09:00–20:00**; Facebook `facebook.com/VetPdros/`; coordenadas del mapa **-6.7735692, -79.8546399**; servicios: consultas, vacunación, urgencias, laboratorio, cirugía, peluquería (+ ecografías/internamiento del copy base). ETAs: +25 años, +5.000 pacientes, desde 2005.

## 2. Deploy en Netlify

- **`netlify.toml`** (nuevo): build `npm run build`, publish `.next`, plugin `@netlify/plugin-nextjs`.
- **`@netlify/plugin-nextjs@^5.16.0`** instalado en `devDependencies`.
- **`next.config.mjs`**: `poweredByHeader: false`, `compress: true` y security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `X-DNS-Prefetch-Control`, `Permissions-Policy`). Sin CSP estricta para no romper fuentes de Google, tiles de OpenStreetMap ni el script JSON-LD/divIcon de Leaflet.
- `next@15.5.25` cumple CVE-2025-55182 (>= 15.5.7); no ejecutar `npm audit fix --force`.
- Guía completa: **`docs/DEPLOY-NETLIFY.md`**.

## 3. SEO

- **`site.config.js`** (nuevo): fuente única de datos NAP/URL/servicios/redes/horarios. URL base `process.env.NEXT_PUBLIC_SITE_URL || "https://vetpedros.netlify.app"` (placeholder — cambiable por env var).
- **`app/layout.jsx`** (editado): `metadata` completo — title default + template, description basada en copy real, keywords locales (veterinaria Chiclayo, José Olaya, urgencias, ecografía, peluquería…), `robots` + `googleBot`, canonical + hreflang `es`, Open Graph (`es_PE`, imagen `banner1.jpeg`), Twitter card, `icons` y `manifest`.
- **Raúl de headings** sin cambios (correctos: un `h1` en Hero, `h2` por sección, `h3` en cards).
- **Alt de imágenes** mejorado en Hero (2 imágenes) → "Clínica veterinaria Vet Pedros en Chiclayo".

## 4. GEO (SEO local)

- **JSON-LD `schema.org/VeterinaryCare`** inyectado en el `<head>` con: `address` (PostalAddress), `geo` (GeoCoordinates), `hasMap` (OpenStreetMap), `openingHoursSpecification`, `sameAs` (Facebook), `areaServed` (Chiclayo, Lambayeque), `foundingDate` 2005, `telephone`, `logo`, `image`. Sin datos inventados (no se añadió `aggregateRating`).
- **Meta geo tags** en `metadata.other`: `geo.region=PE-LAM`, `geo.placename=Chiclayo`, `geo.position`, `ICBM`.

## 5. Archivos de indexación

- **`app/sitemap.js`** (nuevo) → `/sitemap.xml`: loc absoluta, `changefreq weekly`, `priority 1`, `<image:image>` con hero y logo, `lastmod` build.
- **`app/robots.js`** (nuevo) → `/robots.txt`: allow all + `Sitemap:` + `Host:`.
- **`app/manifest.js`** (nuevo) → `/manifest.webmanifest`: name, theme_color #2563EB, background #FFFFFF, icon del logo.
- Favicon: ya apuntaba al logo (`/imgs/vetpedros/logovetpedros.png`), ahora también `apple-touch-icon`.

## 6. Verificación (build real)

`npm run build` → **✅ compiló** (Next 15.5.25). Rutas generadas:

| Ruta | Estado |
|------|--------|
| `/` | ○ static (6.41 kB, 110 kB First Load JS) |
| `/sitemap.xml` | ○ static (revalidate 1d) |
| `/robots.txt` | ○ static |
| `/manifest.webmanifest` | ○ static |

Comprobado en `.next/server/app/index.html`: title "Vet Pedros | Clínica Veterinaria en Chiclayo", description, keywords, canonical, OG/Twitter, meta geo y JSON-LD `VeterinaryCare` presentes. `sitemap.xml` genera las URLs absolutas con `https://vetpedros.netlify.app`.

## 7. Archivos modificados/creados

**Nuevos:** `site.config.js`, `netlify.toml`, `app/sitemap.js`, `app/robots.js`, `app/manifest.js`, `docs/DEPLOY-NETLIFY.md`, `docs/RESUMEN.md`.

**Modificados:** `app/layout.jsx` (metadata + JSON-LD), `next.config.mjs` (headers/seguridad), `components/Hero.jsx` (alt), `package.json`/`package-lock.json` (plugin Netlify), `README.md`, `AGENTS.md`.

## 8. Pendiente antes de indexar (acción del usuario)

1. Desplegar y decidir **dominio final**; si no es `.netlify.app`, setear `NEXT_PUBLIC_SITE_URL` en Netlify y **re-desplegar** (HTML estático respecto a la URL).
2. Enviar `sitemap.xml` en **Google Search Console** y **Bing Webmaster Tools**.
3. Alinear la ficha de **Google Business Profile** con los datos NAP (dirección, teléfono, horarios) para reforzar el GEO.