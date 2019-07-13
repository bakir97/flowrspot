import React from "react";
import profileHolder from "../../../assets/images/menu-profile-holder.png";
import profileHolder2x from "../../../assets/images/menu-profile-holder@2x.png";
import profileHolder3x from "../../../assets/images/menu-profile-holder@3x.png";
import styles from "./LoggedIn.module.scss";
const LoggedIn = ({
  user: { first_name, last_name },
  openModal,
  toggleMenu,
  showMenu
}) => {
  const handleOpenModal = () => {
    window.document.body.style.overflow = "hidden";
    showMenu && toggleMenu();

    openModal("profile");
  };
  return (
    <div onClick={handleOpenModal} className={styles.container}>
      <p className={styles.text}> {`${first_name} ${last_name}`}</p>
      <img
        src={profileHolder}
        srcSet={`${profileHolder2x} 2x,${profileHolder3x} 3x`}
        alt="profile"
      />
    </div>
  );
};

export default LoggedIn;
