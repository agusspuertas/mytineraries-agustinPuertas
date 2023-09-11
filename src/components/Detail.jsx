import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItineraryCard from '../components/ItineraryCard'
import { useSelector, useDispatch } from 'react-redux'
import { getCity } from '../store/actions/cityActions'
import { getItineraries } from '../store/actions/itineraryActions'



function Detail() {
  const dispatch = useDispatch()
  const city = useSelector ((store)=>store.cityReducer.city)
  const itineraries=useSelector((store)=>store.itineraryReducer.itineraries)
  const { id } = useParams()

    useEffect(()=> {
      dispatch(getCity({
        id
      }))
      
      dispatch(getItineraries(id))
      }, [])

  return (

    <main className='flex flex-col  bg-[#DFE2DF]'>

      <section className=' pt-10 flex justify-center min-h-screen items-center pb-10 mb-10 '>

        <article className='flex shadow-xl shadow-gray-600 rounded-r-2xl rounded-l-lg'>
          <img src={city.imagen} alt="img" className='h-[60vh] w-[40vw] object-cover rounded-l-lg' />
          <div className='w-80 flex flex-col rounded-r-2xl bg-gray-300 justify-center items-center '>
            <div className='shadow-md rounded-xl mx-5 py-2  shadow-neutral-400'>
              <h2 className='text-4xl text-center font-bold'>{city.nombre}</h2>
              <h3 className='text-4xl text-center font-light'>{city.pais}</h3>
              <div className='mt-10 mx-4  p-3'>
                <p className="mb-3 font-semibold text-sm dark:text-gray-400">{city.descripcion}</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className='bg-[#383D42] content-end py-10'>
        {
          itineraries?.length > 0 ?
            itineraries?.map((itinerary) => {
              return (
                <ItineraryCard key={itinerary._id} nombre={itinerary.nombre} nombreUsuario={itinerary.nombreUsuario} usuarioFoto={itinerary.usuarioFoto} duracion={itinerary.duracion} precio={itinerary.precio} likes={itinerary.likes} hashtags={itinerary.hashtags} comentarios={itinerary.comentarios}/>
              )
            })
            : <h1 className='text-4xl font-bold text-center'>No itineraries found for this city</h1>
        }
      </section>

    </main>

  )
}

export default Detail



