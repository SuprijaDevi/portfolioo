import React from 'react';
import My_Photo from '../../assets/my photo.jpg';
import Resume from '../../assets/SUPRIJA_DEVI_RESUME.pdf';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiCplusplus, SiMysql, SiTestinglibrary, SiAgile, SiThealgorithms } from 'react-icons/si';
import './About.css';

const About = () => {
  return (
    <div className='about' id='aboutt'>
      <div className='about-title'>
        <h2>About me</h2>
      </div>
      <div className='row'>
        <div className='img-box'>
          <img src={My_Photo} alt='about img'/>
          <div className='resume-box'>
            <a href={Resume} download>My Resume📄</a>
          </div>
        </div>
        <div className='about-text'>
          <p>
            As a final year at Sri Krishna College of Technology (SKCT) studying Information Technology, 
            I am deeply passionate about pursuing creative roles within the design industry. I am driven by 
            a strong desire to combine my technical knowledge with artistic flair to create innovative and visually appealing solutions.
            My focus is on honing my skills in Fullstack development, where I engage with both frontend 
            and backend technologies to build comprehensive and dynamic applications. Java programming specifically 
            intrigues me due to its versatility, robustness, and widespread use in the software development realm.
          </p>

          <h3 className='tab-title'>Education</h3>
          <div className='education-content'>
            <ul>
              <li>📍Chinmaya Vidyalaya (2020 - 24)</li>
              <li>📍Sri Krishna College of Technology (2022 - 26)</li>
            </ul>
          </div>

          <h3 className='tab-title'>Skills</h3>
          <div className='skills'>
            <div className='skill-item'><FaHtml5 style={{ color: '#e44d26' }} className='icon' /> HTML</div>
            <div className='skill-item'><FaCss3Alt style={{ color: '#264de4' }} className='icon' /> CSS</div>
            <div className='skill-item'><FaBootstrap style={{ color: '#7911f4' }} className='icon' /> Bootstrap</div>
            <div className='skill-item'><FaReact style={{ color: '#61DBFB' }} className='icon' /> React.js</div>
            <div className='skill-item'><SiMysql style={{ color: '#00758f' }} className='icon' /> SQL</div>
            <div className='skill-item'><SiSpringboot style={{ color: '#6DB33F' }} className='icon' /> Spring Boot</div>
            <div className='skill-item'><SiCplusplus style={{ color: '#004482' }} className='icon' /> C++</div>
            <div className='skill-item'><FaJava style={{ color: '#f89820' }} className='icon' /> Java</div>
            <div className='skill-item'><SiThealgorithms style={{ color: '#f0db4f' }} className='icon' /> DSA</div>
            {/* <div className='skill-item'><SiAgile className='icon' /> Agile</div> */}
            <div className='skill-item'><SiTestinglibrary style={{ color: '#e3342f' }} className='icon' /> Testing</div>
            <div className='skill-item'><FaAws style={{ color: '#FF9900' }} className='icon' /> AWS</div>
          </div>

          <h3 className='tab-title'>Coding platform</h3>
          <div className='practice'>
            <div className='practice-item'>
              <a href='https://www.naukri.com/code360/home' target='_blank' rel='noopener noreferrer'>Coding Ninjas</a>
            </div>
            <div className='practice-item'>
              <a href='https://leetcode.com/u/SuprijaDevi/' target='_blank' rel='noopener noreferrer'>Leetcode</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
