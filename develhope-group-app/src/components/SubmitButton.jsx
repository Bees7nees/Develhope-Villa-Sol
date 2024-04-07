import classes from "../styles/SubmitButton.module.scss";

export const SubmitButton = () => {
  console.log("Rendering SubmitButton");

  return (
    <button className={classes["submit-button"]}>
      <div className={classes["text-wrapper"]}>SUBMIT</div>
    </button>
  );
};

