import { ContactInputSection } from "./ContactInputSection";
import { ContactNavSection } from "./ContactNavSection";
import { ContactPromptButtons } from "./ContactPromptButtons";
import classes from "../styles/ContactPrompt.module.scss";

export function ContactPrompt() {
  return (
    <section className={classes["contact-panel"]}>
      <div className={classes["contact-prompt"]}>
        <ContactNavSection />
        <ContactInputSection />
        <ContactPromptButtons />
      </div>
    </section>
  );
}
