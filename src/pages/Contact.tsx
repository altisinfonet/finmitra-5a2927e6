import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import useAppMode from "@/hooks/useAppMode";
import PageMeta from "@/components/PageMeta";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "033 4402 6497",
    sub: "Mon–Fri, 9:30 AM – 7 PM",
    href: "tel:03344026497",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mail@altisinfonet.com",
    sub: "We reply within 24 hours",
    href: "mailto:mail@altisinfonet.com",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: WhatsAppIcon as any,
    label: "WhatsApp",
    value: "+91 86979 74570",
    sub: "Quick support via chat",
    href: "https://wa.me/918697974570",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Altis Infonet Private Limited",
    sub: "India",
    href: null,
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const Contact = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      {!appMode && <Navbar />}
      <main className={`container mx-auto px-4 ${appMode ? "pt-8" : "pt-28"} pb-20 max-w-4xl`}>

        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-3">Contact Us</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">We're Here to Help</h1>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm leading-relaxed">
            Have a question about FinMitra or need support? Reach out to the Altis Infonet team through any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {contacts.map(({ icon: Icon, label, value, sub, href, color, bg }) => (
            <div key={label} className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <span className={`flex items-center justify-center w-11 h-11 rounded-xl ${bg} ${color} shrink-0`}>
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-1">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`font-semibold text-foreground hover:${color} transition-colors`}>{value}</a>
                ) : (
                  <p className="font-semibold text-foreground">{value}</p>
                )}
                <p className="text-xs text-foreground/50 mt-0.5 flex items-center gap-1"><Clock size={11} />{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support hours */}
        <div className="bg-[hsl(var(--navy))] rounded-2xl p-8 text-white text-center">
          <Clock className="mx-auto mb-3 text-[hsl(var(--gold-light))]" size={32} />
          <h3 className="text-lg font-bold mb-1">Support Hours</h3>
          <p className="text-white/70 text-sm">Monday – Friday &nbsp;|&nbsp; 9:30 AM – 7:00 PM IST</p>
          <p className="text-white/50 text-xs mt-2">We are closed on public holidays. For urgent queries, use WhatsApp.</p>
        </div>

      </main>
      {!appMode && <Footer />}
      {!appMode && <WhatsAppFloat />}
    </div>
  );
};

export default Contact;
