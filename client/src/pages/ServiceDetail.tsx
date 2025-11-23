import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";
import containerImg from "@assets/generated_images/container_lashing_detail_shot.png";
import projectImg from "@assets/generated_images/project_cargo_being_secured.png";
import shrinkImg from "@assets/generated_images/industrial_shrink_wrap_packaging.png";
import yachtImg from "@assets/generated_images/luxury_yacht_transport_lashing.png";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:id");
  const serviceId = params?.id;
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Capital Lashing & Port Services`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadı</h1>
            <Link href="/">
              <Button>Ana Sayfaya Dön</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Helper to get image (same logic as ServiceGrid for now)
  const getImage = (imgName: string | null) => {
    if (!imgName) return heroImage; // Fallback
    if (imgName.includes("hero")) return heroImage;
    if (imgName.includes("container")) return containerImg;
    if (imgName.includes("project")) return projectImg;
    if (imgName.includes("shrink")) return shrinkImg;
    if (imgName.includes("yacht")) return yachtImg;
    return heroImage;
  };

  const bgImage = getImage(service.image);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 text-white/80 mb-4 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-primary transition-colors">Hizmetler</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <main className="flex-grow py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-slate max-w-none">
                <div className="whitespace-pre-line leading-relaxed text-slate-600">
                  {service.fullDescription}
                </div>
              </div>

              {/* Benefits Grid */}
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 uppercase text-foreground">Avantajlar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Features */}
              <div className="bg-secondary text-secondary-foreground p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <service.icon className="h-32 w-32" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 uppercase text-white relative z-10">
                  Teknik Özellikler & Kapsam
                </h3>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span className="text-white/80 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Sticky CTA Card */}
              <div className="bg-white border border-border shadow-lg rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold font-heading mb-2 uppercase">Teklif Alın</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Bu hizmet için size özel çözümlerimiz ve fiyat teklifimiz için hemen iletişime geçin.
                </p>
                
                <Link href={`/contact?service=${service.id}`}>
                  <Button className="w-full text-lg py-6 uppercase font-bold tracking-wide mb-4 group">
                    Teklif İste <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="text-center border-t border-border pt-4 mt-4">
                  <p className="text-sm text-muted-foreground mb-1">Acil Destek Hattı</p>
                  <a href="tel:+902163120612" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    +90 216 312 06 12
                  </a>
                </div>
              </div>

              {/* Other Services Menu */}
              <div className="bg-muted/20 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold font-heading mb-4 uppercase">Diğer Hizmetler</h3>
                <div className="flex flex-col space-y-2">
                  {servicesData.filter(s => s.id !== service.id).map(s => (
                    <Link key={s.id} href={`/services/${s.id}`}>
                      <a className="flex items-center justify-between p-3 rounded-md hover:bg-background hover:shadow-sm transition-all text-muted-foreground hover:text-primary group">
                        <span className="font-medium">{s.title}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
