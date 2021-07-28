//rfce

import React from 'react'
import './Header.css';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="react__logo" src={logo} alt=""/>
            </div>
            <ul className="collection">
                <li className="collection__item"><Link to="/">Home</Link></li>
                <li className="collection__item"><Link to="Dashboard">Dashboard</Link></li>
                <li className="collection__item"><Link to="Product">Product</Link></li>
                <li className="collection__item"><Link to="Contact">Contact</Link></li>
                <li className="collection__item"><Link to="About">About</Link></li>
                <li className="collection__item"><Link to="Help">Help?</Link></li>
            </ul>
        </div>
    )
}

export default Header
