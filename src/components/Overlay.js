import React from 'react';
import Nav from './Nav';

import './Overlay.css';

export default function Overlay(props) {
    return (
        <div className="overlay">
            <Nav class={props.class}/>
        </div>
    );
}