import AboutUs from "./Pages/AboutUs";
import Booking from "./Pages/Booking";
import CookiesBanner from "./Components/Cookies.jsx"; //NUEVO*****
import Dining from "./Pages/Dining";
import Footer from "./Components/Footer";
import Galery from "./Pages/Galery.jsx"; //NUEVO*****
import Home from "./Pages/Home";
import Login from "./Pages/Login"; //NUEVO*****
import Navbar from "./Components/Navbar";
import NavbarMobile from "./Components/NavbarMobile";
import Rooms from "./Pages/Rooms";
import ScrollUp from "./Components/botones/ScrollUp";
import SpaPage from "./Pages/Spa";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserGlobalProvider } from "./globalvariable/Usuarioglobal.jsx";
import { useEffect, useState } from "react";
import { MenuFlotanteFijo } from "./Pages/TestMenuFlotanteFijo.jsx";
import { Banner } from "./Components/Banner";
import { BookingMenu } from "./Components/BookingMenu";
import { NotFound } from "./Components/NotFound";
import { TermsConditions } from "./Pages/TermsConditions";
import "../src/Styles/App.css";

export default function App() {
  // NO MOSTRAR BOTON_LOGIN EN PAGINA LOGIN
  const location = useLocation();
  const showLogin = !location.pathname.includes("/Login");
  const showBanner = !location.pathname.includes("/habitaciones");

  // NO MOSTRAR BOTON_LOGIN EN PAGINA LOGIN

  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  useEffect(() => {
    const handleMobile = () => {
      setShowNavbarMobile(window.innerWidth <= 680); //no pararle al número, es mi cinta scotch :D
    };

    handleMobile();

    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <UserGlobalProvider>
      <>
        {showNavbarMobile && <NavbarMobile />}
        <CookiesBanner />
        {/* {showBotonLogin && <BotonLogin/>}  */}
        {showLogin && <Navbar />}
        {showLogin && <BookingMenu />}
        {showBanner && <Banner />}
        <ScrollUp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Habitaciones" element={<Rooms />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/Terms&Conditions" element={<TermsConditions />} />
          <Route path="/restauranteSunset" element={<Dining />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Galeria" element={<Galery />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<MenuFlotanteFijo />} />
        </Routes>
        {showLogin && <Footer />}
      </>
    </UserGlobalProvider>
  );
}
