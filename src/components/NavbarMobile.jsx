import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/menulight.png';
import xcircle from '../assets/x-circle.png';



function NavbarMobile() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false);
    
    return (
        <div className='navbarmobile'>
            <ul className={click ? 'menu-options active' : 'menu-options'}>
                <li onClick={closeMobile}><Link to="/about">✧ About ✧</Link></li>
                <li onClick={closeMobile}><Link to="/projects">✧ Projects ✧</Link></li>
                <li onClick={closeMobile}><Link to="/contact">✧ Connect ✧</Link></li>
                <li onClick={closeMobile}><Link target={'_blank'} rel="noopener noreferrer" to="/resume.pdf">✧ Resume ✧</Link></li>
            </ul>
            
            <ul className='navbarmenu'>
                <li onClick={closeMobile}><Link to="/">✧ Home ✧</Link></li>
                <li className='menuimage' onClick={handleClick}><img src={click ? xcircle : menu} alt='Menu' /></li>
            </ul>
        </div>
    )
}

export default NavbarMobile;
