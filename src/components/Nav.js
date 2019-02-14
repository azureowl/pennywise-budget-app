import React from 'react';
import './Nav.css'

export default function Nav() {
    return (
        <nav className="overlay" aria-hidden="false" aria-labelledby="menu">
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/">How it works</a></li>
                <li><a href="https://www.nerdwallet.com/the-best-credit-cards?trk=nw_gn2_4.0">Best Credit Cards</a></li>
                <li><a href="https://www.thebalance.com/reasons-to-budget-money-2385699">Why Budget?</a></li>
                <li><a className="sign-up" href="/">Sign Up</a></li>
            </ul>
        </nav>
    );
}