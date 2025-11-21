import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingTeaser from "@/components/home/PricingTeaser";
import Testimonials from "@/components/home/Testimonials";
import PhotoGallery from "@/components/home/PhotoGallery";
import FAQ from "@/components/home/FAQ";
import LeadForm from "@/components/home/LeadForm";
import UrgencyBanner from "@/components/home/UrgencyBanner";
import ExitIntentPopup from "@/components/home/ExitIntentPopup";

const Home = () => {
  useEffect(() => {
    // Set meta tags
    document.title = "Best Packers and Movers in Sonipat - Affordable & Insured Shifting Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top-rated Packers and Movers in Sonipat. Home, Office & Vehicle Shifting. 100% Insured. Zero Damage Guarantee. Starting ₹4,500. Call +91 90686 62191 for Free Quote."
      );
    }

    // Add LocalBusiness Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sonipat Packers and Movers",
      "image": "https://sonipatpackers.in/hero-movers.jpg",
      "@id": "https://sonipatpackers.in",
      "url": "https://sonipatpackers.in",
      "telephone": "+919068662191",
      "email": "sonipatpackermovers@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sonipat",
        "addressLocality": "Sonipat",
        "addressRegion": "Haryana",
        "postalCode": "131001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.9931,
        "longitude": 77.0151
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "₹₹",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'local-business-schema';
    
    const existing = document.getElementById('local-business-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('local-business-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <PricingTeaser />
        <Testimonials />
        <PhotoGallery />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
      <ExitIntentPopup />
    </div>
  );
};

export default Home;