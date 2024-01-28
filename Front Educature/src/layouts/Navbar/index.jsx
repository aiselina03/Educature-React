import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="" />
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/addPage"}>Add Page</NavLink></li>
                <li><NavLink to={"/basket"}>Basket</NavLink></li>
                <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
