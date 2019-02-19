import React from 'react';
import classes from './Controls.module.scss';

const Controls = (props) => {
  return (
    <ul className={classes.Controls}>
      <li className={classes.Controls__item}>
        <button
          className={classes.Controls__btn}
          onClick={props.roll}
          disabled={props.endGame}
        >
          Roll
        </button>
      </li>
    </ul>
  );
};

export default Controls;