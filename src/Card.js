import React from 'react';

const Card = props => {
    return(
        <div className = 'card'>
            <img
                src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'
                alt = 'Team Badge'
            />
            <p>Arsenal</p>
        </div>
    )
}

export default Card