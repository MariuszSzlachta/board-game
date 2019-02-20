import React from 'react';
import classes from './Field.module.scss';

import player from '../../assets/player.svg';

const Field = (props) => {
  const fieldClasses = [ classes.Field ];
  let fill = props.number;

  if (props.specialField){
    fieldClasses.push(classes.special)
  }
  if (props.start === true){
    fieldClasses.push(classes.start)
    fill = 'start';
  }
  if (props.finish){
    fieldClasses.push(classes.finish)
    fill = 'finish'
  }

  let imgStyle = {
    opacity: props.playerOnField ? '1' : '0'
  }

  return (
    <div className={fieldClasses.join(' ')} >
      <span
        className={classes.Field__number}
      >
        {fill}
      </span>
      <img
        className={classes.Player}
        src={player}
        alt="player face"
        style={imgStyle}
      />
    </div>
  );
};

export default Field;