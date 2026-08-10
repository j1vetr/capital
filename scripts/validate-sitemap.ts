import path from "node:path";

import {
  buildSitemapEntries,
  generateSitemapXml,
  validateSitemapEntries,
} from "../server/sitemap";

const assetRoots = [
  path.resolve(process.cwd(), "client/public"),
  path.resolve(process.cwd(), "dist/public"),
];

const entries = buildSitemapEntries();
validateSitemapEntries(entries, { checkImages: true, assetRoots });

const xml = generateSitemapXml({ validate: false });

// Forbidden characters in content text
const forbiddenPatterns: [RegExp, string][] = [
  [/\u2014|\u2013/, "em/en dash"],
];
for (const [pattern, label] of forbiddenPatterns) {
  if (pattern.test(xml)) {
    throw new Error(`Sitemap output contains forbidden ${label}`);
  }
}

// Basic well-formedness: every opening tag must have a closing tag
if (!xml.startsWith("<?xml")) {
  throw new Error("Sitemap output does not start with XML declaration");
}
if (!xml.includes("<urlset ") || !xml.includes("</urlset>")) {
  throw new Error("Sitemap output is missing urlset element");
}
const locCount = (xml.match(/<loc>/g) || []).length;
if (locCount !== entries.length) {
  throw new Error(`Expected ${entries.length} <loc> elements, found ${locCount}`);
}

// No duplicate URLs
if (entries.length !== new Set(entries.map((e) => e.path)).size) {
  throw new Error("Sitemap contains duplicate URLs");
}

const imageCount = entries.reduce((n, e) => n + (e.images?.length ?? 0), 0);
console.log(`Sitemap validation passed: ${entries.length} URLs, ${imageCount} image entries`);
