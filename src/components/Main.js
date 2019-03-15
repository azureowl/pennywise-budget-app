import React from 'react';
import Hero from './Hero';
import Features from './Features';

import './Main.css';

export default function Main () {
    return (
        <main>
            <Hero />
            <h2>Features</h2>
            <Features />
        </main>
    )
}