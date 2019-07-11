import React from "react";
import styles from "./Modal.module.scss";
const Modal = ({ children, type, modalType, closeModal, modalText }) => {
  const handleClose = () => {
    closeModal();
    window.document.body.style.overflow = "auto";
  };
  if (type === modalType) {
    return (
      <div onClick={handleClose} className={styles.modal_background}>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={styles.modal}
        >
          {children}
        </div>
        <p onClick={handleClose} className={styles.modal_text}>
          {modalText}
        </p>
      </div>
    );
  }
  return null;
};

export default Modal;
