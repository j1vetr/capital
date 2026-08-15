import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import Beasties from "beasties";

import { buildSitemapEntries } from "../server/sitemap";

const NOT_FOUND_TR = "__404__";
const NOT_FOUND_EN = "__404_en__";

async function main() {
  const ssrEntry = path.resolve(process.cwd(), "dist/ssr/entry-server.js");
  if (!fs.existsSync(ssrEntry)) {
    throw new Error(`SSR entry not found: ${ssrEntry}. Run the SSR build first.`);
  }
  const { render } = (await import(pathToFileURL(ssrEntry).href)) as {
    render: (url: string) => Promise<string>;
  };

  const outDir = path.resolve(process.cwd(), "dist/prerendered");
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const routes = buildSitemapEntries().map((entry) => entry.path);
  const manifest: Record<string, string> = {};

  // Critical CSS: the main stylesheet is render-blocking (~450ms on slow 4G).
  // For each route we inline the CSS actually needed for first paint into the
  // prerendered body fragment, and rewrite the template to load the full
  // stylesheet asynchronously (preload + onload swap, with noscript fallback).
  const publicDir = path.resolve(process.cwd(), "dist/public");
  const templatePath = path.join(publicDir, "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");

  const beasties = new Beasties({
    path: publicDir,
    external: true,
    pruneSource: false,
    inlineFonts: false,
    preloadFonts: false,
    logLevel: "silent",
  });

  const extractCritical = async (bodyHtml: string): Promise<string> => {
    const page = template.replace("<!-- SSR_BODY -->", bodyHtml);
    const processed = await beasties.process(page);
    const m = processed.match(/<style>([\s\S]*?)<\/style>/);
    return m ? m[1] : "";
  };

  const writeRoute = async (routePath: string, renderPath: string, key: string) => {
    const html = await render(renderPath);
    if (!html || html.length < 200) {
      throw new Error(`Prerendered body for ${routePath} looks empty (${html.length} chars)`);
    }
    const critical = await extractCritical(html);
    if (!critical) {
      throw new Error(`Critical CSS extraction produced no styles for ${routePath}`);
    }
    // The body fragment must contain ONLY the server-rendered React markup
    // (it is injected into #root; anything else breaks hydration). The
    // critical CSS goes into a sibling .css file that the server injects
    // into <head>.
    const fileName = `${encodeURIComponent(key)}.html`;
    fs.writeFileSync(path.join(outDir, fileName), html, "utf-8");
    fs.writeFileSync(path.join(outDir, `${fileName}.critical.css`), critical, "utf-8");
    manifest[key] = fileName;
  };

  for (const route of routes) {
    await writeRoute(route, route, route);
  }

  // Not found bodies, Turkish and English variants
  await writeRoute(NOT_FOUND_TR, "/__seo-not-found__", NOT_FOUND_TR);
  await writeRoute(NOT_FOUND_EN, "/en/__seo-not-found__", NOT_FOUND_EN);

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf-8");

  // Make the main stylesheet non-render-blocking in the served template.
  // Critical CSS for first paint is already inlined into each body fragment.
  const cssLink = template.match(/<link rel="stylesheet" crossorigin href="([^"]+\.css)">/);
  if (!cssLink) throw new Error("Stylesheet link not found in template");
  // Note: we deliberately do NOT preload fonts — measured on slow 4G, font
  // preloads compete with the inline critical CSS/HTML and push FCP from
  // 0.8s to 2.2s. font-display: swap plus metric-matched fallbacks handles
  // the swap instead.
  const asyncLink =
    `<link rel="preload" href="${cssLink[1]}" as="style" crossorigin ` +
    `onload="this.onload=null;this.rel='stylesheet'">` +
    `<noscript><link rel="stylesheet" crossorigin href="${cssLink[1]}"></noscript>`;
  fs.writeFileSync(templatePath, template.replace(cssLink[0], asyncLink), "utf-8");
  console.log(`Prerendered ${routes.length} routes plus 404 bodies into ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
