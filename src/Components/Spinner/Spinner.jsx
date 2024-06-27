import React, { useEffect } from 'react'
import './Spinner.css'
import { PacmanLoader } from 'react-spinners';

const Spinner = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="spinner">
        <h2>import suprija.portfolio.* </h2>
        <PacmanLoader color='#2450ef' size={25} />
    </div>
  );
};

export default Spinner
