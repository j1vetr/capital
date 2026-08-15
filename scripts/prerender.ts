import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

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

  const writeRoute = async (routePath: string, renderPath: string, key: string) => {
    const html = await render(renderPath);
    if (!html || html.length < 200) {
      throw new Error(`Prerendered body for ${routePath} looks empty (${html.length} chars)`);
    }
    const fileName = `${encodeURIComponent(key)}.html`;
    fs.writeFileSync(path.join(outDir, fileName), html, "utf-8");
    manifest[key] = fileName;
  };

  for (const route of routes) {
    await writeRoute(route, route, route);
  }

  // Not found bodies, Turkish and English variants
  await writeRoute(NOT_FOUND_TR, "/__seo-not-found__", NOT_FOUND_TR);
  await writeRoute(NOT_FOUND_EN, "/en/__seo-not-found__", NOT_FOUND_EN);

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`Prerendered ${routes.length} routes plus 404 bodies into ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
