# Utilidades

| Clase | Qué hace |
|---|---|
| `.g-theme-switch` | Interruptor de tema de uxrodrigo.com: sol · pista con bola · luna. La bola está junto al sol en claro y se desliza a la luna en oscuro (`duration.base`). `role="switch"`, `aria-checked` y la etiqueta fija "Modo oscuro". SVG inline en `currentColor`, 22 px de alto (18 px bajo 480 px) en un botón de 44 px. Con `examples/assets/glue.js` cambia `data-theme` y lo recuerda. Copia el marcado de cualquier página de `examples/`. |
| `.g-lang-toggle` | Botón de idioma de uxrodrigo.com: globo de 22 px (`.g-lang-toggle__icon`, SVG en `currentColor`) + código del idioma destino en `.g-lang-toggle__label` (`action.secondary-fg`, bold). Va después de `.g-theme-switch`. Ver [Pantallas de ejemplo](../07-pantallas-de-ejemplo.md#idioma-español--inglés). |
| `.g-theme-toggle` | Obsoleto: botón de icono con luna/sol. Usa `.g-theme-switch`. |
| `.g-back-to-top` | Fija un `.g-icon-button` abajo a la derecha. Necesita `aria-label="Volver arriba"`. |
| `.g-skip-link` | "Saltar al contenido": primer elemento del `<body>`, visible al recibir foco. |
| `.g-visually-hidden` | Oculta visualmente pero no para lectores de pantalla. |
| `.g-divider` / `<hr>` | Línea `border.default` con 32 px arriba y abajo. |
| `.g-stack`, `.g-cluster`, `.g-gap-{2,3,4,6,8,12}` | Espaciado entre hermanos (ver [Espaciado](../04-espaciado.md)). |
| `.g-text-secondary`, `.g-text-accent`, `.g-text-center` | Color y alineación de texto. |
| `.g-h1`…`.g-h6`, `.g-lead`, `.g-body`, `.g-small` | Estilos de texto sin cambiar la etiqueta HTML. |

## Tema

```html
<html data-theme="light">  <!-- forzar claro -->
<html data-theme="dark">   <!-- forzar oscuro -->
<html>                     <!-- sigue al sistema operativo -->
```
