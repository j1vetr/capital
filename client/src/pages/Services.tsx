import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";
import { ArrowRight, ChevronRight, Shield, Anchor, Ship, Box, Truck, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export default function Services() {
  useEffect(() => {
    document.title = "Hizmetlerimiz | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      {/* Modern Hero Section without bottom gap */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Services Hero"
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <a className="group block">
                    <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-primary/30`}>
                      
                      {/* Image Side */}
                      <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={service.image || heroImage} 
                          alt={`${service.title} Hizmeti - Capital Lashing`}
                          title={`${service.title} Hakkında Detaylı Bilgi`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-primary shadow-lg">
                          <service.icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <service.icon className="h-48 w-48" />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 uppercase mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
                          {service.shortDescription}
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <span className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider rounded-lg group-hover:bg-primary transition-colors duration-300">
                            Detayları İncele
                          </span>
                          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-all">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature / Why Us Section */}
        <div className="bg-slate-900 py-24 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
             <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
           </div>

           <div className="container px-4 md:px-6 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-6 leading-tight">
                   Neden Profesyonel <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Lashing Hizmeti?</span>
                 </h2>
                 <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                   Yanlış veya yetersiz sabitleme, milyonlarca dolarlık hasarlara ve ciddi güvenlik risklerine yol açabilir. Profesyonel lashing, sadece bir önlem değil, güvenli ticaretin temelidir.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     "Sıfır Hasar Riski",
                     "Uluslararası Sertifikasyon",
                     "7/24 Operasyon",
                     "Uzman Mühendis Kadrosu"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-white bg-white/5 p-4 rounded-xl border border-white/10">
                       <Shield className="text-primary h-5 w-5" />
                       <span className="font-medium">{item}</span>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl transform rotate-3 opacity-50 blur-sm"></div>
                 <div className="bg-slate-800 border border-white/10 p-8 rounded-2xl relative shadow-2xl">
                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                     <Zap className="text-yellow-400 h-6 w-6" />
                     Hızlı Teklif Alın
                   </h3>
                   <p className="text-slate-300 mb-8">
                     Yükünüzün detaylarını bizimle paylaşın, mühendislerimiz en uygun sabitleme planını ve fiyat teklifini 2 saat içinde hazırlasın.
                   </p>
                   <Link href="/contact">
                     <Button className="w-full h-12 text-lg font-bold uppercase bg-white text-slate-900 hover:bg-primary hover:text-white transition-colors">
                       Teklif Formunu Doldur
                     </Button>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
