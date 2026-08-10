export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideData {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  summary: string;
  datePublished: string;
  sections: GuideSection[];
  relatedServiceIds: string[];
  relatedGuideSlugs: string[];
  ctaText: string;
}

export const guidesData: GuideData[] = [
  {
    slug: "lashing-nedir",
    title: "Lashing Nedir? Deniz Taşımacılığında Yük Bağlama Rehberi",
    seoTitle: "Lashing Nedir? Yük Bağlama ve Sabitleme Rehberi | Capital Lashing",
    metaDescription: "Lashing nedir, hangi ekipmanlarla yapılır, hangi kurallara tabidir? Deniz taşımacılığında yük bağlama yöntemlerini, ekipman türlerini ve uygulama adımlarını anlatan teknik rehber.",
    summary: "Lashing kavramının tanımı, kullanılan ekipmanlar, uygulama yöntemleri ve uluslararası kurallar üzerine kapsamlı bir başlangıç rehberi.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Lashing Kavramının Tanımı",
        paragraphs: [
          "Lashing, bir yükün taşıma aracı üzerinde hareket etmesini önlemek amacıyla halat, zincir, spanzet veya kaynaklı aparatlarla bağlanması işlemidir. Terim denizcilik kökenlidir ve Türkçede yük bağlama veya yük sabitleme karşılığıyla kullanılır. Gemi, konteyner, tır ve vagon üzerindeki her türlü bağlama işlemi bu kavramın kapsamına girer.",
          "Deniz yolculuğu sırasında gemi altı serbestlik derecesinde hareket eder. Yalpa, baş kıç vurma ve savrulma hareketleri yüke sürekli değişen ivme kuvvetleri uygular. Lashing bu kuvvetleri karşılayacak bağlantı noktaları ve bağlama elemanları kurarak yükün kaymasını, devrilmesini ve sıçramasını engeller.",
        ],
      },
      {
        id: "neden-gerekli",
        heading: "Lashing Neden Gereklidir",
        paragraphs: [
          "Sabitlenmemiş veya yetersiz sabitlenmiş bir yük yalnızca kendisine zarar vermez. Kayan yük geminin dengesini bozabilir, diğer yüklere hasar verebilir ve mürettebat için can güvenliği riski oluşturur. Bu nedenle uluslararası denizcilik kuralları yük sabitlemeyi taşımanın zorunlu bir parçası olarak tanımlar.",
          "Sigorta tarafında da lashing belirleyicidir. Taşıma sırasında hasar oluştuğunda sigorta şirketleri ve sörvey firmaları ilk olarak bağlama planını ve uygulamanın fotoğraflı kayıtlarını inceler. Kurallara uygun yapılmış ve belgelenmiş bir lashing, hasar tazmin sürecinde taşıtanın en güçlü dayanağıdır.",
        ],
        bullets: [
          "Yükün kayması ve devrilmesi riskini ortadan kaldırır",
          "Gemi stabilitesini ve seyir güvenliğini korur",
          "Diğer yüklerin ve taşıma aracının hasar görmesini önler",
          "Sigorta ve sörvey süreçlerinde belgelenebilir güvence sağlar",
        ],
      },
      {
        id: "ekipmanlar",
        heading: "Lashing Ekipmanları",
        paragraphs: [
          "Bağlama elemanı seçimi yükün ağırlığına, formuna ve taşıma moduna göre yapılır. Her ekipmanın üretici tarafından belgelenmiş bir kopma yükü (breaking load) ve emniyetli çalışma yükü (safe working load) vardır. Hesaplamalar bu değerler üzerinden yürütülür.",
        ],
        bullets: [
          "Çelik halat ve halat kilitleri ağır tonajlı yüklerde kullanılır",
          "Lashing zinciri ve gerdirme kolları ağır makine ve proje yüklerinde tercih edilir",
          "Turnbuckle olarak bilinen germe vidaları halat ve zincir sistemlerini gerginler",
          "Polyester spanzet hafif ve orta ağırlıktaki yüklerde yüzeye zarar vermeden bağlama sağlar",
          "D-ring ve stopper plate gibi kaynaklı aparatlar güverte üzerinde bağlantı noktası oluşturur",
          "Ahşap takoz ve dunnage malzemeleri yük altında destek ve sürtünme yüzeyi sağlar",
        ],
      },
      {
        id: "yontemler",
        heading: "Temel Bağlama Yöntemleri",
        paragraphs: [
          "Uygulamada iki temel prensip vardır. Doğrudan bağlama yönteminde bağlama elemanı yük üzerindeki bağlantı noktasından taşıma aracındaki bağlantı noktasına gerilir ve kuvveti doğrudan karşılar. Sürtünme bağlaması olarak bilinen yöntemde ise bağlama elemanı yükün üzerinden aşırtılarak yükü zemine bastırır ve sürtünme kuvvetini artırır.",
          "Ağır proje yüklerinde bu yöntemler kaynaklı stoper, takozlama ve destekleme ile birlikte kullanılır. Doğru kombinasyon yükün ağırlık merkezi, sefer rotası ve beklenen deniz koşulları dikkate alınarak mühendislik hesabıyla belirlenir.",
        ],
      },
      {
        id: "kurallar",
        heading: "Uluslararası Kurallar ve Standartlar",
        paragraphs: [
          "Gemi üzerindeki yük sabitleme işlemleri IMO tarafından yayımlanan CSS Code kurallarına tabidir. Her geminin onaylı bir Cargo Securing Manual dokümanı bulunur ve bağlama uygulamaları bu dokümana uygun yapılmak zorundadır. Konteyner içi yüklemelerde ise IMO, ILO ve UNECE ortak yayını olan CTU Code esas alınır.",
          "Profesyonel lashing firmaları bu kurallara uygun bağlama planı hazırlar, sertifikalı ekipman kullanır ve operasyon sonunda uygulamayı belgeleyen rapor düzenler. Bu belgeler gemi kaptanı ve sörvey firması onayıyla resmiyet kazanır.",
        ],
      },
    ],
    relatedServiceIds: ["gemi-proje-lashing", "konteyner-lashing"],
    relatedGuideSlugs: ["yuk-sabitleme-nedir", "css-code-nedir", "lashing-sertifikasi-nedir"],
    ctaText: "Yükünüz için kurallara uygun bir bağlama planına mı ihtiyacınız var? Gemi proje lashing hizmetimizi inceleyin.",
  },
  {
    slug: "konteyner-lashing-nedir",
    title: "Konteyner Lashing Nedir? Konteyner İçi Yük Sabitleme Rehberi",
    seoTitle: "Konteyner Lashing Nedir? Konteyner İçi Sabitleme Rehberi | Capital Lashing",
    metaDescription: "Konteyner lashing nedir, konteyner içinde yük nasıl sabitlenir? Spanzet, airbag ve takozlama yöntemleri, CTU Code kuralları ve sık yapılan hatalar hakkında teknik rehber.",
    summary: "Konteyner içi yük sabitlemenin mantığı, kullanılan malzemeler, uygulama adımları ve sık yapılan hatalar üzerine teknik bir rehber.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Konteyner Lashing Nedir",
        paragraphs: [
          "Konteyner lashing, konteyner içine yüklenen kargonun taşıma boyunca hareket etmemesi için sabitlenmesi işlemidir. Konteynerin kapalı yapısı yükü dış etkenlerden korur ancak içerideki hareketi engellemez. Deniz yolculuğunda konteyner sürekli sallanır, karayolunda ani fren ve viraj kuvvetlerine maruz kalır.",
          "Konteyner içindeki boşluklar bu kuvvetler altında yükün ivmelenmesine alan tanır. Küçük bir boşluk bile tekrarlayan darbelerle ambalaj çökmesine, istif kaymasına ve konteyner duvarlarının hasar görmesine yol açabilir. Konteyner lashing bu boşlukları kontrol altına alır ve yükü konteynerin taşıyıcı noktalarına bağlar.",
        ],
      },
      {
        id: "kuvvetler",
        heading: "Konteyner İçindeki Yüke Etkiyen Kuvvetler",
        paragraphs: [
          "CTU Code, karayolu, demiryolu ve denizyolu için yüke etkiyen ivme katsayılarını ayrı ayrı tanımlar. Denizyolunda enine yönde yükün ağırlığının yüzde sekseni mertebesinde kuvvetler oluşabilir. Bu değer, bağlama sisteminin hangi kapasitede kurulması gerektiğini belirleyen hesabın girdisidir.",
          "Yükün ağırlığı tek başına yeterli bir güvence değildir. Ağır bir makine bile ıslak veya tozlu bir konteyner tabanında düşük sürtünme nedeniyle kayabilir. Bu yüzden hesaplamalarda sürtünme katsayısı, yükün ağırlık merkezi ve bağlantı noktalarının kapasitesi birlikte değerlendirilir.",
        ],
      },
      {
        id: "malzemeler",
        heading: "Kullanılan Malzeme ve Yöntemler",
        paragraphs: [
          "Konteyner içi sabitlemede yükün türüne göre farklı malzemeler bir arada kullanılır. Amaç yükü hem zemine bastırmak hem de yanal boşlukları doldurmaktır.",
        ],
        bullets: [
          "Polyester spanzet ile konteyner halkalarına çapraz bağlama",
          "Hava yastığı yani airbag ile paletler ve duvarlar arasındaki boşlukların doldurulması",
          "ISPM-15 damgalı ahşap takoz ve kereste ile alt ve yan destekleme",
          "Kaymayı azaltan anti-slip mat uygulaması",
          "Kapı önü güvenlik ağı ve bariyeri ile kapı açılışında yük düşmesinin önlenmesi",
          "Araç yüklemelerinde lastik önü takoz ve özel bağlama aparatları",
        ],
      },
      {
        id: "surec",
        heading: "Uygulama Adımları",
        paragraphs: [
          "Profesyonel bir konteyner sabitleme operasyonu yükleme planıyla başlar. Yükün ağırlık dağılımı konteyner tabanına dengeli yayılır, ağır parçalar alta ve merkeze yerleştirilir. Yükleme sırasında bağlantı noktalarının kapasitesi kontrol edilir ve bağlama elemanları kademeli olarak gerginlenir.",
          "Yükleme tamamlandığında uygulama fotoğraflanır ve yükleme tutanağı düzenlenir. Bu kayıtlar alıcı tarafında konteyner açıldığında oluşabilecek hasar tartışmalarında yükleyicinin sorumluluğunu belgeleyen kanıt niteliğindedir.",
        ],
      },
      {
        id: "hatalar",
        heading: "Sık Yapılan Hatalar",
        paragraphs: [
          "Sahada en sık karşılaşılan hata, yükün ağır olduğu gerekçesiyle sabitlemenin atlanmasıdır. İkinci yaygın hata, spanzetin kapasitesine bakılmadan rastgele bağlama yapılmasıdır. Konteyner halkalarının her birinin sınırlı bir kapasitesi vardır ve bu kapasitenin üzerinde yüklenen halka deniz koşullarında koparak tüm sistemi zayıflatır.",
          "Boşluk doldurmadan yalnızca bağlama yapmak da yeterli değildir. Bağlama elemanları esner ve küçük boşluklar yolculuk boyunca büyür. Doğru uygulama bağlama, destekleme ve boşluk doldurmanın birlikte kurgulanmasıdır.",
        ],
      },
    ],
    relatedServiceIds: ["konteyner-lashing", "flat-rack-lashing"],
    relatedGuideSlugs: ["ctu-code-yuk-sabitleme", "lashing-nedir", "flat-rack-lashing-nedir"],
    ctaText: "Konteyner dolumlarınızda CTU Code uyumlu sabitleme için konteyner lashing hizmetimize göz atın.",
  },
  {
    slug: "proje-kargo-lashing-nedir",
    title: "Proje Kargo Lashing Nedir? Gabari Dışı Yük Sabitleme Rehberi",
    seoTitle: "Proje Kargo Lashing Nedir? OOG Yük Sabitleme Rehberi | Capital Lashing",
    metaDescription: "Proje kargo lashing nedir, OOG yük ne demektir? Türbin, trafo ve ağır makine gibi gabari dışı yüklerin sabitlenme sürecini, hesaplamaları ve onay adımlarını anlatan rehber.",
    summary: "Gabari dışı ve ağır yüklerin taşınmasında lashing mühendisliğinin rolü, hesap adımları ve onay süreçleri üzerine derinlemesine bir rehber.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Proje Kargo ve OOG Kavramları",
        paragraphs: [
          "Proje kargo, standart konteyner ölçülerine sığmayan, parça başına yüksek değer taşıyan ve taşınması özel planlama gerektiren yükleri ifade eder. Rüzgar türbini kanatları, güç trafoları, sanayi kazanları, vinçler ve büyük iş makineleri bu sınıfın tipik örnekleridir.",
          "OOG yani Out of Gauge terimi, yükün standart konteyner boyutlarını yükseklik, genişlik veya uzunluk yönünde aştığını belirtir. Bu yükler flat rack veya open top konteynerlerle ya da doğrudan gemi güvertesi ve ambarında breakbulk olarak taşınır. Her iki durumda da standart bağlama şablonları yetersiz kalır ve yüke özel bir lashing projesi gerekir.",
        ],
      },
      {
        id: "muhendislik",
        heading: "Lashing Mühendisliği ve Hesaplamalar",
        paragraphs: [
          "Proje yükünün sabitlenmesi hesapla başlar. Yükün ağırlık merkezi, taşıma sırasında beklenen ivme kuvvetleri ve bağlantı noktalarının kapasiteleri üzerinden gerekli toplam bağlama kapasitesi belirlenir. CSS Code ekleri bu hesap için standart yöntem sunar.",
          "Hesabın çıktısı bağlama planıdır. Planda kaç adet halat veya zincir kullanılacağı, hangi açılarla bağlanacağı, hangi noktalara kaynaklı stoper atılacağı ve hangi bölgelerde takozlama yapılacağı gösterilir. Bağlama açısı kritik bir ayrıntıdır çünkü aynı ekipman farklı açılarda çok farklı etkin kapasite üretir.",
        ],
        bullets: [
          "Ağırlık merkezi ve kaldırma noktalarının analizi",
          "Sefer rotasına göre ivme kuvvetlerinin belirlenmesi",
          "Bağlama elemanı sayısı, açısı ve kapasite hesabı",
          "Kaynaklı stoper ve destekleme detaylarının projelendirilmesi",
        ],
      },
      {
        id: "uygulama",
        heading: "Saha Uygulaması",
        paragraphs: [
          "Uygulama aşamasında sertifikalı lasher ekibi bağlama planını sahada birebir uygular. Ağır yüklerde çelik halat ve zincir sistemleri turnbuckle ile gerginlenir, kayma yönlerine kaynaklı stoperler yerleştirilir ve yük altına dunnage adı verilen ahşap destekler serilir.",
          "Kaynaklı bağlantılar güverte sacının kalınlığı ve gemi yapısı dikkate alınarak yapılır. Bu nedenle proje kargo lashing operasyonları gemi zabitleriyle koordinasyon içinde yürütülür ve her kaynak noktası uygulama öncesinde onaylanır.",
        ],
      },
      {
        id: "onay",
        heading: "Sörvey ve Onay Süreci",
        paragraphs: [
          "Proje yüklerinde bağlama uygulaması tamamlandığında gemi kaptanı ve çoğu durumda bağımsız bir sörvey firması uygulamayı denetler. Sörveyör bağlama planı ile saha uygulamasını karşılaştırır, ekipman sertifikalarını kontrol eder ve uygunluk raporu düzenler.",
          "Bu onay süreci yük sahibi için kritik bir güvencedir. Onaylı bağlama raporu ve lashing sertifikası, sigorta poliçesinin geçerliliği ve olası hasar taleplerinde sorumluluğun netleşmesi için gereken temel belgelerdir.",
        ],
      },
    ],
    relatedServiceIds: ["proje-kargo-lashing", "gemi-proje-lashing"],
    relatedGuideSlugs: ["lashing-nedir", "flat-rack-lashing-nedir", "lashing-sertifikasi-nedir"],
    ctaText: "Gabari dışı yükünüz için mühendislik hesaplı bağlama planı gerekiyorsa proje kargo lashing hizmetimizi inceleyin.",
  },
  {
    slug: "flat-rack-lashing-nedir",
    title: "Flat Rack Lashing Nedir? Flat Rack Konteyner Yükleme Rehberi",
    seoTitle: "Flat Rack Lashing Nedir? FR Konteyner Yükleme Rehberi | Capital Lashing",
    metaDescription: "Flat rack konteyner nedir, hangi yükler için kullanılır, üzerine yük nasıl sabitlenir? Overheight ve overwidth yüklemeler ile gemi onay sürecini anlatan teknik rehber.",
    summary: "Flat rack konteynerin yapısı, hangi yüklerde kullanıldığı ve üzerine yapılan bağlama uygulamalarının teknik ayrıntıları.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Flat Rack Konteyner Nedir",
        paragraphs: [
          "Flat rack, yan duvarları ve tavanı olmayan, güçlendirilmiş bir taban ile iki uç duvardan oluşan özel konteyner tipidir. Katlanabilir uç duvarlı collapsible modelleri de vardır. Standart konteynerin kapalı hacmine sığmayan yükler için konteyner gemisi ağında taşıma imkanı sağlar.",
          "Flat rack tabanı standart konteynere göre çok daha yüksek nokta yüklerine dayanacak şekilde üretilir ve taban boyunca bağlama halkaları ile kazık cepleri bulunur. Bu yapı hem ağır makinelerin yüklenmesine hem de güvenli bağlama noktaları kurulmasına olanak tanır.",
        ],
      },
      {
        id: "kullanim",
        heading: "Hangi Yükler Flat Rack ile Taşınır",
        paragraphs: [
          "Flat rack genellikle yüksekliği veya genişliği standart konteyner limitlerini aşan yüklerde tercih edilir. Bu durum overheight ve overwidth olarak adlandırılır ve gemi istif planında özel slot ayrılmasını gerektirir.",
        ],
        bullets: [
          "İş makineleri ve inşaat ekipmanları",
          "Trafo, jeneratör ve enerji ekipmanları",
          "Boru demetleri, çelik konstrüksiyon ve profil yükler",
          "Tekneler ve büyük sanayi parçaları",
        ],
      },
      {
        id: "sabitleme",
        heading: "Flat Rack Üzerinde Sabitleme Nasıl Yapılır",
        paragraphs: [
          "Flat rack üzerinde yük dört taraftan açığa maruz kaldığı için bağlama sistemi kapalı konteynere göre çok daha yüksek kapasitede kurulur. Yük tabana çelik halat, zincir veya yüksek kapasiteli spanzetlerle bağlanır, kayma yönlerine ahşap takoz ve gerekirse kaynaklı stoper uygulanır.",
          "Yükün ağırlık merkezi taban orta hattına getirilecek şekilde yerleştirme yapılır. Dengesiz yerleştirilen bir yük hem bağlama sistemini zorlar hem de terminalde elleçleme sırasında güvenlik riski doğurur. Hassas yüzeyli yüklerde halat temas noktalarına köşe koruyucu bentler eklenir.",
        ],
      },
      {
        id: "onay",
        heading: "Gemi Onayı ve Dokümantasyon",
        paragraphs: [
          "Flat rack yüklemeleri gemiye kabul edilmeden önce bağlama uygulamasının hat operatörünün ve geminin standartlarına uygun olması beklenir. Taşmalı yüklerde hat operatörü çoğu zaman yükleme öncesinde fotoğraflı bağlama dokümanı talep eder.",
          "Uygulama sonrasında düzenlenen lashing sertifikası ve fotoğraflı rapor, yükün gemi tarafından kabulünü kolaylaştırır ve varış limanında hasar iddiası oluşursa yükleyicinin uygulamasını belgeler.",
        ],
      },
    ],
    relatedServiceIds: ["flat-rack-lashing", "proje-kargo-lashing"],
    relatedGuideSlugs: ["konteyner-lashing-nedir", "proje-kargo-lashing-nedir", "lashing-sertifikasi-nedir"],
    ctaText: "Taşmalı yükünüzün gemi onaylı sabitlenmesi için flat rack lashing hizmetimizi inceleyin.",
  },
  {
    slug: "yuk-sabitleme-nedir",
    title: "Yük Sabitleme Nedir? Taşımacılıkta Yük Emniyeti Rehberi",
    seoTitle: "Yük Sabitleme Nedir? Taşımacılıkta Yük Emniyeti Rehberi | Capital Lashing",
    metaDescription: "Yük sabitleme nedir, hangi prensiplere dayanır? Sürtünme, bağlama ve destekleme yöntemleri, taşıma modlarına göre farklar ve yasal çerçeve hakkında kapsamlı rehber.",
    summary: "Yük sabitlemenin fiziksel prensipleri, temel yöntemleri ve taşıma modlarına göre farklılıkları üzerine kapsamlı bir kavram rehberi.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Yük Sabitleme Kavramı",
        paragraphs: [
          "Yük sabitleme, taşıma sırasında yüke etkiyen kuvvetlere karşı yükün konumunu koruyacak önlemlerin bütünüdür. Lashing yani bağlama bu önlemlerin en bilinen parçasıdır ancak sabitleme kavramı daha geniştir. Destekleme, takozlama, boşluk doldurma ve sürtünme artırma da sabitleme sisteminin bileşenleridir.",
          "Sabitlemenin amacı yükü hareketsiz kılmak değil, yükün taşıma aracıyla birlikte tek bir kütle gibi davranmasını sağlamaktır. Bu sağlandığında araca etkiyen kuvvetler yüke kontrollü biçimde aktarılır ve yük bağımsız hareket ederek enerji biriktiremez.",
        ],
      },
      {
        id: "fizik",
        heading: "Sabitlemenin Fiziksel Temeli",
        paragraphs: [
          "Taşıma sırasında yüke etkiyen temel kuvvet atalettir. Araç hızlanırken, yavaşlarken veya yön değiştirirken yük mevcut hareket durumunu korumak ister. Denizyolunda bu kuvvetlere dalga kaynaklı periyodik ivmeler eklenir ve etki süreleri karayoluna göre çok daha uzundur.",
          "Sabitleme sistemi bu kuvvetleri üç mekanizmayla karşılar. Sürtünme yükün zeminde kaymasına direnir, bağlama elemanları çekme kuvvetlerini karşılar, destek ve stoperler ise basma yönünde blokaj sağlar. İyi bir sabitleme planı bu üç mekanizmayı birlikte kullanır.",
        ],
        bullets: [
          "Sürtünme kuvveti zemin ile yük arasındaki kayma direncini belirler",
          "Bağlama elemanları çekme yönündeki kuvvetleri karşılar",
          "Destekleme ve stoperler basma yönünde blokaj oluşturur",
          "Boşluk doldurma yükün ivmelenerek darbe üretmesini engeller",
        ],
      },
      {
        id: "modlar",
        heading: "Taşıma Modlarına Göre Farklar",
        paragraphs: [
          "Karayolunda en kritik senaryo ani frendir ve en büyük kuvvet ileri yönde oluşur. Demiryolunda manevra sırasındaki vagon çarpışmaları uzunlamasına yüksek darbe kuvvetleri üretir. Denizyolunda ise enine yönde uzun süreli ve tekrarlayan yalpa kuvvetleri belirleyicidir.",
          "Bu farklar nedeniyle bir taşıma modu için yeterli olan sabitleme başka bir modda yetersiz kalabilir. Multimodal taşımalarda sabitleme planı en ağır koşulu esas alarak kurulur. Konteyner yüklemelerinde bu hesap çerçevesini CTU Code, gemi üstü yüklemelerde ise CSS Code tanımlar.",
        ],
      },
      {
        id: "sorumluluk",
        heading: "Sorumluluk ve Belgeleme",
        paragraphs: [
          "Yük sabitlemede sorumluluk zinciri yükleyiciden başlar. Konteyneri dolduran taraf yükün uygun biçimde sabitlendiğini beyan etmiş sayılır. Hasar durumunda yükleme anına ait fotoğraflar, bağlama planı ve tutanaklar sorumluluğun tespitinde ilk başvurulan kayıtlardır.",
          "Bu nedenle profesyonel sabitleme hizmeti yalnızca fiziksel uygulamadan ibaret değildir. Uygulamanın fotoğraflanması, kullanılan malzemelerin sertifikalarının saklanması ve raporlanması hizmetin ayrılmaz parçasıdır.",
        ],
      },
    ],
    relatedServiceIds: ["gemi-proje-lashing", "konteyner-lashing"],
    relatedGuideSlugs: ["lashing-nedir", "ctu-code-yuk-sabitleme", "css-code-nedir"],
    ctaText: "Yükünüzün taşıma moduna uygun sabitlenmesi için lashing hizmetlerimizi inceleyin.",
  },
  {
    slug: "shrink-wrap-paketleme-nedir",
    title: "Shrink Wrap Paketleme Nedir? Isıyla Daralan Film Rehberi",
    seoTitle: "Shrink Wrap Paketleme Nedir? Isıyla Daralan Film Rehberi | Capital Lashing",
    metaDescription: "Shrink wrap paketleme nedir, nasıl uygulanır, hangi yükler için uygundur? VCI katkılı film, brandalama ile farkları ve uygulama adımlarını anlatan teknik rehber.",
    summary: "Isıyla daralan film teknolojisinin çalışma prensibi, uygulama süreci ve hangi yükler için doğru tercih olduğu üzerine bir rehber.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Shrink Wrap Nedir",
        paragraphs: [
          "Shrink wrap, ısı uygulandığında büzülerek sarıldığı yüzeyin formunu alan polietilen esaslı bir paketleme filmidir. Film yükün üzerine serilir, ek yerleri kaynaklanır ve ısı tabancasıyla ısıtılarak gerginleştirilir. Soğuduğunda yükün üzerinde gergin ve sürekli bir kabuk oluşturur.",
          "Bu kabuk yükü su, nem, toz, tuzlu hava ve UV ışınlarından yalıtır. Deniz aşırı sevkiyatlarda ve uzun süreli açık alan depolamada tercih edilmesinin nedeni bu kesintisiz yalıtımdır.",
        ],
      },
      {
        id: "kullanim",
        heading: "Hangi Yüklerde Kullanılır",
        paragraphs: [
          "Shrink wrap özellikle korozyona duyarlı ve hassas yüzeyli yüklerde etkilidir. Uygulama yükün formuna birebir oturduğu için düzensiz geometrili ekipmanlarda da başarılı sonuç verir.",
        ],
        bullets: [
          "İhracata hazırlanan makine ve üretim hatları",
          "Kışlık depolamaya alınan tekne ve yatlar",
          "Elektrik panoları ve hassas elektronik içeren ekipmanlar",
          "Uzun süre açık sahada bekleyecek yedek parça ve komponentler",
        ],
      },
      {
        id: "vci",
        heading: "VCI Katkılı Film ile Korozyon Koruması",
        paragraphs: [
          "Metal yükler için filmin sağladığı fiziksel bariyer tek başına yeterli olmayabilir çünkü paket içinde kalan nem zamanla yoğuşarak korozyon başlatabilir. VCI yani uçucu korozyon önleyici katkılı filmler bu soruna karşı geliştirilmiştir.",
          "VCI katkısı film içinde buharlaşarak metal yüzeylerde moleküler düzeyde koruyucu bir tabaka oluşturur ve paket içi atmosferi korozyona elverişsiz hale getirir. Paket açıldığında bu tabaka kalıntı bırakmadan dağılır. Gerekli durumlarda paket içine nem alıcı torbalar ve havalandırma menfezleri de eklenir.",
        ],
      },
      {
        id: "fark",
        heading: "Shrink Wrap ile Brandalama Arasındaki Fark",
        paragraphs: [
          "Brandalama yeniden kullanılabilir PVC örtülerle yapılan bir koruma yöntemidir ve örtü yüke bağlama ipleri veya elastik sistemlerle tutturulur. Shrink wrap ise tek kullanımlıktır ve yüke ısıl işlemle oturduğu için rüzgarda çırpma yapmaz, su ve toz girişine açık birleşim noktası bırakmaz.",
          "Kısa süreli koruma ve tekrar erişim gereken durumlarda brandalama pratik bir çözümdür. Uzun süreli depolama, deniz aşırı sevkiyat ve yüksek değerli hassas yüklerde shrink wrap daha üstün yalıtım sağlar. İhtiyaç halinde shrink wrap uygulamasına fermuarlı kapı eklenerek paket bozulmadan içeri erişim mümkün olur.",
        ],
      },
    ],
    relatedServiceIds: ["shrink-wrap", "brandalama"],
    relatedGuideSlugs: ["yuk-sabitleme-nedir", "lashing-nedir", "konteyner-lashing-nedir"],
    ctaText: "Makineniz veya tekneniz için sızdırmaz paketleme gerekiyorsa shrink wrap hizmetimizi inceleyin.",
  },
  {
    slug: "lashing-sertifikasi-nedir",
    title: "Lashing Sertifikası Nedir? Yük Bağlama Belgelendirme Rehberi",
    seoTitle: "Lashing Sertifikası Nedir? Bağlama Belgelendirme Rehberi | Capital Lashing",
    metaDescription: "Lashing sertifikası nedir, kim düzenler, hangi bilgileri içerir? Sörvey onayı, sigorta ilişkisi ve ekipman sertifikaları ile farkını anlatan belgelendirme rehberi.",
    summary: "Lashing sertifikasının içeriği, düzenlenme süreci, sörvey onayı ve sigorta süreçlerindeki rolü üzerine bir belgelendirme rehberi.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "Lashing Sertifikası Nedir",
        paragraphs: [
          "Lashing sertifikası, bir yükün belirli bir standarda uygun olarak sabitlendiğini belgeleyen dokümandır. Uygulamayı yapan lashing firması tarafından düzenlenir ve çoğu durumda gemi kaptanı ile bağımsız sörvey firmasının onayını taşır.",
          "Sertifika tek başına bir kağıttan ibaret değildir. Arkasında bağlama planı, kullanılan ekipmanların test sertifikaları ve uygulamanın fotoğraflı kaydı bulunur. Bu bütünlük sertifikaya kanıt değeri kazandırır.",
        ],
      },
      {
        id: "icerik",
        heading: "Sertifikada Hangi Bilgiler Yer Alır",
        paragraphs: [
          "Standart bir lashing sertifikası uygulamanın kim tarafından, nerede, hangi yük için ve hangi kurallara göre yapıldığını izlenebilir biçimde ortaya koyar.",
        ],
        bullets: [
          "Yükün tanımı, ağırlığı ve boyutları",
          "Yükleme yeri, tarih ve taşıma bilgileri",
          "Uygulanan bağlama yöntemi ve referans alınan standart",
          "Kullanılan ekipmanların türü, adedi ve kapasite değerleri",
          "Uygulamayı yapan firma ve onaylayan tarafların imzaları",
        ],
      },
      {
        id: "kim-duzenler",
        heading: "Kim Düzenler ve Kim Onaylar",
        paragraphs: [
          "Sertifikayı uygulamayı gerçekleştiren lashing firması düzenler. Gemi üstü yüklemelerde gemi kaptanı uygulamayı Cargo Securing Manual çerçevesinde değerlendirir ve kabul eder. Yüksek değerli proje yüklerinde yük sahibi veya sigortacı bağımsız bir sörvey firmasını da sürece dahil eder.",
          "Sörveyör uygulamayı sahada denetler, bağlama planıyla karşılaştırır ve kendi raporunu düzenler. Bu üçlü yapı yani uygulayıcı, gemi ve bağımsız denetçi, belgenin güvenilirliğini karşılıklı kontrol ile güçlendirir.",
        ],
      },
      {
        id: "sigorta",
        heading: "Sigorta ve Hukuki Süreçlerdeki Rolü",
        paragraphs: [
          "Deniz taşımacılığında hasar oluştuğunda ilk sorulan soru yükün uygun şekilde sabitlenip sabitlenmediğidir. Lashing sertifikası ve ekindeki fotoğraflı rapor, yükleyicinin özen yükümlülüğünü yerine getirdiğini gösteren temel kanıttır.",
          "Sertifikasız yapılan bağlamalarda hasar tazmini süreci yükleyici aleyhine işleyebilir. Bu nedenle nakliye sözleşmelerinde ve sigorta poliçelerinde sertifikalı lashing uygulaması giderek daha sık şart olarak yer almaktadır.",
        ],
      },
      {
        id: "ekipman-fark",
        heading: "Ekipman Sertifikası ile Farkı",
        paragraphs: [
          "Lashing sertifikası ile ekipman sertifikası sıkça karıştırılır. Ekipman sertifikası bir halatın, zincirin veya spanzetin üretici tarafından test edildiğini ve beyan edilen kapasiteyi taşıdığını belgeler. Lashing sertifikası ise bu ekipmanlarla yapılan uygulamanın bütününü belgeler.",
          "Geçerli bir lashing sertifikasının arkasında her zaman geçerli ekipman sertifikaları bulunmalıdır. Test belgesi olmayan ekipmanla yapılan bir bağlama, uygulama ne kadar özenli olursa olsun belgelendirme zincirini eksik bırakır.",
        ],
      },
    ],
    relatedServiceIds: ["gemi-proje-lashing", "flat-rack-lashing"],
    relatedGuideSlugs: ["lashing-nedir", "css-code-nedir", "proje-kargo-lashing-nedir"],
    ctaText: "Operasyon sonunda sörvey onaylı sertifika ve fotoğraflı rapor için gemi proje lashing hizmetimizi inceleyin.",
  },
  {
    slug: "css-code-nedir",
    title: "CSS Code Nedir? Gemilerde Yük İstif ve Sabitleme Kuralları",
    seoTitle: "CSS Code Nedir? Gemide Yük İstif ve Sabitleme Kuralları | Capital Lashing",
    metaDescription: "IMO CSS Code nedir, hangi kuralları içerir? Cargo Securing Manual, bağlama hesap yöntemi ve kuralların saha uygulamasına etkisini anlatan teknik rehber.",
    summary: "IMO tarafından yayımlanan CSS Code kurallarının kapsamı, Cargo Securing Manual ilişkisi ve saha uygulamalarına etkisi.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "CSS Code Nedir",
        paragraphs: [
          "CSS Code, açık adıyla Code of Safe Practice for Cargo Stowage and Securing, Uluslararası Denizcilik Örgütü IMO tarafından yayımlanan ve gemilerde yük istifleme ile sabitleme uygulamalarının güvenli yürütülmesini düzenleyen kurallar bütünüdür.",
          "Kod, konteyner dışı yüklerin yani breakbulk ve proje kargoların gemi üzerinde nasıl istifleneceğini ve sabitleneceğini ele alır. Tekerlekli araçlardan çelik rulolara, ağır proje parçalarından kereste yüklerine kadar geniş bir yük yelpazesi için ekler halinde özel hükümler içerir.",
        ],
      },
      {
        id: "csm",
        heading: "Cargo Securing Manual ile İlişkisi",
        paragraphs: [
          "CSS Code kapsamındaki en önemli araçlardan biri Cargo Securing Manual yani CSM dokümanıdır. Her yük gemisinin bayrak devleti idaresi tarafından onaylanmış bir CSM dokümanı bulundurması zorunludur.",
          "CSM, o gemiye özgü bağlantı noktalarını, gemide bulunan sabitleme ekipmanının envanterini ve kapasitelerini, standart yük tipleri için bağlama düzenlerini tanımlar. Sahada yapılan her lashing uygulaması geminin CSM dokümanıyla uyumlu olmak zorundadır. Bu nedenle profesyonel lashing ekipleri operasyona başlamadan önce CSM gerekliliklerini gemi zabitleriyle birlikte gözden geçirir.",
        ],
      },
      {
        id: "hesap",
        heading: "Bağlama Hesap Yöntemi",
        paragraphs: [
          "CSS Code ekleri, standart dışı yükler için bağlama kuvvetlerinin hesaplanmasında kullanılan yarı ampirik bir yöntem tanımlar. Yöntem geminin boyu, genişliği, servis hızı ve yükün gemi üzerindeki konumuna göre yüke etkiyecek enine, boyuna ve düşey ivmeleri tablo değerleriyle belirler.",
          "Hesaplanan kuvvetler bağlama sisteminin toplam etkin kapasitesiyle karşılaştırılır. Her bağlama elemanının kapasitesi bağlanma açısına göre azaltılarak hesaba katılır. Bu yaklaşım sahada kaç adet halat veya zincirin hangi açıyla kullanılacağını mühendislik temeline oturtur.",
        ],
        bullets: [
          "Geminin boyutları ve hızına göre ivme katsayılarının belirlenmesi",
          "Yükün konumuna göre enine, boyuna ve düşey kuvvetlerin hesabı",
          "Bağlama elemanlarının açıya göre etkin kapasitelerinin bulunması",
          "Toplam kapasitenin gereken değerle karşılaştırılarak planın doğrulanması",
        ],
      },
      {
        id: "uygulama",
        heading: "Kuralların Saha Uygulamasına Etkisi",
        paragraphs: [
          "CSS Code sahada üç somut sonuç üretir. Birincisi her bağlama uygulamasının hesaplanabilir ve denetlenebilir olmasıdır. İkincisi kullanılan tüm ekipmanların belgeli kapasite değerleri üzerinden seçilmesidir. Üçüncüsü ise uygulamanın gemi kaptanı ve sörveyör tarafından ortak bir referansa göre değerlendirilebilmesidir.",
          "Yük sahipleri için pratik anlamı şudur. CSS Code uyumlu çalışan bir lashing firması, uygulamasını uluslararası kabul gören bir standarda dayandırır ve bu durum hem geminin yükü kabulünü hem de sigorta süreçlerini kolaylaştırır.",
        ],
      },
    ],
    relatedServiceIds: ["gemi-proje-lashing", "proje-kargo-lashing"],
    relatedGuideSlugs: ["ctu-code-yuk-sabitleme", "lashing-nedir", "lashing-sertifikasi-nedir"],
    ctaText: "CSS Code uyumlu bağlama planı ve uygulaması için gemi proje lashing hizmetimizi inceleyin.",
  },
  {
    slug: "ctu-code-yuk-sabitleme",
    title: "CTU Code Nedir? Konteyner Yükleme ve Sabitleme Kuralları",
    seoTitle: "CTU Code Nedir? Konteyner Yükleme Kuralları Rehberi | Capital Lashing",
    metaDescription: "CTU Code nedir, konteyner yüklemede hangi kuralları getirir? İvme katsayıları, ağırlık dağılımı, sabitleme yöntemleri ve yükleyici sorumluluğunu anlatan rehber.",
    summary: "IMO, ILO ve UNECE ortak yayını CTU Code kurallarının konteyner yükleme ve sabitleme uygulamalarına getirdiği çerçeve.",
    datePublished: "2026-08-10",
    sections: [
      {
        id: "tanim",
        heading: "CTU Code Nedir",
        paragraphs: [
          "CTU Code, açık adıyla Code of Practice for Packing of Cargo Transport Units, konteyner ve benzeri yük taşıma birimlerinin doldurulmasına ilişkin uluslararası uygulama kurallarıdır. IMO, Uluslararası Çalışma Örgütü ILO ve Birleşmiş Milletler Avrupa Ekonomik Komisyonu UNECE tarafından ortak yayımlanmıştır.",
          "Kod yalnızca deniz konteynerlerini değil, karayolu treylerleri ve demiryolu vagonları gibi tüm kapalı yük taşıma birimlerini kapsar. Amaç, taşıma biriminin doldurulduğu noktada yapılan hataların taşıma zincirinin ilerleyen halkalarında kaza ve hasara dönüşmesini önlemektir.",
        ],
      },
      {
        id: "kapsam",
        heading: "Kuralların Kapsamı",
        paragraphs: [
          "CTU Code yükleme öncesinden boşaltmaya kadar tüm süreci ele alır. Konteynerin yükleme öncesi kontrolü, ağırlık dağılımı, istif düzeni, sabitleme yöntemleri ve tehlikeli yüklere ilişkin ek önlemler kodun ana başlıklarıdır.",
        ],
        bullets: [
          "Konteynerin yapısal sağlamlık ve temizlik kontrolü",
          "Ağırlığın taban alanına dengeli dağıtılması ve ağırlık merkezinin düşük tutulması",
          "Yük kalemlerinin birbirine ve konteynere göre istif düzeni",
          "Bağlama, destekleme ve boşluk doldurma yöntemlerinin seçimi",
          "Beyan edilen brüt ağırlık ile gerçek ağırlığın tutarlılığı",
        ],
      },
      {
        id: "ivme",
        heading: "İvme Katsayıları ve Hesap Yaklaşımı",
        paragraphs: [
          "CTU Code her taşıma modu için yüke etkiyen ivme katsayılarını tanımlar. Denizyolunda enine yönde, karayolunda ise ileri yönde en yüksek değerler geçerlidir. Multimodal taşımada sabitleme, güzergahtaki en ağır koşula göre kurulur.",
          "Kod ayrıca sürtünme katsayılarına ilişkin referans değerler verir ve bağlama elemanlarının kapasite hesabında hangi güvenlik faktörlerinin uygulanacağını gösterir. Bu çerçeve konteyner içi sabitlemeyi tahmine dayalı bir işçilikten hesaba dayalı bir uygulamaya dönüştürür.",
        ],
      },
      {
        id: "sorumluluk",
        heading: "Yükleyicinin Sorumluluğu",
        paragraphs: [
          "CTU Code, konteyneri dolduran tarafı sürecin kritik sorumlusu olarak tanımlar. Konteyner kapandıktan sonra içerideki uygulamayı taşıma zincirindeki diğer taraflar göremez. Bu nedenle yükleme noktasında yapılan sabitleme, fotoğraf ve tutanaklarla belgelenmelidir.",
          "Varış noktasında hasar tespit edildiğinde CTU Code, sorumluluğun değerlendirilmesinde referans alınan temel dokümandır. Kurallara uygun yükleme yapan ve bunu belgeleyen yükleyici, hasar iddialarına karşı güçlü bir konumda olur.",
        ],
      },
    ],
    relatedServiceIds: ["konteyner-lashing", "flat-rack-lashing"],
    relatedGuideSlugs: ["konteyner-lashing-nedir", "css-code-nedir", "yuk-sabitleme-nedir"],
    ctaText: "Konteyner dolumlarınızın CTU Code uyumlu yapılması için konteyner lashing hizmetimizi inceleyin.",
  },
];

export function getGuidesForService(serviceId: string): GuideData[] {
  return guidesData.filter((g) => g.relatedServiceIds.includes(serviceId));
}
