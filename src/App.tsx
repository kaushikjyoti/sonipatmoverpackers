import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SonipatToDelhi from "./pages/SonipatToDelhi";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import PackersAndMoversSonipat from "./pages/PackersAndMoversSonipat";
import PackersAndMoversKundli from "./pages/PackersAndMoversKundli";
import PackersAndMoversRai from "./pages/PackersAndMoversRai";
import PackersAndMoversGanaur from "./pages/PackersAndMoversGanaur";
import PackersAndMoversMurthal from "./pages/PackersAndMoversMurthal";
import PackersAndMoversBarhi from "./pages/PackersAndMoversBarhi";
import PackersAndMoversKharkhoda from "./pages/PackersAndMoversKharkhoda";
import PackersAndMoversGohana from "./pages/PackersAndMoversGohana";
import PackersAndMoversSamalkha from "./pages/PackersAndMoversSamalkha";
import PackersAndMoversNarela from "./pages/PackersAndMoversNarela";
import PackersAndMoversBahalgarh from "./pages/PackersAndMoversBahalgarh";
import PackersAndMoversKharkhodaRoad from "./pages/PackersAndMoversKharkhodaRoad";
import PackersAndMoversPanipatBorder from "./pages/PackersAndMoversPanipatBorder";
import PackersAndMoversRohtakRoad from "./pages/PackersAndMoversRohtakRoad";
import PackersAndMoversGanaurRoad from "./pages/PackersAndMoversGanaurRoad";
import TestimonialsPage from "./pages/TestimonialsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sonipat-to-delhi" element={<SonipatToDelhi />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packers-and-movers-sonipat" element={<PackersAndMoversSonipat />} />
            <Route path="/packers-and-movers-kundli" element={<PackersAndMoversKundli />} />
            <Route path="/packers-and-movers-rai-sonipat" element={<PackersAndMoversRai />} />
            <Route path="/packers-and-movers-ganaur" element={<PackersAndMoversGanaur />} />
            <Route path="/packers-and-movers-murthal" element={<PackersAndMoversMurthal />} />
            <Route path="/packers-and-movers-barhi" element={<PackersAndMoversBarhi />} />
            <Route path="/packers-and-movers-kharkhoda" element={<PackersAndMoversKharkhoda />} />
            <Route path="/packers-and-movers-gohana" element={<PackersAndMoversGohana />} />
            <Route path="/packers-and-movers-samalkha" element={<PackersAndMoversSamalkha />} />
            <Route path="/packers-and-movers-narela" element={<PackersAndMoversNarela />} />
            <Route path="/packers-and-movers-bahalgarh" element={<PackersAndMoversBahalgarh />} />
            <Route path="/packers-and-movers-kharkhoda-road" element={<PackersAndMoversKharkhodaRoad />} />
            <Route path="/packers-and-movers-panipat-border" element={<PackersAndMoversPanipatBorder />} />
            <Route path="/packers-and-movers-rohtak-road" element={<PackersAndMoversRohtakRoad />} />
            <Route path="/packers-and-movers-ganaur-road" element={<PackersAndMoversGanaurRoad />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
