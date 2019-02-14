import React from 'react';
import Nav from './Nav';

import './Header.css';

function Header() {
    return (
        <header>
            <h1>Pennywise</h1>
            <button className="menu-btn" aria-haspopup="true" aria-expanded="false" aria-label="Open menu"><i className="fas fa-bars"></i></button>
            <Nav />
        </header>
    )
}

export default Header;