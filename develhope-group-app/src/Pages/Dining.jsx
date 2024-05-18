import HorarioRestaurante from "../Components/HorarioRestaurante"
import CarouselMenu from "../Components/CarouselMenu"
import TipoMenu from "../Components/TipoMenu"
import DividingLines from "../Components/DividingLines"
import TitleDescription from "../Components/TitleDescription"
import Mensaje from "../Components/Mensaje"
import classes from "../Styles/Home.module.scss";
import BookingMenu from "../Components/BookingMenu"
import MenuMobile from "../Components/MenuMobile"
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";


export default function Dining() {

    const context = useContext(Context);

    return (
        <>
        <BookingMenu />
            <TitleDescription title={<FormattedMessage id="sunset"/>} description={<FormattedMessage id="sunset_descripcion"/>}/> 
            <TipoMenu/>
            <div className={classes["divisor"]}>
                <DividingLines color={"#213242"} length={"1rem"} />
                <DividingLines color={"#B08912"} length={"1rem"} />
            </div>
            <MenuMobile/>  
            <HorarioRestaurante/>
            <div className={classes["divisor"]}>
                <DividingLines color={"#213242"} length={"1rem"} />
                <DividingLines color={"#B08912"} length={"1rem"} />
            </div>
            <CarouselMenu/>
            <Mensaje/>
        </>
    )
}
