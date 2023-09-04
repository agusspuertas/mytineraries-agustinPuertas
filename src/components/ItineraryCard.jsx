import React from 'react'


function ItineraryCard({nombre}) {

  return (
    <section className='flex justify-center items-center '>
    <div className='w-2/6 h-56 justify-center items-center mb-10 bg-gray-200 shadow-xl shadow-gray-600 rounded-2xl'>
        <h1>{nombre}</h1>
    </div>

  </section>
  )
}

export default ItineraryCard