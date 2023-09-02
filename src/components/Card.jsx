import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

function Card({nombre, pais, imagen, id}) {
  return (
    <div className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-xl shadow-gray-400">
  <div className=''>
    <div className='grid grid-cols-3 my-2'>
       <div className='flex col-span-2'>
    <div className="font-bold text-xl mx-2">{nombre}</div>
    <div className="text-xl font-light"> {pais}</div>
       </div>
      
  <div className='justify-self-end mr-4'>
   <LinkRouter to={`/cities/${id}`} ><button className='bg-gray-300 rounded-md p-1'>Details</button> </LinkRouter>
  </div>
    </div>
    <div>
        <img className=' w-full h-auto md:h-[36vh] ' src={imagen} alt="Img" />
       
    </div>
  </div>

</div>
  )
}

export default Card