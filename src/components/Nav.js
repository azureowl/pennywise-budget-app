import React from 'react';
import './Nav.css'

export default function Nav(props) {
    return (
        <nav className={props.class}>
            <div className="info-links">
                <ul>
                    <li><a href="/">How it works</a></li>
                    <li><a href="https://www.nerdwallet.com/the-best-credit-cards?trk=nw_gn2_4.0">Best Credit Cards</a></li>
                    <li><a href="https://www.thebalance.com/reasons-to-budget-money-2385699">Why Budget?</a></li>
                </ul>
            </div>
            <div className="login-links">
                <ul>
                    <li><button className="cta login" href="/">Login</button></li>
                    <li><button className="cta signup" href="/">Sign Up</button></li>
                </ul>
            </div>
        </nav>
    );
}