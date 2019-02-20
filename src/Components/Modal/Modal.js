import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.scss';

const Modal = props => {
  let header = `Congratulations, you win!`;
  let message = `You have win in ${props.rollsCount} rolls and your avarage roll was ${props.avg}`;

  if (!props.modalShow){
    header = '';
    message = '';
  }

  return (
    <React.Fragment>
      <Backdrop show={props.modalShow} onClose={props.onClose} />
      <div
        className={classes.Modal}
        style={{
          transform: props.modalShow ? 'translate3d(-50%, 30%, 0)' : 'translate3d(-50%, -100vh, 0)',
          opacity: props.modalShow ? '1' : '0'
        }}
      >
        <button className={classes.Modal__btn} onClick={props.onClose}>x</button>
        <h2 className={classes.Modal__header}>{header}</h2>
        <p className={classes.Modal__message}>{message}</p>
      </div>
    </React.Fragment>
  );
};

export default Modal;