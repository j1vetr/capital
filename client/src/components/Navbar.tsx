import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, Instagram, Linkedin, Facebook, Youtube, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { servicesData } from "@/data/services";
import logoImage from "@assets/logo-white-text.webp";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  // Hizmetler will be handled separately
  { name: "Projeler", href: "/projeler" },
  { name: "İletişim", href: "/iletisim" },
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
    <>
      {/* Top Info Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[51] transition-transform duration-300 bg-slate-900 text-white py-3 border-b border-white/10 hidden md:block",
        isScrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm font-medium">
             <a href="mailto:info@capitallashing.com" className="flex items-center gap-2 hover:text-primary transition-colors">
               <Mail className="h-4 w-4" />
               <span>info@capitallashing.com</span>
             </a>
             <a href="tel:+902163120612" className="flex items-center gap-2 hover:text-primary transition-colors">
               <Phone className="h-4 w-4" />
               <span>+90 216 312 06 12</span>
             </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="opacity-50 hidden lg:inline text-sm">Bizi Takip Edin:</span>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/capital-lashing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@capitallashing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b top-0"
            : "bg-transparent py-4 top-0 md:top-12" // Adjusted top offset: 0 on mobile, 12 on desktop
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer relative py-2">
               {/* Logo Container */}
              <div className="relative p-1">
                <img 
                  src={logoImage} 
                  alt="Capital Lashing" 
                  className={cn(
                    "transition-all duration-300 object-contain",
                    isScrolled ? "h-12 invert-0 dark:invert-0" : "h-16 brightness-0 invert" 
                  )}
                  style={{
                      filter: isScrolled ? "invert(1) brightness(0.5) sepia(1) hue-rotate(170deg) saturate(5)" : "none"
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer text-sm", isScrolled ? "text-foreground" : "text-white")}>
                      Ana Sayfa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                   <Link href="/hakkimizda">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer text-sm", isScrolled ? "text-foreground" : "text-white")}>
                      Hakkımızda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer text-sm data-[state=open]:bg-transparent", isScrolled ? "text-foreground" : "text-white")}>
                    Hizmetler
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-md shadow-lg border border-border/10">
                      {servicesData.map((service) => (
                        <li key={service.id}>
                          <Link href={`/hizmetler/${service.id}`}>
                            <NavigationMenuLink asChild>
                              <a
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary focus:bg-slate-50 focus:text-primary cursor-pointer group"
                                )}
                              >
                                <div className="text-sm font-bold leading-none text-slate-800 group-hover:text-primary mb-1 flex items-center gap-2 uppercase">
                                  <service.icon className="h-4 w-4 text-primary" />
                                  {service.title}
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                                  {service.shortDescription}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/projeler">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer text-sm", isScrolled ? "text-foreground" : "text-white")}>
                      Projeler
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <Link href="/iletisim">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer text-sm", isScrolled ? "text-foreground" : "text-white")}>
                      İletişim
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/iletisim">
              <Button 
                className={cn(
                  "ml-4 uppercase font-black tracking-widest hidden lg:flex h-12 px-8 rounded-full relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,170,225,0.6)]",
                  isScrolled 
                    ? "bg-primary text-white hover:bg-blue-600" 
                    : "bg-white text-primary hover:bg-white hover:text-blue-600 border-2 border-transparent hover:border-white"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Teklif Al
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </Link>
          </div>

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
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 gap-2">
               <Link href="/">
                  <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    Ana Sayfa
                  </a>
                </Link>
                <Link href="/hakkimizda">
                  <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    Hakkımızda
                  </a>
                </Link>
                
                <div className="py-2 px-4">
                  <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Hizmetler</div>
                  <div className="pl-2 border-l-2 border-primary/20 space-y-2">
                    {servicesData.map((service) => (
                      <Link key={service.id} href={`/hizmetler/${service.id}`}>
                        <a 
                          className="block py-2 text-base font-medium text-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/projeler">
                  <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    Projeler
                  </a>
                </Link>
                 <Link href="/iletisim">
                  <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                    İletişim
                  </a>
                </Link>

              <div className="pt-4 mt-2 border-t">
                <Link href="/iletisim">
                  <Button className="w-full uppercase font-bold py-6" onClick={() => setIsMobileMenuOpen(false)}>
                    Teklif Al
                  </Button>
                </Link>
              </div>
              
              <div className="flex justify-center gap-6 mt-4 pb-4 border-t pt-4">
                <a href="https://www.instagram.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/capital-lashing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/capitallashing/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                 <a href="https://www.youtube.com/@capitallashing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
