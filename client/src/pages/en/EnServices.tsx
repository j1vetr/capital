import { NavbarEn } from "@/components/en/NavbarEn";
import { FooterEn } from "@/components/en/FooterEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { enServicesData } from "@/data/en";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/port_workers_checking_cargo_safety.png";

export default function EnServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title="Lashing Services | Ship, Container and Project Cargo Securing | Capital Lashing"
        description="Full range of cargo securing services in Turkey. Ship and project lashing, container lashing, flat rack securing, shrink wrap packaging, wooden crating and unlashing."
        canonical="https://capitallashing.com/en/services"
        lang="en"
        alternates={{ tr: "https://capitallashing.com/hizmetler", en: "https://capitallashing.com/en/services" }}
        breadcrumbs={[
          { name: "Home", url: "https://capitallashing.com/en" },
          { name: "Services", url: "https://capitallashing.com/en/services" },
        ]}
      />
      <NavbarEn trPath="/hizmetler" />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Lashing crew securing cargo at a port" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-28">
          <nav aria-label="breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
            <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-primary" aria-hidden="true">•</span>
            <span className="text-primary font-bold" aria-current="page">Services</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ship lashing, container securing, project cargo solutions and export packing at Turkish ports.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enServicesData.map((service, i) => {
                const trService = servicesData.find((s) => s.id === service.trId);
                const Icon = trService?.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link href={`/en/services/${service.slug}`} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full overflow-hidden">
                      {trService?.image && (
                        <div className="h-48 overflow-hidden">
                          <img src={trService.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-8 flex flex-col flex-grow">
                        {Icon && (
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Icon className="h-6 w-6" />
                          </div>
                        )}
                        <h2 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                          {service.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.shortDescription}</p>
                        <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 uppercase tracking-wide">
                          Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-600 text-lg mb-6">Not sure which service fits your shipment? Tell us about your cargo and we will guide you.</p>
              <Button asChild size="lg" className="h-14 px-10 font-bold uppercase tracking-wide bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                  <Link href="/iletisim">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterEn />
    </div>
  );
}
