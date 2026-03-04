import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    desc: "Sign up as an agent or agency. Set up your profile, configure your product categories, and invite your team.",
  },
  {
    number: "02",
    title: "Import Your Clients",
    desc: "Quickly add clients with KYC details, upload documents, and organize them by product type or life stage.",
  },
  {
    number: "03",
    title: "Track & Manage",
    desc: "Get renewal reminders, schedule meetings, send birthday greetings, and pitch new products with a single tap.",
  },
  {
    number: "04",
    title: "Grow Your Business",
    desc: "Use real-time analytics to spot upsell opportunities, track conversions, and maximize your commission income.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10" style={{ background: "var(--gradient-gold)", filter: "blur(100px)" }} />

      <div className="container mx-auto px-4 relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-gold/20 text-gold-light font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Up & Running in Minutes
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            FinMitra is designed for busy agents. No technical skills needed — just download and start.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.15}>
          {steps.map(({ number, title, desc }, i) => (
            <StaggerItem key={number}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_0px)] w-full h-px border-t-2 border-dashed border-gold/30 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 2rem)" }} />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl font-black border-2 border-gold/40" style={{ background: "linear-gradient(135deg, hsl(32,72%,46%,0.2), hsl(36,85%,62%,0.1))", color: "hsl(var(--gold-light))" }}>
                    {number}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C360 80 1080 0 1440 60V80H0V0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;
