import styles from '../Styles/BookingMenu.module.scss';
import CalendarComponent from './CalendarBooking';
import {useState, useEffect} from 'react';
import IconCalendar from '../Assets/Img/Icon_ Calendar.png';
import IconArrow from '../Assets/Img/Icon_ Arrow.png';
import IconSleep from '../Assets/Img/Icon_ Sleep.png';
import IconUser from '../Assets/Img/User.png';
import IconDiscount from '../Assets/Img/Discount.png';
import IconBell from '../Assets/Img/Icon_ Bell.png';
import CounterHost from './CounterHost';
export default function BookingMenu({ adults, children }){
    const [firstDate, setFirstDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date());
    const [nights, setNights] = useState(0);
    const [seeCounter, setSeeCounter] = useState(false)
    function updateNights() {
        const diferenciaEnMS = Math.abs(lastDate - firstDate);
            const unDiaEnMS = 1000 * 60 * 60 * 24;
            const diferenciaEnDias = Math.floor(diferenciaEnMS / unDiaEnMS);
            setNights(diferenciaEnDias);
    }
    useEffect(() => {
        updateNights();
    }, [firstDate, lastDate]);

    return (
        <div className={styles.bookingMenuDiv}>
            <div className={styles.bookingArrive}>
                <div className={styles.iconCalendarDiv}>
                <img src={IconCalendar} className={styles.iconCalendar}/>
                </div>
                <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>LLEGADA</p>
                <CalendarComponent setDate={setFirstDate} nextDate={lastDate}/>
                </div>
            </div>
            <div className={styles.arrowBooking}>
            <div className={styles.iconCalendarDiv}>
                <img src={IconArrow} className={styles.iconArrow}/>
                </div>
             </div>
            <div className={styles.bookingLeft}>
            <div className={styles.iconCalendarDiv}>
            <img src={IconCalendar} className={styles.iconCalendar}/>
            </div>
           <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>SALIDA</p>
                <CalendarComponent setDate={setLastDate} prevDate={firstDate}/>
                </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.bookingNight}>
            <div className={styles.iconSleepDiv}>
                <img src={IconSleep} className={styles.iconSleep}/>
            </div>
            <div>
            <div className={styles.textDivBookingMenu} >
                <p className={styles.subtitle}>NOCHES</p>
                <p className={styles.normalTextBooking}>{nights} NOCHE</p>
                
                </div>
               
            </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.hosts} onClick={() => setSeeCounter(true)}>
            <div className={styles.iconUserpDiv}>
                <img src={IconUser} className={styles.iconSleep}/>
            </div>
            <div className={styles.textDivBookingMenu} >
                <p className={styles.subtitle}>HUÉSPEDES</p>
                <p className={styles.normalTextBooking}>{adults} ADULTOS + {children} NIÑOS</p>
                {seeCounter && <CounterHost /> }
                {//Puedo hacer un menu oculto que este en oculto, el padre tenga un position relative y el menu un position relative  
                //o un estado y un renderizado condicional (un estado que este en false y cuando le clicas este en true y cuando le clicas salga el componente (age>18 && age es el renderizado condicional))
                //en cupon hacer una alarma que nuestre que se ha aplicado correctamente y si no es undifined se haga un descuento base
                //Librery usesound https://www.educative.io/answers/how-to-play-sound-in-react importar el sonido mp3 con el sonido.
                }
            </div>
            </div>
            <div className={styles.divideLine}></div>
            
            <div className={styles.coupon}>
            <div className={styles.iconDiscountpDiv}>
                <img src={IconDiscount} className={styles.iconDiscount}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>CUPÓN</p>
                <input type="text" className={styles.inputCoupon}/>
                </div>
            </div>
            <div className={styles.checkButton}>
            <img src={IconBell} className={styles.iconBell}/>
            </div>
        </div>
    )
}