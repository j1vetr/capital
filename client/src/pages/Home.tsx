import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Capital Lashing & Port Services | Profesyonel Yük Sabitleme";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Stats Section - Redesigned to be contained */}
        <div className="relative -mt-10 z-20 container px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
              <div className="flex flex-col items-center p-2">
                <span className="font-black text-4xl md:text-5xl text-primary mb-2">10+</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <span className="font-black text-4xl md:text-5xl text-primary mb-2">5K+</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold">Operasyon</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <span className="font-black text-4xl md:text-5xl text-primary mb-2">%100</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold">Memnuniyet</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <span className="font-black text-4xl md:text-5xl text-primary mb-2">7/24</span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold">Hizmet</span>
              </div>
            </div>
          </div>
        </div>

        <ServiceGrid />
        <Features />
        
        {/* Operational Flow - Redesigned */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-slate-900 mb-6">
                Nasıl <span className="text-primary">Çalışıyoruz?</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mb-6" />
              <p className="text-slate-500 text-xl leading-relaxed">
                Her yük bizim için özel bir projedir. Uluslararası standartlarda, planlı ve raporlanabilir iş akışımız.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Keşif & Analiz", desc: "Yükün teknik özelliklerinin ve risklerin incelenmesi." },
                  { step: "02", title: "Planlama", desc: "Mühendislik hesapları ve ekipman seçimi." },
                  { step: "03", title: "Uygulama", desc: "Sertifikalı ekibimizle güvenli sabitleme." },
                  { step: "04", title: "Raporlama", desc: "Fotoğraflı detaylı teknik rapor sunumu." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 uppercase">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
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
