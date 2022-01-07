import React from 'react'

function TechStack({ title, first, second, third, fourth }) {
    return (
        <div>
            <ul>
                <li>{title.toUpperCase()}</li>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                <li>{fourth}</li>
            </ul>
        </div>
    )
}

export default TechStack
