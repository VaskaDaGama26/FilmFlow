import React, { useState } from 'react';
import Button from '../assets/Button'
import classes from '../css-modules/Login.module.scss'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Log in</h1>
            <form className={classes.login__form} onSubmit={handleSubmit}>
          <div className={classes.form__group}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={classes.form__group}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a className={classes.register__link} href="/register/">Still don't have an account? Register!</a>
          <Button label='Log in' type='submit' />
        </form>
        </div>
        
      );
}

export default Login