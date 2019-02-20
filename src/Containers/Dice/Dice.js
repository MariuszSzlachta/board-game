import React, { Component } from 'react';
import classes from './Dice.module.scss';

import dice from '../../assets/dice.mp3';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollX: 0,
      rollY: 0
    }
  }

  onDiceRoll = (e) => {
    const diceEffect = new Audio();
    diceEffect.src = dice;
    diceEffect.play();

    let rollX, rollY = 0;

    let res = Math.floor(Math.random() * 6+1);
    switch (res) {
      case 1:
        rollX = 720;
        rollY = 720;
        break;
      case 2:
        rollX = 540;
        rollY = 1440;
        break;
      case 3:
        rollX = 720;
        rollY = -450;
        break;
      case 4:
        rollX = 810;
        rollY = 720;
      break;
      case 5:
        rollX = 270;
        rollY = 360;
      break;
      case 6:
        rollX = 810;
        rollY = 360;
        break;
      default:
        break;
    }

    this.setState({
      rollX,
      rollY
    })

    return res;
  }

  clearState = () => {
    this.setState({
      rollX: 0,
      rollY: 0
    })
  }

  render(){
    const style = {
      transform: `rotateX( ${this.state.rollX}deg ) rotateY( ${this.state.rollY}deg )`
    }

    return (
      <div className={classes.Container}>
        <div className={classes.Dice} style={style}>
          <div className={classes.Dice__front}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
          </div>
          <div className={classes.Dice__back}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot2].join(' ')} />
          </div>
          <div className={classes.Dice__right}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot2].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot3].join(' ')} />
          </div>
          <div className={classes.Dice__left}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot2].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot3].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot4].join(' ')} />
          </div>
          <div className={classes.Dice__top}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot2].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot3].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot4].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot5].join(' ')} />
          </div>
          <div className={classes.Dice__bottom}>
            <span className={[classes.Dice__dot, classes.Dice__dot1].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot2].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot3].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot4].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot5].join(' ')} />
            <span className={[classes.Dice__dot, classes.Dice__dot6].join(' ')} />
          </div>
        </div>
      </div>
    );
  }
};

export default Dice;
