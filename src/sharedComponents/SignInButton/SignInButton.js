import React from "react";
import styles from "./SignInButton.module.scss";
const SignInButton = ({ title, type, onClickFunction, buttonStyle }) => {
  return (
    <button
      className={styles[buttonStyle ? buttonStyle : "button"]}
      type={type}
      onClick={() => onClickFunction && onClickFunction()}
    >
      {title}
    </button>
  );
};

export default SignInButton;
