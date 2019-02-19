import React from 'react';
import classes from './Field.module.scss';

import player from '../../assets/player.svg';

const Field = (props) => {
  const fill = props.playerOnField ? <img className={classes.Player} src={player} alt="player face" /> : props.number;

  const fieldClasses = [ classes.Field ];

  if (props.specialField){
    fieldClasses.push(classes.special)
  }
  if (props.start === true){
    fieldClasses.push(classes.start)
  }
  if (props.finish){
    fieldClasses.push(classes.finish)
  }

  return (
    <div className={fieldClasses.join(' ')} >
      {fill}
    </div>
  );
};

export default Field;