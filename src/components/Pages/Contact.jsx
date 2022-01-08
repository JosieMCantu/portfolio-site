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

function Contact() {
    return (
        <div className='connect-first'>
            <div className='connect-second'>
                <div className='connect-third'>
                    <h1>Let's Connect!</h1>
                    <ul>
                        <lil><img src={javascript} alt='JavaScript' /></lil>
                        <lil><img src={popsicle} alt='Popsicle' /></lil>
                        <lil><img src={codecurly} alt='Code Curly Braces' /></lil>
                        <lil><img src={ghost} alt='Ghost' /></lil>
                        <lil><img src={laptop} alt='Laptop' /></lil>
                        <lil><img src={moon} alt='Moon' /></lil>
                        <lil><img src={raincloud} alt='Rain Cloud' /></lil>
                        <lil><img src={pencil} alt='Pencil' /></lil>
                        <lil><img src={palette} alt='Palette' /></lil>
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
