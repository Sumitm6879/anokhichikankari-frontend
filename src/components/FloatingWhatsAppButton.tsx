interface FloatingWhatsAppButtonProps {
  whatsappNumber?: string
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  whatsappNumber,
}) => {
  if (!whatsappNumber) {
    return null
  }

  const handleClick = () => {
    const message = encodeURIComponent(
      'Hi! I am interested in your Chikankari kurtas. Could you please guide me?'
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-green-600"
      aria-label="Contact us on WhatsApp"
      title="Order on WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-75" />

      {/* WhatsApp Icon */}
      <svg className="relative z-10 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.766 0-3.42.483-4.844 1.404-.588.358-1.129.816-1.566 1.364l-1.775 1.776-1.776 1.776-.022.022c-.44.435-.707 1.035-.707 1.691 0 1.381 1.12 2.502 2.502 2.502 1.381 0 2.502-1.121 2.502-2.502 0-.656-.267-1.256-.707-1.691l-.022-.022 1.776-1.776 1.776-1.775c.547-.437 1.005-.978 1.363-1.566 1.031-1.569 1.536-3.405 1.536-5.336 0-2.079-.649-4.083-1.853-5.785l1.19-1.189c1.527 1.835 2.45 4.20 2.45 6.974 0 1.766-.483 3.42-1.404 4.844z" />
      </svg>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Message us anytime
        <div className="absolute top-full right-3 w-2 h-2 bg-slate-900 rotate-45" />
      </div>
    </button>
  )
}
