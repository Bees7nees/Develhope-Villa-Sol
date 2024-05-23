import * as React from "react";
import styles from "../Styles/Galery.module.css";
import Button from "../Components/Buttons";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import azotea from "../Assets/Img/azotea.jpg";
import bath from "../Assets/Img/bath.jpg"
import eventsroom from "../Assets/Img/eventsroom.jpg"
import lobby2 from "../Assets/Img/lobby2.jpg"
import lobby3 from "../Assets/Img/lobby3.jpg"
import lobby4 from "../Assets/Img/lobby4.jpg"
import outside from "../Assets/Img/outside.jpg"
import out2 from "../Assets/Img/out2.jpg"
import out3 from "../Assets/Img/out3.jpg"
import out4 from "../Assets/Img/out4.jpg"
import outbeds from "../Assets/Img/outbeds.jpg"
import room2 from "../Assets/Img/room2.jpg"
import room3 from "../Assets/Img/room3.jpg"
import room4 from "../Assets/Img/room4.jpg"
import room5 from "../Assets/Img/room5.jpg"
import roomstandard from "../Assets/Img/roomstandard.jpg"
import spa1 from "../Assets/Img/spa1.jpg"
import swim from "../Assets/Img/swim.jpg"
import vippool from "../Assets/Img/vippool.jpg"
import vistaarriba from "../Assets/Img/vistaarriba.jpg"
import vistas from "../Assets/Img/vistas.jpg"
import vistas2 from "../Assets/Img/vistas2.jpg"
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";
import { Zoom, Fullscreen } from "yet-another-react-lightbox/plugins";

export default function Galery() {

    const context = useContext(Context);

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <h1 className={styles.titulo}>
                <FormattedMessage id="gallery"/>
            </h1>
            <div className="galery-button"><Button type="blue" label="Abrir Galería completa" onClick={() => setOpen(true)} /></div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: azotea },
                    { src: bath },
                    { src: eventsroom },
                    { src: lobby2 },
                    { src: lobby3 },
                    { src: lobby4 },
                    { src: outside },
                    { src: out2 },
                    { src: out3 },
                    { src: out4 },
                    { src: outbeds },
                    { src: room2 },
                    { src: room3 },
                    { src: room4 },
                    { src: room5 },
                    { src: roomstandard },
                    { src: spa1 },
                    { src: swim },
                    { src: vippool },
                    { src: vistaarriba },
                    { src: vistas },
                    { src: vistas2 }
                ]}
                plugins={[Zoom, Fullscreen]}
                zoom={{
                    maxZoomPixelRatio: 2,
                    zoomInMultiplier: 10,
                    doubleTapDelay: 300,
                    doubleClickDelay: 300,
                    doubleClickMaxStops: 2,
                    keyboardMoveDistance: 50,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true,
                }}
            />

            <div className="gal-imgs">
                <img src={azotea} />
                <img src={vistas} />
                <img src={out4} />
                <img src={lobby2} />
                <img src={outside} />
                <img src={spa1} />
            </div>
        </>
    );
}    