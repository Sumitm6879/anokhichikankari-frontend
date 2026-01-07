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
      'Hi! I am interested in your Chikankari kurtis. Could you please guide me?'
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
      <svg
        className="relative z-10 w-8 h-8"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.73.77 5.287 2.104 7.468L2 30l6.71-2.07a13.93 13.93 0 0 0 7.293 2.04c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.5a11.45 11.45 0 0 1-5.847-1.6l-.42-.25-3.98 1.23 1.3-3.87-.27-.4a11.45 11.45 0 1 1 9.217 4.89zm6.61-8.71c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
      </svg>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Message us anytime
        <div className="absolute top-full right-3 w-2 h-2 bg-slate-900 rotate-45" />
      </div>
    </button>
  )
}
