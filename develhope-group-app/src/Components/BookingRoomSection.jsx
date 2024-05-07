import TitulosH6 from "./TitulosH6";
import StandarRoom from '../Assets/Img/Room_Standar.jpg';
import PremiumRoom from '../Assets/Img/Room_Premium.jpg';
import SuiteRoom from '../Assets/Img/Room_Suite.png';
import styles from '../Styles/BookingRoomSection.module.css'

export default function BookingRoomSection({typeRoom, background, onClick}){
    let description= ""
    let photo = ""
    switch (typeRoom) {
        case "ESTÁNDAR":
            photo = StandarRoom;
            description =
            "Descubre la esencia del confort: relájate en nuestra habitación estándar con una cama king size y todas las comodidades para una estancia inolvidable.";
          break;
        case "PREMIUN":
            photo = PremiumRoom;
            description =
            "Eleva tu experiencia de hospedaje: disfruta de un nivel superior de comodidad y lujo en nuestra habitación premium, con amplio espacio y una refrescante ducha.";
         break;
        case "SUITE":
            photo = SuiteRoom;
            description =
            "Vive el lujo en su máxima expresión: déjate cautivar por nuestra suite, un espacio de ensueño donde el confort y la elegancia se encuentran.";
         break;
        default:
          break;
      }
    return(    
    <div className={styles.BookingRoomDiv} style ={{backgroundColor: background}} onClick={onClick}>
        <img className={styles.PhotoRoom} src={photo} height={230} width={340}/>
        <TitulosH6 title={`HABITACIÓN ${typeRoom}`} parrafo={description} className={styles.DescriptionRoomBooking}/>
        <TitulosH6 title={`Precio 200€`} parrafo =""/>
        </div>
        )
}