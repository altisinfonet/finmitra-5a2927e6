import { motion } from "framer-motion";
import appDashboardDark from "@/assets/app-dashboard-dark.png";
import appDashboardLight from "@/assets/app-dashboard-light.png";
import appOnboardingDark from "@/assets/app-onboarding-dark.png";
import appOnboardingLight from "@/assets/app-onboarding-light.png";
import appSigninDark from "@/assets/app-signin-dark.png";
import appSigninLight from "@/assets/app-signin-light.png";

const screenshots = [
  { src: appOnboardingLight, label: "Onboarding" },
  { src: appDashboardDark, label: "Dashboard" },
  { src: appSigninLight, label: "Sign In" },
  { src: appDashboardLight, label: "Dashboard Light" },
  { src: appOnboardingDark, label: "Onboarding Dark" },
  { src: appSigninDark, label: "Sign In Dark" },
];

// Duplicate for seamless loop
const allScreenshots = [...screenshots, ...screenshots];

const PhoneFrame = ({ src, label }: { src: string; label: string }) => (
  <div className="flex-shrink-0 mx-3 group">
    <div
      className="w-36 md:w-44 rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:-translate-y-3 group-hover:scale-105"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
    >
      <img src={src} alt={label} className="w-full object-cover" loading="lazy" />
    </div>
    <p className="text-center text-white/40 text-xs mt-3 font-medium">{label}</p>
  </div>
);

const ScreenshotMarquee = () => {
  return (
    <section className="py-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-gold/20 text-gold-light font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-gold/30">
            App Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            See FinMitra in Action
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            A clean, intuitive interface designed for busy financial agents on the go.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(214, 68%, 14%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(214, 68%, 14%), transparent)" }} />

        <motion.div
          className="flex items-end"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {allScreenshots.map((s, i) => (
            <PhoneFrame key={i} src={s.src} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 — right to left (offset) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(214, 68%, 14%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(214, 68%, 14%), transparent)" }} />

        <motion.div
          className="flex items-end"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...allScreenshots].reverse().map((s, i) => (
            <PhoneFrame key={i} src={s.src} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotMarquee;
