import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.title = "Hizmetlerimiz | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-secondary py-20 text-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">Hizmetlerimiz</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Denizcilik ve lojistik sektörünün ihtiyaç duyduğu tüm yük sabitleme ve koruma çözümleri.
            </p>
          </div>
        </div>
        
        {/* Detailed Services List would go here - reusing grid for now but could be more detailed */}
        <div className="container px-4 md:px-6 py-12">
          <div className="prose max-w-4xl mx-auto">
             <p className="text-lg text-muted-foreground">
               Capital Lashing olarak, her türlü yükün güvenli bir şekilde taşınmasını sağlamak amacıyla geniş bir hizmet yelpazesi sunuyoruz. 
               Hizmetlerimiz uluslararası standartlara (IMO, CTU Code) tam uyumlu olarak gerçekleştirilmektedir.
             </p>
             {/* I will add more detailed content here if requested, for now I'll keep it simple as a placeholder page reusing components or just text */}
          </div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
