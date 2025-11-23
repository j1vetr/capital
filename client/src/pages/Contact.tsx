import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";
import heroImage from "@assets/generated_images/port_workers_checking_cargo_safety.png";

export default function Contact() {
  useEffect(() => {
    document.title = "İletişim | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
           <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            İletişim
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            7/24 Operasyonel destek ve teklif talepleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
