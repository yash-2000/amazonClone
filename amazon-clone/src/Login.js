import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
    <Link to="/">
     
        <img className="login-logo" src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" />
      
    </Link>
    <div className="login-container">
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text"/>
            <h5>Password</h5>
            <input type="text"/>
            <button className="login-signinButton">Sign In</button>
        </form>
        <p>
            New to Amazon?
        </p>
       
       <button className="login-reg-button">Create your Amazon Account</button>
    </div>
    </div>
  );
}

export default Login;
