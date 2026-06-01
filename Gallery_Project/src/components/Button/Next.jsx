import React from 'react'

const Next = ({ index, setIndex }) => {
  return (
    <button 
      onClick={() => 
        
        setIndex(index + 1)}
      className='bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-lg font-semibold transition-colors'
    >
      Next
    </button>
  )
}

export default Next