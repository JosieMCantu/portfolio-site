import React from 'react';
import codecurly from '../../assets/code-curly.png';
import ghost from '../../assets/ghost.png';
import popsicle from '../../assets/popsicle.png';
import moon from '../../assets/moon.png';
import laptop from '../../assets/laptop.png';
import javascript from '../../assets/javascript.png';
import raincloud from '../../assets/raincloud.png';
import pencil from '../../assets/pencil.png';
import palette from '../../assets/palette.png';

function Contact({ isMobile }) {
    return (
        <div className='connect-first'>
            <div className='connect-second'>
                <div className='connect-third'>
                    <h1 className={isMobile ? 'h1' : 'h1-mobile'}>Let's Connect!</h1>
                    <ul className={isMobile ? 'icons' : 'icons-mobile'}>
                        <li><img src={javascript} alt='JavaScript' /></li>
                        <li><img src={popsicle} alt='Popsicle' /></li>
                        <li><img src={codecurly} alt='Code Curly Braces' /></li>
                        <li><img src={ghost} alt='Ghost' /></li>
                        <li><img src={laptop} alt='Laptop' /></li>
                        <li><img src={moon} alt='Moon' /></li>
                        <li><img src={raincloud} alt='Rain Cloud' /></li>
                        <li><img src={pencil} alt='Pencil' /></li>
                        <li><img src={palette} alt='Palette' /></li>
                    </ul>
                    <div className='connect-links'>
                        <p>LinkedIn: <a href='https://www.linkedin.com/in/josiemcantu/' target='_blank' rel="noopener noreferrer">/in/josiemcantu</a></p>
                        <p>Github: <a href='https://github.com/JosieMCantu' target='_blank' rel="noopener noreferrer">/JosieMCantu</a></p>
                        <p>Twitter: <a href='https://twitter.com/josiemcantu' target='_blank' rel="noopener noreferrer">@josiemcantu</a></p>
                        <p>Email: <a href='mailto:josiex2@gmail.com?subject=Hi%20Josie!' target='_blank' rel="noopener noreferrer">josiex2@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
