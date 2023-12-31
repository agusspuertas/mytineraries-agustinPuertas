import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { user_logout } from '../store/actions/userAction';
import { Link as LinkRouter } from "react-router-dom"


function Header() {

  const user = useSelector(store => store.userReducer.user)
  // console.log(user)
 const defaultPhoto= '/Header_Img/UserLogo.png'

 const dispatch = useDispatch();

 const handleSignOut = () => {
  try {
      dispatch(user_logout())
  } catch (error) {
      console.log(error);
  }
}

  return (

    <section className="navbar h-20 bg-[#383D42] grid grid-cols-4 fixed top-0 z-10 ">


    {/* Menu */}
      <div className='menu hidden md:block'>
        <ul className='flex'>
        <LinkRouter className='m-3 text-xl hover:bg-[#2659A6] rounded-lg p-1 text-[#FAF5F0]' to={'/'}><li>Home</li></LinkRouter>
        <LinkRouter className='m-3 text-xl hover:bg-[#2659A6] rounded-lg p-1 text-[#FAF5F0]' to={'/cities'} ><li>Cities</li></LinkRouter>
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
      <LinkRouter to={'/'}>
        <p className="font-amatica text-center font-bold text-6xl hover:text-[#2659A6] text-[#FAF5F0]">MyTineraries</p>
      </LinkRouter>
      </div>


      {/* Login Logo */}
      <div className='justify-end mr-4 flex'>
        {user ? (
          <div onClick={handleSignOut} className=' mx-2 btn-ghost rounded-lg p-1 hover:bg-[#2659A6] flex'>
            <p className='font-bold mt-1 mr-2'>Logout</p>
            <img className='w-9 h-auto sm:w-9 ' src={user.foto} alt="user logo" />
          </div>
        ) : (
          <LinkRouter to={'/signin'}>
            <div className=' mx-2 btn-ghost rounded-lg p-1 hover:bg-[#2659A6] flex'>
              <p className='font-bold mt-1 mr-2'>Login</p>
              <img className='w-9 h-auto sm:w-9 ' src={defaultPhoto} alt="user logo" />
            </div>
          </LinkRouter>
        )}
      </div>
      
    </section>
  )
}

export default Header

