import { serviceSrcSet, CARD_SIZES } from "@/lib/responsiveImage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { ArrowRight, ChevronRight, Shield, Anchor, Ship, Box, Truck, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.webp";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <SEO
        title="Lashing Hizmetleri | Gemi, Konteyner, Flat Rack, Shrink Wrap – Capital Lashing"
        description="Gemi proje lashing, konteyner lashing, flat rack sabitleme, shrink wrap, brandalama, sandıklama ve unlashing. İstanbul ve Türkiye genelinde 7/24 profesyonel operasyon."
        canonical="https://capitallashing.com/hizmetler"
        alternates={{ tr: "https://capitallashing.com/hizmetler", en: "https://capitallashing.com/en/services" }}
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "Hizmetler", url: "https://capitallashing.com/hizmetler" },
        ]}
      />
      <Navbar />
      
      {/* Modern Hero Section without bottom gap */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Profesyonel Lashing ve Port Hizmetleri – Capital Lashing İstanbul"
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black uppercase text-white mb-6 tracking-tight drop-shadow-2xl">
              Hizmetlerimiz
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
              Denizcilik ve lojistik operasyonlarınız için <span className="text-primary font-medium">uluslararası standartlarda</span> mühendislik ve uygulama çözümleri.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative fade into next section to prevent hard line */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-10" />
      </div>

      <main className="flex-grow bg-slate-50 relative z-20 -mt-12">
        <div className="container px-4 md:px-6">
          
          {/* Services Grid - Staggered Layout */}
          <div className="grid grid-cols-1 gap-8 mb-24">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500`}>
                  
                  {/* Image Section */}
                  <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
                    {service.image ? (
                      <img
                        src={service.image}
                        srcSet={serviceSrcSet(service.image)}
                        sizes={CARD_SIZES}
                        alt={`${service.title} – Capital Lashing İstanbul`}
                        title={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        width="640"
                        height="480"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                        <service.icon className="w-24 h-24 text-slate-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                        <service.icon className="w-3 h-3" />
                        Hizmet
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between p-8 md:p-10 flex-grow">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                      
                      {/* Port Coverage */}
                      {service.ports && (
                        <div className="mb-6">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Hizmet Bölgeleri</p>
                          <div className="flex flex-wrap gap-2">
                            {service.ports.map(port => (
                              <span key={port} className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                                {port}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features Preview */}
                      <div className="grid grid-cols-2 gap-2 mb-8">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link href={`/hizmetler/${service.id}`}>
                        <Button className="group/btn bg-primary hover:bg-blue-600 text-white font-bold uppercase tracking-wide shadow-lg shadow-primary/20">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                      <Link href={`/iletisim?service=${service.id}`}>
                        <Button variant="outline" className="font-bold uppercase tracking-wide">
                          Teklif Al
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
