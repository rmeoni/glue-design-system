/* Glue Design System — glue.js
   Optional behavior for the examples: theme toggle, mobile menu, chip toggle, back to top.
   Components work without it; it only wires state to the attributes the CSS reads. */
(function () {
  var root = document.documentElement;
  var KEY = "glue-theme";

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
      b.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
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
      menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
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

    if (e.target.closest("[data-glue-top]")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.addEventListener("DOMContentLoaded", syncToggles);
})();
