# Componentes

Todos los componentes viven en [`css/components.css`](../css/components.css), usan solo tokens semánticos y funcionan en claro y oscuro sin reglas extra.

## Convenciones

- **Clases:** `.g-{componente}`, variantes `--{variante}`, partes `__{parte}`.
- **Estados con atributos nativos**, no con clases: `disabled`, `aria-pressed`, `aria-invalid`, `aria-current`, `aria-expanded`.
- **HTML semántico primero:** `<button>` para acciones, `<a>` para navegar.

## Inventario

| Componente | Clase | Doc |
|---|---|---|
| Botón | `.g-button` | [boton.md](componentes/boton.md) |
| Botón de icono | `.g-icon-button` | [boton-icono.md](componentes/boton-icono.md) |
| Chip y badge | `.g-chip`, `.g-badge` | [chip-badge.md](componentes/chip-badge.md) |
| Eyebrow | `.g-eyebrow` | [eyebrow.md](componentes/eyebrow.md) |
| Campos de formulario | `.g-field`, `.g-input`, `.g-select`, `.g-textarea`, `.g-check` | [formulario.md](componentes/formulario.md) |
| Tarjeta | `.g-card`, `.g-project-card` | [tarjeta.md](componentes/tarjeta.md) |
| Media | `.g-media`, `.g-figure` | [media.md](componentes/media.md) |
| Alerta | `.g-alert` | [alerta.md](componentes/alerta.md) |
| Snackbar | `.g-snackbar` | [snackbar.md](componentes/snackbar.md) |
| Skeleton | `.g-skeleton` | [skeleton.md](componentes/skeleton.md) |
| Logo | `.g-logo` | [10-logo.md](10-logo.md) |
| Icono ilustrativo y feature | `.g-spot-icon`, `.g-features`, `.g-feature` | [11-iconos.md](11-iconos.md) |
| Navbar | `.g-navbar` | [navbar.md](componentes/navbar.md) |
| Footer | `.g-footer` | [footer.md](componentes/footer.md) |
| Timeline | `.g-timeline` | [timeline.md](componentes/timeline.md) |
| Estadística | `.g-stats`, `.g-stat` | [estadistica.md](componentes/estadistica.md) |
| Cita | `.g-quote` | [cita.md](componentes/cita.md) |
| Breadcrumbs | `.g-breadcrumbs` | [breadcrumbs.md](componentes/breadcrumbs.md) |
| Utilidades | `.g-theme-switch`, `.g-back-to-top`, `.g-skip-link`, `.g-visually-hidden`, `.g-divider` | [utilidades.md](componentes/utilidades.md) |

Ver todos en vivo: [`examples/index.html`](../examples/index.html).

## Estados comunes

| Estado | Cómo se ve | Cómo se activa |
|---|---|---|
| Hover | Cambia el fondo un paso de la escala | `:hover` |
| Foco | Anillo coral 2 px, separación 2 px | `:focus-visible` (global) |
| Seleccionado | Fondo coral + check + peso 600 | `aria-pressed="true"` |
| Actual | Subrayado fijo en nav, negrita en breadcrumbs | `aria-current="page"` |
| Error | Borde y mensaje `feedback.error` | `aria-invalid="true"` + `.g-field__error` |
| Deshabilitado | `action.disabled-bg/fg`, cursor `not-allowed` | `disabled` o `aria-disabled="true"` |
