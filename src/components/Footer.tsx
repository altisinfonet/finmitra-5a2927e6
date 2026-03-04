import finmitraLogo from "@/assets/finmitra-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/70 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={finmitraLogo} alt="FinMitra" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              FinMitra is a product of Altis Infonet Private Limited — empowering insurance agents and financial distributors across India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-gold" />
                <span>support@finmitra.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-gold" />
                <span>Altis Infonet Pvt. Ltd., India</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-2 text-sm">
              {["Features", "How It Works", "Pricing", "Download App", "Release Notes"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Careers", "Privacy Policy", "Terms of Service", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Altis Infonet Private Limited. All rights reserved.</p>
          <p className="text-xs">Made with ❤️ for India's Financial Agents</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
