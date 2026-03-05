import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

// Aggressively remove the Google Translate top bar via MutationObserver
if (typeof window !== "undefined") {
  const removeGoogleBar = () => {
    // Remove the floating iframe bar
    document.querySelectorAll("iframe.goog-te-banner-frame, .goog-te-banner-frame").forEach(el => {
      (el as HTMLElement).style.display = "none";
      el.remove();
    });
    // Fix body position that Google sets to push content down
    if (document.body.style.top && document.body.style.top !== "0px") {
      document.body.style.top = "0px";
    }
  };
  const observer = new MutationObserver(removeGoogleBar);
  document.addEventListener("DOMContentLoaded", () => {
    removeGoogleBar();
    observer.observe(document.body, { childList: true, subtree: true });
  });
  // Also run immediately in case DOM is already ready
  removeGoogleBar();
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
