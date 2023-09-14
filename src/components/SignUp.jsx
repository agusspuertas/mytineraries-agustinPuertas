import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as LinkRouter } from "react-router-dom"
import { user_register } from '../store/actions/userAction';


function SignUp() {

  const countries = [
    { value: "Argentina" },
    { value: "Brasil" },
    { value: "Colombia" },
    { value: "Chile" },
    { value: "Canadá" },
    { value: "Estados Unidos" },
    { value: "Bolivia" },
    { value: "México" },
    { value: "Paraguay" },
    { value: "Jamaica" },
    { value: "Ecuador" },
    { value: "Venezuela" },
    { value: "Uruguay" },
    { value: "Perú" },
  ];
  const pais = useRef();

  const dispatch = useDispatch();

  const store = useSelector(store => store.userReducer)
  //  console.log('Viene del store',store)

  const [formData, setFormData]=useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    foto: '',
    pais: ''
})

const handleInput = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  })
}
// console.log(formData)

const handleSignUp = async (event) => {
  event.preventDefault();

  try {
    dispatch(user_register({
      data:formData
    }))
  } catch (error) {
      console.log(error)
  }
}

  return (
    <section className='pt-32 pb-20 min-h-screen flex bg-[#383D42]'>
      <article className='m-auto bg-[#AC7EC9] p-10 rounded-xl'>
        <div className='flex flex-col'>
          <p className='text-6xl text-center font-amatica font-bold p-1'>MyTinerary</p>
          <p className='text-center text-3xl'>Sign in to your account</p>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignUp } action="" className="space-y-6">

              {/* NOMBRE */}
              <div>
                <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInput}
                    type="name"
                    name="nombre"
                    placeholder="Enter name"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* APELLIDO */}
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInput}
                    type="lastname"
                    name="apellido"
                    placeholder="Enter lastname"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInput}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


                {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>

                </div>
                <div className="mt-2">
                  <input
                    onChange={handleInput}
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


                 {/* FOTO */}
                 <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                Profile photo url
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleInput}
                    type="url"
                    name="foto"
                    placeholder="Enter photo url"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



                      {/* PAIS */}
                      <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                Country
                </label>
                <div className="mt-2">
                <select ref={pais}  className="form-select">
              {countries.map((pais) => (
                <option key={pais.value}>{pais.value}</option>
              ))}
            </select>
                </div>
              </div>
              


              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <article className="mt-10 text-center text-md text-gray-700">
            <p>Do you already have an account?</p>  
              <LinkRouter to={'/signin'} >
                <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Log In
                </p>
              </LinkRouter>
            </article>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SignUp