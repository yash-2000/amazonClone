import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal"
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout-right">
       <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
