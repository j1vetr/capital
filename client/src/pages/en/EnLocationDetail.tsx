import { NavbarEn } from "@/components/en/NavbarEn";
import { FooterEn } from "@/components/en/FooterEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, HelpCircle, MapPin } from "lucide-react";
import { Link, useRoute } from "wouter";
import { enLocationsData, enServicesData } from "@/data/en";
import { useEffect } from "react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export default function EnLocationDetail() {
  const [, params] = useRoute("/en/locations/:slug");
  const location = enLocationsData.find((l) => l.slug === params?.slug);

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  if (!location) {
    return <NotFound />;
  }

  const canonical = `https://capitallashing.com/en/locations/${location.slug}`;
  const trUrl = `https://capitallashing.com/lashing/${location.trSlug}`;
  const relatedServices = location.serviceSlugs
    .map((slug) => enServicesData.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const nearbyLocations = location.nearby
    .map((slug) => enLocationsData.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title={location.seoTitle}
        description={location.metaDescription}
        canonical={canonical}
        lang="en"
        alternates={{ tr: trUrl, en: canonical }}
        type="service"
        serviceName={location.title}
        serviceDescription={location.metaDescription}
        serviceType="Cargo Lashing and Securing"
        areaServedName={location.areaName}
        faq={location.faq}
        breadcrumbs={[
          { name: "Home", url: "https://capitallashing.com/en" },
          { name: location.name, url: canonical },
        ]}
      />
      <NavbarEn trPath={`/lashing/${location.trSlug}`} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={`Cargo securing at ${location.name}`} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav aria-label="breadcrumb" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
              <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-primary" aria-hidden="true">•</span>
              <span className="text-primary font-bold" aria-current="page">{location.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-heading font-black uppercase text-white mb-6 tracking-tight">
              {location.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {location.intro}
            </p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Content */}
            <article className="lg:col-span-8">
              {location.sections.map((section, si) => (
                <section key={si} className="mb-14">
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
                </section>
              ))}

              {/* Related services */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                  Services at {location.name}
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedServices.map((service) => (
                    <Link key={service.slug} href={`/en/services/${service.slug}`} className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group h-full">
                      <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                      <span className="text-primary text-sm font-bold inline-flex items-center gap-1">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {location.faq.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-slate-100 shadow-sm px-6">
                      <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* CTA */}
              <div className="bg-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-heading font-black text-white uppercase mb-4">
                    Plan an Operation at {location.name}
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                    Tell us about your cargo and your schedule. Our team will confirm crew availability and send you a quotation.
                  </p>
                  <Button asChild size="lg" className="h-12 px-6 font-bold uppercase tracking-wide bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                      <Link href="/iletisim">
                      Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h2 className="text-lg font-bold uppercase text-slate-900">Nearby Areas</h2>
                  </div>
                  <div className="space-y-3">
                    {nearbyLocations.map((nl) => (
                      <Link key={nl.slug} href={`/en/locations/${nl.slug}`} className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-colors group">
                        <span className="text-slate-700 font-medium text-sm leading-snug">{nl.name}</span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-2">Need a Crew?</h2>
                    <p className="text-slate-400 text-sm mb-6">Our teams are available around the clock at {location.name}.</p>
                    <Button asChild className="w-full h-12 font-bold uppercase bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                        <Link href="/iletisim">
                        Contact Us
                      </Link>
                      </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <FooterEn />
    </div>
  );
}
