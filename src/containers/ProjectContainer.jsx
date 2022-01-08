import React from 'react';
import { projects } from '../services/data';
import ProjectDetail from '../components/Pages/ProjectDetail';
import happy from '../assets/happy.png';
import buildings from '../assets/buildings.png';
import bullseye from '../assets/bullseye.png';
import ghost from '../assets/ghost.png';
import gitpull from '../assets/git-pull-request.png';
import hand from '../assets/hand.png';
import happyheart from '../assets/happy-heart-eyes.png';
import landscape from '../assets/landscape.png';
import palette from '../assets/palette.png';
import paperplane from '../assets/paper-plane.png';


function ProjectContainer() {
    return (
        <div className='project-first'>
            <div className='project-second'>
                <div className='project-third'>
                    <h1>Selected Projects</h1>
    
                    <ul className='icons'>
                        <li><img src={happy} alt='Happy' /></li>
                        <li><img src={buildings} alt='Buildings' /></li>
                        <li><img src={bullseye} alt='Bullseye' /></li>
                        <li><img src={ghost} alt='Ghost' /></li>
                        <li><img src={gitpull} alt='Git Pull Request' /></li>
                        <li><img src={hand} alt='Hand' /></li>
                        <li><img src={happyheart} alt='Happy Hour' /></li>
                        <li><img src={landscape} alt='Landscape' /></li>
                        <li><img src={palette} alt='Palette' /></li>
                        <li><img src={paperplane} alt='Paper Plane' /></li>
                    </ul>

                    <ul className='projects'>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <ProjectDetail 
                            key={project.id}
                            img={project.img}
                            name={project.name}
                            stack={project.stack}
                            description={project.description}
                            github={project.github}
                            deployed={project.deployed} />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
