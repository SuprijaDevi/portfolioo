import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <h2>Let's Collaborate, say Hello - I'm just a Message Away!</h2>
      </div>
      <div className='icons'>
        <div className='linkedin-icon>'> <FaLinkedin /> </div>
        <div className='git-icon'> <FaGithub /> </div>
        <div className='mail-icon'> <SiGmail /> </div>
        <div className='insta-icon'> <FaInstagram /> </div>
      </div>
    </div>
  )
}

export default Contact
