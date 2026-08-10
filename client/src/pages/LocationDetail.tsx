import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, HelpCircle, Anchor } from "lucide-react";
import { Link, useRoute } from "wouter";
import { locationsData } from "@/data/locations";
import { trLocationSlugToEnSlug } from "@/data/en";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";
import NotFound from "@/pages/not-found";

export default function LocationDetail() {
  const [, params] = useRoute("/lashing/:slug");
  const location = locationsData.find(l => l.slug === params?.slug);

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  if (!location) {
    return <NotFound />;
  }

  const relatedServices = location.serviceIds
    .map(id => servicesData.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const nearbyLocations = location.nearby
    .map(slug => locationsData.find(l => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const canonical = `https://capitallashing.com/lashing/${location.slug}`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title={location.seoTitle}
        description={location.metaDescription}
        canonical={canonical}
        alternates={
          trLocationSlugToEnSlug[location.slug]
            ? {
                tr: canonical,
                en: `https://capitallashing.com/en/locations/${trLocationSlugToEnSlug[location.slug]}`,
              }
            : undefined
        }
        type="service"
        serviceName={location.title}
        serviceDescription={location.metaDescription}
        serviceType="Lashing ve Yük Sabitleme"
        areaServedName={location.areaName}
        faq={location.faq}
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "Hizmet Bölgeleri", url: "https://capitallashing.com/hizmet-bolgeleri" },
          { name: location.name, url: canonical },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`${location.name} lashing ve yük sabitleme hizmetleri`}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav aria-label="breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 font-medium uppercase tracking-wider text-xs mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <Link href="/hizmet-bolgeleri" className="hover:text-primary transition-colors">Hizmet Bölgeleri</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <span className="text-primary font-bold" aria-current="page">{location.name}</span>
              </nav>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-6 leading-tight tracking-tighter">
                {location.title}
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed mb-10 border-l-4 border-primary pl-6">
                {location.intro}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim">
                  <Button size="lg" className="h-14 px-8 text-lg uppercase font-bold tracking-wide shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                    Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/hizmetler">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg uppercase font-bold tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                    Hizmetlerimiz
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <div className="container px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Main content */}
            <div className="lg:col-span-8">
              {location.sections.map((section, si) => (
                <motion.section
                  key={si}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-14"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                    {section.heading}
                  </h2>
                  <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-slate-600 text-lg leading-relaxed mb-6">{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-4 mt-2">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}

              {/* Related services */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Anchor className="h-8 w-8 text-primary" />
                  {location.name} Bölgesinde Sunduğumuz Hizmetler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedServices.map(service => (
                    <Link key={service.id} href={`/hizmetler/${service.id}`} className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                        <span className="text-primary text-sm font-bold inline-flex items-center gap-1">
                          Detaylı Bilgi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="h-6 w-6 text-primary" />
                      <h2 className="text-lg font-bold uppercase">Diğer Hizmet Bölgeleri</h2>
                    </div>
                    <div className="space-y-3">
                      {nearbyLocations.map(nl => (
                        <Link key={nl.slug} href={`/lashing/${nl.slug}`} className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-colors group">
                            <span className="text-slate-200 font-medium text-sm">{nl.name} lashing hizmetleri</span>
                            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                          </Link>
                      ))}
                      <Link href="/hizmet-bolgeleri" className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-colors group">
                          <span className="text-white font-bold text-sm">Tüm hizmet bölgeleri</span>
                          <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Bölgeniz İçin Teklif Alın</h2>
                  <p className="text-slate-500 text-sm mb-6">Yük bilgilerinizi paylaşın, {location.name} operasyonunuz için plan ve fiyat sunalım.</p>
                  <Link href="/iletisim">
                    <Button className="w-full h-12 font-bold uppercase bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                      İletişime Geç
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* FAQ */}
        {location.faq.length > 0 && (
          <div className="bg-white border-t border-slate-100 py-20">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black uppercase text-slate-900">
                    Sıkça Sorulan Sorular
                  </h2>
                  <p className="text-slate-500 text-sm">{location.name} bölgesi hakkında merak edilenler</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {location.faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline hover:text-primary py-5 text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        )}

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
