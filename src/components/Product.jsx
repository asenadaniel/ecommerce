import { Star } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../redux/cartReducer'
import { ToastContainer, toast } from 'react-toastify';


function Product() {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()
  useEffect(() => {
    setDetails(location.state.item)
  }, [])
  return (
    <div>
      <div className=' flex-col justify-center md:flex-row items-center md:max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className=' md:w-[40%] relative'>
          <img src={details.image} alt="image" className='w-full h-[550px]  object-cover' />
          <div className='text-center'>
            {details.isNew && <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>}
          </div>
        </div>
        <div className=' w-[60%] flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-4xl font-semibold'>{details.title}</h2>
            <div className='flex items-center gap-5 mt-4'>
              <p className='line-through text-gray-500'>₦{details.oldPrice}</p>
              <p className=' text-2xl font-semibold'>₦{details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className='text-xs text-gray-500'>(5 customer review)</p>
          </div>
          <p className='text-base text-gray-500 mt-3'>{details.description}</p>
          <div className=' flex-col md:flex-row  md:flex md:gap-4'>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 '>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
              </div>
            </div>
            <button onClick={() =>
              dispatch(
                addToCart({
                  _id: details._id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  quantity: quantity,
                  description: details.description
                })
              )
              & toast.success(`${details.title} added to cart`)
            }
              className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
          </div>
          <p className='text-base text-gray-500'> Category:  <span className='font-medium capitalize'>{details.category}</span></p>
        </div>
      </div>
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

export default Product
