import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PackersAndMoversGanaurRoad = () => {
  useEffect(() => {
    document.title = "Packers and Movers on Ganaur Road - Best Shifting ₹4,500+ | Sonipat Packers";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional Packers and Movers on Ganaur Road, Sonipat. Home & office shifting. 100% Insured. Zero Damage Guarantee. Call +91 90686 62191 for Free Quote."
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://sonipatpackers.in/packers-and-movers-ganaur-road');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    const ogTags = [
      { property: 'og:title', content: 'Packers and Movers on Ganaur Road - Best Shifting ₹4,500+' },
      { property: 'og:description', content: 'Professional Packers and Movers on Ganaur Road, Sonipat. Home & office shifting. 100% Insured.' },
      { property: 'og:url', content: 'https://sonipatpackers.in/packers-and-movers-ganaur-road' },
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
                Packers and Movers on Ganaur Road
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
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20packers%20on%20Ganaur%20Road">
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
              <h2 className="text-3xl font-bold mb-6">Professional Packers and Movers on Ganaur Road, Sonipat</h2>
              
              <p className="text-muted-foreground mb-4">
                Ganaur Road connects Sonipat to Ganaur town and serves several residential and commercial areas. Sonipat Packers and Movers provides expert relocation services along this route with complete safety and insurance coverage.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expert Service on Ganaur Road Corridor</h3>
              <p className="text-muted-foreground mb-4">
                Whether you're relocating within Ganaur Road localities or moving to/from Ganaur, our experienced team ensures smooth transitions. We provide end-to-end packing, loading, transportation, and unpacking services with professional care.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
                <h3 className="text-xl font-semibold mb-2">Ready to Move on Ganaur Road?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today for expert moving services on Ganaur Road!
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

export default PackersAndMoversGanaurRoad;