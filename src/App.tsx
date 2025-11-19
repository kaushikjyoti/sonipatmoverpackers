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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
