import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import logo from './../../images/logo.png'
import './Header.css'

const Header = () => {
    const [loggedInuser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <img src={logo} alt="Ema Jhon" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/inventory">Manage Inventory</a>
                <button onClick={() => setLoggedInUser({})} >Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;