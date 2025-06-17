import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import './HeroSection.css';

const HeroSection = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    resizeCanvas();
  
    const stars = Array(100).fill().map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
  
        s.x += s.dx;
        s.y += s.dy;
  
        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
      });
  
      requestAnimationFrame(animate);
    };
  
    animate();
    window.addEventListener('resize', resizeCanvas);
  
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default HeroSection;
