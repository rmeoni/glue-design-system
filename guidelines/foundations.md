# Foundations

All values are CSS custom properties from `css/tokens.css`. Source of truth: `tokens/*.tokens.json` (W3C DTCG).

## Color — semantic tokens (use these)

| Variable | Light | Dark | Use |
|---|---|---|---|
| `--color-bg-page` | #FFFFFF | #0A0A0A | Page background |
| `--color-bg-surface` | #F7F7F8 | #1A1A1A | Alternate sections, inputs, footer |
| `--color-bg-surface-alt` | #F1F5FF | #1A1A1A | Brand-tinted panel |
| `--color-bg-raised` | #FFFFFF | #1A1A1A | Cards |
| `--color-bg-inverse` | #153180 | #BED1F9 | Final CTA section |
| `--color-text-primary` | #0A0A0A | #E8E8E8 | Body and headings |
| `--color-text-secondary` | #525255 | #888888 | Descriptions, meta |
| `--color-text-accent` | #AD412A | #F96A4C | Eyebrows |
| `--color-text-link` | #AD412A | #F96A4C | Inline links |
| `--color-text-on-inverse` | #FFFFFF | #020C4C | Text on bg-inverse |
| `--color-border-default` | #D4D4D6 | #2A2A2A | Dividers, card edges (decorative) |
| `--color-border-control` | #6B6B6E | #6B6B6E | Input/chip edges (≥3:1) |
| `--color-border-strong` | #153180 | #E8E8E8 | Input hover/focus |
| `--color-focus-ring` | #AD412A | #F96A4C | Focus outline |
| `--color-action-primary-bg` / `-bg-hover` / `-fg` | #153180 / #071C62 / #FFF | #BED1F9 / #DEE8FE / #020C4C | Primary button |
| `--color-action-secondary-border` / `-fg` / `-bg-hover` | #153180 / #153180 / #F1F5FF | #E8E8E8 / #E8E8E8 / #2A2A2A | Secondary and ghost button |
| `--color-action-chip-bg` / `-bg-hover` / `-fg` | #F1F5FF / #DEE8FE / #153180 | #2A2A2A / #525255 / #E8E8E8 | Chip, badge |
| `--color-action-chip-bg-selected` / `-fg-selected` | #AD412A / #FFF | #F96A4C / #0A0A0A | Selected chip |
| `--color-action-on-inverse` | #BED1F9 | #153180 | Text action on bg-inverse (snackbar) |
| `--color-skeleton-base` / `-highlight` | #E8E8E8 / #F7F7F8 | #2A2A2A / #525255 | Loading skeleton |
| `--color-footer-bg` / `-bottom-bg` | #153180 / #071C62 | #0A0A0A / #000000 | Footer surface and bottom bar |
| `--color-footer-text` / `-text-muted` / `-focus` | #FFFFFF / #BED1F9 / #F96A4C | #DEE8FE / #888888 / #F96A4C | Footer links, bottom bar, focus ring |
| `--color-action-disabled-bg` / `-fg` | #E8E8E8 / #6B6B6E | #1A1A1A / #6B6B6E | Disabled |
| `--color-feedback-{success,warning,error,info}-fg` | #1E7A46 / #8A5A00 / #B3261E / #153180 | #6FD39A / #F2B84B / #FF8A80 / #BED1F9 | Feedback text, icons, error borders |
| `--color-feedback-{success,warning,error,info}-bg` | #EAF7EF / #FFF6E0 / #FDECEA / #F1F5FF | #0F2E1C / #3A2800 / #3A0E0B / #020C4C | Alert backgrounds |

Primitive ramps exist (`--color-navy-50…900`, `--color-coral-*`, `--color-neutral-*`, `--color-green|red|amber-*`) but are for building tokens, not components.

## Typography

Font: Inter (400, 500, 600, 700, 800). Apply with the `font` shorthand: `font: var(--typography-h2);`

| Token / class | Size / line | Weight | Use |
|---|---|---|---|
| `--typography-h1` / `h1`, `.g-h1` | 48/60 (40/48 below 992px) | 700 | Page title, once |
| `--typography-h2` / `h2`, `.g-h2` | 36/48 | 700 | Section title |
| `--typography-h3` / `h3`, `.g-h3` | 24/32 | 700 | Card title |
| `--typography-h4` | 20/28 | 700 | Project title |
| `--typography-h5` | 17/24 | 700 | Timeline title |
| `--typography-h6` | 15/20 | 700 | Footer column title |
| `--typography-lead` / `.g-lead` | 18/30 | 400 | Intro paragraph (secondary color) |
| `--typography-body` | 15/24 | 400 | Default |
| `--typography-small` / `.g-small` | 13/20 | 400 | Meta, hints, captions |
| `--typography-label` / `.g-eyebrow` | 11/16, +0.8px, uppercase | 600 | Eyebrow, form labels |
| `--typography-chip` | 13/20, uppercase | 500 | Chips |
| `--typography-button` | 15/20 | 700 | Buttons |

Reading width: 570–770px. Never full-width paragraphs.

## Spacing (4px base; the key is the multiple)

`--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 20 · `--space-6` 24 · `--space-8` 32 · `--space-12` 48 · `--space-16` 64 · `--space-24` 96 · `--space-32` 128

Put spacing on the parent with `.g-stack` (vertical) or `.g-cluster` (horizontal, wraps) plus `.g-gap-{2|3|4|6|8|12}`. Do not add margins to children.

## Radius

`--radius-xs` 4 · `--radius-sm` 8 · `--radius-md` 14 (inputs, alerts) · `--radius-lg` 32 (cards) · `--radius-xl` 48 (images) · `--radius-full` (buttons, chips). Logos and icons never get a radius.

## Elevation

`--elevation-card` for cards, `--elevation-raised` for floating menus. Otherwise flat.

## Sizes

Controls: `--size-control-sm` 36 · `-md` 44 · `-lg` 48. Icons: `--size-icon-sm` 16 · `-md` 20 · `-lg` 24. UI icons are 2px-stroke line icons, round caps (Lucide style). Spot icons (`--size-spot-sm` 32 · `-md` 48 · `-lg` 64, color `--color-icon-spot`) are the hand-made set in `assets/icons/`; see icons.md.

## Motion

`--duration-fast` 200ms (hover) · `--duration-base` 300ms · `--duration-moderate` 400ms (nav link underline) · `--duration-slow` 500ms · `--duration-loop` 1600ms (skeleton shimmer) · `--easing-standard`. Reduced motion is honored globally (the skeleton shimmer is removed).
