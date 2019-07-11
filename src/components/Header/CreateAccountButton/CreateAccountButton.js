import React from "react";
import styles from "./CreateAccountButton.module.scss";

const CreateAccountButton = ({ openModal }) => {
  const triggerOpenModal = () => {
    window.document.body.style.overflow = "hidden";
    openModal("createAccount");
  };
  return (
    <button onClick={triggerOpenModal} className={styles.button}>
      New Account
    </button>
  );
};

export default CreateAccountButton;
