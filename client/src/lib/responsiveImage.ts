// Responsive variants for service images. scripts/optimize-images.mjs
// generates _w480 and _w960 versions next to each original webp under
// /assets/images/services. Returns srcSet only for those paths.
export function serviceSrcSet(src: string): string | undefined {
  if (!src.startsWith("/assets/images/services/") || !src.endsWith(".webp")) return undefined;
  const base = src.slice(0, -".webp".length);
  return `${base}_w480.webp 480w, ${base}_w960.webp 960w, ${src} 1280w`;
}

export const CARD_SIZES = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
