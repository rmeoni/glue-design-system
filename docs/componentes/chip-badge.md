# Chip y badge

## Chip (interactivo)

Filtra o selecciona una opción de un conjunto pequeño: categorías de proyectos, horarios.

```html
<div class="g-chip-group" role="group" aria-label="Filtrar proyectos">
  <button class="g-chip" type="button" aria-pressed="true">Todos</button>
  <button class="g-chip" type="button" aria-pressed="false">UX research</button>
</div>
```

- 36 px de alto, píldora, texto chip (13/20, 500, mayúsculas).
- Borde `border.control` para llegar a 3:1.
- **Seleccionado** (`aria-pressed="true"`): fondo coral, peso 600 y un check de 12 px. Nunca solo color.
- Selección única: en los ejemplos, `data-glue-single` en el grupo deja un solo chip activo.

## Badge (estático)

Etiqueta no interactiva: herramientas, disciplinas, estado.

```html
<span class="g-badge">Figma</span>
```

- 28 px, 11 px con tracking de label. Mismo color que el chip, sin borde ni hover.

## Reglas

- ✅ Chip = `<button>`. Badge = `<span>`.
- ✅ Una línea de texto, 1–3 palabras.
- ❌ No uses chips como navegación principal ni como botones de acción.
- ❌ No mezcles chips y badges en la misma fila.
