import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { locationsData } from "@/data/locations";
import { useEffect } from "react";
import { motion } from "@/lib/motion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.webp";

export default function ServiceAreas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title="Hizmet Bölgeleri | İstanbul, Ambarlı, Tekirdağ, Aliağa, Mersin - Capital Lashing"
        description="Capital Lashing hizmet bölgeleri. İstanbul, Ambarlı, Haydarpaşa, Tekirdağ, İzmir Aliağa ve Mersin bölgelerinde lashing, yük sabitleme ve paketleme operasyonları."
        canonical="https://capitallashing.com/hizmet-bolgeleri"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "Hizmet Bölgeleri", url: "https://capitallashing.com/hizmet-bolgeleri" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Capital Lashing hizmet bölgeleri" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-28">
          <nav aria-label="breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span className="text-primary" aria-hidden="true">•</span>
            <span className="text-primary font-bold" aria-current="page">Hizmet Bölgeleri</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Capital Lashing Hizmet Bölgeleri
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            İstanbul merkezli ekiplerimizle Marmara, Ege ve Akdeniz'deki liman bölgelerinde lashing ve yük sabitleme operasyonları yürütüyoruz.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                Bulunduğunuz Bölgede Yük Sabitleme
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Aşağıdaki bölgelerde fabrika, depo ve dolum sahalarına giderek yerinde hizmet veriyoruz. Bölgenizi seçin, o bölgede sunduğumuz hizmetleri ve operasyon modelimizi inceleyin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationsData.map((location, i) => (
                <motion.div
                  key={location.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/lashing/${location.slug}`} className="block bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full overflow-hidden">
                      <div className="p-8">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                          <MapPin className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                          {location.name} Lashing Hizmetleri
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {location.intro}
                        </p>
                        <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 uppercase tracking-wide">
                          Bölge Detayları
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 bg-slate-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase mb-4">
                  Listede Olmayan Bir Bölgede misiniz?
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                  Türkiye'nin diğer liman ve sanayi bölgelerindeki projeleriniz için de operasyon planlayabiliriz. Yük bilgilerinizi paylaşın, birlikte değerlendirelim.
                </p>
                <Link href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold uppercase tracking-wide hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                    Bize Ulaşın <ArrowRight className="h-5 w-5" />
                  </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
