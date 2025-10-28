import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SearchBar from './Components/SearchBar'
import Work from './Components/Work'
import Choose from './Components/Choose'
import PopularStorage from './Components/PopularStorage'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

function App() {
  return(
    <>
      <Header />
      <Hero />
      <SearchBar />
      <Work />
      <Choose/>
      
      <PopularStorage />
      <Testimonial />

      <Footer />
    </>
  )
  
}

export default App
