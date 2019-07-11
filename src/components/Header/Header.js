import React from "react";
//Components
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
//
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <NavLinks />
      <LoginButton />
      <CreateAccountButton />
    </div>
  );
};

export default Header;
