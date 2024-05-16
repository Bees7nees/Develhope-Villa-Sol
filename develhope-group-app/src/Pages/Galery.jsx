import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
            Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "/image1.jpg" },
                    { src: "/image2.jpg" },
                    { src: "/image3.jpg" },
                ]}
            />
        </>
    );
}