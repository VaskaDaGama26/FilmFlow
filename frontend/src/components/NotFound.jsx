import React from 'react';
import { Link } from 'react-router-dom'
import classes from '../css-modules/NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={classes.not__found}>
      <h1 className={classes.header}>404</h1>
      <p className={classes.text}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className={classes.home__link}>Go back to Home</Link>
    </div>
  );
};

export default NotFound;
