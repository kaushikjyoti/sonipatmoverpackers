import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const Pricing = () => {
  const localPricing = [
    { size: "1 BHK", price: "₹3,000 - ₹5,000", distance: "Within Sonipat" },
    { size: "2 BHK", price: "₹5,000 - ₹8,000", distance: "Within Sonipat" },
    { size: "3 BHK", price: "₹8,000 - ₹12,000", distance: "Within Sonipat" },
    { size: "4 BHK+", price: "₹12,000 - ₹18,000", distance: "Within Sonipat" },
  ];

  const intercityPricing = [
    { route: "Sonipat to Delhi", bhk1: "₹4,500 - ₹7,000", bhk2: "₹7,000 - ₹12,000", bhk3: "₹12,000 - ₹18,000" },
    { route: "Sonipat to Gurgaon", bhk1: "₹5,000 - ₹8,000", bhk2: "₹8,000 - ₹13,000", bhk3: "₹13,000 - ₹20,000" },
    { route: "Sonipat to Noida", bhk1: "₹5,500 - ₹8,500", bhk2: "₹8,500 - ₹14,000", bhk3: "₹14,000 - ₹21,000" },
    { route: "Sonipat to Faridabad", bhk1: "₹5,000 - ₹8,000", bhk2: "₹8,000 - ₹13,000", bhk3: "₹13,000 - ₹19,000" },
  ];

  const additionalServices = [
    { service: "Car Transportation", price: "₹4,000 - ₹8,000" },
    { service: "Bike Transportation", price: "₹2,000 - ₹4,000" },
    { service: "Packing Materials Only", price: "₹1,000 - ₹3,000" },
    { service: "Loading/Unloading Only", price: "₹1,500 - ₹3,000" },
    { service: "Storage (per month)", price: "₹2,000 - ₹10,000" },
    { service: "Unpacking Service", price: "₹1,000 - ₹2,500" },
  ];

  const whatIncluded = [
    "Professional packing materials",
    "Skilled labor for loading/unloading",
    "Transportation charges",
    "Basic insurance coverage",
    "GST included in all prices",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                No hidden charges. Get the best rates for packers and movers in Sonipat
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20detailed%20moving%20quote">
                  Get Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Moving Prices */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Local Shifting Charges</h2>
            <p className="text-center text-muted-foreground mb-8">
              Prices for moving within Sonipat city limits
            </p>
            <div className="max-w-3xl mx-auto overflow-x-auto">
              <table className="w-full bg-background rounded-lg shadow-lg">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">House Size</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {localPricing.map((row, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50">
                      <td className="px-6 py-4 font-semibold">{row.size}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Intercity Moving Prices */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Intercity Moving Charges</h2>
            <p className="text-center text-muted-foreground mb-8">
              Prices for moving from Sonipat to major NCR cities
            </p>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-background rounded-lg shadow-lg">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Route</th>
                    <th className="px-6 py-4 text-left">1 BHK</th>
                    <th className="px-6 py-4 text-left">2 BHK</th>
                    <th className="px-6 py-4 text-left">3 BHK</th>
                  </tr>
                </thead>
                <tbody>
                  {intercityPricing.map((row, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50">
                      <td className="px-6 py-4 font-semibold">{row.route}</td>
                      <td className="px-6 py-4 text-primary">{row.bhk1}</td>
                      <td className="px-6 py-4 text-primary">{row.bhk2}</td>
                      <td className="px-6 py-4 text-primary">{row.bhk3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex justify-between items-center">
                    <span className="font-medium">{service.service}</span>
                    <span className="text-primary font-semibold">{service.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">What's Included in Our Prices?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whatIncluded.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Info className="h-6 w-6 text-primary" />
                    <CardTitle>Important Notes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>• Prices are approximate and may vary based on actual items, floor, lift availability, and specific requirements</p>
                  <p>• Final quote will be provided after survey or detailed discussion</p>
                  <p>• Prices include GST (Goods and Services Tax)</p>
                  <p>• Additional charges may apply for fragile items, heavy furniture, or special packing requirements</p>
                  <p>• Discounts available for off-season and weekday moves</p>
                  <p>• Payment terms: 50% advance, balance on delivery</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need an Accurate Quote?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us for a free, no-obligation detailed quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20detailed%20moving%20quote">
                  WhatsApp Quote
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

export default Pricing;