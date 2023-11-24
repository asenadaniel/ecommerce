import React from 'react'
import { cartImg, logoDark } from '../assets'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const productData = useSelector((state) => state.cart.productData)
  const userInfo = useSelector((state) => state.cart.userInfo)
  console.log(userInfo)


  return (
    <div className='w-full h-[100px] bg-white border-b-[1px] border-b-gray-800 md:h-24 lg:px-20 xl:px-40 font-titleFont px-5 sticky top-0 z-20'>
      <div className=' max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to='/'>
          <div>
            <h1 className=' text-black font-bold cursor-pointer'>ASNDANIEL</h1>
          </div>
        </Link>
        <div className='hidden md:flex items-center gap-8 '>
          <ul className=' hidden md:flex items-center gap-8 '>
            <Link to='/'>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>Home</li>
            </Link>
            <Link to='/'>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>shop</li>
            </Link>
          </ul>
          <Link to='/cart'>
            <div className='relative '>
              <img src={cartImg} alt="cart" className='w-6' />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold '>{productData.length}</span>
            </div>
          </Link>
          <Link to='/login'>
            {
              userInfo ?
                <img className='w-8 h-8 rounded-full' src={
                  userInfo ? userInfo.image : 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                } alt="userlogo" /> : <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>Login</li>}
          </Link>
          {
            userInfo && <p className='text-base font-titleFont font-semibold'>{userInfo.name}</p>
          }
        </div>
        <div className='md:hidden'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header
