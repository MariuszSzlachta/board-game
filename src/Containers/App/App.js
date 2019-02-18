import React, { Component } from 'react';
import Board from '../Board/Board';
import classes from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Board />
      </div>
    );
  }
}

export default App;
