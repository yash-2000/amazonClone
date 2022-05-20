import React from "react"
import "./Product.css"

function Product({id, title, image, price, rating}) {
  return (
    <div className="product">
      <img
        src={image}
      />
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <bold>$</bold>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill().map((_, i)=>(
            <p>⭐</p>
            ))}
            
           
        </div>
      </div>
      
      <button> Add to Basket</button>
    </div>
  )
}

export default Product;
