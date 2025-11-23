import { CheckCircle2, Clock, Globe2, Shield, Award, BarChart3, ShieldCheck, Anchor } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      {/* Slant divider at top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }}></div>

      <div className="container px-4 md:px-6 relative z-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary font-bold uppercase tracking-wider text-sm mb-8">
              <Award className="h-4 w-4" />
              <span>Neden Capital Lashing?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 uppercase text-white leading-tight">
              Operasyonel <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Mükemmellik</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
              Lojistik süreçlerinizin en kritik halkası olan yük güvenliğinde, sıfır hata prensibiyle çalışıyoruz. Global standartlarda ekipman ve uzman kadromuzla riskleri ortadan kaldırıyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "7/24 Operasyon", desc: "Kesintisiz liman hizmeti", icon: Clock },
                { title: "Uluslararası Sertifika", desc: "CTU & CSS Code uyumlu", icon: Globe2 },
                { title: "Sigorta Garantisi", desc: "Tüm operasyonlarda tam güvence", icon: ShieldCheck },
                { title: "Raporlama", desc: "Detaylı survey ve fotoğraflama", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary shadow-[0_0_15px_rgba(56,170,225,0.3)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-white uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-6 mt-16">
                 <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-primary transform hover:-translate-y-2 transition-transform duration-300">
                   <h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">10+</h3>
                   <p className="text-slate-500 uppercase font-bold text-xs tracking-widest">Yıllık Tecrübe</p>
                 </div>
                 <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 text-white transform hover:-translate-y-2 transition-transform duration-300">
                   <Shield className="h-12 w-12 mb-6 text-primary drop-shadow-[0_0_10px_rgba(56,170,225,0.6)]" />
                   <h3 className="text-xl font-bold uppercase mb-2">Güvenli Operasyon</h3>
                   <p className="text-slate-400 text-sm">ISG standartlarında sıfır kaza hedefi.</p>
                 </div>
               </div>
               <div className="space-y-6">
                 <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-3xl shadow-2xl shadow-primary/20 text-white transform hover:-translate-y-2 transition-transform duration-300">
                   <Anchor className="h-12 w-12 mb-6 text-white/90" />
                   <h3 className="text-xl font-bold uppercase mb-2">Uzman Kadro</h3>
                   <p className="text-blue-100 text-sm">Sertifikalı lashing personeli.</p>
                 </div>
                 <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-slate-800 transform hover:-translate-y-2 transition-transform duration-300">
                   <h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">5K+</h3>
                   <p className="text-slate-500 uppercase font-bold text-xs tracking-widest">Başarılı Proje</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Slant divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
}
