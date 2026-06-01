import React from 'react'

const Prev = ({ index, setIndex }) => {
  return (
    <button 
      onClick={() => {
        if (index > 1) {
          setIndex(index - 1)
        }
      }}
      disabled={index <= 1} // Disables the button visually if on page 1
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        index <= 1 
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
          : 'bg-amber-700 hover:bg-amber-600'
      }`}
    >
      Prev
    </button>
  )
}

export default Prev