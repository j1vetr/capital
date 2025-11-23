import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, Shield, Anchor, FileText, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";
import { servicesData } from "@/data/services";
import { useEffect } from "react";
import { motion } from "framer-motion";
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

  const getImage = (imgName: string | null) => {
    if (!imgName) return heroImage;
    if (imgName.includes("hero")) return heroImage;
    if (imgName.includes("container")) return containerImg;
    if (imgName.includes("project")) return projectImg;
    if (imgName.includes("shrink")) return shrinkImg;
    if (imgName.includes("yacht")) return yachtImg;
    return heroImage;
  };

  const bgImage = getImage(service.image);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/30">
      <Navbar />
      
      {/* 1. Immersive Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Parallax Effect (Simulated with fixed) */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 font-medium uppercase tracking-wider text-xs mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                <span className="text-primary">•</span>
                <Link href="/services" className="hover:text-primary transition-colors">Hizmetler</Link>
                <span className="text-primary">•</span>
                <span className="text-primary font-bold">{service.title}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase mb-8 leading-tight tracking-tighter">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 pb-2">
                    {word}
                  </span>
                ))}
              </h1>
              
              <p className="text-2xl text-blue-100 max-w-2xl font-light leading-relaxed mb-10 border-l-4 border-primary pl-6">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={`/contact?service=${service.id}`}>
                  <Button size="lg" className="h-14 px-8 text-lg uppercase font-bold tracking-wide shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                    Hemen Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg uppercase font-bold tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                  Detayları İncele
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronRight className="h-8 w-8 rotate-90" />
        </motion.div>
      </div>

      <main className="flex-grow bg-slate-50">
        
        {/* 2. Content & Layout Redesign */}
        <div className="container px-4 md:px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: Main Content */}
            <div className="lg:col-span-8">
              
              {/* Introduction - Lead Paragraph */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight mb-6">
                  {service.shortDescription}
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mb-8" />
              </motion.div>

              {/* Description Content */}
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary prose-strong:text-slate-900 prose-li:marker:text-primary mb-16">
                 {/* Custom rendering for markdown-like description */}
                 {service.fullDescription.split('\n').map((line, i) => {
                   const trimmed = line.trim();
                   if (!trimmed) return null;
                   
                   if (trimmed.startsWith('### ')) {
                     return <h3 key={i} className="text-2xl mt-12 mb-6 pb-4 border-b border-slate-200">{trimmed.replace('### ', '')}</h3>
                   }
                   if (trimmed.startsWith('#### ')) {
                     return <h4 key={i} className="text-xl mt-8 mb-4 text-primary">{trimmed.replace('#### ', '')}</h4>
                   }
                   if (trimmed.startsWith('* ')) {
                     return (
                       <div key={i} className="flex items-start gap-3 mb-4 pl-2">
                         <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                         <p className="m-0 text-slate-700 font-medium">{trimmed.replace('* ', '')}</p>
                       </div>
                     )
                   }
                   // Numbered lists styled as cards
                   if (/^\d\./.test(trimmed)) {
                      const [num, ...rest] = trimmed.split('.');
                      const content = rest.join('.').trim().replace(/^\*\*/, '').replace(/\*\*:/, ':').replace(/\*\*/g, '');
                      const [title, desc] = content.includes(':') ? content.split(':') : [content, ''];
                      
                      return (
                        <div key={i} className="flex gap-4 mb-6 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 transition-colors group">
                          <div className="flex-shrink-0 w-10 h-10 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center font-black text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                            {num}
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 mb-1">{title}</h5>
                            {desc && <p className="m-0 text-slate-500 text-sm leading-normal">{desc}</p>}
                          </div>
                        </div>
                      )
                   }

                   return <p key={i} className="mb-6">{line}</p>
                 })}
              </div>

              {/* Visual Benefits Grid */}
              <div className="mb-20">
                <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase mb-8 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Hizmet Avantajları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <p className="font-bold text-slate-800 text-lg leading-snug group-hover:text-primary transition-colors">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process Timeline */}
              <div className="mb-12">
                <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase mb-10 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  Operasyon Süreci
                </h3>
                <div className="relative border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
                   {[
                     { title: "Talep & Keşif", desc: "Yükün detayları incelenir, gerekiyorsa yerinde keşif yapılır." },
                     { title: "Mühendislik & Planlama", desc: "Lashing hesaplamaları yapılır ve malzeme listesi çıkarılır." },
                     { title: "Operasyon", desc: "Uzman ekip tarafından sabitleme işlemi gerçekleştirilir." },
                     { title: "Kontrol & Teslimat", desc: "Son kontroller yapılır ve survey raporu ile teslim edilir." }
                   ].map((step, i) => (
                     <div key={i} className="relative">
                       <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                       <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase">{step.title}</h4>
                       <p className="text-slate-600">{step.desc}</p>
                     </div>
                   ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                
                {/* Featured Image Card */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative group h-64">
                  <img src={bgImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 text-primary">Görsel</p>
                    <p className="font-bold text-lg">{service.title}</p>
                  </div>
                </div>

                {/* Technical Specs Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Anchor className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-bold uppercase">Teknik Detaylar</h3>
                    </div>
                    <div className="space-y-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-slate-300 text-sm font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hemen Teklif Alın</h3>
                  <p className="text-slate-500 text-sm mb-6">Projeniz için en uygun çözümü 2 saat içinde sunalım.</p>
                  
                  <Link href={`/contact?service=${service.id}`}>
                    <Button className="w-full h-12 font-bold uppercase bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20 mb-4">
                      Teklif İste
                    </Button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>Ortalama yanıt süresi: 15 dk</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Strip */}
        <section className="bg-slate-900 py-16 border-t border-white/10">
          <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase mb-2">
                Sorularınız mı var?
              </h2>
              <p className="text-slate-400">Uzman ekibimiz tüm teknik sorularınızı yanıtlamaya hazır.</p>
            </div>
            <div className="flex gap-4">
               <a href="tel:+902163120612" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                 +90 216 312 06 12
               </a>
               <Link href="/contact">
                 <a className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                   Bize Ulaşın
                 </a>
               </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
