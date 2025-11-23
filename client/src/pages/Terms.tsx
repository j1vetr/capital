import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { FileText, AlertCircle, Scale, Gavel } from "lucide-react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none" />

        <div className="container px-4 md:px-6 py-24 relative z-10 max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 border border-primary/20">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
              Kullanım Koşulları
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-slate-300 border-b border-white/10 pb-8 mb-8">
                Bu web sitesini ("Site") ziyaret ederek ve kullanarak, aşağıdaki Kullanım Koşulları'nı kabul etmiş sayılırsınız. Lütfen siteyi kullanmadan önce bu koşulları dikkatlice okuyunuz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 not-prose">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Scale className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Yasal Uyumluluk</h4>
                    <p className="text-slate-500 text-xs mt-1">Tüm içerikler yasalara uygun olarak hazırlanmıştır.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Gavel className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Fikri Mülkiyet</h4>
                    <p className="text-slate-500 text-xs mt-1">Tüm haklar Capital Lashing'e aittir.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary/50 text-lg">01.</span> Genel Hükümler
                  </h3>
                  <p className="text-slate-400">
                    Capital Lashing & Port Services, bu sitede yer alan bilgileri, görselleri ve içerikleri önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Sitede yer alan bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, olası hatalardan dolayı sorumluluk kabul edilmez.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary/50 text-lg">02.</span> Fikri Mülkiyet
                  </h3>
                  <p className="text-slate-400">
                    Site tasarımı, metinler, görseller, logolar ve diğer tüm içerikler Capital Lashing & Port Services'e aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary/50 text-lg">03.</span> Kullanıcı Yükümlülükleri
                  </h3>
                  <p className="text-slate-400">
                    Kullanıcılar, siteyi yasalara uygun şekilde kullanmayı, site güvenliğini tehdit edecek girişimlerde bulunmamayı ve üçüncü kişilerin haklarına saygı göstermeyi kabul eder.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary/50 text-lg">04.</span> Sorumluluk Reddi
                  </h3>
                  <p className="text-slate-400">
                    Site üzerinden verilen linkler veya yönlendirmelerle ulaşılan üçüncü taraf web sitelerinin içeriğinden Capital Lashing sorumlu değildir. Bu sitelerin kullanımı kullanıcının kendi sorumluluğundadır.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 text-sm text-slate-500">
                <AlertCircle className="h-5 w-5" />
                <p>Son Güncelleme: 23 Kasım 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
