import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      {/* <img src="" alt="theme" className="toggle-icon"></img> */}
    </div>
  )
}

export default Navbar;