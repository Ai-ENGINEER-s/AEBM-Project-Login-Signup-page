// Navbar.js

import React from 'react';
import '../styles-of-components/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Rechercher" className="search-input" />
      </div>
    </div>
  );
};

export default Navbar;
