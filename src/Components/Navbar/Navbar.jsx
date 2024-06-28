import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><a href='#homee'>🏡Home</a></li>
        <li><a href='#aboutt'>💁About me</a></li>
        <li><a href='#projectt'>🗂️Projects</a></li>
        <li><a href='#contactt'>📞Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar