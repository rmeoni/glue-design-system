# Espaciado, radios y elevación

## Escala de espaciado

Base de **4 px**. El nombre del token es el múltiplo de 4.

| Token | px | Uso típico |
|---|---|---|
| `space.1` | 4 | Entre icono y texto pequeño, gap de calendario |
| `space.2` | 8 | Entre chips, label → campo, icono → texto en botón |
| `space.3` | 12 | Entre botones, eyebrow → título |
| `space.4` | 16 | Título → párrafo, margen lateral móvil |
| `space.5` | 20 | Fin de párrafo, padding horizontal de botón md |
| `space.6` | 24 | Padding de botón lg, gutter tablet, entre tarjetas |
| `space.8` | 32 | Padding de tarjeta, gutter escritorio |
| `space.12` | 48 | Intro de sección → contenido |
| `space.16` | 64 | Padding vertical de sección en móvil |
| `space.24` | 96 | Separaciones grandes |
| `space.32` | 128 | Padding vertical de sección en escritorio |

CSS: `var(--space-6)`.

### Reglas

- **El espacio entre hermanos es del padre.** Usa `.g-stack` (vertical) o `.g-cluster` (horizontal) con `.g-gap-{n}`. No pongas `margin` en el hijo.
- Más relación = menos espacio. Label y campo a 8; campo y campo a 18; sección y sección a 128.
- No inventes valores intermedios. Si 24 no basta, salta a 32.

## Radios

| Token | px | Uso |
|---|---|---|
| `radius.xs` | 4 | Detalles pequeños |
| `radius.sm` | 8 | Toggles, focos internos |
| `radius.md` | 14 | Campos de formulario, alertas, paneles |
| `radius.lg` | 32 | Tarjetas |
| `radius.xl` | 48 | Imágenes y vídeos |
| `radius.full` | 9999 | Botones, chips, botones de icono |

Logos e iconos **nunca** llevan radio.

## Bordes

| Token | Valor | Uso |
|---|---|---|
| `border-width.thin` | 1 px | Tarjetas, divisores, chips |
| `border-width.control` | 1.5 px | Botón secundario, campos |
| `border-width.focus` | 2 px | Anillo de foco, borde de cita |

## Elevación

Glue es plano por defecto. La sombra solo indica que algo flota sobre la página.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `elevation.card` | `0 10px 40px rgba(21,49,128,.08)` | `0 4px 12px rgba(0,0,0,.12)` | Tarjetas |
| `elevation.raised` | `0 15px 40px rgba(0,0,0,.11)` | igual | Popovers, menús |

## Tamaños de control

| Token | px | Uso |
|---|---|---|
| `size.control-sm` | 36 | Chips, botones pequeños, flechas de calendario |
| `size.control-md` | 44 | Navegación, botones de icono (objetivo táctil mínimo) |
| `size.control-lg` | 48 | Botón por defecto, campos |
| `size.icon-sm/md/lg` | 16 / 20 / 24 | Iconos |

## Movimiento

| Token | Valor | Uso |
|---|---|---|
| `duration.fast` | 200 ms | Hover, color |
| `duration.base` | 300 ms | Subrayado de nav, paneles |
| `duration.slow` | 500 ms | Zoom de imagen en tarjeta |
| `easing.standard` | `cubic-bezier(.25,.46,.45,.94)` | Todo |

Con `prefers-reduced-motion: reduce` las transiciones se desactivan.
