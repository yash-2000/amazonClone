import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import { auth } from "./firebase"

function Login() {
    const navigate= useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error=> alert(error.message))
    }

    const register = e =>{
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
      .then((auth)=>{
        if (auth){
          navigate('/')
        }
      })
      .catch(error=> alert(error.message))
    }


  return (
    <div className="login">
    <Link to="/">
     
        <img className="login-logo" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" />
      
    </Link>
    <div className="login-container">
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>

            <input type="text" value={email} onChange= {e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="text" value={password} onChange= {e => setPassword(e.target.value)}/>
            
            <button type='submit' onClick={signIn} 
            className="login-signinButton">Sign In</button>
        </form>
        <p>
            New to Amazon?
        </p>
       
       <button  onClick={register}
       className="login-reg-button">Create your Amazon Account</button>
    </div>
    </div>
  );
}

export default Login;
