import React from 'react';
import './Contact.css';
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <h2>Let's Collaborate, say Hello - I'm just a Message Away!</h2>
      </div>
      <div className='icons'>
        <a href="https://www.linkedin.com/in/suprija-devi-s-5aa06625a/" target="_blank" rel="noopener noreferrer" className='linked-icon'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/SuprijaDevi" target="_blank" rel="noopener noreferrer" className='git-icon'>
          <FaGithub />
        </a>
        <a href="mailto:ropotther@gmail.com" className='mail-icon'>
          <SiGmail />
        </a>
        <a href="https://www.instagram.com/_suprija_" target="_blank" rel="noopener noreferrer" className='insta-icon'>
          <AiFillInstagram />
        </a>
      </div>
    </div>
  )
}

export default Contact;
