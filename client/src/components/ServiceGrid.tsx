import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Ship, Package, Box, Container, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "container-lashing",
    title: "Konteyner Lashing",
    description: "Uluslararası standartlarda gemi içi ve üstü konteyner sabitleme hizmetleri.",
    icon: Container,
    image: "@assets/generated_images/container_lashing_detail_shot.png"
  },
  {
    id: "project-cargo",
    title: "Proje Kargo Lashing",
    description: "Ağır tonajlı ve gabari dışı yüklerin özel ekipmanlarla sabitlenmesi.",
    icon: Anchor,
    image: "@assets/generated_images/project_cargo_being_secured.png"
  },
  {
    id: "shrink-wrap",
    title: "Shrink Wrap Paketleme",
    description: "Endüstriyel makineler ve ürünler için korozyon önleyici profesyonel paketleme.",
    icon: Package,
    image: "@assets/generated_images/industrial_shrink_wrap_packaging.png"
  },
  {
    id: "yacht-lashing",
    title: "Tekne & Yat Lashing",
    description: "Deniz araçlarının güvenli transferi için özel cradle ve sabitleme sistemleri.",
    icon: Ship,
    image: "@assets/generated_images/luxury_yacht_transport_lashing.png"
  },
  {
    id: "crating",
    title: "Endüstriyel Sandıklama",
    description: "ISPM-15 standartlarında ahşap sandıklama ve koruyucu ambalajlama.",
    icon: Box,
    image: null 
  },
  {
    id: "flat-rack",
    title: "Flat Rack (FR) Lashing",
    description: "Özel ekipman gerektiren yüklerin flat rack konteynerlere sabitlenmesi.",
    icon: ShieldCheck,
    image: null
  }
];

import containerImg from "@assets/generated_images/container_lashing_detail_shot.png";
import projectImg from "@assets/generated_images/project_cargo_being_secured.png";
import shrinkImg from "@assets/generated_images/industrial_shrink_wrap_packaging.png";
import yachtImg from "@assets/generated_images/luxury_yacht_transport_lashing.png";

export function ServiceGrid() {
  // Map images manually since importing dynamic paths is tricky in Vite without glob
  const getImage = (id: string) => {
    switch(id) {
      case "container-lashing": return containerImg;
      case "project-cargo": return projectImg;
      case "shrink-wrap": return shrinkImg;
      case "yacht-lashing": return yachtImg;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-tight">
              Hizmetlerimiz
            </h2>
            <div className="h-1 w-20 bg-primary mt-4" />
          </div>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            Liman sahasından gemi ambarına, fabrika çıkışından varış noktasına kadar tüm lojistik süreçlerinizde yük güvenliğini sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const bgImage = getImage(service.id);
            return (
              <Card key={service.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card h-full flex flex-col">
                <div className="h-48 overflow-hidden relative bg-slate-800">
                  {bgImage ? (
                    <img 
                      src={bgImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/10">
                      <service.icon className="h-16 w-16 text-muted-foreground/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-2 rounded-sm">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold font-heading uppercase text-primary group-hover:text-foreground transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-base mb-6 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  <Link href={`/services`}>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform text-foreground cursor-pointer">
                      İncele <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
