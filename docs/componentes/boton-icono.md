# Botón de icono

Acción compacta representada solo por un icono: volver arriba, anterior/siguiente, cerrar, cambiar tema, menú.

| Variante | Clase | Uso |
|---|---|---|
| Por defecto | `.g-icon-button` | Superficie + borde de control. Volver arriba. |
| Primario | `--primary` | Flechas de carrusel. |
| Plano | `--plain` | En la navbar (tema, menú) y para cerrar. |
| Pequeño | `--sm` | 36 px, navegación de calendario. |

Tamaño por defecto 44 px (objetivo táctil mínimo); icono de 20 px.

```html
<button class="g-icon-button" type="button" aria-label="Volver arriba">
  <svg aria-hidden="true">…</svg>
</button>
```

## Reglas

- ✅ **Siempre `aria-label`**, y `aria-hidden="true"` en el SVG.
- ✅ Si alterna (tema), usa `aria-pressed`; si abre algo (menú), `aria-expanded` + `aria-controls`.
- ❌ No uses un botón de icono para la acción principal de la pantalla.
