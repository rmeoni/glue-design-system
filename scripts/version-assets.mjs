#!/usr/bin/env node
/**
 * Glue Design System — cache busting for the published pages.
 *
 * GitHub Pages serves files with `cache-control: max-age=600`, so after a deploy a
 * browser can keep an old glue.css / glue.js for a while and pair it with new HTML
 * (new classes with old styles). This script adds a content hash to those links:
 *
 *   ../../dist/glue.css        →  ../../dist/glue.css?v=1a2b3c4d
 *   ../assets/glue.js          →  ../assets/glue.js?v=5e6f7a8b
 *
 * The hash only changes when the file's content changes. Runs as part of `npm run build`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const assets = {
  "dist/glue.css": /((?:\.\.\/)*dist\/glue\.css)(?:\?v=[0-9a-f]+)?(?=")/g,
  "examples/assets/glue.js": /((?:\.\.\/)*(?:examples\/)?assets\/glue\.js)(?:\?v=[0-9a-f]+)?(?=")/g,
  "examples/assets/i18n.js": /((?:\.\.\/)*(?:examples\/)?assets\/i18n\.js)(?:\?v=[0-9a-f]+)?(?=")/g,
};

const pages = [
  "examples/index.html",
  "examples/screens/home.html",
  "examples/screens/booking.html",
  "examples/screens/case-study.html",
];

const hashes = Object.fromEntries(
  Object.keys(assets).map((f) => [f, createHash("sha256").update(readFileSync(join(root, f))).digest("hex").slice(0, 8)])
);

let changed = 0;
for (const page of pages) {
  const path = join(root, page);
  const before = readFileSync(path, "utf8");
  let html = before;
  for (const [file, re] of Object.entries(assets)) html = html.replace(re, `$1?v=${hashes[file]}`);
  if (html !== before) { writeFileSync(path, html); changed++; }
}
console.log(`Cache busting: ${Object.entries(hashes).map(([f, h]) => `${f.split("/").pop()}?v=${h}`).join(", ")} (${changed} pages updated).`);
