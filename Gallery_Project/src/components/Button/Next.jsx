import React from 'react'

const Next = ( {index,setuserData,setindex}) => {
  return (
    <div>

         <button 
        onClick={()=>{
          setuserData([])
          setindex(index+1)
        }}
        className='bg-[#E1DCC9]  text-black rounded  text-sm cursor-pointer active:scale-95 px-4 py-2 font-bold'>
          Next
        </button>

    </div>
  )
}

export default Next