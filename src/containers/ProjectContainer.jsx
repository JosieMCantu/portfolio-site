import React from 'react';
import { projects } from '../services/data';
import ProjectDetail from '../components/Pages/ProjectDetail';

function ProjectContainer() {
    return (
        <div className='project-first'>
            <div className='project-second'>
                <div className='project-third'>
                    <ul>
                    {projects.map((project) => (
                    <li key={project.id}><ProjectDetail 
                    key={project.id}
                    link={project.link}
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
