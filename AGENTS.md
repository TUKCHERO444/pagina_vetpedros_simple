# AGENTS.md

Landing page de **clínica veterinaria** construida como **plantilla reutilizable** (base de un template de gimnasio). **Personalizada actualmente para "Vet Pedros"**. SPA con SSR: Next.js 15 (App Router) + React 19 + Tailwind v4, **JSX plano (sin TypeScript, sin ESLint)**.

> **IMPORTANTE — es una PLANTILLA reutilizable.** Ya está personalizada para **Vet Pedros** pero puede reutilizarse para otra veterinaria. Los assets reales de Vet Pedros están en `public/imgs/vetpedros/`. Al personalizar para OTRA veterinaria hay que reemplazar TODOS estos puntos — si falla uno, la marca queda mezclada:
> - Marca/logo ("Vet Pedros") y links en `components/Header.jsx`
> - `metadata` (title/description) en `app/layout.jsx` **y** los datos NAP/URL/servicios en `site.config.js` (fuente de `sitemap`, `robots`, `manifest` y JSON-LD)
> - Corporativo de marca en `design.md` **Y los tokens `@theme` que refleja en `app/globals.css`** (siempre juntos)
> - Datos de contacto/WhatsApp/horarios en `components/Ubicacion.jsx` y `components/WhatsAppButton.jsx`
> - Textos del negocio en `Hero.jsx` (`textSlides`), `Servicios.jsx`, `Nosotros.jsx`, `Tienda.jsx`, `Footer.jsx`
> - Imágenes vía rutas relativas en cada componente (`public/imgs/vetpedros/…`)
> - Texto base del negocio en `docs/frase.txt`

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # desarrollo local (localhost:3000)
npm run build   # build de producción (verificar antes de desplegar)
npm start       # servir build de producción
```

No hay tests, linter ni typecheck configurados. `npm run build` es la única verificación de calidad.

## Stack & convenciones verificadas

- **Iconos**: `@phosphor-icons/react`. En **Server Components importar desde `@phosphor-icons/react/ssr`** (la entrada por defecto rompe la recolección RSC: `createContext is not a function`). En client components vale la entrada normal.
- **Sin TypeScript**: los archivos son `.jsx` (no `.tsx`). No añadir TS, tipos no importados (`import type`, `LayoutProps<...>`), ni `next-env.d.ts`/`tsconfig.json` — fueron eliminados a propósito.
- **Server Components por defecto**; solo marcar `"use client"` en componentes con estado, efectos o handlers. Componentes client actuales: `Header`, `Reveal`, `Mapa`, `MapaLugar`, `WhatsAppButton`. El resto (`Hero`, `Servicios`, `Nosotros`, `Tienda`, `Ubicacion`, `Footer`, `WaveDivider`) son server.
- **Componentes pesados** (Leaflet): importar con `next/dynamic` + `ssr: false` (ver patrón `components/Mapa.jsx` → `MapaLugar.jsx`).
- **`Reveal.jsx`** es un componente client reutilizable (IntersectionObserver + `prefers-reduced-motion`) que envuelve casi todas las secciones; acepta `delay` y `as`.
- **Tailwind v4**: design tokens en `app/globals.css` con `@theme`. **Paleta actual (Vet Pedros)**: tríada equilibrada `--color-primary`=azul `#2563EB` (salud/clínica), `--color-accent`=oro opaco `#B5892D` (tienda), `--color-red*`=rojo `#DC2626` (marca/CTAs/urgencias); extras cálidos `--color-ember*` (naranja semi-fuerte) y `--color-sun*` (amarillo-naranja suave) solo en secciones concretas; base blanca cristalina (`--color-ink`, `paper/surface*`). **No hay `tailwind.config.js`** — no crearlo. Tokens se usan como clases (`bg-primary`, `font-heading`). Paleta autoritativa (tríada + blanco cristalino) en `design.md` — cambiar tokens Y ese documento.
- **Fuentes** (Inter + Oswald) vía Google Fonts `<link>` en `app/layout.jsx`, no con `next/font`. Su uso en clases: `font-heading` (Oswald, títulos) y `font-body` (Inter, cuerpo).
- **Path alias** `@/*` → raíz del proyecto via `jsconfig.json` (importar como `@/components/Header`).
- `<html lang="es">`, scroll suave + `scroll-padding-top: 80px` en `globals.css`.

## Estructura real (difiere del docs de referencia)

- `app/` — `layout.jsx` (server, fonts, metadata completo SEO/GEO + JSON-LD VeterinaryCare), `page.jsx` (compone secciones), `globals.css`, `sitemap.js` (/sitemap.xml), `robots.js` (/robots.txt), `manifest.js` (/manifest.webmanifest)
- `app/page.jsx` orden de secciones: `Header → main(Servicios, Nosotros, Tienda, Ubicacion) → Footer` + `WhatsAppButton` flotante
- `site.config.js` — **fuente única de datos del negocio** (NAP, URL base, horarios, redes, servicios, coordenadas). La usan `layout.jsx` (metadata + JSON-LD), `sitemap.js`, `robots.js` y `manifest.js`. La URL base es `process.env.NEXT_PUBLIC_SITE_URL || "https://vetpedros.netlify.app"`.
- `netlify.toml` — deploy: build `npm run build`, publish `.next`, plugin `@netlify/plugin-nextjs` (instalado en devDeps)
- `components/` — un archivo por sección (ver lista client/server arriba). `WaveDivider.jsx` = divisor con ola entre secciones (`fill` = color de la sección anterior)
- `public/imgs/` (subcarpetas `servicios/`, `vetpedros/`), `public/hero/slide-*.jpg`

## Documentación autoritativa

- `docs/ARQUITECTURA.md` — arquitectura de esta página descrita como **plantilla reutilizable** (estructura real, patrones, checklist de personalización para nueva veterinaria)
- `docs/CVE-2025-55182-NETLIFY.md` — **crítico para deploys**.
- `docs/DEPLOY-NETLIFY.md` — pasos de deploy en Netlify + verificación SEO post-deploy.
- `docs/RESUMEN.md` — resumen de lo ejecutado (SEO/GEO/deploy).
- `docs/frase.txt` — copy base del negocio.

## Gotcha de deploy (NO ignorar)

Next.js está fijado a `^15.5.25`. **No downgradear por debajo de `15.5.7` (o `16.0.7`)** — Netlify bloquea el deploy por CVE-2025-55182 (RCE en React Server Functions). Antes de desplegar: `npm run build` sin errores y confirmar `package.json` tiene una versión parcheada.

> Actualmente instalado: `next@15.5.25`. `npm audit` reporta vulnerabilidades en el `postcss` transitivo de Next 15 — ignorar `npm audit fix --force` (forzaría un upgrade rompedor a Next 16; no es necesario para despliegues válidos).
