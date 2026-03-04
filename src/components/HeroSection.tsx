import appOnboardingLight from "@/assets/app-onboarding-light.png";
import appOnboardingDark from "@/assets/app-onboarding-dark.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const StatCounter = ({ value, suffix, label, icon: Icon, prefix = "" }: { value: number; suffix: string; label: string; icon: React.ElementType; prefix?: string }) => {
  const { ref, count } = useCountUp(value, 2);
  const isFloat = value % 1 !== 0;
  const display = isFloat ? count.toFixed(1) : count.toLocaleString("en-IN");
  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gold" />
      </div>
      <div>
        <div className="text-white font-bold text-base leading-tight">
          {prefix}{display}{suffix}
        </div>
        <div className="text-white/50 text-xs">{label}</div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: "var(--gradient-gold)", filter: "blur(80px)" }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-white/5" style={{ filter: "blur(60px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left — Text content */}
          <div className="text-white text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-5"
            >
              <Star size={13} className="text-gold-light fill-gold-light" />
              <span className="text-gold-light text-xs font-bold tracking-widest uppercase">by Altis Infonet Pvt. Ltd.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5"
            >
              Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>Financial</span>{" "}
              <br />Friend. Always.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0"
            >
              The all-in-one CRM platform for insurance agents and financial product distributors. Manage clients, products, renewals, and grow your business — all from your phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-10"
            >
              <Button variant="cta" size="lg" className="gap-2 text-base px-8 w-full sm:w-auto" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                Download App <ArrowRight size={18} />
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-base px-8 w-full sm:w-auto" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                Get it Free
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8 justify-center lg:justify-start"
            >
              <StatCounter value={10000} suffix="+" label="Agents Onboarded" icon={Users} />
              <StatCounter value={500} suffix="Cr+" prefix="₹" label="Policies Managed" icon={TrendingUp} />
              <StatCounter value={4.9} suffix="★" label="App Store Rating" icon={Star} />
            </motion.div>
          </div>

          {/* Right — App screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative flex gap-3 sm:gap-4 items-end">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-3xl opacity-30" style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }} />

              {/* Back phone — dark theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative hidden sm:block"
                style={{ marginBottom: "2rem" }}
              >
                <div className="w-36 sm:w-44 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20 ring-1 ring-white/10" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                  <img src={appOnboardingDark} alt="FinMitra Dark Mode" className="w-full object-cover" fetchPriority="high" decoding="async" />
                </div>
              </motion.div>

              {/* Front phone — light theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10"
              >
                <div className="w-44 sm:w-52 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/30 ring-1 ring-white/20" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>
                  <img src={appOnboardingLight} alt="FinMitra App" className="w-full object-cover" fetchPriority="high" decoding="async" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.button
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-7 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.button>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 80 720 0 0 60V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
