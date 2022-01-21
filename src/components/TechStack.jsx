import React from 'react'

function TechStack({ title, first, second, third, fourth, fifth }) {
    return (
        <div>
            <ul>
                <li>{title.toUpperCase()}</li>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                <li>{fourth}</li>
                <li>{fifth}</li>
            </ul>
        </div>
    )
}

export default TechStack
