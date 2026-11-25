# Tipografía

Una sola familia: **Inter**, en pesos 400, 500, 600, 700 y 800. Tamaños fijos en px con interlineado en múltiplos de 4.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Pila de reserva: `Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

## Escala

| Estilo | Token | Tamaño / interlineado | Peso | Uso |
|---|---|---|---|---|
| H1 | `typography.h1` | 48 / 60 | 700 | Título de página. Uno por página. |
| H1 móvil | `typography.h1-mobile` | 40 / 48 | 700 | H1 por debajo de 992 px y cifras de `stat` |
| H2 | `typography.h2` | 36 / 48 | 700 | Título de sección |
| H3 | `typography.h3` | 24 / 32 | 700 | Título de tarjeta, subsección |
| H4 | `typography.h4` | 20 / 28 | 700 | Título de proyecto en grid |
| H5 | `typography.h5` | 17 / 24 | 700 | Título de timeline |
| H6 | `typography.h6` | 15 / 20 | 700 | Encabezado de columna de footer |
| Lead | `typography.lead` | 18 / 30 | 400 | Entradilla bajo H1/H2 |
| Body | `typography.body` | 15 / 24 | 400 | Texto por defecto |
| Quote | `typography.quote` | 17 / 24 | 400 | Citas |
| Small | `typography.small` | 13 / 20 | 400 | Metadatos, ayudas, pies de foto |
| Button | `typography.button` | 15 / 20 | 700 | Botones |
| Chip | `typography.chip` | 13 / 20 | 500 | Chips, **siempre en mayúsculas** |
| Label | `typography.label` | 11 / 16 · +0.8 px | 600 | Eyebrow y labels de formulario, **siempre en mayúsculas** |

En CSS cada estilo es un shorthand `font`: `font: var(--typography-h2);`. El tracking del label está en `--typography-label-letter-spacing` (o `--font-letter-spacing-label`).

Clases utilitarias: `.g-h1` … `.g-h6`, `.g-lead`, `.g-body`, `.g-small`, `.g-eyebrow`.

## Patrón de encabezado

El bloque más reconocible de Glue: eyebrow coral + título + entradilla.

```html
<span class="g-eyebrow">Caso de estudio</span>
<h2>Rediseño de app de reservas</h2>
<p class="g-lead">De siete pasos a tres.</p>
```

## Reglas

- **Sentence case** en títulos y botones. (En uxrodrigo.com los H2/H3 se capitalizan con CSS; Glue lo retira por legibilidad y por consistencia con los botones.)
- Ancho de lectura: **570–770 px** (`layout.container-narrow` / `-medium`). Nunca párrafos a 1170 px.
- No saltes niveles de encabezado por estética: usa la clase `.g-h3` sobre un `<h2>` si necesitas otro tamaño.
- Mayúsculas solo en `label` y `chip`, y siempre con el tracking del token.
- Máximo **tres estilos** de texto por tarjeta.
- Peso 800 solo para el logotipo / wordmark.
