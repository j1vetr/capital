import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { SearchCheck, Ruler, HardHat, BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SEO
        title="Capital Lashing & Port Services | İstanbul Lashing Firması – Yük Sabitleme"
        description="İstanbul merkezli lashing ve liman hizmetleri firması. Gemi proje lashing, konteyner sabitleme, shrink wrap, sandıklama. DNV-GL onaylı ekipman, 7/24 operasyon. Teklif alın."
        canonical="https://capitallashing.com"
        type="local_business"
        breadcrumbs={[{ name: "Ana Sayfa", url: "https://capitallashing.com" }]}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Stats Section - Floating Overlay */}
        <div className="relative -mt-24 z-20 container px-4 md:px-6">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100/50">
              <div className="flex flex-col items-center p-2 group hover:-translate-y-1 transition-transform duration-300">
                <span className="font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-600 mb-2">10+</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col items-center p-2 group hover:-translate-y-1 transition-transform duration-300">
                <span className="font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-600 mb-2">5K+</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">Operasyon</span>
              </div>
              <div className="flex flex-col items-center p-2 group hover:-translate-y-1 transition-transform duration-300">
                <span className="font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-600 mb-2">%100</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">Memnuniyet</span>
              </div>
              <div className="flex flex-col items-center p-2 group hover:-translate-y-1 transition-transform duration-300">
                <span className="font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-600 mb-2">7/24</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary transition-colors">Hizmet</span>
              </div>
            </div>
          </div>
        </div>

        <ServiceGrid />
        <Features />
        
        {/* ── Nasıl Çalışıyoruz – Award-level redesign ── */}
        <section className="py-28 md:py-40 bg-slate-950 relative overflow-hidden">

          {/* Subtle dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#38aae1_1px,transparent_1px)] [background-size:52px_52px] opacity-[0.04] pointer-events-none" />

          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">

            {/* ── Header ── */}
            <motion.div
              className="flex flex-col items-center text-center mb-20 md:mb-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase leading-none">
                <span className="text-white">Nasıl </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">
                  Çalışıyoruz?
                </span>
              </h2>
            </motion.div>

            {/* ── Steps ── */}
            {(() => {
              const steps = [
                {
                  num: "01",
                  icon: SearchCheck,
                  title: "Talep & Keşif",
                  desc: "Yük detaylarınızı alır, gerekirse sahaya giderek ölçüm ve keşif yaparız. İlk temasınızdan itibaren 24 saat içinde geri dönüş garantisi.",
                  color: "from-primary to-sky-400",
                },
                {
                  num: "02",
                  icon: Ruler,
                  title: "Mühendislik",
                  desc: "IMO CSS Code'a uygun lashing hesaplamaları ve malzeme planı hazırlanır. DNV-GL onaylı donanım seçimi yapılır.",
                  color: "from-sky-400 to-blue-500",
                },
                {
                  num: "03",
                  icon: HardHat,
                  title: "Operasyon",
                  desc: "Sertifikalı lasher ekibimiz belirtilen saatte sahadaki uygulamayı eksiksiz gerçekleştirir. 7/24 operasyon kapasitesi.",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  num: "04",
                  icon: BadgeCheck,
                  title: "Sertifikasyon",
                  desc: "Operasyon sonrası fotoğraflı rapor ve uluslararası geçerli lashing sertifikası dijital olarak teslim edilir.",
                  color: "from-indigo-500 to-primary",
                },
              ];

              return (
                <div className="relative">

                  {/* Connector line — desktop only */}
                  <div className="hidden lg:block absolute top-[56px] left-[12.5%] right-[12.5%] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/60 to-primary/0"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>

                  {/* Vertical connector — mobile/tablet */}
                  <div className="lg:hidden absolute left-8 sm:left-[10%] top-16 bottom-16 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
                    {steps.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={step.num}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                          className="group relative flex flex-col lg:items-center lg:text-center pl-20 sm:pl-24 lg:pl-0"
                        >
                          {/* Giant watermark number */}
                          <span
                            className="absolute -top-4 lg:top-auto lg:-bottom-6 left-0 lg:left-1/2 lg:-translate-x-1/2 text-[96px] lg:text-[140px] font-black leading-none select-none pointer-events-none text-white/[0.025] group-hover:text-white/[0.06] transition-colors duration-700"
                          >
                            {step.num}
                          </span>

                          {/* Icon circle — sits on the connector line */}
                          <div className="relative mb-8 self-start lg:self-center">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:shadow-primary/40 transition-all duration-500`}>
                              <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                            </div>
                            {/* Pulse ring */}
                            <span className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Step label */}
                          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/60 mb-2 group-hover:text-primary transition-colors duration-300">
                            Adım {step.num}
                          </span>

                          {/* Title */}
                          <h3 className="text-xl font-heading font-black uppercase text-white mb-3 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>

                          {/* Divider */}
                          <div className="w-8 h-0.5 bg-primary/40 mb-4 group-hover:w-16 group-hover:bg-primary transition-all duration-500 lg:mx-auto" />

                          {/* Description */}
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                            {step.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
