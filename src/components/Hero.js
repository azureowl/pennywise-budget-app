import React from 'react';
import MainButton from './MainButton';

export default function Hero () {
    return (
        <div className="hero main-div">
            <div className='intro-cta'>
                <h2>Budgeting is easy.</h2>
                <p>When you’re on top of your money, planning is easier. You'll know if you can spend a little more and where to cut back.</p>
                <MainButton>Sign Up</MainButton>
            </div>
        </div>
    )
}