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

    <main className='flex flex-col min-h-screen my-10'>

    <section className=' mt-10 flex justify-center items-start mb-10 '>

      <article className='flex shadow-xl shadow-gray-600 rounded-r-2xl rounded-l-lg'>
        <img src={city.imagen} alt="img" className='h-[60vh] w-[40vw] object-cover rounded-l-lg' />
        <div className='w-80 flex flex-col rounded-r-2xl bg-gray-300 justify-center items-center '>
          <div  className='shadow-md rounded-xl mx-5 py-2  shadow-neutral-400'>
            <h2 className='text-4xl text-center font-bold'>{city.nombre}</h2>
            <h3 className='text-4xl text-center font-light'>{city.pais}</h3>
            <div className='mt-10 mx-4  p-3'>
              <p className="mb-3 font-semibold text-sm dark:text-gray-400">{city.descripcion}</p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section className='flex justify-center items-center '>
      <div className='w-2/6 h-56 justify-center items-center mb-10 bg-gray-200 shadow-xl shadow-gray-600 rounded-2xl'>
        
      </div>

    </section>

    </main>

  )
}

export default Detail



