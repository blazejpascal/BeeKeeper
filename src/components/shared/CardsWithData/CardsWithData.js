import React from 'react';
import './CardsWithData.scss';

import {Link} from 'react-router-dom'

import Card from '../Card/Card'

const CardsWithData = (props) => {
    const data = props.data
    const {additionalStyling} = props
    return (
        <div className="cards-with-data">
            {
                data.map(card => (
                    <Link key={card.id} to={card.to}>
                        <div key={card.id} className='card-container'>
                            <Card {...card} additionalStyling={additionalStyling}  />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CardsWithData