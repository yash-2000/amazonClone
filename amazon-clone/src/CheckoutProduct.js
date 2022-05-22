import React from 'react'
import './CheckoutProduct.css'


function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image}
        />
        <div className='checkoutPoduct-info'>
            <p className='checkoutPoduct-title'>
                {title}
            </p>
            <p className='checkoutPoduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className='checkoutPoduct-rating'>
                    {Array(rating)
                        .fill()
                        .map((_,i) =>(
                            <p>⭐</p>
                        ))                    
                    }
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct