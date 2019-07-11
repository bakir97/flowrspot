import React from "react";
import styles from "./HeroText.module.scss";
const HeroText = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.main_text}>Discover flowers around you</h1>
      <p className={styles.sub_text}>
        Explore between more than 8.427 sightings
      </p>
    </div>
  );
};

export default HeroText;
