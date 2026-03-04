import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹299",
    period: "/month",
    desc: "Perfect for solo agents just getting started",
    features: [
      "Up to 100 clients",
      "KYC & document storage",
      "Birthday greetings",
      "Renewal reminders",
      "2 product categories",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹799",
    period: "/month",
    desc: "For growing agents with bigger portfolios",
    features: [
      "Up to 500 clients",
      "All Starter features",
      "All product categories",
      "Meeting scheduler",
      "SMS back to caller",
      "New product alerts",
      "Priority support",
    ],
    cta: "Get Growth Plan",
    highlight: true,
  },
  {
    name: "Agency",
    price: "₹2,499",
    period: "/month",
    desc: "For agencies managing multiple agents",
    features: [
      "Unlimited clients",
      "All Growth features",
      "Multi-agent / multi-tenant",
      "Team performance analytics",
      "Custom branding",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gold-pale text-gold font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Subscription Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map(({ name, price, period, desc, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                highlight
                  ? "border-gold shadow-xl scale-105"
                  : "border-border hover:shadow-md"
              }`}
              style={{ background: highlight ? "var(--gradient-hero)" : "var(--gradient-card)" }}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-black px-4 py-1 rounded-full tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-bold text-xl mb-1 ${highlight ? "text-white" : "text-foreground"}`}>{name}</h3>
                <p className={`text-sm mb-4 ${highlight ? "text-white/60" : "text-muted-foreground"}`}>{desc}</p>
                <div className="flex items-end gap-1">
                  <span className={`font-black text-4xl ${highlight ? "text-white" : "text-primary"}`}>{price}</span>
                  <span className={`text-sm mb-1 ${highlight ? "text-white/60" : "text-muted-foreground"}`}>{period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className={highlight ? "text-gold-light" : "text-gold"} />
                    <span className={`text-sm ${highlight ? "text-white/80" : "text-foreground"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={highlight ? "cta" : "outline"} className={!highlight ? "border-navy text-navy hover:bg-navy/5" : ""}>
                {cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
