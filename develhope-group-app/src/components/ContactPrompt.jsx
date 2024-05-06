import { useRef, useState } from "react";
import classes from "../Styles/ContactPrompt.module.scss";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import emailjs from '@emailjs/browser';

ContactPrompt.propTypes = {
  nameInput: PropTypes.string,
  emailInput: PropTypes.string,
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
  };

  const [formData, setFormData] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handlePromptSend = async (event) => {
    event.preventDefault();
    setIsSent(true);

    const newFormData = {
      id: uuidv4(),
      formName: formName,
      formEmail: formEmail,
      messageInput: messageInput,
      formDate: new Date().toLocaleDateString(),
    };

    try {
      const updatedFormData = [...formData, newFormData];
      setFormData(updatedFormData);
      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    } catch (error) {
      console.error("Error storing form data:", error);
    }

    emailjs
      .sendForm('service_o1z5ae4', 'template_9t7i90n', formRef.current, {
        publicKey: '20JS_vGzAR3qUxTjq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
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
      console.log("Client message sent!");
      completionTextElement.style.display = "block";
      completedPrompt.style.display = "none";
      setTimeout(() => {
        canceledPrompt.style.display = "none";
      }, 3000);
    }
  }, [isSent]);

  const handlePromptClose = (event) => {
    event.preventDefault();

    const canceledPrompt = document.querySelector(
      `.${classes["contact-panel"]}`
    );

    canceledPrompt.style.display = "none";
  };

  return (
    <section className={classes["contact-panel"]}>
      <h1 className={classes["prompt-completed-text"]}>
        Gracias por contactar con nostros. <br />
        Te responderemos con la mayor brevedad.
      </h1>
      <form ref={formRef} className={classes["contact-prompt"]}>
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
                name="user_name"
                className={classes["enter-username"]}
                placeholder="Nombre & Apellido"
                onChange={handleNameInput}
                value={formName}
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
                type="email"
                name="user_email"
                className={classes["enter-email-address"]}
                placeholder="correo@mail.com"
                onChange={handleEmailInput}
                value={formEmail}
                required
              ></input>
            </div>
          </div>
        </section>
        <section className={classes["comments"]}>
          <textarea
            type="text"
            name="message"
            className={classes["add-your-comments"]}
            placeholder="Añadir comentario..."
            onChange={handleMessageInput}
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
