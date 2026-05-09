import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  clearLocalShoppingCart
} from "../utilities/databaseManager";
import fakeData from "../fakeData/fakeData.json";
import ReviewItem from "./ReviewItem";
import Cart from "./Cart/Cart";
import happyImage from "../../src/images/giphy.gif"

const Review = () => {
  const [cart, setCart] = useState([]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handelPlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    clearLocalShoppingCart();
    
  };


  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys
      .map((key) => {
        const product = fakeData.find((pd) => pd.key === key);
        if (product) {
          return {
            ...product,
            quantity: savedCart[key],
          };
        }
        return null;
      })
      .filter((pd) => pd !== null);

    setCart(cartProducts);
  }, []);

  let thankyou;
  if(orderPlaced){
    thankyou = <img src={happyImage} alt="" />
  }
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem 
          key={pd.key} 
          removeProduct={removeProduct} 
          product={pd} />
        ))}
        {
          thankyou
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
        <button 
        onClick={handelPlaceOrder}
        className="main-btn"
        >Place Order</button>
      </div>
    </div>
  );
};

export default Review;
