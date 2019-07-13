import React, { Component } from "react";
import Modal from "../Modal";
import styles from "./UserModal.module.scss";
import SignInButton from "../SignInButton";
import Loader from "../Loader";
import Profile from "./Profile";
import SignInForm from "./SignInForm";
export default class CreateAccount extends Component {
  handleOkButton = () => {
    const { openModal, closeModal, modalType } = this.props;
    if (modalType === "login") {
      window.document.body.style.overflow = "auto";
      return closeModal();
    }
    return openModal("login");
  };
  handleProfileButton = () => {
    const { openModal } = this.props;

    return openModal("profile");
  };
  render() {
    const {
      loading,
      isUserSuccess,
      modalType,
      user,
      logout,
      closeModal
    } = this.props;
    const isLogin = modalType === "login" ? true : false;

    if (modalType === "profile") {
      return <Profile user={user} logout={logout} closeModal={closeModal} />;
    }
    if (isUserSuccess) {
      return (
        <Modal>
          <div className={styles.success_container}>
            <p className={styles.success_text}>
              {isLogin
                ? "Congratulations! You have successfully logged into FlowrSpot!"
                : "Congratulations! You have successfully signed up for FlowrSpot!"}
            </p>
            <SignInButton
              title="OK"
              type="submit"
              onClickFunction={this.handleOkButton}
              buttonStyle={isLogin ? "button_margin" : false}
            />
            {isLogin && (
              <SignInButton
                title="Profile"
                onClickFunction={this.handleProfileButton}
              />
            )}
          </div>
        </Modal>
      );
    }
    if (loading) {
      return (
        <Modal
          modalText={
            isLogin ? "I don’t want to Login" : "I don’t want to register"
          }
        >
          <Loader />
        </Modal>
      );
    }
    return <SignInForm {...this.props} />;
  }
}
