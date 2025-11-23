import { CheckCircle2, Clock, Globe2, Shield, Award, BarChart3, ShieldCheck, Anchor } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-sm mb-6">
              <Award className="h-4 w-4" />
              <span>Neden Capital Lashing?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 uppercase text-slate-900 leading-tight">
              Operasyonel <br/>
              <span className="text-primary">Mükemmellik</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Lojistik süreçlerinizin en kritik halkası olan yük güvenliğinde, sıfır hata prensibiyle çalışıyoruz. Global standartlarda ekipman ve uzman kadromuzla riskleri ortadan kaldırıyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "7/24 Operasyon", desc: "Kesintisiz liman hizmeti", icon: Clock },
                { title: "Uluslararası Sertifika", desc: "CTU & CSS Code uyumlu", icon: Globe2 },
                { title: "Sigorta Garantisi", desc: "Tüm operasyonlarda tam güvence", icon: ShieldCheck },
                { title: "Raporlama", desc: "Detaylı survey ve fotoğraflama", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-900 uppercase text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-12">
                 <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                   <h3 className="text-4xl font-black text-slate-900 mb-2">10+</h3>
                   <p className="text-slate-500 uppercase font-medium text-sm">Yıllık Tecrübe</p>
                 </div>
                 <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white">
                   <Shield className="h-10 w-10 mb-4 text-primary" />
                   <h3 className="text-xl font-bold uppercase mb-2">Güvenli Operasyon</h3>
                   <p className="text-slate-400 text-sm">ISG standartlarında sıfır kaza hedefi.</p>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="bg-primary p-8 rounded-2xl shadow-lg text-white">
                   <Anchor className="h-10 w-10 mb-4 text-white" />
                   <h3 className="text-xl font-bold uppercase mb-2">Uzman Kadro</h3>
                   <p className="text-blue-100 text-sm">Sertifikalı lashing personeli.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-slate-900">
                   <h3 className="text-4xl font-black text-slate-900 mb-2">5K+</h3>
                   <p className="text-slate-500 uppercase font-medium text-sm">Başarılı Proje</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
