import React from 'react';
import TechStack from '../components/TechStack';
import dog from '../assets/dog.png';
import laptop from '../assets/laptop.png';
import curly from '../assets/code-curly.png';
import alt from '../assets/code-alt-reg.png';
import reg from '../assets/code-reg.png';
import js from '../assets/javascript.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import raincloud from '../assets/raincloud.png';
import moon from '../assets/moon.png';


function HomeContainer() {
    return (
        <div className='home-first'>
            <div className='home-second'>
                <div className='home-third'>
                    <h1>Josie M. Cantu</h1>
                    <h2>FULLSTACK SOFTWARE ENGINEER</h2>
                    <ul className='icons'>
                        <li><img src={dog} alt='dog' /></li>
                        <li><img src={laptop} alt='laptop' /></li>
                        <li><img src={curly} alt='Curly Braces' /></li>
                        <li><img src={moon} alt='Moon' /></li>
                        <li><img src={alt} alt='Code Alt' /></li>
                        <li><img src={js} alt='JavaScript' /></li>
                        <li><img src={reg} alt='Code Regular' /></li>
                        <li><img src={raincloud} alt='Rain Cloud' /></li>
                        <li><img src={node} alt='NodeJS' /></li>
                        <li><img src={react} alt='React' /></li>
                    </ul>
                    
                    <p className='home-words'>I enjoy working on diverse teams that involve both peer programming and individual contributions. My specialties include learning new frameworks, problem solving and design principles in HTML, CSS and JavaScript.</p>
                    
                    <h2>✧ Tech Stack ✧</h2>

                    <div className='techstack-first'>
                    <TechStack title='Languages' first='PHP' second='JavaScript' third='HTML' fourth='CSS'  />
                    <TechStack title='Frameworks' first='React' second='React Native' third='Express' fourth='GraphQL' />
                    <TechStack title='Backend' first='PostgreSQL' second='NodeJS' third='DJango' fourth='Python' />
                    <TechStack title='Dev Tools' first='Postman' second='PgAdmin' third='Heroku' fourth='Netlify' />
                    <TechStack title='Testing' first='Jest' second='QUnit' third='React Testing Library' />
                    <TechStack title='Other Skills' first='Github' second='Slack' third='AWS S3' fourth='XCode' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer
