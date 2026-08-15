// Generates responsive variants and recompressed versions of public images.
// Usage: node scripts/optimize-images.mjs
import sharp from "sharp";
// We rewrite files in place and re-read them in the same run; sharp's file
// cache would otherwise serve the stale pre-normalization content.
sharp.cache(false);
import { readdir, stat } from "fs/promises";
import path from "path";

const SERVICES_DIR = "client/public/assets/images/services";
// 768 (not 720) so a 412px viewport at 1.75 DPR (721px needed, e.g. Moto G)
// still picks this variant instead of jumping to 960.
const WIDTHS = [480, 768, 960];

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

  // Normalize the original to exactly 1280px wide first. srcset descriptors
  // built by client/src/lib/responsiveImage.ts declare fixed widths
  // (480w/768w/960w/1280w), so every file must physically match its
  // descriptor or browsers may pick an undersized candidate.
  if (meta.width !== 1280) {
    const norm = await sharp(file)
      .resize({ width: 1280 })
      .webp({ quality: 75 })
      .toBuffer();
    const { writeFile } = await import("fs/promises");
    await writeFile(file, norm);
  }

  // Responsive variants — always emitted at their exact declared width.
  for (const w of WIDTHS) {
    const out = file.replace(/\.webp$/, `_w${w}.webp`);
    await sharp(file)
      .resize({ width: w })
      .webp({ quality: 62 })
      .toFile(out);
  }

  // Recompress original
  const buf = await sharp(file).webp({ quality: 75 }).toBuffer();
  if (buf.length < before) {
    await sharp(buf).toFile(file + ".tmp");
    const { rename } = await import("fs/promises");
    await rename(file + ".tmp", file);
    saved += before - buf.length;
  }
  console.log(path.basename(file), (before / 1024).toFixed(0) + "KB ->", ((await stat(file)).size / 1024).toFixed(0) + "KB");
}
console.log("Total saved:", (saved / 1024 / 1024).toFixed(2) + "MB");
