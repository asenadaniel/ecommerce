import React, { useEffect, useState } from 'react'
import { cartImg } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from '../redux/cartReducer'


function Menu() {

  const [open, setOpen] = useState(false)
  const productData = useSelector((state) => state.cart.productData)
  const userInfo = useSelector((state) => state.cart.userInfo)
  const auth = getAuth()
  const dispatch = useDispatch()

  const googleSignOut = () => {
    signOut(auth).then(() => {

      dispatch(removeUser())
    })
      .catch((error) => {
        console.log(error)
      })
  }

  const [theme, setTheme] = useState('light')
  const element = document.documentElement

  const options = [
    {
      icons: 'sunny',
      text: 'light'
    },
    {
      icons: 'moon',
      text: 'dark'
    }
  ]

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break;
      default:
        break;
    }
  }, [theme])



  return (
    <div className='flex items-center gap-3'>
      {userInfo && <Link to='/'>
        <li onClick={googleSignOut} className='text-base  dark:text-gray-100 text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>Logout</li>
      </Link>}
      <Link to='/login'>
        {
          userInfo ? <img className='w-8 h-8 rounded-full' src={
            userInfo ? userInfo.image : 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          } alt="userlogo" /> : <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 dark:text-gray-100  decoration-[1px] cursor-pointer duration-300'>Login</li>
        }
      </Link>
      <Link to='/cart'>
        <div className='relative '>
          <img src={cartImg} alt="cart" className='w-6' />
          <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
        </div>
      </Link>
      {!open ? (<img
        src="/menu.png"
        alt="open"
        className='dark:bg-white w=[40px] h-[40px]'
        onClick={() => setOpen(true)}
      />
      ) : (
        <img
          src="/close.png"
          alt="close"
          className='dark:bg-white w=[40px] h-[40px]'
          onClick={() => setOpen(false)}
        />)}

      {open && <div className=' bg-slate-300 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 z-20'>

        <ul className='flex items-center gap-8  flex-col'>
          <div className=' bg-black text-white static top-[37px] left-[500px] duration-100 flex justify-center items-center  rounded dark:bg-slate-800'>
            {
              options?.map(opt => (
                <button
                  key={opt.text}
                  onClick={() => setTheme(opt.text)}
                  className={`w-10 h-10 justify-center items-center flex  leading-9 text-xl rounded-full m-l  ${theme === opt.text && 'text-sky-600'}`}
                >
                  <ion-icon name={opt.icons}></ion-icon>
                </button>
              ))
            }
          </div>
          <Link to='/' onClick={() => setOpen(false)}>
            <li className=' text-4xl text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>Home</li>
          </Link>
          <Link to='/' onClick={() => setOpen(false)}>
            <li className='text-4xl text-black font-bold hover:text-orange-900 hover:underline underline-offset-2  decoration-[1px] cursor-pointer duration-300'>shop</li>
          </Link>
        </ul>
      </div>}
    </div>

  )
}

export default Menu
