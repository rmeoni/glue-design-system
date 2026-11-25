# Glue Design System — Guidelines

Glue is the design system of UXRodrigo (uxrodrigo.com). Use it for every screen you generate.
Read the files below before writing code:

- [foundations.md](foundations.md) — color, type, spacing, radius, elevation tokens
- [layout.md](layout.md) — container, sections, 12-column grid, breakpoints
- [components.md](components.md) — every component, its markup and its rules

## Setup

Load Inter and the Glue stylesheet once, at the app root:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="glue.css"> <!-- dist/glue.css from this repo -->
```

In React, use the same class names with `className`. Glue has no JS dependency.

## Hard rules

1. **Use Glue classes and CSS variables only.** Never write raw hex colors, raw px for spacing/radius, or custom shadows. If you need custom CSS, use semantic tokens: `var(--color-bg-surface)`, `var(--space-6)`, `var(--radius-md)`.
2. **Never use primitive color tokens in components** (`--color-navy-700`). Use semantic ones (`--color-action-primary-bg`). Semantic tokens switch automatically in dark mode.
3. **One primary button per view or per card.** Other actions are `g-button--secondary` or `g-button--ghost`.
4. **Navy is for action, coral is for signalling.** Never make a button or a large background coral. Coral is for eyebrow labels, inline links, focus ring and selected chips.
5. **Sentence case** for every heading, button and menu item. Uppercase only in `.g-eyebrow`, `.g-field__label`, `.g-chip` and `.g-badge` (the CSS does it; write the text in normal case).
6. **Every section heading is eyebrow + heading (+ lead).**
7. **Accessibility is required:** one `<h1>` per page, `<label for>` on every field, `aria-label` on icon buttons, `aria-pressed` on chips/toggles, `aria-invalid` + `aria-describedby` on fields with errors, `alt` on images. Never convey state by color alone.
8. **Dark mode must work.** Do not write `[data-theme="dark"]` overrides; if something needs one, you are using the wrong token.
9. **Mobile first.** Every layout must work at 320px with no horizontal scroll, 16px side gutter minimum.
10. Use real, specific copy in Spanish or English as requested. Buttons are verb + object: "Agendar llamada", "Book a call", "View case study". Never "Submit" or "Click here".

## Page skeleton

```html
<body>
  <a class="g-skip-link" href="#main">Skip to content</a>
  <header class="g-navbar">…</header>
  <main id="main">
    <section class="g-section">
      <div class="g-container">
        <span class="g-eyebrow">Eyebrow</span>
        <h1>Page title</h1>
        <p class="g-lead">One or two sentences.</p>
        <div class="g-cluster"><a class="g-button" href="#">Primary action</a></div>
      </div>
    </section>
    <section class="g-section g-section--surface">…</section>
    <section class="g-section g-section--inverse">…final CTA, once per page…</section>
  </main>
  <footer class="g-footer">…</footer>
</body>
```

## Voice

Clear, warm, direct. Short sentences. Talk to "you". Lead with the outcome ("+32% bookings") before the process.
