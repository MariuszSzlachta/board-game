import React, { Component } from 'react';
import Field from '../../Components/Field/Field';

import classes from './Board.module.scss';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfDiceRolls: 0,
      diceCurrentRoll: null,
      diceResults: [],
      playerPosition: 10,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      boardSize: 20,
      playerPrevPosition: null,
      playerTargetPosition: null,
      specialFields: [12, 19]
    }
  }

  componentDidMount(){
    const board = [...this.state.board];
    let boards = [];
    let i = 1;

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

  onDiceRollHandler = () => {
    return Math.floor(Math.random(6)+1);
  }

  specialFieldChecker = targetField => {
    const specialField = this.state.specialFields.filter(field => field === targetField);

    if (specialField){
      switch (specialField) {
        case 19:
          return 11;
        case 12:
          return -1;
        default:
          return specialField;
      }
    } else {
      return targetField;
    }
  }

  onFindPlayerTargetPosition = () => {
    const playerPrevPosition = {...this.state.playerPrevPosition};
    const boardSize = {...this.state.boardSize};
    const diceResult = this.onDiceRollHandler();

    let playerTargetPosition = playerPrevPosition + diceResult;

    switch (true) {
      case playerTargetPosition > boardSize:
        playerTargetPosition = playerPrevPosition + ( playerTargetPosition - boardSize );
        break;

      case playerTargetPosition === boardSize:
        playerTargetPosition = boardSize;
        // foo winGame
        break;

      case playerTargetPosition < boardSize:
        playerTargetPosition = playerPrevPosition + diceResult;
        break;

      default:
      break;
    }

    playerTargetPosition = this.specialFieldChecker(playerTargetPosition);

    if (playerTargetPosition === -1) {
      this.onLoseGame();
    }
  }

  onPlayerMove = () => {

  }


  render() {

    return (
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
    );
  }
}

export default Board;