import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='navbar-first'>
            <ul>
                <li><Link to="/">✩Josie M. Cantu✩</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link target={'_blank'} to="/resume.pdf">Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
