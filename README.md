# Glue Design System

**Glue** es el sistema de diseño de [UXRodrigo](https://uxrodrigo.com). Une diseño y código: una sola fuente de tokens, estilos y componentes para la web, Figma, Figma Make y zeroheight.

Nace de los estilos de uxrodrigo.com: navy para actuar, coral para señalar, Inter, formas en píldora y mucho aire, con modo oscuro y contraste AA de serie.

## Qué incluye

| | |
|---|---|
| **Principios** | [docs/01-principios.md](docs/01-principios.md) |
| **Color** | [docs/02-color.md](docs/02-color.md): paletas navy, coral, neutral y feedback; tokens semánticos light/dark; contrastes verificados |
| **Tipografía** | [docs/03-tipografia.md](docs/03-tipografia.md): Inter, 14 estilos de texto |
| **Espaciado** | [docs/04-espaciado.md](docs/04-espaciado.md): escala de 4 px, radios, bordes, elevación, movimiento |
| **Layouts y grids** | [docs/05-layout-y-grid.md](docs/05-layout-y-grid.md): breakpoints, contenedores, secciones, grid 4/8/12 |
| **Componentes** | [docs/06-componentes.md](docs/06-componentes.md): 16 componentes con ficha propia |
| **Pantallas de ejemplo** | [docs/07-pantallas-de-ejemplo.md](docs/07-pantallas-de-ejemplo.md): home, agendar llamada, caso de estudio |
| **Guía de uso** | [docs/08-guia-de-uso.md](docs/08-guia-de-uso.md): instalación, temas, tokens, zeroheight, Figma, Figma Make, contribución |
| **Accesibilidad** | [docs/09-accesibilidad.md](docs/09-accesibilidad.md) |
| **Logo** | [docs/10-logo.md](docs/10-logo.md): variantes, tamaños, área de protección y usos incorrectos |

## Estructura

```
tokens/                 Fuente de verdad (W3C DTCG + Tokens Studio)
  primitives.tokens.json
  typography.tokens.json
  semantic.light.tokens.json
  semantic.dark.tokens.json
  $themes.json          Temas Light / Dark para Tokens Studio y zeroheight
  $metadata.json
assets/logo/            Logo (navy, blanco, mono), símbolo y favicons
css/
  tokens.css            GENERADO: variables CSS
  base.css              Elementos y tipografía
  layout.css            Contenedor, secciones, grid, stack, cluster
  components.css        Componentes
dist/
  glue.css              GENERADO: todo en un archivo
  tokens.json           GENERADO: valores resueltos por tema
docs/                   Documentación (español) → zeroheight
guidelines/             Reglas para Figma Make (inglés, las lee la IA)
examples/               Guía viva + pantallas de ejemplo
scripts/build-tokens.mjs
```

## Empezar

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="dist/glue.css">

<span class="g-eyebrow">Contacto</span>
<h2>Hablemos de tu producto</h2>
<a class="g-button" href="/agendar">Agendar llamada</a>
```

Ver todo en vivo: abre [`examples/index.html`](examples/index.html) o ejecuta `npm run dev`.

## Editar tokens

```bash
# edita tokens/*.tokens.json
npm run build    # regenera css/tokens.css, dist/glue.css y dist/tokens.json (Node 18+, sin dependencias)
```

## Integraciones

- **zeroheight:** conecta la carpeta `tokens/` como token set y crea una página por archivo de `docs/`.
- **Figma:** Tokens Studio → sync con GitHub (`tokens/`, multi-archivo) → exportar a Variables con modos Light/Dark.
- **Figma Make:** usa `guidelines/Guidelines.md` como guidelines e importa `dist/glue.css`.

Pasos detallados en la [guía de uso](docs/08-guia-de-uso.md#5-conectar-con-zeroheight).

## Versionado

SemVer. Cambios en [CHANGELOG.md](CHANGELOG.md).
