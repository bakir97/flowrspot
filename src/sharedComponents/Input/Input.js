import React from "react";
import styles from "./Input.module.scss";
const Input = ({ onChange, full, title, value, name, type }) => {
  return (
    <div className={full ? styles.container_full : styles.container}>
      <label className={styles.label}>{title}</label>
      <input
        onChange={onChange}
        className={styles.input}
        placeholder={title}
        value={value}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
