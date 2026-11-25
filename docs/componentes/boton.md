# Botón

Dispara una acción o lleva a la siguiente tarea importante. Siempre en píldora.

## Variantes

| Variante | Clase | Cuándo |
|---|---|---|
| Primario | `.g-button` | La acción principal. **Uno por vista o tarjeta.** |
| Secundario | `.g-button.g-button--secondary` | Alternativa importante junto al primario ("Descargar CV"). |
| Ghost | `.g-button.g-button--ghost` | Acciones terciarias: cancelar, volver, "ver todos". |

## Tamaños

| Tamaño | Clase | Alto | Uso |
|---|---|---|---|
| Grande (por defecto) | — | 48 | Formularios y CTAs de sección |
| Mediano | `--md` | 44 | Barra de navegación |
| Pequeño | `--sm` | 36 | Dentro de tarjetas densas |
| Bloque | `--block` | — | Ocupa el ancho (formularios en tarjeta, menú móvil) |

## Anatomía

Contenedor píldora · icono opcional de 20 px a la izquierda · etiqueta (button 15/20, 700) · gap de 8 px.

## Tokens

`color.action.primary-bg`, `-bg-hover`, `-fg` · `color.action.secondary-border`, `-fg`, `-bg-hover` · `color.action.disabled-bg`, `-fg` · `size.control-lg/md/sm` · `radius.full` · `border-width.control` · `typography.button`.

## Código

```html
<button class="g-button" type="button">Agendar llamada</button>
<a class="g-button g-button--secondary" href="/cv.pdf">Descargar CV</a>
<button class="g-button g-button--ghost" type="button">Cancelar</button>
<button class="g-button" type="submit" disabled>Enviando…</button>
```

## Reglas

- ✅ Verbo + objeto en sentence case: "Agendar llamada", "Ver caso".
- ✅ `<a>` si navega, `<button>` si hace algo.
- ✅ Con dos botones, el primario va a la izquierda en texto alineado a la izquierda y arriba en móvil.
- ❌ Dos primarios juntos. ❌ Botones coral. ❌ Etiquetas de más de tres palabras.
- ❌ No cambies la altura con padding vertical: la fija el token.
