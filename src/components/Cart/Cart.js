import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // function formatNum (num) {
    //     const formatedNum = num.toFixed(2);
    //     return formatedNum;
    // }
    const total = cart.reduce((total, product) => total + product.price, 0);
    const shipping = (total * 10) / 100;
    const tax = (total * 25) / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h3>Items Ordered:{cart.length} </h3>
            <p>Total Price: ${total.toFixed(2)} </p>
            <p>Shipping Cost : ${shipping.toFixed(2)} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h3 className="grand-total">Grand Total: ${grandTotal.toFixed(2)} </h3>
            <button className="main-button">Review Order</button>
        </div>
    );
};

export default Cart;