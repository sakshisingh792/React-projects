import React from 'react'

const Card = (props) => {
  return (
    <div>
        
        <a href={props.elem.url}
         target="_blank"
         className='break-inside-avoid block'>

          <div className=' overflow-hidden  rounded-2xl mb-3'>

           <img 
          className='w-full rounded-2xl transition-transform duration-300 hover:scale-110'
            src={props.elem.download_url} alt="" />
        
          </div>
        <h2 className='font-bold text-lg  mb-5 '>{props.elem.author}</h2>
        </a>
     
    </div>
  )
}

export default Card