import StaticPageLayout from './StaticPageLayout'
import aboutus1 from '../../assets/aboutus1.jpg'
import aboutus2 from '../../assets/aboutus2.jpg'
export default function About() {
  return (
    <StaticPageLayout title=""> {/* Empty title to use custom hero design inside */}

      {/* Section 1: The Hook / Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
          A Journey Woven in Thread
        </h2>
        <div className="w-24 h-1 bg-emerald-700 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-slate-600 leading-relaxed italic">
          "What started as a simple visit to Lucknow quickly became a turning point in our lives."
        </p>
      </div>

      {/* Section 2: The Spark (Image Left, Text Right) */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-xl group">
            {/* Placeholder: Replace with an image of Lucknow streets or architecture */}
            <img
              src={aboutus1}
              alt="Streets of Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/10"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-slate-800">
            The Discovery
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We arrived without any grand plans, just curiosity and admiration for the city’s timeless craftsmanship.
            As we walked through narrow lanes and watched artisans patiently hand-stitch delicate chikankari,
            we realized this wasn’t just about fashion.
          </p>
          <p className="text-slate-600 leading-relaxed border-l-4 border-emerald-700 pl-4 bg-emerald-50 py-2 pr-2">
            It was about heritage, discipline, and quiet excellence passed down through generations.
            That moment changed everything.
          </p>
        </div>
      </div>

      {/* Section 3: The Immersion (Text Left, Image Right) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-xl group">
             {/* Placeholder: Replace with an image of Artisan Hands or Embroidery close-up */}
            <img
              src={aboutus2}
              alt="Artisan working on fabric"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif font-semibold text-slate-800">
            From Purpose to Opportunity
          </h3>
          <p className="text-slate-600 leading-relaxed">
            What began as a small purpose gradually turned into a powerful opportunity. We immersed ourselves in understanding fabrics,
            stitches, quality, and the people behind them.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From learning the basics of Lucknowi craftsmanship to working closely with skilled <span className="text-emerald-700 font-medium">karigars</span>,
            our respect for the art deepened. Over time, this dedication opened doors for us, allowing collaboration with top brands
            and firsthand experience in quality standards, design sensibilities, and ethical sourcing.
          </p>
        </div>
      </div>

      {/* Section 4: The Vision (Brand Statement) */}
      <div className="bg-slate-900 text-slate-200 p-8 md:p-12 rounded-2xl shadow-2xl text-center mb-16 relative overflow-hidden">
        {/* Decorative circle background */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
            Honoring Tradition, Embracing Style
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            With experience, trust, and a clear vision, we took the leap to create something of our own—our brand.
            A brand that brings authentic Lucknowi kurties to a wider audience without losing their essence.
          </p>
        </div>
      </div>

      {/* Section 5: Conclusion */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-lg text-slate-700 leading-relaxed">
          Today, with our online presence, we aim to make handcrafted Lucknowi wear accessible to everyone who values elegance, comfort, and authenticity.
          Every piece we offer tells a story of artisans, heritage, and a journey that began with one simple visit.
        </p>

        <div className="pt-8">
          <p className="font-serif text-2xl md:text-3xl text-emerald-800 italic font-medium">
            "This is more than clothing. <br className="hidden md:block"/>
            This is our story, woven in thread."
          </p>
          <div className="mt-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
            — The Founders
          </div>
        </div>
      </div>

    </StaticPageLayout>
  )
}