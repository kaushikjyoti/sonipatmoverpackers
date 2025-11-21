import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck } from "lucide-react";

const PackersAndMoversSamalkha = () => {
  useEffect(() => {
    document.title = "Packers and Movers in Samalkha - Best Shifting Services ₹4,500+ | Sonipat Packers";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top-rated Packers and Movers in Samalkha, Sonipat. Professional home, office & vehicle shifting services. 100% Insured. Zero Damage Guarantee. Call +91 90686 62191 for Free Quote."
      );
    }

    // Add canonical link
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://sonipatpackers.in/packers-and-movers-samalkha');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Packers and Movers in Samalkha - Best Shifting Services ₹4,500+' },
      { property: 'og:description', content: 'Top-rated Packers and Movers in Samalkha, Sonipat. Professional home, office & vehicle shifting services. 100% Insured.' },
      { property: 'og:url', content: 'https://sonipatpackers.in/packers-and-movers-samalkha' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://sonipatpackers.in/hero-movers.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Packers and Movers in Samalkha - Best Shifting Services ₹4,500+' },
      { name: 'twitter:description', content: 'Top-rated Packers and Movers in Samalkha, Sonipat. Professional home, office & vehicle shifting services. 100% Insured.' },
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Trusted Packers and Movers in Samalkha
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Professional Home & Office Shifting Services | 100% Insured | Zero Damage Guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20packers%20and%20movers%20in%20Samalkha">
                    WhatsApp for Free Quote
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>100% Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>500+ Moves</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services in Samalkha</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: "🏠", title: "Home Shifting", desc: "Complete household relocation with packing" },
                { icon: "🏢", title: "Office Moving", desc: "Corporate shifting with minimal downtime" },
                { icon: "🚗", title: "Vehicle Transport", desc: "Car & bike shifting with care" },
                { icon: "📦", title: "Packing Services", desc: "Professional packing materials included" },
                { icon: "🏪", title: "Warehouse Storage", desc: "Safe storage facilities available" },
                { icon: "✈️", title: "Long Distance", desc: "Interstate moving services" },
              ].map((service, idx) => (
                <div key={idx} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us in Samalkha?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: CheckCircle, title: "Licensed & IBA Approved", desc: "Certified moving company" },
                { icon: Shield, title: "100% Insurance Cover", desc: "All goods fully insured" },
                { icon: Clock, title: "On-Time Delivery", desc: "Guaranteed timely service" },
                { icon: Star, title: "Experienced Team", desc: "10+ years in moving industry" },
                { icon: Truck, title: "Own Fleet", desc: "Well-maintained trucks" },
                { icon: Phone, title: "24/7 Support", desc: "Always available for you" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Professional Packers and Movers in Samalkha, Sonipat</h2>
              
              <p className="text-muted-foreground mb-4">
                Looking for reliable packers and movers in Samalkha? Sonipat Packers and Movers is your trusted partner for all relocation needs in Samalkha and surrounding areas. With over a decade of experience serving the Sonipat region, we understand the unique requirements of local and intercity moves.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Complete Moving Solutions in Samalkha</h3>
              <p className="text-muted-foreground mb-4">
                We offer end-to-end relocation services including professional packing using high-quality materials, careful loading and unloading, safe transportation, and timely delivery. Our team of trained professionals handles everything from small 1BHK apartments to large commercial offices with equal care and dedication.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Local Expertise in Samalkha Area</h3>
              <p className="text-muted-foreground mb-4">
                Being based in Sonipat, we have extensive knowledge of Samalkha's localities, traffic patterns, and best routes. Whether you're moving within Samalkha or relocating to Delhi NCR, our local expertise ensures smooth and hassle-free transportation. We serve all areas including Samalkha City, surrounding villages, and connecting highways.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Affordable Pricing with Zero Hidden Charges</h3>
              <p className="text-muted-foreground mb-4">
                We believe in transparent pricing. Our rates start from just ₹4,500 for local moves within Samalkha. Get a free quote by calling us at +91 90686 62191 or WhatsApp. We provide detailed quotations with no hidden charges, and all our services come with comprehensive insurance coverage for your peace of mind.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Why Samalkha Residents Trust Us</h3>
              <p className="text-muted-foreground mb-4">
                Our commitment to quality service has made us the preferred choice for hundreds of families and businesses in Samalkha. We offer damage-free moves, on-time delivery guarantee, experienced and verified staff, 24/7 customer support, and competitive rates. Every move is supervised by experienced managers to ensure nothing goes wrong.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
                <h3 className="text-xl font-semibold mb-2">Ready to Move in Samalkha?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact Sonipat Packers and Movers today for a free, no-obligation quote. Our team is ready to make your move smooth and stress-free!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a href="tel:+919068662191">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: +91 90686 62191
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20for%20moving%20in%20Samalkha">
                      WhatsApp Quote
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

export default PackersAndMoversSamalkha;