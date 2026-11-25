# Utilidades

| Clase | Qué hace |
|---|---|
| `.g-theme-toggle` | Botón de icono con luna/sol. Con `examples/assets/glue.js` cambia `data-theme` y lo recuerda. |
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
