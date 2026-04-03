import { Phone, Mail, Clock, Zap } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

const INFO = [
  {
    icon: Phone,
    label: "Bizi Arayın",
    value: "+90 216 312 06 12",
    href: "tel:+902163120612",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    label: "E-Posta",
    value: "info@capitallashing.com",
    href: "mailto:info@capitallashing.com",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Clock,
    label: "Operasyon",
    value: "7/24 – 365 Gün",
    href: null,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <Zap className="h-3 w-3" /> Hızlı Teklif
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-slate-900 mb-4 leading-none">
            Projenizi <span className="text-primary">Başlatalım</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Formu doldurun, 2 saat içinde uzman ekibimizden dönüş alın.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/8 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-5">

            {/* ── Left Panel ── */}
            <div className="lg:col-span-2 bg-slate-950 p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute -right-28 -top-28 w-96 h-96 rounded-full border border-white/[0.03] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Mini badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/25 rounded-full text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  İletişim
                </span>

                <h3 className="text-3xl md:text-4xl font-heading font-black uppercase text-white leading-tight mb-5">
                  Hemen<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-300">
                    İletişime<br />Geçin
                  </span>
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-12">
                  Uzman ekibimiz yükünüzü incelesin, en güvenli ve uygun fiyatlı taşıma planını oluştursun.
                </p>

                {/* Info items */}
                <div className="space-y-5">
                  {INFO.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 group">
                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-0.5">{item.label}</p>
                          <p className="text-white font-bold text-sm group-hover:text-primary transition-colors duration-300">{item.value}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href}>{content}</a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/5">
                <p className="text-xs text-slate-600 font-medium">
                  © {new Date().getFullYear()} Capital Lashing & Port Services
                </p>
              </div>
            </div>

            {/* ── Right Panel: Form ── */}
            <div className="lg:col-span-3 p-10 md:p-14">
              <h4 className="text-xl font-heading font-black uppercase text-slate-900 mb-8 tracking-tight">
                Teklif Formu
              </h4>
              <ContactForm />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
