import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Shield, Target, Users, TrendingUp, Heart, Lightbulb, CheckCircle2, HelpCircle, Award, Globe, Truck } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import teamMeetingImg from "@assets/generated_images/modern_corporate_office_team_meeting.png";
import portWorkersImg from "@assets/generated_images/port_workers_checking_cargo_safety.png";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export default function About() {
  useEffect(() => {
    document.title = "Hakkımızda | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "15+", label: "Yıllık Tecrübe" },
    { value: "2500+", label: "Tamamlanan Proje" },
    { value: "100%", label: "Müşteri Memnuniyeti" },
    { value: "7/24", label: "Operasyonel Destek" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Güvenlik Odaklılık",
      desc: "Her operasyonda önce iş güvenliği ve yük güvenliği gelir. Riskleri minimize eder, standartları maksimize ederiz."
    },
    {
      icon: Target,
      title: "Sonuç Odaklılık",
      desc: "Müşterilerimizin hedeflerine ulaşması için en etkili ve verimli çözümleri üretiriz."
    },
    {
      icon: Users,
      title: "Uzman Kadro",
      desc: "Alanında sertifikalı ve deneyimli profesyonellerden oluşan ekibimizle hizmet veririz."
    },
    {
      icon: Globe,
      title: "Global Standartlar",
      desc: "IMO ve uluslararası denizcilik standartlarına tam uyumlu operasyonlar yürütürüz."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src={portWorkersImg} 
              alt="Capital Lashing Team" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
          </div>
          
          <div className="container px-4 md:px-6 relative z-20 pt-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none blur-sm">
                Hakkımızda
              </h1>
              <div className="relative z-10">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Kurumsal</span>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
                  Denizcilik Sektöründe <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Güvenin Adresi</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                  2010 yılından bu yana, Türkiye'nin önde gelen limanlarında lashing ve endüstriyel paketleme çözümleri sunuyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story Section with Floating Images */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <img src={teamMeetingImg} alt="Team" className="rounded-2xl shadow-xl w-full h-64 object-cover translate-y-8" />
                  <img src={heroImage} alt="Port" className="rounded-2xl shadow-xl w-full h-64 object-cover -translate-y-8" />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white p-6 rounded-full shadow-2xl z-20 text-center w-32 h-32 flex flex-col items-center justify-center border-4 border-white">
                  <span className="text-3xl font-black text-primary">15+</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Yıl</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 uppercase mb-6">
                    Hikayemiz & <span className="text-primary">Vizyonumuz</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Capital Lashing, denizcilik sektöründeki yük güvenliği açığını kapatmak ve uluslararası standartlarda hizmet sunmak amacıyla kurulmuştur. Küçük bir ekip olarak başladığımız bu yolculukta, bugün Türkiye'nin tüm büyük limanlarında operasyon yapabilen güçlü bir yapıya ulaştık.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Amacımız sadece yükleri sabitlemek değil; müşterilerimizin ticari itibarını korumak ve lojistik süreçlerinin kesintisiz işlemesini sağlamaktır. Her projeye, ilk günkü heyecanımız ve yılların getirdiği tecrübeyle yaklaşıyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <Target className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Misyonumuz</h3>
                    <p className="text-sm text-slate-500">En zorlu yükleri bile güvenle hedefine ulaştırmak için mühendislik tabanlı çözümler üretmek.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <Award className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Kalite Politikamız</h3>
                    <p className="text-sm text-slate-500">Sıfır hata ve sıfır kaza prensibiyle, uluslararası sertifikasyonlara uygun hizmet vermek.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Modern Dark */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
           <div className="container px-4 md:px-6 relative z-10">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {stats.map((stat, index) => (
                 <div key={index} className="text-center group">
                   <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 group-hover:to-primary transition-all">
                     {stat.value}
                   </div>
                   <div className="text-sm md:text-base font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                     {stat.label}
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 uppercase mb-4">Değerlerimiz</h2>
              <p className="text-slate-500 text-lg">Bizi sektörde farklı kılan temel prensiplerimiz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          <div className="container px-4 md:px-6 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-8">Ekibimizle Tanışın</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Projeniz için en uygun çözümü üretmek üzere uzmanlarımız sizi bekliyor.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                İletişime Geçin
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
