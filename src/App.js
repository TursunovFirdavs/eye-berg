import './App.css';
import CarInfo from './components/Car-info';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pointer from './components/Pointer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pointer/>
      <CarInfo/>
    </div>
  );
}

export default App;
