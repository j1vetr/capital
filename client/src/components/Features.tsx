import { CheckCircle2, Clock, Globe2, Shield, Award, BarChart3, ShieldCheck, Anchor, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

export function Features() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      {/* Slant divider at top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }}></div>

      <div className="container px-4 md:px-6 relative z-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary font-bold uppercase tracking-wider text-sm mb-8">
              <Award className="h-4 w-4" />
              <span>Neden Capital Lashing?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 uppercase text-white leading-tight">
              Operasyonel <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Mükemmellik</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light border-l-4 border-primary/20 pl-6">
              Lojistik süreçlerinizin en kritik halkası olan yük güvenliğinde, sıfır hata prensibiyle çalışıyoruz. Global standartlarda ekipman ve uzman kadromuzla riskleri ortadan kaldırıyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "7/24 Operasyon", desc: "Kesintisiz liman hizmeti", icon: Clock },
                { title: "Uluslararası Sertifika", desc: "CTU & CSS Code uyumlu", icon: Globe2 },
                { title: "Sigorta Garantisi", desc: "Tüm operasyonlarda tam güvence", icon: ShieldCheck },
                { title: "Raporlama", desc: "Detaylı survey ve fotoğraflama", icon: BarChart3 },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-white uppercase text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Content - Redesigned Stats Grid */}
          <div className="relative perspective-1000">
             <div className="grid grid-cols-2 gap-6">
               {/* Column 1 */}
               <div className="space-y-6 mt-12">
                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   whileHover={{ scale: 1.02, translateY: -5 }}
                   className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-primary h-[260px] flex flex-col justify-center relative overflow-hidden group"
                 >
                   <div className="absolute -right-6 -top-6 bg-primary/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
                   <div className="relative z-10">
                     <h3 className="text-6xl font-black text-slate-900 mb-2 tracking-tighter flex items-baseline">
                       <Counter from={0} to={10} />
                       <span className="text-primary text-4xl ml-1">+</span>
                     </h3>
                     <p className="text-slate-500 uppercase font-bold text-xs tracking-widest flex items-center gap-2">
                       <span className="w-8 h-[2px] bg-primary" />
                       Yıllık Tecrübe
                     </p>
                   </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   whileHover={{ scale: 1.02, translateY: -5 }}
                   className="bg-slate-800/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/10 text-white h-[260px] flex flex-col justify-center relative overflow-hidden group"
                 >
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="relative z-10">
                     <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                        <Shield className="h-7 w-7 text-primary" />
                     </div>
                     <h3 className="text-xl font-bold uppercase mb-2">Güvenli Operasyon</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">ISG standartlarında sıfır kaza ve maksimum güvenlik hedefi.</p>
                   </div>
                 </motion.div>
               </div>

               {/* Column 2 */}
               <div className="space-y-6">
                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                   whileHover={{ scale: 1.02, translateY: -5 }}
                   className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-[2rem] shadow-2xl shadow-primary/30 text-white h-[260px] flex flex-col justify-center relative overflow-hidden group"
                 >
                   <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4 group-hover:rotate-12 transition-transform duration-500">
                     <Users className="h-24 w-24" />
                   </div>
                   <div className="relative z-10">
                     <Anchor className="h-10 w-10 mb-6 text-white/90" />
                     <h3 className="text-xl font-bold uppercase mb-2">Uzman Kadro</h3>
                     <p className="text-blue-100 text-sm leading-relaxed">Sertifikalı ve deneyimli profesyonel lashing personeli.</p>
                   </div>
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.5 }}
                   whileHover={{ scale: 1.02, translateY: -5 }}
                   className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-l-4 border-slate-800 h-[260px] flex flex-col justify-center relative overflow-hidden group"
                 >
                    <div className="absolute -left-6 -bottom-6 bg-slate-900/5 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
                    <div className="relative z-10">
                     <h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter flex items-baseline">
                       <Counter from={0} to={5000} duration={2.5} />
                       <span className="text-slate-400 text-3xl ml-1">+</span>
                     </h3>
                     <p className="text-slate-500 uppercase font-bold text-xs tracking-widest flex items-center gap-2">
                       <span className="w-8 h-[2px] bg-slate-800" />
                       Başarılı Proje
                     </p>
                   </div>
                 </motion.div>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Slant divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white z-10" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
}
