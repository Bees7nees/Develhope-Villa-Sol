import { useState } from "react";
import classes from "../Styles/ContactFooterVariant.module.scss";
import { ContactPrompt } from "./ContactPrompt";

export function ContactFooterVariant() {
  const [promptVisibility, setPromptVisibility] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleShowPrompt = (event) => {
    event.preventDefault();
    promptVisibility === false
      ? setPromptVisibility(true)
      : setPromptVisibility(false);
  };

  const handleClosePrompt = (event) => {
    event.preventDefault();
    setPromptVisibility(false);
  };

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
    console.log(nameInput);
  };

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
    console.log(emailInput);
  };

  return (
    <>
      {promptVisibility === true && (
        <>
          <div
            className={classes["contact-panel-background"]}
            onClick={handleClosePrompt}
          ></div>
          <ContactPrompt nameInput={nameInput} emailInput={emailInput} />
        </>
      )}
      <div className={classes["contact-footer-variant"]}>
        <section className={classes["header-section"]}>
          <h1 className={classes["title"]}>Contacto</h1>
          <p className={classes["description"]}>
            Queremos seguir mejorando, y tu opinión es muy importante.
          </p>
        </section>
        <form className={classes["form"]} action="submit">
          <section className={classes["input-section"]}>
            <div className={classes["user-content"]}>
              <div className={classes["user"]}>
                <svg
                  className={classes["supervisor-account"]}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.4375 12.2949C11.3675 12.2949 12.9375 10.7249 12.9375 8.79492C12.9375 6.86492 11.3675 5.29492 9.4375 5.29492C7.5075 5.29492 5.9375 6.86492 5.9375 8.79492C5.9375 10.7249 7.5075 12.2949 9.4375 12.2949ZM9.4375 7.29492C10.2675 7.29492 10.9375 7.96492 10.9375 8.79492C10.9375 9.62492 10.2675 10.2949 9.4375 10.2949C8.6075 10.2949 7.9375 9.62492 7.9375 8.79492C7.9375 7.96492 8.6075 7.29492 9.4375 7.29492ZM9.4875 17.2949H5.2075C6.1975 16.7949 7.9075 16.2949 9.4375 16.2949C9.5475 16.2949 9.6675 16.3049 9.7775 16.3049C10.1175 15.5749 10.7075 14.9749 11.4175 14.4949C10.6875 14.3649 9.9975 14.2949 9.4375 14.2949C7.0975 14.2949 2.4375 15.4649 2.4375 17.7949V19.2949H9.4375V17.7949C9.4375 17.6249 9.4575 17.4549 9.4875 17.2949ZM16.9375 14.7949C15.0975 14.7949 11.4375 15.8049 11.4375 17.7949V19.2949H22.4375V17.7949C22.4375 15.8049 18.7775 14.7949 16.9375 14.7949ZM18.1475 12.9749C18.9075 12.5449 19.4375 11.7349 19.4375 10.7949C19.4375 9.41492 18.3175 8.29492 16.9375 8.29492C15.5575 8.29492 14.4375 9.41492 14.4375 10.7949C14.4375 11.7349 14.9675 12.5449 15.7275 12.9749C16.0875 13.1749 16.4975 13.2949 16.9375 13.2949C17.3775 13.2949 17.7875 13.1749 18.1475 12.9749Z"
                    fill="#8AA8C4"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="nombre"
                className={classes["placeholder"]}
                placeholder="Nombre"
                onChange={handleNameInput}
              ></input>
            </div>
            <div className={classes["mail-content"]}>
              <div className={classes["email"]}>
                <svg
                  className={classes["mail"]}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0625 6.29492C22.0625 5.19492 21.1625 4.29492 20.0625 4.29492H4.0625C2.9625 4.29492 2.0625 5.19492 2.0625 6.29492V18.2949C2.0625 19.3949 2.9625 20.2949 4.0625 20.2949H20.0625C21.1625 20.2949 22.0625 19.3949 22.0625 18.2949V6.29492ZM20.0625 6.29492L12.0625 11.2849L4.0625 6.29492H20.0625ZM20.0625 18.2949H4.0625V8.29492L12.0625 13.2949L20.0625 8.29492V18.2949Z"
                    fill="#8AA8C4"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="correo"
                className={classes["placeholder"]}
                placeholder="Correo"
                onChange={handleEmailInput}
              ></input>
            </div>
          </section>
          <section className={classes["submit-button"]}>
            <button
              type="submit"
              className={classes["write-message"]}
              onClick={handleShowPrompt}
            >
              Escribir mensaje
            </button>
          </section>
        </form>
      </div>
    </>
  );
}
