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
  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const isMobile = w <= 760 ? true : false;
  if (modalType) {
    return (
      <div onClick={handleClose} className={styles.modal_background}>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={bigger ? styles.modal_profile : styles.modal}
        >
          {close && !isMobile && (
            <div className={styles.close_container}>
              <p onClick={handleClose} className={styles.close}>
                &#10005;
              </p>
            </div>
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
