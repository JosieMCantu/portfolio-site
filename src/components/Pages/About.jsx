import React from 'react';
import jmc from '../../assets/josie.png';

function About() {
    return (
        <div className='home-first'>
            <div className='home-second'>
                <div className='about-third'>
                    <img src={jmc} alt='Josie M. Cantu' />
                    
                    <p></p>
                    <p>Hello! My name is Josie Cantu and I'ma Fullstack Software Engineer based in beautiful Portland, Oregon. I enjoy working on diverse teams that involve both peer programming and individual contributions. My specialties include learning new frameworks, problem solving and design principles in HTML, CSS and JavaScript.</p>
                </div>
            </div>
        </div>
    )
}

export default About
