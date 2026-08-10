import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, ArrowRight, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@assets/logo-white-text.webp";
import { BUSINESS } from "@shared/business";

interface NavbarEnProps {
  trPath?: string;
}

const navLinks = [
  { name: "Home", href: "/en" },
  { name: "Services", href: "/en/services" },
];

export function NavbarEn({ trPath = "/" }: NavbarEnProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[51] transition-transform duration-300 bg-slate-900 text-white py-3 border-b border-white/10 hidden md:block",
        isScrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>{BUSINESS.email}</span>
            </a>
            <a href={`tel:${BUSINESS.phone.e164}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>{BUSINESS.phone.display}</span>
            </a>
          </div>
          <Link href={trPath} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide">
            <Globe className="h-4 w-4" />
            Türkçe
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b top-0"
            : "bg-transparent py-4 top-0 md:top-12"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/en">
            <div className="flex items-center gap-2 group cursor-pointer relative py-2">
              <div className="relative p-1">
                <img
                  src={logoImage}
                  alt="Capital Lashing"
                  className={cn(
                    "transition-all duration-300 object-contain",
                    isScrolled ? "h-12" : "h-16 brightness-0 invert"
                  )}
                  style={{
                    filter: isScrolled ? "invert(1) brightness(0.5) sepia(1) hue-rotate(170deg) saturate(5)" : "none"
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md uppercase tracking-wide font-bold text-sm hover:bg-white/10 hover:text-primary transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className={cn(
                "px-4 py-2 rounded-md uppercase tracking-wide font-bold text-sm hover:bg-white/10 hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Contact
            </Link>

            <Button asChild
                className={cn(
                  "ml-4 uppercase font-black tracking-widest hidden lg:flex h-12 px-8 rounded-full relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,170,225,0.6)]",
                  isScrolled
                    ? "bg-primary text-white hover:bg-blue-600"
                    : "bg-white text-primary hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-white"
                )}
              >
                <Link href="/iletisim">
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href={trPath}
                className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-primary flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="h-5 w-5" />
                Türkçe
              </Link>

              <div className="pt-4 mt-2 border-t">
                <Button asChild className="w-full uppercase font-bold py-6">
                  <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
