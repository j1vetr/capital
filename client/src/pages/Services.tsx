import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";
import { ArrowRight, ChevronRight, Shield, Anchor, Ship, Box, Truck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export default function Services() {
  useEffect(() => {
    document.title = "Hizmetlerimiz | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Services Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Denizcilik ve lojistik sektörünün ihtiyaç duyduğu tüm yük sabitleme ve koruma çözümleri.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <a className="group block h-full">
                  <div className="relative h-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                    {/* Icon Header */}
                    <div className="bg-slate-50 p-8 border-b border-slate-100 group-hover:bg-primary/5 transition-colors">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-heading text-slate-900 uppercase group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <p className="text-slate-500 leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                      
                      <div className="flex items-center text-primary font-bold uppercase tracking-wider text-sm mt-auto">
                        İncele <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 py-24">
          <div className="bg-primary rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase">Özel Projeleriniz İçin Çözüm Mü Arıyorsunuz?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Standart dışı yükleriniz ve özel operasyonlarınız için mühendislik destekli çözümler üretiyoruz.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-primary font-bold uppercase tracking-wider">
                  Bize Ulaşın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
