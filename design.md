# Design — Identity Visual · Vet Pedros

> Fuente de verdad de la identidad visual. Reflejada en los tokens de `app/globals.css` (`@theme`). Cualquier cambio de identidad debe actualizar este documento Y los tokens.

## Concepto

**"Cuidado serio, cercano y transparente."**

Vet Pedros es una clínica veterinaria cuyo color institucional se apoya en una **tríada equilibrada de oro opaco, rojo y azul** (los colores de su logo e identidad pública), sin que ninguno domine sobre los otros. Como todo centro médico, el sitio se asienta sobre una **base blanca, cristalina y profesional** — transparencias, degradados claros y mucha luz que dan la sensación de salud y limpieza — para que la marca dialogue con la confianza médica que el público espera.

1. **Clínica** → azul (salud, confianza, profesionalismo).
2. **Urgencias / marca / CTAs** → rojo (cercanía, energía, urgencia, corazón).
3. **Tienda / acentos cálidos** → oro opaco (calidez, cuidado, confort).

Accent de apoyo: **naranjas semi-fuertes** y **tonos amarillo-naranja suaves** que solo aparecen en secciones concretas (badges, CTAs secundarios, destellos cálidos), nunca como tinte general.

El resultado es un sitio **predominantemente blanco** que reparte por igual sus tres colores de marca por familias de secciones, mantenido fresco y luminoso: ni frío ni pesado.

---

## 1. Paleta de colores

### Tríada de marca (equilibrada)

La distribución **equitativa** fija una familia de marca por grupo de secciones:

| Color de marca | Rol | Dónde vive |
|----------------|-----|------------|
| **Azul** | Salud/clínica | Servicios, Nosotros, acentos de consultas/estudios |
| **Rojo** | Marca / CTAs principales / urgencias | Header, CTAs "Contacto"/"Nuestros servicios", WhatsApp, Urgencias |
| **Oro opaco** | Tienda / calidez | Tienda, acentos cálidos |

### Azul (primary — salud/clínica)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Azul Marca | `#2563EB` | rgb(37,99,235) | Acentos de display, gradientes, iconos grandes de salud |
| Azul Oscuro | `#1D4ED8` | rgb(29,78,216) | Iconos pequeños (≥3:1), títulos acento |
| Azul Profundo | `#1E40AF` | rgb(30,64,175) | CTAs de salud con texto blanco (8.1:1 AA/AAA) |
| Azul Noche | `#1E3A8A` | rgb(30,58,138) | Hover/pressed de CTAs de salud (9.4:1 AAA) |
| Azul Pastel | `#60A5FA` | rgb(96,165,250) | Fills, iconos sobre claro |
| Azul Suave | `#93C5FD` | rgb(147,197,253) | Bordes suaves, pilas de color |
| Azul Pálido | `#DBEAFE` | rgb(219,234,254) | Fondos de tile/select, badges |
| Azul Paler | `#EFF6FF` | rgb(239,246,255) | Fondos de sección muy claros |

### Rojo (carmesí — marca / urgencias)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Rojo Marca | `#DC2626` | rgb(220,38,38) | Marca, logo, acentos de urgencia, iconos |
| Rojo Oscuro | `#B91C1C` | rgb(185,28,28) | Iconos secundarios, títulos acento |
| Rojo Profundo | `#991B1B` | rgb(153,27,27) | CTAs rojos con texto blanco (6.3:1 AA) |
| Rojo Noche | `#7F1D1D` | rgb(127,29,29) | Hover/pressed de CTAs rojos (8.1:1 AAA) |
| Rojo Suave | `#FCA5A5` | rgb(252,165,165) | Bordes suaves de urgencia |
| Rojo Pálido | `#FEE2E2` | rgb(254,226,226) | Badges/fills de urgencia (con rojo profundo: ≥4.5:1) |

### Oro Opaco (accent — tienda)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Oro Opaco | `#B5892D` | rgb(181,137,45) | Iconos y acentos de tienda |
| Oro Oscuro | `#926B1E` | rgb(146,107,30) | CTAs de tienda con texto blanco (4.9:1 AA) |
| Oro Noche | `#6E5115` | rgb(110,81,21) | Hover/pressed de CTAs de tienda (7.1:1 AA) |
| Oro Suave | `#E3C565` | rgb(227,197,101) | Acentos pastel de tienda |
| Oro Pálido | `#F5E9BF` | rgb(245,233,191) | Badges/fills de tienda (con oro oscuro: 4.6:1) |

### Acentos cálidos (naranja semi-fuerte + amarillo-naranja suave)
> Solo en secciones concretas; no como tinte general.

| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Brasa | `#EA580C` | rgb(234,88,12) | Badges/CTAs secundarios cálidos (naranja semi-fuerte) |
| Brasa Oscura | `#C2410C` | rgb(194,65,12) | CTA naranja con texto blanco (4.7:1 AA) |
| Brasa Pálida | `#FFEDD5` | rgb(255,237,213) | Fills naranja muy claros |
| Sol | `#F59E0B` | rgb(245,158,11) | Acento amarillo-naranja suave |
| Sol Pálido | `#FEF3C7` | rgb(254,243,199) | Fills amarillo suave |

### Neutros (clínicos y luminosos)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Tinta | `#0F172A` | rgb(15,23,42) | Texto principal sobre fondos claros (17.9:1) |
| Tinta Media | `#475569` | rgb(71,85,105) | Texto secundario/cuerpo (7.6:1) |
| Neblina | `#94A3B8` | rgb(148,163,184) | Texto muted puntual (solo grande/decorativo) |
| Línea | `#E2E8F0` | rgb(226,232,240) | Bordes, divisores |
| Línea Suave | `#EEF4F9` | rgb(238,244,249) | Bordes muy finos / vidrio |
| Papel | `#FFFFFF` | rgb(255,255,255) | Fondo base del sitio |
| Superficie | `#F8FBFF` | rgb(248,251,255) | Secciones/cards alternas |
| Superficie Suave | `#F0F7FE` | rgb(240,247,254) | Tintes azulados sobre blanco |

### Profundos (ancoraje / pie)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Noche | `#0B2540` | rgb(11,37,64) | Footer/banda profunda (texto claro 12:1) |
| Noche Card | `#16324F` | rgb(22,50,79) | Cards/bandas sobre Noche |
| Noche Tinta | `#E0F2FE` | rgb(224,242,254) | Texto principal sobre Noche |
| Noche Muted | `#9FB6CC` | rgb(159,182,204) | Texto secundario sobre Noche (7.6:1) |

### Accesibilidad (WCAG verificada)
| Combinación | Ratio | Nivel |
|-------------|-------|-------|
| Blanco sobre Azul Profundo (CTA salud) | 8.1:1 | AAA |
| Blanco sobre Azul Noche (CTA hover) | 9.4:1 | AAA |
| Blanco sobre Rojo Profundo (CTA marca/urgencia) | 6.3:1 | AA |
| Blanco sobre Rojo Noche (CTA hover) | 8.1:1 | AAA |
| Blanco sobre Oro Oscuro (CTA tienda) | 4.9:1 | AA |
| Blanco sobre Oro Noche (CTA hover) | 7.1:1 | AA |
| Blanco sobre Brasa Oscura (CTA naranja) | 4.7:1 | AA |
| Tinta sobre Papel (body) | 17.9:1 | AAA |
| Tinta Media sobre Papel (cuerpo sec.) | 7.6:1 | AAA |
| Tinta sobre Azul Pastel (badge) | 8.1:1 | AAA |
| Rojo Profundo sobre Rojo Pálido (badge urgencia) | 4.6:1 | AA |
| Oro Oscuro sobre Oro Pálido (badge tienda) | 4.6:1 | AA |
| Noche Tinta sobre Noche (footer) | 11.9:1 | AAA |
| Noche Muted sobre Noche | 7.6:1 | AAA |

> Reglas: el **azul** a la salud/clínica; el **rojo** a la marca y urgencias; el **oro opaco** a la tienda. Los **naranjas/amarillos** solo como acento puntual, nunca como tinte de sección completa. Blanco sobre `#2563EB`/`#DC2626`/`#B5892D` base no alcanza AA → los botones siempre usan variantes Profundo/Noche/Oscuro.

### Reglas de uso de color
- Sitio **predominantemente blanco** con tintes claros por sección (degradados cristalinos blancos→azul muy suave) — sensación médica de salud y limpieza.
- **60/30/10**: ~60% blancos/aguas claras, ~30% tríada (azul, rojo, oro) distribuida de forma equilibrada, ~10% acentos cálidos (naranja/amarillo).
- La tríada se reparte por **familias de secciones** (ver tabla arriba) para lograr el equilibrio sin que un color domine.
- No usar más de 2-3 colores por componente.
- No usar gris `#94A3B8` para cuerpo (usar Tinta Media).
- Nunca depender solo del color para significado (acompañar con iconos/etiquetas).

---

## 2. Tipografía

Fuentes cargadas vía Google Fonts `<link>` en `app/layout.jsx` (no `next/font`).

| Rol | Fuente | Uso |
|-----|--------|-----|
| Heading | **Oswald** (`font-heading`) | Títulos, display, números grandes. Impacto moderno y limpio |
| Body | **Inter** (`font-body`) | Cuerpo, descripciones, UI |

### Escala tipográfica
| Elemento | Fuente | Peso | Tamaño Desktop/Móvil | Line-height |
|----------|--------|------|----------------------|-------------|
| Display | Oswald | 700 | 60px / 40px | 1.05 |
| H1 | Oswald | 700 | 48px / 32px | 1.1 |
| H2 | Oswald | 600 | 36px / 28px | 1.15 |
| H3 | Oswald | 600 | 28px / 24px | 1.2 |
| H4 | Oswald | 600 | 22px / 20px | 1.25 |
| Body | Inter | 400 | 16px | 1.6 |
| Small | Inter | 400 | 14px | 1.5 |
| Caption | Inter | 400 | 12px | 1.4 |

### Detalles
- **Pesos**: títulos 600–700; body 400; botones/links 500–600.
- **Títulos Oswald**: `uppercase` + `tracking-wide`, con toques acento en **azul profundo**, **rojo profundo** o **degradado cálido** (`bg-clip-text`).
- **Body Inter**: `max-width: 65ch` para legibilidad.
- Mobile `H1` mínimo 32px; body nunca por debajo de 16px.

---

## 3. Logo

- **Marca**: la palabra de la veterinaria (ver `components/Header.jsx`/`Footer.jsx`) en Oswald extrabold. La tríada de marca (rojo, azul, oro) puede aparecer en el icono/huella o en degradado del nombre.
- **Sobre blanco/aguas claras**: palabra en **Rojo Profundo** `#991B1B` (o azul según versión), con acento en **Oro Opaco**.
- **Sobre Noche (footer)**: palabra en blanco `#FFFFFF`, icono en **Oro Suave**.
- **Icono (favicon)**: huella/trazado en tríada (azul + rojo + oro) sobre fondo blanco, forma redondeada.

### Espacio de seguridad
Margen libre mínimo = altura del marcador del logo a cada lado.

### Coreo
- No distorsionar, rotar ni sesgar.
- No cambiar colores fuera de la paleta.
- No añadir sombras/gradientes (fuera de la versión aprobada).
- No colocar sobre fondos con textura/ruido.

---

## 4. Formas y estilo visual

- **Fondo del sitio**: blanco base con **degradados cristalinos** por sección (blanco → azul muy pálido), blobs radiales en tonos de la tríada muy suaves y vidrio (`bg-white/70 backdrop-blur`).
- **Esquinas**: redondeadas (`rounded-2xl` cards, `rounded-full` botones/badges) — limpias y amables.
- **Sombras**: suaves y luminosas, con halo de la tríada muy sutil (`shadow-lg shadow-primary/10`, `shadow-red/10`, `shadow-accent/10`). Sin sombras duras.
- **CTAs por familia**: salud → Azul Profundo (hover Azul Noche); marca/urgencia → Rojo Profundo (hover Rojo Noche); tienda → Oro Oscuro (hover Oro Noche); acento cálido puntual → Brasa Oscura.
- **Badges**: azul → Azul Pastel con Tinta; urgencia → Rojo Pálido con Rojo Profundo; tienda → Oro Pálido con Oro Oscuro.
- **Iconos**: line/contorno con trazo medio (~2px), en el color de la familia (azul salud, rojo urgencia/marca, oro tienda).

---

## 5. Imágenes y fotografía

- **Tema**: consultorios luminosos, salas limpias con luz natural; mascotas tranquilas y felices.
- **Luz**: natural, abundante, blanca; ambiente "de mañana en una clínica moderna".
- **Tratamiento de color**: desaturado y fresco, con leve tinte claro; máximo aire y blancura.
- **Composición**: planos amplios y ordenados, superficies limpias; mascota + equipo veterinario con sonrisas.
- **Formato/Assets**: JPG para fotos, SVG para logo/iconos. Assets reales en `public/imgs/vetpedros/`, carpetas `public/imgs/servicios/`, `public/hero/`.

---

## 6. Tono y voz

| Rasgo | Somos | No somos |
|-------|-------|----------|
| Cercano | Hablamos con calidez, de tú | Fríos ni corporativos |
| Experto | Inspiramos confianza con datos claros | No usamos jerga médica densa |
| Tranquilizador | Transmitimos seguridad y calma | Alarmistas ni oscuros |

### Tono por contexto
| Contexto | Tono | Ejemplo |
|----------|------|---------|
| Hero | Inspirador y sereno | "Cuidamos a tu mascota con la seriedad de una clínica y la calidez de una familia." |
| Clínica/Servicios | Claro y seguro | "Atención veterinaria integral, en un ambiente limpio y luminoso." |
| Urgencias | Cercano y resolutivo | "Emergencias atendidas con prioridad y trato humano." |
| Contacto | Cercano y resolutivo | "Agenda tu visita o consulta." |
| Error/404 | Amable y sin culpa | "Ups, esta página se fue de paseo." |

### Términos permitidos
- Bienestar, cuidado, familia, confianza, calma, frescura.

### Términos prohibidos
- Jerga técnica veterinaria innecesaria (dosificar para comprensión).
- Palabras alarmistas sobre enfermedad/sufrimiento ("sufre").
- Lenguaje tecnicista o corporativo frío.

---

## 7. Checklist de consistencia

- [ ] ¿Fondos predominantemente blancos/aguas claras con degradados cristalinos?
- [ ] ¿Colores dentro de la paleta (60/30/10)?
- [ ] ¿Tríada (azul/rojo/oro) distribuida de forma equilibrada por familias de secciones?
- [ ] ¿Naranja/amarillo solo como acento puntual, no como tinte general?
- [ ] ¿Textos con contraste WCAG AA/AAA?
- [ ] ¿`font-heading` solo en títulos, `font-body` en cuerpo?
- [ ] ¿Azul solo en salud, rojo en marca/urgencias, oro en tienda?
- [ ] ¿CTAs con variantes Profundo/Noche/Oscuro (nunca color base)?
- [ ] ¿Logo respeta espacio de seguridad y versión correcta para el fondo?
- [ ] ¿Fotos luminosas, limpias y frescas?
