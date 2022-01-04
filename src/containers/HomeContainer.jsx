import React from 'react';
import notice from '../assets/coming-soon.png';


function HomeContainer() {
    return (
        <div className='home-first'>
            <div className='home-second'>
                <div className='home-third'>
                    <img src={notice} alt='notice'/>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeContainer
