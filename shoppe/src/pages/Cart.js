import React, { useState } from 'react'

function Cart(props) {

  //data and functions
  const { cartitems, addToCart, removeFromCart, removeItemFromCart } = props;
  //price calculations a(accumulator) c(current item)
  const subtotal = cartitems.reduce((a, c) => a + c.price * c.qty, 0)
  const tax = subtotal * .0852;
  //free shipping for orders over $75 else $10
  const shipping = subtotal > 75 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div className='cart-items'>
      <div className='cart-items-title'>Shooping Cart</div>
      {cartitems.length === 0 && <h4>Shopping Cart is Empty... Add
        Items to Cart</h4>}

      {/* <div className='cart-items-mapping'>
          regular display
          {cartItems.map((item) => (
            <div key={item.id} className='cart-items'>
              <img src={item.image} alt={item.title} className='cart-item-img' />
              <div><h5>{item.title}</h5></div>
              <div className='cart-quantity'>
                Quantity:{' '}
                <button onClick={() => removeFromCart(item)} className='minus-qty'>-</button> */}
                {/* <button onClick={(e) => this.handleRemove(e)}>-</button> */}
                {/* {item.qty}
                <button onClick={() => addToCart(item)} className='add-qty'>+</button>
                <br></br>
                ${item.price.toFixed(2)}
              </div>
              <div className='remove-cart-btn'>
                <BsTrash size={20} onClick={() => removeItemFromCart(item)} />
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className='cart-checkout-summary'>
          regular checkout
          {cartItems.length !== 0 && (
            <>
              <div className='checkout-summary'>
                <h5><b>Items in Cart</b></h5>
                {cartItems.map((item) => (
                  <div key={item.id} >
                    <div className='checkout-item'><strong>{item.title}</strong>{' '}x{item.qty}</div>
                    <div className='checkout-quantity'>
                      Price:{' '}
                      ${(item.qty * item.price).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className='cart-sum-title'><h4>Cart Summary</h4></div>
                <div className='subtotal'><strong>Subtotal: </strong>${subtotal.toFixed(2)}</div>
                <div className='tax'><strong>Tax: </strong>${tax.toFixed(2)}</div>
                <div className='shipping'><strong>Shipping: </strong>${shipping.toFixed(2)}</div>
                <div className='total'><strong>Total: </strong>${total.toFixed(2)}</div>
                <div className='checkout'>
                  <button className='checkout-btn'
                    onClick={() => alert("items checked out")}>Checkout</button>
                </div>
              </div>
            </>
          )}
        </div> */}
    </div>
  )
}

export default Cart