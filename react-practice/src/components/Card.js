import React from 'react';


const Card = ({item}) => {
    console.log('this is item', item);

    return (
        <div className="card">
        <div>
            <img src={item.photoUrl} atl={item.name} width="300px" height="250px" style={{borderRadius: '10px 10px 10px 10px', objectFit: 'cover'}}/>
        </div>
            <div>
                <h1>{item.name}</h1>
                <h3>{item.affiliation}</h3>
            </div>
        </div>
    )
}

export default Card;