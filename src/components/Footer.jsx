import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';

function Footer() {
    return (
        <div className='footer-first'>
            <div>
                <ul>
                    <li><img src={github} alt='Github' /></li>
                    <li><img src={linkedin} alt='LinkedIn' /></li>
                    <li><img src={email} alt='Email' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
