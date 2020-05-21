import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import Cards from "./Cards.js";

test('check if cards are rendering', ()=>{
    axios.get(`http://localhost:5000/api/players`)
  .then( response => {
    const {getByTestId} = render(<Cards data={response.data}/>)
    for(let i=0; i<100; i++){
        getByTestId(i)
    }
  })
  .catch(error => {
    console.log("No data recieved", error)
});
    
})