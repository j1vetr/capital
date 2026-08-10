import { servicesData } from "../client/src/data/services";
import { locationsData } from "../client/src/data/locations";
import {
  BASE_URL,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "../shared/business";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

const routesMeta: Record<string, PageMeta> = {
  "/": {
    title: "Capital Lashing & Port Services | İstanbul Lashing Firması – Yük Sabitleme",
    description: "İstanbul merkezli lashing ve liman hizmetleri firması. Gemi proje lashing, konteyner sabitleme, shrink wrap, sandıklama. DNV-GL onaylı ekipman, 7/24 operasyon. Teklif alın.",
    canonical: BASE_URL,
  },
  "/hakkimizda": {
    title: "Hakkımızda | Capital Lashing & Port Services – 10 Yıllık Deneyim",
    description: "Capital Lashing 10+ yıllık tecrübesi, 5.000+ tamamlanmış operasyonu ve DNV-GL onaylı ekipmanlarıyla Türkiye'nin lider lashing ve liman hizmetleri firmasıdır.",
    canonical: `${BASE_URL}/hakkimizda`,
  },
  "/hizmetler": {
    title: "Lashing Hizmetleri | Gemi, Konteyner, Flat Rack, Shrink Wrap – Capital Lashing",
    description: "Gemi proje lashing, konteyner lashing, flat rack sabitleme, shrink wrap, brandalama, sandıklama ve unlashing. İstanbul ve Türkiye genelinde 7/24 profesyonel operasyon.",
    canonical: `${BASE_URL}/hizmetler`,
  },
  "/projeler": {
    title: "Referanslar & Tamamlanan Projeler | Capital Lashing",
    description: "Capital Lashing'in tamamladığı lashing ve port hizmetleri projeleri. Endüstriyel ekipman, tekne, proje kargo ve konteyner lashing referansları. Fotoğraflı gerçek operasyonlar.",
    canonical: `${BASE_URL}/projeler`,
  },
  "/iletisim": {
    title: "İletişim & Teklif Talebi | Capital Lashing – 7/24 Destek",
    description: "Capital Lashing ile iletişime geçin. Teklif talebi, acil operasyon desteği: +90 216 312 06 12 | info@capitallashing.com. Sancaktepe / İstanbul ofisimiz. 7/24 yanınızdayız.",
    canonical: `${BASE_URL}/iletisim`,
  },
  "/privacy": {
    title: "Gizlilik Politikası | Capital Lashing",
    description: "Capital Lashing & Port Services gizlilik politikası. Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi alın.",
    canonical: `${BASE_URL}/privacy`,
  },
  "/terms": {
    title: "Kullanım Koşulları | Capital Lashing",
    description: "Capital Lashing & Port Services web sitesi kullanım koşulları ve hizmet şartları hakkında detaylı bilgi.",
    canonical: `${BASE_URL}/terms`,
  },
  "/hizmet-bolgeleri": {
    title: "Hizmet Bölgeleri | İstanbul, Ambarlı, Tekirdağ, Aliağa, Mersin - Capital Lashing",
    description: "Capital Lashing hizmet bölgeleri. İstanbul, Ambarlı, Haydarpaşa, Tekirdağ, İzmir Aliağa ve Mersin bölgelerinde lashing, yük sabitleme ve paketleme operasyonları.",
    canonical: `${BASE_URL}/hizmet-bolgeleri`,
  },
  "/kvkk": {
    title: "KVKK Aydınlatma Metni | Capital Lashing",
    description: "Capital Lashing & Port Services KVKK aydınlatma metni. 6698 sayılı kanun kapsamında kişisel verilerin korunması hakkında bilgilendirme.",
    canonical: `${BASE_URL}/kvkk`,
  },
};

function normalizePath(pathname: string): string {
  return pathname.split("?")[0].replace(/\/$/, "") || "/";
}

function getServiceForPath(cleanPath: string) {
  const serviceMatch = cleanPath.match(/^\/hizmetler\/([^/]+)$/);
  if (!serviceMatch) return undefined;
  return servicesData.find((s) => s.id === serviceMatch[1]);
}

function getLocationForPath(cleanPath: string) {
  const locationMatch = cleanPath.match(/^\/lashing\/([^/]+)$/);
  if (!locationMatch) return undefined;
  return locationsData.find((l) => l.slug === locationMatch[1]);
}

export function isKnownPath(pathname: string): boolean {
  const cleanPath = normalizePath(pathname);
  if (routesMeta[cleanPath]) return true;
  if (getServiceForPath(cleanPath)) return true;
  return Boolean(getLocationForPath(cleanPath));
}

export function getMetaForPath(pathname: string): PageMeta {
  const cleanPath = normalizePath(pathname);

  if (routesMeta[cleanPath]) return routesMeta[cleanPath];

  const service = getServiceForPath(cleanPath);
  if (service) {
    return {
      title: service.seoTitle,
      description: service.metaDescription,
      canonical: `${BASE_URL}/hizmetler/${service.id}`,
    };
  }

  const location = getLocationForPath(cleanPath);
  if (location) {
    return {
      title: location.seoTitle,
      description: location.metaDescription,
      canonical: `${BASE_URL}/lashing/${location.slug}`,
    };
  }

  return {
    title: "Sayfa Bulunamadı | Capital Lashing & Port Services",
    description: "Aradığınız sayfa bulunamadı. Capital Lashing ana sayfasına dönerek lashing ve liman hizmetlerimizi inceleyebilirsiniz.",
    canonical: `${BASE_URL}${cleanPath}`,
  };
}

interface JsonLdEntry {
  id: string;
  schema: object;
}

export function getSchemasForPath(pathname: string): JsonLdEntry[] {
  const cleanPath = normalizePath(pathname);
  const schemas: JsonLdEntry[] = [];

  if (cleanPath === "/") {
    schemas.push({ id: "ld-org", schema: buildOrganizationSchema() });
    schemas.push({ id: "ld-website", schema: buildWebSiteSchema() });
    return schemas;
  }

  const service = getServiceForPath(cleanPath);
  if (service) {
    const canonical = `${BASE_URL}/hizmetler/${service.id}`;
    schemas.push({
      id: "ld-service",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        url: canonical,
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: service.title,
        areaServed: (service.ports || []).map((p) => ({
          "@type": "Place",
          name: p,
        })),
      },
    });
    schemas.push({
      id: "ld-breadcrumb",
      schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${BASE_URL}/hizmetler` },
          { "@type": "ListItem", position: 3, name: service.title, item: canonical },
        ],
      },
    });
    if (service.faq && service.faq.length > 0) {
      schemas.push({
        id: "ld-faq",
        schema: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      });
    }
    return schemas;
  }

  const location = getLocationForPath(cleanPath);
  if (location) {
    const canonical = `${BASE_URL}/lashing/${location.slug}`;
    schemas.push({
      id: "ld-service",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: location.title,
        description: location.metaDescription,
        url: canonical,
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: "Lashing ve Yük Sabitleme",
        areaServed: { "@type": "Place", name: location.areaName },
      },
    });
    schemas.push({
      id: "ld-breadcrumb",
      schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Hizmet Bölgeleri", item: `${BASE_URL}/hizmet-bolgeleri` },
          { "@type": "ListItem", position: 3, name: location.name, item: canonical },
        ],
      },
    });
    if (location.faq.length > 0) {
      schemas.push({
        id: "ld-faq",
        schema: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      });
    }
    return schemas;
  }

  if (routesMeta[cleanPath]) {
    schemas.push({ id: "ld-org", schema: buildOrganizationSchema() });
    schemas.push({
      id: "ld-breadcrumb",
      schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: routesMeta[cleanPath].title.split("|")[0].trim(),
            item: routesMeta[cleanPath].canonical,
          },
        ],
      },
    });
  }

  return schemas;
}

function escapeAttr(value: string): string {
  return value.replace(/"/g, "&quot;");
}

function escapeJsonLd(json: string): string {
  return json.replace(/</g, "\\u003c");
}

export function buildMetaHtml(meta: PageMeta, pathname?: string, notFound = false): string {
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const ogTitle = escapeAttr(meta.ogTitle || meta.title);
  const ogDesc = escapeAttr(meta.ogDescription || meta.description);
  const canonical = meta.canonical;

  const parts = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
  ];

  if (notFound) {
    parts.push(`<meta name="robots" content="noindex, nofollow" />`);
  } else {
    parts.push(`<meta name="robots" content="index, follow" />`);
    parts.push(`<link rel="canonical" href="${canonical}" />`);
  }

  parts.push(
    `<meta property="og:title" content="${ogTitle}" />`,
    `<meta property="og:description" content="${ogDesc}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:title" content="${ogTitle}" />`,
    `<meta name="twitter:description" content="${ogDesc}" />`,
  );

  if (!notFound && pathname) {
    for (const entry of getSchemasForPath(pathname)) {
      parts.push(
        `<script type="application/ld+json" id="${entry.id}">${escapeJsonLd(JSON.stringify(entry.schema))}</script>`,
      );
    }
  }

  return parts.join("\n    ");
}
