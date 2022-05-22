import React from "react"
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  console.log("this is yash", basket)

  const addToBasket =()=>{
      dispatch({
        type: "ADD-TO-BASKET",
        item:{
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        }
      })
  }
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
      
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product;
