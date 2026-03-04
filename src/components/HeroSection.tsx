import finmitraLogo from "@/assets/finmitra-logo.png";
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
    <div ref={ref} className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
        <Icon size={18} className="text-gold" />
      </div>
      <div>
        <div className="text-white font-bold text-lg leading-tight">
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

      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Star size={14} className="text-gold-light fill-gold-light" />
              <span className="text-gold-light text-xs font-bold tracking-widest uppercase">by Altis Infonet Pvt. Ltd.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>Financial</span>{" "}
              <br />Friend. Always.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              The all-in-one CRM platform for insurance agents and financial product distributors. Manage clients, products, renewals, and grow your business — all from your phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="cta" size="lg" className="gap-2 text-base px-8">
                Start Free Trial <ArrowRight size={18} />
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-base px-8">
                Watch Demo
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-8"
            >
              <StatCounter value={10000} suffix="+" label="Agents Onboarded" icon={Users} />
              <StatCounter value={500} suffix="Cr+" prefix="₹" label="Policies Managed" icon={TrendingUp} />
              <StatCounter value={4.9} suffix="★" label="App Store Rating" icon={Star} />
            </motion.div>
          </div>

          {/* Right — Real App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex gap-4 items-end">
              {/* Glow behind phones */}
              <div className="absolute inset-0 scale-110 rounded-3xl opacity-30" style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }} />

              {/* Back phone — dark theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative hidden sm:block"
                style={{ marginBottom: "2rem" }}
              >
                <div className="w-44 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20 ring-1 ring-white/10" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                  <img src={appOnboardingDark} alt="FinMitra Dark Mode" className="w-full object-cover" />
                </div>
              </motion.div>

              {/* Front phone — light theme, slightly bigger */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10"
              >
                <div className="w-52 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/30 ring-1 ring-white/20" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>
                  <img src={appOnboardingLight} alt="FinMitra App" className="w-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

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
