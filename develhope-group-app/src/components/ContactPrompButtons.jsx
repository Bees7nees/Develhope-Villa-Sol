import { CancelButton } from "./CancelButton";
import { SubmitButton } from "./SubmitButton";
import classes from "./ContactPrompButtons.module.scss";

export const ContactPrompButtons = () => {
    return (
        <div className={classes["button"]}>
            <CancelButton />
            <SubmitButton />
        </div>
    );
}