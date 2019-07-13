import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.scss";
const NavLinks = ({ closeModal, toggleMenu, showMenu }) => {
  const handleClick = () => {
    window.document.body.style.overflow = "auto";
    closeModal();
    showMenu && toggleMenu();
  };
  return (
    <div className={styles.links}>
      <NavLink onClick={handleClick} className={styles.link} to="/">
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
