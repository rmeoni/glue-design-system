# Snackbar

Aviso breve y temporal sobre una acción que la persona acaba de hacer. Basado en el snackbar de Material 3: aparece abajo, no interrumpe y se cierra solo.

| | Alerta (`.g-alert`) | Snackbar (`.g-snackbar`) |
|---|---|---|
| Dónde | En el flujo de la página, junto a lo que explica | Fija abajo, centrada, sobre el contenido |
| Duración | Se queda | Se cierra sola a los 6 s (4–10 s) |
| Uso | Contexto, avisos, errores que hay que resolver | Confirmar una acción: "Reserva confirmada", "Enlace copiado" |

```html
<div class="g-snackbar" id="booking-ok" role="status" aria-live="polite" data-open="false">
  <svg aria-hidden="true">…</svg>                                  <!-- opcional -->
  <p class="g-snackbar__text">Reserva confirmada. Te envié la invitación.</p>
  <button class="g-snackbar__action" type="button" data-glue-snackbar-close>Deshacer</button>  <!-- opcional -->
  <button class="g-snackbar__close" type="button" data-glue-snackbar-close aria-label="Cerrar aviso">…</button>
</div>

<script>Glue.snackbar("booking-ok");              // muestra el mensaje del HTML
        Glue.snackbar("booking-ok", "Otro texto"); // o uno nuevo</script>
```

- Superficie `bg.inverse`, texto `text.on-inverse`, acción `action.on-inverse` (7.67:1 en ambos temas). En oscuro la superficie es navy claro, igual que el "inverse surface" de Material.
- `radius.xs` · alto mínimo 48 px · ancho 344–560 px (en móvil, ancho de pantalla menos 16 px por lado) · `elevation.raised`.
- Entra y sale con opacidad + 16 px de desplazamiento en `duration.fast`. Respeta `prefers-reduced-motion`.
- `glue.js`: se cierra a los `data-duration` ms (6000 por defecto), pausa la cuenta atrás con hover o foco, se cierra con Escape y solo hay una visible a la vez. El botón de volver arriba sube mientras está abierta.

## Reglas

- ✅ Una línea, dos como máximo. Di qué pasó: "Reserva confirmada", no "¡Éxito!".
- ✅ Una sola acción como máximo, de texto corto ("Deshacer", "Ver"). Siempre botón de cerrar.
- ✅ `role="status"`: se anuncia sin robar el foco.
- ❌ No la uses para errores que bloquean ni para información que hay que leer con calma: usa `.g-alert--error` en línea.
- ❌ No pongas enlaces ni varias acciones. ❌ No muestres dos a la vez.
- ❌ No la uses en una sección `--inverse`: se confunde con el fondo.
