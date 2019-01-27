import React from 'react';
import Nav from './Nav';
import Login from './Login';

import './Header.css';

function Header() {
    return (
        <header>
            <h1>Pennywise</h1>
            <Nav />
            <Login />
        </header>
    )
}

export default Header;