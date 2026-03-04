import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Standard",
    tagline: "All the essentials",
    monthlyPrice: 299,
    yearlyPrice: 239,
    highlight: false,
    features: [
      "Add up to 100 customers",
      "KYC & document storage",
      "Birthday greetings",
      "Renewal reminders",
      "2 product categories",
      "Email support",
    ],
  },
  {
    name: "Professional",
    tagline: "Everything in Standard +",
    monthlyPrice: 499,
    yearlyPrice: 399,
    highlight: true,
    features: [
      "Add up to 200 customers",
      "All Standard features",
      "All product categories",
      "Meeting scheduler",
      "SMS back to caller",
      "New product alerts",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    tagline: "Everything in Professional +",
    monthlyPrice: 699,
    yearlyPrice: 559,
    highlight: false,
    features: [
      "Add up to 500 customers",
      "All Professional features",
      "Multi-agent / multi-tenant",
      "Team performance analytics",
      "Custom branding",
      "Dedicated account manager",
      "API access",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const;

const PricingGrid = ({ billing }: { billing: "monthly" | "yearly" }) => {
  const { ref, isInView } = useScrollAnimation(0.1);
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      {plans.map(({ name, tagline, monthlyPrice, yearlyPrice, highlight, features }) => {
        const price = billing === "monthly" ? monthlyPrice : yearlyPrice;
        return (
          <motion.div key={name} variants={cardVariants}>
            <div
              className={`relative rounded-2xl border flex flex-col h-full transition-all duration-300 overflow-hidden
                ${highlight
                  ? "border-primary shadow-2xl scale-[1.03]"
                  : "border-border hover:shadow-md"
                }`}
              style={{ background: highlight ? "var(--gradient-hero)" : "var(--gradient-card)" }}
            >
              {highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-bl-xl tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <h3 className={`font-bold text-xl mb-4 ${highlight ? "text-white" : "text-foreground"}`}>{name}</h3>

                {/* Price */}
                <div className="flex items-end gap-1 mb-6">
                  <span className={`font-black text-5xl ${highlight ? "text-white" : "text-primary"}`}>
                    ₹{price}
                  </span>
                  <span className={`text-sm mb-2 ${highlight ? "text-white/60" : "text-muted-foreground"}`}>/ Month</span>
                </div>

                {/* CTA */}
                <Button
                  variant={highlight ? "cta" : "outline"}
                  className={`w-full mb-6 ${!highlight ? "border-primary text-primary hover:bg-primary/5" : ""}`}
                  onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Free Trial
                </Button>

                {/* Tagline */}
                <p className={`text-xs mb-4 ${highlight ? "text-white/50" : "text-muted-foreground"}`}>{tagline}:</p>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check size={15} className={highlight ? "text-[hsl(var(--gold-light))]" : "text-primary"} strokeWidth={2.5} />
                      <span className={`text-sm ${highlight ? "text-white/80" : "text-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="plans" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">

        <FadeIn className="text-center mb-10">
          <span className="inline-block bg-gold-pale text-gold font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Subscription Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-3">
            Big Value, Simple Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose a plan that fits your business today and supports your growth tomorrow.
          </p>
        </FadeIn>

        {/* Monthly / Yearly toggle */}
        <FadeIn className="flex justify-center mb-12">
          <div className="relative inline-flex items-center bg-foreground/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200
                ${billing === "monthly" ? "bg-foreground text-background shadow" : "text-foreground/60 hover:text-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-200
                ${billing === "yearly" ? "bg-foreground text-background shadow" : "text-foreground/60 hover:text-foreground"}`}
            >
              Yearly
              <span className="absolute -top-2.5 -right-2 bg-[hsl(var(--gold))] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full tracking-wide">
                -20%
              </span>
            </button>
          </div>
        </FadeIn>

        <PricingGrid billing={billing} />

        {/* Free trial note */}
        <FadeIn className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Get <span className="font-bold text-foreground">90 days free trial</span>. No card details required.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};

export default PricingSection;
