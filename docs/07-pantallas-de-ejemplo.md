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

## Idioma (español / inglés)

La guía viva y las tres pantallas se escriben en español y se traducen al inglés con [`examples/assets/i18n.js`](../examples/assets/i18n.js).

- **Toggle:** botón `ES`/`EN` en el navbar (`data-glue-lang-toggle="short"`) y "English"/"Español" en el menú móvil (`data-glue-lang-toggle="long"`). En móvil solo aparece en el menú.
- **Persistencia:** la elección se guarda en `localStorage` (`glue-lang`) y se mantiene entre páginas y recargas.
- **Primera visita:** español si el idioma del navegador es español o si la región (locale o zona horaria) es de un país hispanohablante; si no, inglés.
- **Enlace directo:** `?lang=en` o `?lang=es` fuerza y guarda el idioma (útil para embeber en zeroheight).
- Carga `i18n.js` en el `<head>`, antes de `glue.js`, para que la página no muestre el otro idioma un instante.

**Al añadir o cambiar texto** en `examples/`, añade la pareja español → inglés al diccionario `ES_EN` de `i18n.js`. El texto sin entrada se queda en español. Para textos ambiguos de una sola letra o palabra usa `data-en` en el elemento: `<span data-en="M">L</span>`.
