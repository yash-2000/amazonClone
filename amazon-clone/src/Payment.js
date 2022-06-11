import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {Link} from "react-router-dom";

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment-container'>
            <h1>
            Checkout {<Link to= '/checkout'>{basket?.length} items</Link>}
            </h1>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h1>Delivery address</h1>
                </div>
                <div className='paymenyt-address'>
                    <p>{user?.email}</p>
                    <p>123 react lane</p>
                    <p>los angeles, ca</p>
                </div>
            </div>

            <div className='payment-section'>
            <div className='payment-title'>
                <h1>Review items</h1>
            </div>
            <div className='payment-items' >
                {basket.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title= {item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}                    
                    />
                ))}
            </div>
            </div>

            <div className='payment-section'>
                    <div className='payment-title'>
                        <h1>Payment Method</h1>
                    </div>
                    <div className='payment-details'>

                    </div>
            </div>
        </div>
        </div>
  )
}

export default Payment