import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarInfo from '../components/Car-info'
import Pointer from '../components/Pointer'
import Equipment from '../components/Equipment'
import SecondaryHero from '../components/Secondary-hero'
import Client from '../components/Client'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Home = () => {
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
      <Footer/>
    </div>
  )
}

export default Home
