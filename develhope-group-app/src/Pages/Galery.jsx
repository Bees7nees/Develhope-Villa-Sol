import * as React from "react";
import styles from "../Styles/Galery.module.css";
import Button from "../Components/Buttons";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function Galery() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <h1>Galería de Fotos de nuestro Hotel</h1>
            <Button type="blue" label="Open Lightbox" onClick={() => setOpen(true)} />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "../Assets/Img/azotea.jpg" },
                    { src: "../Assets/Img/bath.jpg" },
                    { src: "../Assets/Img/eventsroom.jpg" },
                    { src: "../Assets/Img/lobby.jpg" },
                    { src: "../Assets/Img/lobby2.jpg" },
                    { src: "../Assets/Img/lobby3.jpg" },
                    { src: "../Assets/Img/lobby4.jpg" },
                    { src: "../Assets/Img/outside.jpg" },
                    { src: "../Assets/Img/out2.jpg" },
                    { src: "../Assets/Img/out3.jpg" },
                    { src: "../Assets/Img/out4.jpg" },
                    { src: "../Assets/Img/outbeds.jpg" },
                    { src: "../Assets/Img/room2.jpg" },
                    { src: "../Assets/Img/room3.jpg" },
                    { src: "../Assets/Img/room4.jpg" },
                    { src: "../Assets/Img/room5.jpg" },
                    { src: "../Assets/Img/roomstandard.jpg" },
                    { src: "../Assets/Img/spa1.jpg" },
                    { src: "../Assets/Img/swim.jpg" },
                    { src: "../Assets/Img/vippool.jpg" },
                    { src: "../Assets/Img/vistaarriba.jpg" },
                    { src: "../Assets/Img/vistas.jpg" },
                    { src: "../Assets/Img/vistas2.jpg" }
                ]}
            />
        </>
    );
}