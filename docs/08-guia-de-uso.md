# Guía de uso

## 1. Instalar Glue en un proyecto

### Opción A: CDN (sin build)

Cuando el repo esté en GitHub, jsDelivr sirve cualquier tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rmeoni/glue-design-system@v1.2.0/dist/glue.css">
```

### Opción B: copiar archivos

Copia `dist/glue.css` (todo en uno) o, por partes, `css/tokens.css` + `css/base.css` + `css/layout.css` + `css/components.css` en ese orden.

### Opción C: solo tokens

Si el proyecto ya tiene sus componentes, carga solo `css/tokens.css` o lee `dist/tokens.json`.

## 2. Construir una pantalla

1. Empieza por la estructura: `g-navbar` → `main` con `g-section` → `g-footer`.
2. Dentro de cada sección, `g-container` y, si hay columnas, `g-grid` con `g-col-md-*` / `g-col-lg-*`.
3. Encabeza cada bloque con eyebrow + título (+ lead).
4. Usa componentes existentes. Si falta algo, compón con `g-stack`, `g-cluster` y tokens.
5. Revisa: una acción primaria, contraste, foco con teclado, modo oscuro, 320 px de ancho.

### Estilos propios

Si una pantalla necesita CSS propio, **solo con tokens semánticos**:

```css
/* ✅ */
.mi-panel { padding: var(--space-6); border-radius: var(--radius-md); background: var(--color-bg-surface); }
/* ❌ */
.mi-panel { padding: 22px; border-radius: 10px; background: #f5f5f5; }
```

## 3. Modo oscuro

- Sin atributo, Glue sigue a `prefers-color-scheme`.
- `data-theme="light"` o `"dark"` en `<html>` lo fuerza.
- `examples/assets/glue.js` incluye el toggle que guarda la elección.
- No escribas reglas `[data-theme="dark"] .algo`: si un componente necesita una, falta un token semántico.

## 4. Cambiar o añadir tokens

1. Edita el JSON en `tokens/` (formato [W3C DTCG](https://www.designtokens.org/)).
   - Valor nuevo de paleta → `primitives.tokens.json`.
   - Nuevo uso → el mismo nombre en `semantic.light.tokens.json` **y** `semantic.dark.tokens.json`, apuntando a primitivos con `{color.navy.700}`.
   - Estilo de texto → `typography.tokens.json`.
2. `npm run build` regenera `css/tokens.css`, `dist/tokens.json` y `dist/glue.css`.
3. Comprueba el contraste (texto ≥ 4.5:1, controles ≥ 3:1) y documéntalo en `docs/02-color.md`.
4. Anota el cambio en `CHANGELOG.md`.

**Nunca edites `css/tokens.css` ni `dist/` a mano.**

## 5. Conectar con zeroheight

1. En zeroheight, crea un styleguide "Glue Design System".
2. **Tokens:** en zeroheight ve a *Tokens*, crea un *token set*, elige *JSON import* como origen y sube [`dist/zeroheight/glue.tokens.json`](../dist/zeroheight/glue.tokens.json).
   - Un solo archivo y un solo set con los dos temas: primitivos y tipografía compartidos, y los semánticos en `light.*` y `dark.*` (por ejemplo `light.color.bg.inverse` → `{color.navy.700}` y `dark.color.bg.inverse` → `{color.navy.200}`).
   - Valores en el formato que valida zeroheight: colores hex (`#153180`), medidas como texto con `px` o `rem` (`16px`), duraciones en `ms`. Los alias se mantienen.
   - Se genera con `npm run build` desde `tokens/` y el build falla si algún valor no pasa esas reglas. No lo edites a mano: cambia `tokens/` y vuelve a compilar.
   - Si zeroheight marca algún token como no importable, copia el mensaje y corrige el origen en `tokens/`.
3. **Páginas:** crea una página por archivo de `docs/` en este orden: Principios, Color, Tipografía, Espaciado, Layouts y grids, Componentes (una subpágina por archivo de `docs/componentes/`), Pantallas de ejemplo, Guía de uso, Accesibilidad. Pega el Markdown: zeroheight conserva tablas y bloques de código.
4. **Ejemplos en vivo:** activa GitHub Pages desde `main`, carpeta raíz `/`, y embébelos en zeroheight con bloques de iframe/código. El `index.html` de la raíz da URLs cortas:
   - `https://rmeoni.github.io/glue-design-system/` → guía viva (`examples/index.html`)
   - `…/#home`, `…/#booking`, `…/#case-study` → cada pantalla de ejemplo
   - `…/#componentes` (o cualquier otra sección) → esa sección de la guía viva
5. **Figma:** enlaza la librería de Figma para mostrar los componentes junto al código.

## 6. Conectar con Figma

1. Instala **Tokens Studio for Figma** y añade un *sync provider* de GitHub con este repo, rama `main`, ruta `tokens`, almacenamiento multi-archivo.
2. Tokens Studio lee `$metadata.json` y `$themes.json`: verás los temas **Light** y **Dark**.
3. *Export to Figma → Variables* con los temas como modos: primitivos en una colección, semánticos en otra con modos Light/Dark. Exporta también los estilos de texto desde `typography`.
4. Construye los componentes de Figma **solo** con variables semánticas, con los mismos nombres y variantes que el CSS (Button: `variant=primary|secondary|ghost`, `size=lg|md|sm`, `state=default|hover|focus|disabled`).
5. Cambios de token: se hacen en el repo (PR) y se sincronizan con *Pull from GitHub*. Si un diseñador cambia un token en Figma, hace *Push to GitHub* en una rama y abre un PR.

## 7. Conectar con Figma Make

Figma Make genera código React a partir de prompts; Glue le da las reglas y el CSS.

1. **Guidelines:** la carpeta [`guidelines/`](../guidelines/) sigue la convención de Figma Make (`guidelines/Guidelines.md` como entrada). Está en inglés porque la lee la IA. Pégala en las *Guidelines* del archivo Make o publícala junto al paquete.
2. **Estilos:** importa `dist/glue.css` en el proyecto Make (por URL de jsDelivr o copiando el archivo a `styles/`). Los componentes de Make usan `className="g-button"`, etc.
3. **Librería:** si conectas la librería de Figma de Glue, Make usará sus variables y componentes como referencia visual.
4. Prompt de partida recomendado: *"Build a [screen] using the Glue Design System. Follow guidelines/Guidelines.md. Use only Glue classes and CSS variables."*

## 8. Contribuir

- Rama por cambio, PR a `main`, una persona revisa diseño y otra código.
- Un componente nuevo necesita: CSS en `components.css` con tokens semánticos, ficha en `docs/componentes/`, ejemplo en `examples/index.html`, regla en `guidelines/components.md` y entrada en el `CHANGELOG.md`.
- Pregunta antes de crear: ¿se resuelve con un componente existente o con composición?

## 9. Versionado

[SemVer](https://semver.org/lang/es/):

- **Patch** (1.0.x): corrección visual o de documentación sin cambiar nombres.
- **Minor** (1.x.0): token, variante o componente nuevo.
- **Major** (x.0.0): renombrar o eliminar un token, clase o variante.

Publica con un tag `vX.Y.Z` para que el CDN lo sirva.
