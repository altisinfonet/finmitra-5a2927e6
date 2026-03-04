import finmitraLogo from "@/assets/finmitra-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Features", "How It Works", "Benefits", "Plans"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <img src={finmitraLogo} alt="FinMitra" className="h-7 w-auto" fetchPriority="high" decoding="async" />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-foreground/70 hover:text-gold transition-colors text-sm font-semibold tracking-widest uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="cta" size="sm" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>Download App</Button>
        </div>

        {/* Mobile/tablet menu button */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-gold text-sm font-semibold">
              {l}
            </a>
          ))}
          <Button variant="cta" size="sm" className="w-full mt-2" onClick={() => { setOpen(false); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }); }}>Download App</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
