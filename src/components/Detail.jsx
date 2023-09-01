import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function Detail() {

  const [city, setCity] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:7000/api/cities/${id}`)
      .then(response => setCity(response.data.city))
      .catch(err => console.log(err))
  }, [id]);


  return (

    <section className='min-h-screen'>
      <div className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl ">{city.nombre}</div>
          <div className="font-bold text-xl ">{city.pais}</div>
          <div className='mt-2'>
            <img className=' w-80 h-auto md:h-[35vh] ' src={city.imagen} alt="Img" />
          </div>
        </div>

        <div className="px-6 pb-2">
           <button  id='viewmore' className='bg-gray-300 rounded-md p-1'>View More</button> 
        </div>
      </div>
    </section>
    
  )
}

export default Detail

