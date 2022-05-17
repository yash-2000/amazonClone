import React from "react";
import "./header.css";

function header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://wallpaperaccess.com/full/1383586.jpg"
      />

      <div className="header-search">
        <input 
        className="header-search"
        type="text" />
      </div>

      <div className="header-nav">
        <div className="header-opt">
            
        </div>
        <div className="header-opt">

        </div>
        <div className="header-opt">

        </div>
      </div>
    </div>
  );
}

export default header;
