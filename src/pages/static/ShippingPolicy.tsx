import StaticPageLayout from './StaticPageLayout'

export default function ShippingPolicy() {
  return (
    <StaticPageLayout title="Shipping, Care & Returns">
      <div className="space-y-12 max-w-4xl mx-auto">

        {/* Section 1: Shipping Policy */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-700 rounded-full"></span>
            Shipping Policy
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              All our orders are carefully processed to ensure quality and safe delivery.
              Orders are dispatched within <span className="font-semibold text-slate-900">12–24 hours</span> after order confirmation.
            </p>
            <p>
              This processing time allows us to conduct final quality checks, proper folding, and secure packaging to protect delicate handwork.
              Once dispatched, shipping timelines depend on your location and courier partner, typically <span className="font-semibold text-slate-900">3–7 business days</span> within India.
            </p>
            <p>
              Tracking details are shared as soon as the order is shipped. We currently ship across India. International shipping availability may vary.
            </p>
            <p className="italic text-emerald-800 font-medium pt-2">
              "We believe careful dispatch is as important as craftsmanship."
            </p>
          </div>
        </section>

        {/* Section 2: Care Instructions */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-700 rounded-full"></span>
            Care Instructions
          </h2>

          <p className="text-slate-700 mb-8">
            Lucknowi kurties are handcrafted with delicate embroidery and require gentle care to preserve their beauty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Washing */}
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Washing</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                <li>Prefer dry clean for best longevity.</li>
                <li>If washing at home, hand wash separately in cold water.</li>
                <li>Use mild detergent only.</li>
                <li>Do not soak or scrub the embroidered areas.</li>
              </ul>
            </div>

            {/* Drying */}
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Drying</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                <li>Do not wring or twist the garment.</li>
                <li>Dry in shade on a flat surface or hanger.</li>
                <li>Avoid direct sunlight to prevent color fading.</li>
              </ul>
            </div>

            {/* Ironing */}
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Ironing</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                <li>Iron on low heat.</li>
                <li>Always iron on the reverse side or place a cotton cloth over embroidery.</li>
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Storage</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                <li>Store in a cool, dry place.</li>
                <li>Avoid hanging heavy embroidered kurties for long periods.</li>
                <li>Keep away from moisture and perfumes.</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-slate-500 italic mt-6 text-sm">
            Proper care ensures your kurti remains timeless for years.
          </p>
        </section>

        {/* Section 3: Returns & Exchanges */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-700 rounded-full"></span>
            Returns & Exchanges
          </h2>

          <div className="space-y-4 text-slate-700">
            <p>
              We take quality seriously and offer limited returns/exchanges under clear conditions.
            </p>

            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span>
                  Return or exchange requests must be raised within <strong className="text-slate-900">24 hours of delivery</strong>. Requests after this period will not be accepted.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Items must be unused, unwashed, and in original condition with tags intact.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Exchanges are subject to product availability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Customized or discounted items are not eligible for return or exchange.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Any issue must be reported with clear images/videos for verification. Once approved, our team will guide you through the process.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </StaticPageLayout>
  )
}