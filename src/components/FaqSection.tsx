import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is there a free trial available?",
    a: "Yes! FinMitra offers a full-featured 14-day free trial with no credit card required. You get access to all features including client management, renewal alerts, KYC storage, and more. After the trial, choose a plan that fits your business.",
  },
  {
    q: "What financial products can I manage in FinMitra?",
    a: "FinMitra supports a wide range of products — Life Insurance, Health Insurance, General Insurance, Mutual Funds, Fixed Deposits (FD), Recurring Deposits (RD), Real Estate, Loans (Home, Personal, Business), and more. New product categories are regularly added based on agent feedback.",
  },
  {
    q: "How does pricing work? Are there any hidden charges?",
    a: "We offer three transparent plans — Starter (₹299/mo), Growth (₹599/mo), and Agency (₹1,299/mo). Pricing is per-agent subscription with no hidden fees. Annual billing gives you up to 2 months free. You can upgrade, downgrade, or cancel any time.",
  },
  {
    q: "How secure is my client data on FinMitra?",
    a: "Data security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are hosted on enterprise-grade cloud infrastructure with daily automated backups. We never share or sell your client data. FinMitra is fully compliant with Indian data protection guidelines.",
  },
  {
    q: "Can I use FinMitra on multiple devices?",
    a: "Yes. Your account syncs seamlessly across your smartphone, tablet, and desktop browser. The Starter plan supports 1 device, Growth supports up to 3 devices, and the Agency plan supports unlimited devices — ideal for managing a team of sub-agents.",
  },
  {
    q: "Does FinMitra work without an internet connection?",
    a: "FinMitra has an offline mode that lets you view client details, add notes, and log meetings without internet. All changes sync automatically once you're back online. This is especially useful in rural areas or during field visits.",
  },
  {
    q: "How do renewal alerts and birthday greetings work?",
    a: "FinMitra automatically reads your policy and product data to schedule renewal alerts — you can set reminders at 60, 30, 15, and 7 days before due dates. Birthday greetings are sent automatically via SMS or WhatsApp to your clients on their birthday, keeping your relationship warm without any manual effort.",
  },
  {
    q: "Can I import my existing client data into FinMitra?",
    a: "Yes. You can import clients via Excel/CSV upload. FinMitra provides a standard template you can fill in and upload in minutes. Our support team also assists with bulk data migration for larger agencies at no extra cost.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">FAQs</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Got <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-gold)" }}>Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about FinMitra. Can't find the answer? <a href="#" className="text-primary hover:underline font-semibold">Contact our team.</a>
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-sm data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};

export default FaqSection;
