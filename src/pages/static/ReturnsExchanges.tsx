import StaticPageLayout from './StaticPageLayout'

export default function ReturnsExchanges() {
  return (
    <StaticPageLayout title="Returns & Exchanges">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Return Policy</h2>
          <p className="text-slate-700 mb-3">
            We want you to be completely satisfied with your purchase. If you're not happy with your
            order, we offer hassle-free returns within 30 days of purchase.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
            <h3 className="font-semibold text-slate-900 mb-2">Return Eligibility</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Items must be unused and in original condition</li>
              <li>All tags and packaging must be intact</li>
              <li>Return request must be made within 30 days of purchase</li>
              <li>Proof of purchase (order confirmation) required</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">How to Return</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Contact us at info@anokhichikankari.com with your order number</li>
            <li>Provide photos of the item showing its condition</li>
            <li>Once approved, follow the return shipping instructions</li>
            <li>Ship the item back in its original packaging</li>
            <li>Refund will be processed within 7-10 business days of receiving the item</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Exchange Policy</h2>
          <p className="text-slate-700 mb-3">
            We also offer exchanges if you'd like a different size, color, or style. Exchanges are
            free within 30 days of purchase.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Exchange Process</h3>
            <ol className="list-decimal list-inside space-y-1 text-slate-700">
              <li>Request an exchange within 30 days of purchase</li>
              <li>Specify the item you'd like in exchange</li>
              <li>Ship the original item back to us</li>
              <li>We'll send your replacement item once we receive the original</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Non-Returnable Items</h2>
          <p className="text-slate-700 mb-2">The following items cannot be returned or exchanged:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Items showing signs of wear or damage</li>
            <li>Items that have been washed or altered</li>
            <li>Items without original tags or in non-original packaging</li>
            <li>Sale or clearance items (final sale)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Refund Details</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-slate-700 mb-2">Refunds are issued as follows:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Original payment method: Refund within 7-10 business days</li>
              <li>Return shipping costs: Non-refundable unless item was defective</li>
              <li>Refund amount: Full purchase price minus any applicable deductions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Defective Items</h2>
          <p className="text-slate-700">
            If you receive a defective or damaged item, please contact us immediately with photos.
            We'll provide a full refund or replacement at no cost, including return shipping.
          </p>
        </section>

        <section>
          <p className="text-slate-700 text-sm">
            For any questions about returns or exchanges, please contact us at
            info@anokhichikankari.com
          </p>
        </section>
      </div>
    </StaticPageLayout>
  )
}
