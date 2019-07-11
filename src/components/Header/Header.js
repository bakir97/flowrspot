import React from "react";
//Components
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
//
import styles from "./Header.module.scss";

const Header = ({ openModal }) => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavLinks />
      <LoginButton openModal={openModal} />
      <CreateAccountButton openModal={openModal} />
    </div>
  );
};

export default Header;
