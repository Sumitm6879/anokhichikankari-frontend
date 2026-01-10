import StaticPageLayout from './StaticPageLayout'

export default function ShippingPolicy() {
  return (
    <StaticPageLayout title="Shipping Policy">
      <div className="space-y-12 max-w-4xl mx-auto">

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-700 rounded-full"></span>
            Dispatch & Delivery
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
            <p className="italic text-emerald-800 font-medium pt-4 border-t border-slate-100 mt-4">
              "We believe careful dispatch is as important as craftsmanship."
            </p>
          </div>
        </section>

      </div>
    </StaticPageLayout>
  )
}