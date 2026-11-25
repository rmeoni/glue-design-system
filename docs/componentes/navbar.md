# Navbar

Barra superior fija con marca, enlaces y acciones.

```html
<header class="g-navbar">
  <div class="g-container">
    <div class="g-navbar__inner">
      <a class="g-navbar__brand g-logo" href="/" aria-label="UXRodrigo, inicio">
        <img class="g-logo__on-light" src="assets/logo/uxrodrigo-logo.svg" alt="" width="199" height="30">
        <img class="g-logo__on-dark" src="assets/logo/uxrodrigo-logo-white.svg" alt="" width="199" height="30">
      </a>
      <ul class="g-navbar__links">
        <li><a class="g-navbar__link" href="/" aria-current="page">Inicio</a></li>
        <li><a class="g-navbar__link" href="/trabajos">Trabajos</a></li>
      </ul>
      <div class="g-navbar__actions">
        <a class="g-button g-button--secondary g-button--md" href="/cv.pdf">Descargar CV</a>
        <a class="g-button g-button--md" href="/agendar">Agendar llamada</a>
        <button class="g-theme-switch" type="button" role="switch" aria-checked="false" aria-label="Modo oscuro" data-glue-theme-toggle><svg viewBox="0 0 115 35" aria-hidden="true">…</svg></button>
        <button class="g-icon-button g-icon-button--plain g-navbar__menu-button" data-glue-menu aria-controls="menu" aria-expanded="false" aria-label="Abrir menú">…</button>
      </div>
    </div>
    <nav class="g-navbar__panel" id="menu" data-open="false" aria-label="Menú">…</nav>
  </div>
</header>
```

| Ancho | Comportamiento |
|---|---|
| < 480 px | Marca + tema + menú. El CTA primario se repite dentro del panel con `--block`. |
| 480–991 px | Marca + CTA primario + tema + menú. Enlaces en el panel. |
| ≥ 992 px | Enlaces visibles con subrayado animado; desaparece el botón de menú. |
| ≥ 1280 px | Aparece el botón secundario. |

## Reglas

- ✅ El logo va a la izquierda, a 30 px de alto (24 px por debajo de 480 px). Ver [Logo](../10-logo.md).

- ✅ Máximo 5 enlaces. ✅ Marca el enlace actual con `aria-current`, en el navbar y en el menú móvil:
  - `"page"`: el enlace es la página que estás viendo (Inicio en la home).
  - `"true"`: la página pertenece a esa sección (Trabajos en un caso de estudio).
  - `"location"`: en una página de una sola pantalla con anclas, la sección que estás leyendo. Pon `data-glue-spy` en el `<header>` y `glue.js` lo actualiza al hacer scroll.
- ✅ Cada enlace tiene un destino real. ❌ Nunca `href="#"`: si aún no existe, usa el estado deshabilitado.
- ✅ Un solo CTA primario.
- ❌ Sin desplegables anidados.

## Estados de los enlaces

| Estado | Navbar (escritorio) | Menú móvil | Cómo se marca |
|---|---|---|---|
| Normal | `text.primary`, medium | igual | — |
| Hover | Línea de 1 px, 2 px bajo el texto: entra por la izquierda y sale por la derecha (`duration.moderate`, `easing.standard`), como en uxrodrigo.com | Subrayado de texto de 2 px, separado 6 px | `:hover` |
| Foco | Contorno de 2 px `focus-ring`, separado 2 px | igual | `:focus-visible` |
| Presionado | `text.accent` + subrayado completo, sin animación | `text.accent` + subrayado de texto | `:active` |
| Actual | Subrayado fijo | Subrayado de texto fijo | `aria-current="page"`, `"true"` o `"location"` |
| Deshabilitado | `action.disabled-fg`, sin subrayado, cursor `not-allowed` | igual | `<a role="link" aria-disabled="true">` sin `href` |

- El enlace deshabilitado no tiene `href`, así que no recibe foco ni se puede activar.
- `.g-navbar__link--block` aplica el estilo del menú móvil fuera del panel (para documentación).
- `data-state="hover" | "focus" | "pressed"` fuerza un estado para mostrarlo en la guía o en zeroheight. No lo uses en producto.
- Contraste: presionado 5,9:1 en claro y 6,8:1 en oscuro; deshabilitado 5,3:1 en claro y 3,7:1 en oscuro (WCAG no lo exige en controles deshabilitados).
