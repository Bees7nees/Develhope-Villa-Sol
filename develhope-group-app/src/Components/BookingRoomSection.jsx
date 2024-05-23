import TitulosH6 from "./TitulosH6";
import StandarRoom from '../Assets/Img/Room_Standar.jpg';
import PremiumRoom from '../Assets/Img/Room_Premium.jpg';
import SuiteRoom from '../Assets/Img/Room_Suite.png';
import styles from '../Styles/BookingRoomSection.module.css'
import { GlobalContext } from "./GlobalVariable";
import React, { useContext, useState, useEffect } from 'react';

export default function BookingRoomSection({typeRoom, background, onClick}){
    let description= ""
    let photo = ""
    let finalPrecio = 1
    const { nights, numAdult, numKids, textCoupon, setFinalPrice, setCouponOK, couponOK } = useContext(GlobalContext);
    const [precio, setPrecio] = useState(0);
  
  useEffect(() => {
    let discount = 1;
    if (textCoupon === "Welcome10" || textCoupon === "Discount10") {
      discount = 0.9; 
      setCouponOK(true);
    } else {
      setCouponOK(false);
    }
    const precioAdultos = 80 * nights * numAdult;
    const precioNinos = 60 * nights * numKids;
    const precioTotal = (precioAdultos + precioNinos) * discount;

    setPrecio(precioTotal);
  }, [nights, numAdult, numKids, textCoupon, setCouponOK]);

    switch (typeRoom) {
        case "ESTÁNDAR":
            photo = StandarRoom;
            description =
            "Descubre la esencia del confort: relájate en nuestra habitación estándar con una cama king size y todas las comodidades para una estancia inolvidable.";
            finalPrecio = precio
            break;
        case "PREMIUN":
            photo = PremiumRoom;
            description =
            "Eleva tu experiencia de hospedaje: disfruta de un nivel superior de comodidad y lujo en nuestra habitación premium, con amplio espacio y una refrescante ducha.";
            finalPrecio = Math.round(precio * 1.2)
            break;
        case "SUITE":
            photo = SuiteRoom;
            description =
            "Vive el lujo en su máxima expresión: déjate cautivar por nuestra suite, un espacio de ensueño donde el confort y la elegancia se encuentran.";
            finalPrecio = Math.round(precio * 1.4)
            break;
        default:
          break;
      }
      const handleClick = () => {
        setFinalPrice(finalPrecio); // Actualizar el precio final en el contexto
        if (onClick) {
          onClick(); // Llamar a la función onClick pasada como prop
        }
      };

    return(    
    <div className={styles.BookingRoomDiv} style ={{backgroundColor: background}} onClick={handleClick}>
        <img className={styles.PhotoRoom} src={photo} height={230} width={340}/>
        <TitulosH6 title={`HABITACIÓN ${typeRoom}`} parrafo={description} className={styles.DescriptionRoomBooking}/>
        <TitulosH6 title={`Precio ${finalPrecio}€`} parrafo =""/>
        {couponOK && <p className={styles.discountText}>Descuento del 10% aplicado</p>}
        </div>
        )
}