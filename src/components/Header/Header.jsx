import React from "react";
import logo from "../../images/logo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Heder = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
      </nav>
    </div>
  );
};

export default Heder;
