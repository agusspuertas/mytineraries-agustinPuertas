import React, { useState } from 'react'
import Carousel from './Carrusel'
import { Link as LinkRouter } from 'react-router-dom'
function Home() {
    return (
        <main className='min-h-screen bg-[#383D42] flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full m-4 md:m-0 justify-around items-center'>


                {/* Hero */}
                <div className='shadow-xl h-full  rounded-3xl overflow-hidden border-black md:m-10 p-1 bg-hero_image bg-cover bg-center bg-no-repeat w-full md:h-3/6 flex justify-center '>
                    <div className='flex flex-col'>
                        <h1 className='text-gray-400 text-xl font-bold text-center'>MyTineraries</h1>
                        <p className='text-center text-xs md:text-sm font-bold p-1'>Find your perfect trip, designed by insiders who know and love their cities.</p>
                        <button className="self-center text-xs bg-slate-300 hover:bg-stone-200 border border-slate-400 text-black font-bold w-16 p-1 rounded-full">
                           <LinkRouter to={'/cities'} >Let's Go!</LinkRouter>
                        </button>
                    </div>
                </div>


                {/* Carrusel */}

                    <div>
                    <Carousel/>
                    </div>
            </div>
        </main>
    )
}

export default Home



