import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
  { name: "Hakkımızda", href: "/about" },
  // Hizmetler will be handled separately
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
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer relative">
             {/* Logo Container with glow effect */}
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Capital Lashing" 
                className={cn(
                  "transition-all duration-300 object-contain",
                  isScrolled ? "h-10 invert-0 dark:invert-0" : "h-12 brightness-0 invert" 
                  // Note: brightness-0 invert makes it white. 
                  // If the logo is already white text with color icon, just use it as is for dark bg.
                  // The user provided logo-white-text.webp which has white text. 
                  // So for transparent header (dark bg), it's perfect.
                  // For white header (scrolled), we might need to invert it or use a dark version if available.
                  // For now, let's assume the provided logo works best on dark. 
                  // If scrolled (white bg), we need to make it visible. 
                  // Since it's a white text logo, on white bg it will be invisible.
                  // Hack: use filter invert(1) on white background to make it black?
                )}
                style={{
                    filter: isScrolled ? "invert(1) brightness(0.5) sepia(1) hue-rotate(170deg) saturate(5)" : "drop-shadow(0 0 8px rgba(56, 170, 225, 0.5))" 
                    // On scroll: try to make it dark blue/black. 
                    // On transparent: add glow
                }}
              />
              {/* Animation underline effect */}
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_rgba(56,170,225,0.8)]" />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer", isScrolled ? "text-foreground" : "text-white")}>
                    Ana Sayfa
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                 <Link href="/about">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer", isScrolled ? "text-foreground" : "text-white")}>
                    Hakkımızda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer data-[state=open]:bg-transparent", isScrolled ? "text-foreground" : "text-white")}>
                  Hizmetler
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {servicesData.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${service.id}`}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                              )}
                            >
                              <div className="text-sm font-medium leading-none text-primary mb-1 flex items-center gap-2">
                                <service.icon className="h-4 w-4" />
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                <Link href="/projects">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer", isScrolled ? "text-foreground" : "text-white")}>
                    Projeler
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                 <Link href="/contact">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-primary uppercase tracking-wide font-bold cursor-pointer", isScrolled ? "text-foreground" : "text-white")}>
                    İletişim
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact">
            <Button 
              variant={isScrolled ? "default" : "secondary"} 
              className={cn("ml-4 uppercase font-bold tracking-wider hidden lg:flex", !isScrolled && "bg-white text-primary hover:bg-gray-100")}
            >
              Teklif Al
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
              <Link href="/about">
                <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  Hakkımızda
                </a>
              </Link>
              
              <div className="py-2 px-4">
                <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Hizmetler</div>
                <div className="pl-2 border-l-2 border-primary/20 space-y-2">
                  {servicesData.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
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

              <Link href="/projects">
                <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  Projeler
                </a>
              </Link>
               <Link href="/contact">
                <a className="text-lg font-bold py-3 px-4 rounded-md hover:bg-muted transition-colors text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  İletişim
                </a>
              </Link>

            <div className="pt-4 mt-2 border-t">
              <Link href="/contact">
                <Button className="w-full uppercase font-bold py-6" onClick={() => setIsMobileMenuOpen(false)}>
                  Teklif Al
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
