import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import useAppMode from "@/hooks/useAppMode";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
    <div className="text-foreground/70 text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      {!appMode && <Navbar />}
      <main className="container mx-auto px-4 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-foreground/50 mb-10">Last updated: March 2026 &nbsp;|&nbsp; Altis Infonet Private Limited</p>

        <Section title="1. Introduction">
          <p>Altis Infonet Private Limited ("we", "our", or "us") operates the FinMitra mobile application and website (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>
          <p>By using FinMitra, you agree to the collection and use of information in accordance with this policy.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong>Personal Information:</strong> Name, email address, phone number, and business details provided during registration.</p>
          <p><strong>Client Data:</strong> Information you enter about your insurance clients and policy portfolios, stored securely on our servers.</p>
          <p><strong>Usage Data:</strong> Log data such as IP address, browser type, pages visited, time and date of visit, and time spent on pages.</p>
          <p><strong>Device Information:</strong> Device type, operating system, and unique device identifiers when using our mobile application.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the collected data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide, maintain, and improve the FinMitra Service</li>
            <li>Send renewal reminders and policy alerts to you and your clients</li>
            <li>Process subscription payments and manage your account</li>
            <li>Send administrative information, updates, and support responses</li>
            <li>Monitor usage patterns to enhance user experience</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
        </Section>

        <Section title="4. Data Sharing & Disclosure">
          <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our platform (e.g., cloud hosting, payment processors), bound by confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred with prior notice.</li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          <p>We implement industry-standard security measures including encryption in transit (TLS/SSL), encrypted storage, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your personal data for as long as your account is active or as needed to provide Services. You may request deletion of your account and associated data by contacting us at mail@altisinfonet.com. Certain data may be retained for legal compliance purposes.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
        </Section>

        <Section title="8. Children's Privacy">
          <p>FinMitra is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected such data, we will promptly delete it.</p>
        </Section>

        <Section title="9. Third-Party Links">
          <p>Our Service may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Continued use of the Service constitutes acceptance of the revised policy.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="mt-2 space-y-1">
            <p><strong>Altis Infonet Private Limited</strong></p>
            <p>Email: mail@altisinfonet.com</p>
            <p>Phone: 033 4402 6497 (Mon–Fri, 9:30 AM – 7 PM)</p>
            <p>WhatsApp: +91 86979 74570</p>
          </div>
        </Section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PrivacyPolicy;
