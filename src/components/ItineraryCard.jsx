import React from 'react'
import { useState } from 'react';



function ItineraryCard({nombre, nombreUsuario, usuarioFoto, duracion, precio, likes, hashtags, comentarios  }) {
  const [viewMore, setViewMore] = useState(false);
  const handleShowViewMore = () => {
      setViewMore(!viewMore);
  }

  return (
    <section className='flex justify-center items-center '>
    <div className='w-2/6 h-56 flex flex-col justify-center items-center mb-10 bg-gray-200 shadow-xl shadow-gray-600 rounded-2xl'>
        <article className='w-full h-full'>
            <div className='flex justify-center px-1 pt-1' >
                <div className=' w-full h-12'>
                  <div className='flex justify-between'>
                    <div>
                    <h1 className='text-xl font-bold'>{nombre}</h1>
                    <h1 className=' font-light'>By {nombreUsuario}</h1>
                    </div>
                <div className=' className="w-11 h-11 ml-1 rounded-full overflow-hidden'>
                    <img className='className="w-full h-full object-cover' src={usuarioFoto} alt="" />
                </div>
                  </div>
                    <div className='flex flex-col mt-2'>
                    <h1 className='text-xs font-semibold'>Activity duration {duracion}</h1>
                    </div>
                </div>
            </div>
        </article>

        <article className='w-full h-full'>
          <div className='flex flex-col pt-10'>
            <div className='flex justify-between px-2'>
              <div className='flex '>
              {[...Array(precio)].map((_, index) => (
<img className='w-12 h-12 ' src="https://cdn.icon-icons.com/icons2/651/PNG/512/Icon_Business_Set_00003_A_icon-icons.com_59841.png" alt="" />
                        ))}
                       
              </div>
              <div className='flex flex-col pt-4'>
                <div className='flex justify-end'>
                  <h1 className='text-lg font-light mr-4'>{likes} likes</h1>
                  <h1 className='text-lg font-light '>{comentarios}</h1>
                </div>
                    <h1 className='text-sm text-end font-light m'>{hashtags}</h1>
              </div>
            </div>
          </div>
        </article>
                <button className='bg-gray-300 w-full justify-center rounded-b-2xl' onClick={handleShowViewMore} >View More</button>
    </div>

    {viewMore && (
        <div className='ml-5 w-2/5 h-56 bg-gray-200  shadow-xl shadow-gray-600 rounded-2xl'>
            <h1 className='text-center font-bold text-2xl'> Under Contruction</h1>
        </div>
      )}
  </section>
  )
}

export default ItineraryCard

