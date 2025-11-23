import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/about" },
  { name: "Hizmetler", href: "/services" },
  { name: "Projeler", href: "/projects" },
  { name: "İletişim", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-b"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-2 rounded-sm group-hover:bg-primary/90 transition-colors">
              <Anchor className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-heading font-bold text-xl leading-none tracking-tight uppercase", isScrolled ? "text-foreground" : "text-white")}>
                Capital
              </span>
              <span className={cn("font-heading font-bold text-xl leading-none tracking-tight uppercase text-primary")}>
                Lashing
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wider cursor-pointer",
                  location === link.href
                    ? "text-primary font-bold"
                    : isScrolled ? "text-foreground/80" : "text-white/90"
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              variant={isScrolled ? "default" : "secondary"} 
              className={cn("uppercase font-bold tracking-wider", !isScrolled && "bg-white text-primary hover:bg-gray-100")}
            >
              Teklif Al
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-lg font-medium py-2 px-4 rounded-md hover:bg-muted transition-colors block cursor-pointer",
                    location === link.href ? "text-primary bg-muted/50" : "text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full uppercase font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                Teklif Al
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
