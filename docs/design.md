# Design — Vet Pedros

Documento autoritativo de identidad visual de la plantilla, personalizada para **Vet Pedros**. Cambios de identidad actualizan este archivo **y** los tokens `@theme` en `app/globals.css` **juntos**.

---

## 1. Paleta — Tríada Equilibrada + Blanco Cristalino

Tríada equilibrada: azul (salud), rojo (marca/urgencia), oro opaco (tienda). Base blanca cristalina con superficies sutiles.

### 1.1 Primary — Azul Salud

Rol: salud, clínica, confianza. Se usa en badges, labels de sección, iconos de servicio, sombras sutiles, bordes hover, y números de stats.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#2563EB` | Base — iconos servicio, PawPrint, sombras `shadow-primary/5` |
| `primary-dark` | `#1D4ED8` | Hover de badges |
| `primary-deep` | `#1E40AF` | Labels de sección, texto en chips, CTA health (con texto blanco — AA) |
| `primary-night` | `#1E3A8A` | Hover/pressed CTA salud, marcador mapa Leaflet |
| `primary-light` | `#60A5FA` | Selección de texto (`::selection`), círculos decorativos |
| `primary-soft` | `#93C5FD` | Bordes de badges hover |
| `primary-pale` | `#DBEAFE` | Fondos de icon badges (default), gradientes decorativos |
| `primary-paler` | `#EFF6FF` | (definido, disponible para uso futuro) |

**Distribución por componente:**
- `Hero.jsx` — badge borde `border-primary-soft`, texto `text-primary-deep`, confianza icono `text-primary-dark`, gradiente decorativo
- `Servicios.jsx` — label sección `text-primary-deep`, icon badge default `bg-primary-pale/90` + `text-primary-dark`, hover `bg-primary` + `text-white`, sombra `shadow-primary/5`
- `Nosotros.jsx` — label sección `text-primary-deep`, chips valor `text-primary-deep`, stat numbers `text-primary-dark`, gradiente decorativo `from-surface-soft via-paper to-primary-pale`, círculo decorativo `bg-primary-light/30`, hover bordes `border-primary-soft`, sombra `shadow-primary/5`
- `Ubicacion.jsx` — label sección `text-primary-deep`, icon badge contacto default `bg-primary-pale` + `text-primary-dark`, hover `bg-primary-deep` + `text-white`, borde hover `border-primary-soft`, sombra `shadow-primary/5`
- `Header.jsx` — PawPrint icon `text-primary`

### 1.2 Accent — Oro Opaco

Rol: tienda, productos, tags, CTA de compra. Solo en la sección Tienda y acentos puntuales.

| Token | Hex | Uso |
|-------|-----|-----|
| `accent` | `#B5892D` | Base — CTA tienda con texto blanco (AA) |
| `accent-dark` | `#926B1E` | Label sección tienda, icon badge hover, CTA tienda default |
| `accent-night` | `#6E5115` | Hover CTA tienda |
| `accent-soft` | `#E3C565` | Borde hover cards tienda |
| `accent-pale` | `#F5E9BF` | Fondos icon badges tienda, tag pills, círculo decorativo |

**Distribución por componente:**
- `Tienda.jsx` — label `text-accent-dark`, icon badge `bg-accent-pale` + `text-accent-dark`, hover `bg-accent-dark` + `text-white`, tag pills `bg-accent-pale` + `text-accent-dark`, CTA `bg-accent-dark` sombra `shadow-accent/20`, hover `hover:bg-accent-night`, borde hover `hover:border-accent-soft`, sombra card `shadow-accent/5`, círculo decorativo `bg-accent-pale/60`
- `Ubicacion.jsx` — círculo decorativo `bg-accent-soft/40`
- `Header.jsx`, `Nosotros.jsx`, `Footer.jsx` — "Vet" en brand mark `text-accent-dark`

### 1.3 Red — Rojo Marca

Rol: marca, CTAs principales, urgencias, WhatsApp flotante. El color de acción más fuerte de la paleta.

| Token | Hex | Uso |
|-------|-----|-----|
| `red` | `#DC2626` | Base — CTA Hero, badge urgencia hover, social icon hover, "Pedros" brand mark |
| `red-dark` | `#B91C1C` | Hover CTA Hero, texto urgencia |
| `red-deep` | `#991B1B` | CTA Contacto Header/WhatsApp, icon badge urgencia default, contacto badge hover |
| `red-night` | `#7F1D1D` | Hover CTA Contacto/WhatsApp |
| `red-soft` | `#FCA5A5` | (definido, disponible) |
| `red-pale` | `#FEE2E2` | Icon badge urgencia default fondo |

**Distribución por componente:**
- `Hero.jsx` — CTA primario `bg-red` + `text-white` sombra `shadow-red/20`, hover `bg-red-dark`, sparkle badge `text-red`, gradiente texto `from-red-deep`
- `Header.jsx` — "Pedros" brand mark `text-red`, CTA Contacto `bg-red-deep` + `text-white` sombra `shadow-red/20`, hover `bg-red-night`
- `Servicios.jsx` — icon badge urgencia default `bg-red-pale/90` + `text-red-dark`, hover `bg-red` + `text-white`
- `WhatsAppButton.jsx` — fondo `bg-red-deep` sombra `shadow-red/30`, hover `bg-red-night`
- `Footer.jsx` — "Pedros" brand mark `text-red`, social icons borde `border-red/20` hover `border-red` + `hover:bg-red`, nav tag hover `hover:text-red-dark`
- `Nosotros.jsx` — "Pedros" brand mark `text-red`

### 1.4 Ember — Naranja Semi-Fuerte

Rol: acento puntual en contactos, hover de navegación. Solo en Footer e Header.

| Token | Hex | Uso |
|-------|-----|-----|
| `ember` | `#EA580C` | Iconos de contacto en Footer (MapPin, Phone, Envelope) |
| `ember-dark` | `#C2410C` | Hover de links de navegación (Header desktop + Footer servicios) |
| `ember-pale` | `#FFEDD5` | Hover fondo links navegación móvil (Header) |

**Distribución por componente:**
- `Footer.jsx` — contact icons `text-ember`, servicio link hover `text-ember-dark`, bottom border `border-ember/15`
- `Header.jsx` — nav link hover desktop `text-ember-dark`, mobile nav hover `hover:bg-ember-pale` + `text-ember-dark`

### 1.5 Sun — Amarillo-Naranja Suave

Rol: fondos cálidos de header, footer y overlays de hero/tienda. Solo `sun-pale` está en uso activo.

| Token | Hex | Uso |
|-------|-----|-----|
| `sun` | `#F59E0B` | (definido, sin uso activo en componentes) |
| `sun-pale` | `#FEF3C7` | Header bg, Footer bg, Hero overlay, Tienda section overlay |

**Distribución por componente:**
- `Header.jsx` — fondo barra `bg-sun-pale/80`, borde `border-sun-pale/60`
- `Footer.jsx` — fondo `bg-sun-pale/80`
- `Hero.jsx` — gradiente overlay `from-sun-pale/95 via-sun-pale/65 to-transparent`
- `Tienda.jsx` — gradiente overlay sección `from-sun-pale/90 via-sun-pale/85 to-sun-pale/95`

### 1.6 Ink — Texto

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` | `#0F172A` | Texto principal — headings, títulos, valor de stats |
| `ink-muted` | `#475569` | Texto secundario — descripciones, párrafos, labels, copyright |
| `mist` | `#94A3B8` | (definido, disponible) |

### 1.7 Neutros — Fondos y Bordes

| Token | Hex | Uso |
|-------|-----|-----|
| `paper` | `#FFFFFF` | Fondo base, cards, secciones blancas |
| `surface` | `#F8FBFF` | Secciones alternas (Servicios bg, WaveDivider) |
| `surface-soft` | `#F0F7FE` | Stat cards (Nosotros), mapa loading, gradiente decorativo |
| `line` | `#E2E8F0` | Bordes de cards, divisores, separadores |
| `line-soft` | `#EEF4F9` | (definido, disponible) |

### 1.8 Night — Modo oscuro (disponible, sin uso activo)

| Token | Hex | Uso |
|-------|-----|-----|
| `night` | `#0B2540` | (definido, sin uso en componentes) |
| `night-card` | `#16324F` | (definido, sin uso en componentes) |
| `night-ink` | `#E0F2FE` | (definido, sin uso en componentes) |
| `night-muted` | `#9FB6CC` | (definido, sin uso en componentes) |

---

## 2. Reglas de Distribución de Color

### 2.1 Asignación por dominio

| Dominio | Color principal | Razonamiento |
|---------|----------------|--------------|
| Salud / clínica / servicios | `primary` (azul) | Confianza, profesionalismo médico |
| Tienda / productos | `accent` (oro) | Cálido, comercial, diferenciado del servicio |
| Marca / CTAs principales / urgencias | `red` | Urgencia, acción, identidad de marca |
| Contacto (íconos) | `ember` | Calidez en datos de contacto |
| Fondos cálidos (header/footer/overlays) | `sun-pale` | Transición cálida sin competir con CTAs |
| Texto | `ink` / `ink-muted` | Legibilidad sobre blanco |
| Fondos / superficies | `paper` / `surface` / `surface-soft` | Blancura cristalina con sutiles diferenciaciones |

### 2.2 Reglas de contraste (WCAG AA)

- Texto blanco (`#FFFFFF`) **solo** sobre variantes `*-deep`, `*-night`, o `*-dark` (nunca sobre color base — no alcanza AA)
- `text-ink` sobre `paper` o `surface` → contraste > 15:1 (AAA)
- `text-ink-muted` sobre `paper` → contraste > 7:1 (AAA)
- `text-red-deep` sobre `red-pale` → contraste verificado
- `text-primary-deep` sobre `primary-pale` → contraste verificado

### 2.3 Reglas de uso

- El **azul (`primary`)** se reserva a salud/clínica — no usar para CTAs comerciales ni urgencias
- El **oro (`accent`)** se reserva a la tienda — no usar en servicios ni contacto
- El **rojo (`red`)** es para CTAs principales, marca y urgencias — es el color de acción más fuerte
- Los **naranjas (`ember`)** y **amarillos (`sun`)** solo como acento puntual en secciones concretas
- Los tokens `night` (modo oscuro) están definidos pero sin uso activo — disponibles para implementación futura

---

## 3. Tipografía

| Familia | Token Tailwind | Rol | Pesos |
|---------|---------------|-----|-------|
| **Oswald** | `font-heading` | Títulos, headings, números grandes, labels de sección | 400, 500, 600, 700 |
| **Inter** | `font-body` | Cuerpo de texto, descripciones, UI | 400, 500, 600, 700 |

- Oswald siempre con `uppercase` + `tracking-wide` en headings
- Inter para todo texto de lectura
- Cargadas via Google Fonts `<link>` en `app/layout.jsx` (no `next/font`)

---

## 4. Brand Mark

Uso consistente en Header, Footer y Nosotros:

- **"Vet"** → `text-accent-dark` (oro opaco)
- **"Pedros"** → `text-red` (rojo marca)
- **PawPrint icon** → `text-primary` (azul salud)

---

## 5. Sombras y Elevación

| Clase | Uso |
|-------|-----|
| `shadow-primary/5` | Cards de servicio, About card, stat cards, mapa container |
| `shadow-primary/20` | CTA Contacto (Header), badges |
| `shadow-red/20` | CTA Hero buttons |
| `shadow-red/30` | WhatsApp flotante |
| `shadow-accent/5` | Product cards hover |
| `shadow-accent/20` | CTA Tienda |

---

## 6. Fondos por Sección

| Sección | Fondo | WaveDivider fill (color sección anterior) |
|---------|-------|------------------------------------------|
| Header | `bg-sun-pale/80` (translucent) | — |
| Hero | `bg-paper` + gradiente `from-sun-pale` | — |
| Servicios | `bg-surface` (#F8FBFF) | `#FFFFFF` (paper — Hero) |
| Nosotros | `bg-paper` | `#F8FBFF` (surface — Servicios) |
| Tienda | `bg-sun-pale` overlay | `#FFFFFF` (paper — Nosotros) |
| Ubicacion | Gradiente `from-paper via-surface-soft to-primary-pale` | `#F8FBFF` (surface — Tienda) |
| Footer | `bg-sun-pale/80` | — |

---

## 7. Tokens No Usados (disponibles)

Los siguientes tokens están definidos en `globals.css` pero no se usan en ningún componente actualmente. Están disponibles para uso futuro o extensión de la plantilla:

- `--color-primary-paler` (#EFF6FF)
- `--color-red-soft` (#FCA5A5)
- `--color-sun` (#F59E0B) — solo `sun-pale` está en uso
- `--color-mist` (#94A3B8)
- `--color-line-soft` (#EEF4F9)
- `--color-night`, `--color-night-card`, `--color-night-ink`, `--color-night-muted` (bloque night completo)
