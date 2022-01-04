import React from 'react'

function ProjectDetail({ name, link, description, stack, github, deployed }) {
    return (
        <div className='project-detail'>
            <img src={link} alt='Project' />
            <h1>{name}</h1>
            <p>{stack}</p>
            <p>{description}</p>
            <p>{github}</p>
            <p>{deployed}</p>
        </div>
    )
}

export default ProjectDetail
