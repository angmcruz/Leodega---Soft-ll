import { useState } from 'react'

import './App.css'
import Header from './Components/header'
import Hero from './Components/Hero'
import SearchBar from './Components/SearchBar'
import Work from './Components/Work'
import Choose from './Components/Choose'

function App() {
  return(
    <>
      <Header />
      <Hero />
      <SearchBar />
      <Work />
      <Choose/>
    </>
  )
  
}

export default App
