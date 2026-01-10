import StaticPageLayout from './StaticPageLayout'

export default function CareInstructions() {
  return (
    <StaticPageLayout title="Care Instructions">
      <div className="space-y-12 max-w-4xl mx-auto">

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <p className="text-lg text-slate-700 italic">
              "Lucknowi kurties are handcrafted with delicate embroidery and require gentle care to preserve their beauty."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Washing */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-serif font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
                <span>🧼</span> Washing
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Prefer dry clean for best longevity.</li>
                <li>If washing at home, hand wash separately in cold water.</li>
                <li>Use mild detergent only.</li>
                <li>Do not soak or scrub the embroidered areas.</li>
              </ul>
            </div>

            {/* Drying */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-serif font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
                <span>🌬️</span> Drying
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Do not wring or twist the garment.</li>
                <li>Dry in shade on a flat surface or hanger.</li>
                <li>Avoid direct sunlight to prevent color fading.</li>
              </ul>
            </div>

            {/* Ironing */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-serif font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
                <span>🔥</span> Ironing
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Iron on low heat.</li>
                <li>Always iron on the reverse side or place a cotton cloth over embroidery.</li>
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="font-serif font-bold text-slate-900 mb-4 text-xl flex items-center gap-2">
                <span>👘</span> Storage
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Store in a cool, dry place.</li>
                <li>Avoid hanging heavy embroidered kurties for long periods.</li>
                <li>Keep away from moisture and perfumes.</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-emerald-800 font-medium mt-8 border-t border-slate-100 pt-6">
            Proper care ensures your kurti remains timeless for years.
          </p>
        </section>

      </div>
    </StaticPageLayout>
  )
}