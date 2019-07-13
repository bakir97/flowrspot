import React from "react";
import Input from "../../Input";
import styles from "./SignInForm.module.scss";
const FormFields = ({
  first_name,
  last_name,
  date_of_birth,
  email,
  password,
  onChange,
  modalType
}) => {
  const renderInput = (value, title, name, type, full) => (
    <Input
      title={title}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      full={full}
    />
  );
  if (modalType === "login") {
    return (
      <>
        {renderInput(email, "Email Address", "email", "email", true)}
        {renderInput(password, "Password", "password", "password", true)}
      </>
    );
  }
  return (
    <>
      <div className={styles.row_inputs_container}>
        {renderInput(first_name, "First Name", "first_name", "text")}
        {renderInput(last_name, "Last Name", "last_name", "text")}
      </div>
      {renderInput(
        date_of_birth,
        "Date of Birth",
        "date_of_birth",
        "date",
        true
      )}
      {renderInput(email, "Email Address", "email", "email", true)}
      {renderInput(password, "Password", "password", "password", true)}
    </>
  );
};

export default FormFields;
