import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails(props) {

    const { products } = props

    const { title } = useParams()

    return (
        <div className='prod-deets-container'>
            {/* {mproducts.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        <img src={item.image} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            Price: ${item.price}
                            <br></br>
                            Description: {item.description}
                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            }

            {wproducts.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        <img src={item.image} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            Price: ${item.price}
                            <br></br>
                            Description: {item.description}
                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}

export default ProductDetails