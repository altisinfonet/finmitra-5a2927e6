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

const TermsOfService = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      {!appMode && <Navbar />}
      <main className={`container mx-auto px-4 ${appMode ? "pt-8" : "pt-28"} pb-20 max-w-3xl`}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-foreground/50 mb-10">Last updated: March 2026 &nbsp;|&nbsp; Altis Infonet Private Limited</p>

        <Section title="1. Acceptance of Terms">
          <p>By downloading, installing, or using the FinMitra application or website provided by Altis Infonet Private Limited ("Company", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
        </Section>

        <Section title="2. Description of Service">
          <p>FinMitra is a subscription-based CRM platform designed for insurance agents and financial product distributors in India. The Service includes client management, policy tracking, renewal reminders, premium calculations, and related tools accessible via our mobile application and web interface.</p>
        </Section>

        <Section title="3. Eligibility">
          <p>You must be at least 18 years of age and a registered insurance agent or financial distributor to use FinMitra. By using the Service, you represent and warrant that you meet these requirements.</p>
        </Section>

        <Section title="4. Account Registration">
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify us immediately at mail@altisinfonet.com of any unauthorized use of your account.</p>
        </Section>

        <Section title="5. Subscription & Payments">
          <ul className="list-disc pl-5 space-y-1">
            <li>FinMitra is offered on a subscription basis. Subscription plans, pricing, and features are described on our website and may change with prior notice.</li>
            <li>Payments are non-refundable except as required by applicable law or as stated in our Refund Policy.</li>
            <li>Failure to pay subscription fees may result in suspension or termination of your account.</li>
            <li>We reserve the right to modify pricing with at least 30 days' notice to existing subscribers.</li>
          </ul>
        </Section>

        <Section title="6. Permitted Use">
          <p>You may use FinMitra solely for your lawful professional activities as an insurance agent or financial distributor. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
            <li>Reverse engineer, decompile, or disassemble the application</li>
            <li>Share your account credentials with third parties</li>
            <li>Upload malicious code, viruses, or any harmful content</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use the Service to harass, abuse, or harm another person</li>
          </ul>
        </Section>

        <Section title="7. Data Ownership">
          <p>You retain ownership of all client data you enter into FinMitra. By using the Service, you grant Altis Infonet Private Limited a limited license to store and process this data solely to provide the Service to you. We do not claim ownership of your data.</p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>The FinMitra application, logo, branding, software, and all associated content are the exclusive property of Altis Infonet Private Limited and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free from viruses. Financial calculations and data in the app are for reference purposes only and do not constitute financial advice.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>To the maximum extent permitted by law, Altis Infonet Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Service. Our total liability shall not exceed the amount paid by you in the 3 months preceding the claim.</p>
        </Section>

        <Section title="11. Termination">
          <p>We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in conduct harmful to other users or to us. You may terminate your account at any time by contacting mail@altisinfonet.com.</p>
        </Section>

        <Section title="12. Governing Law">
          <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in West Bengal, India.</p>
        </Section>

        <Section title="13. Changes to Terms">
          <p>We reserve the right to modify these Terms at any time. We will notify users of material changes via email or in-app notification at least 15 days before the changes take effect. Continued use of the Service after that period constitutes acceptance of the new Terms.</p>
        </Section>

        <Section title="14. Contact Us">
          <p>For questions regarding these Terms, please contact:</p>
          <div className="mt-2 space-y-1">
            <p><strong>Altis Infonet Private Limited</strong></p>
            <p>Email: mail@altisinfonet.com</p>
            <p>Phone: 033 4402 6497 (Mon–Fri, 9:30 AM – 7 PM)</p>
            <p>WhatsApp: +91 86979 74570</p>
          </div>
        </Section>
      </main>
      {!appMode && <Footer />}
      {!appMode && <WhatsAppFloat />}
    </div>
  );
};

export default TermsOfService;
