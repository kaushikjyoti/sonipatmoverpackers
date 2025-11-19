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
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/packers-and-movers-kundli" element={<PackersAndMoversKundli />} />
<Route path="/packers-and-movers-rai-sonipat" element={<PackersAndMoversRai />} />
          </Routes>
                 {/* ========= EXIT-INTENT POPUP – ₹500 OFF ========= */}
          <div id="exitPopup" className="fixed inset-0 bg-black bg-opacity-70 z-[9999] hidden flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center relative shadow-2xl">
              {/* Close button */}
              <button 
                onClick={() => document.getElementById('exitPopup')?.classList.add('hidden')}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold text-green-600 mb-3">
                Wait! Get ₹500 OFF Your Move
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Enter your phone number & we’ll send you an instant discounted quote
              </p>

              <input 
                type="tel" 
                placeholder="+91 ___________" 
                className="w-full border-2 border-gray-300 rounded-xl px-5 py-4 mb-5 text-lg focus:border-green-500 outline-none"
              />

              <a 
                href="https://wa.me/919896158100?text=Hi!%20I%20want%20the%20₹500%20discount%20quote%20for%20my%20move%20🚛"
                className="block bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-5 rounded-xl transition"
              >
                Send My Discounted Quote → WhatsApp
              </a>

              <p className="text-sm text-gray-500 mt-4">Limited slots this week only!</p>
            </div>
          </div>

          {/* Exit-intent trigger script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                let popupShown = false;
                document.addEventListener('mouseout', function(e) {
                  if (!e.relatedTarget && !popupShown && e.clientY < 10) {
                    popupShown = true;
                    document.getElementById('exitPopup')?.classList.remove('hidden');
                  }
                });
              `,
            }}
          />
          {/* Sticky Floating WhatsApp Button – Super Visible */}
  <a
    href="https://wa.me/919068662191?text=Hi!%20I%20need%20a%20moving%20quote%20🚛"
    target="_blank"
    className="fixed bottom-6 right-6 z-[9998] group"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      <div className="relative bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.098-.149.198-.349.298-.516.099-.168.149-.349.149-.52 0-.174-.099-.52-.297-.668-.198-.149-.396-.297-.595-.297-.198 0-.396.099-.595.297-.198.198-.396.545-.396.916 0 .371.099.718.297.966.198.248.545.496 1.04.744.496.248 1.09.396 1.685.446.595.05 1.09-.05 1.487-.248.396-.198.694-.545.892-.892.198-.347.347-.694.347-1.04 0-.347-.099-.644-.297-.892z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.136.672 4.126 1.818 5.764L2 22l4.236-1.818C7.874 21.328 9.864 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.472 16.382c-.297.149-1.758.867-2.03.967-.273.099-.471.148-.67-.15-.197-.297-.767-.966-.94-1.164-.173-.199-.347-.223-.644-.075-.297.15-1.255.463-2.39 1.475-.883.788-1.48 1.761-1.653 2.059-.173.297-.018.458.13.606.098.149.198.349.298.516.099.168.149.349.149.52 0 .174.099.52.297.668.198.149.396.297.595.297.198 0 .396-.099.595-.297.198-.198.396-.545.396-.916 0-.371-.099-.718-.297-.966-.198-.248-.545-.496-1.04-.744-.496-.248-1.09-.396-1.685-.446-.595-.05-1.09.05-1.487.248-.396.198-.694.545-.892.892-.198.347-.347.694-.347 1.04 0 .347.099.644.297.892z"/>
        </svg>
      </div>
    </div>
    <span className="absolute -top-12 right-0 bg-green-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
      WhatsApp Us Now!
    </span>
  </a>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
