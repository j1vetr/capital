export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LocationData {
  slug: string;
  name: string;
  areaName: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  sections: LocationSection[];
  serviceIds: string[];
  faq: LocationFAQ[];
  nearby: string[];
}

export const locationsData: LocationData[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    areaName: "İstanbul",
    title: "İstanbul Lashing ve Yük Sabitleme Hizmetleri",
    seoTitle: "İstanbul Lashing Hizmetleri | Yük Sabitleme ve Paketleme - Capital Lashing",
    metaDescription: "İstanbul genelinde lashing, konteyner içi yük sabitleme, shrink wrap ve sandıklama hizmeti. Avrupa ve Anadolu yakasında fabrika, depo ve liman sahalarında 7/24 operasyon.",
    intro: "Capital Lashing merkezi Sancaktepe olmak üzere İstanbul genelinde lashing ve yük sabitleme hizmeti sunar. Fabrika dolumlarından liman sahalarına kadar şehrin her iki yakasında mobil ekiplerimizle çalışıyoruz.",
    sections: [
      {
        heading: "İstanbul Neden Yük Sabitlemenin Merkezi",
        paragraphs: [
          "İstanbul Türkiye dış ticaretinin en yoğun geçiş noktalarından biridir. Şehirde üretim yapan binlerce tesis ihracat yüklerini konteynerlerle dünyaya gönderir. Konteyner içine yüklenen makineler, paletli ürünler ve araçlar sabitlenmeden yola çıktığında deniz yolculuğu sırasında ciddi hasar riskiyle karşılaşır.",
          "Capital Lashing İstanbul içindeki fabrika ve depolara gelerek dolum noktasında yük sabitleme yapar. Bu sayede konteyner kapısı kapanmadan önce yükün CTU Code kurallarına uygun şekilde emniyete alındığından emin olursunuz.",
        ],
      },
      {
        heading: "İstanbul İçinde Verdiğimiz Hizmetler",
        paragraphs: [
          "Şehir genelinde en sık talep edilen çalışmalar konteyner içi lashing, ihracat sandıklaması ve shrink wrap paketlemedir. Tekne ve yat sahipleri için kışlık koruma ile taşıma öncesi sabitleme de İstanbul operasyonlarımızın önemli bir bölümünü oluşturur.",
        ],
        bullets: [
          "Fabrika ve depolarda konteyner içi yük sabitleme",
          "İhracat yükleri için ISPM-15 uyumlu sandıklama",
          "Makine ve tekne için shrink wrap paketleme",
          "Proje yükleri için lowbed üstü sabitleme",
        ],
      },
      {
        heading: "Avrupa ve Anadolu Yakasında Operasyon",
        paragraphs: [
          "Ekiplerimiz hem Avrupa hem Anadolu yakasındaki sanayi bölgelerinde çalışır. Tuzla, Gebze hattındaki tesislerden Hadımköy ve Beylikdüzü çevresindeki depolara kadar İstanbul'un tüm lojistik akslarına hizmet götürüyoruz. Operasyon planlaması yükleme tarihinize göre yapılır ve ekipman ile malzeme sahaya bizim tarafımızdan getirilir.",
        ],
      },
    ],
    serviceIds: ["konteyner-lashing", "sandiklama", "shrink-wrap", "tekne-yat-lashing"],
    faq: [
      {
        q: "İstanbul'un hangi bölgelerinde lashing hizmeti veriyorsunuz?",
        a: "İstanbul'un tamamında hizmet veriyoruz. Avrupa yakasında Beylikdüzü, Hadımköy ve İkitelli gibi sanayi bölgelerine, Anadolu yakasında Tuzla, Pendik, Sancaktepe ve Gebze hattına düzenli olarak operasyon yapıyoruz.",
      },
      {
        q: "Fabrikamızda konteyner dolumu sırasında sabitleme yapabilir misiniz?",
        a: "Evet. Ekibimiz malzeme ve ekipmanla birlikte fabrikanıza gelir. Dolum sırasında yük sabitlenir ve işlem fotoğraflı olarak raporlanır.",
      },
      {
        q: "İstanbul'da hafta sonu veya gece operasyonu yapıyor musunuz?",
        a: "Evet. Yükleme programları çoğu zaman mesai saatlerine sığmadığı için ekiplerimiz 7/24 çalışacak şekilde planlama yapar.",
      },
      {
        q: "İstanbul dışına da hizmet veriyor musunuz?",
        a: "Evet. Merkezimiz İstanbul'da olmakla birlikte Tekirdağ, İzmir Aliağa ve Mersin gibi bölgelere de operasyon düzenliyoruz.",
      },
    ],
    nearby: ["ambarli-limani", "haydarpasa-limani", "tekirdag-limani"],
  },
  {
    slug: "ambarli-limani",
    name: "Ambarlı Limanı",
    areaName: "Ambarlı Limanı, İstanbul",
    title: "Ambarlı Limanı Lashing Hizmetleri",
    seoTitle: "Ambarlı Limanı Lashing | Konteyner ve Flat Rack Sabitleme - Capital Lashing",
    metaDescription: "Ambarlı liman bölgesinde konteyner lashing, flat rack sabitleme ve proje kargo lashing. Avcılar ve Beylikdüzü çevresindeki dolum sahalarında 7/24 profesyonel hizmet.",
    intro: "Ambarlı Türkiye'nin en yoğun konteyner elleçleme bölgelerinden biridir. Capital Lashing bu bölgedeki dolum sahaları, antrepolar ve tesislerde konteyner ve flat rack yükleri için sabitleme hizmeti sunar.",
    sections: [
      {
        heading: "Ambarlı Bölgesinde Konteyner Trafiği",
        paragraphs: [
          "İstanbul'un Avrupa yakasında Avcılar ve Beylikdüzü hattında yer alan Ambarlı liman bölgesi, Marmara'nın en yüksek konteyner hacimlerinden birine sahiptir. Bölgedeki antrepolarda ve dolum sahalarında her gün yüzlerce konteyner ihracata hazırlanır.",
          "Bu yoğunluk içinde yük sabitleme çoğu zaman son dakikaya kalır. Capital Lashing önceden planlanmış ekip ve malzeme ile dolum noktanıza gelir ve gemi kesim tarihinden önce sabitlemenin tamamlanmasını sağlar.",
        ],
      },
      {
        heading: "Ambarlı Çevresinde En Çok Talep Edilen Çalışmalar",
        paragraphs: [
          "Bölgede en sık konteyner içi lashing ve flat rack üstü sabitleme talebi alıyoruz. Gabari dışı makineler ve araçlar için flat rack üzerinde çelik halat ve zincirle yapılan sabitlemeler survey onayına uygun standartlarda gerçekleştirilir.",
        ],
        bullets: [
          "Konteyner içi spanzet ve airbag uygulamaları",
          "Flat rack üstü çelik halat ve zincir lashing",
          "Ağır makine ve araç sabitleme",
          "Yük koruması için brandalama",
        ],
      },
      {
        heading: "Dolum Sahasında Hızlı Organizasyon",
        paragraphs: [
          "Ambarlı çevresindeki operasyonlarda zamanlama kritiktir. Yükleme bilgilerinizi paylaştığınızda iş planı çıkarılır, uygun malzeme listesi hazırlanır ve ekip randevu saatinde sahada olur. İşlem sonunda fotoğraflı rapor düzenlenir.",
        ],
      },
    ],
    serviceIds: ["konteyner-lashing", "flat-rack-lashing", "proje-kargo-lashing", "brandalama"],
    faq: [
      {
        q: "Ambarlı bölgesindeki dolum sahalarına gelebiliyor musunuz?",
        a: "Evet. Avcılar, Beylikdüzü ve Esenyurt çevresindeki antrepo ve dolum sahalarına ekip ve malzeme ile geliyoruz.",
      },
      {
        q: "Flat rack yükü için sabitleme planı hazırlıyor musunuz?",
        a: "Evet. Yükün ağırlığına ve boyutlarına göre lashing planı hazırlanır. Uygulama survey firmalarının arayacağı standartlara göre yapılır ve fotoğraflı raporla belgelenir.",
      },
      {
        q: "Ambarlı için operasyon randevusu ne kadar önceden verilmeli?",
        a: "Yükleme tarihinizi öğrenir öğrenmez bize ulaşmanızı öneririz. Planlama ne kadar erken yapılırsa malzeme ve ekip organizasyonu o kadar rahat ilerler. Acil taleplerde de elimizden gelen en hızlı çözümü üretiyoruz.",
      },
    ],
    nearby: ["istanbul", "haydarpasa-limani", "tekirdag-limani"],
  },
  {
    slug: "haydarpasa-limani",
    name: "Haydarpaşa Limanı",
    areaName: "Haydarpaşa Limanı, İstanbul",
    title: "Haydarpaşa Limanı Lashing Hizmetleri",
    seoTitle: "Haydarpaşa Limanı Lashing | Genel Kargo ve Proje Yükü Sabitleme - Capital Lashing",
    metaDescription: "Haydarpaşa liman bölgesi ve Anadolu yakasında genel kargo lashing, gemi proje yükü sabitleme ve brandalama. Kadıköy çevresindeki sahalar için 7/24 mobil ekip.",
    intro: "Haydarpaşa İstanbul'un Anadolu yakasındaki köklü liman bölgesidir. Capital Lashing bu bölgede genel kargo ve proje yükleri için gemi üstü ve saha içi sabitleme hizmeti sunar.",
    sections: [
      {
        heading: "Haydarpaşa ve Anadolu Yakası Yük Trafiği",
        paragraphs: [
          "Haydarpaşa bölgesi genel kargo ve proje yükleri açısından İstanbul'un Anadolu yakasındaki önemli noktalarından biridir. Bölge ayrıca Tuzla ve Pendik'teki sanayi tesislerine yakınlığı ile Anadolu yakası ihracatçıları için pratik bir konumdadır.",
          "Capital Lashing merkezinin Sancaktepe'de olması Anadolu yakasındaki taleplere hızlı ekip planlaması yapmamızı kolaylaştırır.",
        ],
      },
      {
        heading: "Gemi Üstü ve Saha İçi Çalışmalar",
        paragraphs: [
          "Bölgedeki taleplerin önemli kısmı gemi ambarı ve güverte üstü yüklerin sabitlenmesine yöneliktir. Çelik halat, zincir ve gerdirme ekipmanları ile yapılan bu çalışmalar CSS Code kurallarına uygun yürütülür. Açık sahada bekleyen yükler için brandalama ile koruma sağlanır.",
        ],
        bullets: [
          "Gemi ambarı ve güverte üstü lashing",
          "Genel kargo takozlama ve destekleme",
          "Açık saha yükleri için brandalama",
          "Tahliye sonrası unlashing hizmeti",
        ],
      },
      {
        heading: "Anadolu Yakası Tesislerine Mobil Hizmet",
        paragraphs: [
          "Haydarpaşa çevresinin yanında Tuzla, Pendik, Kartal ve Gebze hattındaki fabrika ve depolara da aynı ekiplerle hizmet veriyoruz. Yükleme öncesinde keşif yapılabilir ve ihtiyaca göre malzeme listesi birlikte netleştirilir.",
        ],
      },
    ],
    serviceIds: ["gemi-proje-lashing", "konteyner-lashing", "brandalama", "unlashing-tahliye"],
    faq: [
      {
        q: "Haydarpaşa bölgesinde hangi tür yüklerle çalışıyorsunuz?",
        a: "Genel kargo, makine, çelik ürünler ve proje yükleri başta olmak üzere gemiyle taşınan her tür yükün sabitlenmesi konusunda hizmet veriyoruz.",
      },
      {
        q: "Gemi üstü lashing için sertifika veriyor musunuz?",
        a: "Evet. Operasyon sonunda fotoğraflı rapor ve lashing sertifikası düzenlenir. Bu belgeler sigorta ve taşıma süreçlerinde kullanılır.",
      },
      {
        q: "Anadolu yakasındaki fabrikamıza gelebilir misiniz?",
        a: "Evet. Tuzla, Pendik, Kartal, Sancaktepe ve Gebze hattındaki tesislere düzenli olarak mobil ekip gönderiyoruz.",
      },
    ],
    nearby: ["istanbul", "ambarli-limani", "tekirdag-limani"],
  },
  {
    slug: "tekirdag-limani",
    name: "Tekirdağ Limanı",
    areaName: "Tekirdağ",
    title: "Tekirdağ Limanı Lashing Hizmetleri",
    seoTitle: "Tekirdağ Limanı Lashing | Konteyner ve Proje Kargo Sabitleme - Capital Lashing",
    metaDescription: "Tekirdağ liman bölgesinde konteyner lashing, proje kargo sabitleme ve flat rack uygulamaları. Trakya'daki fabrika ve dolum sahaları için mobil lashing ekibi.",
    intro: "Tekirdağ Marmara'nın batısında hızla büyüyen bir liman bölgesidir. Capital Lashing Tekirdağ çevresindeki dolum sahaları ve fabrikalarda konteyner ve proje yükleri için sabitleme hizmeti sunar.",
    sections: [
      {
        heading: "Trakya'nın Yükselen Liman Bölgesi",
        paragraphs: [
          "Tekirdağ ve çevresi son yıllarda artan konteyner ve genel kargo hacmiyle Marmara'nın önemli lojistik merkezlerinden biri haline gelmiştir. Çorlu ve Çerkezköy'deki sanayi tesisleri ihracat yüklerini bu bölge üzerinden dünyaya gönderir.",
          "Capital Lashing İstanbul merkezli ekiplerini Tekirdağ bölgesindeki operasyonlar için planlı şekilde görevlendirir. Yükleme tarihi netleştiğinde ekip ve malzeme organizasyonu önceden tamamlanır.",
        ],
      },
      {
        heading: "Tekirdağ Bölgesinde Sunduğumuz Çözümler",
        paragraphs: [
          "Bölgede konteyner içi sabitleme ve proje yükü lashing talepleri öne çıkar. Trakya'daki fabrikalardan çıkan makine ve tesis ekipmanları için flat rack ve lowbed üstü sabitleme çalışmaları da yürütüyoruz.",
        ],
        bullets: [
          "Konteyner içi spanzet, airbag ve takozlama",
          "Proje yükleri için çelik halat ve zincir lashing",
          "Flat rack üstü gabari dışı yük sabitleme",
          "İhracat makineleri için sandıklama",
        ],
      },
      {
        heading: "Çorlu ve Çerkezköy Sanayi Bölgelerine Hizmet",
        paragraphs: [
          "Tekirdağ operasyonlarımız liman çevresiyle sınırlı değildir. Çorlu, Çerkezköy ve Kapaklı'daki üretim tesislerinde dolum noktasında sabitleme yapıyoruz. Bu sayede yük fabrikadan çıktığı andan itibaren güvence altında olur.",
        ],
      },
    ],
    serviceIds: ["konteyner-lashing", "proje-kargo-lashing", "flat-rack-lashing", "sandiklama"],
    faq: [
      {
        q: "Tekirdağ'a operasyon için nereden geliyorsunuz?",
        a: "Ekiplerimiz İstanbul merkezlidir. Tekirdağ bölgesindeki operasyonlar yükleme tarihine göre önceden planlanır ve ekip malzemeyle birlikte sahaya gelir.",
      },
      {
        q: "Çorlu veya Çerkezköy'deki fabrikamızda dolum sabitlemesi yapar mısınız?",
        a: "Evet. Trakya'daki sanayi bölgelerinde konteyner dolumu sırasında yük sabitleme en sık verdiğimiz hizmetlerden biridir.",
      },
      {
        q: "Tekirdağ bölgesinde hangi hizmetler öne çıkıyor?",
        a: "Konteyner içi lashing, proje kargo sabitleme ve flat rack uygulamaları bölgede en çok talep edilen çalışmalardır. İhracat makineleri için sandıklama hizmeti de veriyoruz.",
      },
    ],
    nearby: ["istanbul", "ambarli-limani", "aliaga"],
  },
  {
    slug: "aliaga",
    name: "İzmir Aliağa",
    areaName: "Aliağa, İzmir",
    title: "İzmir Aliağa Lashing Hizmetleri",
    seoTitle: "İzmir Aliağa Lashing | Ağır Sanayi ve Proje Kargo Sabitleme - Capital Lashing",
    metaDescription: "İzmir Aliağa bölgesinde proje kargo lashing, gemi üstü yük sabitleme ve brandalama. Demir çelik ve enerji sektörü yükleri için planlı mobil operasyon.",
    intro: "Aliağa demir çelik, enerji ve petrokimya tesisleriyle Ege'nin ağır sanayi merkezidir. Capital Lashing bu bölgede proje yükleri ve ağır sanayi ekipmanları için sabitleme hizmeti sunar.",
    sections: [
      {
        heading: "Ağır Sanayinin Kalbi Aliağa",
        paragraphs: [
          "İzmir'in kuzeyindeki Aliağa bölgesi demir çelik üretimi, gemi geri dönüşümü ve enerji yatırımlarıyla bilinir. Bu sektörlerin taşıttığı yükler çoğunlukla ağır, hacimli ve gabari dışıdır. Bu tür yüklerin gemi üstünde veya taşıma aracında sabitlenmesi ileri mühendislik gerektirir.",
          "Capital Lashing ağır proje yükleri için ağırlık merkezi analizine dayanan lashing planları hazırlar ve uygulamayı sertifikalı ekipmanlarla gerçekleştirir.",
        ],
      },
      {
        heading: "Aliağa Bölgesinde Yürüttüğümüz Çalışmalar",
        paragraphs: [
          "Bölgedeki taleplerin büyük bölümü gemi güvertesi ve ambar içi proje yükü sabitlemesidir. Çelik rulo, boru demeti, trafo ve enerji ekipmanları için özel destekleme ve takozlama çözümleri uygulanır.",
        ],
        bullets: [
          "Gemi üstü proje kargo lashing",
          "Çelik ürünler için destekleme ve takozlama",
          "Enerji ekipmanları için özel sabitleme planları",
          "Açık yükler için brandalama",
        ],
      },
      {
        heading: "Planlı Operasyon Modeli",
        paragraphs: [
          "Aliağa operasyonları İstanbul merkezli ekiplerimizle önceden planlanarak yürütülür. Yük bilgileri ve yükleme programı paylaşıldığında malzeme listesi çıkarılır, ekip görevlendirilir ve operasyon günü sahada hazır olunur. İş bitiminde fotoğraflı rapor ve lashing sertifikası teslim edilir.",
        ],
      },
    ],
    serviceIds: ["proje-kargo-lashing", "gemi-proje-lashing", "flat-rack-lashing", "brandalama"],
    faq: [
      {
        q: "Aliağa'da hangi sektörlere hizmet veriyorsunuz?",
        a: "Ağırlıklı olarak demir çelik, enerji ve petrokimya sektörlerinin proje yükleriyle çalışıyoruz. Makine ve tesis ekipmanı taşıyan diğer sektörlere de hizmet veriyoruz.",
      },
      {
        q: "Ağır proje yükü için mühendislik desteği sağlıyor musunuz?",
        a: "Evet. Yükün ağırlık merkezi ve sabitleme noktaları analiz edilir, gerekli lashing kapasitesi hesaplanır ve plan gemi kaptanı ile survey onayına uygun hazırlanır.",
      },
      {
        q: "Aliağa operasyonu için süreç nasıl işliyor?",
        a: "Yük bilgilerini ve yükleme tarihini bize iletirsiniz. Teklif ve iş planı hazırlanır, onay sonrası ekip ve malzeme organize edilir. Operasyon günü ekibimiz sahada çalışmayı tamamlar ve raporunu teslim eder.",
      },
    ],
    nearby: ["mersin-limani", "istanbul", "tekirdag-limani"],
  },
  {
    slug: "mersin-limani",
    name: "Mersin Limanı",
    areaName: "Mersin",
    title: "Mersin Limanı Lashing Hizmetleri",
    seoTitle: "Mersin Limanı Lashing | Konteyner ve Proje Yükü Sabitleme - Capital Lashing",
    metaDescription: "Mersin liman bölgesinde konteyner lashing, proje kargo sabitleme ve flat rack uygulamaları. Akdeniz ve Orta Anadolu ihracatçıları için planlı lashing operasyonu.",
    intro: "Mersin Akdeniz'in en önemli konteyner kapılarından biridir. Capital Lashing Mersin bölgesindeki dolum sahaları ve tesislerde konteyner ve proje yükleri için sabitleme hizmeti sunar.",
    sections: [
      {
        heading: "Akdeniz'in İhracat Kapısı",
        paragraphs: [
          "Mersin liman bölgesi Orta Anadolu ve Güneydoğu'daki üreticilerin dünyaya açılan kapısıdır. Tarım ürünlerinden makineye kadar geniş bir yelpazedeki ihracat yükleri bu bölge üzerinden gemilere yüklenir.",
          "Uzun deniz rotalarına çıkan bu yüklerin konteyner içinde doğru sabitlenmesi hasarsız teslimatın ön koşuludur. Capital Lashing dolum noktasında CTU Code kurallarına uygun sabitleme yaparak bu riski en aza indirir.",
        ],
      },
      {
        heading: "Mersin Bölgesinde Verdiğimiz Hizmetler",
        paragraphs: [
          "Bölgede konteyner içi lashing ve proje yükü sabitleme talepleri öne çıkar. Gabari dışı makineler için flat rack üstü uygulamalar ve ihracat ekipmanları için sandıklama çözümleri de sunuyoruz.",
        ],
        bullets: [
          "Konteyner içi spanzet ve airbag uygulamaları",
          "Proje yükleri için gemi üstü lashing",
          "Flat rack üstü gabari dışı yük sabitleme",
          "İhracat makineleri için ISPM-15 uyumlu sandıklama",
        ],
      },
      {
        heading: "Uzak Bölge Operasyon Planlaması",
        paragraphs: [
          "Mersin operasyonları önceden planlanan programlarla yürütülür. Yükleme tarihinizi paylaştığınızda ekip ve malzeme organizasyonu tamamlanır ve operasyon günü sahada hazır olunur. Birden fazla konteyner veya yük içeren projelerde tek seferde toplu sabitleme yapılarak maliyet avantajı sağlanır.",
        ],
      },
    ],
    serviceIds: ["konteyner-lashing", "proje-kargo-lashing", "flat-rack-lashing", "sandiklama"],
    faq: [
      {
        q: "Mersin'de operasyon nasıl planlanıyor?",
        a: "Yük bilgilerini ve yükleme tarihini iletmeniz yeterlidir. Ekip ve malzeme organizasyonu önceden tamamlanır ve operasyon günü sahada çalışma yapılır.",
      },
      {
        q: "Mersin bölgesinde birden fazla konteyner için toplu çalışma yapıyor musunuz?",
        a: "Evet. Birden fazla konteyner veya yük içeren projelerde tek program içinde toplu sabitleme yapıyoruz. Bu yaklaşım hem zaman hem maliyet açısından avantaj sağlar.",
      },
      {
        q: "Orta Anadolu'daki fabrikamızın yükü Mersin'den çıkacak, nasıl ilerleriz?",
        a: "Sabitlemeyi fabrikanızda dolum sırasında veya Mersin bölgesindeki dolum sahasında yapabiliriz. Yükün türüne göre en uygun noktayı birlikte belirleriz.",
      },
    ],
    nearby: ["aliaga", "istanbul", "ambarli-limani"],
  },
];

export const portNameToLocationSlug: Record<string, string> = {
  "İstanbul": "istanbul",
  "Ambarlı Limanı": "ambarli-limani",
  "Haydarpaşa Limanı": "haydarpasa-limani",
  "Tekirdağ Limanı": "tekirdag-limani",
  "İzmir Aliağa": "aliaga",
  "İzmir Aliağa Limanı": "aliaga",
  "Mersin Limanı": "mersin-limani",
};
