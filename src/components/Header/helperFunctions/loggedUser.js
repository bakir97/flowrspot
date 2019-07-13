import React from "react";
import CreateAccountButton from "../CreateAccountButton";
import LoggedIn from "../LoggedIn";
import LoginButton from "../LoginButton";
export default (user, openModal, showMenu, toggleMenu) => {
  if (user) {
    return (
      <LoggedIn
        user={user}
        openModal={openModal}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />
    );
  }
  return (
    <>
      <LoginButton
        showMenu={showMenu}
        openModal={openModal}
        toggleMenu={showMenu && toggleMenu}
      />
      <CreateAccountButton
        showMenu={showMenu}
        openModal={openModal}
        toggleMenu={showMenu && toggleMenu}
      />
    </>
  );
};
