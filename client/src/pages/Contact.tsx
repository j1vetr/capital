import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import heroImage from "@assets/generated_images/port_workers_checking_cargo_safety.png";
import { Phone, Mail, MapPin, Globe2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SEO
        title="İletişim & Teklif Talebi | Capital Lashing – 7/24 Destek"
        description="Capital Lashing ile iletişime geçin. Teklif talebi, acil operasyon desteği: +90 216 312 06 12 | info@capitallashing.com. Sancaktepe / İstanbul ofisimiz. 7/24 yanınızdayız."
        canonical="https://capitallashing.com/iletisim"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://capitallashing.com" },
          { name: "İletişim", url: "https://capitallashing.com/iletisim" },
        ]}
      />
      <Navbar />

      {/* Page Header */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Contact Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
            <span>Ana Sayfa</span>
            <span className="text-primary">•</span>
            <span className="text-primary font-bold">İletişim</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">İletişim</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            7/24 Operasyonel destek ve teklif talepleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-slate-50">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 -z-10" />

          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left: Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Telefon</h3>
                  <p className="text-slate-500 text-sm mb-4">7/24 Acil Destek Hattı</p>
                  <a href="tel:+902163120612" className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors block">
                    +90 216 312 06 12
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">E-Posta</h3>
                  <p className="text-slate-500 text-sm mb-4">Teklif ve bilgi talepleri için</p>
                  <a href="mailto:info@capitallashing.com" className="text-xl font-bold text-slate-800 hover:text-primary transition-colors block">
                    info@capitallashing.com
                  </a>
                </div>

                <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white mb-2">Merkez Ofis</h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Abdurrahmangazi Mah. Ebubekir Cad. No:26<br />Sancaktepe / İstanbul
                    </p>
                    <a href="https://maps.google.com/?q=Abdurrahmangazi+Mah.+Ebubekir+Cad.+No:26+Sancaktepe+Istanbul" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white hover:text-white">
                        Haritada Göster <Globe2 className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 md:p-10 text-white">
                    <h2 className="text-3xl font-heading font-black uppercase mb-2">Hemen Teklif Alın</h2>
                    <p className="text-blue-100 text-lg">Projeniz için en uygun çözümü ve fiyat teklifini sunalım.</p>
                  </div>

                  <div className="p-8 md:p-10 flex-grow">
                    <ContactForm readFromUrl />
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>

        {/* Map */}
        <section className="h-[400px] bg-slate-200 w-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6525632142813!2d29.22686667655336!3d40.98095457135714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad30e380104eb%3A0x930f037791312635!2sAbdurrahmangazi%2C%20Ebubekir%20Cd.%20No%3A26%2C%2034887%20Sancaktepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1708700000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Capital Lashing Ofis Konumu"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
