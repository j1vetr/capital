import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

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
              <div className="h-1.5 w-24 bg-white/30 rounded-full mb-8" />
              <p className="text-xl text-white/80 leading-relaxed">
                Güvenli ve sorunsuz operasyon için izlediğimiz 4 temel adım
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Talep & Keşif", desc: "Yük detaylarınızı alır, gerekirse saha keşfi yaparız." },
                { num: "02", title: "Mühendislik", desc: "Lashing hesaplamaları ve malzeme planı hazırlanır." },
                { num: "03", title: "Operasyon", desc: "Sertifikalı ekip sahadaki uygulamayı gerçekleştirir." },
                { num: "04", title: "Sertifikasyon", desc: "Fotoğraflı rapor ve lashing sertifikası teslim edilir." },
              ].map((step) => (
                <div key={step.num} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="text-5xl font-black text-white/20 mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold text-white uppercase mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
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
