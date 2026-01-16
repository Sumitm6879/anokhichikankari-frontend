import StaticPageLayout from './StaticPageLayout'
import {useStoreSettings} from '../../hooks/useStoreSettings'

export default function PrivacyPolicy() {
  const {settings} = useStoreSettings();
  return (
    <StaticPageLayout title="Privacy Policy">
      <div className="space-y-6">
        <section>
          <p className="text-slate-700">
            Last Updated: January 2026
          </p>
          <p className="text-slate-700 mt-2">
            At Anokhichikankari, we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Information We Collect</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Automatic Information</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to your inquiries and customer service requests</li>
            <li>Send promotional emails and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Information Sharing</h2>
          <p className="text-slate-700 mb-3">
            We do not sell, trade, or rent your personal information to third parties. However, we may
            share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Shipping partners to deliver your orders</li>
            <li>Payment processors to process transactions</li>
            <li>Service providers who assist our business operations</li>
            <li>Law enforcement if required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Data Security</h2>
          <p className="text-slate-700">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. Your
            payment information is encrypted and processed securely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Cookies</h2>
          <p className="text-slate-700">
            Our website uses cookies to enhance your browsing experience. You can choose to disable
            cookies through your browser settings, but this may affect the functionality of our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Third-Party Links</h2>
          <p className="text-slate-700">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. Please review their privacy policies before
            providing your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Policy Updates</h2>
          <p className="text-slate-700">
            We may update this Privacy Policy from time to time. We will notify you of any significant
            changes by posting the new policy on our website and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact Us</h2>
          <p className="text-slate-700">
            If you have questions about this Privacy Policy or our privacy practices, please contact
            us at {settings.support_email}
          </p>
        </section>
      </div>
    </StaticPageLayout>
  )
}
