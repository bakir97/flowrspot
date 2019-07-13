import React from "react";
import Modal from "../../Modal";
import profileHolder from "../../../assets/images/profile-holder.png";
import profileHolder2x from "../../../assets/images/profile-holder@2x.png";
import profileHolder3x from "../../../assets/images/profile-holder@3x.png";
import SignInButton from "../../SignInButton";
import styles from "./Profile.module.scss";
const Profile = ({
  user: { first_name, last_name, email },
  logout,
  closeModal
}) => {
  const handleLogout = () => {
    window.document.body.style.overflow = "auto";
    logout();
    closeModal();
  };
  return (
    <Modal bigger close>
      <div className={styles.container}>
        <div className={styles.row}>
          <img
            src={profileHolder}
            srcSet={`${profileHolder2x} 2x,${profileHolder3x} 3x`}
            alt="profile"
          />
          <div className={styles.title_container}>
            <h2 className={styles.title}>{`${first_name} ${last_name}`}</h2>
            <p className={styles.sub_title}>47 sightings</p>
          </div>
        </div>
        <div>
          <p className={styles.information_title}>First Name</p>
          <p className={styles.information_value}>{first_name}</p>
        </div>
        <div>
          <p className={styles.information_title}>Last Name</p>
          <p className={styles.information_value}>{last_name}</p>
        </div>
        <div>
          <p className={styles.information_title}>Email</p>
          <p className={styles.information_value}>{email}</p>
        </div>
        <SignInButton
          buttonStyle="button_profile"
          title="Logout"
          onClickFunction={handleLogout}
        />
      </div>
    </Modal>
  );
};

export default Profile;
