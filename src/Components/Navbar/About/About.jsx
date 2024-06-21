import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='section-title'>
        <h2>About me</h2>
      </div>
      <div className='row'>
        <div className='img-box'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtmS_THpd3b4YgklDGLB5rg66788rRKk97sNee5YoiAwL4JoiPq_IHcgkIrr8CpgNdIY&usqp=CAU' alt='about img' />
          <div className='resume-box'>
            <a href='src\assets\SUPRIJA DEVI S RESUME.pdf' download>My Resume</a>
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
          <h3>Skills</h3>
          <div className='skills'>
            <div className='skill-item'>html</div>
            <div className='skill-item'>css</div>
            <div className='skill-item'>React js</div>
            <div className='skill-item'>sql</div>
            <div className='skill-item'>Java</div>
            <div className='skill-item'>C++</div>
            <div className='skill-item'>dsa</div>
            <div className='skill-item'>agile</div>
            <div className='skill-item'>bootstrap</div>
            <div className='skill-item'>springboot</div>
            <div className='skill-item'>testing</div>
            <div className='skill-item'>aws</div>
          </div>
          <h3>Coding platform</h3>
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

export default About;