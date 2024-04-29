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
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
            height: "3rem",
            width: "3rem",
            fontSize: "2rem",
            lineHeight: "0",
            color: "#fff",
            cursor: "pointer",
            border: "none",
            borderRadius: "10px",
          }}
          className={styles.btnScroll}
          onClick={desplazar}
        >
          <BsArrowBarUp />
        </button>
      )}
    </div>
  );
}
