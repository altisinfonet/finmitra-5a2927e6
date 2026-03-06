import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Shield, Users, TrendingUp, Award } from "lucide-react";
import useAppMode from "@/hooks/useAppMode";
import PageMeta from "@/components/PageMeta";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Agents" },
  { icon: TrendingUp, value: "₹500 Cr+", label: "Premiums Managed" },
  { icon: Shield, value: "99.9%", label: "Uptime SLA" },
  { icon: Award, value: "2019", label: "Founded" },
];

const AboutUs = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="About Us"
        description="Learn about Altis Infonet Private Limited — the company behind FinMitra, empowering insurance agents and financial distributors across India since 2019."
        canonical="/about"
      />
      {!appMode && <Navbar />}
      <main className={`container mx-auto px-4 ${appMode ? "pt-8" : "pt-28"} pb-20 max-w-4xl`}>

        {/* Hero */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-3">About Us</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Altis Infonet Private Limited</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            We build intelligent software that empowers India's insurance agents and financial distributors to manage their business with confidence, speed, and professionalism.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <Icon className="mx-auto mb-3 text-[hsl(var(--gold))]" size={28} />
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-foreground/50 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="text-foreground/70 text-sm leading-relaxed space-y-4">
            <p>
              Altis Infonet Private Limited was founded with a clear mission: to modernize how insurance agents and financial distributors in India run their businesses. We saw firsthand how hardworking agents were struggling with outdated tools — spreadsheets, paper registers, and disconnected systems — leaving them overwhelmed and underperforming.
            </p>
            <p>
              FinMitra was born out of that insight. We built a platform that brings together client management, policy tracking, renewal reminders, and business analytics into one seamless mobile-first experience. Today, thousands of agents across India trust FinMitra to manage their portfolios and grow their business.
            </p>
            <p>
              Based in India and built for India, our team is passionate about financial inclusion and believes that when agents are equipped with the right tools, they can serve their clients better and build thriving businesses.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              To empower every insurance agent and financial distributor in India with intelligent, affordable, and easy-to-use technology that helps them serve clients better and grow their business sustainably.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-2">Our Vision</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              To become the most trusted CRM platform for financial agents across South Asia, driving digital transformation in the insurance and financial distribution ecosystem.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[hsl(var(--navy))] rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-white/70 text-sm mb-6">Have questions or want to partner with us? We'd love to hear from you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="mailto:mail@altisinfonet.com" className="text-[hsl(var(--gold-light))] hover:underline">mail@altisinfonet.com</a>
            <span className="hidden sm:block text-white/30">|</span>
            <a href="tel:03344026497" className="text-[hsl(var(--gold-light))] hover:underline">033 4402 6497</a>
            <span className="hidden sm:block text-white/30">|</span>
            <a href="https://wa.me/918697974570" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold-light))] hover:underline">WhatsApp Us</a>
          </div>
        </div>

      </main>
      {!appMode && <Footer />}
      {!appMode && <WhatsAppFloat />}
    </div>
  );
};

export default AboutUs;
