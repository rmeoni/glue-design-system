# Alerta

Mensaje en línea que informa del resultado de una acción o de algo que conviene saber. Se queda en la página. Para confirmar una acción de forma breve y temporal usa el [snackbar](snackbar.md).

| Variante | Clase | Rol ARIA | Uso |
|---|---|---|---|
| Info | `.g-alert` | `status` o `note` | Contexto útil |
| Éxito | `--success` | `status` | Acción completada |
| Aviso | `--warning` | `status` | Algo puede salir mal |
| Error | `--error` | `alert` | Algo ha fallado |

```html
<div class="g-alert g-alert--success" role="status">
  <svg aria-hidden="true">…</svg>
  <div><strong class="g-alert__title">Reserva confirmada</strong><p>Te envié la invitación.</p></div>
</div>
```

- `radius.md` · padding 14/16 · icono 20 px · título en el color de feedback, texto en `text.primary`.

## Reglas

- ✅ Icono + título: el tipo no depende solo del color.
- ✅ El error dice qué pasó y qué hacer.
- ❌ No apiles más de una alerta del mismo tipo. ❌ No la uses para marketing.
