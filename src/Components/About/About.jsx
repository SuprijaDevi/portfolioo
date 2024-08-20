import React, { useState } from 'react'
import My_Photo from '../../assets/my photo.jpg'
import Resume from '../../assets/SUPRIJA DEVI S RESUME.pdf'
import './About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tabName) => {
    setActiveTab(activeTab === tabName ? '' : tabName);
  };

  return (
    <div className='about' id='aboutt'>
      <div className='about-title'>
        <h2>About me</h2>
      </div>
      <div className='row'>
        <div className='img-box'>
          <img src={My_Photo} alt='about img'/>
          <h3>SUPRIJA DEVI S</h3>
          <div className='resume-box'>
            <a href={Resume} download>My Resume</a>
          </div>
        </div>
        <div className='about-text'>
          <p>
            As a sophomore at Sri Krishna College of Technology (SKCT) studying Information Technology, 
            I am deeply passionate about pursuing creative roles within the design industry. I am driven by 
            a strong desire to combine my technical knowledge with artistic flair to create innovative and visually appealing solutions.
            My focus is on honing my skills in Fullstack development, where I engage with both frontend 
            and backend technologies to build comprehensive and dynamic applications. Java programming specifically 
            intrigues me due to its versatility, robustness, and widespread use in the software development realm.
          </p>
          <h3 onClick={() => handleTabClick('education')} className='tab-title'>Education</h3>
          {activeTab === 'education' && (
            <div className='tab-content'>
              <ul>
                <li>Chinmaya Vidyalaya(2020 - 24)</li>
                <li>Sri Krishna College of Technology(2022 - 26)</li>
              </ul>
            </div>
          )}
          <h3 onClick={() => handleTabClick('skills')} className='tab-title'>Skills</h3>
          {activeTab === 'skills' && (
            <div className='skills'>
              <div className='skill-item'>HTML</div>
              <div className='skill-item'>CSS</div>
              <div className='skill-item'>Bootstrap</div>
              <div className='skill-item'>React js</div>
              <div className='skill-item'>SQL</div>
              <div className='skill-item'>Spring Boot</div>
              <div className='skill-item'>C++</div>
              <div className='skill-item'>Java</div>
              <div className='skill-item'>DSA</div>
              <div className='skill-item'>Agile</div>
              <div className='skill-item'>Testing</div>
              <div className='skill-item'>AWS</div>
            </div>
          )}
          <h3 className='tab-title'>Coding platform</h3>
          <div className='practice'>
            <div className='practice-item'>
              <a href='https://www.naukri.com/code360/home' target='_blank' rel='noopener noreferrer'>Coding Ninjas</a>
            </div>
            <div className='practice-item'>
              <a href='https://leetcode.com/problemset/' target='_blank' rel='noopener noreferrer'>Leetcode</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
