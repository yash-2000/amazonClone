import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login.js"
import Payment from "./Payment"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51L9h9LSHoeTwWEJOtH7gogzvLbA9MEV4xcpnH2virWFB5oS96XxNIX7OfpdaIkA4Cb8oRxuRiIZsCu4MzCi8cxlT00TVJWuRxi"
)

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{
      console.log('the user is -->', authUser);

      if(authUser){
            dispatch({
              type: 'set-user',
              user: authUser
            })
      }else{
          dispatch({
            type: 'set-user',
            user: null
          })
      }

    })

  }, [])

  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
         
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          
          <Route
            path="/payment"
            element={
              <>
              <Elements stripe ={promise}>
                  <Payment />
              </Elements>
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
