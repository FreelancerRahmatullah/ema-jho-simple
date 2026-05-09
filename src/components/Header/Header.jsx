import React from "react";
import logo from "../../images/logo.png";
import "../Header/Header.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877

const Heder = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
<<<<<<< HEAD
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
=======
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877
      </nav>
    </div>
  );
};

export default Heder;
