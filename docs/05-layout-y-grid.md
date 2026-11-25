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
| `--bordered` | Línea superior `border.default` |

`.g-intro` centra eyebrow + título + texto a 570 px (`--wide`: 770 px) con 48 px hasta el contenido.

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
