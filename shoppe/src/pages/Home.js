import React, { useState } from 'react'
import { PRODUCTS } from '../components/products/Products'
// import Product from '../components/products/ProductDisplay'
import '../styles/Home.css'
import { Plus } from 'phosphor-react'
// import ShoopingCart from '../components/products/ShoopingCart'
// import Cart from './Cart'

function Home(props) {

  const { products, addToCart } = props

  return (
    <>
      <div className='home-title'><h1>Products</h1></div>

      {/* <section className='mens'>
          <Link to='/mens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Menswear</h3></Link>
          <section className='products-section'>
            {mproducts.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price.toFixed(2)}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section> */}

        {/* <section className='womens'>
          <Link to='/womens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Womenswear</h3></Link>
          <section className='products-section'>
            {wproducts.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price.toFixed(2)}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section> */}

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