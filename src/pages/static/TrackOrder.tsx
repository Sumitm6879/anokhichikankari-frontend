import { useState } from 'react'
import StaticPageLayout from './StaticPageLayout'
import { useStoreSettings } from '../../hooks/useStoreSettings'

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [searched, setSearched] = useState(false)
  const {settings} = useStoreSettings();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      setSearched(true)
    }
  }

  return (
    <StaticPageLayout title="Track Your Order">
      <div className="space-y-12">
        {/* Search Section */}
        <section className="text-center max-w-lg mx-auto not-prose">
          <p className="text-slate-600 mb-6">
            Enter the tracking number sent to your email address.
          </p>

          <form onSubmit={handleTrack} className="relative">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g., #123456789"
              className="w-full pl-6 pr-32 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition font-medium text-sm"
            >
              Track Order
            </button>
          </form>
        </section>

        {searched && (
          <section className="bg-white border border-slate-200 rounded-xl p-8 text-center animate-fade-in">
            <h3 className="text-lg font-serif font-medium text-slate-900 mb-4">Select Your Carrier</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { name: 'Blue Dart', url: 'https://www.bluedartexpress.com/tracking' },
                { name: 'Delhivery', url: 'https://www.delhivery.com/tracking/' },
                { name: 'India Post', url: 'https://www.indiapost.gov.in/vas/pages/FindaService.aspx' }
              ].map((carrier) => (
                <a
                  key={carrier.name}
                  href={carrier.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:border-slate-900 hover:text-slate-900 transition"
                >
                  {carrier.name}
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-slate-100 my-8"></div>

        {/* Timeline Visual */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-6 text-center">How It Works</h2>
          <div className="not-prose space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">

            {[
              { title: "Order Confirmed", desc: "We've received your order." },
              { title: "Processing", desc: "Handcrafting or packing your items (1-2 days)." },
              { title: "Shipped", desc: "Picked up by the courier partner." },
              { title: "Out for Delivery", desc: "Arriving at your doorstep today." },
              { title: "Delivered", desc: "Package successfully delivered." },
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8 last:mb-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-hover:bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                  <h3 className="font-medium text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Help Section */}
        <section className="bg-slate-50 rounded-xl p-6 text-center">
          <p className="text-slate-600 text-sm">
            Can't find your tracking number? Contact us at{' '}
            <a href={`mailto:${settings.support_email}`} className="text-slate-900 font-medium underline">
              {settings.support_email}
            </a>
          </p>
        </section>
      </div>
    </StaticPageLayout>
  )
}