import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Shield, Target, Users, TrendingUp, Heart, Lightbulb, CheckCircle2, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import teamMeetingImg from "@assets/generated_images/modern_corporate_office_team_meeting.png";
import portWorkersImg from "@assets/generated_images/port_workers_checking_cargo_safety.png";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Tutku",
      desc: "Bizim için işimiz, sadece bir iş değil, tutkumuzdur. Her projede en iyisini sunmak için tutkuyla çalışıyoruz."
    },
    {
      icon: Users,
      title: "Topluluk",
      desc: "Müşterilerimiz ve iş ortaklarımızla güçlü ve sürdürülebilir ilişkiler kurarak geniş bir topluluk oluşturuyoruz."
    },
    {
      icon: Shield,
      title: "Bağlılık",
      desc: "Kalite ve güvenilirlik konusunda kararlıyız. Her zaman sözümüzü tutar ve müşterilerimize en iyi hizmeti sunarız."
    },
    {
      icon: TrendingUp,
      title: "Büyüme",
      desc: "Sürekli olarak kendimizi geliştirmeye ve yenilikçi çözümler sunmaya odaklanıyoruz. Büyümemizin ardındaki güç, öğrenme ve gelişme azmimizdir."
    },
    {
      icon: CheckCircle2,
      title: "Dürüstlük",
      desc: "Dürüstlük, işimizin temel taşıdır. Şeffaflık ve güvenilirlik ilkeleri doğrultusunda hareket ederiz."
    },
    {
      icon: Users, // Reusing Users icon or finding a better one for Teamwork if available, Users fits well.
      title: "Takım Çalışması",
      desc: "Birlikte çalışmanın gücüne inanıyoruz. Ekibimiz, ortak hedefler doğrultusunda uyum içinde çalışarak en iyi sonuçları elde eder."
    }
  ];

  const faqs = [
    {
      question: "Lashing nedir ve neden önemlidir?",
      answer: "Lashing, yüklerin taşınması sırasında güvenliğini sağlamak için kullanılan bir tekniktir. Yüklerin sabitlenmesi ve hareketsiz hale getirilmesi, hasar riskini azaltır ve güvenli taşıma sağlar."
    },
    {
      question: "Hangi tür yükler için lashing hizmeti sunuyorsunuz?",
      answer: "Capital Lashing olarak, konteynerler, ro-ro taşımacılığı, ağır yükler ve endüstriyel ekipmanlar gibi çeşitli yükler için lashing hizmetleri sunmaktayız."
    },
    {
      question: "Lashing işlemleriniz nasıl gerçekleştiriliyor?",
      answer: "Profesyonel ekip ve son teknoloji ekipmanlarımızla lashing işlemlerini gerçekleştiriyoruz. Yüklerinize uygun bağlama ve sabitleme yöntemleri kullanarak güvenli ve etkili bir lashing süreci sağlıyoruz."
    },
    {
      question: "Lashing hizmetleri ne kadar sürede tamamlanır?",
      answer: "Lashing hizmetlerinin süresi, proje özelliklerine ve yükün büyüklüğüne bağlı olarak değişebilir. Ancak, profesyonel ekibimiz, verimli bir şekilde çalışarak zamanında teslimat sağlamayı hedeflemektedir."
    },
    {
      question: "Lashing hizmetlerinizde kullanılan malzemeler nelerdir?",
      answer: "Yüksek kalite standartlarına uygun malzemeler kullanmaktayız. Özel olarak seçilmiş bağlama ve kilitleme sistemleri, dayanıklı kayışlar ve kaliteli aksesuarlar gibi malzemeleri kullanarak güvenli lashing sağlıyoruz."
    },
    {
      question: "Lashing hizmetleriniz nasıl fiyatlandırılıyor?",
      answer: "Fiyatlandırmalarımız, proje detayları, yükün boyutu ve taşıma gereksinimlerine bağlı olarak değişiklik gösterir. Size özel bir teklif için bize ulaşabilirsiniz."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
             <img 
               src={portWorkersImg} 
               alt="Capital Lashing Team" 
               className="w-full h-full object-cover opacity-50"
             />
          </div>
          
          <div className="container px-4 md:px-6 relative z-20 pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold uppercase tracking-widest text-sm mb-6 border border-primary/20">
                Hakkımızda
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
                Yüklerinizin Güvenli Taşımacılığı İçin <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Biz Buradayız!</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Capital Lashing, yüklerinizin güvenli taşınması için öncü lashing hizmetleri sunan uzman bir firmadır.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision - Colorful Background */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 z-0" />
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
                <img 
                  src={teamMeetingImg} 
                  alt="Office Meeting" 
                  className="rounded-2xl shadow-2xl border-4 border-white relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10" />
              </div>
              
              <div className="space-y-12 order-1 lg:order-2">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary p-3 rounded-xl text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-slate-900 uppercase">Vizyonumuz</h2>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Müşterilerimizin güvenle taşımacılık ihtiyaçlarını karşılayan lider bir lashing hizmeti sağlayıcısı olmayı hedefliyoruz.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-3xl shadow-xl text-white transform translate-x-0 lg:-translate-x-12 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-xl text-white backdrop-blur-sm">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white uppercase">Misyonumuz</h2>
                  </div>
                  <p className="text-blue-50 text-lg leading-relaxed">
                    Yüklerin güvenli taşınmasını sağlamak için müşterilerimize çözüm odaklı, profesyonel ve yüksek kaliteli lashing hizmetleri sunmaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900"></div>
           
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white divide-x divide-white/10">
              <div className="p-4 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">10+</div>
                <div className="text-sm uppercase font-bold tracking-widest text-primary">Yıllık Tecrübe</div>
              </div>
              <div className="p-4 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">50+</div>
                <div className="text-sm uppercase font-bold tracking-widest text-primary">Ekip Üyesi</div>
              </div>
              <div className="p-4 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">5K+</div>
                <div className="text-sm uppercase font-bold tracking-widest text-primary">Başarılı Proje</div>
              </div>
              <div className="p-4 group hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">%100</div>
                <div className="text-sm uppercase font-bold tracking-widest text-primary">Pozitif Geri Dönüş</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Dark & Blue Theme */}
        <section className="py-24 bg-slate-900 relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-heading font-black text-white uppercase mb-6">Değerlerimiz</h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-400 text-lg">
                İşimizi yaparken bizi yönlendiren ve kurumsal kimliğimizi oluşturan temel prensiplerimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-primary hover:border-primary hover:scale-105 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-white group-hover:text-primary transition-colors">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-blue-100">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Light Blue Background */}
        <section className="py-24 bg-blue-50/50">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6 shadow-lg shadow-primary/30">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-heading font-black text-slate-900 uppercase mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-500">Lashing ve hizmetlerimiz hakkında merak edilenler</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6 border-t border-slate-100 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
