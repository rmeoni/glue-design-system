# Tarjeta

Agrupa contenido relacionado con una sola acción.

## Tarjeta de contenido

```html
<div class="g-card">
  <span class="g-eyebrow">30 min</span>
  <h3 class="g-card__title">Llamada de descubrimiento</h3>
  <p class="g-card__meta">Google Meet · Gratis</p>
  <p>Hablamos de tu producto…</p>
  <div class="g-card__footer"><a class="g-button g-button--block" href="#">Elegir horario</a></div>
</div>
```

- Padding 32 · `radius.lg` (32) · borde `border.default` · `bg.raised` · `elevation.card`.
- `__footer` se pega abajo (`margin-top: auto`) para alinear botones en una fila de tarjetas.

| Modificador | Efecto |
|---|---|
| `--flat` | Sin sombra (opciones dentro de otra tarjeta) |
| `--surface` | Fondo `bg.surface`, sin borde ni sombra (testimonios) |

## Tarjeta de proyecto

Toda la tarjeta es el enlace. Imagen arriba, texto abajo, zoom suave al pasar.

```html
<a class="g-project-card" href="/caso">
  <div class="g-media g-media--4x3"><img src="…" alt="…"></div>
  <div>
    <span class="g-eyebrow">UX · UI</span>
    <h3 class="g-project-card__title">Rediseño de app de reservas</h3>
    <p class="g-project-card__text">+32% en reservas completadas.</p>
  </div>
</a>
```

## Reglas

- ✅ Una acción por tarjeta. ✅ Misma altura en una fila.
- ❌ No anides tarjetas con sombra. ❌ No pongas enlaces dentro de una `g-project-card`.
