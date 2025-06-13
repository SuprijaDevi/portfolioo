import './App.css'
import About from './Components/About/About'
import Achieve from './Components/Achievements/Achieve'
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
          {/* <About /> */}
          {/* <Projects />
          <Achieve />
          <Contact /> */}
        </>
      )}
    </div>
  );
}

export default App

// import React from 'react'
// import CRM from './Components/CRM/crm'

// export default function App() {
//   return (
//     <div className='App'>
//       <CRM />
//     </div>
//   )
// }



