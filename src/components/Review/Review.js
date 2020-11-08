import React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {

    const [cart, setCart] = useState([])

    const [orderPlaced, setOrderPlaced] = useState(false);

    const history = useHistory()

    function handleProceedCheckout() {
        history.push('/shipment');
    }

    const removeProduct = productKey => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    let thankYou; 
    if(orderPlaced) {
        thankYou = <img src={happyImage} alt="Thank you" />;
    }
    return (
       <div className="review-container">
            <div className="product-container">
            {
                cart.map(product => <ReviewItem removeProduct={removeProduct} key={product.key} product={product} />)
            }
            {
                thankYou
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
                </Cart>
            </div>
       </div>
    );
};

export default Review;