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
        
        {/* Operational Flow - Redesigned */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          {/* Top Divider (Optional, but let's focus on bottom for now or keep it clean) */}
          
          {/* Bg decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
          
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">
             <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-slate-900 mb-6">
                Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Çalışıyoruz?</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6" />
              <p className="text-slate-500 text-xl leading-relaxed">
                Her yük bizim için özel bir projedir. Uluslararası standartlarda, planlı ve raporlanabilir iş akışımız.
              </p>
            </div>

            <div className="relative mb-12">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Keşif & Analiz", desc: "Yükün teknik özelliklerinin ve risklerin incelenmesi." },
                  { step: "02", title: "Planlama", desc: "Mühendislik hesapları ve ekipman seçimi." },
                  { step: "03", title: "Uygulama", desc: "Sertifikalı ekibimizle güvenli sabitleme." },
                  { step: "04", title: "Raporlama", desc: "Fotoğraflı detaylı teknik rapor sunumu." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center group hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/100 transition-all duration-500" />
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 text-primary rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 uppercase group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-1 z-20">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
               <path d="M0 60L48 65C96 70 192 80 288 81.7C384 83 480 77 576 65C672 53 768 37 864 38.3C960 40 1056 60 1152 68.3C1248 77 1344 73 1392 71.7L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white"/>
            </svg>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
