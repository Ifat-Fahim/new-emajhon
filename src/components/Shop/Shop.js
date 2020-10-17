import React, { useState } from 'react';
import fakeData from './../../fakeData';
import Product from './../Product/Product';
import './Shop.css';
import Cart from './../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);
    function handleAddProduct(product) {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} product={product}
                        handleAddProduct={handleAddProduct} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
            
    );
};

export default Shop;