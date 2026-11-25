# Campos de formulario

Input, textarea, select, checkbox y radio, con label, ayuda y error.

## Anatomía

```
LABEL (11/16, 600, mayúsculas, text.secondary)   ← 8 px
┌──────────────────────────────────────┐
│ Valor (body 15/24)                    │  48 px · radius.md (14) · borde 1.5 control · bg.surface
└──────────────────────────────────────┘
Ayuda o error (small 13/20)              ← 6 px
```

## Código

```html
<form class="g-form">
  <div class="g-field">
    <label class="g-field__label" for="email">Email <span class="g-required" aria-hidden="true">*</span></label>
    <input class="g-input" id="email" type="email" autocomplete="email" required
           aria-invalid="true" aria-describedby="email-error">
    <p class="g-field__error" id="email-error">Escribe un email válido, por ejemplo nombre@empresa.com</p>
  </div>

  <div class="g-field">
    <label class="g-field__label" for="topic">Tema</label>
    <select class="g-select" id="topic"><option>Proyecto nuevo</option></select>
  </div>

  <div class="g-field">
    <label class="g-field__label" for="msg">Mensaje</label>
    <textarea class="g-textarea" id="msg" aria-describedby="msg-hint"></textarea>
    <p class="g-field__hint" id="msg-hint">Opcional.</p>
  </div>

  <label class="g-check"><input type="checkbox"> <span>Acepto la política de privacidad</span></label>

  <button class="g-button g-button--block" type="submit">Enviar mensaje</button>
</form>
```

## Estados

| Estado | Señal |
|---|---|
| Reposo | Borde `border.control` |
| Hover | Borde `border.strong` |
| Foco | Borde `border.strong` + anillo de 2 px `focus-ring` |
| Error | `aria-invalid="true"`: borde `feedback.error-fg` + mensaje |
| Deshabilitado | `disabled`: fondo y texto `action.disabled` |

`.g-form` separa los campos 18 px.

## Reglas

- ✅ Siempre `<label for>` visible. El placeholder **no** es una etiqueta.
- ✅ Mensaje de error que dice cómo arreglarlo, enlazado con `aria-describedby`.
- ✅ `autocomplete` en nombre, email y teléfono.
- ✅ Marca los obligatorios con `*` y `required`, o los opcionales con "Opcional" en la ayuda; no ambos a la vez.
- ❌ No valides mientras se escribe; valida al salir del campo o al enviar.
- ❌ No desactives el botón de enviar para indicar errores: deja enviar y muestra qué falta.
