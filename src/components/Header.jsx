import React from 'react'
function Header() {
  return (

    <div className="navbar h-20 bg-gray-300 flex justify-center sm:justify-between ">


    {/* Menu */}
      <div className='menu hidden md:block'>
        <a className='m-3 text-lg btn-ghost rounded-lg p-1' href="#">Home</a>
        <a className='m-3 text-lg btn-ghost rounded-lg p-1' href="#">Cities</a>
      </div>


    {/* Hamburguesa */}
      
        <div className="dropdown md:hidden block">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Cities</a></li>
          </ul>
        </div>
      


    {/* Titulo */}
      <div className=''>
        <a className="font-amatica font-bold btn btn-ghost normal-case text-5xl">MyTineraries</a>
      </div>


      {/* Login Logo */}
      <div className='overflow-hidden'>
        <img className=' hidden md:block w-24' src="/Header_Img/LogoSinBg.png" alt="Logo App" />
        <div className='avatar w-8 sm:w-10 mx-2 btn-ghost rounded-lg p-1'>
          <img src="/Header_Img/UserLogo.png" alt="user logo" />
        </div>
      </div>
      
    </div>
  )
}

export default Header

