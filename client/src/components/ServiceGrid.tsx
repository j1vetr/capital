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
  // Map images manually 
  const getImage = (imgName: string | null) => {
    if (!imgName) return null;
    if (imgName.includes("container")) return containerImg;
    if (imgName.includes("project")) return projectImg;
    if (imgName.includes("shrink")) return shrinkImg;
    if (imgName.includes("yacht")) return yachtImg;
    if (imgName.includes("hero")) return heroImage;
    return null;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tight mb-6">
            Hizmetlerimiz
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground text-xl leading-relaxed">
            Liman sahasından gemi ambarına, fabrika çıkışından varış noktasına kadar tüm lojistik süreçlerinizde yük güvenliğini en üst düzeyde sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service) => {
            const bgImage = getImage(service.image);
            return (
              <Card key={service.id} className="group overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full hover:-translate-y-1 rounded-xl">
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  {bgImage ? (
                    <img 
                      src={bgImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <service.icon className="h-20 w-20 text-slate-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="bg-primary text-white p-3 rounded-lg mb-4 inline-flex shadow-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-6 pb-2 px-6">
                  <CardTitle className="text-2xl font-bold font-heading uppercase text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex-grow flex flex-col">
                  <CardDescription className="text-base mb-6 line-clamp-3 text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                  <div className="mt-auto">
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors uppercase font-bold tracking-wide">
                        Detayları İncele
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
