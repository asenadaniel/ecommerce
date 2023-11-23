import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { ToastContainer, toast } from 'react-toastify'

function Cart() {

  const productData = useSelector((state) => state.cart.productData)
  const userInfo = useSelector((state) => state.cart.userInfo)

  const [total, setTotal] = useState('')
  const [pay, setPay] = useState(false)

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity
      return price
    })
    setTotal(price.toFixed(2))
  }, [productData])

  const check = () => {
    if (userInfo) {
      setPay(true)
    } else {
      toast.error('Please Sign In to Place Order')
    }
  }

  return (
    <div>
      <img
        src="/cart.jpg"
        alt="cart"
        className='  w-full h-60 object-cover'
      />
      {productData.length > 0 ? <div className=' flex-col md:flex-row md:max-w-screen-xl mx-auto py-20 flex items-center '>
        <CartItem />
        <div className=' w-1/3 bg-[#fafafa] py-9 px-4 md:sticky md:top-0 md:bottom-[100px]'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className=' text-2xl font-medium'>Order summary</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal <span className='font-titleFont font-bold text-lg'>₦{total}</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping <span className=' font-semibold'>FREE</span>
            </p>
          </div>
          <p className=' font-titleFont font-semibold flex justify-between mt-6'>Total <span className='text-xl font-bold'>₦{total}</span></p>
          <button onClick={check} className=' text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-900 duration-200'>Place order</button>
        </div>
      </div> :
        <div className='flex justify-center items-center flex-col py-9 '>
          <p className=' text-gray-600'>Your cart is currently empty. Please continue shopping.</p>
          <Link to='/'>
            <button className='mt-4 ml-7 flex items-center gap-1 text-gray-600 hover:text-black duration-200'>
              <span><ArrowBack />  Return To Shop</span>
            </button>
          </Link>
        </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Cart
