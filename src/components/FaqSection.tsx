import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { HelpCircle } from "lucide-react";

const gradients = [
  "from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20",
  "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
  "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
  "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
  "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20",
  "from-cyan-50 to-sky-50 dark:from-cyan-950/20 dark:to-sky-950/20",
  "from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20",
];

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
    a: "FinMitra requires an active internet connection to function. All data is stored securely in the cloud, so a stable connection ensures your client information, renewal alerts, and sync are always up to date. We recommend using FinMitra on a reliable mobile data or Wi-Fi connection.",
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
            Everything you need to know about FinMitra. Can't find the answer?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">Contact our team.</a>
          </p>
        </FadeIn>

        <StaggerContainer stagger={0.07}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <AccordionItem
                  value={`faq-${i}`}
                  className={`bg-gradient-to-r ${gradients[i % gradients.length]} border border-border rounded-2xl px-6 shadow-sm data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all duration-200`}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FaqSection;
