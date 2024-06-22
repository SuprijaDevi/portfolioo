import './App.css';
import About from './Components/Navbar/About/About';
import Home from './Components/Navbar/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Navbar/Projects/Projects'
function App() {
  return (
    <div className="App">
      <Navbar /><br></br><br></br>
      <Home /><br></br><br></br>
      <About />
      <br></br><br></br>
      <Projects />
    </div>
  );
}

export default App;
