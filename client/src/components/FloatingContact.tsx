import { useState } from "react";
import { Phone, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const contactInfo = {
    phone: "+902163120612",
    whatsapp: "902163120612", // Using same number for now
    email: "info@capitallashing.com"
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-2"
          >
            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-end gap-3 group"
            >
              <span className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                WhatsApp
              </span>
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </a>

            {/* Email Button */}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-end gap-3 group"
            >
              <span className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                E-Posta
              </span>
              <div className="w-12 h-12 rounded-full bg-red-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
            </a>

            {/* Phone Button */}
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-end gap-3 group"
            >
              <span className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Ara
              </span>
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <Button 
        size="icon"
        onClick={toggleOpen}
        className="w-16 h-16 rounded-full shadow-2xl bg-slate-900 hover:bg-slate-800 border-2 border-white/20 relative flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-105"
      >
        {isOpen ? (
          <X className="h-8 w-8 text-white" />
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
               <div className="flex items-center gap-1">
                 <img src="/favicon.png" alt="Logo" className="w-6 h-6 object-contain" />
                 <Phone className="w-5 h-5 text-primary" />
               </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="text-xs font-bold uppercase text-primary">İletişim</span>
            </div>
          </>
        )}
        
        {/* Subtle Glow/Pulse effect */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse pointer-events-none scale-110" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(56,170,225,0.5)] animate-pulse pointer-events-none" />
          </>
        )}
      </Button>
    </div>
  );
}
