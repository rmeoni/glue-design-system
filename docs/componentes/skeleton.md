# Skeleton de carga

Formas grises con la silueta del contenido que está cargando. Reserva el espacio para que nada salte al llegar, y un brillo recorre cada forma para indicar que la página sigue trabajando. Ver la sección **Movimiento** de la guía viva (`examples/index.html#movimiento`).

```html
<div class="g-card" aria-busy="true">
  <span class="g-visually-hidden">Cargando…</span>
  <div class="g-stack g-gap-3" aria-hidden="true">
    <span class="g-skeleton g-skeleton--media"></span>
    <span class="g-skeleton g-skeleton--label"></span>
    <span class="g-skeleton g-skeleton--heading"></span>
    <div><span class="g-skeleton g-skeleton--text"></span><span class="g-skeleton g-skeleton--text"></span></div>
    <span class="g-skeleton g-skeleton--button"></span>
  </div>
</div>
```

| Forma | Clase | Medida |
|---|---|---|
| Línea de texto | `--text` | 12 px de alto en un ritmo de 24 px; la última línea de un grupo al 70 % |
| Etiqueta / eyebrow | `--label` | 10 px, 30 % de ancho |
| Título | `--heading` | 24 px, 60 % de ancho, `radius.sm` |
| Avatar | `--avatar` | 48 px, círculo |
| Botón | `--button` | 140 × 48 px, `radius.full` |
| Imagen | `--media` | 16:9, `radius.md` |

Ajusta anchos sueltos con `style="width: …"` para que se parezcan al contenido real.

## Claro y oscuro

| Token | Claro | Oscuro |
|---|---|---|
| `color.skeleton.base` | neutral.100 · #E8E8E8 | neutral.700 · #2A2A2A |
| `color.skeleton.highlight` | neutral.50 · #F7F7F8 | neutral.600 · #525255 |

El mismo HTML sirve en los dos temas: solo cambian los tokens. La base se distingue de `bg.page` y `bg.raised` en ambos temas. Es decorativo, así que no tiene requisito de contraste: la información la da el texto oculto "Cargando…".

## Movimiento

- Brillo de izquierda a derecha con `transform` (barato para el navegador), un ciclo cada `duration.loop` (1600 ms) con `easing.standard`.
- Con `prefers-reduced-motion: reduce` el brillo desaparece y queda la forma estática.
- Al llegar el contenido, sustituye el skeleton y deja que el contenido aparezca con un fundido en `duration.base`.

## Reglas

- ✅ Copia la forma del contenido real: imagen, título, líneas, botón.
- ✅ `aria-busy="true"` en la zona que carga y `aria-hidden="true"` en las formas; un "Cargando…" oculto para lectores de pantalla. Quita `aria-busy` al terminar.
- ❌ No lo uses en cargas de menos de 300 ms: el parpadeo molesta más que la espera.
- ❌ No mezcles skeleton y spinner en la misma zona. ❌ No lo uses para contenido que nunca llega (errores): muestra el error.
