interface TrustPointProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const TrustPoint: React.FC<TrustPointProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-emerald-600">
        {icon}
      </div>
      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
