import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carosuel from './components/Carosuel';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carosuel/>
      <Products/>
    </div>
  );
}

export default App;
