import styles from '../Styles/MenuRestaurante.module.scss';

export default function MenuRestaurante(){
    return(
        <div className={styles.restaurantDiv}>
            <div className={styles.menuTitleDiv}>
                <h1 className={styles.menuTitle}>MENUS</h1>
            </div>
            <div className={styles.bodyRestaurantMenu}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <h2 className={styles.menuTypes}>DESAYUNO</h2>
                        <img src="../../Assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
                    </div>
                <div className={styles.row}> 
                    <h2 className={styles.menuTypes}>MENÚ PRINCIPAL</h2>
                    <img src="../../assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
               </div>
               <div className={styles.row}>
                    <h2 className={styles.menuTypes}>POSTRES</h2>
                    <img src="../../assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
                    </div>
                    </div>
                    <div className={styles.column}>
                    <div className={styles.row}>
                    <h2 className={styles.menuTypes}>BRUNCH/BUFFET</h2>
                    <img src="../../assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
                    </div>
                    <div className={styles.row}>
                    <h2 className={styles.menuTypes}>BUFFET/MERIENDA</h2>
                    <img src="../../assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
                    </div>
                    <div className={styles.row}>
                    <h2 className={styles.menuTypes}>BAR</h2>
                    <img src="../../assets/arrow_restaurant.png" alt="Arrow to the session" width={25} height={23}/>
                    </div>
                    </div>
            </div>
        </div>
    )
}