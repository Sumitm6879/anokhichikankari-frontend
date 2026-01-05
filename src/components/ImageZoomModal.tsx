import React, { useState, useEffect, useRef } from 'react'

interface ImageZoomModalProps {
  isOpen: boolean
  onClose: () => void
  images: { image_url: string }[]
  startIndex: number
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  images,
  startIndex
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [offsetY, setOffsetY] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sync internal index when modal opens or startIndex changes
  useEffect(() => {
    if (isOpen) {
        setCurrentIndex(startIndex)
        setOffsetY(0)
    }
  }, [isOpen, startIndex])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  // --- Desktop Mouse Pan Logic ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const containerHeight = containerRect.height
    const imageHeight = imgRef.current.clientHeight

    // Only pan if image is taller than container
    if (imageHeight <= containerHeight) {
      setOffsetY(0)
      return
    }

    // Calculate mouse position relative to container
    const relativeY = e.clientY - containerRect.top
    const clampedY = Math.max(0, Math.min(relativeY, containerHeight))
    const percentageY = clampedY / containerHeight

    // Calculate scroll offset
    const maxScroll = imageHeight - containerHeight
    const newOffset = -(maxScroll * percentageY)

    setOffsetY(newOffset)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setOffsetY(0)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setOffsetY(0)
  }

  return (
    <div className="fixed inset-0 z-200 bg-black/95 md:bg-black/90 flex flex-col md:items-center md:justify-center md:p-8">

      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 z-210 p-2 text-white bg-black/20 backdrop-blur-sm rounded-full"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* --- Mobile View (Simple Carousel) --- */}
      <div className="md:hidden flex-1 relative w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex].image_url}
          alt="Zoom view"
          className="w-full h-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
               {images.map((_, i) => (<div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`} />))}
            </div>
          </>
        )}
      </div>

      {/* --- Desktop View (Centered Modal) --- */}
      <div className="hidden md:block relative w-full max-w-275 h-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">

        {/* Desktop Close Button */}
        <button
            onClick={onClose}
            className="absolute top-4 right-4 z-220 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Pan Container */}
        <div
            ref={containerRef}
            className="w-full h-full relative overflow-hidden cursor-crosshair bg-white"
            onMouseMove={handleMouseMove}
            onClick={handleNext}
        >
            <div
                className="absolute inset-x-0 top-0 transition-transform duration-75 ease-out will-change-transform"
                style={{ transform: `translateY(${offsetY}px)` }}
            >
                <img
                    ref={imgRef}
                    src={images[currentIndex].image_url}
                    alt="Zoom Detail"
                    className="w-full h-auto mx-auto object-contain"
                />
            </div>

            {images.length > 1 && (
            <>
                <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-100 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-800 shadow-sm hover:shadow-md transition-all z-20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-100 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-800 shadow-sm hover:shadow-md transition-all z-20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
            </>
            )}

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-sm flex gap-2 z-20" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
                <button key={i} onClick={() => { setCurrentIndex(i); setOffsetY(0); }} className={`w-10 h-14 rounded-sm overflow-hidden border-2 transition-all ${i === currentIndex ? 'border-emerald-600' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                <img src={img.image_url} className="w-full h-full object-cover" alt="" />
                </button>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}