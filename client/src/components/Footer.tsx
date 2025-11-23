import { Link } from "wouter";
import { Anchor, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none tracking-tight uppercase text-white">
                  Capital
                </span>
                <span className="font-heading font-bold text-2xl leading-none tracking-tight uppercase text-primary">
                  Lashing
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-6">
              Denizcilik ve lojistik sektöründe yük sabitleme, endüstriyel paketleme ve liman hizmetlerinde güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase text-white">Kurumsal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Ana Sayfa</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Hakkımızda</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Referanslar</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Blog / Bilgi Bankası</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">İletişim</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase text-white">Hizmetler</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Gemi & Konteyner Lashing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Proje Kargo Lashing</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Flat Rack Sabitleme</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Shrink Wrap Paketleme</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm cursor-pointer">Endüstriyel Sandıklama</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase text-white">İletişim</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/60">
              <li className="flex flex-col">
                <span className="font-bold text-white mb-1">Merkez:</span>
                Sancaktepe / İstanbul
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-white mb-1">Telefon:</span>
                <a href="tel:+902163120612" className="hover:text-primary transition-colors">+90 216 312 06 12</a>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-white mb-1">E-posta:</span>
                <a href="mailto:info@capitallashing.com" className="hover:text-primary transition-colors">info@capitallashing.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Capital Lashing & Port Services. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/40">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
