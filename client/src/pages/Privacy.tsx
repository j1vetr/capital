import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow container px-4 md:px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="lead">
            Capital Lashing & Port Services ("Şirket") olarak, web sitemizi ziyaret edenlerin gizliliğini korumaya önem veriyoruz. Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h3>1. Toplanan Veriler</h3>
          <p>
            Web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde, adınız, e-posta adresiniz, telefon numaranız gibi kişisel bilgileri toplayabiliriz. Ayrıca, tarayıcı türü, IP adresi ve ziyaret ettiğiniz sayfalar gibi teknik veriler de otomatik olarak toplanabilir.
          </p>

          <h3>2. Verilerin Kullanımı</h3>
          <p>Toplanan veriler aşağıdaki amaçlarla kullanılabilir:</p>
          <ul>
            <li>Hizmetlerimizi sunmak ve iyileştirmek</li>
            <li>Sizinle iletişim kurmak ve taleplerinizi yanıtlamak</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
            <li>Site güvenliğini sağlamak</li>
          </ul>

          <h3>3. Çerezler (Cookies)</h3>
          <p>
            Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanılmaktadır. Çerezleri tarayıcı ayarlarınızdan dilediğiniz zaman engelleyebilirsiniz, ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
          </p>

          <h3>4. Veri Paylaşımı</h3>
          <p>
            Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü taraflarla paylaşılmamaktadır. Hizmet sağlayıcılarımızla (hosting, teknik destek vb.) yapılan paylaşımlar, gizlilik sözleşmeleri çerçevesinde gerçekleştirilir.
          </p>

          <h3>5. Haklarınız</h3>
          <p>
            Kişisel verileriniz üzerinde; erişme, düzeltme, silme ve işlemeyi kısıtlama gibi haklara sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
          </p>

          <h3>6. İletişim</h3>
          <p>
            Gizlilik politikamızla ilgili sorularınız için <a href="mailto:info@capitallashing.com" className="text-primary font-bold">info@capitallashing.com</a> adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
