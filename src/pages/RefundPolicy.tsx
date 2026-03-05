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

const RefundPolicy = () => {
  const appMode = useAppMode();
  return (
    <div className="min-h-screen bg-background">
      {!appMode && <Navbar />}
      <main className="container mx-auto px-4 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Refund Policy</h1>
        <p className="text-sm text-foreground/50 mb-10">Last updated: March 2026 &nbsp;|&nbsp; Altis Infonet Private Limited</p>

        <Section title="1. Overview">
          <p>This Refund Policy applies to all subscription purchases made for the FinMitra application, operated by Altis Infonet Private Limited ("we", "us", or "our"). By subscribing to FinMitra, you acknowledge and agree to the terms outlined in this policy.</p>
        </Section>

        <Section title="2. Subscription Plans">
          <p>FinMitra offers monthly and annual subscription plans. All plans are billed in advance and grant access to the features described on our pricing page at the time of purchase.</p>
        </Section>

        <Section title="3. Free Trial">
          <p>Where a free trial is offered, no payment is collected during the trial period. If you choose not to continue after the trial, simply do not subscribe — no charges will apply. Refunds are not applicable to free trials.</p>
        </Section>

        <Section title="4. Eligibility for Refunds">
          <p>We offer refunds under the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Technical Failure:</strong> If the Service is completely inaccessible for more than 72 consecutive hours due to issues on our end, you may request a pro-rated refund for the affected period.</li>
            <li><strong>Duplicate Charges:</strong> If you were charged more than once for the same subscription period due to a billing error, we will refund the duplicate amount in full.</li>
            <li><strong>New Subscribers — 7-Day Window:</strong> First-time subscribers who have not used the Service (no logins recorded) may request a full refund within 7 days of the initial purchase.</li>
          </ul>
        </Section>

        <Section title="5. Non-Refundable Situations">
          <p>Refunds will <strong>not</strong> be issued in the following cases:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You changed your mind after subscribing and have used the Service</li>
            <li>You forgot to cancel before the renewal date</li>
            <li>Your account was suspended or terminated due to a violation of our Terms of Service</li>
            <li>Partial use of a subscription period (monthly or annual)</li>
            <li>Subscriptions purchased through third-party platforms (Google Play Store, Apple App Store) — refund requests for such purchases must be directed to the respective platform</li>
          </ul>
        </Section>

        <Section title="6. In-App Purchases via Google Play or Apple App Store">
          <p>If you subscribed to FinMitra through the Google Play Store or Apple App Store, the refund is governed by their respective policies:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Google Play:</strong> Refund requests must be submitted within 48 hours of purchase at <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold))] hover:underline">play.google.com/store/account/subscriptions</a></li>
            <li><strong>Apple App Store:</strong> Refund requests must be submitted at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--gold))] hover:underline">reportaproblem.apple.com</a></li>
          </ul>
          <p>Altis Infonet Private Limited has no control over refund decisions made by these platforms.</p>
        </Section>

        <Section title="7. How to Request a Refund">
          <p>To request a refund for purchases made directly through FinMitra, please contact us within the eligible timeframe:</p>
          <div className="mt-2 space-y-1 bg-card border border-border rounded-xl p-4">
            <p><strong>Email:</strong> mail@altisinfonet.com</p>
            <p><strong>Phone:</strong> 033 4402 6497 (Mon–Fri, 9:30 AM – 7 PM)</p>
            <p><strong>WhatsApp:</strong> +91 86979 74570</p>
          </div>
          <p className="mt-3">Please include your registered email address, order/transaction ID, date of purchase, and the reason for your refund request.</p>
        </Section>

        <Section title="8. Refund Processing">
          <p>Approved refunds will be processed within <strong>7–10 business days</strong> and credited back to the original payment method. Processing times may vary depending on your bank or payment provider.</p>
        </Section>

        <Section title="9. Cancellation Policy">
          <p>You may cancel your subscription at any time from within the app or by contacting our support team. Cancellation stops future billing but does not entitle you to a refund for the current billing period unless you meet the eligibility criteria in Section 4.</p>
          <p>After cancellation, you will retain access to the Service until the end of your current paid period.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We reserve the right to update this Refund Policy at any time. Changes will be communicated via email or in-app notification. Continued use of FinMitra after the effective date constitutes acceptance of the revised policy.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>For any questions about this policy, please reach out to:</p>
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

export default RefundPolicy;
