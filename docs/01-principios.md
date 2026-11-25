# Principios del sistema

Glue es el sistema de diseño de UXRodrigo. Su nombre dice lo que hace: **une** diseño y código, Figma y producción, la marca y la experiencia. Estos cuatro principios deciden cualquier duda que la documentación no resuelva.

## 1. Claro antes que ingenioso

La interfaz se entiende a la primera o no funciona.

- **Una acción principal por vista.** Un solo botón primario por pantalla o por tarjeta. El resto son secundarios o ghost.
- **Etiquetas que dicen lo que pasa.** "Agendar llamada", no "Enviar". "Descargar CV", no "Click aquí".
- **Sentence case** en botones, títulos y menús: solo la primera palabra en mayúscula.
- Si hay que explicar un componente, el componente está mal.

## 2. Accesible por defecto

La accesibilidad no es una fase: viene incluida en cada token y componente.

- Texto con contraste **AA (4.5:1)** como mínimo; bordes de controles **3:1**.
- **Foco visible** en todo lo interactivo: anillo coral de 2 px con 2 px de separación.
- **Nunca solo color.** El chip seleccionado lleva check y peso 600; el error lleva texto, no solo borde rojo.
- Objetivos táctiles de **44 px** como mínimo en navegación e iconos.
- Respeta `prefers-reduced-motion` y `prefers-color-scheme`.

## 3. Tokens, no valores

Ningún componente lleva un hex, un px suelto ni una sombra a mano.

- **Primitivos** guardan el valor (`color.navy.700 = #153180`).
- **Semánticos** guardan la intención (`color.action.primary-bg`) y cambian con el tema.
- Los componentes **solo** usan semánticos. Así, el modo oscuro, un rebrand o un ajuste de contraste es un cambio en un archivo.

## 4. Calma con carácter

Una estética sobria con dos acentos que se reconocen.

- **Navy** para actuar: botones, enlaces de navegación, secciones de cierre.
- **Coral** para señalar: eyebrows, enlaces en texto, foco, selección. Nunca como fondo de un botón.
- Mucho aire: secciones de 128 px en escritorio, contenido de lectura a 770 px.
- Formas suaves: botones y chips en píldora, tarjetas a 32 px, imágenes a 48 px.

---

## Cómo decidir

Cuando dos opciones parecen válidas, elige la que:

1. el usuario entienda más rápido,
2. funcione con teclado, lector de pantalla y en modo oscuro,
3. use un token o componente que ya existe,
4. añada menos elementos a la pantalla.
