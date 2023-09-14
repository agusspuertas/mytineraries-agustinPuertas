import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { user_photo } from '../store/actions/userAction'
import axios from 'axios';

function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch();

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  console.log(formData)

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
     const {data} = await axios.post('http://localhost:7000/api/auth/signin', formData);
     console.log(data)
     localStorage.setItem('token', JSON.stringify(data.response.token))
     localStorage.setItem('user', JSON.stringify(data.response.user))

    } catch (error) {
        console.error
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
            <form onSubmit={handleSignIn } action="" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  onChange={handleInput}
                    type="email"
                    name="email"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // onClick={handleSignIn}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-md text-gray-700">
              Don't have any?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create a free account
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SignIn