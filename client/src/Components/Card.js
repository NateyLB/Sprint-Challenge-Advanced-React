import React, {useState, useEffect}from 'react';

const Card = ({name, country, searches, id}) =>{

    return (
        <div className="card" id={id} data-testid={id}>
        <h1>{name}</h1>
        <p>Location: {country}</p>
        <p>Number of Searches: {searches}</p>
        </div>
    )
}

export default Card