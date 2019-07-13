import React from "react";
import hamburger from "../../../assets/images/mm-hamburger.svg";
import styles from "./MobileNav.module.scss";

const MobileNav = ({ toggleMenu }) => {
  return (
    <div className={styles.container}>
      <img src={hamburger} onClick={toggleMenu} alt="hamburger" />
    </div>
  );
};

export default MobileNav;
