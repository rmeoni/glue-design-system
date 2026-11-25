# Logo

The UXRodrigo logo = arch symbol + lowercase "uxrodrigo" wordmark + blue verified badge. Files are in `assets/logo/`.

## Always use the SVG files
Never type "UXRodrigo" as text in place of the logo, and never redraw it.

```html
<a class="g-navbar__brand g-logo" href="/" aria-label="UXRodrigo, home">
  <img class="g-logo__on-light" src="assets/logo/uxrodrigo-logo.svg" alt="" width="199" height="30">
  <img class="g-logo__on-dark"  src="assets/logo/uxrodrigo-logo-white.svg" alt="" width="199" height="30">
</a>
```

Always include both images. CSS shows the navy one on light backgrounds and the white one on dark backgrounds and on the navy `.g-section--inverse`.

## Files
- `uxrodrigo-logo.svg`: navy, for light backgrounds
- `uxrodrigo-logo-white.svg`: white, for dark backgrounds
- `uxrodrigo-logo-mono.svg`: `currentColor`, for inline SVG in one color
- `uxrodrigo-symbol.svg` / `uxrodrigo-symbol-white.svg`: symbol only (avatars, app icons, tight spaces)
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`

## Size
`.g-logo--sm` 24px high · `.g-logo` 30px (default, navbar and footer) · `.g-logo--lg` 48px. In the navbar it is 24px below 480px and 30px from 480px, automatically. Minimum 18px high; below that, use the symbol.

## Rules
- Clear space on every side = half the logo height.
- Colors: navy #153180 or white only. The badge blue (#0095F6, `--color-verified`) exists only in the logo, never in the UI.
- Do not stretch, rotate, recolor, add effects to, or remove parts of the logo.
- Logo top-left in the navbar; also in the footer.
