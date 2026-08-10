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
  type?: "website" | "service" | "local_business";
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

export function SEO({ title, description, canonical, noindex = false, type = "website", serviceName, serviceDescription, serviceType, areaServedName, areaServedPlaces, faq, breadcrumbs }: SEOProps) {
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
    setMeta('meta[name="robots"]', noindex ? "noindex, nofollow" : "index, follow");
    if (canonical) setLink("canonical", canonical);

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    if (canonical) setMeta('meta[property="og:url"]', canonical);

    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

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
      ["ld-org", "ld-website", "ld-service", "ld-breadcrumb", "ld-faq"].forEach(id => {
        document.getElementById(id)?.remove();
      });
    };
  }, [title, description, canonical, noindex, type, serviceName, serviceDescription, serviceType, areaServedName, areaServedPlaces, faq, breadcrumbs]);

  return null;
}
