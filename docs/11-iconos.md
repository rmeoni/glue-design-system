# Iconos ilustrativos

Iconos de línea **dibujados a mano para UXRodrigo**. Son iconos "spot": acompañan a un título para presentar un servicio, una sección o un estado vacío. No son iconos de interfaz (para flechas, cerrar, menú, etc. Glue usa iconos de línea de 2 px tipo Lucide, inline en cada componente).

Archivos en [`assets/icons/`](../assets/icons/).

| Icono | Archivo | Uso en uxrodrigo.com |
|---|---|---|
| Monitor | `monitor.svg` | Diseño UX y desarrollo |
| Capas | `layers.svg` | Logos e iconos |
| Cámara | `camera.svg` | Maquetas de producto |
| Hojas | `pages.svg` | Contenido, documentación |
| Pesa | `dumbbell.svg` | Entrenamiento, mentoría, esfuerzo |
| Reproducir | `play.svg` | Vídeo, demo, charla |

`assets/icons/sprite.svg` reúne todos como `<symbol id="glue-{nombre}">`; se genera con `npm run build`. Los PNG originales de monitor, capas y cámara están en `assets/icons/source/`.

## Estilo

- Línea gruesa: unos **3.3 px a 48 px de alto** (≈7% de la altura), extremos y uniones redondeados.
- Formas simples y geométricas con esquinas suaves, sin relleno.
- Un solo color: `color.icon.spot` (navy.700 en claro, neutral.100 en oscuro). En `.g-section--inverse` heredan el color del texto.
- Cada icono conserva sus proporciones; se alinean por la **altura**, no por una caja cuadrada.

## Tamaños

| Token | Alto | Clase |
|---|---|---|
| `size.spot-sm` | 32 px | `.g-spot-icon--sm` |
| `size.spot-md` | 48 px | `.g-spot-icon` (por defecto, el de uxrodrigo.com) |
| `size.spot-lg` | 64 px | `.g-spot-icon--lg` |

## En código

Incrusta el SVG en el HTML para que el trazo tome el color del token (`stroke="currentColor"`). Como `<img>` saldría negro.

```html
<svg class="g-spot-icon" viewBox="0 0 335 241" fill="none" stroke="currentColor" stroke-width="16.3"
     stroke-linejoin="round" aria-hidden="true" focusable="false">…</svg>
```

Con el sprite (servido desde el mismo dominio):

```html
<svg class="g-spot-icon" viewBox="0 0 335 241" aria-hidden="true"><use href="/assets/icons/sprite.svg#glue-monitor"/></svg>
```

## Feature

Icono + título centrados, en una lista. Es la sección "Enfoque en design thinking" de uxrodrigo.com.

```html
<ul class="g-features">
  <li class="g-feature">
    <svg class="g-spot-icon" … aria-hidden="true">…</svg>
    <h3 class="g-feature__title">Diseño UX<br>y desarrollo</h3>
  </li>
</ul>
```

- `.g-features` reparte 2–4 elementos por fila (mínimo 160 px cada uno).
- `__text` opcional para una línea de descripción en small.

## Reglas

- ✅ Decorativos: `aria-hidden="true"`; el significado lo da el título.
- ✅ Un icono por feature; todos los de una fila al mismo tamaño.
- ❌ No los rellenes, no cambies el grosor del trazo ni los pongas en coral.
- ❌ No los uses dentro de botones ni como iconos de interfaz.
- ❌ No mezcles estos iconos con iconos de otras librerías en la misma fila.
- Para un icono nuevo: dibújalo con las mismas reglas, guárdalo en `assets/icons/{nombre}.svg` con `stroke="currentColor"` y un `<title>`, y ejecuta `npm run build`.
