import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import auth from '../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?
                    <button>SIGN OUT</button>
                    :
                    <Link to="/login">Log In</Link>}
            </div>
        </nav>
    );
};

export default Header;