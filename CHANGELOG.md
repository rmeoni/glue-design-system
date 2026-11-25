# Changelog

Formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), versionado [SemVer](https://semver.org/lang/es/).

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
