# Changelog

Formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), versionado [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

### Cambiado
- Footer con el estilo de uxrodrigo.com: superficie navy (casi negra en oscuro), los mismos enlaces que el navbar en una fila (`.g-footer__nav`, 17 px) y una barra inferior con copyright y enlaces legales separados por puntos (`.g-footer__bottom-inner`, `.g-footer__dot`). Nuevos tokens `color.footer.*` por tema; foco en `coral.400` para que se vea sobre navy. Las cuatro páginas usan el footer nuevo.
- Navbar y footer de borde a borde, como en uxrodrigo.com: su contenedor ya no se limita a 1234 px, así que en pantallas anchas su margen lateral es menor que el del cuerpo (navbar 32 px; footer 3vw en escritorio).
- Botón de idioma: el mismo de uxrodrigo.com, globo terráqueo + código del idioma destino (`EN`/`ES`), también en el menú móvil (globo + "English"/"Español"). Va después del interruptor de tema, como en el portafolio.
- Enlaces del footer y migas de pan: en hover usan la misma línea animada que el navbar (1 px, color del enlace, entra por la izquierda y sale por la derecha) y el texto ya no cambia de color, igual que en uxrodrigo.com.
- Botón de tema: nuevo `.g-theme-switch` con el interruptor de uxrodrigo.com (sol · pista con bola · luna, `role="switch"` + `aria-checked`). La bola se desliza al cambiar de tema. Sustituye a `.g-theme-toggle`, que queda obsoleto.
- La sección "Alertas" de la guía viva (`examples/index.html`) muestra los cuatro tipos (info, éxito, aviso, error) como snackbars de Material 3, con botones para verlos en vivo. Nueva variante `.g-snackbar--inline` para vistas estáticas en documentación.

### Añadido
- Sección "Iconos de interfaz · Material Symbols" en la guía viva, debajo de los iconos hechos a mano: `light_mode`, `dark_mode` y `language` (Material Symbols Outlined, los mismos de uxrodrigo.com), los controles que los usan y sus reglas. Documentado en `docs/11-iconos.md`.
- Estados completos de los enlaces del navbar, del menú móvil y del footer: hover, foco, presionado (`text.accent`), página actual (`aria-current`, ahora también visible en el menú móvil y el footer) y deshabilitado (`aria-disabled`). Sección "Enlaces de navegación" en la guía viva con la matriz de estados en claro y oscuro y su contraste. `data-state` y `.g-navbar__link--block` para documentar estados.
- Fondos de cabecera de uxrodrigo.com: `.g-section--angled` (hero de perfil, corte de 9°) y `.g-section--angled-subtle` (cabecera de proyecto, 2,5°), con tinte `bg.surface-alt` y corte que deja ver `bg.page`; foto circular `.g-media--profile`. Sección "Fondos de cabecera" en la guía viva con demos en claro y oscuro, aplicados en `home.html` y `case-study.html`. Guía en `docs/05-layout-y-grid.md`.
- Imagen Open Graph de Glue (`assets/og/glue-og.png`, 1200×630) y etiquetas `og:` / `twitter:` en `index.html` y `examples/index.html`.
- Skeleton de carga en toda la guía viva y las pantallas de ejemplo: mientras la página se pinta (`html.g-is-loading`, hasta que el DOM y la fuente están listos) el texto se muestra como barras por línea y los controles como formas, y cada imagen de `.g-media` muestra su skeleton hasta cargar y aparece con un fundido. Sin saltos de layout, con respaldo sin JavaScript y estático con movimiento reducido.
- Sección **Movimiento** en la guía viva (`examples/index.html#movimiento`): tokens de duración y easing, y demo del skeleton de carga en claro y oscuro lado a lado.
- Componente `.g-skeleton` (formas `--text`, `--label`, `--heading`, `--avatar`, `--button`, `--media`) con brillo en bucle y versión estática con movimiento reducido. Tokens `duration.loop` (1600 ms) y `color.skeleton.base` / `color.skeleton.highlight` por tema. Guía en `docs/componentes/skeleton.md`.
- Export para zeroheight en un solo archivo, `dist/zeroheight/glue.tokens.json`: primitivos y tipografía compartidos y semánticos en `light.*` y `dark.*`, para planes con un único token set. Valores en el formato que valida el importador de zeroheight (hex, `16px`, `200ms`); el build valida cada valor y alias (`scripts/build-zeroheight.mjs`, parte de `npm run build`).
- Toggle de idioma español / inglés en la guía viva y las pantallas de ejemplo (`examples/assets/i18n.js`, `.g-lang-toggle`). Se guarda entre páginas y recargas, se preselecciona según el idioma o la región, y acepta `?lang=en|es`. Guía en `docs/07-pantallas-de-ejemplo.md`.
- Componente `.g-snackbar` basado en el snackbar de Material 3: aviso temporal fijo abajo, superficie inverse, acción opcional y cierre, autocierre a los 6 s con pausa en hover/foco y Escape (`Glue.snackbar(id)` en `glue.js`). Token `color.action.on-inverse`. Guía en `docs/componentes/snackbar.md`. `booking.html` confirma la reserva con un snackbar en vez de una alerta en línea.

### Corregido
- La línea de los enlaces del navbar ahora es igual que en uxrodrigo.com: 1 px (antes 2 px), a 2 px del texto (antes 8 px), entra por la izquierda y sale por la derecha (antes volvía hacia la izquierda), en 400 ms con `easing.standard` (`outQuad`). Nuevo token `duration.moderate` (400 ms).
- Enlaces de la guía y los ejemplos según los lineamientos: la guía marcaba "Fundamentos" como página actual siempre; ahora un scroll-spy (`data-glue-spy` en `glue.js`) marca la sección que estás leyendo con `aria-current="location"`, también en el menú móvil. En el caso de estudio "Trabajos" pasa a `aria-current="true"` (sección padre, no la página). Privacidad y Términos apuntaban a `#` y ahora llevan a sus páginas en uxrodrigo.com; "Guía de uso" abre la guía en GitHub en vez del `.md` en bruto. Los estilos de enlace actual aceptan cualquier valor de `aria-current`.
- Al terminar el skeleton de página, enlaces y botones de icono hacían un fundido desde el gris mientras el resto aparecía de golpe. Ahora las transiciones se desactivan durante la carga y en el instante de mostrar la página (`.g-is-revealing`), y todo aparece a la vez.
- Cabecera de proyecto (`.g-section--angled-subtle`) en móvil: se veía recta porque el corte se quitaba bajo 768 px. Ahora se mantiene en todos los tamaños con un mínimo de 32 px de alto. Badges y chips en cabeceras con corte usan el fondo de la página para no perderse en el tinte.
- Tras un deploy, el navegador podía combinar el HTML nuevo con un `glue.css` / `glue.js` viejo de su caché (GitHub Pages cachea 10 min), y los fondos de cabecera no se veían. El build añade ahora `?v=<hash del contenido>` a esos enlaces (`scripts/version-assets.mjs`).
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
