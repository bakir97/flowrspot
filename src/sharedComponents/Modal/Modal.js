import React from "react";
import styles from "./Modal.module.scss";
const Modal = ({
  children,
  modalType,
  closeModal,
  modalText,
  close,
  bigger
}) => {
  const handleClose = () => {
    closeModal();
    window.document.body.style.overflow = "auto";
  };
  if (modalType) {
    return (
      <div onClick={handleClose} className={styles.modal_background}>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={bigger ? styles.modal_profile : styles.modal}
        >
          {close && (
            <p onClick={handleClose} className={styles.close}>
              &#10005;
            </p>
          )}
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
