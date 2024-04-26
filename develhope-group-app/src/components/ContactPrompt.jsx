import { useState } from "react";
import classes from "../Styles/ContactPrompt.module.scss";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import PropTypes from "prop-types";
import { useEffect } from "react";

ContactPrompt.propTypes = {
  nameInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
};

export function ContactPrompt({ nameInput, emailInput }) {
  const nameInherited = nameInput;
  const emailInherited = emailInput;

  const [formName, setNameInput] = useState(nameInherited);

  const [formEmail, setEmailInput] = useState(emailInherited);

  const [messageInput, setMessageInput] = useState("");

  const [isSent, setIsSent] = useState(false);

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  const handleMessageInput = (event) => {
    setMessageInput(event.target.value);
    console.log(messageInput);
  };

  const handlePromptSend = (event) => {
    event.preventDefault();
    setIsSent(true);
    localStorage.setItem("email", formEmail);
    localStorage.setItem("name", formName);
    localStorage.setItem("message", messageInput);
    localStorage.setItem("isSent", isSent);

    const completionTextElement = document.querySelector(
      `.${classes["prompt-completed-text"]}`
    );
    const completedPrompt = document.querySelector(
      `.${classes["contact-prompt"]}`
    );
    const canceledPrompt = document.querySelector(
      `.${classes["contact-panel"]}`
    );
    if (isSent === true) {
      console.log("hello");
      completionTextElement.style.display = "block";
      completedPrompt.style.display = "none";
      setTimeout(() => {
        canceledPrompt.style.display = "none";
      }, 3000);
    }
  };

  const handlePromptClose = (event) => {
    event.preventDefault();
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
    setIsSent(false);
    localStorage.setItem("email", formEmail);
    localStorage.setItem("name", formName);
    localStorage.setItem("message", messageInput);
    localStorage.setItem("isSent", isSent);

    const canceledPrompt = document.querySelector(
      `.${classes["contact-panel"]}`
    );

    canceledPrompt.style.display = "none";
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedName = localStorage.getItem("name");
    const savedMessage = localStorage.getItem("message");

    if (savedMessage) {
      setMessageInput(savedMessage);
    }

    if (savedEmail) {
      setEmailInput(savedEmail);
    }
    if (savedName) {
      setNameInput(savedName);
    }
  }, []);

  return (
    <section className={classes["contact-panel"]}>
      <h1 className={classes["prompt-completed-text"]}>
        Gracias y desearle unas vacaciones inolvidables. <br /> Besitos
      </h1>
      <form className={classes["contact-prompt"]}>
        <section className={classes["contact-prompt-header"]}>
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
          <h1 className={classes["contact-text"]}>Contacto</h1>
        </section>
        <section className={classes["name-input"]}>
          <div className={classes["name"]}>Información personal</div>
          <div className={classes["enter-username-placeholder"]}>
            <div className={classes["name-content"]}>
              <BsPersonCircle className={classes["icons"]} />
              <input
                type="text"
                className={classes["enter-username"]}
                placeholder="Nombre & Apellido"
                value={formName}
                onChange={handleNameInput}
              ></input>
            </div>
          </div>
        </section>
        <section className={classes["email-input"]}>
          <div className={classes["email-address"]}>Correo electrónico</div>
          <div className={classes["enter-address-placeholder"]}>
            <div className={classes["mail-content"]}>
              <BsEnvelopeAt className={classes["icons"]} />
              <input
                type="text"
                className={classes["enter-email-address"]}
                placeholder="correo@mail.com"
                value={formEmail}
                onChange={handleEmailInput}
              ></input>
            </div>
          </div>
        </section>
        <section className={classes["comments"]}>
          <textarea
            type="text"
            className={classes["add-your-comments"]}
            placeholder="Añadir comentario..."
            onChange={handleMessageInput}
            value={messageInput}
          ></textarea>
        </section>
        <section className={classes["buttons"]}>
          <button
            type="reset"
            className={classes["cancel-button"]}
            onClick={handlePromptClose}
          >
            Cancelar
          </button>
          <button
            type="button"
            className={classes["submit-button"]}
            onClick={handlePromptSend}
          >
            Enviar
          </button>
        </section>
      </form>
    </section>
  );
}
