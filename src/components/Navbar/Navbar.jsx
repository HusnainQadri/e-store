import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/react.svg";
import "./Navbar.css";
import {Link} from "react-router-dom";
import logofinal from "../../assets/trolley.png";

function Navbar({ cartItemsCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link 
            to={"/"}
            className="link"
        >
            <img src={logofinal} alt="My Logo" />
        </Link>
        
      </div>
      <div className="navbar-middle">
        <h3>Husnain's Ecommerce Store</h3>
      </div>
      <div className="navbar-cart">
        <Link 
            to="/cart"
            className="link"    
        >
            <FaShoppingCart size={24} />
           
        </Link>
        <span className="navbar-cart-count">{cartItemsCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
