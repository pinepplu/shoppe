import React, { useState } from 'react'
import { PRODUCTS } from '../components/products/Products'
// import Product from '../components/products/ProductDisplay'
import '../styles/Home.css'
import { Plus } from 'phosphor-react'
// import ShoopingCart from '../components/products/ShoopingCart'
// import Cart from './Cart'

function Home() {
  // const [inCart, setInCart] = useState([])
  // const addToCart = (product) => {
  //   const newItem = {
  //     ...product,
  //     count: 1,
  //   }
  //   setInCart([...inCart, newItem])
  // }
  const [cartItems, setCartItems] = useState([])
  return (
    <>
      <div className='home-title'><h1>Products</h1></div>
      {/* <section className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </section> */}
      {/* <ShoopingCart 
        products={inCart}
      /> */}
      {/* <Cart /> */}
      <section className='products'>
          {PRODUCTS.map((product) => (
            <div className='product-items' key={PRODUCTS.id}>
              <div className='item-img'><img src={product.pImage} alt={product.pName} style={{ width: 200, height: 200 }} /></div>
              <div className='item-name'><h4>{product.pName}</h4></div>
              <div className='item-price'><p>Price: ${product.price}</p></div>
              <button className='add-cart-btn'>Add To Cart <Plus size={20} /></button>
            </div>
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