# Layouts y grids

## Breakpoints

Mobile first. Los breakpoints son `min-width`.

| Nombre | Desde | Columnas | Gutter y margen lateral |
|---|---|---|---|
| sm (base) | 0 | 4 | 16 px |
| md | 768 px | 8 | 24 px |
| lg | 992 px | 12 | 32 px |
| xl | 1280 px | 12 | 32 px (aparecen acciones secundarias en la nav) |

Tokens: `breakpoint.md/lg/xl`, `layout.gutter-sm/md/lg`. En CSS el gutter vigente está en `var(--layout-gutter)` y las columnas en `var(--layout-columns)`.

## Contenedores

| Clase | Ancho máximo de contenido | Uso |
|---|---|---|
| `.g-container` | 1170 px (1234 con márgenes) | Por defecto |
| `.g-container--medium` | 770 px | Artículos, casos de estudio |
| `.g-container--narrow` | 570 px | Formularios sueltos, intros |

## Secciones

```html
<section class="g-section">…</section>
```

| Modificador | Efecto |
|---|---|
| (ninguno) | 64 px arriba y abajo en móvil, 128 px desde 992 px |
| `--compact` | 64 px siempre |
| `--flush` | Sin padding vertical |
| `--surface` | Fondo `bg.surface` para alternar |
| `--inverse` | Fondo navy, texto blanco (uno por página) |
| `--angled` | Hero de perfil: tinte `bg.surface-alt` con corte diagonal de 9° abajo |
| `--angled-subtle` | Cabecera de proyecto: mismo tinte con corte de 2,5° |
| `--bordered` | Línea superior `border.default` |

`.g-intro` centra eyebrow + título + texto a 570 px (`--wide`: 770 px) con 48 px hasta el contenido.

### Fondos de cabecera

El fondo de la foto de perfil y de las páginas de proyecto de uxrodrigo.com. Una cabecera con tinte (`color.bg.surface-alt`) cuyo borde inferior se corta en diagonal y deja ver `color.bg.page`. Funciona en claro y oscuro.

| Variante | Uso | Corte | Se quita en |
|---|---|---|---|
| `.g-section--angled` | Hero de perfil: foto (`.g-media--profile`) + presentación | 9°, alto a la izquierda | < 480 px |
| `.g-section--angled-subtle` | Cabecera de un caso de estudio | 2,5°, alto a la derecha (mínimo 32 px de alto en móvil) | No se quita |

```html
<section class="g-section g-section--angled">
  <div class="g-container g-grid">
    <div class="g-col-lg-7">…presentación…</div>
    <div class="g-col-lg-5"><div class="g-media g-media--profile"><img src="profile.jpg" alt="Rodrigo Meono"></div></div>
  </div>
</section>
```

- El alto del corte es `tan(ángulo) × ancho` y se suma al padding inferior, así que el contenido nunca queda cortado. Dentro de un elemento con `container-type: inline-size` se calcula sobre ese ancho (así funcionan las demos de la guía).
- En uxrodrigo.com el corte es una franja blanca rotada encima de la sección; en Glue es un `clip-path` de la propia sección, sin elementos extra. El tinte del sitio es `#f4f7ff` y Glue usa `navy.50` (#F1F5FF).
- `.g-media--profile`: círculo de 300 px como máximo, 24vw en tablet y 40vw en móvil.
- Badges y chips dentro de la cabecera usan el fondo de la página, porque su `navy.50` se confundiría con el tinte.
- Una sola por página y siempre la primera sección. No la combines con `--surface` ni `--inverse`.

## Grid de 12 columnas

```html
<div class="g-grid">
  <div class="g-col-md-4 g-col-lg-8">Principal</div>
  <div class="g-col-md-4 g-col-lg-4">Lateral</div>
</div>
```

- Sin clase, una celda ocupa **toda la fila**.
- `.g-col-{n}`: n de 4 columnas (todos los tamaños hasta que se sobrescribe).
- `.g-col-md-{n}`: n de 8 columnas desde 768 px.
- `.g-col-lg-{n}`: n de 12 columnas desde 992 px. `.g-col-lg-start-{2|3}` para desplazar.
- Gap de filas por defecto: 32 px.

`.g-auto-grid` crea tarjetas iguales que pasan de 1 a 2 a 3 columnas solas (mínimo 300 px).

## Layouts de referencia

| Layout | Escritorio (lg) | Tablet (md) | Móvil |
|---|---|---|---|
| Hero con imagen | 7 + 5 | 8 / 8 | 4 / 4 |
| Grid de proyectos | 6 + 6 | 4 + 4 | 4 |
| Tres tarjetas (booking) | 4 + 4 + 4 | 8 / 8 / 8 | 4 |
| Texto + timeline | 4 + 7 (empieza en 6) | 8 / 8 | 4 |
| Artículo | 8 centrado (empieza en 3) | 8 | 4 |
| Ficha de proyecto | 3 + 3 + 3 + 3 | 2 + 2 + 2 + 2 | 2 + 2 |

## Navegación responsive

- **≥ 992 px:** logo, enlaces centrados, acciones a la derecha.
- **≥ 1280 px:** aparece el botón secundario (p. ej. "Descargar CV").
- **< 992 px:** los enlaces pasan a un panel que abre el botón de menú; el CTA primario se queda en la barra.

## Reglas

- Las imágenes siempre dentro de `.g-media` con ratio fijo (`--16x9`, `--4x3`, `--1x1`) para que no salten al cargar.
- Nunca contenido pegado al borde: el margen lateral mínimo es 16 px.
- Sin scroll horizontal a 320 px.
