import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer"
import TipoMenu from "./components/TipoMenu";
import HorarioRestaurante from "./components/HorarioRestaurante";
import MenuMobile from "./components/MenuMobile";
//import NavbarMobile from "./components/NavbarMobile";
import Mensaje from "./components/Mensaje";
import CarouselMenu from "./components/CarouselMenu"


export default function App() {

  return (
    <>
      <Navbar/> 
      <Footer/> 
      <Card/>
      <TipoMenu/> 
      <HorarioRestaurante/>
      <Mensaje/>
      <CarouselMenu/> 
      <MenuMobile/>
      {/* <NavbarMobile/> */}
    </>
  )
}


