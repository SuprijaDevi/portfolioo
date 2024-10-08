import React, { useEffect } from 'react'
import './Spinner.css'
import { PacmanLoader } from 'react-spinners';

const Spinner = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="spinner">
        <h2>import suprija.portfolio.* </h2>
        <PacmanLoader color='#4b92f5' size={25} />
    </div>
  );
};

export default Spinner
