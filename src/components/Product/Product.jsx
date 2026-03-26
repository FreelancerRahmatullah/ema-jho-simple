import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props.handelAddProduct);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
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
        <button className="main-btn" onClick={() => props.handelAddProduct(props.product)}>
          <FontAwesomeIcon icon={faCartShopping} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
