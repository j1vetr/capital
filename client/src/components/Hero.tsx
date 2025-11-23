import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_image_of_a_cargo_ship_at_port.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="International Port Operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 uppercase">
              Yükünüz <span className="text-primary">Güvende</span>,<br />
              Operasyonunuz <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Sorunsuz.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed border-l-4 border-primary pl-6">
              Liman, gemi, proje kargo ve konteyner operasyonlarında uluslararası standartlarda lashing ve endüstriyel paketleme çözümleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 uppercase font-bold tracking-wide">
                  Hemen Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10 hover:text-white uppercase font-bold tracking-wide backdrop-blur-sm">
                  Hizmetlerimizi İncele
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
}
