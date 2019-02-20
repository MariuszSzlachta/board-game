import React, { Component } from 'react';
import Board from '../Board/Board';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import classes from './App.module.scss';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
