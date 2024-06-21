import './App.css';
import About from './Components/Navbar/About/About';
import Home from './Components/Navbar/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Navbar/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <Navbar /><br></br><br></br>
      <Home /><br></br><br></br>
      <About />
      <br></br><br></br>
      <Portfolio />
    </div>
  );
}

export default App;
