import React from 'react';
import Card from './Card';


const CardList = ({cards}) => {
    return (
        <div className="card-cont">

        {cards.map(item => (
            <Card item={item} key={item.id} />
        ))}
        </div>
    )
}

export default CardList;