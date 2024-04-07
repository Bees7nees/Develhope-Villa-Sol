import classes from "../styles/ContactNamePrompt.module.scss";

export function ContactNamePrompt() {
  return (
    <div className={classes["name-input"]}>
      <div className={classes["name"]}>Name</div>
      <div className={classes["enter-username-placeholder"]}>
        <div className={classes["label-bg"]}></div>
        <div className={classes["content"]}>
          <div className={classes["icons"]}>
            <div className={classes["ellipse-10"]}></div>
            <div className={classes["ellipse-11"]}></div>
            <div className={classes["ellipse-9"]}></div>
          </div>
          <div className={classes["enter-username"]}>|</div>
        </div>
      </div>
    </div>
  );
}
