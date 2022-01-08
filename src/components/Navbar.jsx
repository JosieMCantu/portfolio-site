import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='navbar-first'>
            <ul>
                <li><Link to="/">✧ Home ✧</Link></li>
                <li><Link to="/about">✧ About ✧</Link></li>
                <li><Link to="/projects">✧ Projects ✧</Link></li>
                <li><Link to="/contact">✧ Connect ✧</Link></li>
                <li><Link target={'_blank'} rel="noopener noreferrer" to="/resume.pdf">✧ Resume ✧</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
