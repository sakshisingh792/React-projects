import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'
import Next from './components/Button/Next'
import Prev from './components/Button/Prev'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [activePhoto, setActivePhoto] = useState(null)
  
  // 1. New state to track what the user types in the search bar
  const [searchQuery, setSearchQuery] = useState("")

  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('photo_favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  useEffect(() => {
    localStorage.setItem('photo_favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (photo) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorited = prevFavorites.some(fav => fav.id === photo.id)
      if (isAlreadyFavorited) {
        return prevFavorites.filter(fav => fav.id !== photo.id)
      } else {
        return [...prevFavorites, photo]
      }
    })
  }

  // 2. DERIVED STATE: Filter the existing userData array based on searchQuery
  // We lowercase everything so the search isn't case-sensitive
  const filteredUserData = userData.filter((elem) => 
    elem.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='bg-[#412D15] overflow-auto h-screen p-4 text-white relative'>
      
      {/* Top Header Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mb-6 bg-black/20 p-4 rounded-2xl border border-amber-900/20">
        
        {/* Favorites Counter */}
        <span className="bg-red-500 px-4 py-2 rounded-full font-bold text-sm shadow-md whitespace-nowrap">
          ❤️ Favorites: {favorites.length}
        </span>

        {/* 3. Search Input Field (Controlled Component) */}
        <div className="w-full sm:max-w-md relative">
          <input 
            type="text" 
            placeholder="Search by photographer name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Updates state on every keystroke
            className="w-full bg-[#2a1c0c] border border-amber-800/40 px-4 py-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid Layout - Mapping over our FILTERED list instead of raw userData */}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 max-w-6xl mx-auto'>
        {filteredUserData.length > 0 ? (
          filteredUserData.map((elem) => {
            const isFavorited = favorites.some(fav => fav.id === elem.id)
            return (
              <Card 
                key={elem.id} 
                elem={elem} 
                isFavorited={isFavorited} 
                onToggleFavorite={toggleFavorite}
                onOpenModal={setActivePhoto}
              />
            )
          })
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400">
            No photographers found matching "{searchQuery}" on this page.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center items-center p-4 gap-6 mt-6'>
        <Prev index={index} setIndex={setIndex} />
        <h3>Page {index}</h3>
        <Next index={index} setIndex={setIndex} />
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-[#2a1c0c] p-4 rounded-2xl max-w-2xl w-full border border-amber-900/40 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white bg-black/40 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <img 
              src={activePhoto.download_url} 
              alt={activePhoto.author} 
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-amber-400 font-medium">Photographer</p>
                <h3 className="text-xl font-bold">{activePhoto.author}</h3>
              </div>
              <a 
                href={activePhoto.url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                View Original Source
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App