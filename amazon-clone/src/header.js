import React from "react";
import "./Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = ()=>{
      if(user){
        auth.signOut();
      }
  }

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header-logo"
        src="https://imgs.search.brave.com/RXaL9YIWhMCQULo7psVHKR0Erlet6X_uDCIRwU7EXLA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9kMjR2/NW9vbm5qMm5jbi5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMC8xNjAzMDMw/MS9BbWF6b24tTG9n/by1CbGFjay5qcGc"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header_SearchIcon"/>
      </div>

      <div className="header-nav">
        <Link to={!user && 'Login'}>
        <div onClick={handleAuthentication} className="header-opt">
          <span className="header-opt1">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header-opt2">{user ? "Sign out" : "Sign In"}</span>
         
        </div>
        </Link>
        <div className="header-opt">
          <span className="header-opt1">Return</span>
          <span className="header-opt2">& Orders</span>
        </div> 
        <div className="header-opt">
          <span className="header-opt1">Your</span>
          <span className="header-opt2">Prime</span>
        </div>
        <Link to="/checkout">
        <div  className="header-optionBasket">
        <ShoppingCartIcon/>
        <span className="header-opt2 header-basketCount">
              {basket?.length}
        </span>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
