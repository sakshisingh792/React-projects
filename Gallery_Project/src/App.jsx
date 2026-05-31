import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card'
import Next from './components/Button/Next'
import Prev from './components/Button/Prev'

const App = () => {
  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)

  const getData= async ()=>{
    const response=  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setuserData(response.data)
    console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData=<h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2  translate-x-1/2 translate-y-1/2 font-semibold'>"Loading..."</h3>

  if (userData.length>0){
    printUserData=userData.map(function(elem,idx)
    {
      return(
        
          <Card key={idx} elem={elem} idx={idx}/>
        
      
       ) 
    }
  )
}
  return (
    <div className='bg-[#412D15] overflow-auto h-screen p-4 text-white'>
      
       <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5'>
        {printUserData}
       </div>

       <div className='flex justify-center items-center p-4  gap-6'>

        {/* PREV BUTTON */}
        <Prev index={index}
              setindex={setindex}
              setuserData={setuserData}
        />

       
        <h3>Page {index}</h3>

        {/* Next button */}
        <Next index={index}
              setuserData={setuserData}
              setindex={setindex}/>
       
       </div>
    </div>
  )
}

export default App