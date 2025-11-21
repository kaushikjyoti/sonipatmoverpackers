import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PackersAndMoversRohtakRoad = () => {
  useEffect(() => {
    document.title = "Packers and Movers on Rohtak Road - Best Shifting ₹4,500+ | Sonipat Packers";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional Packers and Movers on Rohtak Road, Sonipat. Home & office shifting. 100% Insured. Zero Damage Guarantee. Call +91 90686 62191 for Free Quote."
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://sonipatpackers.in/packers-and-movers-rohtak-road');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    const ogTags = [
      { property: 'og:title', content: 'Packers and Movers on Rohtak Road - Best Shifting ₹4,500+' },
      { property: 'og:description', content: 'Professional Packers and Movers on Rohtak Road, Sonipat. Home & office shifting. 100% Insured.' },
      { property: 'og:url', content: 'https://sonipatpackers.in/packers-and-movers-rohtak-road' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://sonipatpackers.in/hero-movers.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ];

    ogTags.forEach(tag => {
      const meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`) || document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      if (!document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`)) {
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Packers and Movers on Rohtak Road
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Professional Shifting Services | 100% Insured | Zero Damage Guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20packers%20on%20Rohtak%20Road">
                    WhatsApp for Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Professional Packers and Movers on Rohtak Road, Sonipat</h2>
              
              <p className="text-muted-foreground mb-4">
                Rohtak Road is a major arterial road connecting Sonipat to Rohtak and beyond. Our packers and movers service provides complete relocation solutions for all areas along this important route, ensuring safe and timely delivery of your belongings.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Comprehensive Moving Services</h3>
              <p className="text-muted-foreground mb-4">
                We serve residential colonies, commercial establishments, and industrial units along Rohtak Road. Our services include professional packing, secure transportation, and careful unpacking at your new location.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
                <h3 className="text-xl font-semibold mb-2">Ready to Move on Rohtak Road?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact Sonipat Packers and Movers for reliable service on Rohtak Road corridor!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a href="tel:+919068662191">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: +91 90686 62191
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackersAndMoversRohtakRoad;