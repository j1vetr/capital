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
        <section className="relative py-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
             <img 
               src={portWorkersImg} 
               alt="Capital Lashing Team" 
               className="w-full h-full object-cover opacity-50"
             />
          </div>
          
          <div className="container px-4 md:px-6 relative z-20">
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
                Capital Lashing, yüklerinizin güvenli taşınması için öncü lashing hizmetleri sunan uzman bir firmadır. Deneyimli ekibimiz ve kaliteli çözümlerimizle yanınızdayız.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
                <img 
                  src={teamMeetingImg} 
                  alt="Office Meeting" 
                  className="rounded-2xl shadow-2xl border border-slate-100 relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
              </div>
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Target className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-slate-900 uppercase">Vizyonumuz</h2>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed pl-4 border-l-2 border-primary/20">
                    Müşterilerimizin güvenle taşımacılık ihtiyaçlarını karşılayan lider bir lashing hizmeti sağlayıcısı olmayı hedefliyoruz.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/10 p-3 rounded-xl text-blue-600">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-slate-900 uppercase">Misyonumuz</h2>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed pl-4 border-l-2 border-blue-500/20">
                    Yüklerin güvenli taşınmasını sağlamak için müşterilerimize çözüm odaklı, profesyonel ve yüksek kaliteli lashing hizmetleri sunmaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white divide-x divide-white/20">
              <div className="p-4">
                <div className="text-5xl font-black mb-2">10+</div>
                <div className="text-sm uppercase font-bold tracking-widest opacity-80">Yıllık Tecrübe</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-black mb-2">50+</div>
                <div className="text-sm uppercase font-bold tracking-widest opacity-80">Ekip Üyesi</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-black mb-2">5K+</div>
                <div className="text-sm uppercase font-bold tracking-widest opacity-80">Başarılı Proje</div>
              </div>
              <div className="p-4">
                <div className="text-5xl font-black mb-2">%100</div>
                <div className="text-sm uppercase font-bold tracking-widest opacity-80">Pozitif Geri Dönüş</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-heading font-black text-slate-900 uppercase mb-6">Değerlerimiz</h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-6" />
              <p className="text-slate-500 text-lg">
                İşimizi yaparken bizi yönlendiren ve kurumsal kimliğimizi oluşturan temel prensiplerimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 uppercase mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-heading font-black text-slate-900 uppercase mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-slate-500">Lashing ve hizmetlerimiz hakkında merak edilenler</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 mb-4">
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
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
