import React from 'react';

function FooterMobile() {
    return (
        <div className='footermobile'>
            <p>In Mobile</p>
            <div className='footer-first'>
            <div>
                <ul>
                    <li>
                        <a href='https://github.com/JosieMCantu' target='_blank' rel="noopener noreferrer">
                        <p>GITHUB</p>
                        <p>✧</p>
                        </a></li>
                    <li>
                        <a href='https://www.linkedin.com/in/josiemcantu/' target='_blank' rel="noopener noreferrer">
                        <p>LINKEDIN</p>
                        <p>✧</p>
                        </a></li>
                    <li>
                        <a href='https://twitter.com/josiemcantu' target='_blank' rel="noopener noreferrer">
                        <p>TWITTER</p>
                        <p>✧</p>
                        </a></li>
                    <li>
                        <a href='mailto:josiex2@gmail.com?subject=Hi%20Josie!' target='_blank' rel="noopener noreferrer">
                        <p>EMAIL</p>
                        <p>✧</p>
                        </a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default FooterMobile;