import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock, key } = props.product;
=======

const Product = (props) => {
  // console.log(props.handelAddProduct);
  const { img, name, seller, price, stock } = props.product;
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
<<<<<<< HEAD
        <h4><Link to={"/product/" + key}>{name}</Link></h4>
=======
        <h4>{name}</h4>
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <p>
          <small>price: ${price}</small>
        </p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
<<<<<<< HEAD
        {props.showAddToCart && <button className="main-btn" onClick={() => props.handelAddProduct(props.product)}>
          <FontAwesomeIcon icon={faCartShopping} />
          add to cart
        </button>}
=======
        <button className="main-btn" onClick={() => props.handelAddProduct(props.product)}>
          <FontAwesomeIcon icon={faCartShopping} />
          add to cart
        </button>
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877
      </div>
    </div>
  );
};

export default Product;
