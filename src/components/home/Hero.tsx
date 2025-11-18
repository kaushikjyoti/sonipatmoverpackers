import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-movers.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Best Packers and Movers in{" "}
                <span className="text-primary">Sonipat</span> – Affordable & Insured Shifting
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Home | Office | Vehicle Transport – Door-to-Door Service in Sonipat & Delhi NCR
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="text-lg px-8 py-6 h-auto"
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8 py-6 h-auto"
              >
                <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <span className="text-sm">Rated 4.9/5 by 500+ Happy Customers</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional packers and movers team loading boxes into truck in Sonipat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;