import StaticPageLayout from './StaticPageLayout'

export default function ShippingPolicy() {
  return (
    <StaticPageLayout title="Shipping Policy">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Domestic Shipping</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Standard delivery: 5-7 business days</li>
            <li>Express delivery: 2-3 business days (available for select locations)</li>
            <li>Free shipping on orders above ₹1000</li>
            <li>Orders are shipped via registered courier services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">International Shipping</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Available to select countries</li>
            <li>Shipping time: 10-21 business days depending on destination</li>
            <li>International shipping charges apply</li>
            <li>Customers are responsible for any customs duties and import taxes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Order Processing</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Orders are processed within 1-2 business days</li>
            <li>You will receive a tracking number via email once your order ships</li>
            <li>Please allow time for courier pickup and processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Shipping Charges</h2>
          <p className="text-slate-700 mb-3">
            Shipping charges are calculated at checkout based on your location and order weight.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Orders under ₹1000: Flat shipping charge of ₹100</li>
            <li>Orders ₹1000 and above: Free shipping</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Lost or Damaged Shipments</h2>
          <p className="text-slate-700">
            If your package is lost or arrives damaged, please contact us immediately at
            info@anokhichikankari.com with photos and tracking information. We will help resolve the
            issue promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Tracking Your Order</h2>
          <p className="text-slate-700">
            You can track your order using the tracking number provided in your shipping confirmation
            email. Visit our Track Order page or enter your tracking number on the courier's website.
          </p>
        </section>
      </div>
    </StaticPageLayout>
  )
}
