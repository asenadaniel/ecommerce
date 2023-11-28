import React, { Suspense, lazy, useEffect, useState } from 'react'
import Banner from '../components/Banner'

import { useLoaderData } from 'react-router-dom'
const Products = lazy(() => import('../components/Products'))

function Home() {
  const [products, setProducts] = useState([])
  const data = useLoaderData()
  useEffect(() => {
    setProducts(data.data)
  }, [data])

  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading....</div>}>
        <Products products={products} />
      </Suspense>

    </div>
  )
}

export default Home
