import React, { useEffect, useState, useRef } from 'react'
import Card from './Card.jsx'
import axios from 'axios'
import NotFound from './NotFound'


function Cities() {
  const [cities, setCities] = useState()
  const inputSearch = useRef()


  useEffect(() => {
    axios.get('http://localhost:7000/api/cities?nombre=')
      .then(response => setCities(response.data.cities))
      .catch(err => console.log(err))
  }, []);

  const handleSearch = async () => {

    const name = inputSearch.current.value

    try {
      const response = await axios.get(`http://localhost:7000/api/cities?nombre=${name}`)
      setCities(response.data.cities)

    } catch (error) {
      if(error.response.data.status === 404){
        setCities([])
      }else {
        console.log(error)
      }
    }
  }

  return (

    <section className='flex flex-col justify-center items-center min-h-screen'>
      <div className='w-72 m-4 sm:w-80'>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input ref={inputSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cities..." required />
          <button onClick={handleSearch} type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>

      <article className=' grid grid-cols-1  md:grid-cols-2'> 
        { cities?.length > 0 ?
          cities?.map(city => {
            return (
              <div key={city._id} className='m-4 mb-8'>
                <Card id={city._id}  nombre={city.nombre} pais={city.pais} imagen={city.imagen} />
              </div>
            )
          })
          : <NotFound />
        }
      </article>
    </section>


  )
}

export default Cities