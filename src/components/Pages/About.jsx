import React from 'react';
import jmc from '../../assets/josie.png';
import pencil from '../../assets/pencil.png';
import pin from '../../assets/pin.png';
import plane from '../../assets/plane.png';
import popsicle from '../../assets/popsicle.png';
import save from '../../assets/save.png';
import spa from '../../assets/spa.png';

function About() {
    return (
        <div className='about-first'>
            <div className='about-second'>
                <div className='about-third'>
                    <img src={jmc} alt='Josie M. Cantu' className='self' />
                    
                    <ul className='icons'>
                        <li><img src={pencil} alt='Pencil' /></li>
                        <li><img src={pin} alt='Pin' /></li>
                        <li><img src={plane} alt='Plane' /></li>
                        <li><img src={popsicle} alt='Popsicle' /></li>
                        <li><img src={save} alt='Save' /></li>
                        <li><img src={spa} alt='Spa' /></li>
                    </ul>
                    
                    <p className='home-words'>Hello! My name is Josie Cantu and I'ma Fullstack Software Engineer based in beautiful Portland, Oregon. I enjoy working on diverse teams that involve both peer programming and individual contributions. My specialties include learning new frameworks, problem solving and design principles in HTML, CSS and JavaScript.</p>
                </div>
            </div>
        </div>
    )
}

export default About
