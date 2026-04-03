const BASE_URL = "https://capitallashing.com";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

const servicesMeta: Record<string, PageMeta> = {
  "gemi-proje-lashing": {
    title: "Gemi Proje Lashing | İstanbul Lashing Firması – Capital Lashing",
    description: "İstanbul, Ambarlı ve Türkiye genelinde gemi proje lashing hizmeti. DNV-GL onaylı ekipman, IMO CSS Code uyumlu operasyon, 7/24 sertifikalı lasher ekibi. Ücretsiz teklif alın.",
    canonical: `${BASE_URL}/hizmetler/gemi-proje-lashing`,
  },
  "konteyner-lashing": {
    title: "Konteyner Lashing | İçi Yük Sabitleme Hizmeti – Capital Lashing",
    description: "İstanbul ve Marmara limanlarında konteyner içi yük sabitleme, airbag uygulaması, spanzet lashing. CTU Code uyumlu. Ambarlı, Haydarpaşa ve Tekirdağ'da 7/24 hizmet.",
    canonical: `${BASE_URL}/hizmetler/konteyner-lashing`,
  },
  "proje-kargo-lashing": {
    title: "Proje Kargo Lashing | Gabari Dışı OOG Yük Sabitleme – Capital Lashing",
    description: "Türkiye'nin lider proje kargo lashing firması. Türbin, trafo, jeneratör, iş makinesi sabitlenmesi. Aliağa, Mersin, Tekirdağ limanlarında 7/24 operasyon.",
    canonical: `${BASE_URL}/hizmetler/proje-kargo-lashing`,
  },
  "flat-rack-lashing": {
    title: "Flat Rack (FR) Lashing | OOG Yük Konteyner Sabitleme – Capital Lashing",
    description: "Flat rack konteyner lashing İstanbul ve Türkiye geneli. Overheight, overwidth yüklerin gemi onaylı sabitlenmesi. Ambarlı, Aliağa, Mersin limanlarında hizmet.",
    canonical: `${BASE_URL}/hizmetler/flat-rack-lashing`,
  },
  "tekne-yat-lashing": {
    title: "Tekne & Yat Lashing | Lüks Yat Taşımacılığı Sabitleme – Capital Lashing",
    description: "İstanbul'da tekne ve yat lashing hizmeti. Güverte taşımacılığı, özel beşik sistemi, shrink wrap koruma. Değerli tekneniz Capital Lashing güvencesiyle.",
    canonical: `${BASE_URL}/hizmetler/tekne-yat-lashing`,
  },
  "shrink-wrap": {
    title: "Shrink Wrap Paketleme | Endüstriyel & Denizcilik Shrink Film – Capital Lashing",
    description: "İstanbul ve çevre limanlarda shrink wrap paketleme hizmeti. Tekne, makine, ihracat yükü için VCI katkılı korozyon önleyici shrink film. 7/24 hizmet.",
    canonical: `${BASE_URL}/hizmetler/shrink-wrap`,
  },
  "brandalama": {
    title: "Brandalama Hizmeti | Gemi Güvertesi & Açık Alan Branda – Capital Lashing",
    description: "Gemi güvertesi ve liman sahalarında UV dayanımlı, su geçirmez PVC brandalama. İstanbul, Marmara, Ege ve Akdeniz limanlarında profesyonel yük koruma hizmeti.",
    canonical: `${BASE_URL}/hizmetler/brandalama`,
  },
  "sandiklama": {
    title: "Sandıklama & Ahşap Paketleme | ISPM-15 Sertifikalı – Capital Lashing",
    description: "ISPM-15 sertifikalı ahşap sandık ve kasa üretimi İstanbul. İhracat sandıklaması, özel ölçü sandık, kafes kasa. Fumigasyon damgalı malzeme ile güvenli ihracat.",
    canonical: `${BASE_URL}/hizmetler/sandiklama`,
  },
  "unlashing-tahliye": {
    title: "Unlashing & Tahliye Hizmeti | Gemi Yük Açma – Capital Lashing İstanbul",
    description: "Türkiye limanlarında profesyonel unlashing ve tahliye hizmetleri. Gemi gelişinde hızlı yük açma, dunnage temizleme, survey raporu ve sertifikasyon. 7/24 operasyon.",
    canonical: `${BASE_URL}/hizmetler/unlashing-tahliye`,
  },
};

const routesMeta: Record<string, PageMeta> = {
  "/": {
    title: "Capital Lashing & Port Services | İstanbul Lashing Firması – Yük Sabitleme",
    description: "İstanbul merkezli lashing ve liman hizmetleri firması. Gemi proje lashing, konteyner sabitleme, shrink wrap, sandıklama. DNV-GL onaylı ekipman, 7/24 operasyon. Teklif alın.",
    canonical: BASE_URL,
  },
  "/hakkimizda": {
    title: "Hakkımızda | Capital Lashing & Port Services – 10 Yıllık Deneyim",
    description: "Capital Lashing; 10+ yıllık tecrübesi, 5.000+ tamamlanmış operasyonu ve DNV-GL onaylı ekipmanlarıyla Türkiye'nin lider lashing ve liman hizmetleri firmasıdır.",
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
};

export function getMetaForPath(pathname: string): PageMeta {
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "") || "/";

  if (routesMeta[cleanPath]) return routesMeta[cleanPath];

  const serviceMatch = cleanPath.match(/^\/hizmetler\/([^/]+)$/);
  if (serviceMatch) {
    const serviceId = serviceMatch[1];
    if (servicesMeta[serviceId]) return servicesMeta[serviceId];
  }

  return {
    title: "Capital Lashing & Port Services | İstanbul Lashing Firması",
    description: "İstanbul merkezli profesyonel lashing ve liman hizmetleri. 7/24 operasyon.",
    canonical: `${BASE_URL}${cleanPath}`,
  };
}

export function buildMetaHtml(meta: PageMeta): string {
  const title = meta.title.replace(/"/g, "&quot;");
  const description = meta.description.replace(/"/g, "&quot;");
  const ogTitle = (meta.ogTitle || meta.title).replace(/"/g, "&quot;");
  const ogDesc = (meta.ogDescription || meta.description).replace(/"/g, "&quot;");
  const canonical = meta.canonical;

  return `<title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDesc}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${ogDesc}" />`;
}
