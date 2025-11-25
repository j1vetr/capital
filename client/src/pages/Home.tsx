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
        
        {/* Operational Flow - Redesigned Blue Focus */}
        <section className="py-32 bg-primary relative overflow-hidden">
          {/* Bg decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
          
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">
             <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-white mb-6">
                Nasıl Çalışıyoruz?
              </h2>
              <div className="h-1.5 w-24 bg-white rounded-full mb-6 opacity-50" />
              <p className="text-blue-50 text-xl leading-relaxed">
                Her yük bizim için özel bir projedir. Uluslararası standartlarda, planlı ve raporlanabilir iş akışımız.
              </p>
            </div>

            <div className="relative mb-12">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Keşif & Analiz", desc: "Yükün teknik özelliklerinin ve risklerin incelenmesi." },
                  { step: "02", title: "Planlama", desc: "Mühendislik hesapları ve ekipman seçimi." },
                  { step: "03", title: "Uygulama", desc: "Sertifikalı ekibimizle güvenli sabitleme." },
                  { step: "04", title: "Raporlama", desc: "Fotoğraflı detaylı teknik rapor sunumu." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center group hover:-translate-y-3 transition-all duration-300 hover:bg-white hover:shadow-2xl relative overflow-hidden">
                    <div className="w-20 h-20 bg-white text-primary rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-white uppercase group-hover:text-slate-900 transition-colors">{item.title}</h3>
                    <p className="text-blue-50 text-sm leading-relaxed group-hover:text-slate-500 transition-colors">{item.desc}</p>
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
