import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroVideo from "@assets/generated_videos/cinematic_industrial_port_scene_with_shipping_containers.mp4";

export function Hero() {
  const [displayText, setDisplayText] = useState("GÜVENİN");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let interval: NodeJS.Timeout;
    
    const startGlitch = () => {
      setIsGlitching(true);
      let step = 0;
      const targetText = "CAPITAL";
      const startText = "GÜVENİN";
      const duration = 1500; 
      const fps = 20;
      const steps = duration / (1000 / fps);
      
      interval = setInterval(() => {
        step++;
        if (step >= steps) {
          clearInterval(interval);
          setDisplayText("CAPITAL");
          setIsGlitching(false);
        } else {
          const progress = step / steps;
          // Calculate how many characters should be from target text based on progress
          const glitched = targetText.split("").map((char, i) => {
             // If we're past the "flip point" for this character index, show target
             // Add some randomness so they don't flip strictly one by one
             if (progress > (i / targetText.length) + (Math.random() * 0.2 - 0.1)) {
               return char;
             }
             // Otherwise show start text char
             return startText[i] || char;
          }).join("");
          setDisplayText(glitched);
        }
      }, 1000 / fps);
    };

    // Start animation after 2 seconds
    const timer = setTimeout(startGlitch, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/90 uppercase tracking-widest">Global Lashing Çözümleri</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-8 uppercase drop-shadow-2xl">
              LASHINGDE <br className="md:hidden" />
              <span className={`inline-block min-w-[200px] transition-colors duration-100 ${isGlitching ? 'text-red-500 skew-x-12 scale-110' : 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'}`}>
                {displayText}
              </span> <br className="md:hidden" />
              İMZASI
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Denizcilik ve ağır sanayi operasyonlarında, uluslararası standartlarda yük sabitleme ve koruma hizmetleriyle ticaretinizi güvence altına alıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg uppercase font-bold tracking-wide shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                  Hemen Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10 hover:text-white uppercase font-bold tracking-wide backdrop-blur-sm hover:scale-105 transition-all">
                  Hizmetleri İncele
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest">Keşfet</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
}
