# Layout

## Breakpoints (min-width, mobile first)

| Name | From | Columns | Gutter / side margin |
|---|---|---|---|
| base | 0 | 4 | 16px |
| md | 768px | 8 | 24px |
| lg | 992px | 12 | 32px |
| xl | 1280px | 12 | 32px |

## Structure

- Navbar and footer run edge to edge: their `.g-container` has no max width, so their side margin (gutter; footer 3vw on desktop) is smaller than the body on wide screens, as on uxrodrigo.com.
- `.g-section` — vertical rhythm: 64px padding (128px from 992px). Modifiers: `--surface` (alternate background), `--inverse` (navy CTA, once per page, usually last), `--compact`, `--flush`, `--bordered`, `--angled` (profile hero: tinted bg-surface-alt header with a 9° diagonal bottom cut; pair with a circular `.g-media--profile` photo), `--angled-subtle` (project detail header: same tint, 2.5° cut, kept on phones with a 32px minimum height). Angled headers: one per page, always the first section; the profile hero drops its cut under 480px.
- `.g-container` — max 1234px incl. gutters. `--medium` = 770px content, `--narrow` = 570px content.
- `.g-intro` — centered eyebrow + h2 + text block, 570px wide (`--wide` 770px), 48px below.

## Grid

```html
<div class="g-grid">
  <div class="g-col-md-4 g-col-lg-8">Main</div>
  <div class="g-col-md-4 g-col-lg-4">Aside</div>
</div>
```

- No class = full row.
- `.g-col-{1-4}` spans of 4 (base), `.g-col-md-{1-8}` spans of 8, `.g-col-lg-{1-12}` spans of 12. `.g-col-lg-start-{2|3}` to offset.
- `.g-auto-grid` for equal cards that reflow 1 → 2 → 3 (min 300px).

## Reference layouts

| Layout | lg | md | base |
|---|---|---|---|
| Hero with image | 7 + 5 | 8 / 8 | stacked |
| Project grid | 6 + 6 | 4 + 4 | stacked |
| Three cards | 4 + 4 + 4 | stacked | stacked |
| Text + timeline | 4 + 7 (start 6) | stacked | stacked |
| Article | 8 (start 3) | 8 | 4 |
| Project facts | 3+3+3+3 | 2+2+2+2 | 2+2 |

Images always go in `.g-media` with a ratio modifier (`--16x9`, `--4x3`, `--1x1`).
