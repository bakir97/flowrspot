import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.scss";
const NavLinks = () => {
  return (
    <div className={styles.links}>
      <NavLink className={styles.link} to="/">
        Flowers
      </NavLink>
      <NavLink className={styles.link} to="/">
        Latest Sightings
      </NavLink>
      <NavLink className={styles.link} to="/">
        Favorites
      </NavLink>
    </div>
  );
};

export default NavLinks;
