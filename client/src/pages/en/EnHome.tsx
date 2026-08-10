import { NavbarEn } from "@/components/en/NavbarEn";
import { FooterEn } from "@/components/en/FooterEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";
import { enServicesData, enLocationsData } from "@/data/en";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export default function EnHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title="Lashing and Cargo Securing Services in Turkey | Capital Lashing"
        description="Professional lashing services in Turkey. Ship and project lashing, container securing, flat rack lashing and export packing at Istanbul, Aliaga and Mersin ports. Available 24/7."
        canonical="https://capitallashing.com/en"
        lang="en"
        alternates={{ tr: "https://capitallashing.com", en: "https://capitallashing.com/en" }}
        type="local_business"
      />
      <NavbarEn trPath="/" />

      {/* Hero */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cargo vessel at a Turkish port" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
              Istanbul based, serving all major Turkish ports
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase text-white mb-6 tracking-tight leading-tight">
              Lashing and Cargo Securing<br className="hidden md:block" /> Services in Turkey
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Capital Lashing secures ship cargo, containers and project shipments at Turkish ports. IMO CSS Code and CTU Code compliant operations with certified equipment and experienced crews.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 font-bold uppercase tracking-wide bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20 text-base">
                  <Link href="/en/services">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 font-bold uppercase tracking-wide text-white border-white/30 hover:bg-white/10 hover:text-white text-base">
                  <Link href="/iletisim">
                  Get a Quote
                </Link>
                </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Trust strip */}
        <section className="bg-white border-b border-slate-100 py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Certified Securing", text: "IMO CSS Code and CTU Code compliant operations with certified lashing equipment." },
                { icon: Clock, title: "Available 24/7", text: "Crews adapt to vessel and terminal schedules at any hour of the day." },
                { icon: Anchor, title: "Port Coverage", text: "Istanbul, Ambarli, Haydarpasa, Tekirdag, Aliaga and Mersin ports." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-slate-900 mb-1">{item.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <h2 className="text-2xl md:text-4xl font-heading font-black uppercase text-slate-900 mb-4">
                Cargo Securing Services
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                From ship and project lashing to export packing, we cover the full securing chain for cargo leaving Turkey.
              </p>
            </div>
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
                    <Link href={`/en/services/${service.slug}`} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full p-8">
                      {Icon && (
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                      )}
                      <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.shortDescription}</p>
                      <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 uppercase tracking-wide">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl md:text-4xl font-heading font-black uppercase text-slate-900 mb-4">
                Where We Operate
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our crews attend the busiest ports and industrial zones of Turkey.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {enLocationsData.map((location) => (
                <Link
                  key={location.slug}
                  href={`/en/locations/${location.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-full shadow-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase text-white mb-6">
              Ready to Secure Your Cargo?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Send us the details of your shipment and receive a quotation from our team. We respond quickly and operate around the clock.
            </p>
            <Button asChild size="lg" className="h-14 px-10 font-bold uppercase tracking-wide bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20 text-base">
                <Link href="/iletisim">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              </Button>
          </div>
        </section>
      </main>
      <FooterEn />
    </div>
  );
}
