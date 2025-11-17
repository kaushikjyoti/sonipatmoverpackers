import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Truck, Package, Warehouse, MoveVertical, Car, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Shifting Services",
      description: "Complete household relocation from 1 BHK to 4 BHK+ homes. We handle packing, loading, transportation, unloading, and unpacking with utmost care.",
      features: [
        "Professional packing materials",
        "Furniture dismantling & assembly",
        "Safe handling of fragile items",
        "Door-to-door service",
      ],
    },
    {
      icon: Building2,
      title: "Office Relocation",
      description: "Minimize business downtime with our efficient office moving services. We handle IT equipment, furniture, and documents with professional care.",
      features: [
        "Minimal business disruption",
        "IT equipment handling",
        "Secure document transfer",
        "Weekend/after-hours moving",
      ],
    },
    {
      icon: Truck,
      title: "Local Shifting",
      description: "Quick and reliable local moving services within Sonipat and nearby areas. Same-day service available for urgent moves.",
      features: [
        "Same-day service available",
        "Affordable rates",
        "Experienced local drivers",
        "Flexible timing",
      ],
    },
    {
      icon: Car,
      title: "Vehicle Transportation",
      description: "Safe and secure car and bike transport services. We use specialized carriers to ensure your vehicle reaches safely.",
      features: [
        "Enclosed carriers available",
        "Insurance coverage",
        "Door-to-door delivery",
        "Real-time tracking",
      ],
    },
    {
      icon: Warehouse,
      title: "Storage & Warehousing",
      description: "Secure storage solutions for short-term and long-term needs. Climate-controlled warehouses with 24/7 security.",
      features: [
        "Climate-controlled facilities",
        "24/7 CCTV surveillance",
        "Flexible rental periods",
        "Easy access",
      ],
    },
    {
      icon: MoveVertical,
      title: "Loading & Unloading",
      description: "Professional loading and unloading services with trained staff. Perfect if you just need help with the heavy lifting.",
      features: [
        "Trained professionals",
        "Proper equipment",
        "Quick service",
        "Damage-free handling",
      ],
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "High-quality packing materials and expert packing services to ensure your belongings are protected during transit.",
      features: [
        "Quality packing materials",
        "Item-wise packing",
        "Labeling & inventory",
        "Unpacking service available",
      ],
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for your peace of mind. We value your belongings as much as you do.",
      features: [
        "Transit insurance",
        "Goods protection",
        "Claims assistance",
        "Transparent coverage",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive moving and packing solutions for all your needs in Sonipat and Delhi NCR
              </p>
              <Button size="lg" asChild>
                <a href="tel:+919896158100">Call Now: +91 98961 58100</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Move?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote today and experience hassle-free moving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919896158100?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                  WhatsApp Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+919896158100">Call: +91 98961 58100</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;