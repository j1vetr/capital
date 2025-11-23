import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "İletişim | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-secondary py-16 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">İletişim</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              7/24 Operasyonel destek ve teklif talepleriniz için bize ulaşın.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
