import React from 'react';
import './Footer.css';

export default function Footer () {
    return (
         <footer role="contentinfo">
            Copyright 2018
            <a href="mailto:romaedeveloper@gmail.com">
                <i className="far fa-envelope" />
            </a>
            <a href="https://github.com/azureowl">
                <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/rochellm/">
                <i className="fab fa-linkedin" />
            </a>
        </footer>
    )
}