import React from 'react';
import classes from './Footer.module.scss';

const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <p className={classes.Footer__copy}>&copy; Mariusz Szlachta</p>
    </footer>
  );
};

export default Footer;