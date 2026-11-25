# Components

Naming: `.g-{component}`, `--{variant}`, `__{part}`. State is set with native attributes (`disabled`, `aria-pressed`, `aria-invalid`, `aria-current`, `aria-expanded`), never with state classes.

## Button — `.g-button`
- Variants: default = primary (navy), `--secondary` (outline), `--ghost` (text).
- Sizes: default 48px, `--md` 44px (navbar), `--sm` 36px. `--block` = full width.
- Optional leading 20px SVG icon inside.
- `<a>` to navigate, `<button type="button|submit">` to act. One primary per view/card.
```html
<button class="g-button" type="button">Agendar llamada</button>
<a class="g-button g-button--secondary" href="#">Descargar CV</a>
```

## Icon button — `.g-icon-button`
- 44px round. Variants `--primary`, `--plain`; size `--sm` (36px).
- Always `aria-label`; SVG gets `aria-hidden="true"`.

## Chip — `.g-chip` inside `.g-chip-group`
- Interactive filter/selection. `<button aria-pressed="true|false">`. Selected = coral fill + check (automatic).
- Group gets `role="group"` and `aria-label`.

## Badge — `.g-badge`
- Static tag `<span>` (tools, disciplines). Not clickable.

## Eyebrow — `.g-eyebrow`
- Short coral uppercase label above a heading. 1–4 words. Required on every section heading.

## Form — `.g-form` > `.g-field`
```html
<form class="g-form">
  <div class="g-field">
    <label class="g-field__label" for="email">Email <span class="g-required" aria-hidden="true">*</span></label>
    <input class="g-input" id="email" type="email" autocomplete="email" required>
    <p class="g-field__hint">We never share it.</p>
  </div>
</form>
```
- Controls: `.g-input`, `.g-textarea`, `.g-select`. Checkbox/radio: `<label class="g-check"><input type="checkbox"> <span>Text</span></label>`.
- Error: `aria-invalid="true"` + `aria-describedby` pointing to `<p class="g-field__error">` that says how to fix it.
- Placeholder is never a label. Submit is a `.g-button--block` at the end.

## Card — `.g-card`
- 32px padding, 32px radius, border + soft shadow. Parts: `__title` (h3), `__meta` (small secondary), `__footer` (pinned to bottom).
- Modifiers: `--flat` (no shadow), `--surface` (filled, no border).

## Project card — `a.g-project-card`
- Whole card is one link: `.g-media` on top, eyebrow + `__title` + `__text` below. No nested links.

## Media — `.g-media`
- Image/video frame, 48px radius, `--16x9 | --4x3 | --1x1`, `--sm` for 32px radius. Wrap in `figure.g-figure` with `figcaption` for captions.

## Alert — `.g-alert`
- Variants: default info, `--success`, `--warning`, `--error`. Contains an icon SVG + `<div><strong class="g-alert__title">…</strong><p>…</p></div>`.
- `role="alert"` for errors, `role="status"` otherwise.

## Spot icon and feature — `.g-spot-icon`, `ul.g-features > li.g-feature`
- Hand-made icons from `assets/icons/`, inlined. See [icons.md](icons.md).

## Logo — `.g-logo`
- Always the real SVG from `assets/logo/`, never typed text. See [logo.md](logo.md).

## Navbar — `header.g-navbar`
- Structure: `.g-container > .g-navbar__inner > (a.g-navbar__brand.g-logo, ul.g-navbar__links, .g-navbar__actions)` plus `nav.g-navbar__panel` for mobile.
- Links `.g-navbar__link` with `aria-current="page"` on the current one. Max 5 links.
- Actions: optional secondary `--md` button (shows ≥1280px), primary `--md` CTA, theme toggle, menu button (`aria-expanded`, `aria-controls`, hidden ≥992px).
- Below 480px the bar hides its buttons: repeat the primary CTA inside `.g-navbar__panel` as `g-button g-button--md g-button--block`.

## Footer — `footer.g-footer`
- `.g-grid` of columns, column titles `h2.g-footer__heading`, plain `ul` link lists, `.g-footer__bottom` with copyright.

## Timeline — `ol.g-timeline > li.g-timeline__item`
- Parts: `__date`, `__title` (h3/h5), `__text`. Most recent first.

## Stats — `.g-stats > .g-stat`
- Parts: `__value` (big number with unit), `__label`, `__text`. 2–4 per row.

## Quote — `blockquote.g-quote` with `<cite>`.

## Breadcrumbs — `nav.g-breadcrumbs[aria-label] > ol > li`, current item is `<span aria-current="page">`.

## Utilities
`.g-stack`, `.g-cluster`, `.g-gap-*`, `.g-text-secondary`, `.g-text-accent`, `.g-text-center`, `.g-h1…h6`, `.g-lead`, `.g-small`, `.g-divider`, `.g-visually-hidden`, `.g-skip-link`, `.g-theme-toggle`, `.g-back-to-top`.

## Do not
- Invent new components when composition with existing ones works.
- Use coral buttons, two primary buttons, or more than one `--inverse` section.
- Use icon fonts or emoji as icons; use inline SVG line icons.
