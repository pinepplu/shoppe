import React from 'react'
import '../../styles/Cart.css'
import { Trash } from 'phosphor-react'

function ShoopingCart({
    products,
    onQuantityChange,
    onProductRemove,
}) {
    return (
        <div className='cart-container'>
            <h2>Shooping Cart</h2>
            <div className='cart-items'>
                {/* empty shopping cart */}
                {products.length === 0 && (
                    <span className='cart-empty'>Shooping Cart is Currently Empty</span>
                )}
                {/* cart not empty */}
                {products.map(product => (
                    <div className='cart-item' key={product.id}>
                        <img src={product.pImage} alt={product.pName} />
                        <h3>{product.pName}</h3>
                        <h4>${product.price * product.count}</h4>
                        {/* select quantity of product in cart */}
                        <select className='cart-item-count' value={product.count}
                            onChange={(event) => {
                                onQuantityChange(
                                    product.id,
                                    event.target.value
                                );
                            }}>
                            {[...Array(10).keys(),].map(number => {
                                const num = number + 1;
                                return <option value={num} key={num}>{num}</option>
                            })
                            }
                        </select>
                        <button className='remove-item-btn' onClick={() => onProductRemove(product)}>
                            <Trash size={20} />
                        </button>
                    </div>
                ))}
                {products.length > 0 && (
                    <button className='checkout-btn'>Proceed To Checkout</button>
                )}
            </div>
        </div>
    )
}

export default ShoopingCart