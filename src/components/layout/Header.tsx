import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCitiesOpen, setIsCitiesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const cityPages = [
    { name: "Sonipat", href: "/packers-and-movers-sonipat" },
    { name: "Kundli", href: "/packers-and-movers-kundli" },
    { name: "Rai", href: "/packers-and-movers-rai-sonipat" },
    { name: "Ganaur", href: "/packers-and-movers-ganaur" },
    { name: "Murthal", href: "/packers-and-movers-murthal" },
    { name: "Barhi", href: "/packers-and-movers-barhi" },
    { name: "Kharkhoda", href: "/packers-and-movers-kharkhoda" },
  ];

  const newCityPages = [
    { name: "Gohana", href: "/packers-and-movers-gohana" },
    { name: "Samalkha", href: "/packers-and-movers-samalkha" },
    { name: "Narela", href: "/packers-and-movers-narela" },
    { name: "Bahalgarh", href: "/packers-and-movers-bahalgarh" },
    { name: "Kharkhoda Road", href: "/packers-and-movers-kharkhoda-road" },
    { name: "Panipat Border", href: "/packers-and-movers-panipat-border" },
    { name: "Rohtak Road", href: "/packers-and-movers-rohtak-road" },
    { name: "Ganaur Road", href: "/packers-and-movers-ganaur-road" },
  ];

  const allCityPages = [...cityPages, ...newCityPages];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Trust Badges Bar */}
      <div className="bg-primary/10 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-semibold">Licensed & IBA Approved</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-semibold">100% Damage-Free Moves</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="font-bold text-primary">Serving Sonipat since 2020</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-primary">Sonipat Packers</span>
              <span className="text-xs text-muted-foreground">& Movers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCitiesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50 max-h-96 overflow-y-auto">
                  {allCityPages.map((city) => (
                    <Link
                      key={city.name}
                      to={city.href}
                      onClick={() => setIsCitiesOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+919068662191"
              className="flex items-center space-x-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              <Phone className="h-4 w-4" />
              <span>+91 90686 62191</span>
            </a>
            <Button asChild size="sm">
              <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <a href="tel:+919068662191" className="text-primary">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-foreground hover:text-primary"
                >
                  Cities
                  <svg className={`w-5 h-5 transition-transform ${isCitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCitiesOpen && (
                  <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto">
                    {allCityPages.map((city) => (
                      <Link
                        key={city.name}
                        to={city.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsCitiesOpen(false);
                        }}
                        className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="px-3 pt-3 border-t">
                <a
                  href="tel:+919068662191"
                  className="flex items-center space-x-2 text-primary font-semibold mb-3"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 90686 62191</span>
                </a>
                <Button asChild className="w-full">
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                    Get Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;