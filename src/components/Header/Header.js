import React from 'react';
import './Header.css';

const Header = props => (
    <header className="header">
        <h4>{props.children}</h4>
    </header>
);

export default Header;
