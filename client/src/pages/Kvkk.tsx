import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Kvkk() {
  useEffect(() => {
    document.title = "KVKK Aydınlatma Metni | Capital Lashing";
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
              KVKK Aydınlatma Metni
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-slate-300 border-b border-white/10 pb-8 mb-8">
                Capital Lashing & Port Services olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, şirketimiz ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <Lock className="h-6 w-6 text-primary mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Veri Güvenliği</h3>
                  <p className="text-slate-400 text-sm">Verileriniz en üst düzey güvenlik standartlarıyla korunmaktadır.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <Eye className="h-6 w-6 text-primary mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Şeffaflık</h3>
                  <p className="text-slate-400 text-sm">Verilerinizin nasıl kullanıldığı konusunda tam şeffaflık sağlıyoruz.</p>
                </div>
              </div>

              <h3 className="text-white flex items-center gap-3 mt-12">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
                Kişisel Verilerin Toplanması ve İşlenmesi
              </h3>
              <p className="text-slate-400">
                Kişisel verileriniz, şirketimiz tarafından verilen hizmet, ürün ya da ticari faaliyete bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, ofislerimiz, şubelerimiz, internet sitemiz, sosyal medya mecralarımız, mobil uygulamalarımız ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.
              </p>

              <h3 className="text-white flex items-center gap-3 mt-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
                Kişisel Verilerin İşleme Amaçları
              </h3>
              <p className="text-slate-400">
                Toplanan kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, şirketimizin ve şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini, şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması amaçlarıyla işlenecektir.
              </p>

              <h3 className="text-white flex items-center gap-3 mt-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
                İşlenen Kişisel Verilerin Kimlere Aktarılabileceği
              </h3>
              <p className="text-slate-400">
                Toplanan kişisel verileriniz; iş ortaklarımıza, tedarikçilerimize, şirket yetkililerine, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel kişilere, KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
              </p>

              <h3 className="text-white flex items-center gap-3 mt-8">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
                Kişisel Veri Sahibinin Hakları
              </h3>
              <p className="text-slate-400">
                KVK Kanunu'nun 11. maddesi uyarınca veri sahipleri; kişisel veri işlenip işlenmediğini öğrenme, kişisel verileri işlenmişse buna ilişkin bilgi talep etme, kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme haklarına sahiptir.
              </p>

              <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                <p className="text-slate-300 m-0 text-sm">
                  KVKK kapsamındaki haklarınızı kullanmak için <strong className="text-white">info@capitallashing.com</strong> adresine e-posta gönderebilir veya şirket merkezimize yazılı başvuruda bulunabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
