import React from 'react';
import './CardsWithData.scss';

import Card from '../Card/Card'

const CardsWithData = (props) => {
    const data = props.data
    console.log(data)
    return (
        <div className="cards-with-data">
            {
            data.map(card => (
                <div key={card.id} className='card-container'>
                  <Card {...card}  />
                </div>
            ))
            }
        </div>
    )
}

export default CardsWithData