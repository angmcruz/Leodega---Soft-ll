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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/Login/LoginPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <SearchBar />
            <Work />
            <Choose />
            <PopularStorage />
            <Testimonial />
            <Footer />
          </>
        }
        />
        <Route path ="/Login" element ={<LoginPage />}/>
      </Routes>
    </BrowserRouter>

  )

}

export default App
