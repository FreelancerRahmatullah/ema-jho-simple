<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/fakeData.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";
=======
import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
<<<<<<< HEAD
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map(existingKey => {
      const product = fakeData.find( pd => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    })
    setCart(previousCart);
  },[])

  const handelAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key !== toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    }
    else{
      product.quantity =1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handelAddProduct={handelAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
          <button className="main-btn">Review Order</button>
          </Link>
        </Cart>
=======
 const [cart , setCart] = useState([]);

  const handelAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
          handelAddProduct = {handelAddProduct}
          product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
>>>>>>> 4d0f0e00976f506594f4061c9aeca1340740d877
      </div>
    </div>
  );
};

export default Shop;
