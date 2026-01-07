import type { ReactNode } from 'react'

interface StaticPageLayoutProps {
  title: string
  subtitle?: string // Added subtitle support
  children: ReactNode
}

const StaticPageLayout = ({ title, subtitle, children }: StaticPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Header Section */}
        <div className="px-8 py-12 border-b border-slate-100 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-slate-500 text-lg font-light">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="px-8 py-10">
          <div className="prose prose-slate prose-headings:font-serif prose-a:text-indigo-600 hover:prose-a:text-indigo-500 max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticPageLayout