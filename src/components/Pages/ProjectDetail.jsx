import React from 'react'

function ProjectDetail({ name, img, description, stack, github, deployed, isMobile }) {
    return (
        <div>
            <img src={img} alt='Project' />
            <h1>{name}</h1>
            <p>{stack}</p>
            <p>{description}</p>
            <p className={isMobile ? 'projects' : 'projects-mobile'}>✧ <a href={github}>Github</a> ✧ | ✧ <a href={deployed}>Deployed</a> ✧</p>
        </div>
    )
}

export default ProjectDetail
