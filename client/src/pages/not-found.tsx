import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowRight, Anchor } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 relative overflow-hidden bg-slate-900 min-h-[80vh]">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
         </div>

         <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="mb-8 flex justify-center items-center flex-col">
               <div className="relative inline-block">
                 {/* Large 404 Text Layered */}
                 <h1 className="text-[10rem] md:text-[15rem] font-black text-white/5 leading-none select-none tracking-tighter">
                   404
                 </h1>
                 
                 {/* Floating Anchor Icon */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-slate-900/50 p-6 rounded-full backdrop-blur-sm border border-white/10 shadow-2xl shadow-primary/20 animate-[bounce_3s_infinite]">
                        <Anchor className="h-16 w-16 md:h-24 md:w-24 text-primary" />
                    </div>
                 </div>
               </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
              Rota <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Bulunamadı</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Aradığınız sayfa ufukta görünmüyor. Okyanusun derinliklerinde kaybolmuş veya taşınmış olabilir. Rotanızı yeniden oluşturmak için ana sayfaya dönebilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link href="/">
                 <Button size="lg" className="h-14 px-8 text-base md:text-lg uppercase font-bold tracking-wide shadow-xl shadow-primary/20 hover:scale-105 hover:bg-blue-600 transition-all group bg-primary text-white w-full sm:w-auto">
                   <Home className="mr-2 h-5 w-5" />
                   Ana Sayfaya Dön
                 </Button>
               </Link>
               <Link href="/iletisim">
                 <Button size="lg" variant="outline" className="h-14 px-8 text-base md:text-lg uppercase font-bold tracking-wide text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm group w-full sm:w-auto">
                   Bize Ulaşın
                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}
