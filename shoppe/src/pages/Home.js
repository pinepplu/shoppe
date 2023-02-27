import React from 'react'
import {PRODUCTS} from '../components/products/Products'
import Product from '../components/products/ProductDisplay'

function Home() {
  return (
    <>
    <section className='products'>
      {PRODUCTS.map((product) => (
        <Product data={product}/>
      ))}
    </section>
    </>
  )
}

export default Home