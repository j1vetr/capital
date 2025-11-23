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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Bar - Quick Stats */}
        <div className="bg-primary py-8 text-primary-foreground">
          <div className="container flex flex-wrap justify-center md:justify-between gap-8 px-4 md:px-6 text-center md:text-left">
            <div className="flex flex-col">
              <span className="font-bold text-3xl font-heading">10+</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Yıllık Tecrübe</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl font-heading">5000+</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Başarılı Operasyon</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl font-heading">%100</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Müşteri Memnuniyeti</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl font-heading">7/24</span>
              <span className="text-sm uppercase tracking-wider opacity-80">Kesintisiz Hizmet</span>
            </div>
          </div>
        </div>

        <ServiceGrid />
        <Features />
        
        {/* Operational Flow */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-foreground">
                Operasyon <span className="text-primary">Sürecimiz</span>
              </h2>
              <p className="text-muted-foreground mt-4">Profesyonel ve planlı çalışma sistemimiz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Keşif & Analiz", desc: "Yükün teknik özelliklerinin ve risklerin yerinde incelenmesi." },
                { step: "02", title: "Planlama", desc: "En uygun lashing malzemelerinin ve yönteminin mühendislik hesaplarıyla belirlenmesi." },
                { step: "03", title: "Uygulama", desc: "Sertifikalı ekibimizle uluslararası standartlarda sabitleme işleminin yapılması." },
                { step: "04", title: "Kontrol & Rapor", desc: "Son kontrollerin yapılması ve detaylı operasyon raporunun sunulması." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white shadow-sm border border-slate-100 rounded-lg hover:-translate-y-1 transition-transform duration-300">
                  <span className="absolute -top-4 -right-4 text-6xl font-bold text-slate-100 font-heading z-0">{item.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
