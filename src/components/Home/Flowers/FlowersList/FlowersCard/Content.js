import React from "react";
import styles from "./FlowersCard.module.scss";
const Content = ({ name, latin_name, sightings, favorite }) => {
  return (
    <div className={styles.content_container}>
      <h2 className={styles.main_text}>{name}</h2>
      <p className={styles.sub_text}> {latin_name}</p>
      <button
        className={
          favorite ? styles.button_sightings_fav : styles.button_sightings
        }
      >
        {`${sightings} sightings`}
      </button>
    </div>
  );
};

export default Content;
