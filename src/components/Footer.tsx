import finmitraLogo from "@/assets/finmitra-logo.png";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/60 pt-14 pb-8">
      <div className="container mx-auto px-4">

        {/* Top grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-5">

          {/* Brand col */}
          <div className="md:col-span-6">
            <img src={finmitraLogo} alt="FinMitra" className="h-5 w-auto mb-3 brightness-0 invert" loading="lazy" decoding="async" />
            <p className="text-xs leading-relaxed mb-5 max-w-xs text-white/50">
              FinMitra is a product of Altis Infonet Private Limited — empowering insurance agents and financial distributors across India.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mb-5">
              {[
                { href: "https://www.facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.youtube.com", icon: Youtube, label: "YouTube" },
                { href: "https://www.x.com", icon: Twitter, label: "X" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white">
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-2.5">
              <a href="tel:03344026497" className="flex items-center gap-2.5 text-xs hover:text-white/90 transition-colors group">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone size={13} className="text-[hsl(var(--gold-light))]" />
                </span>
                <span>033 4402 6497 <span className="text-white/35">(Mon–Fri, 9:30 AM – 7 PM)</span></span>
              </a>
              <a href="mailto:mail@altisinfonet.com" className="flex items-center gap-2.5 text-xs hover:text-white/90 transition-colors group">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Mail size={13} className="text-[hsl(var(--gold-light))]" />
                </span>
                <span>mail@altisinfonet.com</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-3">
            <h4 className="text-white/90 font-bold mb-4 text-xs uppercase tracking-widest">Product</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Features", href: "/#features" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Pricing", href: "/#plans" },
                { label: "Download App", href: "/#download" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h4 className="text-white/90 font-bold mb-4 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-xs">
          {[
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} <a href="https://www.altisinfonet.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline underline-offset-2">Altis Infonet Private Limited</a>. All rights reserved.</p>
          <p className="text-xs text-white/35">Made with ❤️ for India's Financial Agents</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

