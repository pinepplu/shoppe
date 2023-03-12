import React from 'react'
import { PRODUCTS } from '../components/products/Products'
import Product from '../components/products/ProductDisplay'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className='home-title'><h1>Products</h1></div>
      <section className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </section>
      <div className='container'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
    </>
  )
}

export default Home