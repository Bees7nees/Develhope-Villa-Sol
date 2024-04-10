import styles from '../styles/BookingMenu.module.scss';

export default function BookingMenu(){
    return (
        <div className={styles.bookingMenuDiv}>
            <div className={styles.bookingArrive}>
                <div className={styles.iconCalendarDiv}>
                <img src="../../assets/Icon_ Calendar.png" className={styles.iconCalendar}/>
                </div>
                <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>LLEGADA</p>
                <p className={styles.normalTextBooking}>21 ABRIL 2024</p>
                </div>
            </div>
            <div className={styles.arrowBooking}>
            <div className={styles.iconCalendarDiv}>
                <img src="../../assets/Icon_ Arrow.png" className={styles.iconArrow}/>
                </div>
             </div>
            <div className={styles.bookingLeft}>
            <div className={styles.iconCalendarDiv}>
            <img src="../../assets/Icon_ Calendar.png" className={styles.iconCalendar}/>
            </div>
           <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>SALIDA</p>
                <p className={styles.normalTextBooking}>22 ABRIL 2024</p>
                </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.bookingNight}>
            <div className={styles.iconSleepDiv}>
                <img src="../../assets/Icon_ Sleep.png" className={styles.iconSleep}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>NOCHES</p>
                <p className={styles.normalTextBooking}>1 NOCHE</p>
                </div>
            </div>
            <div className={styles.divideLine}></div>
            <div className={styles.hosts}>
            <div className={styles.iconUserpDiv}>
                <img src="../../assets/User.png" className={styles.iconSleep}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>HUÉSPEDES</p>
                <p className={styles.normalTextBooking}>2 ADULTOS + 1 NIÑO</p>
            </div>
            </div>
            <div className={styles.divideLine}></div>
            
            <div className={styles.coupon}>
            <div className={styles.iconDiscountpDiv}>
                <img src="../../assets/Discount.png" className={styles.iconDiscount}/>
            </div>
            <div className={styles.textDivBookingMenu}>
                <p className={styles.subtitle}>CUPÓN</p>
                <input type="text" className={styles.inputCoupon}/>
                </div>
            </div>
            <div className={styles.checkButton}>
            <img src="../../assets/Icon_ Bell.png" className={styles.iconBell}/>
            </div>
        </div>
    )
}