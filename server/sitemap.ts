import fs from "node:fs";
import path from "node:path";

import { enLocationsData, enServicesData } from "../client/src/data/en";
import { guidePath, guidesData } from "../client/src/data/guides";
import { locationsData } from "../client/src/data/locations";
import { servicesData } from "../client/src/data/services";
import { BASE_URL } from "../shared/business";
import { isKnownPath } from "./seo";

const SITEMAP_NS = "http://www.sitemaps.org/schemas/sitemap/0.9";
const IMAGE_NS = "http://www.google.com/schemas/sitemap-image/1.1";
const LEGACY_CONTENT_LASTMOD = "2026-04-03";
const SEO_CONTENT_LASTMOD = "2026-08-10";
const SEO_REVISION_LASTMOD = "2026-08-18";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapImage {
  loc: string;
  title: string;
}

export interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: ChangeFrequency;
  priority: string;
  images?: SitemapImage[];
}

const staticEntries: SitemapEntry[] = [
  { path: "/", lastmod: SEO_REVISION_LASTMOD, changefreq: "weekly", priority: "1.0" },
  { path: "/hakkimizda", lastmod: SEO_CONTENT_LASTMOD, changefreq: "monthly", priority: "0.8" },
  { path: "/hizmetler", lastmod: LEGACY_CONTENT_LASTMOD, changefreq: "weekly", priority: "0.9" },
  { path: "/projeler", lastmod: LEGACY_CONTENT_LASTMOD, changefreq: "weekly", priority: "0.8" },
  { path: "/iletisim", lastmod: SEO_CONTENT_LASTMOD, changefreq: "monthly", priority: "0.7" },
  { path: "/hizmet-bolgeleri", lastmod: SEO_CONTENT_LASTMOD, changefreq: "monthly", priority: "0.85" },
  { path: "/rehber", lastmod: SEO_CONTENT_LASTMOD, changefreq: "weekly", priority: "0.7" },
  { path: "/en", lastmod: SEO_CONTENT_LASTMOD, changefreq: "weekly", priority: "0.9" },
  { path: "/en/services", lastmod: SEO_CONTENT_LASTMOD, changefreq: "weekly", priority: "0.85" },
  { path: "/privacy", lastmod: LEGACY_CONTENT_LASTMOD, changefreq: "yearly", priority: "0.2" },
  { path: "/terms", lastmod: LEGACY_CONTENT_LASTMOD, changefreq: "yearly", priority: "0.2" },
  { path: "/kvkk", lastmod: LEGACY_CONTENT_LASTMOD, changefreq: "yearly", priority: "0.2" },
];

const servicePriorities: Record<string, string> = {
  "gemi-proje-lashing": "0.95",
  "konteyner-lashing": "0.95",
  "proje-kargo-lashing": "0.95",
  "tekne-yat-lashing": "0.9",
  "flat-rack-lashing": "0.9",
};

const serviceEntries: SitemapEntry[] = servicesData.map((service) => ({
  path: `/hizmetler/${service.id}`,
  lastmod: LEGACY_CONTENT_LASTMOD,
  changefreq: "monthly",
  priority: servicePriorities[service.id] || "0.85",
  images: service.image
    ? [
        {
          loc: `${BASE_URL}${service.image}`,
          title: service.title,
        },
      ]
    : undefined,
}));

const locationEntries: SitemapEntry[] = [
  {
    path: "/lashing/istanbul",
    lastmod: SEO_CONTENT_LASTMOD,
    changefreq: "monthly",
    priority: "0.85",
  },
  ...locationsData
    .filter((location) => location.slug !== "istanbul")
    .map((location) => ({
      path: `/lashing/${location.slug}`,
      lastmod: SEO_CONTENT_LASTMOD,
      changefreq: "monthly" as const,
      priority: "0.8",
    })),
];

const guideEntries: SitemapEntry[] = guidesData.map((guide) => ({
  path: guidePath(guide.slug),
  lastmod: guide.slug === "lashing-nedir" ? SEO_REVISION_LASTMOD : guide.datePublished,
  changefreq: "monthly",
  priority: guide.slug === "lashing-nedir" ? "0.8" : "0.65",
}));

const englishServiceEntries: SitemapEntry[] = enServicesData.map((service, index) => ({
  path: `/en/services/${service.slug}`,
  lastmod: SEO_CONTENT_LASTMOD,
  changefreq: "monthly",
  priority: index < 4 ? "0.8" : "0.75",
}));

const englishLocationEntries: SitemapEntry[] = enLocationsData.map((location) => ({
  path: `/en/locations/${location.slug}`,
  lastmod: SEO_CONTENT_LASTMOD,
  changefreq: "monthly",
  priority: "0.7",
}));

export function buildSitemapEntries(): SitemapEntry[] {
  return [
    ...staticEntries.slice(0, 5),
    ...serviceEntries,
    ...staticEntries.slice(5, 7),
    ...locationEntries,
    ...guideEntries,
    ...staticEntries.slice(7, 9),
    ...englishServiceEntries,
    ...englishLocationEntries,
    ...staticEntries.slice(9),
  ];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function validateSitemapEntries(
  entries: SitemapEntry[],
  options: { checkImages?: boolean; assetRoots?: string[] } = {},
): void {
  const paths = new Set<string>();
  const assetRoots = options.assetRoots || [
    path.resolve(process.cwd(), "client/public"),
    path.resolve(process.cwd(), "dist/public"),
  ];

  for (const entry of entries) {
    if (paths.has(entry.path)) {
      throw new Error(`Duplicate sitemap path: ${entry.path}`);
    }
    paths.add(entry.path);

    if (!isKnownPath(entry.path)) {
      throw new Error(`Sitemap path is not a known application route: ${entry.path}`);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.lastmod)) {
      throw new Error(`Invalid sitemap lastmod for ${entry.path}: ${entry.lastmod}`);
    }

    if (options.checkImages) {
      for (const image of entry.images || []) {
        const imagePath = new URL(image.loc).pathname;
        const exists = assetRoots.some((root) => fs.existsSync(path.join(root, imagePath)));
        if (!exists) {
          throw new Error(`Sitemap image does not exist: ${image.loc}`);
        }
      }
    }
  }
}

export function generateSitemapXml(options: { validate?: boolean } = {}): string {
  const entries = buildSitemapEntries();
  if (options.validate !== false) {
    validateSitemapEntries(entries);
  }

  const urls = entries
    .map((entry) => {
      const images = (entry.images || [])
        .map(
          (image) =>
            `\n    <image:image>\n      <image:loc>${escapeXml(image.loc)}</image:loc>\n      <image:title>${escapeXml(image.title)}</image:title>\n    </image:image>`,
        )
        .join("");

      return [
        "  <url>",
        `    <loc>${escapeXml(`${BASE_URL}${entry.path === "/" ? "/" : entry.path}`)}</loc>`,
        `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>${images}`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="${SITEMAP_NS}" xmlns:image="${IMAGE_NS}">`,
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

export function sendSitemap(_req: unknown, res: { type: (value: string) => { send: (body: string) => void } }): void {
  res.type("application/xml").send(generateSitemapXml());
}