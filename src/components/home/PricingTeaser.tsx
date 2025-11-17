import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PricingTeaser = () => {
  const packages = [
    {
      type: "1 BHK",
      price: "₹4,000 - ₹6,000",
      features: ["Professional Packing", "Safe Loading", "Insured Transit", "Timely Delivery"],
    },
    {
      type: "2 BHK",
      price: "₹6,000 - ₹10,000",
      features: ["Complete Packing", "Furniture Dismantling", "Insured Transit", "Setup Service"],
      popular: true,
    },
    {
      type: "3 BHK",
      price: "₹10,000 - ₹15,000",
      features: ["Premium Packing", "Full Service", "Premium Insurance", "Priority Delivery"],
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Affordable Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden charges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.popular ? "border-primary border-2 shadow-lg" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold mb-2">{pkg.type}</div>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">within Sonipat</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/pricing">View Detailed Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;