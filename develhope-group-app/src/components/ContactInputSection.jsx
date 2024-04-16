import { ContactEmailPrompt } from "./ContactEmailPrompt";
import { ContactNamePrompt } from "./ContactNamePrompt";
import classes from "../Styles/ContactInputSection.module.scss";

export function ContactInputSection () {
    return (
        <div className={classes["input-section"]}>
            <ContactNamePrompt />
            <ContactEmailPrompt />
        </div>
    )
}