import React from 'react'
import { ReactTyped } from 'react-typed';
import Sphere from 'E:/portfolioo/src/assets/1-unscreen.gif';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <img src={Sphere} className="gif-image" alt="Animated sphere"></img>
      <div className='animated-typing'>
        <ReactTyped
          strings={[
            "I'm SUPRIJA DEVI S",
            "I'm a Frontend Developer.",
            "I'm an Enthusiastic Learner.",
          ]}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
}

export default Home;