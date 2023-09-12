import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCities, searchCity } from '../store/actions/cityActions'
import Card from './Card.jsx'
import NotFound from './NotFound'


function Cities() {
  const cities = useSelector((store) => store.cityReducer.cities)
  const dispatch = useDispatch()
  const inputSearch = useRef()

  useEffect(() => {
    dispatch(getCities())
  }, []);

  const handleSearch = async () => {
    dispatch(searchCity({
      nombre: inputSearch.current.value
    }))
  }

  const handleResetCities = () => {
    if (inputSearch.current.value === "") {
      dispatch(getCities());
    }
  }

  return (

    <section className='flex flex-col justify-center pt-24 bg-[#383D42]  items-center min-h-screen'>
      <article className='w-72 m-4 sm:w-96 '>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            onChange={handleResetCities}
            ref={inputSearch}
            type="search" id="default-search" className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cities..." required
          />

          <button onClick={handleSearch} type="submit" className="text-black font-semibold absolute right-2.5 bottom-2.5 bg-[#2659A6]  hover:text-white  focus:ring-4 focus:outline-none rounded-lg text-md px-4 py-2">Search</button>
        </div>
      </article>

      <article className='grid grid-cols-1 md:grid-cols-2'>
        {cities?.length > 0 ?
          cities?.map(city => {
            return (
              <div key={city._id} className='m-4 mb-8'>
                <Card id={city._id} nombre={city.nombre} pais={city.pais} imagen={city.imagen} />
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