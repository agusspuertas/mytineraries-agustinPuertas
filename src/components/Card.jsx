import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

function Card({nombre, pais, imagen, id}) {
  return (
    <div className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-xl ">{nombre}</div>
    <div className="font-bold text-xl ">{pais}</div>
    <div className='mt-2'>
        <img className=' w-80 h-auto md:h-[35vh] ' src={imagen} alt="Img" />
       
    </div>
  </div>

  <div className="px-6 pb-2">
   <LinkRouter to={`/cities/${id}`} > <button className='bg-gray-300 rounded-md p-1'>Details</button> </LinkRouter>
  </div>
</div>
  )
}

export default Card