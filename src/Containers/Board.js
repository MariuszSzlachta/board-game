import React, { Component } from 'react';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfDiceRolls: 0,
      diceCurrentRoll: null,
      diceResults: [],
      playerPosition: 0,
      boardSize: 20,
      playerPrevPosition: null,
      playerTargetPosition: null,
      specialFields: [12, 19]
    }
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
      <div className="Board">
        
      </div>
    );
  }
}

export default Board;