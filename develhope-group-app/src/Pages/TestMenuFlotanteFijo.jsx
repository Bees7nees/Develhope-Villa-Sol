import BookingMenu from "../Components/BookingMenu";
import Booking from "./Booking";
import classes from "../Styles/TestMenuFlotanteFijo.module.css";

const MenuFlotanteFijo = () => {
  return (
    <div>
      <Booking />
      <section className={classes.contenedor}>
        <BookingMenu className={classes.menu} />
      </section>
    </div>
  );
};

export default MenuFlotanteFijo;
