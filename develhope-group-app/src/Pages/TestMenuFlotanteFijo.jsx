import Booking from "./Booking";
import classes from "../Styles/TestMenuFlotanteFijo.module.css";
import BookingMenu from "../Components/BookingMenu";

const MenuFlotanteFijo = () => {
  return (
    <div className={classes.page}>
      <Booking />
      <BookingMenu />
    </div>
  );
};

export default MenuFlotanteFijo;
