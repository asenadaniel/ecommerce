import { ArrowBack, Close, Delete } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, deleteCart, increamentQuantity, resetCart } from '../redux/cartReducer'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function CartItem() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.cart.productData)
  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className=' font-titleFont text-2xl'>shopping cart</h2>
      </div>
      <div>
        {
          productData.map(item => {
            return (
              <div className='flex items-center  justify-end gap-6 mt-6 flex-col' key={item._id}>
                <div className='flex items-center gap-2 '>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-32 h-32 object-cover'
                  />
                  <h2 className='w-52'>{item.title}</h2>
                  <div className=' pr-6'>
                    <p className='w-10'>₦{item.price}</p>
                  </div>
                  <Close onClick={() =>
                    dispatch(
                      deleteCart(item._id))
                    & toast.error(`${item.title} is removed`)
                  } className='text-xl text-gray-700 hover:text-red-700 cursor-pointer duration-300 ' />
                </div>

                <div className="w-52 flex items-center justify-between text-gray-500 gap-16 border p-3  ">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <p className='text-sm'>Quantity</p>
                    <span
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"

                      onClick={() => dispatch(decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description
                      }))}
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"

                      onClick={() => dispatch(increamentQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description
                      }))}
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14 font-bold">₦{item.quantity * item.price}</p>
              </div>

            )
          })
        }
      </div>
      <button className=' bg-red-900 text-white mt-9 ml-8 py-1 px-6 hover:bg-red-950' onClick={() => dispatch(resetCart()) & toast.error('Cart emptied!')}>Reset Cart</button>
      <Link to='/'>
        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-600 hover:text-black duration-200'>
          <span><ArrowBack />  Continue Shopping</span>
        </button>
      </Link>
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

export default CartItem
