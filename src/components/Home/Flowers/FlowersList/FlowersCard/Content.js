import React from "react";
import styles from "./FlowersCard.module.scss";
const Content = ({ name, latin_name, sightings }) => {
  return (
    <div className={styles.content_container}>
      <h2 className={styles.main_text}>{name}</h2>
      <p className={styles.sub_text}> {latin_name}</p>
      <button className={styles.button_sightings}>
        {`${sightings} sightings`}
      </button>
    </div>
  );
};

export default Content;
