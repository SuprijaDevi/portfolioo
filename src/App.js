import './App.css';
import About from './Components/Navbar/About/About';
import Home from './Components/Navbar/Home/Home';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
