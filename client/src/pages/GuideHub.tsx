import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { guidesData } from "@/data/guides";
import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/port_workers_checking_cargo_safety.webp";

export default function GuideHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title="Lashing Rehberi | Yük Sabitleme ve Denizcilik Bilgi Merkezi - Capital Lashing"
        description="Lashing, yük sabitleme, CSS Code, CTU Code ve paketleme konularında teknik rehberler. Deniz taşımacılığında yük emniyeti hakkında merak edilenler tek merkezde."
        canonical="https://capitallashing.com/rehber"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "Rehber", url: "https://capitallashing.com/rehber" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Lashing ve yük sabitleme rehberi" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-28">
          <nav aria-label="breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span className="text-primary" aria-hidden="true">•</span>
            <span className="text-primary font-bold" aria-current="page">Rehber</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Lashing Rehberi
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Yük sabitleme, bağlama kuralları ve paketleme yöntemleri hakkında merak edilenleri saha tecrübemizle yazdığımız teknik rehberlerde bulun.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                Yük Emniyeti Bilgi Merkezi
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Lashing nedir sorusundan CSS Code ve CTU Code kurallarına kadar deniz taşımacılığında yük emniyetinin temel konularını bu rehberlerde açıklıyoruz. Her rehber gerçek operasyon pratiğine dayanır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guidesData.map((guide, i) => (
                <motion.div
                  key={guide.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link href={`/rehber/${guide.slug}`} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full p-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {guide.summary}
                    </p>
                    <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 uppercase tracking-wide">
                      Rehberi Oku
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
