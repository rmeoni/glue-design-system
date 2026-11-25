# Footer

Cierre de página con el mismo estilo que uxrodrigo.com: una superficie navy (casi negra en oscuro) con **los mismos enlaces que el navbar** y una barra inferior con copyright y enlaces legales separados por puntos.

```html
<footer class="g-footer">
  <div class="g-container">
    <nav class="g-footer__nav" aria-label="Pie de página">
      <a href="home.html" aria-current="page">Inicio</a>
      <a href="#trabajos">Trabajos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </div>
  <div class="g-footer__bottom">
    <div class="g-container g-footer__bottom-inner">
      <span>© 2026 UXRodrigo</span><span class="g-footer__dot" aria-hidden="true"></span>
      <a href="/privacy-policy.html">Privacidad</a><span class="g-footer__dot" aria-hidden="true"></span>
      <a href="/terms-of-service.html">Términos</a>
    </div>
  </div>
</footer>
```

- **Enlaces principales (`.g-footer__nav`):** los mismos del navbar, en el mismo orden y con el mismo `aria-current`. 17 px, medium, separados 32 px (24 px en móvil).
- **Barra inferior (`.g-footer__bottom`):** 11 px, `footer.text-muted`; los enlaces en `footer.text`; puntos de 3 px entre elementos (`.g-footer__dot`, decorativos).
- Ancho completo, como el navbar: márgenes `3vw` en escritorio (mínimo el gutter).

| Token | Claro | Oscuro |
|---|---|---|
| `color.footer.bg` | navy.700 | neutral.900 |
| `color.footer.bottom-bg` | navy.800 | black |
| `color.footer.border` | navy.700 | neutral.700 |
| `color.footer.text` | white (11,8:1) | navy.100 (16,1:1) |
| `color.footer.text-muted` | navy.200 (7,7:1) | neutral.400 (5,6:1) |
| `color.footer.disabled` | navy.400 | neutral.500 |
| `color.footer.focus` | coral.400 (4,0:1) | coral.400 (6,8:1) |

`.g-footer__heading` y las listas en columnas siguen funcionando para footers con más secciones.

## Estados de los enlaces

| Estado | Estilo | Cómo se marca |
|---|---|---|
| Normal | `footer.text` | — |
| Hover | Línea de 1 px en el color del enlace, 2 px bajo el texto: entra por la izquierda y sale por la derecha (`duration.moderate`). El texto no cambia de color, como en uxrodrigo.com | `:hover` |
| Foco | Contorno de 2 px `footer.focus` (coral.400), separado 2 px | `:focus-visible` |
| Presionado | `footer.text-muted` + línea completa | `:active` |
| Actual | Línea fija, como en el navbar | `aria-current="page"` o `"true"` |
| Deshabilitado | `footer.disabled`, sin línea, cursor `not-allowed` | `<a role="link" aria-disabled="true">` sin `href` |

- Cada enlace tiene un destino real. Nunca `href="#"`: si la página aún no existe, usa el estado deshabilitado.
