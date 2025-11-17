import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Truck, Package, Warehouse, MoveVertical } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Shifting",
      description: "Complete household relocation with professional packing and safe transportation.",
    },
    {
      icon: Building2,
      title: "Office Relocation",
      description: "Efficient office moving services with minimal downtime for your business.",
    },
    {
      icon: Truck,
      title: "Local Moving",
      description: "Quick and reliable local shifting within Sonipat and nearby areas.",
    },
    {
      icon: Package,
      title: "Car/Bike Transport",
      description: "Safe vehicle transportation with proper care and insurance coverage.",
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure storage facilities for short-term and long-term needs.",
    },
    {
      icon: MoveVertical,
      title: "Loading/Unloading",
      description: "Professional loading and unloading services with trained staff.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;