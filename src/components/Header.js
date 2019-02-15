import React from 'react';
import ReactDOM from "react-dom";
import Nav from './Nav';
import Overlay from './Overlay';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    openMenu() {
        let state = this.state.expanded;
        this.setState({expanded: !state});
    }

    render () {
    let menuState = this.state.expanded ? (<Overlay class="sm-menu" />) : '';

        return (
            <header>
                <h1>Pennywise</h1>
                <button onClick = {() => this.openMenu()} className="menu-btn" aria-haspopup="true" aria-expanded={this.state.expanded} aria-label="Open menu"><i className="fas fa-bars"></i></button>
                {menuState}
                <Nav class="lg-menu"/>
            </header>
        )
    }
}

export default Header;