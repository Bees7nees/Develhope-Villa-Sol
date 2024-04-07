import classes from "../styles/ContactEmailPrompt.module.scss";

export function ContactEmailPrompt() {
  return (
    <div className={classes["email-input"]}>
      <div className={classes["email-address"]}>Email Address</div>
      <div className={classes["enter-address-placeholder"]}>
        <div className={classes["rectangle-8"]}></div>
        <div className={classes["content"]}>
          <svg
            className={classes["email"]}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="17.9"
              cy="18.0666"
              r="17.0312"
              stroke="#8AA8C4"
              strokeWidth="1.3625"
            />
            <rect
              x="8.70293"
              y="11.5947"
              width="18.3938"
              height="12.9438"
              rx="1.02187"
              fill="#D8E2EB"
              stroke="#8AA8C4"
              strokeWidth="0.68125"
            />
            <path
              d="M17.697 18.3401C17.8175 18.4296 17.9825 18.4296 18.103 18.3401L26.3627 12.2089C26.4807 12.1213 26.5292 11.968 26.4831 11.8285C26.437 11.689 26.3066 11.5947 26.1597 11.5947L9.64028 11.5947C9.49336 11.5947 9.36299 11.689 9.31687 11.8285C9.27075 11.968 9.31928 12.1213 9.43726 12.2089L17.697 18.3401Z"
              fill="#D8E2EB"
              stroke="#8AA8C4"
              strokeWidth="0.68125"
              strokeLinejoin="round"
            />
          </svg>
          <div className={classes["enter-email-address"]}>Enter your email</div>
        </div>
      </div>
    </div>
  );
}
