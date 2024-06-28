import React from 'react'
import Trophy from '../../assets/trophy.png'
import Badge from '../../assets/badge.png'
import './Achieve.css'

const Achieve = () => {
  return (
    <div className='achieve'>
      <div className='achieve-title'>
        <h2>Achievements</h2>
      </div>
      <div className='achieve-content'>
        <div className='a-content1'>
          <img src={Trophy} alt='trophy'></img>
          <h3>IIT BOMBAY MAPATHON-2023</h3>
          <h4>WINNER</h4>
        </div>
        <div className='a-content2'>
          <img src={Badge} alt='badge'></img>
          <h3>MSME WOMENS HACKATHON</h3>
          <h4>FINALIST</h4>
        </div>
        <div className='a-content3'>
          <img src={Badge} alt='badge'></img>
          <h3>SMART INDIA HACKATHON</h3>
          <h4>COLLEGE FINALIST</h4>
        </div>
      </div>
    </div>
  )
}

export default Achieve
