import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { ShieldCheck, Lock, FileText } from "lucide-react";

export default function Privacy() {
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
          <div className="text-center mb-16 pt-24">
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
              Gizlilik Politikası
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-slate-300 border-b border-white/10 pb-8 mb-8">
                Capital Lashing & Port Services ("Şirket") olarak, web sitemizi ziyaret edenlerin gizliliğini korumaya önem veriyoruz. Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Veri Toplama</h3>
                  <p className="text-slate-400 text-xs">Sadece gerekli verileri topluyoruz.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Güvenlik</h3>
                  <p className="text-slate-400 text-xs">Verileriniz şifrelenerek korunur.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Kontrol</h3>
                  <p className="text-slate-400 text-xs">Verileriniz sizin kontrolünüzdedir.</p>
                </div>
              </div>

              <h3 className="text-white mt-12 border-l-4 border-primary pl-4">1. Toplanan Veriler</h3>
              <p className="text-slate-400">
                Web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde, adınız, e-posta adresiniz, telefon numaranız gibi kişisel bilgileri toplayabiliriz. Ayrıca, tarayıcı türü, IP adresi ve ziyaret ettiğiniz sayfalar gibi teknik veriler de otomatik olarak toplanabilir.
              </p>

              <h3 className="text-white mt-8 border-l-4 border-primary pl-4">2. Verilerin Kullanımı</h3>
              <p className="text-slate-400">Toplanan veriler aşağıdaki amaçlarla kullanılabilir:</p>
              <ul className="text-slate-400">
                <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
                <li>Sizinle iletişim kurmak ve taleplerinizi yanıtlamak</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
                <li>Site güvenliğini sağlamak</li>
              </ul>

              <h3 className="text-white mt-8 border-l-4 border-primary pl-4">3. Çerezler (Cookies)</h3>
              <p className="text-slate-400">
                Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanılmaktadır. Çerezleri tarayıcı ayarlarınızdan dilediğiniz zaman engelleyebilirsiniz, ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
              </p>

              <h3 className="text-white mt-8 border-l-4 border-primary pl-4">4. Veri Paylaşımı</h3>
              <p className="text-slate-400">
                Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü taraflarla paylaşılmamaktadır. Hizmet sağlayıcılarımızla (hosting, teknik destek vb.) yapılan paylaşımlar, gizlilik sözleşmeleri çerçevesinde gerçekleştirilir.
              </p>

              <h3 className="text-white mt-8 border-l-4 border-primary pl-4">5. Haklarınız</h3>
              <p className="text-slate-400">
                Kişisel verileriniz üzerinde; erişme, düzeltme, silme ve işlemeyi kısıtlama gibi haklara sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
              </p>

              <div className="mt-12 p-8 bg-slate-800/50 rounded-2xl border border-white/5 text-center">
                <h4 className="text-white font-bold mb-2">Sorularınız mı var?</h4>
                <p className="text-slate-400 mb-4">
                  Gizlilik politikamızla ilgili her türlü sorunuz için bize ulaşabilirsiniz.
                </p>
                <a href="mailto:info@capitallashing.com" className="inline-block px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
