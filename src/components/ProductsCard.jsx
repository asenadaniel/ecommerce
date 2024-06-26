import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/cartReducer'
import { ToastContainer, toast } from 'react-toastify';

function ProductsCard({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const _id = product.title
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('')
  }
  const rootId = idString(_id)

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product
      }
    })
  }

  return (
    <div className=' group relative'>
      <div onClick={handleDetails} className='w-full h-[280px] cursor-pointer overflow-hidden'>
        <img className='md:w-full  object-cover group-hover:scale-110 duration-500 p-3' src={product.image} alt="productImg" loading='lazy' />
      </div>

      <div className='w-full  dark:border-none px-2 py-4'>
        <div className='flex flex-col gap-2 md:justify-between items-center'>
          <div>
            <h2 className=' font-titleFont text-base font-bold'>{product.title.substring(0, 15)}
            </h2>
          </div>
          <div className=' flex gap-2 relative flex-col  '>
            <div className='text-sm relative w-28 flex  justify-center gap-2'>
              <p className='line-through text-gray-500'>₦{product.oldPrice}</p>
              <p className=' font-semibold'>₦{product.price}</p>
            </div>
            <p onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description
                })
              )
            }
              className=' absolute top-4 left-5 pt-2  font-semibold cursor-pointer'>Add to cart</p>
          </div>
        </div>
        <div className='flex  items-center justify-center pt-8'>
          <p>{product.category}</p>
        </div>
        <div className='absolute bottom-[143px] right-0'>
          {product.isNew && <p className='bg-black text-white font-semibold font-titleFont px-6 py-1  dark:bg-slate-900'>Sale</p>}
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

export default ProductsCard
