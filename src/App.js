import './App.css'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { useState } from 'react'
import Spinner from './Components/Spinner/Spinner'
import HeroSection from './Components/HeroSection/HeroSection'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <Spinner setLoading={setLoading} />
      ) : (
        <>
          <HeroSection />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App



