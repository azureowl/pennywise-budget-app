import React from 'react';
import MainButton from './MainButton';

export default function Features () {
    let messages = [['Budgets? Yes!', 'fas fa-money-check-alt', 'Easily create budgets.'], ['Keep Track', 'far fa-chart-bar', 'See how much you\'ve spent.'], ['It\'s Flexible', 'fas fa-birthday-cake', 'Plan for any life event.']];
    let features = messages.map((text, key) => {
        return (
            <div className='main-div' key={key}>
                <h2>{text[0]}</h2>
                <i className={text[1]}></i>
                <p>{text[2]}</p>
            </div>
        )
    });
    return (

        <section className="features">
            {features}
            <div className='main-div final-cta'>
                <h2>Sign up for Pennywise</h2>
                <p>Whether it's for a vacation, a wedding, or a night out, Pennywise can help you manage your money.</p>
                <MainButton>Sign up and plan</MainButton>
            </div>
        </section>
    )
}