import React from 'react';
import jmc from '../../assets/josie1.jpeg';
import pencil from '../../assets/pencil.png';
import pin from '../../assets/pin.png';
import plane from '../../assets/plane.png';
import popsicle from '../../assets/popsicle.png';
import save from '../../assets/save.png';
import spa from '../../assets/spa.png';
import star from '../../assets/star.png';

function About({ isMobile }) {
    return (
        <div className='about-first'>
            <div className='about-second'>
                <div className='about-third'>
                    
                    <img src={jmc} alt='Josie M. Cantu' className={isMobile ? 'self' : 'selfmobile'} />
                    
                    <ul className={isMobile ? 'icons' : 'icons-mobile'}>
                        <li><img src={pencil} alt='Pencil' /></li>
                        <li><img src={pin} alt='Pin' /></li>
                        <li><img src={plane} alt='Plane' /></li>
                        <li><img src={popsicle} alt='Popsicle' /></li>
                        <li><img src={save} alt='Save' /></li>
                        <li><img src={spa} alt='Spa' /></li>
                    </ul>
                    
                    <p className='home-words'>Hello! My name is Josie Cantu and I'm a Fullstack Software Engineer based in beautiful Portland, Oregon. </p><img src={star} alt='Star' />
                    <p className='home-words'>I have a positive outlook and a broad skillset. I feel strongly that every business, from tech to food service, is made better with an inclusive and diverse array of perspectives and backgrounds.</p><img src={star} alt='Star' />
                    <p className='home-words'>I believe it's my responsibility to use my skills to amplify the voices of marginalized populations and to make the internet accessible to everyone.</p>
                    <img src={star} alt='Star' />
                    <p className='home-words'>I'm a team builder and flexible problem solver. I'm a communicative collaborator thriving in both team and solo environments. </p>
                    <img src={star} alt='Star' />
                    <p className='home-words'>When I'm not coding, I like to go in search of amazing restaurants and fancy cocktails, go out dancing and explore my hometown of Portland, OR.</p>
                </div>
            </div>
        </div>
    )
}

export default About
