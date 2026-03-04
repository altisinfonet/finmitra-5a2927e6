import finmitraLogo from "@/assets/finmitra-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  barOffset?: number;
}

const Navbar = ({ barOffset = 0 }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["features", "how-it-works", "benefits", "plans"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Benefits", href: "/#benefits" },
    { label: "Plans", href: "/#plans" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav style={{ top: `${barOffset}px` }} className="fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm transition-[top] duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/"><img src={finmitraLogo} alt="FinMitra" className="h-7 w-auto" fetchPriority="high" decoding="async" /></a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const sectionId = l.href.replace("/#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => scrollToSection(e, l.href)}
                  className={`relative text-sm font-semibold tracking-widest uppercase transition-colors
                    ${isActive ? "text-gold" : "text-foreground/70 hover:text-gold"}
                  `}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="cta" size="sm" onClick={() => { const el = document.getElementById('download'); el ? el.scrollIntoView({ behavior: 'smooth', block: 'start' }) : (window.location.href = '/#download'); }}>Download App</Button>
        </div>

        {/* Mobile/tablet menu button */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {links.map((l) => {
            const sectionId = l.href.replace("/#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => { scrollToSection(e, l.href); setOpen(false); }}
                className={`text-sm font-semibold transition-colors ${isActive ? "text-gold" : "text-foreground/80 hover:text-gold"}`}
              >
                {l.label}
              </a>
            );
          })}
          <Button variant="cta" size="sm" className="w-full mt-2" onClick={() => { setOpen(false); window.location.href = '/#download'; }}>Download App</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
