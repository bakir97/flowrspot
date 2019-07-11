import React, { Component } from "react";
import Modal from "../Modal";
import styles from "./CreateAccount.module.scss";
import Input from "../Input";
import SignInButton from "../SignInButton";
import Loader from "../Loader";

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
    if (
      prevProps.modalType === "createAccount" &&
      this.props.modalType !== "createAccount"
    ) {
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
  renderInput = (value, title, name, type, full) => (
    <Input
      title={title}
      value={value}
      name={name}
      onChange={this.onChange}
      type={type}
      full={full}
    />
  );
  onSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };
  renderErrors = () =>
    this.props.errors.map(errorMessage => (
      <p className={styles.error_text} key={errorMessage}>
        {errorMessage}
      </p>
    ));
  render() {
    const {
      first_name,
      last_name,
      date_of_birth,
      email,
      password
    } = this.state;
    const { loading, user, openModal, errors } = this.props;
    if (user) {
      return (
        <Modal type="createAccount">
          <div className={styles.success_container}>
            <p className={styles.success_text}>
              Congratulations! You have successfully signed up for FlowrSpot!
            </p>
            <SignInButton
              title="OK"
              type="submit"
              onClickFunction={() => openModal("login")}
            />
          </div>
        </Modal>
      );
    }
    if (loading) {
      return (
        <Modal type="createAccount" modalText="I don’t want to register">
          <Loader />
        </Modal>
      );
    }
    return (
      <Modal type="createAccount" modalText="I don’t want to register">
        <form className={styles.form} onSubmit={this.onSubmit}>
          <p className={styles.title}>Create an Account</p>
          <div className={styles.row_inputs_container}>
            {this.renderInput(first_name, "First Name", "first_name", "text")}
            {this.renderInput(last_name, "Last Name", "last_name", "text")}
          </div>
          {this.renderInput(
            date_of_birth,
            "Date of Birth",
            "date_of_birth",
            "date",
            true
          )}
          {this.renderInput(email, "Email Address", "email", "email", true)}
          {this.renderInput(password, "Password", "password", "password", true)}
          {errors.length > 0 && this.renderErrors()}
          <SignInButton title="Create Account" type="submit" />
        </form>
      </Modal>
    );
  }
}
