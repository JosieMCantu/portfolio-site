import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import twitter from '../assets/twitter.png';

function Footer() {
    return (
        <div className='footer-first'>
            <div>
                <ul>
                    <li><a href='https://github.com/JosieMCantu' target='_blank'>
                        <li>GITHUB</li><img src={github} alt='Github' /></a></li>
                    <li><a href='https://www.linkedin.com/in/josiemcantu/' target='_blank'>
                        <li>LINKEDIN</li><img src={linkedin} alt='LinkedIn' /></a></li>
                    <li><a href='https://twitter.com/josiemcantu' target='_blank'>
                        <li>TWITTER</li><img src={twitter} alt='Twitter' /></a></li>
                    <li><a href='mailto:josiex2@gmail.com?subject=Hi%20Josie!' target='_blank'>
                        <li>EMAIL</li><img src={email} alt='Email' /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
