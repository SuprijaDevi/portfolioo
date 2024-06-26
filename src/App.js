import './App.css';
import About from './Components/About/About';
import Achieve from './Components/Achievements/Achieve';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achieve />
      <Contact />
      <motion.div 
        className='cursor'
        variants={variants}
        animate="default"
      />
    </div>
  );
}

export default App;
