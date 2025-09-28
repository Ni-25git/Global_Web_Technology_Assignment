import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Collection from './components/Collection'
import AboutUs from './components/AboutUs'
import ChooseUs from './components/ChooseUs'
import Room from './components/Room'
import Premium from './components/Premium'
import Categories from './components/Categories'
import ComfortLuxury from './components/ComfortLuxury'
import Explore from './components/Explore'
import Review from './components/Review'
import Footer from './components/Footer'
import Caption from './components/Caption'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Collection />
      <AboutUs />
      <ChooseUs />
      <Caption />
      <Room />
      <Premium />
      <Categories />
      <ComfortLuxury />
      <Explore />
      <Review />
      <Footer />
    </>
  )
}

export default App
