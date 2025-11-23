import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Kullanım Koşulları</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="lead">
            Bu web sitesini ("Site") ziyaret ederek ve kullanarak, aşağıdaki Kullanım Koşulları'nı kabul etmiş sayılırsınız. Lütfen siteyi kullanmadan önce bu koşulları dikkatlice okuyunuz.
          </p>

          <h3>1. Genel Hükümler</h3>
          <p>
            Capital Lashing & Port Services, bu sitede yer alan bilgileri, görselleri ve içerikleri önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Sitede yer alan bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, olası hatalardan dolayı sorumluluk kabul edilmez.
          </p>

          <h3>2. Fikri Mülkiyet</h3>
          <p>
            Site tasarımı, metinler, görseller, logolar ve diğer tüm içerikler Capital Lashing & Port Services'e aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.
          </p>

          <h3>3. Kullanıcı Yükümlülükleri</h3>
          <p>
            Kullanıcılar, siteyi yasalara uygun şekilde kullanmayı, site güvenliğini tehdit edecek girişimlerde bulunmamayı ve üçüncü kişilerin haklarına saygı göstermeyi kabul eder.
          </p>

          <h3>4. Sorumluluk Reddi</h3>
          <p>
            Site üzerinden verilen linkler veya yönlendirmelerle ulaşılan üçüncü taraf web sitelerinin içeriğinden Capital Lashing sorumlu değildir. Bu sitelerin kullanımı kullanıcının kendi sorumluluğundadır.
          </p>

          <h3>5. Değişiklikler</h3>
          <p>
            Şirketimiz, işbu Kullanım Koşulları'nı dilediği zaman güncelleme hakkını saklı tutar. Değişiklikler sitede yayınlandığı tarihte yürürlüğe girer.
          </p>

          <h3>6. Yetkili Mahkeme</h3>
          <p>
            Bu kullanım koşullarından doğabilecek uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
