import { Anchor, Ship, Package, Box, Container, ShieldCheck, Truck, HardHat } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  image: string | null;
  gallery?: string[];
  benefits: string[];
  features: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "gemi-proje-lashing",
    title: "Gemi Proje Lashing",
    shortDescription: "Gemi ambarı ve güverte üstü ağır tonajlı proje yüklerinin sabitlenmesi.",
    fullDescription: `
      ### Gemi Proje Kargo Lashing Hizmetinde Uzman Çözümler

      Capital Lashing olarak, deniz taşımacılığının en kritik ve riskli operasyonlarından biri olan **Gemi Proje Kargo Lashing** alanında, uluslararası standartlarda ve %100 güvenli çözümler sunuyoruz. "Sıfır Hata" prensibiyle yaklaşılması gereken bu operasyonlar, sıradan bir yük sabitleme işleminin çok ötesinde, derin mühendislik bilgisi ve saha tecrübesi gerektirir.

      #### Neden Proje Kargo Lashing Kritik Öneme Sahiptir?
      
      Proje yükleri (türbinler, jeneratörler, trafolar, yatlar, iş makineleri, fabrika kazanları vb.) standart konteynerlere sığmayan, ağırlık merkezleri değişkenlik gösteren ve genellikle milyonlarca dolar değerinde olan yüklerdir. Bu yüklerin okyanus aşırı seferlerde maruz kalacağı kuvvetler (yalpa, baş-kıç vurma, savrulma) muazzamdır.
      
      Yanlış veya yetersiz yapılan bir lashing işlemi;
      *   Yükün denize düşmesine,
      *   Gemi stabilitesinin bozulmasına,
      *   Ciddi maddi kayıplara ve hatta can kayıplarına yol açabilir.

      Bu nedenle Capital Lashing, her bir proje yükü için **CSS Code (Code of Safe Practice for Cargo Stowage and Securing)** kurallarına tam uyumlu, gemi kaptanı ve survey onaylı özel lashing projeleri geliştirir.

      #### Operasyonel Sürecimiz Nasıl İşler?

      1.  **Ön Keşif ve Analiz:** Yükün teknik çizimleri, ağırlık merkezi (CoG), kaldırma noktaları (lifting points) ve lashing noktaları incelenir.
      2.  **Mühendislik Hesaplamaları:** Gemi stabilitesi, rota üzerindeki hava/deniz koşulları ve ivmelenme kuvvetleri hesaplanarak, gerekli lashing kapasitesi belirlenir.
      3.  **Malzeme Seçimi:** Yükün tonajına uygun sertifikalı çelik halatlar, gerdirmeler (turnbuckle), zincirler ve özel kaynak aparatları (d-ring, stopper plate) seçilir.
      4.  **Uygulama:** Sertifikalı ve deneyimli lashing personelimiz (lasher), hazırlanan plana sadık kalarak sabitleme işlemini gerçekleştirir.
      5.  **Destekleme ve Takozlama:** Yükün kaymasını önlemek için ahşap takozlama (dunnage) ve kaynaklı stoper uygulamaları yapılır.
      6.  **Raporlama ve Sertifikasyon:** İşlem sonunda detaylı fotoğraflı survey raporu ve lashing sertifikası düzenlenerek gemi kaptanına ve müşteriye teslim edilir.

      #### Kullandığımız Teknolojiler ve Standartlar
      
      Operasyonlarımızda sadece **DNV-GL, Bureau Veritas veya Lloyd's Register** onaylı, kopma testleri yapılmış ekipmanlar kullanıyoruz. Yükünüzün güvenliği için şansa yer bırakmıyor, bilimin ve tecrübenin ışığında hareket ediyoruz.

      Gemi üstü (on-deck) veya ambar içi (under-deck) fark etmeksizin, en zorlu deniz koşullarında bile yükünüzün varış limanına hasarsız ulaşması bizim garantimiz altındadır.
    `,
    icon: Anchor,
    image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_1.webp",
    gallery: [
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_1.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_2.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_3.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_4.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_5.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_6.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_7.webp",
    ],
    benefits: [
      "IMO Ve CSS Code Uyumu",
      "Sertifikalı Lashing Ekipmanları",
      "Mühendislik Hesaplamaları",
      "7/24 Operasyon Ve Raporlama"
    ],
    features: [
      "Çelik Halat Ve Zincir Lashing",
      "Özel Kaynak Sabitleme (Welding)",
      "Ahşap Takozlama (Dunnage)",
      "Mukavemet Hesaplamaları"
    ]
  },
  {
    id: "konteyner-lashing",
    title: "Konteyner Lashing",
    shortDescription: "Konteyner içi yük sabitleme ve araç bağlama hizmetleri.",
    fullDescription: `
      Konteyner taşımacılığında yükün hasarsız bir şekilde varış noktasına ulaşması için profesyonel konteyner içi lashing hizmeti veriyoruz.
      Özellikle dökme olmayan, paletli, kasalı, varilli veya araç gibi hareketli yüklerin konteyner içinde sabitlenmesi kritik öneme sahiptir.
      
      Capital Lashing, yükün konteyner duvarlarına veya tabanına zarar vermeden, en uygun malzemelerle (airbag, spanzet, takoz) sabitlenmesini sağlar.
      CTU Code (Cargo Transport Units) kurallarına harfiyen uyarak, yükünüzün hem denizde hem de karayolunda güvende olmasını garanti ediyoruz.
      
      Otomobil, iş makinesi ve tekne gibi araçların konteyner içine yüklenmesi ve sabitlenmesi konusunda uzmanlaşmış ekibimiz, özel aparatlar ve teknikler kullanır.
    `,
    icon: Container,
    image: "/assets/images/services/konteyner-lashing/konteyner-lashing_1.webp",
    gallery: [
      "/assets/images/services/konteyner-lashing/konteyner-lashing_1.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_2.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_3.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_4.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_5.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_6.webp",
      "/assets/images/services/konteyner-lashing/konteyner-lashing_7.webp",
    ],
    benefits: [
      "Hasar Önleyici Sabitleme",
      "Profesyonel Airbag Uygulamaları",
      "Gümrük Ve Liman Uyumu",
      "Maliyet Etkin Çözümler"
    ],
    features: [
      "Polyester Spanzet Ve Kompozit",
      "ISPM-15 Ahşap Takozlama",
      "Kapı Önü Güvenlik Ağları",
      "Araç Lastik Sabitleme"
    ]
  },
  {
    id: "proje-kargo-lashing",
    title: "Proje Kargo Lashing",
    shortDescription: "Gabari dışı ve ağır sanayi yüklerinin özel sabitleme çözümleri.",
    fullDescription: `
      Standart taşıma yöntemlerinin yetersiz kaldığı gabari dışı (Out of Gauge - OOG) yükleriniz için özel proje kargo lashing çözümleri üretiyoruz.
      Enerji, inşaat, madencilik ve havacılık sektörlerine ait devasa ekipmanların taşınması, yüksek mühendislik bilgisi ve hassasiyet gerektirir.
      
      Capital Lashing, yükün cinsine ve taşıma moduna (gemi, tır, tren) göre özel lashing projeleri geliştirir.
      Her bir proje için yükün ağırlık merkezi, kaldırma noktaları (lifting points) ve sabitleme noktaları (lashing points) analiz edilir.
      Gerekirse yük için özel çelik konstrüksiyon beşikler veya taşıma aparatları tasarlayıp imal ediyoruz.
    `,
    icon: HardHat,
    image: "/assets/images/services/proje-kargo-lashing/proje-kargo-lashing_1.webp",
    gallery: [
      "/assets/images/services/proje-kargo-lashing/proje-kargo-lashing_1.webp",
      "/assets/images/services/proje-kargo-lashing/proje-kargo-lashing_2.webp",
    ],
    benefits: [
      "Özel Mühendislik Çözümleri",
      "Gabari Dışı Yük Uzmanlığı",
      "Yüksek Tonaj Ekipmanları",
      "Risk Analizi Ve Güvenlik"
    ],
    features: [
      "Flat Rack Ve Open Top Uygulama",
      "Lowbed Araç Üstü Lashing",
      "Vagon Üstü Sabitleme",
      "Ağır Yük Kaydırma (Skidding)"
    ]
  },
  {
    id: "flat-rack-lashing",
    title: "Flat Rack (FR) Lashing",
    shortDescription: "Flat rack konteynerlere taşmalı yük sabitleme.",
    fullDescription: `
      Konteyner gemileriyle taşınacak gabari dışı yükleriniz için Flat Rack (FR) lashing hizmeti sunuyoruz.
      Yükün konteyner sınırlarını aştığı (overheight/overwidth) durumlarda, gemi planlamasına uygun, sertifikalı ve güvenli bir sabitleme yapılması zorunludur.
      
      Ekibimiz, yükün Flat Rack üzerine dengeli bir şekilde yerleştirilmesini ve çelik halat, zincir veya yüksek mukavemetli spanzetlerle sabitlenmesini sağlar.
      Liman sahasında veya fabrika dolumlarında gerçekleştirdiğimiz bu operasyonlar, gemi kaptanı ve survey firmaları tarafından onaylanacak standartlardadır.
    `,
    icon: ShieldCheck,
    image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_1.webp",
    gallery: [
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_1.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_2.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_3.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_4.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_5.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_6.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_7.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_8.webp",
      "/assets/images/services/flat-rack-lashing/flat-rack-lashing_9.webp",
    ],
    benefits: [
      "Gemi Onayı Garantili Lashing",
      "Deniz Aşırı Taşıma Uyumu",
      "Hızlı Ve Güvenilir Operasyon",
      "Brandalama İle Tam Koruma"
    ],
    features: [
      "Overheight Yükleme Uzmanlığı",
      "Collapsible Flat Rack",
      "Çelik Halat Ve Gerdirmeli",
      "Koruyucu Köşe Bentler"
    ]
  },
  {
    id: "brandalama",
    title: "Brandalama",
    shortDescription: "Yüklerinizi hava koşullarından koruyan profesyonel brandalama.",
    fullDescription: `
      Açık yüklerin, gemi güvertesindeki kargoların veya stok sahasındaki ürünlerin yağmur, güneş, tuzlu su ve rüzgar gibi dış etkenlerden korunması için endüstriyel brandalama hizmeti veriyoruz.
      
      Kullandığımız brandalar, UV dayanımlı, su geçirmez ve yırtılmaya karşı yüksek mukavemetli malzemelerden üretilir.
      Yükün formuna göre özel dikim veya yerinde uygulama yapılarak, tam kaplama sağlanır.
      Özellikle uzun süreli deniz yolculuklarında korozyon ve nem hasarını önlemek için brandalama hayati önem taşır.
    `,
    icon: Package,
    image: "/assets/images/services/brandalama/brandalama_1.webp",
    gallery: [
      "/assets/images/services/brandalama/brandalama_1.webp",
      "/assets/images/services/brandalama/brandalama_2.webp",
      "/assets/images/services/brandalama/brandalama_3.webp",
      "/assets/images/services/brandalama/brandalama_4.webp",
    ],
    benefits: [
      "Su Geçirmez Tam Koruma",
      "UV Işınlarına Dayanıklılık",
      "Yüke Özel Ölçü Ve Form",
      "Korozyon Önleyici Etki"
    ],
    features: [
      "Ağır Hizmet Tipi PVC Branda",
      "Halkalı Bağlama Sistemi",
      "Havalandırma Kapakları",
      "Şeffaf Pencereli Seçenekler"
    ]
  },
  {
    id: "shrink-wrap",
    title: "Shrink Wrap Paketleme",
    shortDescription: "Endüstriyel ürünler için hava almayan ısıyla daralan paketleme.",
    fullDescription: `
      Capital Lashing, endüstriyel makineler, tekneler ve hassas ekipmanlar için Shrink Wrap (Isıyla Daralan Film) paketleme hizmeti sunar.
      Bu yöntem, ürünü tamamen sararak dış ortamla temasını keser ve %100 sızdırmazlık sağlar.
      
      Polietilen bazlı özel filmler, ısı tabancaları ile ısıtılarak ürünün şeklini alır ve gergin bir zırh oluşturur.
      Bu sayede nakliye ve depolama sırasında oluşabilecek çizilme, tozlanma, nem ve korozyon riskleri ortadan kalkar.
      Özellikle deniz aşırı ihracat yüklemelerinde, VCI (Uçucu Korozyon Önleyici) teknolojisi ile birleştirilerek paslanmaya karşı kesin çözüm sunar.
    `,
    icon: Package,
    image: "/assets/images/services/shrink-wrap/shrink-wrap_1.webp",
    gallery: [
      "/assets/images/services/shrink-wrap/shrink-wrap_1.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_2.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_3.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_4.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_5.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_6.webp",
      "/assets/images/services/shrink-wrap/shrink-wrap_7.webp",
    ],
    benefits: [
      "Mükemmel Sızdırmazlık Ve Koruma",
      "Aerodinamik Yapı",
      "VCI Katkılı Korozyon Önleme",
      "Estetik Ve Profesyonel Görünüm"
    ],
    features: [
      "Yüksek Mikronlu Shrink Film",
      "Fermuarlı Kapı Uygulaması",
      "Nem Alıcı Paket İlavesi",
      "Havalandırma Menfezleri"
    ]
  },
  {
    id: "sandiklama",
    title: "Sandıklama",
    shortDescription: "ISPM-15 standartlarında ahşap sandık ve kasa üretimi.",
    fullDescription: `
      İhracat yükleriniz için uluslararası standartlara (ISPM-15) uygun ahşap sandıklama ve paketleme hizmeti veriyoruz.
      Ürününüzün ölçülerine ve ağırlığına göre özel olarak tasarlanan sandıklar, nakliye sırasındaki darbelere ve üst üste istiflemeye karşı maksimum koruma sağlar.
      
      Kapalı sandık, kafes sandık (kasa), palet ve özel taşıma bazaları kendi atölyemizde üretilir.
      Gerekli tüm ısıl işlem (fumigasyon) süreçleri tamamlanmış ve damgalanmış ahşap malzemeler kullanılır.
    `,
    icon: Box,
    image: "/assets/images/services/sandiklama/sandiklama_1.webp",
    gallery: [
      "/assets/images/services/sandiklama/sandiklama_1.webp",
      "/assets/images/services/sandiklama/sandiklama_2.webp",
      "/assets/images/services/sandiklama/sandiklama_3.webp",
      "/assets/images/services/sandiklama/sandiklama_4.webp",
    ],
    benefits: [
      "ISPM-15 Sertifikalı Malzeme",
      "Yüke Özel Tasarım Ve Üretim",
      "Darbeye Dayanıklı Yapı",
      "Kolay Elleçleme İmkanı"
    ],
    features: [
      "OSB, Kontrplak Veya Masif",
      "Nem Bariyerli Folyo Kaplama",
      "Şok Emici Taban",
      "Modüler Sandık Seçenekleri"
    ]
  },
  {
    id: "tekne-yat-lashing",
    title: "Tekne & Yat Lashing",
    shortDescription: "Lüks teknelerin güvenli transferi ve sabitlenmesi.",
    fullDescription: `
      Yat ve tekne taşımacılığı, lojistiğin en hassas ve özen gerektiren alanlarından biridir.
      Capital Lashing, lüks teknelerinizi gemi güvertesine veya özel taşıma araçlarına güvenle sabitler.
      
      Teknenin gövdesine zarar vermeyecek özel yumuşak sapanlar ve destek takozları kullanılır.
      Deniz durumu ne olursa olsun teknenin hareket etmesini engelleyecek, aynı zamanda gövde stresini minimize edecek özel beşik (cradle) sistemleri ve lashing teknikleri uygularız.
      Shrink wrap kaplama ile birleştirildiğinde, tekneniz varış limanına fabrikadan çıktığı gibi ulaşır.
    `,
    icon: Ship,
    image: "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_1.webp",
    gallery: [
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_1.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_2.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_3.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_4.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_5.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_6.webp",
      "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_7.webp",
    ],
    benefits: [
      "Tekne Taşıma Uzmanlığı",
      "Gövde Koruyucu Ekipmanlar",
      "Özel Üretim Beşik Sistemi",
      "Uluslararası Standartlara Uyum"
    ],
    features: [
      "Yumuşak Dokulu Polyester Sapan",
      "Kauçuk Destekli Takozlama",
      "Forma Uygun Shrink Wrap",
      "Donanım Demontaj Desteği"
    ]
  },
];
