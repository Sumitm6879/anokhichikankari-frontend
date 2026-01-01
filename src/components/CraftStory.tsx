export const CraftStory: React.FC = () => {
  const storyImageUrl = 'src/assets/section_image_1.png'
  return (
    <section className="section-container bg-slate-50">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={storyImageUrl}
              alt="Artisans creating Chikankari embroidery"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
              The Heritage of Handcraft
            </h2>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                Chikankari is not just embroidery—it is a living tradition that spans generations. Originating in the heart of Lucknow, this delicate craft has been perfected by skilled artisans whose hands have learned their art through years of patient practice and cultural inheritance.
              </p>

              <p>
                Every stitch in an Anokhichikankari kurta is created by these master craftspeople. There are no machines, no shortcuts. Just the quiet dedication of artisans who understand that each piece carries the responsibility of preserving a heritage that defines Indian textiles globally.
              </p>

              <p>
                We work directly with these artisans, ensuring they receive fair compensation for their expertise and time. When you wear an Anokhichikankari kurta, you are not just wearing a garment—you are supporting a community of creators and honoring centuries of artisanal wisdom.
              </p>

              <p className="text-slate-600 italic">
                Small variations in embroidery, slight color differences, and unique nuances are not imperfections—they are signatures of authentic handwork. They tell the story of the artisan's hands and prove that your piece is genuinely crafted, not mass-produced.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 uppercase tracking-widest">Established with purpose</p>
              <p className="text-xl font-serif font-semibold text-slate-900 mt-2">
                Supporting artisans. Celebrating heritage. Creating conscious fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
