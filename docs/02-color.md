# Color

Glue tiene dos niveles de color: **primitivos** (la paleta) y **semánticos** (el uso). Los componentes solo usan semánticos.

Fuente: [`tokens/primitives.tokens.json`](../tokens/primitives.tokens.json), [`tokens/semantic.light.tokens.json`](../tokens/semantic.light.tokens.json), [`tokens/semantic.dark.tokens.json`](../tokens/semantic.dark.tokens.json).

## Paleta de marca

### Navy — primario
Para actuar: botones, navegación, secciones invertidas.

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `color.navy.50`  | `#F1F5FF` | | `color.navy.500` | `#526FB0` |
| `color.navy.100` | `#DEE8FE` | | `color.navy.600` | `#335198` |
| `color.navy.200` | `#BED1F9` | | **`color.navy.700`** | **`#153180`** · navy de marca |
| `color.navy.300` | `#9DB4E4` | | `color.navy.800` | `#071C62` |
| `color.navy.400` | `#7791CA` | | `color.navy.900` | `#020C4C` |

### Coral — acento
Para señalar: eyebrows, enlaces, foco, selección.

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `color.coral.50`  | `#FEF2EF` | | `color.coral.500` | `#CF5339` |
| `color.coral.100` | `#FEE0D9` | | **`color.coral.600`** | **`#AD412A`** · texto sobre claro |
| `color.coral.200` | `#FEC0B1` | | `color.coral.700` | `#8C2F1C` |
| `color.coral.300` | `#FE9780` | | `color.coral.800` | `#6D1E0D` |
| **`color.coral.400`** | **`#F96A4C`** · coral de marca | | `color.coral.900` | `#4B0B01` |

> ⚠️ `coral.400` es el coral de marca pero tiene **menos de 3:1 sobre blanco**. Sobre fondos claros usa `coral.600` para texto. `coral.400` es para texto sobre oscuro o para decoración.

### Neutral
`#F7F7F8` · `#E8E8E8` · `#D4D4D6` · `#B3B3B6` · `#888888` · `#6B6B6E` · `#525255` · `#2A2A2A` · `#1A1A1A` · `#0A0A0A` (50 → 900), más `white` y `black`.

### Feedback (nuevo en Glue)
Separados del coral para que un error nunca se confunda con el acento de marca.

| Rol | 50 (fondo claro) | 300 (texto oscuro) | 600/700 (texto claro) | 900 (fondo oscuro) |
|---|---|---|---|---|
| Éxito — green | `#EAF7EF` | `#6FD39A` | `#1E7A46` | `#0F2E1C` |
| Error — red | `#FDECEA` | `#FF8A80` | `#B3261E` | `#3A0E0B` |
| Aviso — amber | `#FFF6E0` | `#F2B84B` | `#8A5A00` (700) | `#3A2800` |
| Info | navy.50 | navy.200 | navy.700 | navy.900 |

## Tokens semánticos

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `color.bg.page` | white | neutral.900 | Fondo de página |
| `color.bg.surface` | neutral.50 | neutral.800 | Secciones alternas, campos, footer |
| `color.bg.surface-alt` | navy.50 | neutral.800 | Paneles con tinte de marca |
| `color.bg.raised` | white | neutral.800 | Tarjetas |
| `color.bg.inverse` | navy.700 | navy.200 | Sección de cierre / CTA |
| `color.text.primary` | neutral.900 | neutral.100 | Texto y títulos |
| `color.text.secondary` | neutral.600 | neutral.400 | Descripciones, metadatos |
| `color.text.accent` | coral.600 | coral.400 | Eyebrows, viñetas |
| `color.text.link` | coral.600 | coral.400 | Enlaces dentro de texto |
| `color.text.on-inverse` | white | navy.900 | Texto sobre `bg.inverse` |
| `color.border.default` | neutral.200 | neutral.700 | Divisores (decorativo) |
| `color.border.control` | neutral.500 | neutral.500 | Bordes de campos y chips (≥3:1) |
| `color.border.strong` | navy.700 | neutral.100 | Hover y foco de campos |
| `color.focus-ring` | coral.600 | coral.400 | Anillo de foco |
| `color.action.primary-bg` / `-hover` / `-fg` | navy.700 / 800 / white | navy.200 / 100 / navy.900 | Botón primario |
| `color.action.secondary-border` / `-fg` / `-bg-hover` | navy.700 / navy.700 / navy.50 | neutral.100 / neutral.100 / neutral.700 | Botón secundario y ghost |
| `color.action.chip-bg` / `-hover` / `-fg` | navy.50 / navy.100 / navy.700 | neutral.700 / 600 / 100 | Chip y badge |
| `color.action.chip-bg-selected` / `-fg-selected` | coral.600 / white | coral.400 / neutral.900 | Chip seleccionado |
| `color.action.disabled-bg` / `-fg` | neutral.100 / 500 | neutral.800 / 500 | Deshabilitado |
| `color.action.on-inverse` | navy.200 | navy.700 | Acción de texto sobre `bg.inverse` (snackbar) |
| `color.feedback.{success,warning,error,info}-{fg,bg}` | ver tabla anterior | | Alertas, errores de campo |

En CSS cada token es una variable: `color.action.primary-bg` → `var(--color-action-primary-bg)`.

## Contraste verificado

| Combinación | Ratio | |
|---|---|---|
| navy.700 sobre white | 11.78:1 | AAA |
| coral.600 sobre white | 5.89:1 | AA |
| neutral.600 sobre white | 7.79:1 | AAA |
| neutral.500 (borde control) sobre white | 5.31:1 | ≥3:1 ✓ |
| navy.900 sobre navy.200 (primario oscuro) | 11.80:1 | AAA |
| navy.700 sobre white (hover de secundario en `--inverse`, claro) | 11.78:1 | AAA |
| navy.200 sobre navy.900 (hover de secundario en `--inverse`, oscuro) | 11.80:1 | AAA |
| navy.200 sobre navy.700 / navy.700 sobre navy.200 (`action.on-inverse`, acción del snackbar) | 7.67:1 | AAA |
| coral.400 sobre neutral.900 | 6.78:1 | AA |
| neutral.400 sobre neutral.900 | 5.58:1 | AA |
| green.600 / red.600 / amber.700 sobre white | 5.35 / 6.54 / 5.93 | AA |
| green.300 / red.300 / amber.300 sobre neutral.900 | 10.80 / 8.67 / 11.06 | AAA |

## Reglas

- ✅ Usa siempre el token semántico. ❌ `color: #153180`.
- ✅ Coral para señalar (texto pequeño, foco, selección). ❌ Botones con fondo coral.
- ✅ Un solo `bg.inverse` por página, normalmente la sección de contacto final.
- ✅ Sobre un fondo claro tintado (`navy.50`, `navy.100`, el celeste claro del hover y de los chips) el texto es siempre `navy.700`. ❌ Texto blanco o heredado de `--inverse` sobre ese celeste: no llega a 4.5:1.
- ✅ En `.g-section--inverse` usa `g-button--secondary` o `g-button--ghost` tal cual: el sistema los adapta (borde y texto `text.on-inverse`; en hover se invierten). ❌ `style="color: inherit"` o `border-color: currentColor` en un botón: el estilo inline gana al `:hover` y rompe el contraste.
- ❌ No pongas `border.default` en un control: no llega a 3:1. Usa `border.control`.
- ❌ No uses `red` para destacar algo positivo ni `coral` para un error.
