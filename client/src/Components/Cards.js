import React, {useState, useEffect}from 'react';
import Card from "./Card.js"

const Cards = ({data}) =>{
function makeCards (){
    return data.map(element =>{
       return <Card name={element.name} country={element.country} searches={element.searches} key={element.id} id={element.id}/>
    })
}
    return(
        <div className="card-container">
            {makeCards()}
        </div>
    )
}
export default Cards;