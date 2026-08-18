import { Anchor, Ship, Package, Box, Container, ShieldCheck, Truck, HardHat } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  image: string | null;
  gallery?: string[];
  benefits: string[];
  features: string[];
  faq: FAQItem[];
  ports?: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "gemi-proje-lashing",
    title: "Gemi Proje Lashing",
    seoTitle: "Gemi Proje Lashing | Gemi Üstü Yük Sabitleme – Capital Lashing",
    metaDescription: "İstanbul, Ambarlı ve Türkiye genelinde gemi proje lashing hizmeti. DNV-GL onaylı ekipman, IMO CSS Code uyumlu operasyon, 7/24 sertifikalı lasher ekibi. Ücretsiz teklif alın.",
    shortDescription: "Gemi ambarı ve güverte üstü ağır tonajlı proje yüklerinin sabitlenmesi.",
    ports: ["Ambarlı Limanı", "Haydarpaşa Limanı", "Tekirdağ Limanı", "İzmir Aliağa", "Mersin Limanı", "İstanbul"],
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
      "7/24 Operasyon Ve Raporlama",
    ],
    features: [
      "Çelik Halat Ve Zincir Lashing",
      "Özel Kaynak Sabitleme (Welding)",
      "Ahşap Takozlama (Dunnage)",
      "Mukavemet Hesaplamaları",
    ],
    faq: [
      {
        q: "Gemi proje lashing hizmeti nedir?",
        a: "Gemi proje lashing; türbin, trafo, jeneratör, iş makinesi gibi ağır ve gabari dışı yüklerin gemi güvertesi veya ambarına IMO CSS Code standartlarına uygun olarak sabitlenmesi işlemidir. Capital Lashing, DNV-GL onaylı ekipmanlar ve sertifikalı personel ile bu hizmeti Türkiye genelindeki tüm limanlarda sunmaktadır.",
      },
      {
        q: "Hangi limanlarda gemi lashing hizmeti veriyorsunuz?",
        a: "Ambarlı Limanı, Haydarpaşa Limanı, Tekirdağ Limanı, İzmir Aliağa Limanı, Mersin Limanı ve Türkiye'deki tüm büyük deniz limanlarında 7/24 gemi lashing hizmeti sağlıyoruz.",
      },
      {
        q: "Lashing sertifikası nedir, neden gereklidir?",
        a: "Lashing sertifikası; yükün gemi kaptanı ve survey firması onaylı standartlarda sabitlendiğini belgeleyen resmi bir dokümandır. Denizcilik sigortaları ve taşıma sözleşmeleri için zorunludur. Capital Lashing, her operasyonun ardından fotoğraflı survey raporu ve lashing sertifikası düzenlemektedir.",
      },
      {
        q: "IMO CSS Code nedir?",
        a: "IMO CSS Code (Code of Safe Practice for Cargo Stowage and Securing), Uluslararası Denizcilik Örgütü'nün gemilerde yük istifleme ve sabitleme standartlarını belirleyen uluslararası kurallar bütünüdür. Capital Lashing, tüm operasyonlarını bu kurallara tam uyumlu olarak gerçekleştirir.",
      },
      {
        q: "Gemi lashing fiyatı nasıl hesaplanır?",
        a: "Lashing fiyatı; yükün tonajı, boyutları, yükleme limanı, kullanılacak ekipman türü ve operasyon süresi göz önünde bulundurularak hesaplanır. Projenizin detaylarını bizimle paylaşın, en kısa sürede ücretsiz fiyat teklifi sunalım.",
      },
      {
        q: "Lashing operasyonu ne kadar sürer?",
        a: "Operasyon süresi yükün boyutu ve lashing planının karmaşıklığına bağlı olarak değişir. Standart proje yüklerinde ortalama 4-12 saat arasındadır. Ekibimiz liman programınıza uyum sağlar ve gerektiğinde 7/24 vardiyalı çalışır.",
      },
    ],
  },
  {
    id: "konteyner-lashing",
    title: "Konteyner Lashing",
    seoTitle: "Konteyner Lashing | İçi Yük Sabitleme Hizmeti – Capital Lashing",
    metaDescription: "İstanbul ve Marmara limanlarında konteyner içi yük sabitleme, airbag uygulaması, spanzet lashing. CTU Code uyumlu. Ambarlı, Haydarpaşa ve Tekirdağ'da 7/24 hizmet.",
    shortDescription: "Konteyner içi yük sabitleme ve araç bağlama hizmetleri.",
    ports: ["Ambarlı Limanı", "Haydarpaşa Limanı", "Tekirdağ Limanı", "İstanbul"],
    fullDescription: `
      Konteyner taşımacılığında yükün hasarsız bir şekilde varış noktasına ulaşması için profesyonel konteyner içi lashing hizmeti veriyoruz.
      Özellikle dökme olmayan, paletli, kasalı, varilli veya araç gibi hareketli yüklerin konteyner içinde sabitlenmesi kritik öneme sahiptir.
      
      Capital Lashing, yükün konteyner duvarlarına veya tabanına zarar vermeden, en uygun malzemelerle (airbag, spanzet, takoz) sabitlenmesini sağlar.
      CTU Code (Cargo Transport Units) kurallarına harfiyen uyarak, yükünüzün hem denizde hem de karayolunda güvende olmasını garanti ediyoruz.
      
      Otomobil, iş makinesi ve tekne gibi araçların konteyner içine yüklenmesi ve sabitlenmesi konusunda uzmanlaşmış ekibimiz, özel aparatlar ve teknikler kullanır.

      #### Konteyner Lashing'de Kullanılan Yöntemler

      *   Polyester spanzet ile çapraz sabitleme
      *   Hava yastığı (airbag) ile boşluk doldurma
      *   ISPM-15 onaylı ahşap takozlama
      *   Araç lastiği sabitleme aparatları
      *   Kapı önü güvenlik ağları (door netting)

      Ambarlı, Haydarpaşa ve Tekirdağ limanlarında konteynerin doldurulduğu noktada hizmet veriyor, yükleme sonrası konteyner mühürleme tutanağını da düzenliyoruz.
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
      "Maliyet Etkin Çözümler",
    ],
    features: [
      "Polyester Spanzet Ve Kompozit",
      "ISPM-15 Ahşap Takozlama",
      "Kapı Önü Güvenlik Ağları",
      "Araç Lastik Sabitleme",
    ],
    faq: [
      {
        q: "Konteyner içi lashing neden gereklidir?",
        a: "Konteyner içindeki yükler deniz yolculuğu sırasında şiddetli sallanma, frenaj ve viraj kuvvetlerine maruz kalır. Sabitleme yapılmadığında yükler konteyner duvarlarına çarparak hasar görür veya istif çökmesi yaşanır. CTU Code kapsamında konteyner lashing, uluslararası standart bir zorunluluktur.",
      },
      {
        q: "CTU Code nedir?",
        a: "CTU Code (Guidelines for Packing of Cargo Transport Units), IMO/ILO/UNECE tarafından yayımlanan konteyner yükleme ve sabitleme kılavuzudur. Capital Lashing tüm konteyner lashing operasyonlarını bu kılavuz çerçevesinde gerçekleştirir.",
      },
      {
        q: "Konteyner lashing için hangi malzemeler kullanılır?",
        a: "Yükün türüne göre polyester spanzet, airbag (hava yastığı), ISPM-15 sertifikalı ahşap takoz, dunnage bag, anti-slip mat, köşe koruyucu ve kapı önü güvenlik ağı kullanılmaktadır.",
      },
      {
        q: "Araç konteyner lashing hizmeti veriyor musunuz?",
        a: "Evet. Otomobil, minibüs, kamyon, iş makinesi ve tarım araçlarının konteyner içine yüklenmesi ve özel aparatlarla sabitlenmesi konusunda uzmanlaşmış ekibimiz hizmet vermektedir.",
      },
      {
        q: "İstanbul'un hangi limanlarında konteyner lashing hizmeti veriyorsunuz?",
        a: "Ambarlı Limanı, Haydarpaşa Limanı ve Tekirdağ Limanı başta olmak üzere İstanbul ve Marmara bölgesindeki tüm konteyner terminallerinde 7/24 hizmet sunuyoruz.",
      },
    ],
  },
  {
    id: "proje-kargo-lashing",
    title: "Proje Kargo Lashing",
    seoTitle: "Proje Kargo Lashing | Gabari Dışı OOG Yük Sabitleme – Capital Lashing",
    metaDescription: "Türkiye'nin lider proje kargo lashing firması. Türbin, trafo, jeneratör, iş makinesi sabitlenmesi. Aliağa, Mersin, Tekirdağ limanlarında 7/24 operasyon.",
    shortDescription: "Gabari dışı ve ağır sanayi yüklerinin özel sabitleme çözümleri.",
    ports: ["İzmir Aliağa Limanı", "Mersin Limanı", "Tekirdağ Limanı", "Ambarlı Limanı", "İstanbul"],
    fullDescription: `
      Standart taşıma yöntemlerinin yetersiz kaldığı gabari dışı (Out of Gauge - OOG) yükleriniz için özel proje kargo lashing çözümleri üretiyoruz.
      Enerji, inşaat, madencilik ve havacılık sektörlerine ait devasa ekipmanların taşınması, yüksek mühendislik bilgisi ve hassasiyet gerektirir.
      
      Capital Lashing, yükün cinsine ve taşıma moduna (gemi, tır, tren) göre özel lashing projeleri geliştirir.
      Her bir proje için yükün ağırlık merkezi, kaldırma noktaları (lifting points) ve sabitleme noktaları (lashing points) analiz edilir.
      Gerekirse yük için özel çelik konstrüksiyon beşikler veya taşıma aparatları tasarlayıp imal ediyoruz.

      #### OOG Proje Kargo Lashing'de Uzmanlaştığımız Yük Türleri

      *   Rüzgar türbini kanatları ve kuleleri
      *   Güç trafolar ve jeneratörler
      *   Sanayi kazanları ve presler
      *   İnşaat ekipmanları (vinç, ekskavatör, buldozer)
      *   Petrokimya ve petrol sektörü ekipmanları

      İzmir Aliağa, Mersin ve Tekirdağ limanlarında proje kargo operasyonlarınız için 7/24 teknik destek ve lashing hizmeti sunuyoruz.
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
      "Risk Analizi Ve Güvenlik",
    ],
    features: [
      "Flat Rack Ve Open Top Uygulama",
      "Lowbed Araç Üstü Lashing",
      "Vagon Üstü Sabitleme",
      "Ağır Yük Kaydırma (Skidding)",
    ],
    faq: [
      {
        q: "Proje kargo lashing ile standart lashing arasındaki fark nedir?",
        a: "Proje kargo lashing, standart konteynerlere sığmayan (OOG – Out of Gauge), ağır veya özel şekilli yükler için uygulanan ileri mühendislik gerektiren bir sabitleme yöntemidir. Her proje için ağırlık merkezi analizi, özel ekipman seçimi ve gemi survey onayı içerir.",
      },
      {
        q: "OOG yük nedir?",
        a: "OOG (Out of Gauge), standart konteyner boyutlarını aşan yükler anlamına gelir. Yükseklik, genişlik veya uzunluk limitlerini aşan bu yükler genellikle flat rack veya open top konteynerlerle taşınır ve özel lashing planı gerektirir.",
      },
      {
        q: "Türbin lashing hizmeti veriyor musunuz?",
        a: "Evet. Rüzgar türbini kanatları, kuleler ve hub'lar gibi büyük enerji ekipmanlarının gemi ve lowbed üzerinde sabitlenmesi konusunda özel deneyimimiz bulunmaktadır.",
      },
      {
        q: "Hangi limanlarda proje kargo lashing hizmeti sunuyorsunuz?",
        a: "İzmir Aliağa, Mersin, Tekirdağ, Ambarlı ve İstanbul limanlarında proje kargo lashing hizmeti veriyoruz. İhtiyaç halinde Türkiye'nin diğer limanlarına da gidiyoruz.",
      },
      {
        q: "Proje kargo lashing için teklif nasıl alınır?",
        a: "Yükünüzün boyutlarını, ağırlığını, yükleme ve varış limanını web sitemizdeki iletişim formu aracılığıyla bize iletin. Uzman mühendislerimiz 2 saat içinde teknik değerlendirme ve fiyat teklifi sunar.",
      },
    ],
  },
  {
    id: "flat-rack-lashing",
    title: "Flat Rack (FR) Lashing",
    seoTitle: "Flat Rack (FR) Lashing | OOG Yük Konteyner Sabitleme – Capital Lashing",
    metaDescription: "Flat rack konteyner lashing İstanbul ve Türkiye geneli. Overheight, overwidth yüklerin gemi onaylı sabitlenmesi. Ambarlı, Aliağa, Mersin limanlarında hizmet.",
    shortDescription: "Flat rack konteynerlere taşmalı yük sabitleme.",
    ports: ["Ambarlı Limanı", "İzmir Aliağa Limanı", "Mersin Limanı", "Haydarpaşa Limanı"],
    fullDescription: `
      Konteyner gemileriyle taşınacak gabari dışı yükleriniz için Flat Rack (FR) lashing hizmeti sunuyoruz.
      Yükün konteyner sınırlarını aştığı (overheight/overwidth) durumlarda, gemi planlamasına uygun, sertifikalı ve güvenli bir sabitleme yapılması zorunludur.
      
      Ekibimiz, yükün Flat Rack üzerine dengeli bir şekilde yerleştirilmesini ve çelik halat, zincir veya yüksek mukavemetli spanzetlerle sabitlenmesini sağlar.
      Liman sahasında veya fabrika dolumlarında gerçekleştirdiğimiz bu operasyonlar, gemi kaptanı ve survey firmaları tarafından onaylanacak standartlardadır.

      #### Flat Rack Lashing'de Uzmanlaştığımız Konular

      *   Overheight (yüksekliği aşan) yükler için özel lashing planlaması
      *   Collapsible (katlanabilir kanat) flat rack uygulamaları
      *   Yük ağırlık dengesinin optimizasyonu
      *   Çelik köşe bent ile gövde koruma
      *   Gemi survey ve kaptan onaylı lashing sertifikası

      Flat rack lashing operasyonlarımızda Ambarlı, Aliağa ve Mersin başta olmak üzere Türkiye'nin tüm büyük liman terminallerinde hizmet veriyoruz.
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
      "Brandalama İle Tam Koruma",
    ],
    features: [
      "Overheight Yükleme Uzmanlığı",
      "Collapsible Flat Rack",
      "Çelik Halat Ve Gerdirmeli",
      "Koruyucu Köşe Bentler",
    ],
    faq: [
      {
        q: "Flat rack konteyner ne demektir?",
        a: "Flat rack konteyner; yan duvarları olmayan, sadece taban ve iki uç duvardan oluşan özel taşıma konteyneridir. Standart yükseklik veya genişliği aşan OOG yükleri için kullanılır ve özel lashing ile sabitlenmesi zorunludur.",
      },
      {
        q: "Flat rack lashing hangi yükler için uygundur?",
        a: "İş makineleri, transformer, jeneratör, boru demetleri, ahşap kütükler, vinç parçaları ve genişliği/yüksekliği standart konteyner limitlerini aşan her türlü yük için flat rack lashing uygundur.",
      },
      {
        q: "Flat rack lashing sertifikası kim tarafından onaylanır?",
        a: "Sabitleme planı gemi kaptanı ve DNV-GL, Bureau Veritas veya Lloyd's Register gibi uluslararası survey firmaları tarafından onaylanır. Capital Lashing, her operasyon için resmi lashing sertifikası düzenler.",
      },
      {
        q: "Flat rack lashing için hangi ekipmanlar kullanılır?",
        a: "Sertifikalı çelik halat, turnbuckle (germe vidası), D-ring, zincir ve yüksek kapasiteli spanzetler kullanılır. Yükün gövde koruması için köşe bent ve ahşap takozlama da uygulanır.",
      },
      {
        q: "İstanbul'da flat rack lashing hizmeti veriyor musunuz?",
        a: "Evet. Ambarlı ve Haydarpaşa limanlarında flat rack lashing hizmeti sunuyoruz. Ayrıca İzmir Aliağa ve Mersin terminallerinde de operasyon gerçekleştiriyoruz.",
      },
    ],
  },
  {
    id: "brandalama",
    title: "Brandalama",
    seoTitle: "Brandalama Hizmeti | Gemi Güvertesi & Açık Alan Branda – Capital Lashing",
    metaDescription: "Gemi güvertesi ve liman sahalarında UV dayanımlı, su geçirmez PVC brandalama. İstanbul, Marmara, Ege ve Akdeniz limanlarında profesyonel yük koruma hizmeti.",
    shortDescription: "Yüklerinizi hava koşullarından koruyan profesyonel brandalama.",
    ports: ["Ambarlı Limanı", "Haydarpaşa Limanı", "Mersin Limanı", "İzmir Aliağa"],
    fullDescription: `
      Açık yüklerin, gemi güvertesindeki kargoların veya stok sahasındaki ürünlerin yağmur, güneş, tuzlu su ve rüzgar gibi dış etkenlerden korunması için endüstriyel brandalama hizmeti veriyoruz.
      
      Kullandığımız brandalar, UV dayanımlı, su geçirmez ve yırtılmaya karşı yüksek mukavemetli malzemelerden üretilir.
      Yükün formuna göre özel dikim veya yerinde uygulama yapılarak, tam kaplama sağlanır.
      Özellikle uzun süreli deniz yolculuklarında korozyon ve nem hasarını önlemek için brandalama hayati önem taşır.

      #### Brandalama Hizmetimizin Kapsamı

      *   Gemi güvertesi açık yük brandalaması
      *   Liman stok sahası ve depo brandalaması
      *   Makine ve ekipman örtüleme
      *   İnşaat sahaları ve rıhtım koruması
      *   Kış ve nakliye brandalaması

      İstanbul, Marmara, Ege ve Akdeniz kıyılarındaki tüm büyük limanlarda brandalama hizmeti veriyoruz.
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
      "Korozyon Önleyici Etki",
    ],
    features: [
      "Ağır Hizmet Tipi PVC Branda",
      "Halkalı Bağlama Sistemi",
      "Havalandırma Kapakları",
      "Şeffaf Pencereli Seçenekler",
    ],
    faq: [
      {
        q: "Gemi güvertesi brandalama ne zaman gereklidir?",
        a: "Gemi güvertesinde taşınan açık yükler (makine, ahşap, çelik profil vb.) tuz suyu, yağmur ve UV ışınlarına maruz kalır. Uzun mesafe denizyolu taşımacılığında brandalama, yükün hasarsız varmasını garantilemek için zorunlu bir koruma yöntemidir.",
      },
      {
        q: "Brandalama için hangi malzeme kullanılır?",
        a: "UV dayanımlı ve su geçirmez ağır hizmet tipi PVC branda kullanıyoruz. Yükün formuna göre özel dikim yapılabiliyor; yırtılmaya ve rüzgara karşı yüksek mukavemetli malzeme seçiyoruz.",
      },
      {
        q: "Brandalama hizmetinin shrink wrap'ten farkı nedir?",
        a: "Brandalama, yeniden kullanılabilir PVC örtülerle yapılan hava ve nem koruma yöntemidir. Shrink wrap ise ısıyla daralan tek kullanımlık polietilen film ile %100 sızdırmazlık sağlar. Uzun süreli depolama veya ihracat için shrink wrap daha ideal olabilir.",
      },
      {
        q: "İstanbul'da brandalama hizmeti veriyor musunuz?",
        a: "Evet. Ambarlı Limanı, Haydarpaşa Limanı ve Tekirdağ başta olmak üzere İstanbul ve Marmara bölgesindeki tüm limanlarda, liman sahalarında ve fabrikalarda brandalama hizmeti sunuyoruz.",
      },
    ],
  },
  {
    id: "shrink-wrap",
    title: "Shrink Wrap Paketleme",
    seoTitle: "Shrink Wrap Paketleme | Endüstriyel & Denizcilik Shrink Film – Capital Lashing",
    metaDescription: "İstanbul ve çevre limanlarda shrink wrap paketleme hizmeti. Tekne, makine, ihracat yükü için VCI katkılı korozyon önleyici shrink film. 7/24 hizmet.",
    shortDescription: "Endüstriyel ürünler için hava almayan ısıyla daralan paketleme.",
    ports: ["Ambarlı Limanı", "Haydarpaşa Limanı", "İstanbul"],
    fullDescription: `
      Capital Lashing, endüstriyel makineler, tekneler ve hassas ekipmanlar için Shrink Wrap (Isıyla Daralan Film) paketleme hizmeti sunar.
      Bu yöntem, ürünü tamamen sararak dış ortamla temasını keser ve %100 sızdırmazlık sağlar.
      
      Polietilen bazlı özel filmler, ısı tabancaları ile ısıtılarak ürünün şeklini alır ve gergin bir zırh oluşturur.
      Bu sayede nakliye ve depolama sırasında oluşabilecek çizilme, tozlanma, nem ve korozyon riskleri ortadan kalkar.
      Özellikle deniz aşırı ihracat yüklemelerinde, VCI (Uçucu Korozyon Önleyici) teknolojisi ile birleştirilerek paslanmaya karşı kesin çözüm sunar.

      #### Shrink Wrap'in Avantajları

      *   %100 su geçirmezlik ve nem yalıtımı
      *   VCI katkılı film seçeneğiyle korozyon önleme
      *   Aerodinamik yapı sayesinde depolama kolaylığı
      *   UV dayanımlı dış film seçenekleri
      *   Fermuarlı kapı uygulamasıyla içeri erişim imkânı

      İstanbul, Ambarlı ve Haydarpaşa limanlarında tekne, makine ve ihracat yükleri için shrink wrap hizmeti veriyoruz.
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
      "Estetik Ve Profesyonel Görünüm",
    ],
    features: [
      "Yüksek Mikronlu Shrink Film",
      "Fermuarlı Kapı Uygulaması",
      "Nem Alıcı Paket İlavesi",
      "Havalandırma Menfezleri",
    ],
    faq: [
      {
        q: "Shrink wrap paketleme ne işe yarar?",
        a: "Shrink wrap, ısıyla daralan polietilen film kullanılarak yükü tamamen saran ve dış ortamdan yalıtan bir paketleme yöntemidir. Su, nem, toz, UV ve tuzlu hava gibi etkenlere karşı %100 koruma sağlar.",
      },
      {
        q: "VCI shrink wrap nedir?",
        a: "VCI (Volatile Corrosion Inhibitor) katkılı shrink wrap, metal yüzeyleri paslanmaya ve korozyona karşı korumak için üretilmiş özel shrink filmdir. Metal aksamlı makineler ve ihracat yükleri için ideal çözümdür.",
      },
      {
        q: "Tekne shrink wrap hizmeti sunuyor musunuz?",
        a: "Evet. Motoryat, yelkenli ve fiber teknelerin kışlık depolamaya veya deniz aşırı taşımacılığa hazırlanması için profesyonel shrink wrap paketleme hizmeti veriyoruz.",
      },
      {
        q: "Shrink wrap ile brandalama arasındaki fark nedir?",
        a: "Shrink wrap, ısıyla şekil alarak yüke tam oturan, tek kullanımlık ve %100 sızdırmazlık sağlayan bir yöntemdir. Branda ise PVC malzemeden yapılan yeniden kullanılabilir örtüdür. Yüksek değerli veya hassas yükler için shrink wrap daha üstün koruma sunar.",
      },
      {
        q: "İstanbul'da shrink wrap hizmeti nereden alınır?",
        a: "Capital Lashing olarak Ambarlı Limanı, Haydarpaşa Limanı ve İstanbul genelinde liman sahaları ile fabrikalara gelerek shrink wrap hizmeti veriyoruz.",
      },
    ],
  },
  {
    id: "sandiklama",
    title: "Sandıklama",
    seoTitle: "Sandıklama & Ahşap Paketleme | ISPM-15 Sertifikalı – Capital Lashing",
    metaDescription: "ISPM-15 sertifikalı ahşap sandık ve kasa üretimi İstanbul. İhracat sandıklaması, özel ölçü sandık, kafes kasa. Fumigasyon damgalı malzeme ile güvenli ihracat.",
    shortDescription: "ISPM-15 standartlarında ahşap sandık ve kasa üretimi.",
    ports: ["İstanbul", "Ambarlı Limanı", "Haydarpaşa Limanı"],
    fullDescription: `
      İhracat yükleriniz için uluslararası standartlara (ISPM-15) uygun ahşap sandıklama ve paketleme hizmeti veriyoruz.
      Ürününüzün ölçülerine ve ağırlığına göre özel olarak tasarlanan sandıklar, nakliye sırasındaki darbelere ve üst üste istiflemeye karşı maksimum koruma sağlar.
      
      Kapalı sandık, kafes sandık (kasa), palet ve özel taşıma bazaları kendi atölyemizde üretilir.
      Gerekli tüm ısıl işlem (fumigasyon) süreçleri tamamlanmış ve damgalanmış ahşap malzemeler kullanılır.

      #### Sandıklama Çözümlerimiz

      *   Kapalı ahşap sandık (tam koruma)
      *   Kafes sandık / kasa (hava sirkülasyonlu)
      *   OSB ve kontrplak sandık seçenekleri
      *   Nem bariyerli VCI folyo kaplama
      *   Şok emici sünger ve köpük ilavesi
      *   Gümrük ve karantina uyumlu ISPM-15 malzeme

      İhracat sürecinizi kolaylaştırmak için sandık üretiminden yükleme ve belgelendirmeye kadar tüm aşamalarda hizmet veriyoruz.
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
      "Kolay Elleçleme İmkânı",
    ],
    features: [
      "OSB, Kontrplak Veya Masif",
      "Nem Bariyerli Folyo Kaplama",
      "Şok Emici Taban",
      "Modüler Sandık Seçenekleri",
    ],
    faq: [
      {
        q: "ISPM-15 nedir ve neden önemlidir?",
        a: "ISPM-15 (International Standards for Phytosanitary Measures No. 15), uluslararası ticarette kullanılan ahşap ambalaj malzemelerinin ısıl işlem veya fumigasyon ile zararlı organizmalardan arındırılmasını zorunlu kılan uluslararası standarttır. Gümrükten sorunsuz geçiş için zorunludur.",
      },
      {
        q: "İhracat sandığı ile kafes sandık arasındaki fark nedir?",
        a: "Kapalı ihracat sandığı, her yüzü kaplanmış tam korumalı bir kutudur. Kafes sandık ise hava sirkülasyonuna izin veren ızgara yapılıdır. Yükün türüne, nem hassasiyetine ve nakliye süresine göre uygun tip seçilir.",
      },
      {
        q: "Sandıklama hizmetinin maliyeti neye göre belirlenir?",
        a: "Sandık maliyeti; yükün boyutu, ağırlığı, kullanılacak malzeme türü (OSB, masif, kontrplak) ve ek koruma gereksinimleri (VCI folyo, köpük astarlama) göz önünde bulundurularak hesaplanır.",
      },
      {
        q: "Fumigasyon nedir?",
        a: "Fumigasyon, ahşap malzemelerdeki böcek, larva ve diğer zararlı organizmaları öldürmek amacıyla kimyasal gaz uygulamasıdır. ISPM-15 uyumlu ahşap sandıklar için alternatif yöntem ısıl işlemdir (HT – Heat Treatment).",
      },
      {
        q: "Sandıklama hizmetini liman veya fabrikada alabilir miyim?",
        a: "Evet. Hem kendi atölyemizde hazırlanmış sandıkları liman veya fabrika adresinize teslim ediyor, hem de sahanıza gelerek yerinde sandıklama yapıyoruz.",
      },
    ],
  },
  {
    id: "tekne-yat-lashing",
    title: "Tekne & Yat Lashing",
    seoTitle: "Tekne & Yat Lashing | Lüks Yat Taşımacılığı Sabitleme – Capital Lashing",
    metaDescription: "İstanbul'da tekne ve yat lashing hizmeti. Güverte taşımacılığı, özel beşik sistemi, shrink wrap koruma. Değerli tekneniz Capital Lashing güvencesiyle.",
    shortDescription: "Lüks teknelerin güvenli transferi ve sabitlenmesi.",
    ports: ["İstanbul", "Ambarlı Limanı", "Haydarpaşa Limanı"],
    fullDescription: `
      Yat ve tekne taşımacılığı, lojistiğin en hassas ve özen gerektiren alanlarından biridir.
      Capital Lashing, lüks teknelerinizi gemi güvertesine veya özel taşıma araçlarına güvenle sabitler.
      
      Teknenin gövdesine zarar vermeyecek özel yumuşak sapanlar ve destek takozları kullanılır.
      Deniz durumu ne olursa olsun teknenin hareket etmesini engelleyecek, aynı zamanda gövde stresini minimize edecek özel beşik (cradle) sistemleri ve lashing teknikleri uygularız.
      Shrink wrap kaplama ile birleştirildiğinde, tekneniz varış limanına fabrikadan çıktığı gibi ulaşır.

      #### Tekne & Yat Lashing Sürecimiz

      *   Gövde inceleme ve beşik tasarımı
      *   Yumuşak dokulu polyester sapanla gemi vinciyle yükleme
      *   Kauçuk destekli takozlama ile gövde koruması
      *   Çelik halat ve turnbuckle ile güverte lashing
      *   İsteğe bağlı shrink wrap veya branda kaplama

      Motoryat, yelkenli, katamaran ve fiber tekneler başta olmak üzere her türlü deniz aracının taşınmasında uzman ekibimiz hizmetinizde.
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
      "Uluslararası Standartlara Uyum",
    ],
    features: [
      "Yumuşak Dokulu Polyester Sapan",
      "Kauçuk Destekli Takozlama",
      "Forma Uygun Shrink Wrap",
      "Donanım Demontaj Desteği",
    ],
    faq: [
      {
        q: "Tekne ve yat nasıl gemi güvertesinde taşınır?",
        a: "Tekne önce özel yumuşak sapanlar ve vinç yardımıyla gemi güvertesine alınır. Ardından gövdeye zarar vermeyecek kauçuk destekli takozlar ve beşik sistemiyle desteklenir, çelik halat ve turnbuckle ile sabitlenir. İsteğe bağlı olarak shrink wrap veya branda ile kaplanır.",
      },
      {
        q: "Yat lashing sırasında gövde zarar görür mü?",
        a: "Hayır. Yumuşak dokulu polyester sapanlar, kauçuk ve köpük astarlı ahşap takozlar ve beşik sistemi sayesinde gövde stresini minimum seviyede tutuyoruz. Değerli teknenizi fabrikadan çıktığı gibi teslim etmek en büyük önceliğimiz.",
      },
      {
        q: "Hangi tekne türlerini taşıyabiliyorsunuz?",
        a: "Motoryat, yelkenli, katamaran, RIB (şişme) tekne, fiber, ahşap ve çelik tekne gibi tüm deniz araçlarının taşıma sabitlemesini yapıyoruz.",
      },
      {
        q: "Tekne lashing ile shrink wrap birlikte yapılabilir mi?",
        a: "Evet. Lashing sabitleme işleminin ardından tekneyi tamamen shrink wrap ile kaplıyoruz. Bu kombinasyon, özellikle uzun mesafe denizyolu taşımacılığında maksimum koruma sağlar.",
      },
    ],
  },
  {
    id: "unlashing-tahliye",
    title: "Unlashing & Tahliye",
    seoTitle: "Unlashing & Tahliye Hizmeti | Gemi Yük Açma – Capital Lashing İstanbul",
    metaDescription: "Türkiye limanlarında profesyonel unlashing ve tahliye hizmetleri. Gemi gelişinde hızlı yük açma, dunnage temizleme, survey raporu ve sertifikasyon. 7/24 operasyon.",
    shortDescription: "Gemi gelişinde hızlı ve güvenli yük açma ve tahliye operasyonları.",
    ports: ["Ambarlı Limanı", "Haydarpaşa Limanı", "İzmir Aliağa", "Mersin Limanı", "Tekirdağ Limanı"],
    fullDescription: `
      Türkiye limanlarına gelen gemilerdeki yüklerin hızlı, güvenli ve belgelenmiş biçimde serbest bırakılması için profesyonel unlashing ve tahliye hizmeti sunuyoruz.

      Unlashing, lashing operasyonunun tersi olup gemi varış limanına ulaştığında yük sabitleme ekipmanlarının (halat, zincir, turnbuckle vb.) sistematik şekilde sökülerek yükün tahliyeye hazır hale getirilmesidir.

      #### Unlashing & Tahliye Operasyonumuz

      *   Lashing ekipmanlarının güvenli şekilde sökülmesi
      *   Dunnage ve ahşap malzemelerin temizlenmesi
      *   Yük durumunun survey tarafından tespiti
      *   Hasar raporu ve tahliye tutanağı düzenlenmesi
      *   Ekipman envanteri ve iade belgesi

      Ambarlı, Haydarpaşa, İzmir Aliağa, Mersin ve Tekirdağ limanlarında gemi programına uyumlu 7/24 unlashing hizmeti sağlıyoruz. Gemi kalkış süresini uzatmamak adına hızlı ve koordineli çalışan ekibimiz, liman programlarına tam uyum sağlar.
    `,
    icon: Truck,
    image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_3.webp",
    gallery: [
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_3.webp",
      "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_4.webp",
    ],
    benefits: [
      "7/24 Hızlı Müdahale",
      "Liman Programına Tam Uyum",
      "Survey Onaylı Tahliye Tutanağı",
      "Deneyimli Saha Ekibi",
    ],
    features: [
      "Lashing Ekipman Sökümü",
      "Dunnage & Alan Temizliği",
      "Hasar Tespiti Ve Raporlama",
      "Ekipman Envanteri Ve İadesi",
    ],
    faq: [
      {
        q: "Unlashing nedir?",
        a: "Unlashing, gemi varış limanına ulaştığında yükü tutan çelik halatlar, zincirler, turnbuckle ve diğer sabitleme ekipmanlarının sistematik biçimde sökülmesi işlemidir. Tahliye öncesi zorunlu bir adımdır.",
      },
      {
        q: "Unlashing hizmeti ne zaman gereklidir?",
        a: "Gemi limana yanaştığında, yük tahliyesi başlamadan önce tüm lashing ekipmanlarının sökülerek yükün serbest bırakılması gerekir. Bu işlem için sertifikalı lasher personeli şarttır.",
      },
      {
        q: "Unlashing sırasında hasar tespiti yapılıyor mu?",
        a: "Evet. Unlashing operasyonu sırasında yükün durumu gözlemlenir, herhangi bir hasar veya anormallik survey yetkilileri ile birlikte tespit edilerek fotoğraflı hasar raporu düzenlenir.",
      },
      {
        q: "Hangi limanlarda unlashing hizmeti veriyorsunuz?",
        a: "Ambarlı, Haydarpaşa, İzmir Aliağa, Mersin ve Tekirdağ limanlarında gemi programına uyumlu 7/24 unlashing hizmeti sağlıyoruz.",
      },
      {
        q: "Unlashing hizmeti için önceden rezervasyon gerekli midir?",
        a: "Operasyonun sorunsuz yürüyebilmesi için gemi ETA (tahmini varış saati) bilgisi ile birlikte önceden bilgi vermenizi tavsiye ediyoruz. Ancak acil durumlarda da 7/24 müdahale kapasitemiz mevcuttur.",
      },
    ],
  },
];
