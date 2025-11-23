import { Anchor, Ship, Package, Box, Container, ShieldCheck, Truck, HardHat } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  image: string | null;
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
    image: "hero_image_of_a_cargo_ship_at_port.png",
    benefits: [
      "IMO ve CSS Code Standartlarına Tam Uyum",
      "Sertifikalı Lashing Ekipmanları (DNV-GL, Bureau Veritas onaylı)",
      "Mühendislik Hesaplamaları ve Lashing Planı",
      "7/24 Operasyon ve Survey Raporlama",
      "Global Limanlarda Hizmet Ağı"
    ],
    features: [
      "Çelik halat ve zincir lashing uygulamaları",
      "Ağır tonajlı yükler için özel kaynak sabitleme (welding)",
      "Ahşap takozlama ve destekleme (dunnage)",
      "Yük dağılımı ve zemin mukavemet hesaplamaları"
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
    image: "container_lashing_detail_shot.png",
    benefits: [
      "Konteyner hasarlarını önleyen profesyonel sabitleme",
      "Hava yastığı (Airbag) uygulamaları",
      "Gümrük ve liman kurallarına uygunluk",
      "Maliyet etkin çözümler",
      "Hızlı operasyon süresi"
    ],
    features: [
      "Polyester spanzet ve kompozit şerit kullanımı",
      "ISPM-15 standartlarında ahşap takozlama",
      "Konteyner kapı önü güvenlik ağları",
      "Araç lastik sabitleme sistemleri"
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
    image: "project_cargo_being_secured.png",
    benefits: [
      "Proje bazlı özel mühendislik çözümleri",
      "Gabari dışı yük uzmanlığı",
      "Yüksek tonaj kapasiteli ekipman kullanımı",
      "Risk analizi ve güvenli operasyon desteği",
      "Anahtar teslim proje yönetimi"
    ],
    features: [
      "Flat Rack ve Open Top konteyner uygulamaları",
      "Lowbed araç üstü lashing",
      "Vagon üstü sabitleme",
      "Ağır yük kaydırma ve yerleştirme (Skidding/Jack-up)"
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
    image: null, // Fallback to icon
    benefits: [
      "Gemi onayı garantili lashing",
      "Deniz aşırı taşımalara uygunluk",
      "Hızlı ve güvenilir operasyon",
      "Brandalam ile tam koruma seçeneği"
    ],
    features: [
      "Overheight ve Overwidth yükleme uzmanlığı",
      "Collapsible Flat Rack kullanımı",
      "Çelik halat ve gerdirmeli sabitleme",
      "Koruyucu köşe bent ve şilteler"
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
    image: null,
    benefits: [
      "Tam koruma sağlayan su geçirmez malzeme",
      "UV ışınlarına dayanıklılık",
      "Yüke özel ölçü ve formda uygulama",
      "Korozyon önleyici etki"
    ],
    features: [
      "Ağır hizmet tipi PVC branda",
      "Halkalı ve kuşaklı bağlama sistemi",
      "Havalandırma kapakları (nem oluşumunu engellemek için)",
      "Şeffaf pencereli branda seçenekleri"
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
    image: "industrial_shrink_wrap_packaging.png",
    benefits: [
      "Mükemmel sızdırmazlık ve koruma",
      "Aerodinamik yapı (karayolu taşımaları için)",
      "VCI katkılı korozyon önleme",
      "Hırsızlık ve kurcalamaya karşı caydırıcılık",
      "Estetik ve profesyonel görünüm"
    ],
    features: [
      "Yüksek mikronlu endüstriyel shrink film",
      "Fermuarlı kapı uygulaması (kontrol ve bakım için)",
      "Nem alıcı paket ilavesi",
      "Havalandırma menfezleri"
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
    image: null,
    benefits: [
      "ISPM-15 sertifikalı ahşap malzeme",
      "Yüke özel tasarım ve üretim",
      "Darbeye ve baskıya dayanıklı yapı",
      "Kolay elleçleme (forklift ve vinç için uygun)"
    ],
    features: [
      "OSB, Kontrplak veya Masif ahşap seçenekleri",
      "Nem bariyerli folyo kaplama (iç)",
      "Şok emici taban uygulamaları",
      "Modüler ve demonte sandık seçenekleri"
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
    image: "luxury_yacht_transport_lashing.png",
    benefits: [
      "Tekne taşıma konusunda uzman ekip",
      "Gövdeye zarar vermeyen özel ekipmanlar",
      "Kişiye özel cradle (beşik) üretimi",
      "Uluslararası taşıma standartlarına uyum"
    ],
    features: [
      "Yumuşak dokulu polyester sapanlar",
      "Kauçuk destekli takozlama",
      "Tekne formuna uygun shrink wrap kaplama",
      "Direk ve donanım demontaj/montaj desteği"
    ]
  },
  {
    id: "yuk-sabitleme",
    title: "Yük Sabitleme (Genel)",
    shortDescription: "Tır, vagon ve depo içi genel yük sabitleme hizmetleri.",
    fullDescription: `
      Sadece deniz yolu değil, karayolu ve demiryolu taşımalarında da yük güvenliği hizmeti sunuyoruz.
      Tır dorsesi, tren vagonu veya depo raflarındaki yüklerin devrilmesini ve kaymasını önleyen profesyonel çözümler üretiyoruz.
      
      Paletli ürünler, makine parçaları, rulo saclar, borular ve variller için en uygun bağlama yöntemlerini uyguluyoruz.
      EN 12195 standartlarına uygun yük güvenliği hesaplamaları yaparak, trafik güvenliğini tehlikeye atacak riskleri ortadan kaldırıyoruz.
    `,
    icon: Truck,
    image: null,
    benefits: [
      "Tüm taşıma modları için çözüm",
      "Karayolu denetimlerine uygunluk",
      "Mal ve can güvenliği",
      "Hasarsız teslimat garantisi"
    ],
    features: [
      "Sürtünme katsayısını artırıcı kaymaz pedler",
      "Köşe koruyucular",
      "Dikey ve yatay bağlama teknikleri",
      "Boşluk doldurucu hava yastıkları"
    ]
  }
];
