import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImage from "@assets/logo-white-text.webp";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/">
              <a className="block">
                <img 
                  src={logoImage} 
                  alt="Capital Lashing" 
                  className="h-14 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Denizcilik ve lojistik sektöründe, yük güvenliği ve endüstriyel paketleme alanında global standartlarda çözüm ortağınız.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/company/capital-lashing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300 group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@capitallashing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all duration-300 group">
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-3">Hızlı Erişim</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>Ana Sayfa</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">Hakkımızda</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Hizmetlerimiz</a></Link></li>
              <li><Link href="/projects"><a className="hover:text-primary transition-colors">Projeler</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">İletişim</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-3">Hizmetler</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/gemi-proje-lashing"><a className="hover:text-primary transition-colors">Gemi Proje Lashing</a></Link></li>
              <li><Link href="/services/konteyner-lashing"><a className="hover:text-primary transition-colors">Konteyner Lashing</a></Link></li>
              <li><Link href="/services/proje-kargo-lashing"><a className="hover:text-primary transition-colors">Proje Kargo</a></Link></li>
              <li><Link href="/services/shrink-wrap"><a className="hover:text-primary transition-colors">Shrink Wrap</a></Link></li>
              <li><Link href="/services/tekne-yat-lashing"><a className="hover:text-primary transition-colors">Tekne & Yat Taşıma</a></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-3">Bize Ulaşın</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Abdurrahmangazi Mah. Ebubekir Cad. No:26 Sancaktepe / İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+902163120612" className="hover:text-white transition-colors font-bold">+90 216 312 06 12</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@capitallashing.com" className="hover:text-white transition-colors">info@capitallashing.com</a>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-800 mt-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>7/24 Operasyonel Destek</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Capital Lashing & Port Services. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-primary transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-primary transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
