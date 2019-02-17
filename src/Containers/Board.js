import React, { Component } from 'react';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diceRoll: 0,
      diceCurrentRoll: null,
      diceResults: [],
      playerPosition: null,
      boardSize: 20,
      playerPrevPosition: null,
      playerTargetPosition: null
    }
  }
  onDiceRollHandler = () => {
    return Math.floor(Math.random(6)+1);
  }

  render() {
    return (
      <div className="Board">
        
      </div>
    );
  }
}

export default Board;