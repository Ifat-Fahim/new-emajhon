import React, { useState } from 'react';
import fakeData from './../../fakeData';
import Product from './../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} product={product} />)
                }
            </div>
            <div className="cart-container">
                <h1>This is cart container.</h1>
            </div>
        </div>
            
    );
};

export default Shop;