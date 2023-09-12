import React, { useState } from 'react'
import Carousel from './Carrusel'
import { Link as LinkRouter } from 'react-router-dom'
function Home() {
    return (
        <main className='min-h-screen bg-[#383D42] flex'>
            <section className='flex flex-col w-full  justify-around items-center pt-24'>

                {/* Hero */}
                <div className='bg-hero_image bg-cover flex bg-fixed bg-bottom min-h-[80vh] min-w-full'>
                    <div className='flex flex-col md: md:mx-auto md:bg-[#383D42] md:w-96 md:h-48 md:rounded-b-full p-2'>
                        <p className='text-center text-black md:text-[#FAF5F0] text-xl font-semibold p-2'>Find your perfect trip, designed by insiders who know and love their cities.</p>
                        <button className="self-center text-xl bg-slate-600 text-white font-bold w-24 p-1 rounded-full hover:text-[#477ED7]">
                           <LinkRouter to={'/cities'} >Let's Go!</LinkRouter>
                        </button>
                    </div>
                </div>

                {/* Carrusel */}

                    <article className='py-16'>
                    <Carousel/>
                    </article>
            </section>
        </main>
    )
}

export default Home



