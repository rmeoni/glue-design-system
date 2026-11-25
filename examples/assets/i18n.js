/* Glue Design System — i18n.js
   Spanish / English toggle for the style guide and example screens.
   The HTML is written in Spanish; this file swaps visible text and the
   aria-label, alt, placeholder and title attributes from a dictionary.

   Load it in <head> (not deferred) so the page never flashes the wrong language:
     <script src="assets/i18n.js"></script>
   Add a toggle anywhere:  <button data-glue-lang-toggle>EN</button>
     data-glue-lang-toggle="short" → "EN" / "ES"   (navbar)
     data-glue-lang-toggle="long"  → "English" / "Español"  (menu panel)
   For ambiguous one-off text, put the English on the element: <span data-en="M">L</span>

   Language choice, first match wins:
     1. ?lang=en|es in the URL (also saved)   2. saved choice (localStorage "glue-lang")
     3. browser language is Spanish → es      4. region (locale or time zone) is Spanish-speaking → es
     5. otherwise → en                                                                    */
(function () {
  var KEY = "glue-lang";
  var root = document.documentElement;

  var ES_EN = {
    "Saltar al contenido": "Skip to content",
    "Glue Design System de UXRodrigo, inicio": "UXRodrigo's Glue Design System, home",
    "Fundamentos": "Foundations",
    "Componentes": "Components",
    "Pantallas": "Screens",
    "Ver en GitHub": "View on GitHub",
    "Cambiar a modo oscuro": "Switch to dark mode",
    "Cambiar a modo claro": "Switch to light mode",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Menú": "Menu",
    "Glue: el sistema de diseño de UXRodrigo": "Glue: UXRodrigo's design system",
    "Tokens, estilos y componentes que unen diseño y código. Una sola fuente para uxrodrigo.com, Figma, Figma Make y zeroheight.": "Tokens, styles and components that bring design and code together. One source for uxrodrigo.com, Figma, Figma Make and zeroheight.",
    "Ver componentes": "View components",
    "Pantallas de ejemplo": "Example screens",
    "Principios": "Principles",
    "Cuatro ideas que deciden todo lo demás": "Four ideas that decide everything else",
    "Claro antes que ingenioso": "Clear before clever",
    "Una acción principal por vista. Etiquetas que dicen lo que pasa.": "One primary action per view. Labels that say what happens.",
    "Accesible por defecto": "Accessible by default",
    "AA en todo el texto, 3:1 en controles, foco visible, nunca solo color.": "AA on all text, 3:1 on controls, visible focus, never color alone.",
    "Tokens, no valores": "Tokens, not values",
    "Los componentes solo usan tokens semánticos. Un cambio, todos los temas.": "Components only use semantic tokens. One change, every theme.",
    "Calma con carácter": "Calm with character",
    "Mucho aire, navy para actuar, coral para señalar. Nada compite.": "Plenty of air, navy to act, coral to point. Nothing competes.",
    "Primitivos con escala 50–900. Los componentes usan solo los semánticos, que cambian con el tema.": "Primitives on a 50–900 scale. Components only use the semantic tokens, which change with the theme.",
    "Semánticos": "Semantic",
    "Cambia el tema con el botón de la barra para ver ambos valores.": "Switch the theme with the button in the bar to see both values.",
    "Símbolo de arco, wordmark \"uxrodrigo\" en minúsculas y badge de verificado. Navy sobre claro, blanco sobre oscuro.": "Arc symbol, lowercase \"uxrodrigo\" wordmark and verified badge. Navy on light, white on dark.",
    "Logo UXRodrigo en navy": "UXRodrigo logo in navy",
    "uxrodrigo-logo.svg · fondos claros": "uxrodrigo-logo.svg · light backgrounds",
    "Logo UXRodrigo en blanco sobre negro": "UXRodrigo logo in white on black",
    "uxrodrigo-logo-white.svg · fondos oscuros": "uxrodrigo-logo-white.svg · dark backgrounds",
    "Logo UXRodrigo en blanco sobre navy": "UXRodrigo logo in white on navy",
    "uxrodrigo-logo-white.svg · sección inverse": "uxrodrigo-logo-white.svg · inverse section",
    "Símbolo UXRodrigo en navy": "UXRodrigo symbol in navy",
    "Símbolo": "Symbol",
    "Símbolo UXRodrigo en blanco": "UXRodrigo symbol in white",
    "Símbolo blanco": "White symbol",
    "Área de protección del logo": "Logo clear space",
    "Área de protección: ½ de la altura del logo por cada lado": "Clear space: ½ of the logo height on every side",
    "Logo a 48 px": "Logo at 48 px",
    "Logo a 30 px": "Logo at 30 px",
    "Logo a 24 px": "Logo at 24 px",
    "size-logo-lg 48 · md 30 · sm 24 (mínimo 18 px de alto)": "size-logo-lg 48 · md 30 · sm 24 (minimum 18 px tall)",
    "Iconos ilustrativos": "Spot icons",
    "Iconos de línea dibujados a mano para UXRodrigo. Trazo grueso y redondeado, en navy sobre claro y en blanco sobre oscuro.": "Hand-drawn line icons for UXRodrigo. Thick, rounded stroke, navy on light and white on dark.",
    "Capas": "Layers",
    "monitor.svg · UX y desarrollo": "monitor.svg · UX and development",
    "layers.svg · logos e iconos": "layers.svg · logos and icons",
    "Cámara": "Camera",
    "camera.svg · maquetas": "camera.svg · mockups",
    "Hojas": "Pages",
    "pages.svg · contenido": "pages.svg · content",
    "Pesa": "Dumbbell",
    "dumbbell.svg · entrenamiento": "dumbbell.svg · training",
    "Reproducir": "Play",
    "play.svg · vídeo": "play.svg · video",
    "Diseño UX": "UX design",
    "y desarrollo": "and development",
    "e iconos": "and icons",
    "Maquetas": "Product",
    "de producto": "mockups",
    "Tipografía": "Typography",
    "Inter en 400, 500, 600, 700 y 800. Escala fija en px con interlineado en múltiplos de 4.": "Inter in 400, 500, 600, 700 and 800. Fixed px scale with line heights in multiples of 4.",
    "móvil 40/48": "mobile 40/48",
    "Diseño que conecta": "Design that connects",
    "Investigación, estrategia y diseño de producto de principio a fin.": "Research, strategy and product design from start to finish.",
    "Investigación, estrategia y diseño de producto.": "Research, strategy and product design.",
    "Caso de estudio": "Case study",
    "Espaciado, radios y elevación": "Spacing, radii and elevation",
    "Base de 4 px. El nombre del token es el múltiplo:": "4 px base. The token name is the multiplier:",
    "Retícula": "Grid",
    "12 columnas desde 992 px, 8 en tablet, 4 en móvil. Contenedor de 1234 px con márgenes de 32 / 24 / 16 px.": "12 columns from 992 px, 8 on tablet, 4 on mobile. 1234 px container with 32 / 24 / 16 px margins.",
    "Biblioteca": "Library",
    "Cada componente usa solo tokens semánticos y funciona en claro y oscuro.": "Every component uses only semantic tokens and works in light and dark.",
    "Botones": "Buttons",
    "Agendar llamada": "Book a call",
    "Descargar CV": "Download CV",
    "Cancelar": "Cancel",
    "Deshabilitado": "Disabled",
    "Grande · 48": "Large · 48",
    "Mediano · 44": "Medium · 44",
    "Pequeño · 36": "Small · 36",
    "Con icono": "With icon",
    "Botones de icono": "Icon buttons",
    "Volver arriba": "Back to top",
    "Anterior": "Previous",
    "Siguiente": "Next",
    "Cerrar": "Close",
    "Chips y badges": "Chips and badges",
    "Filtrar proyectos": "Filter projects",
    "Todos": "All",
    "Formularios": "Forms",
    "Nombre": "Name",
    "Tu nombre": "Your name",
    "Escribe un email válido, por ejemplo nombre@empresa.com": "Enter a valid email, for example name@company.com",
    "Tema": "Topic",
    "Proyecto nuevo": "New project",
    "Auditoría UX": "UX audit",
    "Mensaje": "Message",
    "Cuéntame un poco del proyecto": "Tell me a bit about the project",
    "Opcional. Máximo 500 caracteres.": "Optional. 500 characters max.",
    "Acepto la política de privacidad": "I accept the privacy policy",
    "Campo deshabilitado": "Disabled field",
    "Alertas · snackbar": "Alerts · snackbar",
    "Aviso breve sobre algo que acabas de hacer, basado en el snackbar de Material 3. Aparece abajo, se cierra solo a los 6 s y no interrumpe. El tipo lo marca el icono; como máximo una acción de texto.": "A short message about something you just did, based on the Material 3 snackbar. It appears at the bottom, closes on its own after 6 s and doesn't interrupt. The icon marks the type; one text action at most.",
    "La llamada se hace por Google Meet.": "The call happens on Google Meet.",
    "Cerrar aviso": "Dismiss",
    "Reserva confirmada. Te envié la invitación a tu email.": "Booking confirmed. I sent the invite to your email.",
    "Quedan pocos horarios esta semana.": "Few slots left this week.",
    "Ver horarios": "See times",
    "No se pudo enviar. Revisa tu conexión.": "Couldn't send. Check your connection.",
    "Reintentar": "Retry",
    "Pruébalos en vivo:": "Try them live:",
    "Información": "Info",
    "Éxito": "Success",
    "Aviso": "Warning",
    "Tarjetas": "Cards",
    "Llamada de descubrimiento": "Discovery call",
    "Google Meet · Gratis": "Google Meet · Free",
    "Hablamos de tu producto, tus usuarios y lo que necesitas.": "We talk about your product, your users and what you need.",
    "Elegir horario": "Pick a time",
    "Ilustración de una interfaz de reservas": "Illustration of a booking interface",
    "Rediseño de app de reservas": "Booking app redesign",
    "+32% en reservas completadas.": "+32% completed bookings.",
    "\"Rodrigo convirtió un flujo confuso en algo que nuestros usuarios entienden a la primera.\"": "\"Rodrigo turned a confusing flow into something our users get the first time.\"",
    "— Directora de producto, SaaS B2B": "— Head of Product, B2B SaaS",
    "2023 — hoy": "2023 — present",
    "Design system y producto B2B.": "Design system and B2B product.",
    "Investigación y apps móviles.": "Research and mobile apps.",
    "Estadísticas": "Stats",
    "Años": "Years",
    "diseñando producto": "designing products",
    "Proyectos": "Projects",
    "entregados": "delivered",
    "Glue en contexto": "Glue in context",
    "Tres pantallas completas construidas solo con Glue.": "Three complete screens built with Glue alone.",
    "Guía de uso": "Usage guide",
    "UXRodrigo, inicio": "UXRodrigo, home",
    "Inicio": "Home",
    "Trabajos": "Work",
    "Experiencia": "Experience",
    "Contacto": "Contact",
    "Regresar a Glue": "Back to Glue",
    "Diseño productos digitales que la gente entiende a la primera": "I design digital products people understand the first time",
    "Investigación, estrategia y diseño de interfaz para equipos SaaS que quieren crecer sin perder claridad.": "Research, strategy and interface design for SaaS teams that want to grow without losing clarity.",
    "Ver trabajos": "View work",
    "Ilustración de una app móvil": "Illustration of a mobile app",
    "en 6 países": "in 6 countries",
    "en producción": "in production",
    "Mi especialización": "My specialty",
    "Enfoque en design thinking": "A design thinking approach",
    "Con el enfoque de design thinking ponemos primero las necesidades de las personas usuarias para dar vida a experiencias que sorprenden.": "With a design thinking approach, we put people's needs first to bring experiences that delight to life.",
    "Trabajos recientes": "Recent work",
    "Casos de estudio": "Case studies",
    "Proyectos de punta a punta: del problema a la métrica.": "End-to-end projects: from the problem to the metric.",
    "Pantalla de reservas": "Booking screen",
    "+32% en reservas completadas en tres meses.": "+32% completed bookings in three months.",
    "Gráfico de un dashboard": "Dashboard chart",
    "Dashboard financiero B2B": "B2B finance dashboard",
    "Un sistema para cinco productos y tres equipos.": "One system for five products and three teams.",
    "App móvil de taxis": "Taxi mobile app",
    "App de movilidad urbana": "Urban mobility app",
    "De 4,1 a 4,7 estrellas en las tiendas.": "From 4.1 to 4.7 stars in the app stores.",
    "Web de adopción de mascotas": "Pet adoption website",
    "Plataforma de adopción": "Adoption platform",
    "Entrevistas con 24 familias y un flujo nuevo.": "Interviews with 24 families and a new flow.",
    "Trayectoria": "Career",
    "Diseño en equipos de producto, agencias y como consultor independiente.": "Design in product teams, agencies and as an independent consultant.",
    "Design systems y producto para SaaS B2B en Europa y LATAM.": "Design systems and product for B2B SaaS in Europe and Latin America.",
    "Senior UX designer · Agencia digital": "Senior UX designer · Digital agency",
    "Investigación, prototipos y apps móviles para clientes de retail.": "Research, prototypes and mobile apps for retail clients.",
    "Primer diseñador del equipo; app y web de pagos.": "First designer on the team; payments app and website.",
    "¿Tienes un producto que necesita claridad?": "Got a product that needs clarity?",
    "Una llamada de 30 minutos, sin compromiso.": "A 30-minute call, no strings attached.",
    "Diseño de producto, UX y design systems.": "Product design, UX and design systems.",
    "Navegación": "Navigation",
    "Privacidad": "Privacy",
    "Términos": "Terms",
    "Hecho con Glue · Ver el sistema": "Made with Glue · See the system",
    "Agendar llamada · Glue": "Book a call · Glue",
    "Hablemos de tu producto": "Let's talk about your product",
    "Elige un día y una hora. La llamada es por Google Meet y te llega la invitación al momento.": "Pick a day and time. The call is on Google Meet and the invite arrives right away.",
    "Paso 1": "Step 1",
    "Paso 2": "Step 2",
    "Paso 3": "Step 3",
    "Tipo de llamada": "Call type",
    "Todas son gratis y sin compromiso.": "All free, no strings attached.",
    "Duración": "Duration",
    "Descubrimiento · 30 min": "Discovery · 30 min",
    "Conocernos y ver si encajamos.": "Get to know each other and see if we're a fit.",
    "Revisión UX · 60 min": "UX review · 60 min",
    "Revisamos juntos tu producto en vivo.": "We review your product together, live.",
    "Hora mostrada en tu zona: Europe/Madrid.": "Times shown in your time zone: Europe/Madrid.",
    "Diciembre 2026": "December 2026",
    "Mes anterior": "Previous month",
    "Mes siguiente": "Next month",
    "Días de diciembre": "December days",
    "Horarios disponibles": "Available times",
    "Tus datos": "Your details",
    "Miércoles 9 de diciembre · 11:30": "Wednesday, December 9 · 11:30",
    "Invitados": "Guests",
    "email1@empresa.com, email2@…": "email1@company.com, email2@…",
    "Opcional. Separa los emails con comas.": "Optional. Separate emails with commas.",
    "¿De qué quieres hablar?": "What do you want to talk about?",
    "Confirmar reserva": "Confirm booking",
    "Reserva confirmada. Te envié la invitación de Google Meet.": "Booking confirmed. I sent you the Google Meet invite.",
    "Caso de estudio · Glue": "Case study · Glue",
    "Migas de pan": "Breadcrumb",
    "App de reservas": "Booking app",
    "Caso de estudio · UX · UI": "Case study · UX · UI",
    "Rediseño de una app de reservas para clínicas": "Redesigning a booking app for clinics",
    "Cómo pasamos de un flujo de siete pasos a uno de tres y subimos las reservas completadas un 32%.": "How we went from a seven-step flow to three and raised completed bookings by 32%.",
    "Investigación": "Research",
    "Prototipado": "Prototyping",
    "Vista general de la nueva app de reservas": "Overview of the new booking app",
    "Rol": "Role",
    "4 meses · 2025": "4 months · 2025",
    "Equipo": "Team",
    "1 PM, 3 devs, 1 diseñador": "1 PM, 3 devs, 1 designer",
    "Herramientas": "Tools",
    "El problema": "The problem",
    "El 58% de los pacientes abandonaba la reserva antes de elegir hora. Las entrevistas mostraron dos causas: demasiados pasos y ninguna señal de cuánto faltaba.": "58% of patients dropped off before choosing a time. Interviews showed two causes: too many steps and no sign of how much was left.",
    "\"No sé si ya reservé o si todavía tengo que hacer algo más.\"": "\"I don't know if I've booked already or if I still have to do something else.\"",
    "— Paciente, entrevista 7": "— Patient, interview 7",
    "El proceso": "The process",
    "Mapeamos el flujo actual, priorizamos con el equipo y probamos tres prototipos con 18 usuarios en Maze.": "We mapped the current flow, prioritized with the team and tested three prototypes with 18 users in Maze.",
    "Gráfico de abandono por paso del flujo": "Chart of drop-off by flow step",
    "Abandono por paso: el paso 4 concentraba el 41% de las salidas.": "Drop-off by step: step 4 accounted for 41% of exits.",
    "Resultados": "Results",
    "Reservas": "Bookings",
    "completadas": "completed",
    "Pasos": "Steps",
    "antes eran 7": "down from 7",
    "Llamadas": "Calls",
    "a recepción": "to reception",
    "Siguiente proyecto": "Next project",
    "Un design system para cinco productos y tres equipos.": "A design system for five products and three teams.",
    "Ver caso": "View case",
    "Todos los trabajos": "All work",
    "Dashboard financiero": "Finance dashboard",
    "Mostrar snackbar": "Show snackbar",
    "(se abre en una pestaña nueva)": "(opens in a new tab)",
    "fondo": "background",
    "(navy en claro, casi negro en oscuro) y enlaces": "(navy in light, near-black in dark) and",
    "de 17 px, como en uxrodrigo.com. Hover: la misma línea de 1 px que el navbar, en el color del enlace. Presionado:": "links at 17 px, as on uxrodrigo.com. Hover: the same 1 px line as the navbar, in the link color. Pressed:",
    "con la línea completa. Página actual: línea fija. Foco: contorno": "with the full line. Current page: a fixed line. Focus: outline",
    "Migas de pan:": "Breadcrumbs:",
    ". Hover: la misma línea de 1 px; el texto no cambia de color. Presionado:": ". Hover: the same 1 px line; the text color doesn't change. Pressed:",
    "(presionado, navbar)": "(pressed, navbar)",
    "(contorno)": "(outline)",
    "Pie de página": "Footer",
    "Iconos de interfaz · Material Symbols": "UI icons · Material Symbols",
    "Para algunos controles usamos iconos de Google Material Symbols, los mismos de uxrodrigo.com. Van como SVG inline en": "Some controls use Google Material Symbols icons, the same ones as on uxrodrigo.com. They go in as inline SVG in",
    ", así que siguen el tema.": ", so they follow the theme.",
    "Interruptor de tema, lado claro": "Theme switch, light side",
    "Interruptor de tema, lado oscuro": "Theme switch, dark side",
    "Cambio de idioma": "Language switch",
    "En uso": "In use",
    "+ pista con bola +": "+ track with knob +",
    ". Pruébalo: cambia el tema de la página.": ". Try it: it switches the page theme.",
    "+ código del idioma destino. Pruébalo: cambia el idioma de la página.": "+ the target language code. Try it: it switches the page language.",
    "Familia": "Family",
    "Ajustes": "Settings",
    "Relleno 0 · peso 400 · grado 0 · tamaño óptico 24": "Fill 0 · weight 400 · grade 0 · optical size 24",
    "Tamaño": "Size",
    "22 px en el navbar (18 px bajo 480 px), 20–24 px en otros controles": "22 px in the navbar (18 px under 480 px), 20–24 px in other controls",
    "en claro y oscuro": "in light and dark",
    "Licencia": "License",
    "Descarga el SVG desde Google Fonts e insértalo inline con": "Download the SVG from Google Fonts and insert it inline with",
    "La etiqueta accesible va en el botón (": "The accessible label goes on the button (",
    "), no en el icono.": "), not on the icon.",
    "No cargues la fuente de iconos de Material: solo SVG inline de los iconos que usas.": "Don't load the Material icon font: only inline SVG for the icons you use.",
    "No los mezcles con los iconos dibujados a mano en el mismo control. Flechas, cerrar y menú siguen siendo las líneas de 2 px de cada componente.": "Don't mix them with the hand-drawn icons in the same control. Arrows, close and menu are still each component's 2 px line icons.",
    "Footer y migas de pan:": "Footer and breadcrumbs:",
    ". Hover: la misma línea de 1 px que el navbar, en el color del enlace; el texto no cambia de color. Presionado:": ". Hover: the same 1 px line as the navbar, in the link's color; the text color doesn't change. Pressed:",
    "con la línea completa. Página actual:": "with the full line. Current page:",
    "Modo oscuro": "Dark mode",
    "Enlaces de navegación": "Navigation links",
    "Los enlaces del navbar, del menú móvil y del footer en todos sus estados. Pasa el ratón o usa el teclado sobre la fila \"Normal\" para verlos en vivo.": "Navbar, mobile menu and footer links in every state. Hover or tab through the \"Normal\" row to see them live.",
    "Estado": "State",
    "Menú móvil": "Mobile menu",
    "Foco": "Focus",
    "Presionado": "Pressed",
    "Página actual": "Current page",
    "Menú móvil:": "Mobile menu:",
    "Deshabilitado:": "Disabled:",
    "Foco:": "Focus:",
    ", peso medium. Hover: línea de 1 px, 2 px bajo el texto, que entra por la izquierda y sale por la derecha en": ", medium weight. Hover: a 1 px line, 2 px below the text, that enters from the left and leaves to the right over",
    ", como en uxrodrigo.com. Página actual: subrayado fijo. Presionado:": ", as on uxrodrigo.com. Current page: a fixed underline. Pressed:",
    ". Página actual: subrayado fijo. Presionado:": ". Current page: a fixed underline. Pressed:",
    "y subrayado completo sin animación.": "and a full underline with no animation.",
    "filas a todo el ancho. Hover, página actual y presionado: subrayado de texto de 2 px, separado 6 px.": "full-width rows. Hover, current page and pressed: a 2 px text underline, 6 px below.",
    "con subrayado de 1 px. Presionado:": "with a 1 px underline. Pressed:",
    "con subrayado de 2 px. Página actual:": "with a 2 px underline. Current page:",
    "en medium.": "in medium.",
    ", sin subrayado ni hover, cursor": ", no underline or hover, cursor",
    ". Es un": ". It's an",
    "sin": "with no",
    ", así que no recibe foco.": ", so it can't receive focus.",
    "contorno de 2 px en": "a 2 px outline in",
    "(coral), separado 2 px. Igual en los tres sitios.": "(coral), 2 px away. The same in all three places.",
    "Claro · página / footer": "Light · page / footer",
    "Oscuro · página / footer": "Dark · page / footer",
    "(presionado)": "(pressed)",
    "* WCAG no exige contraste a controles deshabilitados.": "* WCAG doesn't require contrast for disabled controls.",
    "solo sirve para documentar estados; no lo uses en producto.": "is only for documenting states; don't use it in production.",
    "Fondos de cabecera": "Header backgrounds",
    "El fondo de la foto de perfil y de las páginas de proyecto de uxrodrigo.com: una cabecera con tinte navy cuyo borde inferior se corta en diagonal y deja ver el fondo de la página.": "The background behind the profile photo and the project pages on uxrodrigo.com: a navy-tinted header whose bottom edge is cut on a diagonal, revealing the page background.",
    "Hero de perfil ·": "Profile hero ·",
    "Para la foto de perfil y la presentación. Corte de 9°, alto a la izquierda. La foto es un círculo de 300 px como máximo (": "For the profile photo and intro. A 9° cut, high on the left. The photo is a circle, 300 px at most (",
    "). En móvil (menos de 480 px) el corte se quita.": "). On phones (under 480 px) the cut is removed.",
    "Foto de perfil de ejemplo": "Sample profile photo",
    "Hola, soy Rodrigo": "Hi, I'm Rodrigo",
    "Contenido de la página": "Page content",
    "Cabecera de proyecto ·": "Project header ·",
    "Rediseño de una app de reservas": "Booking app redesign",
    "Para el título de cada caso de estudio. Corte suave de 2,5°, alto a la derecha. En móvil se mantiene, con un mínimo de 32 px de alto para que la diagonal se note.": "For the title of each case study. A gentle 2.5° cut, high on the right. It stays on phones, at least 32 px tall so the diagonal still reads.",
    "Parte": "Part",
    "Cabecera": "Header",
    "Corte": "Cut",
    "Una sola cabecera con corte por página, siempre la primera sección.": "One angled header per page, always the first section.",
    "El alto del corte sigue al ancho y se suma al padding inferior: el contenido nunca queda cortado.": "The cut height follows the width and is added to the bottom padding, so content is never clipped.",
    "No combines el corte con": "Don't combine the cut with",
    "o": "or",
    "ni lo uses en secciones intermedias.": "or use it on sections in the middle of the page.",
    "Glue, el sistema de diseño de UXRodrigo: tokens, estilos y componentes que unen diseño y código.": "Glue, UXRodrigo's design system: tokens, styles and components that bring design and code together.",
    "Movimiento": "Motion",
    "Movimiento corto y discreto: confirma una acción o indica que algo está cargando, nunca decora. Con movimiento reducido todo se queda quieto.": "Short, quiet motion: it confirms an action or shows that something is loading, never decorates. With reduced motion, everything stays still.",
    "Hover, color, aparición del snackbar.": "Hover, color, snackbar entrance.",
    "Paneles.": "Panels.",
    "Línea de los enlaces del navbar.": "Navbar link underline.",
    "Zoom de imagen en tarjeta.": "Card image zoom.",
    "Un ciclo de un indicador en bucle: el brillo del skeleton.": "One cycle of a looping indicator: the skeleton shimmer.",
    "· Todas las transiciones y animaciones.": "· All transitions and animations.",
    "Skeleton de carga": "Loading skeleton",
    "Reserva el espacio del contenido mientras carga, con la misma forma, para que nada salte al llegar. El brillo recorre cada forma de izquierda a derecha cada 1,6 s. Los colores salen de": "Holds the space of the content while it loads, in the same shape, so nothing jumps when it arrives. The shimmer sweeps each shape left to right every 1.6 s. Colors come from",
    "y": "and",
    ", así que el mismo HTML funciona en claro y oscuro.": ", so the same HTML works in light and dark.",
    "Claro": "Light",
    "Oscuro": "Dark",
    "Cargando…": "Loading…",
    "Ver contenido cargado": "Show loaded content",
    "Volver al skeleton": "Back to skeleton",
    "Sí:": "Do:",
    "No:": "Don't:",
    "Copia la forma del contenido real: imagen, título, líneas, botón.": "Match the shape of the real content: image, title, lines, button.",
    "en la zona que carga, las formas con": "on the loading region, shapes with",
    "y un \"Cargando…\" oculto para lectores de pantalla.": "and a hidden \"Loading…\" for screen readers.",
    "Con": "With",
    "el brillo se quita y queda la forma estática.": "the shimmer is removed and the static shape stays.",
    "No lo uses en cargas de menos de 300 ms: el parpadeo molesta más que la espera.": "Don't use it for loads under 300 ms: the flicker is more annoying than the wait.",
    "No mezcles skeleton y spinner en la misma zona.": "Don't mix a skeleton and a spinner in the same area."
  };

  // Patterns for text built at runtime (booking calendar)
  // RULES[target]: [pattern in the other language, replacement]
  var RULES = {
    en: [[/^(\d{1,2}) de diciembre$/, "December $1"]],
    es: [[/^December (\d{1,2})$/, "$1 de diciembre"]]
  };

  var EN_ES = {};
  Object.keys(ES_EN).forEach(function (k) { EN_ES[ES_EN[k]] = k; });

  // Spanish-speaking regions: ISO country codes and IANA time zones
  var ES_REGIONS = "ES MX GT SV HN NI CR PA CU DO PR CO VE EC PE BO CL PY UY AR GQ".split(" ");
  var ES_ZONES = ["Europe/Madrid", "Atlantic/Canary", "Africa/Ceuta", "Africa/Malabo",
    "America/Mexico_City", "America/Cancun", "America/Merida", "America/Monterrey", "America/Matamoros",
    "America/Chihuahua", "America/Ciudad_Juarez", "America/Ojinaga", "America/Mazatlan", "America/Bahia_Banderas",
    "America/Hermosillo", "America/Tijuana", "America/Guatemala", "America/El_Salvador", "America/Tegucigalpa",
    "America/Managua", "America/Costa_Rica", "America/Panama", "America/Havana", "America/Santo_Domingo",
    "America/Puerto_Rico", "America/Bogota", "America/Caracas", "America/Guayaquil", "Pacific/Galapagos",
    "America/Lima", "America/La_Paz", "America/Santiago", "America/Punta_Arenas", "Pacific/Easter",
    "America/Asuncion", "America/Montevideo", "America/Buenos_Aires"];

  function detect() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var parts = String(langs[i]).split("-");
      if (parts[0].toLowerCase() === "es") return "es";
      if (parts[1] && ES_REGIONS.indexOf(parts[1].toUpperCase()) !== -1) return "es";
    }
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (ES_ZONES.indexOf(tz) !== -1 || tz.indexOf("America/Argentina/") === 0) return "es";
    } catch (e) {}
    return "en";
  }

  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }

  function initial() {
    var m = /[?&]lang=(en|es)\b/.exec(location.search);
    if (m) { save(m[1]); return m[1]; }
    var s = saved();
    return s === "en" || s === "es" ? s : detect();
  }

  function tr(text, lang) {
    var map = lang === "en" ? ES_EN : EN_ES;
    if (Object.prototype.hasOwnProperty.call(map, text)) return map[text];
    var rules = RULES[lang];
    for (var i = 0; i < rules.length; i++) {
      if (rules[i][0].test(text)) return text.replace(rules[i][0], rules[i][1]);
    }
    return null;
  }

  var ATTRS = ["aria-label", "alt", "placeholder", "title"];

  function apply(lang) {
    root.lang = lang;
    // Text nodes (head too, for <title>)
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT" ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      var raw = node.nodeValue, key = raw.replace(/\s+/g, " ").trim();
      if (!key) continue;
      var out = tr(key, lang);
      if (out !== null && out !== key) {
        var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
        node.nodeValue = lead + out + trail;
      }
    }
    // Attributes
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[" + a + "]").forEach(function (el) {
        if (el.hasAttribute("data-glue-lang-toggle")) return;
        var out = tr(el.getAttribute(a).trim(), lang);
        if (out !== null) el.setAttribute(a, out);
      });
    });
    // Explicit overrides
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.hasAttribute("data-es")) el.setAttribute("data-es", el.textContent);
      el.textContent = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
    });
    syncToggles(lang);
  }

  function syncToggles(lang) {
    document.querySelectorAll("[data-glue-lang-toggle]").forEach(function (b) {
      var next = lang === "en" ? "es" : "en";
      var long = b.getAttribute("data-glue-lang-toggle") === "long";
      var text = long ? (next === "en" ? "English" : "Español") : next.toUpperCase();
      var label = b.querySelector(".g-lang-toggle__label");
      if (label) label.textContent = text; else b.textContent = text;
      b.setAttribute("lang", next);
      b.setAttribute("aria-label", next === "en" ? "Switch to English" : "Cambiar a español");
      if (long) b.removeAttribute("aria-label");
    });
  }

  var current = initial();
  root.lang = current;

  // Hide the page until English is applied, so Spanish never flashes. Failsafe after 1.5 s.
  // Not needed when the page shows its loading skeleton: text is transparent until
  // glue.js reveals it, which happens after this file has translated the page.
  if (current === "en" && !root.classList.contains("g-is-loading")) {
    root.classList.add("glue-i18n-pending");
    var style = document.createElement("style");
    style.textContent = ".glue-i18n-pending body{visibility:hidden}";
    document.head.appendChild(style);
    setTimeout(function () { root.classList.remove("glue-i18n-pending"); }, 1500);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(current);
    root.classList.remove("glue-i18n-pending");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-glue-lang-toggle]")) return;
    current = current === "en" ? "es" : "en";
    save(current);
    apply(current);
  });

  window.Glue = window.Glue || {};
  window.Glue.lang = function () { return current; };
  window.Glue.t = function (es) { return current === "en" ? (tr(es, "en") || es) : es; };
})();
