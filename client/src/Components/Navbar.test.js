import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from "./Navbar.jsx";

test('Are toggles there?', () =>{
    //arrange
    const {getByTestId} = render (<Navbar />);

    //Assert
    getByTestId('dark');
    getByTestId('blue');
})


test('Toggles can be clicked', () =>{
    //arrange
    const {getByTestId} = render (<Navbar />);
    const dark = getByTestId('dark');
    const blue =getByTestId('blue');

    //act
    fireEvent.click(dark)
    fireEvent.click(blue)
})
