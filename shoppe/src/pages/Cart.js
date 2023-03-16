import React, { useState } from 'react'
import ShoopingCart from '../components/products/ShoopingCart'

function Cart() {
  const [inCart, setInCart] = useState([])
  const addToCart = (product) => {
    const newItem = {
      ...product,
      count: 1,
    }
    setInCart([...inCart, newItem])
  }
  return (
    <div>
      <ShoopingCart 
      products={inCart}
      />
    </div>
  )
}

export default Cart