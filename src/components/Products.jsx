import React from 'react'
import ProductsCard from './ProductsCard'

function Products({ products }) {
  return (
    <div className=' py-10 dark:bg-black  dark:text-gray-100 '>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='md:text-1xl dark:text-gray-100  dark:bg-white dark:text-black bg-black text-white py-2 w-80 text-center '>Shopping day in, day out.</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] dark:text-gray-100 text-gray-600 text-center text-xs'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quasi numquam voluptate delectus? Odit ratione, dignissimos et aliquid minima necessitatibus.
        </p>
      </div>
      <div className=' dark:bg-slate-black   max-w-screen-xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-10'>
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
