import StaticPageLayout from './StaticPageLayout'
import { useStoreSettings } from '../../hooks/useStoreSettings'
export default function ReturnsExchanges() {
  const { settings } = useStoreSettings()
  return (
    <StaticPageLayout title="Returns & Exchanges">
      <div className="space-y-12 max-w-4xl mx-auto">

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-700 rounded-full"></span>
            Policy Overview
          </h2>

          <div className="space-y-6 text-slate-700">
            <p className="text-lg">
              We take quality seriously and offer limited returns/exchanges under clear conditions.
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <h3 className="font-semibold text-red-900 mb-3">Important Conditions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span>
                    Return or exchange requests must be raised within <strong className="text-slate-900 underline">24 hours of delivery</strong>. Requests after this period will not be accepted.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span>Items must be unused, unwashed, and in original condition with tags intact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span>Exchanges are subject to product availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span>Customized or discounted items are not eligible for return or exchange.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mt-6">
              <h3 className="font-semibold text-emerald-900 mb-3">How to Process a Return</h3>
              <p className="mb-2">
                Any issue must be reported with clear images/videos for verification.
              </p>
              <p>
                Please email us at <a href={`mailto:${settings.support_email}`} className="text-emerald-700 underline font-medium">{settings.support_email}</a> or contact us via <span className='text-green-500 font-semibold'>WhatsApp</span>. Once approved, our team will guide you through the shipping process.
              </p>
            </div>
          </div>
        </section>

      </div>
    </StaticPageLayout>
  )
}