import React from 'react'
import { githubLogo, googleLogo } from '../assets'

function Login() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div className=' text-base w-60 h-12 tracking-wide border-[1px] border-gray-500 rounded-md flex items-center justify-center gap-2 cursor-pointer'>
          <img className='w-8' src={githubLogo} alt="github" />
          <span>Sign in with Github</span>
        </div>
      </div>
      <div className='w-full flex items-center justify-center gap-10'>
        <div className=' text-base w-60 h-12 tracking-wide border-[1px] border-gray-500 rounded-md flex items-center justify-center gap-2 cursor-pointer'>
          <img className='w-8' src={googleLogo} alt="github" />
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  )
}

export default Login
