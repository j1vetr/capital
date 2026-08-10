import fs from "node:fs";
import { type Server } from "node:http";
import path from "node:path";

import express, { type Express } from "express";

import runApp from "./app";
import { getMetaForPath, buildMetaHtml, isKnownPath, isEnglishPath } from "./seo";
import { sendSitemap } from "./sitemap";

const NOT_FOUND_TR = "__404__";
const NOT_FOUND_EN = "__404_en__";

function loadPrerenderedBodies(distDir: string): Record<string, string> {
  const prerenderDir = path.resolve(distDir, "prerendered");
  const manifestPath = path.join(prerenderDir, "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `Could not find prerender manifest: ${manifestPath}, make sure to run the full build`,
    );
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8")) as Record<string, string>;
  const bodies: Record<string, string> = {};
  for (const [route, fileName] of Object.entries(manifest)) {
    bodies[route] = fs.readFileSync(path.join(prerenderDir, fileName), "utf-8");
  }
  return bodies;
}

export async function serveStatic(app: Express, server: Server) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
  const bodies = loadPrerenderedBodies(path.resolve(import.meta.dirname));

  app.get("/sitemap.xml", sendSitemap);

  // Serve static assets (JS, CSS, images) but NOT index.html automatically
  app.use(express.static(distPath, { index: false }));

  // All HTML routes: inject SEO meta tags and prerendered body content
  app.use("*", (req, res) => {
    const [rawPath, query] = req.originalUrl.split("?");

    // Normalize trailing-slash variants to the canonical format with a 301
    if (rawPath.length > 1 && rawPath.endsWith("/")) {
      const normalized = rawPath.replace(/\/+$/, "") || "/";
      res.redirect(301, normalized + (query ? `?${query}` : ""));
      return;
    }

    const pathname = rawPath;
    const known = isKnownPath(pathname);
    const english = isEnglishPath(pathname);

    let html = template;
    const meta = getMetaForPath(pathname);
    const metaHtml = buildMetaHtml(meta, pathname, !known);
    html = html.replace("<!-- SEO_PLACEHOLDER -->", metaHtml);
    if (english) {
      html = html.replace(`<html lang="tr">`, `<html lang="en">`);
      html = html.replace(
        `<meta property="og:locale" content="tr_TR" />`,
        `<meta property="og:locale" content="en_US" />`,
      );
    }

    const body = known
      ? bodies[pathname]
      : bodies[english ? NOT_FOUND_EN : NOT_FOUND_TR];
    html = html.replace("<!-- SSR_BODY -->", body ?? "");

    res.status(known ? 200 : 404).set("Content-Type", "text/html").send(html);
  });
}

(async () => {
  await runApp(serveStatic);
})();
