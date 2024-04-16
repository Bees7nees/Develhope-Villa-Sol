import { ContactInputSection } from "./ContactInputSection";
import { ContactNavSection } from "./ContactNavSection";
import { ContactPromptButtons } from "./ContactPromptButtons";
import { ContactCommentSection } from "./ContactCommentSection";
import classes from "../Styles/ContactPrompt.module.scss";

export function ContactPrompt() {
  return (
    <section className={classes["contact-panel"]}>
      <div className={classes["contact-prompt"]}>
        <ContactNavSection />
        <ContactInputSection />
        <ContactCommentSection />
        <ContactPromptButtons />
      </div>
    </section>
  );
}
