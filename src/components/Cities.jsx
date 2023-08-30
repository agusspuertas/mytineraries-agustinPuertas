import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'



function Cities() {
  const [cities, setCities] = useState()

  useEffect(() => {
    axios.get('http://localhost:7000/api/cities?nombre=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleInputChange = async (city) => {

    try {
      const response = await axios.get(`http://localhost:7000/api/cities?nombre=${city.target.value}`)
      setCities(response.data.cities)

    } catch (error) {
      console.log(error)
    }


  }

  return (

    <section className='flex flex-col justify-center items-center min-h-screen'>
      <form className='w-80 m-4'>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={handleInputChange} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cities..." required />
        </div>
      </form>

      <article className=' grid grid-cols-1  md:grid-cols-2'> 
        {
          cities?.map(city => {
            return (
              <div key={city._id} className='m-4 mb-8'>
                <Card nombre={city.nombre} pais={city.pais} imagen={city.imagen} />
              </div>
            )
          })
        }
      </article>
    </section>


  )
}

export default Cities