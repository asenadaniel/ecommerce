import { Facebook, GitHub, Home, Instagram, Person, Twitter } from '@mui/icons-material'
import React from 'react'


function Footer() {
  return (
    <div className='bg-black  dark:text-gray-100 text-gray-500 py-20 font-titleFont px-10 '>
      <div className='flex flex-col gap-6 items-center justify-center max-w-screen-xl mx-auto md:grid grid-cols-4 '>
        <div className='flex flex-col gap-7'>
          <img src="" alt="" />
          <p className='text-white text-sm tracking-wide text-center'>ASNDANIEL</p>
          <img src='./paymentLogo.png' alt="" className='w-[160px]' />
          <div className='flex gap-5 text-lg text-gray-500'>
            <GitHub className='hover:text-white duration-300 cursor-pointer' />
            <Facebook className='hover:text-white duration-300 cursor-pointer' />
            <Instagram className='hover:text-white duration-300 cursor-pointer' />
            <Twitter className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        <div className='text-base flex flex-col gap-2'>
          <h2 className='text-2xl font-semibold text-white mb-4'>Get to Know Us</h2>
          <p>Email: lorem@gmail.com</p>
          <p>Phone: 08185932647</p>
          <p>Lagos, Nigeria</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Help</h2>
          <p className='flex items-center gap-3  hover:text-white duration-300 cursor-pointer'>
            <Person className=' w-[10px]' />
            <span>Account</span>
          </p>
        </div>
        <div className='flex flex-col justify-center' >
          <input
            className='bg-transparent border px-4 py-2 text-sm' type="text"
            placeholder='email'
          />
          <button className='text-sm border text-white hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
