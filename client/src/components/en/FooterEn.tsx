import { Link } from "wouter";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logoImage from "@assets/logo-white-text.webp";
import { BUSINESS } from "@shared/business";
import { enServicesData } from "@/data/en";

export function FooterEn() {
  return (
    <footer className="bg-[#020617] text-slate-300 pt-24 pb-12 relative overflow-hidden font-sans border-t border-slate-800">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 border-b border-slate-800 pb-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/en" className="block">
              <img
                src={logoImage}
                alt="Capital Lashing"
                className="h-16 object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-lg max-w-md font-light">
              Professional lashing, project cargo securing and port services in Turkey. The safety of your cargo is our priority.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-wide">
              <Globe className="h-4 w-4" />
              Türkçe site
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/en" },
                { name: "Services", href: "/en/services" },
                { name: "Contact", href: "/iletisim" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {enServicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/en/services/${service.slug}`} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-bold mb-1">Head Office</span>
                  <p className="text-sm text-slate-400 leading-relaxed">{BUSINESS.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-bold mb-1">Phone</span>
                  <a href={`tel:${BUSINESS.phone.e164}`} className="text-sm text-slate-400 hover:text-white transition-colors">{BUSINESS.phone.display}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-white text-sm font-bold mb-1">Email</span>
                  <a href={`mailto:${BUSINESS.email}`} className="text-sm text-slate-400 hover:text-white transition-colors">{BUSINESS.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Capital Lashing & Port Services. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors font-medium">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
