import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

function Card({nombre, pais, imagen, id}) {

  return (
    <div className="max-w-md bg-[#1A3D74] mx-10 rounded overflow-hidden shadow-md shadow-gray-900">
  <div>
    <div className='grid grid-cols-3 my-2'>
       <div className='flex col-span-2'>
    <div className="font-bold text-xl mx-2 text-white">{nombre}</div>
    <div className="text-xl font-light text-white"> {pais}</div>
       </div>
      
  <div className='justify-self-end mr-4'>
   <LinkRouter to={`/cities/${id}`} ><button className='bg-[#F0E1D1] font-semibold text-[#2C3A33] rounded-md p-1 hover:bg-[#EBD7C1]'>Details</button> </LinkRouter>
  </div>
    </div>
    <div>
        <img className=' w-full h-auto md:h-[36vh] object-cover' src={imagen} alt="Img" />
       
    </div>
  </div>

</div>
  )
}

export default Card