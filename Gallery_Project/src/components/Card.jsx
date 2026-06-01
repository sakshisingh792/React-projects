import React, { useState } from 'react'

const Card = ({ elem, isFavorited, onToggleFavorite, onOpenModal }) => {
  const [loaded, setLoaded] = useState(false)

  const handleHeartClick = (e) => {
    e.stopPropagation() // Crucial: prevents the card click from opening the modal
    onToggleFavorite(elem)
  }

  return (
    <div 
      onClick={() => onOpenModal(elem)} // Opens the modal on click
      className="break-inside-avoid block bg-black/10 rounded-2xl p-2 cursor-pointer border border-transparent hover:border-amber-800/40 transition-all duration-200"
    > 
      <div className='overflow-hidden rounded-2xl mb-3 relative max-h-[400px]'>
        
        <img 
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full rounded-2xl transition-transform duration-300 hover:scale-110 object-cover
                     ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
          src={elem.download_url} 
          alt="" 
        />

        {/* Heart Button Overlay */}
        <button 
          onClick={handleHeartClick}
          className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={isFavorited ? "currentColor" : "none"} 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`w-6 h-6 transition-colors ${isFavorited ? "text-red-500" : "text-white"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>

      </div>
      <h2 className='font-bold text-lg mb-2 px-1 text-gray-200 group-hover:text-white'>{elem.author}</h2>
    </div>
  )
}

export default Card