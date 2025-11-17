import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PricingTeaser from "@/components/home/PricingTeaser";
import Testimonials from "@/components/home/Testimonials";
import LeadForm from "@/components/home/LeadForm";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PricingTeaser />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;