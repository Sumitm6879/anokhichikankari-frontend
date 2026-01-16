import StaticPageLayout from './StaticPageLayout'
import { useStoreSettings } from '../../hooks/useStoreSettings'

export default function TermsOfService() {
  const { settings } = useStoreSettings();

  const brandName = settings?.store_name || "Anokhi Chikankari";
  const supportEmail = settings?.support_email || "anokhichikankari63@gmail.com";
  const whatsappNumber = settings?.support_phone || "WhatsApp Number";

  return (
    <StaticPageLayout title="Terms of Service" subtitle={`Last Updated: ${new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}`}>
      <div className="space-y-12">
        <section className="prose-p:text-slate-600">
          <p className="lead text-lg text-slate-600">
            These Terms of Service ("Terms") govern your access to our website and the ordering of products
            through WhatsApp from {brandName}. By browsing the Website or placing an order via WhatsApp
            as described below, you accept these Terms and our Privacy Policy.
          </p>
        </section>

        <div className="space-y-10">
          <Section title="1. Introduction">
            <p>
              These Terms of Service (“Terms”) govern your access to the website (the “Website”) and ordering of products through WhatsApp from <strong>{brandName}</strong>,
              a company incorporated under Indian law.
            </p>
            {/* <p>
              <strong>Registered Office:</strong> [Insert Registered Address Here]<br />
              <strong>GSTIN:</strong> [Insert GSTIN Here]
            </p> */}
            <p>
              If you do not agree to these Terms, please do not use the Website or place orders.
            </p>
          </Section>

          <Section title="2. Scope & Nature of Service">
            <p>
              The Website serves as a product catalogue and information portal only. The Website <strong>does not accept payments or directly process orders.</strong>
            </p>
            <p>
              Orders can be placed only by contacting our WhatsApp number: <strong>{whatsappNumber}</strong>.
              The WhatsApp channel is the exclusive method for placing Orders.
            </p>
          </Section>

          <Section title="3. Definitions">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>“Order”</strong> means an offer made by you over WhatsApp to buy one or more products listed on the Website.</li>
              <li><strong>“Buyer/you”</strong> means the person placing an Order.</li>
              <li><strong>“Confirmation”</strong> means the message we send on WhatsApp/email confirming acceptance and estimated delivery.</li>
            </ul>
          </Section>

          <Section title="4. Eligibility">
            <p>
              You must be at least 18 years old and legally capable of entering contracts under Indian law.
            </p>
          </Section>

          <Section title="5. Product Information, Images & Availability">
            <p>
              Product images, descriptions, sizes, and colours on the Website are for illustrative purposes. Actual products may slightly differ.
            </p>
            <p>
              Availability on the Website is indicative; an Order is accepted only when we send a Confirmation.
              We reserve the right to refuse or cancel Orders for stock unavailability, pricing errors, suspected fraud, or other reasonable causes.
            </p>
          </Section>

          <Section title="6. How to Order (WhatsApp)">
            <p>To place an order, please follow these steps:</p>
            <ul className="list-decimal pl-5 space-y-2">
              <li>Browse products on the Website.</li>
              <li>Message us on WhatsApp at <strong>{whatsappNumber}</strong> with the product code/name, quantity, delivery address, and any customization requests.</li>
              <li>Our team will respond with an order acknowledgement, final price, shipping charges (if any), expected delivery timeline, and payment options.</li>
              <li>You confirm acceptance by replying “CONFIRM” (or other agreed confirmation) on WhatsApp.</li>
              <li>We will send an <strong>Order Confirmation</strong> when we accept the Order. Until you receive an Order Confirmation, no contract exists.</li>
            </ul>
          </Section>

          <Section title="7. Pricing & Taxes">
            <p>
              Prices displayed on the Website are in INR and are indicative. The final payable amount (including taxes, shipping, handling, packing)
              will be communicated on WhatsApp before you confirm the Order.
            </p>
            <p>
              We may update prices or offers at any time. Orders accepted will be honoured at the price confirmed in the Order Confirmation.
            </p>
          </Section>

          <Section title="8. Payment Methods">
            <p>
              The Website does not accept payments. Payments are to be made by the methods communicated and agreed on WhatsApp
              (e.g., Bank transfer, UPI, Cash on Delivery, or payment links handled outside the Website).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Accepted methods will be listed in the WhatsApp conversation for each Order.</li>
              <li>Payment terms (advance, partial, COD) will be specified before you confirm.</li>
              <li>If advance payment is required, we will not dispatch until payment is received and cleared.</li>
              <li>Please keep payment receipts or transaction IDs to facilitate refunds/returns.</li>
            </ul>
          </Section>

          <Section title="9. Order Acceptance, Dispatch & Delivery">
            <p>
              Dispatch and delivery timelines will be provided in the Order Confirmation. All timelines are estimates.
            </p>
            <p>
              Risk of loss passes to you on delivery at the delivery address. You must inspect products at delivery and note any
              visible defects/damages on the delivery proof/receipt and inform us on WhatsApp within <strong>24 to 48 hours</strong>.
            </p>
            <p>
              If delivery fails due to incorrect address or your unavailability, additional charges or cancellation may apply.
            </p>
          </Section>

          <Section title="10. Returns, Exchanges & Refunds">
            <p>Our Returns & Exchanges Policy applies to WhatsApp Orders. Key points:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Returns/exchanges are accepted within <strong>2 days</strong> (or as specified) of delivery for unused, unwashed items with original tags and invoice.</li>
              <li><strong>Exclusions:</strong> Non-returnable items (e.g., intimate wear, customised items) will be stated in the description/WhatsApp conversation.</li>
              <li>For returns due to defects or wrong items, we will arrange a replacement or refund after verification.</li>
              <li>Refunds (where applicable) will be processed to the original payment method or via bank transfer/UPI within <strong>5-7 business days</strong> of acceptance of the return.</li>
              <li>For COD Orders, refunds will be processed as per the agreed method; COD charges may be deducted if applicable.</li>
            </ul>
          </Section>

          <Section title="11. Cancellation">
            <p>
              You may cancel an Order before dispatch by notifying us on WhatsApp. Cancellation after dispatch will follow the Returns Policy.
            </p>
            <p>
              We may cancel Orders for reasons including stock unavailability, pricing mistakes, non-payment within stipulated time, or suspicion of fraudulent activity.
            </p>
          </Section>

          <Section title="12. Communication & Records">
            <p>
              All communications that form part of the contract (quotes, confirmations, invoices, cancellations) may be sent/recorded via WhatsApp and/or email.
              WhatsApp message logs maintained by us are prima facie evidence of the transaction subject to applicable law.
            </p>
          </Section>

          <Section title="13. Customer Data & Privacy">
            <p>
              By placing Orders via WhatsApp, you agree we may collect, store, and process your personal data (name, address, phone number, WhatsApp chats)
              to fulfil Orders. Our Privacy Policy describes data handling practices.
            </p>
            <p>
              <strong>Important:</strong> Sensitive financial data must not be shared on WhatsApp; use secure payment channels we provide.
              We are not responsible for WhatsApp outages or privacy practices of WhatsApp/Meta.
            </p>
          </Section>

          <Section title="14. Intellectual Property">
            <p>
              All Website content, trademarks, and design are owned by the Company. You may not reproduce or use them without prior written permission.
            </p>
          </Section>

          <Section title="15. Limitation of Liability & Disclaimers">
            <p>
              To the extent permitted by law, our liability for any claim related to any Order will not exceed the value paid for that Order.
              We are not liable for indirect, incidental, or consequential losses (including loss of business, profits, or reputation).
            </p>
          </Section>

          <Section title="16. Indemnity">
            <p>
              You agree to indemnify and hold harmless the Company against losses arising from your breach of these Terms, misuse of the WhatsApp channel,
              false statements, or violation of third-party rights.
            </p>
          </Section>

          <Section title="17. Force Majeure">
            <p>
              We are not liable for failure or delay caused by events beyond our control (natural disasters, strikes, pandemics, government orders, internet/telecom failures).
            </p>
          </Section>

          <Section title="18. Grievance Redressal - Yet to be decided">
            <p>In compliance with Indian law, the Company’s Grievance shoudl be submited on whatsapp no. {whatsappNumber}</p>
            {/* <p className="pl-4 border-l-2 border-slate-200">
              <strong>Name:</strong> [Insert Name]<br />
              <strong>Email:</strong> <a href="mailto:grievance@yourwebsite.com">grievance@yourwebsite.com</a><br />
              <strong>Address:</strong> [Registered Office Address]
            </p>
            <p>
               A consumer who has a grievance may contact the Officer. If unresolved, you may approach the appropriate consumer forum/authority.
            </p> */}
          </Section>

          <Section title="19. Notices">
             <p>
               Legal notices must be sent to: <a href={`mailto:${supportEmail}`}>{supportEmail}</a> or our Registered Address.
               Routine customer service replies will be on WhatsApp or email as used in the Order.
             </p>
          </Section>

          <Section title="20. Changes to Terms">
            <p>
              We may update these Terms. We will post the revised Terms on the Website with a “Last updated” date.
              Continued use or placing Orders after updates constitutes acceptance.
            </p>
          </Section>

          <Section title="21. Governing Law & Jurisdiction">
            <p>
              These Terms are governed by the laws of India. Courts at <strong>Lucknow</strong> have exclusive jurisdiction to resolve disputes.
            </p>
          </Section>

          <Section title="22. Severability & Entire Agreement">
            <p>
              If a provision is unenforceable it will be severed without affecting other provisions. These Terms constitute the entire agreement
              between you and the Company regarding WhatsApp Orders.
            </p>
          </Section>

          <Section title="23. Contact & Support">
             <p>
               For support contact: WhatsApp <strong>{whatsappNumber}</strong> or email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
             </p>
          </Section>
        </div>
      </div>
    </StaticPageLayout>
  )
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="border-l-2 border-slate-100 pl-6 py-1">
    <h2 className="text-xl font-serif text-slate-900 mb-4 mt-0">{title}</h2>
    <div className="text-slate-600 space-y-4">
      {children}
    </div>
  </section>
)