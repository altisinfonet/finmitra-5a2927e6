import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import DownloadSection from "@/components/DownloadSection";
import CtaSection from "@/components/CtaSection";
import ScreenshotMarquee from "@/components/ScreenshotMarquee";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import FadeIn from "@/components/FadeIn";
import AnnouncementBar from "@/components/AnnouncementBar";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  const location = useLocation();
  const [barVisible, setBarVisible] = useState(true);
  const [barHeight, setBarHeight] = useState(30);
  const barWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barVisible) { setBarHeight(0); return; }
    const measure = () => { if (barWrapRef.current) setBarHeight(barWrapRef.current.offsetHeight); };
    measure();
    const ro = new ResizeObserver(measure);
    if (barWrapRef.current) ro.observe(barWrapRef.current);
    return () => ro.disconnect();
  }, [barVisible]);

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgressBar />
      {barVisible && <AnnouncementBar ref={barRef} onDismiss={() => setBarVisible(false)} />}
      <Navbar barOffset={barHeight} />
      <HeroSection />
      <FadeIn threshold={0.1}><FeaturesSection /></FadeIn>
      <FadeIn threshold={0.1} delay={0.05}><HowItWorksSection /></FadeIn>
      <FadeIn threshold={0.1}><BenefitsSection /></FadeIn>
      <FadeIn threshold={0.1} delay={0.05}><PricingSection /></FadeIn>
      <FadeIn threshold={0.1}><TestimonialsSection /></FadeIn>
      <FadeIn threshold={0.1} delay={0.05}><FaqSection /></FadeIn>
      <FadeIn threshold={0.1}><DownloadSection /></FadeIn>
      <FadeIn threshold={0.1}><ScreenshotMarquee /></FadeIn>
      <FadeIn threshold={0.1}><CtaSection /></FadeIn>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

