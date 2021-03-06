import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="nav bg-primary">
        <a className="nav-link text-white" href="/"><b><span role="img" aria-label="cart">🛒</span>Cart.ly</b></a>
        <a className="nav-link text-white" href="#" onClick={props.showShop}>Shop</a>
        <a className="nav-link text-white ml-auto" href="#" onClick={props.showCart}>Your Cart <span className="item-count text-primary">{props.itemCount}</span></a>
    </nav>
);

export default Nav;