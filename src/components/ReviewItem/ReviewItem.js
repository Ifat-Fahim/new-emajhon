import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className="review-item">
            <h3 className="product-name"> {name} </h3>
            <p>Quantity: {quantity} </p>
            <p>Price: {price} </p>
            <button className="main-button" onClick={() => props.removeProduct(key)}>Remove Item</button>
        </div>
    );
};

export default ReviewItem;