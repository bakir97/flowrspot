import React from "react";
import styles from "./CreateAccountButton.module.scss";

const CreateAccountButton = ({ openModal, showMenu, toggleMenu }) => {
  const triggerOpenModal = () => {
    window.document.body.style.overflow = "hidden";
    showMenu && toggleMenu();
    openModal("createAccount");
  };
  return (
    <button onClick={triggerOpenModal} className={styles.button}>
      New Account
    </button>
  );
};

export default CreateAccountButton;
