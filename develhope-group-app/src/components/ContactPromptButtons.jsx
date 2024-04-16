import { CancelButton } from "./CancelButton";
import { SubmitButton } from "./SubmitButton";
import classes from "../Styles/ContactPromptButtons.module.scss";

export const ContactPromptButtons = () => {
    return (
        <div className={classes["button"]}>
            <CancelButton />
            <SubmitButton />
        </div>
    );
}