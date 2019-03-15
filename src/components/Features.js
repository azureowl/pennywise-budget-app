import React from 'react';
import MainButton from './MainButton';

export default function Features () {
    let messages = ['text 1', 'text 2', 'text 3'];
    let features = messages.map((text, key) => {
        return (
            <div className='main-div' key={key}>
                <h2>{text}</h2>
            </div>
        )
    });
    return (
        <div className="features">
            {features}
            <div className='main-div final-cta'>
                <h2>placeholder</h2>
                <MainButton>Sign up and plan</MainButton>
            </div>
        </div>
    )
}