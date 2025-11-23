import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Ship, HardHat, Calendar } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/project_cargo_being_secured.png";

export default function Projects() {
  useEffect(() => {
    document.title = "Referanslar & Projeler | Capital Lashing";
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Enerji Santrali Türbin Taşıması",
      category: "Proje Kargo",
      image: heroImage,
      date: "Ekim 2024",
      desc: "120 tonluk gaz türbininin gemi ambarına sabitlenmesi."
    },
    {
      id: 2,
      title: "Lüks Yat İhracatı",
      category: "Yat Lashing",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1000&auto=format&fit=crop",
      date: "Eylül 2024",
      desc: "45 metrelik süper yatın okyanus aşırı transferi için özel beşikli sabitleme."
    },
    {
      id: 3,
      title: "İş Makineleri Filosu",
      category: "Ro-Ro / Flat Rack",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop",
      date: "Ağustos 2024",
      desc: "50 adet ekskavatörün Flat Rack konteynerlere lashing operasyonu."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Projects Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-medium uppercase tracking-wider text-xs mb-6">
              <span>Ana Sayfa</span>
              <span className="text-primary">•</span>
              <span className="text-primary font-bold">Projeler</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-6 tracking-tight">
            Referans Projeler
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dünya çapında başarıyla tamamladığımız zorlu operasyonlardan seçkiler.
          </p>
        </div>
      </div>

      <main className="flex-grow container px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors font-heading">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors uppercase tracking-wide">
                    Detaylı Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
