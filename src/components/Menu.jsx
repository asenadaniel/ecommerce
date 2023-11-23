import React, { useState } from 'react'
import { cartImg } from '../assets'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Menu() {

  const [open, setOpen] = useState(false)
  const productData = useSelector((state) => state.cart.productData)


  return (
    <div className='flex items-center gap-3'>
      <Link to='/cart'>
        <div className='relative '>
          <img src={cartImg} alt="cart" className='w-6' />
          <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
        </div>
      </Link>
      {!open ? (<img
        src="/menu.png"
        alt="open"
        className=' w=[40px] h-[40px]'
        onClick={() => setOpen(true)}
      />
      ) : (
        <img
          src="/close.png"
          alt="close"
          className='w=[40px] h-[40px]'
          onClick={() => setOpen(false)}
        />)}

      {open && <div className=' bg-slate-300 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 z-20'>
        <ul className='flex items-center gap-8  flex-col'>
          <Link to='/'>
            <li className=' text-4xl text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>Home</li>
          </Link>
          <Link to='/'>
            <li className='text-4xl text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>shop</li>
          </Link>
        </ul>
      </div>}
    </div>

  )
}

export default Menu
