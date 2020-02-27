import React from 'react';
import classes from './Modal.module.scss';
const Modal = ({ children}) => {
  return (
    <div>
        <div className={classes.modalContent}>
          {children}
        </div>
    </div>
  )
}

export default Modal;
