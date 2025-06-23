import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <span className='nav-name'>Suprija Devi</span>

      <div className="toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '⤫' : '☰'}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => setMenuOpen(false)}><a href='#homee'>Home</a></li>
        <li onClick={() => setMenuOpen(false)}><a href='#aboutt'>About me</a></li>
        <li onClick={() => setMenuOpen(false)}><a href='#projectt'>Projects</a></li>
        <li onClick={() => setMenuOpen(false)}><a href='#contactt'>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
