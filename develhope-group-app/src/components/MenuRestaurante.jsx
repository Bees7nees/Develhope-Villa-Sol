import styles from "../Styles/MenuRestaurante.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import {Context} from "/src/Components/Language"
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";

export default function MenuRestaurante() {

  const context = useContext(Context);


  return (
    <div className={styles.restaurantDiv}>
      <div className={styles.menuTitleDiv}>
        <h1 className={styles.menuTitle}>
          <FormattedMessage id="menus"/>
        </h1>
      </div>
      <div className={styles.bodyRestaurantMenu}>
        <div className={styles.column}>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>
              <FormattedMessage id="desayuno"/>
            </h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>
                <FormattedMessage id="principal"/>
            </h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>
              <FormattedMessage id="postres"/>
            </h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>BRUNCH/BUFFET</h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>
              <FormattedMessage id="merienda"/>
            </h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.row}>
            <h2 className={styles.menuTypes}>
              <FormattedMessage id="bar"/>
            </h2>
            <BsArrowRightCircle className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
