import StaticPageLayout from './StaticPageLayout'

export default function TermsOfService() {
  return (
    <StaticPageLayout title="Terms of Service" subtitle="Last Updated: January 2026">
      <div className="space-y-12">
        <section className="prose-p:text-slate-600">
          <p className="lead text-lg text-slate-600">
            These Terms of Service ("Terms") constitute a legally binding agreement between you and
            Anokhichikankari regarding your access to and use of our website and services.
          </p>
        </section>

        {/* We use a map or just clean markup for sections */}
        <div className="space-y-10">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing and using our website, you accept and agree to be bound by these Terms and
              our Privacy Policy. If you do not agree to these Terms, please do not use our services.
            </p>
          </Section>

          <Section title="2. Use License">
            <p>We grant you a limited, non-exclusive license to:</p>
            <ul>
              <li>Access and view our website for personal, non-commercial purposes</li>
              <li>Purchase products from our online store</li>
            </ul>
            <p className="mt-4">You may not:</p>
            <ul>
              <li>Reproduce, distribute, or transmit content without permission</li>
              <li>Modify or create derivative works</li>
              <li>Use our website for commercial purposes without authorization</li>
              <li>Engage in any form of hacking or unauthorized access</li>
            </ul>
          </Section>

          {/* ... Repeat for other sections ... */}

          <Section title="16. Contact Information">
             <p>If you have questions about these Terms, please contact us at <a href="mailto:info@anokhichikankari.com">info@anokhichikankari.com</a></p>
          </Section>
        </div>
      </div>
    </StaticPageLayout>
  )
}

// Helper component for cleaner file structure within the same file
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="border-l-2 border-slate-100 pl-6 py-1">
    <h2 className="text-xl font-serif text-slate-900 mb-4 mt-0">{title}</h2>
    <div className="text-slate-600 space-y-4">
      {children}
    </div>
  </section>
)