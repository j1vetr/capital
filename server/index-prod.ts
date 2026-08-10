import fs from "node:fs";
import { type Server } from "node:http";
import path from "node:path";

import express, { type Express } from "express";

import runApp from "./app";
import { getMetaForPath, buildMetaHtml, isKnownPath } from "./seo";

export async function serveStatic(app: Express, server: Server) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets (JS, CSS, images) but NOT index.html automatically
  app.use(express.static(distPath, { index: false }));

  // All HTML routes: inject SEO meta tags before serving index.html
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    const pathname = req.originalUrl.split("?")[0];
    const known = isKnownPath(pathname);
    try {
      let html = fs.readFileSync(indexPath, "utf-8");
      const meta = getMetaForPath(pathname);
      const metaHtml = buildMetaHtml(meta, pathname, !known);
      html = html.replace("<!-- SEO_PLACEHOLDER -->", metaHtml);
      res.status(known ? 200 : 404).set("Content-Type", "text/html").send(html);
    } catch {
      res.status(known ? 200 : 404).sendFile(indexPath);
    }
  });
}

(async () => {
  await runApp(serveStatic);
})();
