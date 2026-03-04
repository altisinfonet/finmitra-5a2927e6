import finmitraLogo from "@/assets/finmitra-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Features", "How It Works", "Benefits", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <img src={finmitraLogo} alt="FinMitra" className="h-10 w-auto" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-foreground/70 hover:text-gold transition-colors text-sm font-semibold tracking-wide">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-foreground/80 hover:text-gold text-sm">Sign In</Button>
          <Button variant="cta" size="sm">Get Started Free</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)} className="text-white/80 hover:text-gold text-sm font-semibold">
              {l}
            </a>
          ))}
          <Button variant="cta" size="sm" className="w-full mt-2">Get Started Free</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
