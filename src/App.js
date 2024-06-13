import './App.css';
import CarInfo from './components/Car-info';
import Client from './components/Client';
import Equipment from './components/Equipment';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pointer from './components/Pointer';
import SecondaryHero from './components/Secondary-hero';
import Map from './components/Map';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pointer/>
      <CarInfo/>
      <Equipment/>
      <SecondaryHero/>
      <Client/>
      <Map/>
    </div>
  );
}

export default App;
