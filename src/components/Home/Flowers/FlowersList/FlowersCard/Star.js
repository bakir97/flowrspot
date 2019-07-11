import React from "react";
import styles from "./FlowersCard.module.scss";
import star from "../../../../../assets/images/pl-icon-star.svg";
const Star = () => {
  return (
    <div className={styles.star_container}>
      <img className={styles.star} src={star} alt="star" />
    </div>
  );
};

export default Star;
