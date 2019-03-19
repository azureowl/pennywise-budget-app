import React from 'react';
import MainButton from './MainButton';
import budget from './img-budget.png';
import budgetMB from './img-budget_mb.png';
import track from './img-track.png';
import trackMB from './img-track_mb.png';
import flex from './img-flex.png';
import flexMB from './img-flex_mb.png';

export default function Features () {
    let messages = [['Budgets? Yes!', 'fas fa-money-check-alt', 'Easily create budgets.', budget, budgetMB], ['Keep Track', 'far fa-chart-bar', 'See how much you\'ve spent.', track, trackMB], ['It\'s Flexible', 'fas fa-birthday-cake', 'Plan for any life event.', flex, flexMB]];
    let features = messages.map((text, key) => {
        return (
            <div className='main-div' key={key}>
                <div className='left-col'>
                    <h2>{text[0]}</h2>
                    <i className={text[1]}></i>
                    <p>{text[2]}</p>
                </div>
                <div className='right-col'>
                    <img src={text[4]} srcSet={`${text[4]} 300w, ${text[3]} 600w`} />
                </div>
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