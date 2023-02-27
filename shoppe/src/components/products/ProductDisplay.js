import React from 'react'

function ProductDisplay(props) {
  const { pName, price, pImage } = props.data;
  return (
    <>
    <div className='product-img'><img src={pImage} /></div>
    <div className='product-name'><p>{pName}</p></div>
    <div className='price'><p>Price: ${price}</p></div>
    </>
  )
}

export default ProductDisplay