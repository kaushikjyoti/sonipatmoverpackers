import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LeadForm from "@/components/home/LeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with Sonipat's most trusted packers and movers
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a
                    href="tel:+919896158100"
                    className="text-primary hover:underline font-semibold"
                  >
                    +91 98961 58100
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sun, 24/7</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Mail className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a
                    href="mailto:sonipatpackermovers@gmail.com"
                    className="text-primary hover:underline break-all"
                  >
                    sonipatpackermovers@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">24-hour response</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-whatsapp/10 rounded-full">
                      <Phone className="h-8 w-8 text-whatsapp" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/919896158100?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat"
                    className="text-primary hover:underline font-semibold"
                  >
                    +91 98961 58100
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Instant response</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Sonipat, Haryana<br />India - 131001
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <div className="max-w-2xl mx-auto mb-16">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Saturday:</span>
                          <span className="font-semibold text-foreground">7:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold text-foreground">8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Emergency Service:</span>
                          <span className="font-semibold text-secondary">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <LeadForm />

        {/* Service Areas */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Service Areas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Sonipat", "Delhi", "Gurgaon", "Noida",
                  "Faridabad", "Ghaziabad", "Rohtak", "Panipat",
                  "Karnal", "Kundli", "Rai", "Murthal",
                  "Bahalgarh", "Gannaur", "Kharkhoda", "Entire NCR"
                ].map((area, index) => (
                  <div
                    key={index}
                    className="bg-background p-3 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
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

export default Contact;