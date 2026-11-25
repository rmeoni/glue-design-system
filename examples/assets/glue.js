/* Glue Design System — glue.js
   Optional behavior for the examples: theme toggle, mobile menu, chip toggle, back to top, snackbar.
   Components work without it; it only wires state to the attributes the CSS reads. */
(function () {
  var root = document.documentElement;
  var KEY = "glue-theme";
  // Labels go through i18n.js when it is loaded; Spanish otherwise.
  function T(es) { return window.Glue && window.Glue.t ? window.Glue.t(es) : es; }

  // Theme: saved choice, else the OS preference
  try {
    var saved = localStorage.getItem(KEY);
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function syncToggles() {
    var dark = currentTheme() === "dark";
    document.querySelectorAll("[data-glue-theme-toggle]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(dark));
      b.setAttribute("aria-label", T(dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"));
    });
    // Ensure the icon CSS sees an explicit theme
    root.setAttribute("data-theme", currentTheme());
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-glue-theme-toggle]");
    if (t) {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (err) {}
      syncToggles();
      return;
    }

    var menu = e.target.closest("[data-glue-menu]");
    if (menu) {
      var panel = document.getElementById(menu.getAttribute("aria-controls"));
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", T(open ? "Cerrar menú" : "Abrir menú"));
      if (panel) panel.setAttribute("data-open", String(open));
      return;
    }

    var chip = e.target.closest(".g-chip[aria-pressed]");
    if (chip) {
      var group = chip.closest("[data-glue-single]");
      if (group) {
        group.querySelectorAll(".g-chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
      } else {
        chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true"));
      }
      return;
    }

    var snackClose = e.target.closest("[data-glue-snackbar-close]");
    if (snackClose) {
      hideSnackbar(snackClose.closest(".g-snackbar"));
      return;
    }

    if (e.target.closest("[data-glue-top]")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  // Snackbar: Glue.snackbar("id", "Optional new message").
  // Auto-dismisses after data-duration ms (default 6000, Material range 4–10 s),
  // pauses while hovered or focused, and closes with Escape.
  function hideSnackbar(el) {
    if (!el) return;
    clearTimeout(el._glueTimer);
    el.setAttribute("data-open", "false");
  }

  function armSnackbar(el) {
    clearTimeout(el._glueTimer);
    var ms = parseInt(el.getAttribute("data-duration"), 10) || 6000;
    el._glueTimer = setTimeout(function () { hideSnackbar(el); }, ms);
  }

  function showSnackbar(id, message) {
    var el = typeof id === "string" ? document.getElementById(id) : id;
    if (!el) return;
    // One at a time: a new snackbar replaces the one on screen.
    document.querySelectorAll('.g-snackbar[data-open="true"]').forEach(function (o) { if (o !== el) hideSnackbar(o); });
    var text = el.querySelector(".g-snackbar__text");
    // Re-setting the text makes the live region announce it again.
    if (text) {
      var msg = message || text.textContent;
      text.textContent = "";
      setTimeout(function () { text.textContent = msg; }, 50);
    }
    el.setAttribute("data-open", "true");
    armSnackbar(el);
    if (!el._glueWired) {
      el._glueWired = true;
      ["mouseenter", "focusin"].forEach(function (t) { el.addEventListener(t, function () { clearTimeout(el._glueTimer); }); });
      ["mouseleave", "focusout"].forEach(function (t) {
        el.addEventListener(t, function () { if (el.getAttribute("data-open") === "true") armSnackbar(el); });
      });
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll('.g-snackbar[data-open="true"]').forEach(hideSnackbar);
  });

  window.Glue = window.Glue || {};
  window.Glue.snackbar = showSnackbar;
  window.Glue.hideSnackbar = function (id) { hideSnackbar(typeof id === "string" ? document.getElementById(id) : id); };

  document.addEventListener("DOMContentLoaded", syncToggles);

  // Skeleton loading (see "Skeleton while the page paints" in components.css)
  // Images: mark each .g-media image when it loads (or fails), so its skeleton goes away.
  function markImages() {
    document.querySelectorAll(".g-media > img:not([data-loaded])").forEach(function (img) {
      var done = function () { img.setAttribute("data-loaded", ""); };
      if (img.complete) done();
      else { img.addEventListener("load", done, { once: true }); img.addEventListener("error", done, { once: true }); }
    });
  }
  markImages();
  document.addEventListener("DOMContentLoaded", markImages);

  // Page: reveal text once the DOM is parsed (i18n has run) and the web font is ready.
  // The inline <head> snippet also reveals after 4 s in case this file never loads.
  var domReady = new Promise(function (resolve) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", resolve);
    else resolve();
  });
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.all([domReady, fontsReady]).then(function () {
    root.classList.remove("g-is-loading");
  });
})();
