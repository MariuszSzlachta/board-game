import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Header__title}>Board Game</h1>
      <p className={classes.Header__subtitle}>Enjoy your game!</p>
    </header>
  );
};

export default Header;