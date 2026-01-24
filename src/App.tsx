import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Obiective from "./pages/Obiective";
import Eligibilitate from "./pages/Eligibilitate";
import CumAplic from "./pages/CumAplic";
import Evenimente from "./pages/Evenimente";
import Echipa from "./pages/Echipa";
import Contact from "./pages/Contact";
import GDPR from "./pages/GDPR";
import QRCodeGenerator from "./pages/QRCodeGenerator";
import QRCodeSite from "./pages/QRCodeSite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/obiective" element={<Obiective />} />
              <Route path="/eligibilitate" element={<Eligibilitate />} />
              <Route path="/cum-aplic" element={<CumAplic />} />
              <Route path="/evenimente" element={<Evenimente />} />
              <Route path="/echipa" element={<Echipa />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/qr-evenimente" element={<QRCodeGenerator />} />
              <Route path="/qr-site" element={<QRCodeSite />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieBanner />
            <ScrollToTop />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
