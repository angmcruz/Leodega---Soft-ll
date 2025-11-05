import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SearchBar from './Components/SearchBar'
import Work from './Components/Work'
import Choose from './Components/Choose'
import PopularStorage from './Components/PopularStorage'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Login from './Components/login'
import Register from './Components/Register'
import PreguntaIncio1 from './Pages/Components/PreguntaInicio1'
import PreguntaInicio2 from './Pages/Components/PreguntaInicio2'
import PreguntaInicio3 from './Pages/Components/PreguntaInicio3'
import PreguntaInicio4 from './Pages/Components/PreguntaInicio4'
import PreguntaInicio5 from './Pages/Components/PreguntaInicio5'
import PreguntaInicio6 from './Pages/Components/PreguntaInicio6'
import PreguntaInicio7 from './Pages/Components/PreguntaInicio7'
import VerifyCode from './Components/VerifyCode'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/verifyCode" element={<VerifyCode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preguntainicio1" element={<PreguntaIncio1 />} />
        <Route path="/preguntainicio2" element={<PreguntaInicio2 />} />
        <Route path="/preguntainicio3" element={<PreguntaInicio3 />} />
        <Route path="/preguntainicio4" element={<PreguntaInicio4 />} />
        <Route path="/preguntainicio5" element={<PreguntaInicio5 />} />
        <Route path="/preguntainicio6" element={<PreguntaInicio6 />} />
        <Route path="/preguntainicio7" element={<PreguntaInicio7 />} />

        <Route path="/" element={
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
        } />
      </Routes>
    </Router>
  )
}

export default App
