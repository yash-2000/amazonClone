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
                <Payment />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
