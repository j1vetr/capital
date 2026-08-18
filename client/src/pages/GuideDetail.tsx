import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BookOpen, List, Anchor } from "lucide-react";
import { Link, useLocation } from "wouter";
import { guidesData, guidePath } from "@/data/guides";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "@/lib/motion";
import NotFound from "@/pages/not-found";

export default function GuideDetail() {
  const [location] = useLocation();
  const cleanLocation = location.split("?")[0].replace(/\/+$/, "") || "/";
  const slug =
    cleanLocation === "/lashing-nedir"
      ? "lashing-nedir"
      : cleanLocation.match(/^\/rehber\/([^/]+)$/)?.[1];
  const guide = guidesData.find(g => g.slug === slug);

  useEffect(() => {
    if (guide) {
      window.scrollTo(0, 0);
    }
  }, [guide]);

  if (!guide) {
    return <NotFound />;
  }

  const relatedServices = guide.relatedServiceIds
    .map(id => servicesData.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedGuides = guide.relatedGuideSlugs
    .map(slug => guidesData.find(g => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const primaryService = relatedServices[0];
  const canonical = `https://capitallashing.com${guidePath(guide.slug)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <SEO
        title={guide.seoTitle}
        description={guide.metaDescription}
        canonical={canonical}
        type="article"
        articleHeadline={guide.title}
        datePublished={guide.datePublished}
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "Rehber", url: "https://capitallashing.com/rehber" },
          { name: guide.title, url: canonical },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative bg-slate-900 overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(#38aae1_1px,transparent_1px)] [background-size:52px_52px] opacity-[0.04] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav aria-label="breadcrumb" className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 font-medium uppercase tracking-wider text-xs mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <Link href="/rehber" className="hover:text-primary transition-colors">Rehber</Link>
                <span className="text-primary" aria-hidden="true">•</span>
                <span className="text-primary font-bold" aria-current="page">{guide.title.split("?")[0]}?</span>
              </nav>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-6 leading-tight tracking-tighter">
                {guide.title}
              </h1>

              <p className="text-lg md:text-xl text-blue-100 max-w-3xl font-light leading-relaxed border-l-4 border-primary pl-6">
                {guide.summary}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Article body */}
            <article className="lg:col-span-8">
              {/* Table of contents */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <List className="h-5 w-5 text-primary" />
                  <span className="font-bold text-slate-900 uppercase text-sm tracking-wide">İçindekiler</span>
                </div>
                <ol className="space-y-2">
                  {guide.sections.map((section, i) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-slate-600 hover:text-primary transition-colors text-sm font-medium inline-flex items-baseline gap-2">
                        <span className="text-primary font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="mb-14 scroll-mt-28">
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
                  {section.qa && (
                    <div className="space-y-8 mt-2">
                      {section.qa.map((item, qi) => (
                        <div key={qi}>
                          <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 mb-3">{item.q}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {guide.slug === "lashing-nedir" && (
                <p className="text-slate-600 text-lg leading-relaxed mb-14">
                  Capital Lashing olarak gemi, konteyner ve proje yükleriniz için{" "}
                  <Link href="/" className="text-primary font-bold hover:underline">
                    profesyonel lashing hizmetleri
                  </Link>{" "}
                  sunuyoruz. Kurallara uygun bir bağlama planı için ekibimizle iletişime geçebilirsiniz.
                </p>
              )}

              {/* Service CTA */}
              {primaryService && (
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden mb-14">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Anchor className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-heading font-black text-white uppercase">
                        Sahada Uygulama mı Gerekiyor?
                      </h2>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                      {guide.ctaText}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href={`/hizmetler/${primaryService.id}`}>
                        <Button size="lg" className="h-12 px-6 font-bold uppercase tracking-wide bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                          {primaryService.title} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/iletisim">
                        <Button size="lg" variant="outline" className="h-12 px-6 font-bold uppercase tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white">
                          Teklif Al
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Related services */}
              {relatedServices.length > 1 && (
                <section className="mb-4">
                  <h2 className="text-xl font-heading font-bold text-slate-900 mb-6">İlgili Hizmetlerimiz</h2>
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
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="text-lg font-bold uppercase text-slate-900">İlgili Rehberler</h2>
                  </div>
                  <div className="space-y-3">
                    {relatedGuides.map(rg => (
                      <Link key={rg.slug} href={guidePath(rg.slug)} className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-colors group">
                        <span className="text-slate-700 font-medium text-sm leading-snug">{rg.title.split("?")[0]}?</span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    ))}
                    <Link href="/rehber" className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group">
                      <span className="text-primary font-bold text-sm">Tüm rehberler</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-2">Sorunuz mu Var?</h2>
                    <p className="text-slate-400 text-sm mb-6">Yükünüzün sabitlenmesiyle ilgili teknik sorularınız için ekibimize ulaşın.</p>
                    <Link href="/iletisim">
                      <Button className="w-full h-12 font-bold uppercase bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                        İletişime Geç
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
