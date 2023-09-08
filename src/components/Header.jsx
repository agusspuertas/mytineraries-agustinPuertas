import React from 'react'
import { Link as LinkRouter } from "react-router-dom"

function Header() {
  return (

    <section className="navbar h-20 bg-[#383D42]  grid grid-cols-4">


    {/* Menu */}
      <div className='menu hidden md:block'>
        <ul className='flex'>
        <LinkRouter className='m-3 text-lg hover:bg-[#A82424] rounded-lg p-1 text-[#FAF5F0]' to={'/'}><li>Home</li></LinkRouter>
        <LinkRouter className='m-3 text-lg hover:bg-[#A82424] rounded-lg p-1 text-[#FAF5F0]' to={'/cities'} ><li>Cities</li></LinkRouter>
        </ul>
      </div>


    {/* Hamburguesa */}
      
        <div className="dropdown md:hidden block">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <LinkRouter to={'/'}><li>Home</li></LinkRouter>
           <LinkRouter to={'/cities'}><li>Cities</li></LinkRouter>
          </ul>
        </div>
      


    {/* Titulo */}
      <div className='col-span-2 justify-center'>
        <span className="font-amatica text-center font-bold btn btn-ghost normal-case text-5xl hover:bg-[#A82424] text-[#FAF5F0]">MyTineraries</span>
      </div>


      {/* Login Logo */}
      <div className='overflow-hidden justify-end'>
        <div className='avatar w-8 sm:w-10 mx-2 btn-ghost rounded-lg p-1 hover:bg-[#A82424]'>
          <img src="/Header_Img/UserLogo.png" alt="user logo" />
        </div>
      </div>
      
    </section>
  )
}

export default Header

