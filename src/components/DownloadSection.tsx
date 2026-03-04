import { Smartphone, QrCode } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import finmitraLogo from "@/assets/finmitra-logo.png";
import appSigninLight from "@/assets/app-signin-light.png";
import appSigninDark from "@/assets/app-signin-dark.png";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <Smartphone size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Get The App</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Download <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>FinMitra</span> Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Available on Android and iOS. Manage your entire financial business from your pocket.
          </p>
        </FadeIn>

        {/* Phone Screenshots */}
        <FadeIn className="flex justify-center gap-6 mb-16">
          <div className="flex gap-4 items-end">
            <div className="w-36 sm:w-44 rounded-[2rem] overflow-hidden shadow-2xl border border-border" style={{ boxShadow: "0 30px 80px hsl(var(--primary)/0.2)" }}>
              <img src={appSigninLight} alt="FinMitra Sign In" className="w-full object-cover" />
            </div>
            <div className="w-36 sm:w-44 rounded-[2rem] overflow-hidden shadow-2xl border border-border mb-6" style={{ boxShadow: "0 30px 80px hsl(var(--primary)/0.2)" }}>
              <img src={appSigninDark} alt="FinMitra Sign In Dark" className="w-full object-cover" />
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* QR Code block */}
          <FadeIn direction="right" delay={0.1}>
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center gap-4 shadow-lg w-64">
              {/* Simulated QR code using CSS grid pattern */}
              <div className="w-40 h-40 bg-foreground rounded-2xl p-3 relative overflow-hidden">
                <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-0.5">
                  {Array.from({ length: 100 }).map((_, i) => {
                    const pattern = [
                      0,1,1,1,0,0,1,1,1,0,
                      0,1,0,1,0,1,0,1,0,0,
                      0,1,1,1,0,0,1,1,1,0,
                      0,0,0,0,1,0,0,0,0,1,
                      1,0,1,0,1,1,0,1,0,1,
                      0,1,0,1,0,0,1,0,1,0,
                      0,1,1,1,0,1,0,1,0,1,
                      0,1,0,1,0,0,1,1,1,0,
                      0,1,1,1,0,1,0,1,0,0,
                      0,0,0,0,1,0,1,0,1,0,
                    ];
                    return (
                      <div
                        key={i}
                        className={`rounded-[1px] ${pattern[i] ? "bg-white" : "bg-transparent"}`}
                      />
                    );
                  })}
                </div>
                {/* Center logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-foreground p-1 rounded-md">
                    <img src={finmitraLogo} alt="FinMitra" className="h-7 w-auto brightness-0 invert" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center mb-1">
                  <QrCode size={14} className="text-primary" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest">Scan to Download</span>
                </div>
                <p className="text-muted-foreground text-xs">Point your camera at the QR code</p>
              </div>
            </div>
          </FadeIn>

          {/* Divider */}
          <FadeIn direction="none" delay={0.2}>
            <div className="hidden lg:flex flex-col items-center gap-2 text-muted-foreground text-sm">
              <div className="w-px h-16 bg-border" />
              <span className="font-semibold">OR</span>
              <div className="w-px h-16 bg-border" />
            </div>
            <div className="lg:hidden flex items-center gap-4 text-muted-foreground text-sm">
              <div className="h-px w-16 bg-border" />
              <span className="font-semibold">OR</span>
              <div className="h-px w-16 bg-border" />
            </div>
          </FadeIn>

          {/* Store badges */}
          <FadeIn direction="left" delay={0.15}>
            <div className="flex flex-col gap-4">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-4 bg-foreground hover:bg-foreground/90 text-white rounded-2xl px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl w-56 group"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="none">
                  <path d="M3.18 23.76c.37.2.8.2 1.2-.02l13.04-7.52-2.88-2.89L3.18 23.76z" fill="#EA4335"/>
                  <path d="M21.54 10.27L18.42 8.5l-3.2 3.2 3.2 3.2 3.15-1.82c.9-.52.9-1.79-.03-2.31z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.78.45 2.5.9 2.5 1.46v21.08c0 .56.28 1.01.68 1.22l12.38-11.55L3.18.24z" fill="#4285F4"/>
                  <path d="M4.38 23.74l11.18-11.18-2.94-2.94L3.18 23.76c.37.2.8.2 1.2-.02z" fill="#34A853"/>
                  <path d="M4.38.26L15.56 11.44l-2.94 2.94L4.38.26z" fill="#4285F4" opacity=".5"/>
                </svg>
                <div>
                  <div className="text-white/60 text-[10px] leading-tight">Get it on</div>
                  <div className="text-white font-bold text-base leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-4 bg-foreground hover:bg-foreground/90 text-white rounded-2xl px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl w-56 group"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-white/60 text-[10px] leading-tight">Download on the</div>
                  <div className="text-white font-bold text-base leading-tight">App Store</div>
                </div>
              </a>

              <p className="text-muted-foreground text-xs text-center mt-1">Requires Android 6.0+ or iOS 13+</p>
            </div>
          </FadeIn>
        </div>

        {/* Feature chips */}
        <FadeIn delay={0.3} className="flex flex-wrap justify-center gap-3 mt-14">
          {["Free to Download", "14-Day Free Trial", "No Credit Card", "Cloud Sync", "Auto Sync", "Secure & Encrypted"].map((f) => (
            <span key={f} className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full border border-primary/20">
              ✓ {f}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default DownloadSection;
