import React, { Component } from "react";
import FormFields from "./FormFields";
import Modal from "../../Modal";
import SignInButton from "../../SignInButton";
import styles from "./SignInForm.module.scss";
export default class SignInForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    password: ""
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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
  render() {
    const { errors, modalType } = this.props;
    const isLogin = modalType === "login" ? true : false;

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
