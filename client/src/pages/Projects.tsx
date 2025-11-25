import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

// Using the first project image as hero for now, or we can keep the generated one if preferred.
// For consistency with the user request, I'll use a high quality real image for the hero if possible, 
// but the previous hero was fine. Let's stick to the generated hero for the top to keep it high res, 
// or switch to a specific good real photo. Let's use a real one: Gemi Proje Lashing 1 is usually good.
const heroImage = "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_1.webp";

export default function Projects() {
  useEffect(() => {
    document.title = "Referanslar & Projeler | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    // Gemi Proje Lashing (7 images available)
    {
      id: 101,
      title: "Endüstriyel Silindir Tank Lashing",
      category: "Gemi Proje Lashing",
      image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_1.webp",
      date: "Kasım 2024",
      desc: "85 tonluk endüstriyel tankın gemi güvertesine (on-deck) özel kaynaklı stoperler ve çelik halatlarla sabitlenmesi."
    },
    {
      id: 102,
      title: "Trafo ve Jeneratör Sabitleme",
      category: "Gemi Proje Lashing",
      image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_2.webp",
      date: "Ekim 2024",
      desc: "Enerji santrali projesi için 120 tonluk trafonun gemi ambarına (under-deck) yüklenmesi ve zincir lashing uygulaması."
    },
    {
      id: 103,
      title: "Ağır İş Makinesi Sevkiyatı",
      category: "Gemi Proje Lashing",
      image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_3.webp",
      date: "Eylül 2024",
      desc: "Yurtdışı inşaat projesi için ekskavatör ve vinçlerin gemi güvertesinde güvenli bir şekilde konumlandırılması."
    },
    {
      id: 104,
      title: "Boru Hattı Ekipmanları",
      category: "Gemi Proje Lashing",
      image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_4.webp",
      date: "Ağustos 2024",
      desc: "Doğalgaz boru hattı projesi için geniş çaplı boruların istiflenmesi ve kaymaya karşı takozlama operasyonu."
    },

    // Tekne & Yat Lashing (7 images available)
    {
      id: 201,
      title: "45m Süper Yat Transferi",
      category: "Tekne & Yat Lashing",
      image: "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_1.webp",
      date: "Ekim 2024",
      desc: "Özel üretim süper yatın okyanus aşırı transferi için gemi güvertesine özel beşik sistemi (cradle) ile sabitlenmesi."
    },
    {
      id: 202,
      title: "Motoryat İhracat Yüklemesi",
      category: "Tekne & Yat Lashing",
      image: "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_2.webp",
      date: "Eylül 2024",
      desc: "Avrupa'ya ihraç edilen lüks motoryatın hasarsız teslimat için yumuşak sapanlar ve shrink wrap ile korunması."
    },
    {
      id: 203,
      title: "Yelkenli Tekne Lashing",
      category: "Tekne & Yat Lashing",
      image: "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_3.webp",
      date: "Ağustos 2024",
      desc: "Direkleri demonte edilen yelkenli teknenin gemi ambarına güvenli bir şekilde yerleştirilmesi ve sabitlenmesi."
    },
    {
      id: 204,
      title: "Katamaran Taşıma Operasyonu",
      category: "Tekne & Yat Lashing",
      image: "/assets/images/services/tekne-yat-lashing/tekne-yat-lashing_4.webp",
      date: "Temmuz 2024",
      desc: "Geniş gövdeli katamaranın gemi güvertesinde özel destek noktalarından bağlanarak emniyete alınması."
    },

    // Flat Rack Lashing (9 images available)
    {
      id: 301,
      title: "Gabari Dışı Makine (OOG)",
      category: "Flat Rack Lashing",
      image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_1.webp",
      date: "Kasım 2024",
      desc: "Yüksekliği ve genişliği standart konteyneri aşan sanayi makinesinin Flat Rack üzerine sabitlenmesi."
    },
    {
      id: 302,
      title: "Mermer Blok İhracatı",
      category: "Flat Rack Lashing",
      image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_2.webp",
      date: "Ekim 2024",
      desc: "Ağır tonajlı mermer blokların ağırlık merkezi hesaplanarak Flat Rack konteynere dengeli yüklenmesi."
    },
    {
      id: 303,
      title: "Sanayi Fırını Taşıması",
      category: "Flat Rack Lashing",
      image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_3.webp",
      date: "Eylül 2024",
      desc: "Tek parça halindeki büyük sanayi fırınının çelik halat ve gerdirmelerle (turnbuckle) sabitlenmesi."
    },
    {
      id: 304,
      title: "İş Makinesi Parçaları",
      category: "Flat Rack Lashing",
      image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_4.webp",
      date: "Ağustos 2024",
      desc: "Demonte iş makinesi parçalarının deniz aşırı sevkiyat için Flat Rack konteynere lashinglenmesi."
    },

    // Proje Kargo Lashing (2 images available)
    {
      id: 401,
      title: "Rüzgar Türbini Kanadı",
      category: "Proje Kargo Lashing",
      image: "/assets/images/services/proje-kargo-lashing/proje-kargo-lashing_1.webp",
      date: "Ekim 2024",
      desc: "Hassas ve uzun rüzgar türbini kanadının özel taşıma aparatları ile hasarsız sabitlenmesi."
    },
    {
      id: 402,
      title: "Fabrika Kurulum Ekipmanları",
      category: "Proje Kargo Lashing",
      image: "/assets/images/services/proje-kargo-lashing/proje-kargo-lashing_2.webp",
      date: "Eylül 2024",
      desc: "Komple fabrika taşınma projesi kapsamında ağır pres makinelerinin proje kargo standartlarında lashingi."
    },

    // Konteyner Lashing (7 images available)
    {
      id: 501,
      title: "Varilli Kimyasal Yükleme",
      category: "Konteyner Lashing",
      image: "/assets/images/services/konteyner-lashing/konteyner-lashing_1.webp",
      date: "Kasım 2024",
      desc: "Tehlikeli madde içeren varillerin konteyner içinde devrilmeye karşı spanzet ve hava yastıklarıyla sabitlenmesi."
    },
    {
      id: 502,
      title: "Otomobil Konteyner Yüklemesi",
      category: "Konteyner Lashing",
      image: "/assets/images/services/konteyner-lashing/konteyner-lashing_2.webp",
      date: "Ekim 2024",
      desc: "İhracat araçlarının konteyner içine özel takozlama ve lastik bağlama sistemleriyle yerleştirilmesi."
    },
    {
      id: 503,
      title: "Paletli Gıda Ürünleri",
      category: "Konteyner Lashing",
      image: "/assets/images/services/konteyner-lashing/konteyner-lashing_3.webp",
      date: "Eylül 2024",
      desc: "Hassas gıda ürünlerinin konteyner içinde hareket etmesini önlemek için kapı önü güvenlik ağı ve airbag uygulaması."
    },

    // Shrink Wrap (7 images available)
    {
      id: 601,
      title: "Helikopter Shrink Paketleme",
      category: "Shrink Wrap",
      image: "/assets/images/services/shrink-wrap/shrink-wrap_1.webp",
      date: "Kasım 2024",
      desc: "Askeri helikopterin deniz yoluyla sevkiyatı öncesi korozyona karşı VCI özellikli shrink film ile kaplanması."
    },
    {
      id: 602,
      title: "CNC Tezgahı Koruma",
      category: "Shrink Wrap",
      image: "/assets/images/services/shrink-wrap/shrink-wrap_2.webp",
      date: "Ekim 2024",
      desc: "Hassas elektronik aksama sahip CNC tezgahının nem ve toza karşı vakumlu paketlenmesi."
    },
    {
      id: 603,
      title: "Tekne Kışlama Paketlemesi",
      category: "Shrink Wrap",
      image: "/assets/images/services/shrink-wrap/shrink-wrap_3.webp",
      date: "Eylül 2024",
      desc: "Kış sezonu için karaya çekilen teknenin dış etkenlerden korunması amacıyla komple shrink kaplanması."
    },

    // Brandalama (4 images available)
    {
      id: 701,
      title: "Açık Yük Brandalama",
      category: "Brandalama",
      image: "/assets/images/services/brandalama/brandalama_1.webp",
      date: "Ekim 2024",
      desc: "Gemi güvertesinde taşınacak sandıklı yüklerin deniz suyu ve yağmurdan korunması için ağır hizmet branda uygulaması."
    },
    {
      id: 702,
      title: "Stok Sahası Koruma",
      category: "Brandalama",
      image: "/assets/images/services/brandalama/brandalama_2.webp",
      date: "Eylül 2024",
      desc: "Liman sahasında bekleyen demir-çelik ürünlerinin korozyona karşı özel brandalarla örtülmesi."
    },

    // Sandıklama (4 images available)
    {
      id: 801,
      title: "Yedek Parça Sandıklama",
      category: "Sandıklama",
      image: "/assets/images/services/sandiklama/sandiklama_1.webp",
      date: "Kasım 2024",
      desc: "Otomotiv yedek parçalarının ISPM-15 standartlarında üretilmiş ahşap sandıklara yerleştirilmesi."
    },
    {
      id: 802,
      title: "Hassas Cihaz Paketleme",
      category: "Sandıklama",
      image: "/assets/images/services/sandiklama/sandiklama_2.webp",
      date: "Ekim 2024",
      desc: "Laboratuvar cihazlarının darbe emici malzemelerle desteklenerek kapalı sandık içine paketlenmesi."
    },
    
    // Extra items to reach ~25
    {
      id: 105,
      title: "Gemi Güvertesi Boru Yüklemesi",
      category: "Gemi Proje Lashing",
      image: "/assets/images/services/gemi-proje-lashing/gemi-proje-lashing_5.webp",
      date: "Temmuz 2024",
      desc: "Büyük çaplı çelik boruların gemi güvertesinde istiflenmesi ve çelik halatlarla lashing işlemi."
    },
    {
      id: 305,
      title: "Traktör Filosu Flat Rack",
      category: "Flat Rack Lashing",
      image: "/assets/images/services/flat-rack-lashing/flat-rack-lashing_5.webp",
      date: "Temmuz 2024",
      desc: "İhracat traktörlerinin tekerleklerinden özel aparatlarla Flat Rack konteynere sabitlenmesi."
    },
    {
      id: 504,
      title: "Kumaş Ruloları Yükleme",
      category: "Konteyner Lashing",
      image: "/assets/images/services/konteyner-lashing/konteyner-lashing_4.webp",
      date: "Ağustos 2024",
      desc: "Tekstil bobinlerinin konteyner içine dikey istiflenmesi ve devrilmeye karşı desteklenmesi."
    },
    {
      id: 604,
      title: "Modüler Yapı Shrink",
      category: "Shrink Wrap",
      image: "/assets/images/services/shrink-wrap/shrink-wrap_4.webp",
      date: "Ağustos 2024",
      desc: "Prefabrik yapı modüllerinin nakliye sırasında kirlenmemesi için shrink wrap ile kaplanması."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
              <Link href="/">
                <a className="hover:text-primary transition-colors">Ana Sayfa</a>
              </Link>
              <span className="text-primary">•</span>
              <span className="text-primary font-bold">Projeler</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Referans Projeler
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dünya çapında başarıyla tamamladığımız zorlu operasyonlardan seçkiler.
          </p>
        </div>
      </div>

      <main className="flex-grow container px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider backdrop-blur-sm shadow-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors font-heading leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors uppercase tracking-wide mt-auto">
                    Detaylı Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
