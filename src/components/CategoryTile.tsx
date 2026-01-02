import React from 'react'

interface CategoryTileProps {
  name: string
  imageUrl?: string
  onClick?: () => void
}

export const CategoryTile: React.FC<CategoryTileProps> = ({
  name,
  imageUrl,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-xl
        aspect-[4/3]
        cursor-pointer
      "
    >
      {/* Background image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
      )}

      {/* Dark overlay */}
      <div className="
        absolute inset-0
        bg-black/35
        group-hover:bg-black/45
        transition-colors duration-300
      " />

      {/* Text */}
      <div className="
        relative z-10
        flex h-full items-end
        p-4
      ">
        <h3 className="
          text-base
          font-serif
          font-medium
          text-white
          tracking-wide
        ">
          {name}
        </h3>
      </div>
    </button>
  )
}
