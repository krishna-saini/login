import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="submit" onClick={props.onClick}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  //Hadnling escape key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      props.onClick();
    }
  });

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("modalOverlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
