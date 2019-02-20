import React, { Component } from 'react';
import Field from '../../Components/Field/Field';
import Controls from '../../Components/Controls/Controls';
import Dice from '../Dice/Dice';
import Modal from '../../Components/Modal/Modal';

import win from '../../assets/win.mp3';
import lose from '../../assets/lose.mp3';

import classes from './Board.module.scss';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfDiceRolls: 0,
      diceResults: [],
      playerPosition: 0,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      boardSize: 20,
      specialFields: [12, 19],
      avgRoll: 0,
      gameResult: null,
      resultShown: false
    }

  }

  componentDidMount(){
    // prepares board layout
    const board = [...this.state.board];
    let boards = [];

    // splice into equals subarrays
    while(board.length) {
        boards.push(board.splice(0, 5));
    }
    // reverse odd rows
    let finalBoard = boards.map((el, index) => index % 2 !== 0 ? el.reverse() : el);
    finalBoard = finalBoard.flat();
    this.setState({
      board: finalBoard
    })
  }

  specialFieldChecker = targetField => {

    const specialField = this.state.specialFields.filter(field => field === targetField);

    if (specialField.length){
      switch (specialField[0]) {
        case 19:
          return 11;
        case 12:
          return 12;
        default:
          return specialField;
      }
    } else {
      return targetField;
    }
  }

  onPlayerMove = () => {
    
    const { boardSize } = this.state;
    let { playerPosition } = this.state;
    const diceResult = this.refs.dice.onDiceRoll();
    const diceResults = [...this.state.diceResults];
    let { numberOfDiceRolls } = this.state;
    numberOfDiceRolls++;
    diceResults.push(diceResult);

    const resultsSum = diceResults.reduce((previousValue, currentValue, index, array) => previousValue + currentValue);
    const avgRoll = (resultsSum / numberOfDiceRolls).toFixed(1);
    let playerTargetPosition = playerPosition + diceResult;

    if (playerPosition === 20){
      playerTargetPosition = 20;
    }

    switch (true) {
      case playerTargetPosition > boardSize:
        playerPosition = boardSize - (diceResult - ( boardSize - playerPosition ) )
        break;

      case playerPosition === boardSize:
        playerPosition = boardSize;
        break;

      case playerPosition < boardSize:
        playerPosition = playerPosition + diceResult;
        break;

      default:
        break;
    }

    playerPosition = this.specialFieldChecker(playerPosition);

    if (playerPosition === 12){
      this.onShowResultHandler('lose')
      const failSong = new Audio();
      failSong.src = lose;
      failSong.play();
    }
    if (playerPosition === 20){
      this.onShowResultHandler('win')
      const victorySong = new Audio()
      victorySong.src = win;
      victorySong.play()
    }

    this.setState({
      playerPosition,
      numberOfDiceRolls,
      diceResults,
      avgRoll,
    })
  }

  onShowResultHandler = (result) => {

    this.setState({
      gameResult: result,
      resultShown: true
    })
  }

  onHideModal = () => {
    this.setState({
      resultShown: false
    })
  }

  onNewGameHandler = () => {
    this.refs.dice.clearState();
    this.setState({
      numberOfDiceRolls: 0,
      diceResults: [],
      playerPosition: 0,
      specialFields: [12, 19],
      avgRoll: 0,
      gameResult: null,
      resultShown: false
    })
  }

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Board}>
          { this.state.board.map((field, index) => (
            <Field
              key={field}
              number={field}
              playerOnField={this.state.playerPosition === field}
              specialField={this.state.specialFields.includes(field)}
              start={field === 1 || false}
              finish={field === 20 || false}
            />
            )
          )}
        </div>
        <div className={classes.Board__panel}>
          <Controls
            roll={this.onPlayerMove}
            newGame={this.onNewGameHandler}
            endGame={this.state.gameResult}
          />
          <Dice ref="dice" />
        </div>
        <Modal
          modalShow={this.state.resultShown}
          rollsCount={this.state.numberOfDiceRolls}
          avg={this.state.avgRoll}
          onClose={this.onHideModal}
          gameResult={this.state.gameResult}
        />
      </div>
    );
  }
}

export default Board;