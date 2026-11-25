# Breadcrumbs

Muestra dónde está la página dentro del sitio. Para páginas de segundo nivel o más.

```html
<nav class="g-breadcrumbs" aria-label="Migas de pan">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="/trabajos">Trabajos</a></li>
    <li><span aria-current="page">App de reservas</span></li>
  </ol>
</nav>
```

- `typography.small` · separador "/" · página actual en `text.primary` 500 sin enlace.

- Hover: la misma línea animada que el navbar y el footer (1 px, color del enlace, entra por la izquierda y sale por la derecha). El texto no cambia de color.
