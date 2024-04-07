import classes from "../styles/ContactNavSection.module.scss";

export function ContactNavSection() {
  return (
    <div className={classes["contact-prompt-header"]}>
      <svg
        className={classes["expand-more"]}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1525 8.39911L12.5625 12.9791L7.9725 8.39911L6.5625 9.80911L12.5625 15.8091L18.5625 9.80911L17.1525 8.39911Z"
          fill="#1C1B1F"
        />
      </svg>
      <div className={classes["contact-title"]}>
        <div className={classes["contact"]}>Contact</div>
      </div>
    </div>
  );
}
