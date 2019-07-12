import React from "react";
import styles from "./FlowersCard.module.scss";
import star from "../../../../../assets/images/pl-icon-star.svg";
import starWhite from "../../../../../assets/images/pl-icon-star-white.svg";

const Star = ({ addFavFlower, id, favorite }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClick = () => {
    if (favorite) {
      return null;
    }
    addFavFlower(id, user.auth_token);
  };
  return (
    <div
      onClick={handleClick}
      className={favorite ? styles.star_container_fav : styles.star_container}
    >
      <img
        className={styles.star}
        src={favorite ? starWhite : star}
        alt="star"
      />
    </div>
  );
};

export default Star;
