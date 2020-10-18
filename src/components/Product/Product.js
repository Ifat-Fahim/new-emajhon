import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {img, name, seller,price, stock, category, key, features} = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="Product" />
            </div>
            <div className="product-description">
                <div className="description-a">
                    <h3> <Link to={"/product/" + key}> {name} </Link> </h3>
                        <p><small>Category: {category}</small></p>
                        <p>By: <small> {seller} </small></p>
                        <p>${price}</p>
                        <p><small>Only {stock} left in stock. Order soon.</small></p>
                    {props.handleAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
                </div>
               <div>
                    <ul>
                        <h3 className="features">{ features.length > 0 && 'Features:'} </h3>
                        {
                            features.length > 0 && features.map(feature =>  <li> {feature.description} </li>)
                        }
                    </ul>
               </div>
            </div>
        </div>
            
    )
}

export default Product;