import React from 'react'

function ProductDisplay(props) {
  const { pName, price, pImage } = props.data;
  return (
    <>
      <div className='products-container'>
        <div className='product-img'><img src={pImage} style={{ width: 200, height: 200 }}/></div>
        <div className='product-name'><p>{pName}</p></div>
        <div className='price'><p>Price: ${price}</p></div>
      </div>
    </>
  )
}

export default ProductDisplay