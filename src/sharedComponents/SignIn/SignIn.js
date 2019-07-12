import React, { Component } from "react";
import Modal from "../Modal";
import styles from "./SignIn.module.scss";
import SignInButton from "../SignInButton";
import FormFields from "./FormFields";
import Loader from "../Loader";
import Profile from "./Profile";
export default class CreateAccount extends Component {
  state = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.modalType !== this.props.modalType) {
      this.props.errorUser([]);
      this.setState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        email: "",
        password: ""
      });
    }
  }

  onSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    if (this.props.modalType === "login") {
      return this.props.loginUser({ email, password });
    }
    this.props.registerUser(this.state);
  };
  renderErrors = () =>
    this.props.errors.map(errorMessage => (
      <p className={styles.error_text} key={errorMessage}>
        {errorMessage}
      </p>
    ));
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
      errors,
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
              Congratulations! You have successfully signed up for FlowrSpot!
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
    return (
      <Modal
        modalText={
          isLogin ? "I don’t want to Login" : "I don’t want to register"
        }
      >
        <form className={styles.form} onSubmit={this.onSubmit}>
          <p className={styles.title}>
            {isLogin ? "Welcome Back" : "Create an Account"}
          </p>
          <FormFields
            {...this.state}
            onChange={this.onChange}
            modalType={modalType}
          />

          {errors.length > 0 && this.renderErrors()}
          <SignInButton
            title={isLogin ? "Login to your Account" : "Create Account"}
            type="submit"
          />
        </form>
      </Modal>
    );
  }
}
