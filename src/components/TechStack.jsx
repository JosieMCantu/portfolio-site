import React from 'react';

function TechStack({ title, first, second, third, fourth, fifth, sixth, seventh }) {
    return (
        <div>
            <ul>
                <li>{title.toUpperCase()}</li>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                <li>{fourth}</li>
                <li>{fifth}</li>
                <li>{sixth}</li>
                <li>{seventh}</li>
            </ul>
        </div>
    )
}

export default TechStack;
