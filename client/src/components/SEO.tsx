import { useEffect } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "service" | "local_business";
  serviceName?: string;
  serviceDescription?: string;
  faq?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
}

const BASE_URL = "https://capitallashing.com";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  "name": "Capital Lashing & Port Services",
  "alternateName": "Capital Lashing",
  "description": "İstanbul merkezli profesyonel lashing ve liman hizmetleri firması. Gemi proje lashing, konteyner sabitleme, shrink wrap ve sandıklama.",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.webp`,
  "image": `${BASE_URL}/logo.webp`,
  "telephone": "+90-216-312-06-12",
  "email": "info@capitallashing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abdurrahmangazi Mah. Ebubekir Cad. No:26",
    "addressLocality": "Sancaktepe",
    "addressRegion": "İstanbul",
    "postalCode": "34887",
    "addressCountry": "TR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.980954,
    "longitude": 29.229170,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59",
  },
  "priceRange": "$$",
  "currenciesAccepted": "TRY, USD, EUR",
  "areaServed": [
    { "@type": "City", "name": "İstanbul" },
    { "@type": "City", "name": "İzmir" },
    { "@type": "City", "name": "Mersin" },
    { "@type": "City", "name": "Tekirdağ" },
    { "@type": "Country", "name": "Turkey" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lashing ve Liman Hizmetleri",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gemi Proje Lashing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Konteyner Lashing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Proje Kargo Lashing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Rack Lashing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shrink Wrap Paketleme" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brandalama" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sandıklama" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unlashing & Tahliye" } },
    ],
  },
  "sameAs": [
    "https://capitallashing.com",
  ],
};

function injectJsonLd(id: string, schema: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function SEO({ title, description, canonical, type = "website", serviceName, serviceDescription, faq, breadcrumbs }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("property=") ? "property" : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] || "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta('meta[name="description"]', description);
    if (canonical) setLink("canonical", canonical);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    if (canonical) setMeta('meta[property="og:url"]', canonical);

    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (type === "local_business") {
      injectJsonLd("ld-local-business", LOCAL_BUSINESS_SCHEMA);
    }

    if (type === "service" && serviceName && serviceDescription) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#organization`,
          "name": "Capital Lashing & Port Services",
        },
        "areaServed": { "@type": "Country", "name": "Turkey" },
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": "+90-216-312-06-12",
          "serviceUrl": canonical || BASE_URL,
          "availableLanguage": ["Turkish", "English"],
        },
      };
      injectJsonLd("ld-service", serviceSchema);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": crumb.name,
          "item": crumb.url,
        })),
      };
      injectJsonLd("ld-breadcrumb", breadcrumbSchema);
    }

    if (faq && faq.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      };
      injectJsonLd("ld-faq", faqSchema);
    }

    return () => {
      ["ld-local-business", "ld-service", "ld-breadcrumb", "ld-faq"].forEach(id => {
        document.getElementById(id)?.remove();
      });
    };
  }, [title, description, canonical, type, serviceName, serviceDescription, faq, breadcrumbs]);

  return null;
}
