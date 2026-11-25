# Pantallas de ejemplo

Tres pantallas completas construidas solo con clases y tokens de Glue. Ábrelas en el navegador y prueba el modo oscuro y el ancho móvil.

| Pantalla | Archivo | Qué demuestra |
|---|---|---|
| Guía viva | [`examples/index.html`](../examples/index.html) | Todos los fundamentos y componentes, con swatches leídos de los tokens en vivo |
| Home / portfolio | [`examples/screens/home.html`](../examples/screens/home.html) | Hero 7+5, estadísticas, filtros con chips, grid de proyectos 6+6, timeline, sección inverse, footer |
| Agendar llamada | [`examples/screens/booking.html`](../examples/screens/booking.html) | Tres tarjetas 4+4+4, radio en tarjeta, calendario con tokens, chips de horario, formulario con campo Invitados, alerta de éxito |
| Caso de estudio | [`examples/screens/case-study.html`](../examples/screens/case-study.html) | Breadcrumbs, badges, cover 16:9, ficha 3+3+3+3, artículo de 8 columnas, cita, figura, estadísticas, siguiente proyecto |

## Anatomía de una página Glue

```
g-skip-link
g-navbar
main
  g-section            ← hero: eyebrow + h1 + lead + 1 primario (+ 1 secundario)
  g-section            ← contenido en g-grid
  g-section--surface   ← alterna fondo para separar bloques
  g-section--inverse   ← CTA final (una por página)
g-footer
g-back-to-top
```

## Para verlas en local

```bash
npx serve .
# abre http://localhost:3000/examples/
```

O abre los `.html` directamente: no necesitan build.
