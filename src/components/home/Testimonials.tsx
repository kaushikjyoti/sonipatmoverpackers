import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Sonipat to Delhi",
      rating: 5,
      text: "Excellent service! They handled all my furniture with great care. The team was professional and completed the move on time. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      location: "Local Shifting in Sonipat",
      rating: 5,
      text: "Very affordable rates and amazing service. They packed everything properly and nothing was damaged. Will definitely use again!",
    },
    {
      name: "Amit Verma",
      location: "Office Relocation",
      rating: 5,
      text: "Shifted our entire office without any hassle. They worked efficiently and ensured minimal downtime. Great team!",
    },
    {
      name: "Neha Gupta",
      location: "Sonipat to Gurgaon",
      rating: 5,
      text: "Best packers and movers in Sonipat! Very reliable and trustworthy. They took care of all our belongings like their own.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;