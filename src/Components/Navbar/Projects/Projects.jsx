import React from 'react';
import './Projects.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const Projects = () => {
  return (
    <div className='project'>
      <div className='project-title'>
        <h2>Projects</h2>
      </div>
      <div className='project-cards'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  )
}

export default Projects
