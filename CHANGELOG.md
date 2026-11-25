# Changelog

Formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), versionado [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

### Cambiado
- La sección "Alertas" de la guía viva (`examples/index.html`) muestra los cuatro tipos (info, éxito, aviso, error) como snackbars de Material 3, con botones para verlos en vivo. Nueva variante `.g-snackbar--inline` para vistas estáticas en documentación.

### Añadido
- Sección **Movimiento** en la guía viva (`examples/index.html#movimiento`): tokens de duración y easing, y demo del skeleton de carga en claro y oscuro lado a lado.
- Componente `.g-skeleton` (formas `--text`, `--label`, `--heading`, `--avatar`, `--button`, `--media`) con brillo en bucle y versión estática con movimiento reducido. Tokens `duration.loop` (1600 ms) y `color.skeleton.base` / `color.skeleton.highlight` por tema. Guía en `docs/componentes/skeleton.md`.
- Export para zeroheight en `dist/zeroheight/glue-light.tokens.json` y `glue-dark.tokens.json`: DTCG 2025.10 (colores `srgb`, dimensiones y duraciones `{ value, unit }`, `lineHeight` como proporción), autónomos y validados en el build (`scripts/build-zeroheight.mjs`, parte de `npm run build`).
- Toggle de idioma español / inglés en la guía viva y las pantallas de ejemplo (`examples/assets/i18n.js`, `.g-lang-toggle`). Se guarda entre páginas y recargas, se preselecciona según el idioma o la región, y acepta `?lang=en|es`. Guía en `docs/07-pantallas-de-ejemplo.md`.
- Componente `.g-snackbar` basado en el snackbar de Material 3: aviso temporal fijo abajo, superficie inverse, acción opcional y cierre, autocierre a los 6 s con pausa en hover/foco y Escape (`Glue.snackbar(id)` en `glue.js`). Token `color.action.on-inverse`. Guía en `docs/componentes/snackbar.md`. `booking.html` confirma la reserva con un snackbar en vez de una alerta en línea.

### Corregido
- Botones `--secondary` y `--ghost` dentro de `.g-section--inverse`: el hover ponía texto blanco sobre el celeste `navy.50` (ilegible) y en oscuro texto `navy.900` sobre `neutral.700`. Ahora el sistema los adapta y en hover se invierten (11.8:1 en ambos temas). Se quitaron los estilos inline de `examples/index.html` y `examples/screens/home.html`.
- Grid: `.g-col-lg-start-*` hacía que la columna ocupara 1 sola columna. Los spans ahora son `grid-column: auto / span N`.

## [1.2.0] — 2026-11-24

### Añadido
- Iconos ilustrativos hechos a mano en `assets/icons/` (monitor, capas, cámara, hojas, pesa, reproducir) en SVG con `currentColor`, sprite generado en el build, componentes `.g-spot-icon` y `.g-features`/`.g-feature`, tokens `color.icon.spot` y `size.spot-sm/md/lg`. Guía en `docs/11-iconos.md`. Sección "Enfoque en design thinking" en la home de ejemplo.

## [1.1.0] — 2026-11-24

### Añadido
- Logo de UXRodrigo en `assets/logo/`: versión navy, blanca y mono, símbolo, favicons y componente `.g-logo` que cambia según el tema. Tokens `color.verified` y `size.logo-sm/md/lg`. Guía en `docs/10-logo.md`.

## [1.0.0] — 2026-11-24

### Añadido
- Tokens DTCG: primitivos (navy, coral, neutral, feedback), tipografía, espaciado, radios, bordes, tamaños, sombras, movimiento, breakpoints y layout.
- Tokens semánticos con temas Light y Dark, compatibles con Tokens Studio (`$themes.json`, `$metadata.json`).
- Build sin dependencias que genera `css/tokens.css`, `dist/tokens.json` y `dist/glue.css`.
- CSS base, layout (contenedor, secciones, grid 4/8/12, stack, cluster) y 15 componentes.
- Documentación en `docs/` y guidelines para Figma Make en `guidelines/`.
- Guía viva y tres pantallas de ejemplo en `examples/`.

### Cambios respecto a uxrodrigo.com
- Enlaces en texto pasan de coral.400 (2.9:1) a coral.600 (5.89:1) en modo claro.
- Nuevos colores de feedback (success, warning, error) separados del coral.
- Títulos en sentence case (la web capitaliza H2/H3).
- El radio de 48 px se aplica con `.g-media`, no a todas las imágenes.
