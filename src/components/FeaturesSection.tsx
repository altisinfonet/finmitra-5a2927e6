import {
  Users, ShieldCheck, Calendar, Bell, CreditCard, Gift, MessageSquare, TrendingUp, Building2, Landmark, Home, Handshake
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import appDashboardDark from "@/assets/app-dashboard-dark.png";
import appDashboardLight from "@/assets/app-dashboard-light.png";

const features = [
  {
    icon: Users,
    title: "Client & KYC Management",
    desc: "Maintain complete client profiles with KYC documents, contact details, and financial history — always at your fingertips.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Product Portfolio",
    desc: "Manage FD, Life Insurance, General Insurance, Mutual Funds, Real Estate, and Loans all from one unified dashboard.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Calendar,
    title: "Meeting Scheduler",
    desc: "Plan and track client meetings, follow-ups, and field visits. Never miss an important appointment again.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: Bell,
    title: "Renewal Alerts & Reminders",
    desc: "Automated alerts before policy renewals so you can proactively reach clients and protect your renewal commissions.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Gift,
    title: "Birthday Greetings",
    desc: "Automated personalized birthday messages to every client — build stronger relationships without manual effort.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: MessageSquare,
    title: "SMS Back to Caller",
    desc: "Instantly send product information or greetings via SMS to missed callers and leads to never lose a prospect.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: TrendingUp,
    title: "New Product Intimation",
    desc: "Get notified about new financial products and quickly broadcast them to relevant clients in your portfolio.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: CreditCard,
    title: "Subscription-Based Access",
    desc: "Flexible multi-tenant subscription model — pay as you grow, with plans for individual agents and large agencies.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

const products = [
  { icon: Landmark, label: "Fixed Deposits", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" },
  { icon: ShieldCheck, label: "Life Insurance", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
  { icon: ShieldCheck, label: "General Insurance", bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-200" },
  { icon: TrendingUp, label: "Mutual Funds", bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200" },
  { icon: Home, label: "Real Estate", bg: "bg-rose-100", text: "text-rose-700", border: "border-rose-200" },
  { icon: Handshake, label: "Loans", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
  { icon: Building2, label: "Corporate Plans", bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-200" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-gold-pale text-gold font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Powerful Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-4">
            Everything an Agent Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            FinMitra is purpose-built for financial distributors — with every tool you need to serve clients, close deals, and grow revenue.
          </p>
        </FadeIn>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <FadeIn key={title} delay={i * 0.07} direction="up">
              <div className="group rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full" style={{ background: "var(--gradient-card)" }}>
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* App Screenshots Showcase */}
        <FadeIn className="mb-20">
          <div className="rounded-3xl overflow-hidden border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-10" style={{ background: "var(--gradient-hero)" }}>
            <div className="text-white flex-1 text-center md:text-left">
              <span className="inline-block bg-gold/20 text-gold-light font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Real App Screens</span>
              <h3 className="font-display text-3xl md:text-4xl font-black mb-4">A Powerful Dashboard in Your Pocket</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-md">Track leads, meetings, to-dos, and client activity — all from a clean, intuitive mobile interface.</p>
            </div>
            <div className="flex gap-4 items-end flex-shrink-0">
              <div className="w-36 md:w-44 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                <img src={appDashboardDark} alt="FinMitra Dashboard Dark" className="w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="w-36 md:w-44 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/30 mb-6" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
                <img src={appDashboardLight} alt="FinMitra Dashboard Light" className="w-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Products supported */}
        <FadeIn className="text-center mb-8">
          <h3 className="font-display text-2xl font-black text-primary mb-2">Products Supported</h3>
          <p className="text-muted-foreground text-sm">Manage all financial products under one roof</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {products.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-navy/5 border border-navy/15 rounded-full px-5 py-2.5">
                <Icon size={16} className="text-navy" />
                <span className="text-navy font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturesSection;
