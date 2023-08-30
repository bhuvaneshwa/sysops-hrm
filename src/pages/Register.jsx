import React from 'react'
import { FaApple, FaFacebook, FaGoogle, FaUser } from 'react-icons/fa'
const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600 '>
    <div className='w-96 p-6 shadow-lg bg-white rounded-xl'>
      <h1 className='flex justify-center items-center text-3xl gap-2 text-center font-semibold text-indigo-800'><FaUser/>Register</h1>
      <hr className='mt-3'/>
      <div className='mt-3'>
        <label for='username' className='block text-base mb-2'>Full Name</label>
        <input type='text'id='username' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Username'/>
      </div>
      <div className='mt-3'>
        <label for='username' className='block text-base mb-2'>Username</label>
        <input type='text'id='username' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Username'/>
      </div>
      <div className='mt-3'>
        <label for='username' className='block text-base mb-2'>Mobile Number</label>
        <input type='text'id='username' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Username'/>
      </div>
      <div className='mt-3'>
        <label for='username' className='block text-base mb-2'>Email</label>
        <input type='text'id='username' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Username'/>
      </div>
      <div className='mt-3'>
        <label for='password' className='block text-base mb-2'>Password</label>
        <input type='password'id='password' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Password'/>
      </div>
      <div className='mt-3'>
        <label for='password' className='block text-base mb-2'>Confirm Password</label>
        <input type='password'id='password' className='border rounded-md border-indigo-800 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-yellow-400' placeholder='Enter the Password'/>
      </div>
      
     
    <div className='mt-5'>
    <a href='/home'>
      <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Submit</button></a>
    </div>
    
     <div>
      <h3 className='text-center mt-2'>Already Have An Account</h3>
      <a href='/'>
      <button className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold mt-3'>Login</button></a>
     </div>

     </div>
    </div>
  )
}

export default Register