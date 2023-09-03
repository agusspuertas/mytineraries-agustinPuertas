import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function ItineraryCard() {

    // const [itineraries, setItineraries] = useState ({})
    // console.log(itineraries)
    

    // useEffect(() => {
    //     axios.get('http://localhost:7000/api/itineraries?=')
    //     .then((response) => {
    //         setItineraries(response.data.itineraries)
    //     })
    // },[])

  return (
    <section className='flex justify-center items-center '>
    <div className='w-2/6 h-56 justify-center items-center mb-10 bg-gray-200 shadow-xl shadow-gray-600 rounded-2xl'>
        <h1></h1>
    </div>

  </section>
  )
}

export default ItineraryCard