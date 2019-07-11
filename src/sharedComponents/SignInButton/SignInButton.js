import React from "react";
import styles from "./SignInButton.module.scss";
const SignInButton = ({ title, type, onClickFunction }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={() => onClickFunction && onClickFunction()}
    >
      {title}
    </button>
  );
};

export default SignInButton;
