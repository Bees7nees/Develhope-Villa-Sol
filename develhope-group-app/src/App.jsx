
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/About_us'
import Habitaciones from './components/Habitaciones'
import Restaurante from './components/Restaurante'
import Spa from './components/Spa'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import ErrorSearch from './components/ErrorSearch'

function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/Nosotros">Nosotros</Link>
      <Link to="/Habitaciones">Habitaciones</Link>
      <Link to="/Restaurante">Restaurante</Link>
      <Link to="/Spa">Spa</Link>
      <Link to="/Galeria">Galeria</Link>
      <Link to="/Contacto">Contacto</Link>
      <Link to="/Habitaciones">Disponibilidad</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Nosotros" element={<AboutUs />} />
        <Route path="Habitaciones" element={<Habitaciones />} />
        <Route path="Restaurante" element={<Restaurante />} />
        <Route path="Spa" element={<Spa />} />
        <Route path="Galeria" element={<Galeria />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="Disponibilidad" element={<Habitaciones />} />
        <Route path="*"  element={<ErrorSearch />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
