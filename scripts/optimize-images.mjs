// Generates responsive variants and recompressed versions of public images.
// Usage: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const SERVICES_DIR = "client/public/assets/images/services";
const WIDTHS = [480, 720, 960];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0;
for await (const file of walk(SERVICES_DIR)) {
  if (!file.endsWith(".webp")) continue;
  if (/_w\d+\.webp$/.test(file)) continue; // already a variant
  const before = (await stat(file)).size;
  const img = sharp(file);
  const meta = await img.metadata();

  // Responsive variants. Always emit every width (withoutEnlargement) so
  // that srcset URLs built by client/src/lib/responsiveImage.ts always exist.
  for (const w of WIDTHS) {
    const out = file.replace(/\.webp$/, `_w${w}.webp`);
    await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 62 })
      .toFile(out);
  }

  // Recompress original (cap at 1280px wide)
  const buf = await sharp(file)
    .resize({ width: Math.min(meta.width, 1280), withoutEnlargement: true })
    .webp({ quality: 75 })
    .toBuffer();
  if (buf.length < before) {
    await sharp(buf).toFile(file + ".tmp");
    const { rename } = await import("fs/promises");
    await rename(file + ".tmp", file);
    saved += before - buf.length;
  }
  console.log(path.basename(file), (before / 1024).toFixed(0) + "KB ->", ((await stat(file)).size / 1024).toFixed(0) + "KB");
}
console.log("Total saved:", (saved / 1024 / 1024).toFixed(2) + "MB");
