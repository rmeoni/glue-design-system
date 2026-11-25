# Accesibilidad

Objetivo: **WCAG 2.2 AA** en todo lo que se construye con Glue.

## Lo que Glue ya resuelve

| Requisito | Cómo |
|---|---|
| Contraste de texto ≥ 4.5:1 | Todos los pares `text.*` / `bg.*` verificados en ambos temas ([Color](02-color.md)) |
| Contraste de controles ≥ 3:1 | `border.control` en campos, chips y botones de icono |
| Foco visible | `:focus-visible` global: anillo coral de 2 px con 2 px de separación |
| No solo color | Chip seleccionado con check + peso; errores con texto; alertas con icono y título |
| Objetivos táctiles | Controles de 44–48 px; los chips de 36 px tienen 8 px de separación |
| Movimiento reducido | Transiciones desactivadas con `prefers-reduced-motion` |
| Tema del sistema | Sigue `prefers-color-scheme` si no se fuerza |
| Saltar navegación | `.g-skip-link` |

## Lo que tienes que hacer tú

- Un `<h1>` por página y niveles sin saltos.
- `alt` en imágenes informativas; `alt=""` en decorativas.
- `aria-label` en botones de icono; `aria-hidden="true"` en sus SVG.
- `<label for>` en cada campo; errores con `aria-describedby` y `aria-invalid`.
- `aria-pressed` en toggles y chips; `aria-expanded` + `aria-controls` en el menú; `aria-current="page"` en la nav.
- `role="alert"` solo para errores; `role="status"` para confirmaciones.
- Probar con teclado (Tab, Shift+Tab, Enter, Espacio, Esc) y con VoiceOver.

## Checklist antes de publicar

- [ ] Se puede completar la tarea solo con teclado y el foco siempre se ve.
- [ ] El zoom al 200% no rompe el layout; sin scroll horizontal a 320 px.
- [ ] Modo claro y oscuro revisados.
- [ ] Ninguna información depende solo del color.
- [ ] Los mensajes de error dicen cómo arreglarlo.
