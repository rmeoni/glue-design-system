#!/usr/bin/env node
/**
 * Glue Design System — zeroheight export.
 *
 * zeroheight's token manager imports JSON in the DTCG 2025.10 format (.tokens.json).
 * Our source files in /tokens keep the older string values that Tokens Studio and the
 * CSS build read ("#153180", "16px", "200ms"), so this script writes a converted copy:
 *
 *   dist/zeroheight/glue-light.tokens.json   primitives + typography + light semantic
 *   dist/zeroheight/glue-dark.tokens.json    primitives + typography + dark semantic
 *
 * Each file is self-contained: every {alias} resolves inside it, so either one can be
 * imported on its own as a token set. Conversions (DTCG 2025.10):
 *   color      "#153180"   → { colorSpace: "srgb", components: [r, g, b], hex: "#153180" } (+ alpha)
 *   dimension  "16px"      → { value: 16, unit: "px" }
 *   duration   "200ms"     → { value: 200, unit: "ms" }
 *   shadow     sub-values converted the same way
 *   typography lineHeight becomes a unitless ratio (60px on 48px → 1.25), as the spec requires
 * Aliases ("{color.navy.700}") are kept as aliases.
 *
 * Runs as part of `npm run build`. Throws if any value or alias does not validate.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const isRef = (v) => typeof v === "string" && /^\{[^}]+\}$/.test(v);
const round = (n, d = 4) => Math.round(n * 10 ** d) / 10 ** d;

// ---------- value converters ----------
function color(v) {
  if (isRef(v)) return v;
  const m = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(v);
  if (!m) throw new Error(`Not a hex color: ${v}`);
  let h = m[1];
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const ch = (i) => parseInt(h.slice(i, i + 2), 16);
  const out = {
    colorSpace: "srgb",
    components: [round(ch(0) / 255), round(ch(2) / 255), round(ch(4) / 255)],
  };
  if (h.length === 8) out.alpha = round(ch(6) / 255);
  out.hex = `#${h.slice(0, 6).toLowerCase()}`;
  return out;
}

function unitValue(v, units, kind) {
  if (isRef(v)) return v;
  if (v === 0 || v === "0") return { value: 0, unit: units[0] };
  const m = new RegExp(`^(-?\\d*\\.?\\d+)(${units.join("|")})$`).exec(String(v));
  if (!m) throw new Error(`Not a ${kind} (${units.join("/")}): ${v}`);
  return { value: Number(m[1]), unit: m[2] };
}
const dimension = (v) => unitValue(v, ["px", "rem"], "dimension");
const duration = (v) => unitValue(v, ["ms", "s"], "duration");

function shadow(v) {
  if (isRef(v)) return v;
  const one = (s) => {
    const o = {
      color: color(s.color),
      offsetX: dimension(s.offsetX),
      offsetY: dimension(s.offsetY),
      blur: dimension(s.blur),
      spread: dimension(s.spread),
    };
    if (s.inset) o.inset = true;
    return o;
  };
  return Array.isArray(v) ? v.map(one) : one(v);
}

// ---------- tree helpers ----------
/** Deep-merge DTCG trees. Throws if two files define the same token. */
function merge(target, src, path = []) {
  for (const [k, v] of Object.entries(src)) {
    if (k === "$description" && path.length === 0) continue; // file-level notes
    if (v && typeof v === "object" && !Array.isArray(v) && !("$value" in v) && !k.startsWith("$")) {
      target[k] = target[k] || {};
      merge(target[k], v, [...path, k]);
    } else {
      if (k in target && !k.startsWith("$")) throw new Error(`Duplicate token ${[...path, k].join(".")}`);
      if (k === "$type" && target.$type && target.$type !== v)
        throw new Error(`Conflicting $type at ${path.join(".")}: ${target.$type} vs ${v}`);
      target[k] = v;
    }
  }
  return target;
}

/** Visit every token: fn(token, path, inheritedType). */
function eachToken(node, fn, path = [], type) {
  const t = node.$type ?? type;
  if ("$value" in node) return fn(node, path, t);
  for (const [k, c] of Object.entries(node)) {
    if (!k.startsWith("$") && c && typeof c === "object") eachToken(c, fn, [...path, k], t);
  }
}

function lookup(tree, ref) {
  const path = ref.slice(1, -1).split(".");
  let node = tree, type;
  for (const k of path) {
    if (!node || typeof node !== "object") return null;
    type = node.$type ?? type;
    node = node[k];
  }
  if (!node || !("$value" in node)) return null;
  return { node, type: node.$type ?? type };
}

/** Follow aliases to a raw source value (used for the lineHeight ratio). */
function resolveRaw(tree, v) {
  let guard = 0;
  while (isRef(v)) {
    const hit = lookup(tree, v);
    if (!hit) throw new Error(`Unresolved reference ${v}`);
    v = hit.node.$value;
    if (++guard > 20) throw new Error(`Reference loop at ${v}`);
  }
  return v;
}

// ---------- build one theme ----------
function buildTheme(themeFile, themeName) {
  const source = merge(merge(merge({}, read("tokens/primitives.tokens.json")), read("tokens/typography.tokens.json")), read(themeFile));
  const out = structuredClone(source);
  out.$description = `Glue Design System — ${themeName} theme. Primitives, text styles and ${themeName.toLowerCase()} semantic tokens. DTCG 2025.10, generated by scripts/build-zeroheight.mjs. Do not edit by hand.`;

  eachToken(out, (tok, path, type) => {
    const v = tok.$value;
    switch (type) {
      case "color": tok.$value = color(v); break;
      case "dimension": tok.$value = dimension(v); break;
      case "duration": tok.$value = duration(v); break;
      case "shadow": tok.$value = shadow(v); break;
      case "typography": {
        if (isRef(v)) break;
        const size = parseFloat(resolveRaw(source, v.fontSize));
        const lh = resolveRaw(source, v.lineHeight);
        tok.$value = {
          fontFamily: v.fontFamily,
          fontSize: dimension(v.fontSize),
          fontWeight: v.fontWeight,
          letterSpacing: dimension(v.letterSpacing),
          lineHeight: typeof lh === "number" ? lh : round(parseFloat(lh) / size),
        };
        break;
      }
      case "fontFamily": case "fontWeight": case "cubicBezier": case "number": break;
      default: throw new Error(`Unhandled $type "${type}" at ${path.join(".")}`);
    }
  });

  validate(out);
  return out;
}

// ---------- validation (DTCG 2025.10 shapes + aliases) ----------
function validate(tree) {
  const errors = [];
  const isDim = (x, units) => x && typeof x === "object" && typeof x.value === "number" && units.includes(x.unit);
  const isColor = (x) => x && x.colorSpace === "srgb" && Array.isArray(x.components) && x.components.length === 3 &&
    x.components.every((c) => c >= 0 && c <= 1) && (x.alpha === undefined || (x.alpha >= 0 && x.alpha <= 1));
  const expect = {
    color: isColor,
    dimension: (x) => isDim(x, ["px", "rem"]),
    duration: (x) => isDim(x, ["ms", "s"]),
    fontFamily: (x) => typeof x === "string" || (Array.isArray(x) && x.every((s) => typeof s === "string")),
    fontWeight: (x) => (typeof x === "number" && x >= 1 && x <= 1000) || typeof x === "string",
    cubicBezier: (x) => Array.isArray(x) && x.length === 4 && x.every((n) => typeof n === "number"),
    number: (x) => typeof x === "number",
  };
  const check = (v, type, where) => {
    if (isRef(v)) {
      const hit = lookup(tree, v);
      if (!hit) return errors.push(`${where}: unresolved alias ${v}`);
      if (type && hit.type !== type) errors.push(`${where}: alias ${v} is ${hit.type}, expected ${type}`);
      return;
    }
    if (type === "shadow") {
      for (const s of Array.isArray(v) ? v : [v]) {
        check(s.color, "color", `${where}.color`);
        for (const k of ["offsetX", "offsetY", "blur", "spread"]) check(s[k], "dimension", `${where}.${k}`);
      }
      return;
    }
    if (type === "typography") {
      check(v.fontFamily, "fontFamily", `${where}.fontFamily`);
      check(v.fontSize, "dimension", `${where}.fontSize`);
      check(v.fontWeight, "fontWeight", `${where}.fontWeight`);
      check(v.letterSpacing, "dimension", `${where}.letterSpacing`);
      if (typeof v.lineHeight !== "number") errors.push(`${where}.lineHeight: must be a number`);
      return;
    }
    if (!expect[type]) return errors.push(`${where}: unknown $type ${type}`);
    if (!expect[type](v)) errors.push(`${where}: invalid ${type} ${JSON.stringify(v)}`);
  };
  eachToken(tree, (tok, path, type) => {
    if (!type) return errors.push(`${path.join(".")}: no $type`);
    if (path.some((k) => /[{}.]/.test(k) || k.startsWith("$"))) errors.push(`${path.join(".")}: invalid name`);
    check(tok.$value, type, path.join("."));
  });
  if (errors.length) throw new Error(`zeroheight export failed validation:\n  ${errors.join("\n  ")}`);
}

// ---------- write ----------
mkdirSync(join(root, "dist/zeroheight"), { recursive: true });
let count = 0;
for (const [file, name, slug] of [
  ["tokens/semantic.light.tokens.json", "Light", "light"],
  ["tokens/semantic.dark.tokens.json", "Dark", "dark"],
]) {
  const tree = buildTheme(file, name);
  count = 0;
  eachToken(tree, () => count++);
  writeFileSync(join(root, `dist/zeroheight/glue-${slug}.tokens.json`), JSON.stringify(tree, null, 2) + "\n");
}
console.log(`zeroheight: dist/zeroheight/glue-light.tokens.json, glue-dark.tokens.json (${count} tokens each, DTCG 2025.10).`);
