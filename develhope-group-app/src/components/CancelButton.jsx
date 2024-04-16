import classes from "../Styles/CancelButton.module.scss";

export const CancelButton = () => {
  return (
    <button className={classes["cancel-button"]}>
      <div className={classes["text-wrapper"]}>Cancel</div>
    </button>
  );
};
