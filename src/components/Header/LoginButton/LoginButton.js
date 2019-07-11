import React from "react";
import styles from "./LoginButton.module.scss";
const LoginButton = ({ openModal }) => {
  const triggerOpenModal = () => {
    openModal("login");
  };
  return (
    <button onClick={triggerOpenModal} className={styles.login}>
      Login
    </button>
  );
};

export default LoginButton;
