import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Hello World👾',
      "I'm Suprija Devi S",
      "I'm a FullStack Developer",
      'Also a UI/UX Designer'
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className='home' id='homee'>
      <div className='home-content'>
        <span>{text}</span>
        <span><Cursor cursorStyle='|' /></span>

        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/suprija-devi-s-5aa06625a/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
          <a href='https://github.com/SuprijaDevi/' target='_blank' rel='noreferrer'><FaGithub /></a>
          <a href='mailto:someone@example.com'><FaEnvelope /></a>
          <a href='https://www.instagram.com/suprija?igsh=MWI2cGQyazVhdmoyaA==' target='_blank' rel='noreferrer'><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
