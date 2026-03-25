import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'

const Shop = () => {
    const first10 = fakeData.slice(0 ,10);
    const [products, setProducts]= useState(first10)
       
    return (
        <div>
            <h1>This is shop</h1>
            <h3>Product: {products.length}</h3>
            <ul>
            {
                products.map(pd => <li>{pd.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Shop;