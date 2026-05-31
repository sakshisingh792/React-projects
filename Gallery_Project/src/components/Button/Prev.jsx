import React from 'react'

const Prev = ({index,setindex,setuserData}) => {
  return (
    <div>
         <button className='bg-[#E1DCC9] text-black rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-bold'
        onClick={()=>{
          if (index>1){
            setuserData([])
            setindex(index-1)
            
          }
        }}
        >
          Prev

        </button>

    </div>
  )
}

export default Prev