import React from 'react';
import './Card.scss'

const Card = props => {
    const { url, title, description, additionalStyling } = props
    return(
    <div className={`square ${additionalStyling}`}>
        <div className="square__cover">
            <img src={ url }  alt="random" className="square__picture" />
        </div>
        <div className="square__description">
            <span className="square__description--bigger"> { title } </span>
            <span className="square__description--smaller"> { description } </span>
        </div>
    </div>
    )
}

export default Card