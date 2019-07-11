import React from "react";
import styles from "./Loader.module.scss";
import loaderIcon from "../../assets/images/loader.svg";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <img src={loaderIcon} className={styles.loader} alt="loader" />
    </div>
  );
};

export default Loader;
