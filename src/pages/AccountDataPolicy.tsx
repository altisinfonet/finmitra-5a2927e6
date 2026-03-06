import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import useAppMode from "@/hooks/useAppMode";
import PageMeta from "@/components/PageMeta";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
    <div className="text-foreground/70 text-sm leading-relaxed space-y-2">{children}</div>
  </div>
);

const Step = ({ number, label }: { number: number; label: string }) => (
  <div className="flex items-center gap-3">
    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center border border-primary/20">
      {number}
    </span>
    <span className="text-foreground/80 text-sm font-medium">{label}</span>
  </div>
);

const AccountDataPolicy = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Account Data Policy"
        description="Learn how to download or permanently delete your FinMitra account data. Full compliance with Google Play Store and Apple App Store data safety requirements."
        canonical="/account-data-policy"
      />
      <ScrollProgressBar />
      {!appMode && <Navbar />}
      <main className={`container mx-auto px-4 ${appMode ? "pt-8" : "pt-28"} pb-20 max-w-3xl`}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Account Data Policy</h1>
        <p className="text-sm text-foreground/50 mb-10">Last updated: March 2026 &nbsp;|&nbsp; Altis Infonet Private Limited</p>

        <Section title="1. Overview">
          <p>
            Altis Infonet Private Limited ("we", "our", or "us") is committed to giving you full control over the personal
            data you have entrusted to us through the <strong>FinMitra</strong> mobile application. This Account Data
            Policy explains what data we hold, how you can obtain a copy of it, and how you can permanently delete your
            account and all associated data.
          </p>
          <p>
            This policy is provided in compliance with the requirements of the <strong>Google Play Store</strong> and
            the <strong>Apple App Store</strong>, and is aligned with applicable data protection laws including the
            Information Technology (Amendment) Act, 2008 and the Digital Personal Data Protection Act, 2023 (India).
          </p>
        </Section>

        <Section title="2. Data We Store About You">
          <p>When you use FinMitra, we may store the following categories of data linked to your account:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Identity data:</strong> Full name, mobile number, email address, and profile photo (if uploaded).</li>
            <li><strong>Business data:</strong> Agency name, IRDAI/ARN codes, distributor details, and business address.</li>
            <li><strong>Client & policy data:</strong> Client names, contact details, and insurance/investment policy records you have entered into the app.</li>
            <li><strong>Transaction data:</strong> Subscription plan details, payment references, and billing history.</li>
            <li><strong>Usage & device data:</strong> App session logs, device model, OS version, and crash reports used solely to improve app performance.</li>
            <li><strong>Communication data:</strong> Support tickets, in-app messages, and feedback you have submitted.</li>
          </ul>
        </Section>

        <Section title="3. Your Data Rights">
          <p>As a FinMitra user you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Right to Access:</strong> You may request a copy of all personal data we hold about you at any time.</li>
            <li><strong>Right to Portability:</strong> You may download your account data in a machine-readable format.</li>
            <li><strong>Right to Rectification:</strong> You may correct inaccurate or incomplete information directly in the app or by contacting support.</li>
            <li><strong>Right to Erasure:</strong> You may request the permanent deletion of your account and all associated personal data.</li>
            <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
          </ul>
        </Section>

        <Section title="4. How to Download Your Data">
          <p>You can request an export of all data associated with your FinMitra account directly from within the app. Follow these steps:</p>
          <div className="mt-4 space-y-3 bg-muted/40 border border-border rounded-xl p-5">
            <Step number={1} label="Open the FinMitra app and tap More (☰) in the bottom navigation bar." />
            <div className="w-full h-px bg-border" />
            <Step number={2} label="Tap Help Center." />
            <div className="w-full h-px bg-border" />
            <Step number={3} label="Select Account Data Policy." />
            <div className="w-full h-px bg-border" />
            <Step number={4} label="Tap Download Data and confirm your request." />
          </div>
          <p className="mt-4">
            We will prepare your data export and send a download link to your registered email address within
            <strong> 7 business days</strong>. The export will include all personal, business, client, and policy data
            stored under your account.
          </p>
        </Section>

        <Section title="5. How to Delete Your Account">
          <p>
            You can permanently delete your FinMitra account and all associated data at any time. Account deletion is
            irreversible — once confirmed, your data cannot be recovered. Follow these steps:
          </p>
          <div className="mt-4 space-y-3 bg-destructive/5 border border-destructive/20 rounded-xl p-5">
            <Step number={1} label="Open the FinMitra app and tap More (☰) in the bottom navigation bar." />
            <div className="w-full h-px bg-destructive/10" />
            <Step number={2} label="Tap Help Center." />
            <div className="w-full h-px bg-destructive/10" />
            <Step number={3} label="Select Account Data Policy." />
            <div className="w-full h-px bg-destructive/10" />
            <Step number={4} label="Tap Delete Account." />
            <div className="w-full h-px bg-destructive/10" />
            <Step number={5} label="Read the confirmation notice, then tap Confirm Delete to permanently remove your account." />
          </div>
          <p className="mt-4">
            Upon confirmation, all your personal data, client records, policy data, and account settings will be
            permanently erased from our active systems within <strong>30 days</strong>. Certain data may be retained
            for a limited period where required by law (e.g., financial transaction records for statutory auditing
            purposes), after which it will also be deleted.
          </p>
          <p>
            If you are unable to access the app, you may also request account deletion by emailing us at{" "}
            <a href="mailto:mail@altisinfonet.com" className="text-primary underline underline-offset-2">
              mail@altisinfonet.com
            </a>{" "}
            from your registered email address.
          </p>
        </Section>

        <Section title="6. What Happens After Deletion">
          <p>When your deletion request is processed:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your account will be immediately deactivated and you will be logged out of all devices.</li>
            <li>All personal and client data stored in our active database will be permanently deleted within 30 days.</li>
            <li>Backup copies will be purged within 90 days in accordance with our backup retention schedule.</li>
            <li>Any active subscription will be cancelled. Refunds are subject to our <strong>Refund Policy</strong>.</li>
            <li>Anonymised, aggregated statistical data that cannot be linked back to you may be retained for analytical purposes.</li>
          </ul>
        </Section>

        <Section title="7. Data Retention After Deletion">
          <p>
            Notwithstanding your deletion request, we are legally obligated to retain certain records for compliance
            and auditing purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Financial records:</strong> Subscription and payment records may be retained for up to <strong>8 years</strong> as required under Indian taxation and accounting laws.</li>
            <li><strong>Legal hold data:</strong> Where data is subject to a pending legal claim or regulatory inquiry, it will be retained until the matter is resolved.</li>
            <li><strong>Security logs:</strong> Access logs may be retained for up to <strong>1 year</strong> for fraud prevention and security investigation purposes.</li>
          </ul>
          <p>All retained data is stored securely and is used exclusively for the specified legal purpose.</p>
        </Section>

        <Section title="8. Security of Your Data">
          <p>
            FinMitra protects your data using industry-leading security measures, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>End-to-end encryption in transit using <strong>TLS 1.3</strong>.</li>
            <li>Data at rest encrypted with <strong>AES-256</strong>.</li>
            <li>Role-based access controls limiting who can view your data internally.</li>
            <li>Regular third-party security audits and penetration testing.</li>
          </ul>
        </Section>

        <Section title="9. Third-Party Services Disclaimer">
          <p>
            FinMitra is a <strong>mobile application only</strong>. We do not operate a web-based portal for account
            management. All account data actions (download, deletion) must be initiated either through the FinMitra
            mobile app or by contacting our support team directly.
          </p>
          <p>
            We use trusted third-party infrastructure providers (cloud hosting, SMS/notification gateways) to operate
            the app. These providers are bound by strict data processing agreements and are prohibited from using your
            data for any purpose other than providing the contracted service.
          </p>
        </Section>

        <Section title="10. Children's Data">
          <p>
            FinMitra is intended for use by licensed insurance agents and financial distributors aged 18 and above. We
            do not knowingly collect personal data from minors. If you believe a minor has created an account, please
            contact us immediately at{" "}
            <a href="mailto:mail@altisinfonet.com" className="text-primary underline underline-offset-2">
              mail@altisinfonet.com
            </a>{" "}
            and we will delete the account promptly.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Account Data Policy periodically. We will notify you of material changes via an
            in-app notification and by updating the "Last updated" date above. Continued use of the app after the
            effective date constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>For any questions or requests related to your account data, please reach out to us:</p>
          <div className="mt-2 space-y-1">
            <p><strong>Altis Infonet Private Limited</strong></p>
            <p>Email: <a href="mailto:mail@altisinfonet.com" className="text-primary underline underline-offset-2">mail@altisinfonet.com</a></p>
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

export default AccountDataPolicy;
