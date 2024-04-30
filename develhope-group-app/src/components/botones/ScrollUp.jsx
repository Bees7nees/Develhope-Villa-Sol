import { useEffect, useState } from "react";
import styles from "./ScrollUp.module.css";
import { BsArrowBarUp } from "react-icons/bs";

export default function ScrollUp() {
  const [scrollup, setscrollup] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscrollup(true);
      } else setscrollup(false);
    });
  }, []);

  const desplazar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrollup && (
        <button
          className={styles.btnScroll}
          onClick={desplazar}
        >
          <BsArrowBarUp />
        </button>
      )}
    </div>
  );
}
