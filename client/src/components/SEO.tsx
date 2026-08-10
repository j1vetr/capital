import { useEffect } from "react";
import { BASE_URL, buildOrganizationSchema, buildWebSiteSchema } from "@shared/business";

interface FAQItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  lang?: "tr" | "en";
  alternates?: { tr: string; en: string };
  type?: "website" | "service" | "local_business" | "article";
  articleHeadline?: string;
  datePublished?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceType?: string;
  areaServedName?: string;
  areaServedPlaces?: string[];
  faq?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
}

function injectJsonLd(id: string, schema: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function SEO({ title, description, canonical, noindex = false, lang = "tr", alternates, type = "website", articleHeadline, datePublished, serviceName, serviceDescription, serviceType, areaServedName, areaServedPlaces, faq, breadcrumbs }: SEOProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

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
    setMeta('meta[name="robots"]', noindex ? "noindex, nofollow" : "index, follow");
    if (canonical) setLink("canonical", canonical);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    if (canonical) setMeta('meta[property="og:url"]', canonical);

    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (alternates) {
      const entries: [string, string][] = [
        ["tr-TR", alternates.tr],
        ["en", alternates.en],
        ["x-default", alternates.tr],
      ];
      for (const [hreflang, href] of entries) {
        const el = document.createElement("link");
        el.rel = "alternate";
        el.setAttribute("hreflang", hreflang);
        el.href = href;
        document.head.appendChild(el);
      }
    }

    if (type === "local_business") {
      injectJsonLd("ld-org", buildOrganizationSchema());
      injectJsonLd("ld-website", buildWebSiteSchema());
    }

    if (type === "service" && serviceName && serviceDescription) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "url": canonical || BASE_URL,
        "provider": { "@id": `${BASE_URL}/#organization` },
        "serviceType": serviceType || serviceName,
        "areaServed": areaServedName
          ? { "@type": "Place", "name": areaServedName }
          : (areaServedPlaces || []).map((p) => ({ "@type": "Place", "name": p })),
      };
      injectJsonLd("ld-service", serviceSchema);
    }

    if (type === "article" && articleHeadline) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleHeadline,
        "description": description,
        "url": canonical || BASE_URL,
        "mainEntityOfPage": canonical || BASE_URL,
        "inLanguage": lang,
        ...(datePublished ? { "datePublished": datePublished } : {}),
        "author": { "@id": `${BASE_URL}/#organization` },
        "publisher": { "@id": `${BASE_URL}/#organization` },
      };
      injectJsonLd("ld-article", articleSchema);
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
      ["ld-org", "ld-website", "ld-service", "ld-article", "ld-breadcrumb", "ld-faq"].forEach(id => {
        document.getElementById(id)?.remove();
      });
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
      document.documentElement.lang = "tr";
    };
  }, [title, description, canonical, noindex, lang, alternates, type, articleHeadline, datePublished, serviceName, serviceDescription, serviceType, areaServedName, areaServedPlaces, faq, breadcrumbs]);

  return null;
}
