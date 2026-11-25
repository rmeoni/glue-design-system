# Navbar

Barra superior fija con marca, enlaces y acciones.

```html
<header class="g-navbar">
  <div class="g-container">
    <div class="g-navbar__inner">
      <a class="g-navbar__brand" href="/">UXRodrigo<span class="g-text-accent">.</span></a>
      <ul class="g-navbar__links">
        <li><a class="g-navbar__link" href="/" aria-current="page">Inicio</a></li>
        <li><a class="g-navbar__link" href="/trabajos">Trabajos</a></li>
      </ul>
      <div class="g-navbar__actions">
        <a class="g-button g-button--secondary g-button--md" href="/cv.pdf">Descargar CV</a>
        <a class="g-button g-button--md" href="/agendar">Agendar llamada</a>
        <button class="g-icon-button g-icon-button--plain g-theme-toggle" data-glue-theme-toggle aria-pressed="false" aria-label="Cambiar a modo oscuro">…</button>
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

- ✅ Máximo 5 enlaces. ✅ `aria-current="page"` en el actual.
- ✅ Un solo CTA primario.
- ❌ Sin desplegables anidados.
