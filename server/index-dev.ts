import fs from "node:fs";
import { type Server } from "node:http";
import path from "node:path";

import type { Express } from "express";
import { nanoid } from "nanoid";
import { createServer as createViteServer, createLogger } from "vite";

import runApp from "./app";
import { getMetaForPath, buildMetaHtml, isKnownPath, isEnglishPath } from "./seo";
import { sendSitemap } from "./sitemap";

import viteConfig from "../vite.config";

const viteLogger = createLogger();

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.get("/sitemap.xml", sendSitemap);
  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const [rawPath, query] = url.split("?");
      if (rawPath.length > 1 && rawPath.endsWith("/")) {
        const normalized = rawPath.replace(/\/+$/, "") || "/";
        res.redirect(301, normalized + (query ? `?${query}` : ""));
        return;
      }

      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      // Server-side SEO meta injection
      const pathname = url.split("?")[0];
      const known = isKnownPath(pathname);
      try {
        const meta = getMetaForPath(pathname);
        const metaHtml = buildMetaHtml(meta, pathname, !known);
        template = template.replace("<!-- SEO_PLACEHOLDER -->", metaHtml);
        if (isEnglishPath(pathname)) {
          template = template.replace(`<html lang="tr">`, `<html lang="en">`);
          template = template.replace(
            `<meta property="og:locale" content="tr_TR" />`,
            `<meta property="og:locale" content="en_US" />`,
          );
        }
      } catch {
        template = template.replace("<!-- SEO_PLACEHOLDER -->", "");
      }

      // Server-side render the page body
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      const bodyHtml = (await render(pathname)) as string;
      template = template.replace("<!-- SSR_BODY -->", bodyHtml);

      const page = await vite.transformIndexHtml(url, template);
      res.status(known ? 200 : 404).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

(async () => {
  await runApp(setupVite);
})();
