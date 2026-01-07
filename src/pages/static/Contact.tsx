import StaticPageLayout from './StaticPageLayout'

export default function Contact() {
  return (
    <StaticPageLayout title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="not-prose grid md:grid-cols-2 gap-6">

        {/* Left Column: Contact Info */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl text-slate-200 font-serif mb-6">Get in Touch</h2>
            <p className="text-slate-300 mb-8 font-light">
              Whether you have questions about our products, styling advice, or collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="opacity-50 mt-1">✉️</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
                  <p className="font-medium">info@anokhichikankari.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="opacity-50 mt-1">📞</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="font-medium">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="opacity-50 mt-1">📍</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Location</p>
                  <p className="font-medium">Lucknow, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hours & Socials */}
        <div className="space-y-6">
          <div className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm">
            <h3 className="font-serif text-lg text-slate-900 mb-4">Business Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-50">
                <span className="text-slate-500">Mon - Fri</span>
                <span className="font-medium text-slate-900">10:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-50">
                <span className="text-slate-500">Saturday</span>
                <span className="font-medium text-slate-900">11:00 AM - 5:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sunday</span>
                <span className="text-red-500 font-medium">Closed</span>
              </div>
            </div>
          </div>

          <div className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm">
            <h3 className="font-serif text-lg text-slate-900 mb-2">Follow Us</h3>
            <p className="text-slate-500 text-sm mb-4">Connect with us on social media for the latest collections.</p>
            {/* Add Social Icons Here */}
            <div className="flex gap-2">
               <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition">Instagram</button>
               <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium transition">Facebook</button>
            </div>
          </div>
        </div>

      </div>
    </StaticPageLayout>
  )
}