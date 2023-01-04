import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";


import styles from "./modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, children }) => {

    const handleClose = (e) => {
        if (e.target === e.currentTarget || e.code === "Escape") {
            closeModal();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleClose);

        return () => document.removeEventListener("keydown", handleClose)
    });

    return createPortal(
        (<div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal}>
                {/* <span onClick={closeModal} className={styles.close}>x
                </span> */}
                {children}
            </div>
        </div>
        ),
        modalRoot
    )
}

// Modal.defaultProps = {
//     array:[],
// }
Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
