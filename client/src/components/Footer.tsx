import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import logoImage from "@assets/logo-white-text.webp";

export function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-300 pt-24 pb-12 relative overflow-hidden font-sans border-t border-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
      
      <div className="container px-4 md:px-6 relative z-10">
        
        {/* Top Section: Brand & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-slate-800 pb-12">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
                <Link href="/">
                  <a className="block">
                    <img 
                      src={logoImage} 
                      alt="Capital Lashing" 
                      className="h-16 object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
                    />
                  </a>
                </Link>
                <p className="text-slate-400 leading-relaxed text-lg max-w-md font-light">
                    Dünya standartlarında lashing, proje kargo sabitleme ve liman hizmetleri. Yükünüzün güvenliği, bizim önceliğimiz.
                </p>
                <div className="flex gap-4">
                    {[
                        { icon: Linkedin, href: "https://www.linkedin.com/company/capital-lashing/", color: "hover:bg-[#0077b5]" },
                        { icon: Instagram, href: "https://www.instagram.com/capitallashing/", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600" },
                        { icon: Facebook, href: "https://www.facebook.com/capitallashing/", color: "hover:bg-[#1877f2]" },
                        { icon: Youtube, href: "https://www.youtube.com/@capitallashing", color: "hover:bg-[#ff0000]" }
                    ].map((social, index) => (
                        <a 
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Column 1 */}
            <div className="lg:col-span-2">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                    Hızlı Erişim
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h4>
                <ul className="space-y-4">
                    {[
                        { name: "Ana Sayfa", href: "/" },
                        { name: "Hakkımızda", href: "/about" },
                        { name: "Hizmetler", href: "/services" },
                        { name: "Referanslar", href: "/projects" },
                        { name: "İletişim", href: "/contact" }
                    ].map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <a className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm font-medium">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100"></span>
                                    {link.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links Column 2 */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                    Hizmetlerimiz
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h4>
                <ul className="space-y-4">
                    {[
                        { name: "Gemi & Proje Lashing", href: "/services/gemi-proje-lashing" },
                        { name: "Konteyner Lashing", href: "/services/konteyner-lashing" },
                        { name: "Proje Kargo", href: "/services/proje-kargo-lashing" },
                        { name: "Shrink Wrap", href: "/services/shrink-wrap" },
                        { name: "Endüstriyel Sandıklama", href: "/services/sandiklama" },
                    ].map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <a className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm font-medium">
                                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                                    {link.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
                <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                    İletişim
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                </h4>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-800 shadow-sm">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="block text-white text-sm font-bold mb-1">Merkez Ofis</span>
                            <p className="text-sm text-slate-400 leading-relaxed">Abdurrahmangazi Mah. Ebubekir Cad. No:26 Sancaktepe / İstanbul</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-800 shadow-sm">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="block text-white text-sm font-bold mb-1">Telefon</span>
                            <a href="tel:+902163120612" className="text-sm text-slate-400 hover:text-white transition-colors">+90 216 312 06 12</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-800 shadow-sm">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <span className="block text-white text-sm font-bold mb-1">E-posta</span>
                            <a href="mailto:info@capitallashing.com" className="text-sm text-slate-400 hover:text-white transition-colors">info@capitallashing.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
            <p className="text-sm text-slate-500 font-medium">
                © {new Date().getFullYear()} Capital Lashing & Port Services. Tüm hakları saklıdır.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
                <Link href="/privacy">
                  <a className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Gizlilik Politikası</a>
                </Link>
                <Link href="/terms">
                  <a className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Kullanım Koşulları</a>
                </Link>
                <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 border-l border-slate-800 pl-8">
                   <ShieldCheck className="h-4 w-4 text-primary" />
                   <span className="font-medium text-slate-400">SSL Güvenli Bağlantı</span>
                </div>
            </div>
        </div>
        
        {/* Designer Credit */}
        <div className="w-full text-center mt-8 pt-4 border-t border-slate-900/50">
            <a href="https://toov.com.tr" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-600 hover:text-primary transition-colors font-medium tracking-widest uppercase opacity-50 hover:opacity-100">
                Design: TOOV &lt;3
            </a>
        </div>
      </div>
    </footer>
  );
}
