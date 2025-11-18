import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, TrendingDown, CheckCircle2 } from "lucide-react";

const SonipatToDelhi = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick Transit Time",
      description: "Average 4-6 hours door-to-door delivery from Sonipat to Delhi",
    },
    {
      icon: TrendingDown,
      title: "Best Rates",
      description: "Starting from ₹4,500 for 1 BHK with no hidden charges",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind",
    },
    {
      icon: CheckCircle2,
      title: "Experienced Team",
      description: "500+ successful Sonipat to Delhi relocations completed",
    },
  ];

  const pricingTable = [
    { size: "1 BHK", price: "₹4,500 - ₹7,000", items: "Up to 1,000 kg" },
    { size: "2 BHK", price: "₹7,000 - ₹12,000", items: "1,000 - 2,000 kg" },
    { size: "3 BHK", price: "₹12,000 - ₹18,000", items: "2,000 - 3,000 kg" },
    { size: "4 BHK+", price: "₹18,000 - ₹25,000", items: "3,000+ kg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <MapPin className="h-10 w-10 text-primary" />
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Packers and Movers<br />Sonipat to Delhi
                </h1>
                <MapPin className="h-10 w-10 text-secondary" />
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Professional, affordable, and reliable moving services from Sonipat to Delhi NCR. Same-day service available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20Sonipat%20to%20Delhi%20moving%20quote">
                    Get Instant Quote
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+919068662191">Call: +91 90686 62191</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us for Sonipat to Delhi Moving?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Sonipat to Delhi Moving Charges
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Transparent pricing with no hidden costs. Final price may vary based on actual items and distance.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-background rounded-lg shadow-lg">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left">House Size</th>
                      <th className="px-6 py-4 text-left">Estimated Cost</th>
                      <th className="px-6 py-4 text-left">Typical Load</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50">
                        <td className="px-6 py-4 font-semibold">{row.size}</td>
                        <td className="px-6 py-4 text-primary font-semibold">{row.price}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20Sonipat%20to%20Delhi%20moving%20quote">
                    Get Exact Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Moving Process: Sonipat to Delhi
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  desc: "Call or WhatsApp us for instant quote and consultation",
                },
                {
                  step: "2",
                  title: "Survey & Planning",
                  desc: "We assess your items and plan the best moving strategy",
                },
                {
                  step: "3",
                  title: "Professional Packing",
                  desc: "Expert team packs all items with quality materials",
                },
                {
                  step: "4",
                  title: "Safe Transportation",
                  desc: "Secure loading and transit to Delhi with real-time tracking",
                },
                {
                  step: "5",
                  title: "Delivery & Setup",
                  desc: "Unloading and arranging at your new Delhi home",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "How long does it take to move from Sonipat to Delhi?",
                  a: "Typically 4-6 hours for door-to-door service, depending on traffic and the specific locations in Sonipat and Delhi.",
                },
                {
                  q: "Do you provide packing materials?",
                  a: "Yes, we provide all packing materials including boxes, bubble wrap, tape, and protective sheets as part of our service.",
                },
                {
                  q: "Is insurance included in the price?",
                  a: "Basic insurance is included. Additional comprehensive coverage is available at a nominal extra cost.",
                },
                {
                  q: "Can I get same-day moving service?",
                  a: "Yes, we offer same-day moving services subject to availability. Call us early in the day for best chances.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Moving from Sonipat to Delhi?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote in 2 minutes. Best rates guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20Sonipat%20to%20Delhi%20moving%20quote">
                  WhatsApp Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+919068662191">Call: +91 90686 62191</a>
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

export default SonipatToDelhi;