import { NavbarEn } from "@/components/en/NavbarEn";
import { FooterEn } from "@/components/en/FooterEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, HelpCircle, MapPin } from "lucide-react";
import { Link, useRoute } from "wouter";
import { enServicesData, enPortToLocationSlug } from "@/data/en";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "@/lib/motion";
import NotFound from "@/pages/not-found";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EnServiceDetail() {
  const [, params] = useRoute("/en/services/:slug");
  const service = enServicesData.find((s) => s.slug === params?.slug);

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  const trService = servicesData.find((s) => s.id === service.trId);
  const canonical = `https://capitallashing.com/en/services/${service.slug}`;
  const trUrl = `https://capitallashing.com/hizmetler/${service.trId}`;
  const otherServices = enServicesData.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title={service.seoTitle}
        description={service.metaDescription}
        canonical={canonical}
        lang="en"
        alternates={{ tr: trUrl, en: canonical }}
        type="service"
        serviceName={service.title}
        serviceDescription={service.shortDescription}
        serviceType={service.title}
        areaServedPlaces={service.ports}
        faq={service.faq}
        breadcrumbs={[
          { name: "Home", url: "https://capitallashing.com/en" },
          { name: "Services", url: "https://capitallashing.com/en/services" },
          { name: service.title, url: canonical },
        ]}
      />
      <NavbarEn trPath={`/hizmetler/${service.trId}`} />

      {/* Hero */}
      <div className="relative bg-slate-900 overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        {trService?.image && (
          <div className="absolute inset-0 z-0">
            <img src={trService.image} alt={service.title} className="w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
          </div>
        )}
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav aria-label="breadcrumb" className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 font-medium uppercase tracking-wider text-xs mb-8">
                <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <Link href="/en/services" className="hover:text-primary transition-colors">Services</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <span className="text-primary font-bold" aria-current="page">{service.title}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-6 leading-tight tracking-tighter">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl font-light leading-relaxed border-l-4 border-primary pl-6">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ports strip */}
      <div className="bg-primary/5 border-y border-primary/10 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest shrink-0">
              Service Areas:
            </div>
            {service.ports.map((port) => {
              const locationSlug = enPortToLocationSlug[port];
              return locationSlug ? (
                <Link key={port} href={`/en/locations/${locationSlug}`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-primary/20 text-slate-700 text-sm font-semibold rounded-full shadow-sm hover:border-primary hover:text-primary transition-colors">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {port}
                </Link>
              ) : (
                <span key={port} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-primary/20 text-slate-700 text-sm font-semibold rounded-full shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {port}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Content */}
            <article className="lg:col-span-8">
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                  About This Service
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                {service.intro.map((p, i) => (
                  <p key={i} className="text-slate-600 text-lg leading-relaxed mb-6">{p}</p>
                ))}
              </section>

              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                  What You Get
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                <ul className="space-y-4">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {trService?.gallery && trService.gallery.length > 1 && (
                <section className="mb-14">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                    From Our Operations
                  </h2>
                  <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {trService.gallery.slice(0, 6).map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                        <img src={img} alt={`${service.title} operation ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </section>
              )}

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
                  {service.faq.map((item, i) => (
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
                    Request a Quotation
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                    Share your cargo details, the loading location and the schedule with our team. We will review the operation and return a quotation quickly.
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
                  <h2 className="text-lg font-bold uppercase text-slate-900 mb-6">Other Services</h2>
                  <div className="space-y-3">
                    {otherServices.map((s) => (
                      <Link key={s.slug} href={`/en/services/${s.slug}`} className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-colors group">
                        <span className="text-slate-700 font-medium text-sm leading-snug">{s.title}</span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    ))}
                    <Link href="/en/services" className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group">
                      <span className="text-primary font-bold text-sm">All services</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-2">Have a Question?</h2>
                    <p className="text-slate-400 text-sm mb-6">Reach our team for technical questions about securing your cargo.</p>
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
