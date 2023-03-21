import { useEffect, useState } from "react";
import { sendContactData } from "../../../helpers/contactUtil";
import classes from "./styles.module.css";
import Notification from "../../ui/Notification";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [status, setStatus] = useState();
  const [requestError, setRequestError] = useState();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setStatus("success");
    } catch (error) {
      setRequestError(error.message);
      setStatus("error");
    }
  };

  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is being sent now",
    };
  }
  if (status === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={({ target }) => setEnteredEmail(target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={({ target }) => setEnteredName(target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={({ target }) => setEnteredMessage(target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
