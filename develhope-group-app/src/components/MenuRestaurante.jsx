import styles from '../styles/MenuRestaurante.module.scss';
import DividingLines from './DividingLines';

export default function MenuRestaurante(){
    return(
        <div className={styles.restaurantDiv}>
            <div className={styles.menuTitleDiv}>
                <h1 className={styles.menuTitle}>MENUS</h1>
            </div>
            <div className={styles.bodyRestaurantMenu}>
                <div className={styles.column}>
                    <div className={styles.row}> 
                    <DividingLines color="#B08912" length={361} />
                        <h2 className={styles.menuTypes}>DESAYUNO</h2>
                    </div>
                <div className={styles.row}> 
                    <DividingLines color="#B08912" length={361} />
                    <h2 className={styles.menuTypes}>MENÚ PRINCIPAL</h2>
               </div>
               <div className={styles.row}>
                    <DividingLines color="#B08912" length={361} />
                    <h2 className={styles.menuTypes}>POSTRES</h2>
                    </div>
                    </div>
                    
                    <div className={styles.column}>
                    <div className={styles.row}>
                    <DividingLines color="#B08912" length={361} />
                    <h2 className={styles.menuTypes}>BRUNCH/BUFFET</h2>
                    </div>
                    <div className={styles.row}>
                    <DividingLines color="#B08912" length={361} />
                    <h2 className={styles.menuTypes}>BUFFET/MERIENDA</h2>
                    </div>
                    <div className={styles.row}>
                    <DividingLines color="#B08912" length={361} />
                    <h2 className={styles.menuTypes}>BAR</h2>
                    </div>
                    </div>
            </div>
        </div>
    )
}
