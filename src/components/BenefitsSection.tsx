import finmitraLogo from "@/assets/finmitra-logo.png";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Never miss a renewal — automated alerts weeks in advance",
  "Delight clients with birthday & anniversary greetings",
  "Instant SMS back to callers with product brochures",
  "Full KYC & document management in one place",
  "Multi-product tracking: insurance, MF, FD, real estate, loans",
  "Multi-tenant: manage your whole agency from one account",
  "Works offline — sync when internet is available",
  "Secure, encrypted client data with role-based access",
];

const testimonials = [
  {
    name: "Suresh Nair",
    role: "LIC Agent, Kerala",
    quote: "FinMitra transformed how I manage my 300+ clients. Renewal reminders alone saved me from losing 15 policies last quarter!",
    avatar: "SN",
  },
  {
    name: "Priya Desai",
    role: "Mutual Fund Distributor, Pune",
    quote: "The birthday greeting feature is a game-changer. My clients actually call me to thank me, and that always leads to new business.",
    avatar: "PD",
  },
  {
    name: "Ramesh Agarwal",
    role: "Insurance Agency Owner, Delhi",
    quote: "My team of 8 agents all use FinMitra. The multi-tenant setup makes it easy to track everyone's portfolio in one view.",
    avatar: "RA",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left */}
          <div>
            <span className="inline-block bg-gold-pale text-gold font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why FinMitra?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-6">
              Built for the Way You Work
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Unlike generic CRMs, FinMitra understands the unique needs of Indian financial agents — from LIC renewals to SIP reminders to POSP compliance.
            </p>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — logo + brand block */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-3xl opacity-30" style={{ background: "var(--gradient-gold)", filter: "blur(40px)" }} />
              <img src={finmitraLogo} alt="FinMitra" className="relative w-64 h-auto drop-shadow-2xl" />
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-black text-primary">FinMitra</p>
              <p className="text-gold font-semibold">Your Financial Friend.</p>
              <p className="text-muted-foreground text-sm mt-1">by Altis Infonet Private Limited</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl font-black text-primary mb-2">Trusted by Agents Across India</h3>
          <p className="text-muted-foreground">Real stories from real distributors</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, avatar }) => (
            <div key={name} className="rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow" style={{ background: "var(--gradient-card)" }}>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white" style={{ background: "var(--gradient-hero)" }}>
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{name}</div>
                  <div className="text-muted-foreground text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
