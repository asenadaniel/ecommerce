import React from 'react'
import ProductsCard from './ProductsCard'

function Products({ products }) {
  return (
    <div className=' py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='md:text-1xl bg-black text-white py-2 w-80 text-center '>Shopping day in, day out.</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center text-xs'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quasi numquam voluptate delectus? Odit ratione, dignissimos et aliquid minima necessitatibus.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-10'>
        {products.map(item => {
          return (
            <ProductsCard key={item._id} product={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Products
