export const BASE_URL = "https://capitallashing.com";

export const BUSINESS = {
  name: "Capital Lashing & Port Services",
  alternateName: "Capital Lashing",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.webp`,
  description:
    "İstanbul merkezli profesyonel lashing ve liman hizmetleri firması. Gemi proje lashing, konteyner sabitleme, shrink wrap ve sandıklama.",
  phone: {
    display: "+90 216 312 06 12",
    e164: "+902163120612",
    schema: "+90-216-312-06-12",
    whatsapp: "902163120612",
  },
  email: "info@capitallashing.com",
  address: {
    street: "Abdurrahmangazi Mah. Ebubekir Cad. No:26",
    locality: "Sancaktepe",
    region: "İstanbul",
    postalCode: "34887",
    country: "TR",
    full: "Abdurrahmangazi Mah. Ebubekir Cad. No:26 Sancaktepe / İstanbul",
    mapsUrl:
      "https://maps.google.com/?q=Abdurrahmangazi+Mah.+Ebubekir+Cad.+No:26+Sancaktepe+Istanbul",
  },
  geo: {
    latitude: 40.980954,
    longitude: 29.22917,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/capital-lashing/",
    instagram: "https://www.instagram.com/capitallashing/",
    facebook: "https://www.facebook.com/capitallashing/",
    youtube: "https://www.youtube.com/@capitallashing",
  },
  areaServed: ["İstanbul", "İzmir", "Mersin", "Tekirdağ", "Turkey"],
} as const;

export const SOCIAL_PROFILES: string[] = [
  BUSINESS.social.linkedin,
  BUSINESS.social.instagram,
  BUSINESS.social.facebook,
  BUSINESS.social.youtube,
];

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phone.schema,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone.schema,
      email: BUSINESS.email,
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    areaServed: [
      { "@type": "City", name: "İstanbul" },
      { "@type": "City", name: "İzmir" },
      { "@type": "City", name: "Mersin" },
      { "@type": "City", name: "Tekirdağ" },
      { "@type": "Country", name: "Turkey" },
    ],
    sameAs: SOCIAL_PROFILES,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    inLanguage: "tr-TR",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}
