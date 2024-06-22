import './App.css'
import About from './Components/About/About'
import Achieve from './Components/Achievements/Achieve'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achieve />
    </div>
  );
}

export default App
