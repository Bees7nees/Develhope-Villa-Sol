import React, { useState } from "react";
import BookingMenu from "./BookingMenu";

export default function CounterHost() {
    const [counterAdult, setCounterAdult] = useState(0);
    const [counterChildren, setCounterChildren] = useState(0);
    const [showBookingMenu, setShowBookingMenu] = useState(false);

    const sumaAdult = () => {
        setCounterAdult((prevCounter) => prevCounter + 1);
    };

    const restaAdult = () => {
        if (counterAdult > 0) {
            setCounterAdult((prevCounter) => prevCounter - 1);
        }
    };

    const sumaChildren = () => {
        setCounterChildren((prevCounter) => prevCounter + 1);
    };

    const restaChildren = () => {
        if (counterChildren > 0) {
            setCounterChildren((prevCounter) => prevCounter - 1);
        }
    };

    return (
        <div>
            {showBookingMenu && <BookingMenu adults={counterAdult} children={counterChildren} />}
            <h2>Adultos: {counterAdult}</h2>
            <button onClick={sumaAdult}>+</button>
            <button onClick={restaAdult}>-</button>

            <h2>Niños: {counterChildren}</h2>
            <button onClick={sumaChildren}>+</button>
            <button onClick={restaChildren}>-</button>
        </div>
    );
}

