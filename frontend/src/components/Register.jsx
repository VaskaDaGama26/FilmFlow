import React, { useState } from 'react';
import classes from '../css-modules/Register.module.scss'
import Button from '../assets/Button'


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle registration logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Password Confirmation:', passwordConfirm);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Register</h1>
            <form className={classes.register__form} onSubmit={handleSubmit}>
                <div className={classes.form__group}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <p className="help-text">Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</p>
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
                    <ul className="help-text">
                        <li>Your password can’t be too similar to your other personal information.</li>
                        <li>Your password must contain at least 8 characters.</li>
                        <li>Your password can’t be a commonly used password.</li>
                        <li>Your password can’t be entirely numeric.</li>
                    </ul>
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="passwordConfirm">Password confirmation:</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                    <p className="help-text">Enter the same password as before, for verification.</p>
                </div>
                <a className={classes.register__link} href="/login/">Do you already have an account? Login!</a>
                <Button label='Register' type='submit' />
            </form>
        </div>
    );
};

export default Register;
