import React, { useState } from 'react'

import { X } from 'lucide-react';



const App = () => {
  const [title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [Task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...Task];
    
    copyTask.push({title,Details})
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const DeleteNote=(idx)=>{
    const copyTask=[...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)

  }
  return (
    <div className='h-screen bg-black  lg:flex text-white '>
      



      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }} action="" className=' flex lg:w-1/2  gap-4 justify-between  items-start  flex-col p-10 '>

          <h1 className='text-3xl font-bold'>Add Notes </h1>

          {/* HEADING INPUT  */}
          <input 
              type="text"  
              placeholder='Enter Notes Heading'
              className='px-5 w-full py-2 border-2 rounded outline-none font-medium' 
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
          />

          {/* DETAIL INPUT     */}
          <textarea
            type="text" 
              placeholder='Write Details'
              className='px-5 w-full py-2 h-32 border-2 rounded outline-none font-medium'
              value={Details}
              onChange={(e)=>{
                setDetails(e.target.value)

              }}
          />
          <button 
              className='bg-white text-black px-5  w-full py-2 rounded outline-none font-medium active:scale-95'>
                Add Details
          </button>
        

       
        
      </form>

      <div className='p-10  lg:w-1/2 lg:border-l-2'>
       <h1 className='text-3xl font-bold'>Recent Notes </h1>

       
        <div className='gap-5 flex  items-start justify-start flex-wrap mt-5 h-[90%] overflow-auto '>
         {Task.map(function(e,idx){

          return <div key={idx}className=' relative flex justify-between flex-col items-start h-52 w-40 rounded-2xl  pt-9 tb-4 py-8 px-4 text-black bg-[url("https://tse3.mm.bing.net/th/id/OIP.wJ7-FXqOEHeZcRD1QeYbSAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")]  bg-cover'>
            
            <div>
              <h3 className='leading-tight text-lg font-bold'>{e.title}</h3>
              <p className='mt-2 leading-tight font-semibold text-xs text-gray-500'>{e.Details}</p>
            </div>
            <button  onclick ={()=>{
              DeleteNote(idx)
            }}className='w-full cursor-pointer active: scale-95 bg-red-500 text-white py-1 text-xs rounded text-bold' >Delete Note</button>
          </div>
         })}
         </div>
      </div>

    </div>
    
  )
}

export default App