import React from "react";
//Components
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
import LoggedIn from "./LoggedIn";
//
import styles from "./Header.module.scss";

const Header = ({ openModal, user }) => {
  const loggedUser = () => {
    if (user) {
      return <LoggedIn user={user} openModal={openModal} />;
    }
    return (
      <>
        <LoginButton openModal={openModal} />
        <CreateAccountButton openModal={openModal} />{" "}
      </>
    );
  };
  return (
    <div className={styles.container}>
      <Logo />
      <NavLinks />
      {loggedUser()}
    </div>
  );
};

export default Header;
