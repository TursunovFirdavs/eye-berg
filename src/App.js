import './App.css';
import CarInfo from './components/Car-info';
import Equipment from './components/Equipment';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pointer from './components/Pointer';
import SecondaryHero from './components/Secondary-hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pointer/>
      <CarInfo/>
      <Equipment/>
      <SecondaryHero/>
    </div>
  );
}

export default App;
