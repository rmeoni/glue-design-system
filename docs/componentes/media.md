# Media

Marco para imágenes y vídeos. Da el radio de 48 px característico de uxrodrigo.com y reserva el espacio antes de cargar.

```html
<div class="g-media g-media--16x9"><img src="cover.jpg" alt="Vista general de la app"></div>

<figure class="g-figure">
  <div class="g-media g-media--16x9 g-media--sm"><img src="grafico.png" alt="Abandono por paso"></div>
  <figcaption>Abandono por paso: el paso 4 concentraba el 41%.</figcaption>
</figure>
```

| Modificador | Efecto |
|---|---|
| `--16x9`, `--4x3`, `--1x1` | Ratio fijo |
| `--sm` | Radio de 32 px (imágenes dentro de texto) |

## Reglas

- ✅ `alt` que describe lo que aporta la imagen; `alt=""` si es decorativa.
- ✅ Siempre con ratio para evitar saltos de layout.
- ❌ Logos, iconos e ilustraciones recortadas no van en `.g-media` (no llevan radio).
