import React from 'react';

const Card = props => {
    return(
        <div
        className = 'card'
        onClick = {props.onClick}
        id = {props.name}
        >
            <img
                src = {props.badge}
                alt = 'Team Badge'
            />
            <p>{props.name}</p>
        </div>
    )
}

export default Card