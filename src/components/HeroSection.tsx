import finmitraLogo from "@/assets/finmitra-logo.png";
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
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8">
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
              <StatCounter value={500} suffix="Cr+" label="Policies Managed" icon={TrendingUp} />
              <StatCounter value={4.9} suffix="★" label="App Store Rating" icon={Star} />
            </motion.div>
          </div>

          {/* Right — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-3xl opacity-40" style={{ background: "var(--gradient-gold)", filter: "blur(40px)" }} />

              {/* Phone frame */}
              <div className="relative w-72 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 shadow-2xl">
                <div className="bg-navy-light rounded-2xl p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <img src={finmitraLogo} alt="FinMitra" className="h-8 w-auto" />
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <Users size={14} className="text-gold" />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Clients", value: "248", color: "bg-gold/20 text-gold" },
                      { label: "Renewals Due", value: "12", color: "bg-red-500/20 text-red-300" },
                      { label: "Meetings Today", value: "3", color: "bg-green-500/20 text-green-300" },
                      { label: "Active Plans", value: "56", color: "bg-blue-400/20 text-blue-300" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className={`rounded-xl p-3 ${color.split(" ")[0]}`}>
                        <div className={`text-xl font-black ${color.split(" ")[1]}`}>{value}</div>
                        <div className="text-white/60 text-xs">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-2">
                    {["🎂 Ramesh Kumar - Birthday today", "🔔 LIC Policy #4521 renews in 3 days", "📋 KYC pending - Priya Sharma"].map((item) => (
                      <div key={item} className="bg-white/5 rounded-lg px-3 py-2 text-white/70 text-xs">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
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
