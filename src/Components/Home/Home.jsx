import React from 'react';
import { ReactTyped } from 'react-typed';
import Me from '../../assets/Untitled_design__3_-removebg-preview.png';
import './Home.css';

const Home = () => {
  return (
    <div className='home' id='homee'>
      <img src={Me} className="gif-image" alt="Animated sphere"></img>
      <div className='animated-typing'>
        <ReactTyped
          strings={["I'm SUPRIJA DEVI S"]}
          typeSpeed={100}
          showCursor={false}
        />
        <br />
        <ReactTyped
          strings={["3rd Year, IT Student"]}
          typeSpeed={100}
          startDelay={2000}
        />
      </div>
    </div>
  );
}

export default Home;
