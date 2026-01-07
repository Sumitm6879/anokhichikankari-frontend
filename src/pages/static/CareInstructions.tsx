import StaticPageLayout from './StaticPageLayout'
// You can use lucide-react icons here: Hand, Droplets, Ban, Sun, Iron
// For now, I will use simple emoji/text placeholders for simplicity,
// but styling them as "cards" makes it modern.

const careSteps = [
  { title: "Wash", desc: "Hand wash separately in cold water", icon: "🧼" },
  { title: "Detergent", desc: "Use mild detergent only", icon: "🧴" },
  { title: "Bleach", desc: "Do not bleach", icon: "🚫" },
  { title: "Drying", desc: "Dry in shade to preserve color", icon: "🌤️" },
  { title: "Ironing", desc: "Iron on low heat setting", icon: "🔥" },
]

export default function CareInstructions() {
  return (
    <StaticPageLayout
      title="Care Instructions"
      subtitle="Preserve the beauty of your Chikankari for years to come."
    >
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {careSteps.map((step, index) => (
          <div key={index} className="p-6 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
            <div className="text-3xl mb-3">{step.icon}</div>
            <h3 className="font-serif font-medium text-slate-900 text-lg mb-1">{step.title}</h3>
            <p className="text-slate-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-indigo-900 text-sm">
        <strong>Note:</strong> Because of the delicate nature of hand embroidery, we recommend dry cleaning for heavy embellished pieces.
      </div>
    </StaticPageLayout>
  )
}