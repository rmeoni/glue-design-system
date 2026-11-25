# Spot icons

Hand-made UXRodrigo line icons in `assets/icons/`: `monitor`, `layers`, `camera`, `pages`, `dumbbell`, `play`. Use them to introduce services, sections or empty states. They are NOT UI icons (for arrows, close, menu use 2px-stroke Lucide-style inline SVGs).

## Usage
- Inline the SVG file content (do not use `<img>`: the stroke uses `currentColor`). Add `class="g-spot-icon"`, `aria-hidden="true"` and `focusable="false"`, and remove the `<title>`.
- Sizes: `.g-spot-icon--sm` 32px, `.g-spot-icon` 48px (default), `.g-spot-icon--lg` 64px. Icons keep their own aspect ratio; align them by height.
- Color comes from `--color-icon-spot` (navy in light, white in dark). Never recolor them coral, never fill them, never change the stroke width.

## Feature pattern
```html
<ul class="g-features">
  <li class="g-feature">
    <svg class="g-spot-icon" …>…</svg>
    <h3 class="g-feature__title">UX design<br>& development</h3>
  </li>
</ul>
```
2–4 features per row, one icon each, all the same size. Put them under a centered `.g-intro` (eyebrow + h2 + text).

Do not invent new spot icons or mix in icons from other libraries in the same row.

## UI icons: Material Symbols
- The theme switch uses `light_mode` and `dark_mode`; the language toggle uses `language`. All from Google Material Symbols Outlined (fill 0, weight 400, grade 0, optical size 24), as on uxrodrigo.com.
- Inline SVG with `fill="currentColor"`, `aria-hidden="true"`, `focusable="false"`; 22px in the navbar, 20–24px elsewhere. The accessible label goes on the button.
- Never load the Material icon font. Never mix Material and hand-drawn spot icons in one control. Arrows, close and menu stay as each component's 2px line icons.
