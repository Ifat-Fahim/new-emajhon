import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller,price, stock, category} = props.product;
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="Product" />
            </div>
            <div className="product-description">
                <h3> {name} </h3>
                <p><small>Category: {category}</small></p>
                <p>By: <small> {seller} </small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock. Order soon.</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
            
    )
}

export default Product;