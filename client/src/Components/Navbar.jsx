import React, { useState } from 'react';
import useDarkMode from "../Hooks/useDarkMode.js";
import useBlueMode from "../Hooks/useBlueMode.js";


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [blueMode, setBlueMode] = useBlueMode();
  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const toggleBlueMode = e => {
    e.preventDefault();
    setBlueMode(!blueMode);
  };
  return (
    <nav className="navbar">
      <h1>Users</h1>
      
      <div className="toggles">

        <div className="cardContainer">
        <p>Dark Mode </p>
      <div className="dark-mode__toggle">
        <div
        data-testid="dark"
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          />
      </div>
          </div>
          <div className="cardContainer">
      <p>Blue Mode</p>
      <div className="blue-mode__toggle">
        <div
        data-testid="blue"
          onClick={toggleBlueMode}
          className={blueMode ? 'toggle toggled' : 'toggle'}
          />
      </div>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;
