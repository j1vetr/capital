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

      <main className="flex-grow">
        
        {/* 2. Introduction & Key Benefits (Sticky Sidebar Layout) */}
        <section className="py-24 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              {/* Left Content (Article) */}
              <div className="lg:col-span-7 space-y-12">
                {/* Introduction Text */}
                <div className="prose prose-lg prose-slate max-w-none">
                   {/* Custom rendering for markdown-like description */}
                   {service.fullDescription.split('\n').map((line, i) => {
                     if (line.trim().startsWith('### ')) {
                       return <h3 key={i} className="text-3xl font-heading font-bold text-slate-900 uppercase mt-12 mb-6">{line.replace('### ', '')}</h3>
                     }
                     if (line.trim().startsWith('#### ')) {
                       return <h4 key={i} className="text-xl font-heading font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>{line.replace('#### ', '')}</h4>
                     }
                     if (line.trim().startsWith('* ')) {
                       return <li key={i} className="ml-4 list-disc text-slate-600 mb-2 pl-2 marker:text-primary">{line.replace('* ', '')}</li>
                     }
                     // Numbered lists
                     if (/^\d\./.test(line.trim())) {
                        return (
                          <div key={i} className="flex gap-4 mb-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                              {line.trim().split('.')[0]}
                            </div>
                            <p className="m-0 text-slate-700">{line.trim().replace(/^\d\.\s\*\*/, '').replace(/\*\*:/, '').replace(/\*\*/g, '')}</p>
                          </div>
                        )
                     }

                     return <p key={i} className="text-slate-600 leading-relaxed mb-4 text-lg">{line}</p>
                   })}
                </div>

                {/* Why Choose Us Grid */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                   <div className="relative z-10">
                     <h3 className="text-2xl font-heading font-bold mb-8 uppercase flex items-center gap-3">
                       <Shield className="h-8 w-8 text-primary" />
                       Neden Capital Lashing?
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {service.benefits.map((benefit, i) => (
                         <div key={i} className="flex items-start gap-4">
                           <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                           <span className="text-blue-50 font-medium leading-snug">{benefit}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              </div>

              {/* Right Sidebar (Sticky) */}
              <div className="lg:col-span-5 space-y-8 relative">
                <div className="sticky top-24 space-y-8">
                  
                  {/* Technical Specs Card */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                         <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold uppercase text-slate-900">Teknik Özellikler</h3>
                    </div>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-heading font-bold uppercase mb-2">Projenizi Başlatalım</h3>
                      <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                        Uzman ekibimiz yükünüzü incelesin, uluslararası standartlarda en güvenli taşıma planını oluştursun.
                      </p>
                      
                      <Link href={`/contact?service=${service.id}`}>
                        <Button className="w-full bg-white text-primary hover:bg-blue-50 font-bold uppercase tracking-wide h-12 shadow-lg">
                          Hemen Teklif Al
                        </Button>
                      </Link>

                      <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                        <div className="text-xs text-blue-100 uppercase font-bold tracking-widest">Acil Destek</div>
                        <a href="tel:+902163120612" className="font-bold text-lg hover:text-blue-200 transition-colors">
                          +90 216 312 06 12
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Other Services Mini List */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Diğer Hizmetler</h4>
                     <div className="space-y-2">
                       {servicesData.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                         <Link key={s.id} href={`/services/${s.id}`}>
                           <a className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                             <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{s.title}</span>
                             <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                           </a>
                         </Link>
                       ))}
                     </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Process / Visual Break Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 uppercase mb-4">Operasyonel Mükemmellik</h2>
              <p className="text-slate-500">
                Her adımda titizlikle uyguladığımız kalite kontrol süreçleri ile riskleri sıfıra indiriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: FileText, title: "Analiz & Planlama", desc: "Yükün teknik özellikleri incelenir, CSS Code standartlarına göre lashing planı ve malzeme listesi hazırlanır." },
                 { icon: Anchor, title: "Profesyonel Uygulama", desc: "Sertifikalı ekipmanlar ve uzman personel ile plana uygun sabitleme işlemi gerçekleştirilir." },
                 { icon: CheckCircle2, title: "Survey & Raporlama", desc: "Yapılan işlem kontrol edilir, fotoğraflanır ve uluslararası geçerliliği olan survey raporu sunulur." }
               ].map((step, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-black text-slate-100 -z-10 select-none font-heading">0{i+1}</div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 uppercase mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 4. Big CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-900"></div>
           
           <div className="container px-4 md:px-6 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold uppercase tracking-wider text-sm mb-8 border border-primary/20">
               <Zap className="h-4 w-4" />
               <span>7/24 Operasyon</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase mb-8 leading-tight max-w-4xl mx-auto">
               Yükünüzün Değerini Biliyor, <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Onu En İyi Biz Koruyoruz.</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
               Dünyanın her limanında, en zorlu yüklerde bile Capital Lashing güvencesiyle tanışın.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact">
                 <Button size="lg" className="h-16 px-10 text-xl uppercase font-bold tracking-wide bg-primary hover:bg-blue-600 shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all">
                   Hemen Teklif Al
                 </Button>
               </Link>
               <a href="tel:+902163120612">
                 <Button size="lg" variant="outline" className="h-16 px-10 text-xl uppercase font-bold tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white">
                   Bizi Arayın
                 </Button>
               </a>
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
