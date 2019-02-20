import React from 'react';
import classes from './Field.module.scss';

import player from '../../assets/player.svg';

const Field = (props) => {
  let fill = props.playerOnField ? <img className={classes.Player} src={player} alt="player face" /> : props.number;

  const fieldClasses = [ classes.Field ];

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

  return (
    <div className={fieldClasses.join(' ')} >
      {fill}
    </div>
  );
};

export default Field;