import React from 'react';
import './MainButton.css';

export default function MainButton (props) {
    return (
        <button>{props.children}</button>
    )
}