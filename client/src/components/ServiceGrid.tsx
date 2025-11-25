import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { servicesData } from "@/data/services";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";
import containerImg from "@assets/generated_images/container_lashing_detail_shot.png";
import projectImg from "@assets/generated_images/project_cargo_being_secured.png";
import shrinkImg from "@assets/generated_images/industrial_shrink_wrap_packaging.png";
import yachtImg from "@assets/generated_images/luxury_yacht_transport_lashing.png";

export function ServiceGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-tight mb-6">
            Hizmetlerimiz
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-6" />
          <p className="text-slate-500 text-xl leading-relaxed">
            Liman sahasından gemi ambarına, fabrika çıkışından varış noktasına kadar tüm lojistik süreçlerinizde yük güvenliğini en üst düzeyde sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service) => {
            // Use image from service data if available, otherwise fallback to generated images for specific IDs
            let bgImage = service.image;
            
            // Fallback logic for services that might not have image property set yet in all contexts
            if (!bgImage) {
               if (service.id === "gemi-proje-lashing") bgImage = heroImage;
               else if (service.id === "konteyner-lashing") bgImage = containerImg;
               else if (service.id === "proje-kargo-lashing") bgImage = projectImg;
               else if (service.id === "shrink-wrap") bgImage = shrinkImg;
               else if (service.id === "tekne-yat-lashing") bgImage = yachtImg;
            }

            return (
              <Card key={service.id} className="group overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col h-full hover:-translate-y-2 rounded-2xl">
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  {bgImage ? (
                    <img 
                      src={bgImage} 
                      alt={`${service.title} Hizmeti - Profesyonel Yük Sabitleme`}
                      title={`${service.title} Hizmeti Detayları`}
                      loading="lazy"
                      width="400"
                      height="300"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <service.icon className="h-20 w-20 text-slate-300" />
                    </div>
                  )}
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-xl mb-3 inline-flex shadow-lg group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </div>
                <CardHeader className="pt-6 pb-2 px-8">
                  <CardTitle className="text-2xl font-bold font-heading uppercase text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-grow flex flex-col">
                  <CardDescription className="text-base mb-6 line-clamp-3 text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {service.shortDescription}
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 uppercase font-bold tracking-wide py-6 rounded-xl group/btn">
                        Detayları İncele <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
