import "../src/Styles/App.css";
import { Routes, Route ,useLocation} from "react-router-dom";
import TermsConditions from "./Pages/TermsConditions";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Dining from "./Pages/Dining";
import { Home } from "./Pages/Home";
import { ContactPrompt } from "./Components/ContactPrompt";
import ScrollUp from "./Components/botones/ScrollUp";
import NotFound from "./Components/NotFound";
import SpaPage from "./Pages/Spa";
import Banner from "./Components/Banner";
import BookingMenu from "./Components/BookingMenu";
// import { GlobalProvider } from './GlobalContext';
import Rooms from "./Pages/Rooms";
import NavbarMobile from "./Components/NavbarMobile";
import { useEffect, useState } from "react";
import Booking from "./Pages/Booking"
import CookiesBanner from "./Components/Cookies.jsx";//NUEVO*****
import Login from "./Pages/Login";//NUEVO*****
import BotonLogin from "./Components/BotonLogin";//NUEVO*****
import { UserGlobalProvider } from "./globalvariable/Usuarioglobal.jsx";//NUEVO****

export default function App() {
// NO MOSTRAR BOTON_LOGIN EN PAGINA LOGIN
  const location = useLocation();
  const showLogin = !location.pathname.includes('/Login');
  const showBanner = !location.pathname.includes('/habitaciones');

  // NO MOSTRAR BOTON_LOGIN EN PAGINA LOGIN

  
    const [showNavbarMobile, setShowNavbarMobile] = useState(false)

  useEffect(() => {
    const handleMobile = () => {
      setShowNavbarMobile(window.innerWidth <= 680); //no pararle al número, es mi cinta scotch :D
    };

    handleMobile(); 

    window.addEventListener('resize', handleMobile);

    return () => {
        window.removeEventListener('resize', handleMobile);
    };
}, []);

  return (
    <UserGlobalProvider> 
    <>
      {showNavbarMobile && <NavbarMobile/>} 
      <CookiesBanner/>
      {/* {showBotonLogin && <BotonLogin/>}  */}
      {showLogin &&   <Navbar /> }
      {showLogin &&    <BookingMenu /> }
      {showBanner &&       <Banner /> }
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Habitaciones" element={<Rooms />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/restauranteSunset" element={<Dining />} />
        <Route path="/test" element={<ContactPrompt />} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Galeria" element={<Galery />} />
      </Routes>
      {showLogin &&   <Footer />}
    </>
    </UserGlobalProvider> 
  );
}
