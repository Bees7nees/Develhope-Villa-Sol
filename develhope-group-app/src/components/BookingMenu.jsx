import styles from '../Styles/BookingMenu.module.scss';
import CalendarComponent from './CalendarBooking';
import {useState, useEffect} from 'react';
export default function BookingMenu(){
    const [firstDate, setFirstDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date());
    const [nights, setNights] = useState(0);
    function updateNights() {
        const diferenciaEnMS = Math.abs(lastDate - firstDate);
            const unDiaEnMS = 1000 * 60 * 60 * 24;
            const diferenciaEnDias = Math.floor(diferenciaEnMS / unDiaEnMS);
            setNights(diferenciaEnDias + 1);
    }
    useEffect(() => {
        updateNights();
    }, [firstDate, lastDate]);

    return (
        <div className={styles.bookingMenuDiv}>
            <div className={styles.bookingArrive}>
                <div className={styles.iconCalendarDiv}>
                <img src="../Assets/Img/Icon_ Calendar.png" className={styles.iconCalendar}/>
                </div>
                <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>LLEGADA</p>
                <CalendarComponent setData={setFirstDate} />
                </div>
            </div>
            <div className={styles.arrowBooking}>
            <div className={styles.iconCalendarDiv}>
                <img src="../Assets/Img/Icon_ Arrow.png" className={styles.iconArrow}/>
                </div>
             </div>
            <div className={styles.bookingLeft}>
            <div className={styles.iconCalendarDiv}>
            <img src="../Assets/Img/Icon_ Calendar.png" className={styles.iconCalendar}/>
            </div>
           <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>SALIDA</p>
                <CalendarComponent setDate={setLastDate} />
                </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.bookingNight}>
            <div className={styles.iconSleepDiv}>
                <img src="../Assets/Img/Icon_ Sleep.png" className={styles.iconSleep}/>
            </div>
            <div>
            <div className={styles.textDivBookingMenu} >
                <p className={styles.subtitle}>NOCHES</p>
                <p className={styles.normalTextBooking}>{nights} NOCHE</p>
                
                </div>
               
            </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.hosts}>
            <div className={styles.iconUserpDiv}>
                <img src="../Assets/Img/User.png" className={styles.iconSleep}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>HUÉSPEDES</p>
                <p className={styles.normalTextBooking}>2 ADULTOS + 1 NIÑO</p>
            </div>
            </div>
            <div className={styles.divideLine}></div>
            
            <div className={styles.coupon}>
            <div className={styles.iconDiscountpDiv}>
                <img src="../Assets/Img/Discount.png" className={styles.iconDiscount}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>CUPÓN</p>
                <input type="text" className={styles.inputCoupon}/>
                </div>
            </div>
            <div className={styles.checkButton}>
            <img src="../Assets/Img/Icon_ Bell.png" className={styles.iconBell}/>
            </div>
        </div>
    )
}