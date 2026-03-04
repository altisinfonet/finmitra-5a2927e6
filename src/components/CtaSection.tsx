import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import finmitraLogo from "@/assets/finmitra-logo.png";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 opacity-15" style={{ background: "var(--gradient-gold)", filter: "blur(80px)" }} />
        <div className="absolute bottom-10 right-10 w-48 h-48 opacity-10 bg-white rounded-full" style={{ filter: "blur(60px)" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <img src={finmitraLogo} alt="FinMitra" className="h-16 w-auto mx-auto mb-6 drop-shadow-2xl" />

        <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
          Ready to Grow Your{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>
            Financial Business?
          </span>
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Join thousands of agents already using FinMitra to manage clients, close more deals, and earn higher commissions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="cta" size="lg" className="gap-2 text-base px-10">
            Start Free 14-Day Trial <ArrowRight size={18} />
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2 text-base px-8">
            <Smartphone size={18} /> Download App
          </Button>
        </div>

        <p className="text-white/30 text-sm">No credit card required · Cancel anytime · Free 14-day trial</p>
      </div>
    </section>
  );
};

export default CtaSection;
