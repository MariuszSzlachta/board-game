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
          Roll dice
        </button>
      </li>
      <li className={classes.Controls__item}>
        <button
          className={classes.Controls__btn}
          onClick={props.newGame}
          // disabled={props.endGame}
        >
          Play again
        </button>
      </li>
    </ul>
  );
};

export default Controls;