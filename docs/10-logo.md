# Logo

El logo de UXRodrigo tiene tres partes: el **símbolo** (tres arcos que forman una "r"), el **wordmark** "uxrodrigo" en minúsculas con tracking amplio y el **badge de verificado**. Archivos en [`assets/logo/`](../assets/logo/).

## Archivos

| Archivo | Uso |
|---|---|
| `uxrodrigo-logo.svg` | Logo completo en navy (`#153180`) con badge azul. Fondos claros. |
| `uxrodrigo-logo-white.svg` | Logo completo en blanco con badge azul. Fondos oscuros y sección inverse en modo claro. |
| `uxrodrigo-logo-mono.svg` | Todo en `currentColor`, para incrustar el SVG en línea y que tome el color del texto. Un solo color, incluido el badge. |
| `uxrodrigo-symbol.svg` / `-white.svg` | Solo el símbolo, cuadrado. Avatares, favicon, espacios pequeños. |
| `favicon.svg` | Símbolo que cambia de navy a blanco según el tema del navegador. |
| `favicon-32.png`, `apple-touch-icon.png` | Respaldos PNG (32 px y 256 px) de uxrodrigo.com. |

## En código

El componente `.g-logo` lleva las dos versiones y el CSS muestra la que corresponde al tema y a la sección:

```html
<a class="g-navbar__brand g-logo" href="/" aria-label="UXRodrigo, inicio">
  <img class="g-logo__on-light" src="assets/logo/uxrodrigo-logo.svg" alt="" width="199" height="30">
  <img class="g-logo__on-dark"  src="assets/logo/uxrodrigo-logo-white.svg" alt="" width="199" height="30">
</a>
```

| Fondo | Versión que se muestra |
|---|---|
| Página clara | navy |
| Página oscura | blanca |
| `.g-section--inverse` en claro (navy) | blanca |
| `.g-section--inverse` en oscuro (navy claro) | navy |

Si el logo es un enlace, el nombre accesible va en el `aria-label` del enlace y las imágenes llevan `alt=""`. Si no es un enlace, usa `alt="UXRodrigo"`.

Favicons en el `<head>`:

```html
<link rel="icon" href="assets/logo/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/logo/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/logo/apple-touch-icon.png">
```

## Tamaños

| Token | Alto | Ancho aprox. | Uso |
|---|---|---|---|
| `size.logo-sm` | 24 px | 159 px | Navbar por debajo de 480 px |
| `size.logo-md` | 30 px | 199 px | Navbar y footer (el tamaño de uxrodrigo.com) |
| `size.logo-lg` | 48 px | 318 px | Portadas, hero, presentaciones |

Clases: `.g-logo--sm`, `.g-logo` (md por defecto), `.g-logo--lg`. **Mínimo:** 18 px de alto (≈120 px de ancho) para el logo completo y 16 px para el símbolo. Por debajo de eso, usa solo el símbolo.

## Área de protección

Deja libre a cada lado un espacio igual a **la mitad de la altura del logo** (15 px a 30 px de alto). Ningún texto, borde ni imagen entra en ese espacio.

## Color

- Navy `#153180` o blanco. Nada más.
- El badge es `color.verified` (`#0095F6`). Este azul existe solo en el logo: **nunca** se usa en la interfaz.
- Cuando hace falta un logo de una sola tinta (impresión, grabado, sello), usa `uxrodrigo-logo-mono.svg`.

## No hacer

- ❌ Estirar, inclinar, rotar o cambiar el espaciado de las letras.
- ❌ Recolorear el wordmark con coral u otros colores, o añadirle sombras o degradados.
- ❌ Poner el logo navy sobre fondos oscuros o el blanco sobre fondos claros.
- ❌ Ponerlo sobre fotos con mucho detalle sin un fondo liso detrás.
- ❌ Quitar el badge del logo completo, o mover el símbolo de sitio.
- ❌ Volver a escribir el wordmark con otra tipografía.
