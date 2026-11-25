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
      if (b.getAttribute("role") === "switch") {
        // .g-theme-switch: fixed label, state in aria-checked (as on uxrodrigo.com)
        b.setAttribute("aria-checked", String(dark));
        b.setAttribute("aria-label", T("Modo oscuro"));
      } else {
        // Deprecated .g-theme-toggle icon button
        b.setAttribute("aria-pressed", String(dark));
        b.setAttribute("aria-label", T(dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"));
      }
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

  // Scroll-spy for one-page navbars: <header class="g-navbar" data-glue-spy>.
  // Marks the link of the section you are reading with aria-current="location",
  // in the bar and in the mobile menu. A section owns everything until the next
  // linked section starts, so in-between sections count as part of the one above.
  function initSpy() {
    document.querySelectorAll("[data-glue-spy]").forEach(function (nav) {
      var links = Array.prototype.slice.call(nav.querySelectorAll('.g-navbar__link[href^="#"]'));
      var ids = [];
      links.forEach(function (a) { var id = a.getAttribute("href").slice(1); if (ids.indexOf(id) === -1) ids.push(id); });
      var targets = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
      if (!targets.length) return;
      var current = null;
      function update() {
        var line = nav.getBoundingClientRect().bottom + 24, active = null;
        targets.forEach(function (t) { if (t.getBoundingClientRect().top <= line) active = t.id; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = targets[targets.length - 1].id;
        if (active === current) return;
        current = active;
        links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + active) a.setAttribute("aria-current", "location");
          else a.removeAttribute("aria-current");
        });
      }
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      window.addEventListener("hashchange", update);
      update();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initSpy);
  else initSpy();

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
    if (!root.classList.contains("g-is-loading")) return;
    root.classList.add("g-is-revealing");
    root.classList.remove("g-is-loading");
    setTimeout(function () { root.classList.remove("g-is-revealing"); }, 50);
  });
})();
